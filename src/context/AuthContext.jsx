import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userRole, setUserRole] = useState(null); // 'admin' | 'editor' | null
    const [isDemo, setIsDemo] = useState(false);
    const [loading, setLoading] = useState(true);

    async function login(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Fetch role from Firestore
            // Assumes a 'users' collection with document ID matching the UID
            const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));

            if (userDoc.exists()) {
                const userData = userDoc.data();
                setUserRole(userData.role);
                toast.success(`Welcome back, ${userData.role}!`);
            } else {
                // Fallback for initial setup (remove in production)
                // If no user doc exists, treat as 'no specific role' or handle strictly
                console.warn("No user profile found. Defaulting to restricted access.");
                setUserRole(null);
            }
            return userCredential;
        } catch (error) {
            console.warn("Firebase Login failed. Falling back to Demo Mode.", error);
            // Always fallback to Demo Mode if real Auth fails (for this stage of development)
            const isEditor = email.toLowerCase().includes('editor');
            const role = isEditor ? 'editor' : 'admin';

            setCurrentUser({ uid: `demo-${role}`, email: email });
            setUserRole(role);
            setIsDemo(true);
            toast.success(`Entered Demo Mode (${role.charAt(0).toUpperCase() + role.slice(1)})`);
            return { user: { uid: `demo-${role}`, email: email } };
        }
    }

    function logout() {
        if (isDemo) {
            setCurrentUser(null);
            setUserRole(null);
            setIsDemo(false);
            toast.success("Logged out (Demo)");
            return Promise.resolve();
        }
        return signOut(auth).then(() => {
            setUserRole(null);
            toast.success("Logged out successfully");
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            // If we are in demo mode, ignore firebase updates (which would be null)
            if (isDemo) return;

            setCurrentUser(user);
            if (user) {
                try {
                    const userDoc = await getDoc(doc(db, 'users', user.uid));
                    if (userDoc.exists()) {
                        setUserRole(userDoc.data().role);
                    }
                } catch (err) {
                    console.error("Error fetching user role:", err);
                }
            } else {
                setUserRole(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        userRole,
        login,
        logout,
        isAdmin: userRole === 'admin',
        isEditor: userRole === 'editor' || userRole === 'admin' // Admins are also editors
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
