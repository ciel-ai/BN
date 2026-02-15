import { db } from '../firebase';
import { collection, getDocs, doc, getDoc, setDoc, deleteDoc, addDoc } from 'firebase/firestore';

const LOCAL_STORAGE_KEYS = {
    PRODUCTS: 'bell_needles_products_v15', // Updated version to include crochet hooks - force refresh
    CONTENT: 'bell_needles_content_v4', // Updated version to force re-seed with new phone number
    CATEGORIES: 'bell_needles_categories_v1'
};

// Initial Categories
const INITIAL_CATEGORIES = [
    { id: 'needles', name: 'Needles', count: 0 },
    { id: 'pins', name: 'Pins', count: 0 },
    { id: 'scissors', name: 'Scissors', count: 0 },
    { id: 'accessories', name: 'Accessories', count: 0 }
];

// Initial Mock Data to populate if empty
const INITIAL_PRODUCTS = [
    {
        id: 'hand-sewing-needles',
        title: 'Bell Hand Sewing Needles',
        category: 'Needles',
        price: 'Contact for Price',
        description: 'Premium hand sewing needles manufactured with precision engineering for professional and domestic use.',
        features: ['Corrosion Resistant', 'Sharp Pointed', 'Long Lasting'],
        availableModels: [
            "Bell Crewels Hand Sewing Needles",
            "Bell Darner Hand Sewing Needles",
            "Bell Beading Hand Sewing Needles",
            "Bell Compact Hand Sewing Needles With Threader",
            "Bell Darner 3.5\" Needles",
            "Bell Book Binding Needles",
            "Bell Short Darner 4/0 Needles",
            "Bell Double Long Darner Hand Sewing Needles",
            "Bell Gold compact Hand Sewing Needles",
            "Bell Compact Hand Sewing Needles With Threader (25 pcs)",
            "Bell Betweens Hand Sewing Needles",
            "Bell Sharps 1-5 Hand Sewing Needles",
            "Bell Capoteras 6/0 Needles",
            "Bell Tapestry Hand Sewing Needles",
            "Bell Sharps Hand Sewing Needles",
            "Bell Long Darner 3/0 Hand Sewing Needles"
        ],
        images: [],
        image: '/images/hand-sewing-needles.png',
        skus: [
            { id: '1', code: 'HSN-STD', name: 'Standard Pack', price: 'Contact for Price', stock: 'in-stock', isDefault: true }
        ]
    },
    {
        id: 'sewing-machine-needles',
        title: 'Bell Sewing Machine Needles',
        category: 'Needles',
        price: 'Contact for Price',
        description: 'High-performance industrial sewing machine needles engineered for precision and durability.',
        features: ['Industrial Grade', 'High Precision', 'Heat Resistant'],
        images: [],
        image: '/images/sewing-machine-needles.png',
        skus: [
            { id: '1', code: 'SMN-001', name: 'Standard Pack', price: 'Contact for Price', stock: 'in-stock', isDefault: true }
        ]
    },
    {
        id: 'tailoring-scissors',
        title: 'Bell Tailor Scissor',
        category: 'Scissors',
        price: 'Contact for Price',
        description: 'Premium stainless steel scissors with ergonomic handles designed for professional tailors.',
        features: ['Stainless Steel', 'Ergonomic Grip', 'Micro-Serrated'],
        images: [],
        image: '/images/tailoring-scissors.png',
        skus: [
            { id: '1', code: 'TS-8IN', name: '8 Inch', price: 'Contact for Price', stock: 'in-stock', isDefault: true },
            { id: '2', code: 'TS-10IN', name: '10 Inch', price: 'Contact for Price', stock: 'in-stock', isDefault: false }
        ]
    },


    {
        id: 'sewing-accessories',
        title: 'Bell Sewing Accessories',
        category: 'Accessories',
        price: 'Contact for Price',
        description: 'Comprehensive collection of professional-grade sewing accessories including threads, buttons, and more.',
        features: ['Wide Variety', 'Professional Grade', 'Bulk Available'],
        images: [],
        image: '/assets/images/aromi pins/BELL SEAM RIPPER.jpg',
        skus: [
            { id: '1', code: 'ACC-001', name: 'Standard Set', price: 'Contact for Price', stock: 'in-stock', isDefault: true }
        ]
    },
    {
        id: 'crochet-hooks',
        title: 'Bell Crochet Hooks',
        category: 'Accessories',
        price: 'Contact for Price',
        description: 'Premium aluminium crochet hooks with ergonomic soft-grip handles. Perfect for all yarn types and crochet projects.',
        features: ['Ergonomic Design', 'Smooth Glide', 'Assorted Sizes'],
        images: [],
        image: '/assets/images/crochet hooks/ch1.png',
        skus: [
            { id: '1', code: 'CH-SET', name: 'Complete Set', price: 'Contact for Price', stock: 'in-stock', isDefault: true }
        ]
    },
    {
        id: 'safety-pins',
        title: 'Safety Pins - Aromi & Panda',
        category: 'Accessories',
        price: 'Contact for Price',
        description: 'High-quality safety pins available in brass and steel finishes. Strong springs and corrosion-resistant materials.',
        features: ['Brass & Steel', 'Strong Spring', 'Corrosion Resistant'],
        images: [],
        image: '/assets/images/aromi pins/012.jpeg',
        skus: [
            { id: '1', code: 'SP-BRASS', name: 'Brass Finish', price: 'Contact for Price', stock: 'in-stock', isDefault: true },
            { id: '2', code: 'SP-STEEL', name: 'Steel Finish', price: 'Contact for Price', stock: 'in-stock', isDefault: false }
        ]
    }
];

