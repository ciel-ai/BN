import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactPopup from './ContactPopup'

const PublicLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ContactPopup />
        </>
    )
}

export default PublicLayout