const INITIAL_CONTENT = {
    hero: {
        title: "Precision Engineering for the Textile Industry",
        subtitle: "Premium quality needles, pins, and accessories for industrial and domestic use.",
        ctaText: "Explore Products",
        ctaLink: "/products"
    },
    contact: {
        email: "sales@bellneedles.com",
        phone: "7200629792",
        address: "8, Marudhar Complex, Narayana Mudali Street,\nChennai - 600001, Tamil Nadu, India"
    }
};

class DataService {
    constructor() {
        this.useLocalStorage = true; // Default to LocalStorage for now
        this._initializeLocalStorage();
    }

    _initializeLocalStorage() {
        if (!localStorage.getItem(LOCAL_STORAGE_KEYS.PRODUCTS)) {
            localStorage.setItem(LOCAL_STORAGE_KEYS.PRODUCTS, JSON.stringify(INITIAL_PRODUCTS));
        }
        if (!localStorage.getItem(LOCAL_STORAGE_KEYS.CONTENT)) {
            localStorage.setItem(LOCAL_STORAGE_KEYS.CONTENT, JSON.stringify(INITIAL_CONTENT));
        }
        if (!localStorage.getItem(LOCAL_STORAGE_KEYS.CATEGORIES)) {
            localStorage.setItem(LOCAL_STORAGE_KEYS.CATEGORIES, JSON.stringify(INITIAL_CATEGORIES));
        }
    }

    // --- Products ---

    async getProducts() {
        if (this.useLocalStorage) {
            const products = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.PRODUCTS) || '[]');
            return products;
        }
        // Firebase impl would go here
    }

    async getProduct(id) {
        if (this.useLocalStorage) {
            const products = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.PRODUCTS) || '[]');
            return products.find(p => p.id === id) || null;
        }
    }

    async saveProduct(product) {
        if (this.useLocalStorage) {
            const products = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.PRODUCTS) || '[]');

            if (product.id) {
                // Update
                const index = products.findIndex(p => p.id === product.id);
                if (index !== -1) {
                    products[index] = { ...products[index], ...product };
                } else {
                    products.push(product);
                }
            } else {
                // Create
                const newProduct = { ...product, id: Date.now().toString() }; // Simple ID generation
                products.push(newProduct);
            }

            localStorage.setItem(LOCAL_STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
            return product.id || products[products.length - 1].id;
        }
    }

    async deleteProduct(id) {
        if (this.useLocalStorage) {
            let products = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.PRODUCTS) || '[]');
            products = products.filter(p => p.id !== id);
            localStorage.setItem(LOCAL_STORAGE_KEYS.PRODUCTS, JSON.stringify(products));
            return true;
        }
    }

    // --- Site Content ---

    async getSiteContent(section) {
        if (this.useLocalStorage) {
            const allContent = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.CONTENT) || '{}');
            return allContent[section] || {};
        }
    }

    async saveSiteContent(section, content) {
        if (this.useLocalStorage) {
            const allContent = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.CONTENT) || '{}');
            allContent[section] = content;
            localStorage.setItem(LOCAL_STORAGE_KEYS.CONTENT, JSON.stringify(allContent));
            return true;
        }
    }

    // --- Categories ---

    async getCategories() {
        if (this.useLocalStorage) {
            const categories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.CATEGORIES) || '[]');
            // Update product counts
            const products = await this.getProducts();
            return categories.map(cat => ({
                ...cat,
                count: products.filter(p => p.category === cat.name).length
            }));
        }
    }

    async getCategory(id) {
        if (this.useLocalStorage) {
            const categories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.CATEGORIES) || '[]');
            return categories.find(c => c.id === id) || null;
        }
    }

    async saveCategory(category) {
        if (this.useLocalStorage) {
            const categories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.CATEGORIES) || '[]');

            if (category.id) {
                // Update
                const index = categories.findIndex(c => c.id === category.id);
                if (index !== -1) {
                    categories[index] = { ...categories[index], ...category };
                } else {
                    categories.push(category);
                }
            } else {
                // Create
                const newCategory = {
                    ...category,
                    id: category.name.toLowerCase().replace(/\s+/g, '-'),
                    count: 0
                };
                categories.push(newCategory);
            }

            localStorage.setItem(LOCAL_STORAGE_KEYS.CATEGORIES, JSON.stringify(categories));
            return true;
        }
    }

    async deleteCategory(id) {
        if (this.useLocalStorage) {
            // Check if category has products
            const products = await this.getProducts();
            const categories = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.CATEGORIES) || '[]');
            const category = categories.find(c => c.id === id);

            if (category) {
                const hasProducts = products.some(p => p.category === category.name);
                if (hasProducts) {
                    throw new Error('Cannot delete category with existing products');
                }
            }

            const filtered = categories.filter(c => c.id !== id);
            localStorage.setItem(LOCAL_STORAGE_KEYS.CATEGORIES, JSON.stringify(filtered));
            return true;
        }
    }
}

export const dataService = new DataService();
