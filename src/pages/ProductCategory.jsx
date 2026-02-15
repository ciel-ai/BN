import { useState, useMemo, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { ArrowRightIcon } from '../components/Icons'
import './ProductCategory.css'


const ProductCategory = () => {
    const { categoryId } = useParams()
    const navigate = useNavigate()
    const [activeFiltersState, setActiveFiltersState] = useState({ categoryId: null, filters: {} })
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    // Helper to get actual current filters
    const activeFilters = useMemo(() => {
        if (activeFiltersState.categoryId === categoryId) {
            return activeFiltersState.filters
        }
        return {}
    }, [activeFiltersState, categoryId])

    const setActiveFilters = (newFilters) => {
        setActiveFiltersState({ categoryId, filters: newFilters })
    }
    const [openFeaturesId, setOpenFeaturesId] = useState(null)

    // Reset when category changes handled by useMemo above, but good to clean up state
    useEffect(() => {
        setOpenFeaturesId(null)
        setMobileFiltersOpen(false)
        // We don't strictly need to reset activeFiltersState here effectively because the useMemo handles the logic, 
        // but let's keep it clean
        setActiveFiltersState({ categoryId, filters: {} })
    }, [categoryId])

    // Category data with products
    const categoryData = {
        'sewing-machine-needles': {
            title: 'Bell Sewing Machine Needles',
            description: 'High-performance industrial sewing machine needles engineered for precision and durability. Browse our complete range of DBx1 needles for various industrial applications.',
            products: [
                { id: 'bell-hax1-sewing-machine-needles', title: 'Bell HAX1 Sewing Machine Needles', image: '/assets/images/machine-needles/HAX1.png', system: 'HAx1', pointStyle: 'R', coating: 'Nickel', size: '11-21' },
                { id: 'bell-dbxk5-sewing-machine-needles', title: 'Bell DBXK5 Sewing Machine Needles', image: '/assets/images/machine-needles/DBXK5.png', system: 'DBxK5', pointStyle: 'R', coating: 'Chrome', size: '11-21' },
                { id: 'bell-dpx5-sewing-machine-needles', title: 'Bell DPX5 Sewing Machine Needles', image: '/assets/images/machine-needles/DPX5.png', system: 'DPx5', pointStyle: 'R', coating: 'Carbide', size: '11-21' },
                { id: 'bell-dbx1-sewing-machine-needles', title: 'Bell DBX1 Sewing Machine Needles', image: '/assets/images/machine-needles/DBX1.png', system: 'DBx1', pointStyle: 'R', coating: 'Chrome', size: '9-25' },
                { id: 'bell-gold-dbx1-sewing-machine-needles', title: 'Bell Gold DBX1 Sewing Machine Needles', image: '/assets/images/machine-needles/DBX1 GOLD.png', system: 'DBx1', pointStyle: 'R', coating: 'Titanium', size: '9-18' },
                { id: 'bell-dcx1-sewing-machine-needles', title: 'Bell DCX1 Sewing Machine Needles', image: '/assets/images/machine-needles/DCX1.png', system: 'DCx1', pointStyle: 'R', coating: 'Chrome', size: '11-21' },
                { id: 'bell-dpx17-sewing-machine-needles', title: 'Bell DPX17 Sewing Machine Needles', image: '/assets/images/machine-needles/DPX17.png', system: 'DPx17', pointStyle: 'R', coating: 'Chrome', size: '18-23' },
                { id: 'bell-dvx1-sewing-machine-needles', title: 'Bell DVX1 Sewing Machine Needles', image: '/assets/images/machine-needles/DVX1.png', system: 'DVx1', pointStyle: 'R', coating: 'Carbide', size: '11-18' },
                { id: 'bell-uy128-gas-sewing-machine-needles', title: 'Bell UY128 GAS Sewing Machine Needles', image: '/assets/images/machine-needles/UY128 GAS.png', system: 'UY128GAS', pointStyle: 'R', coating: 'Chrome', size: '11-21' },
                { id: 'bell-tqx1-sewing-machine-needles', title: 'Bell TQX1 Sewing Machine Needles', image: '/assets/images/machine-needles/TQX1.png', system: 'TQx1', pointStyle: 'R', coating: 'Chrome', size: '9-18' },
                { id: 'bell-sewing-machine-needles', title: 'Bell Sewing Machine Needles', image: '/assets/images/machine-needles/allmsn.png', system: 'Universal', pointStyle: 'R', coating: 'Carbide', size: '11-18' },
                { id: 'bell-assorted-home-sewing-machine-needles', title: 'Bell Assorted Home Sewing Machine Needles', image: '/assets/images/machine-needles/HAX1 GOLD.png', system: 'HAx1', pointStyle: 'R', coating: 'Nickel', size: 'Assorted' }
            ]
        },
        'hand-sewing-needles': {
            title: 'Bell Hand Sewing Needles',
            description: 'Professional-grade hand sewing needles crafted for precision work. Browse our complete collection of specialized needles for every sewing application.',
            products: [
                { id: 'bell-crewels', title: 'Bell Crewels Hand Sewing Needles', image: '/assets/images/hand-sewing-needles/1 Bell Crewels.jpg', system: 'Hand', pointStyle: 'R', coating: 'Nickel', size: 'Assorted' },
                { id: 'bell-darner', title: 'Bell Darner Hand Sewing Needles', image: '/assets/images/hand-sewing-needles/2 Bell Darners.jpg', system: 'Hand', pointStyle: 'R', coating: 'Nickel', size: '1-5' },
                { id: 'bell-beading', title: 'Bell Beading Hand Sewing Needles', image: '/assets/images/hand-sewing-needles/10 Bell Beading.jpg', system: 'Hand', pointStyle: 'SPI', coating: 'Nickel', size: '10-12' },
                { id: 'bell-compact-threader', title: 'Bell Compact Hand Sewing Needles With Threader', image: '/assets/images/hand-sewing-needles/14 Bell Compact.jpg', system: 'Hand', pointStyle: 'R', coating: 'Nickel', size: 'Assorted' },
                { id: 'bell-darner-3-5', title: 'Bell Darner 3.5" Needles', image: '/assets/images/hand-sewing-needles/6 Bell 3.5.jpg', system: 'Hand', pointStyle: 'R', coating: 'Nickel', size: '3.5"' },
                { id: 'bell-book-binding', title: 'Bell Book Binding Needles', image: '/assets/images/hand-sewing-needles/13 Bell Book Binders.jpg', system: 'Hand', pointStyle: 'R', coating: 'Nickel', size: '18' },
                { id: 'bell-short-darner-4-0', title: 'Bell Short Darner 4/0 Needles', image: '/assets/images/hand-sewing-needles/short-darner-4-0-main.jpg', system: 'Hand', pointStyle: 'R', coating: 'Nickel', size: '4/0' },
                { id: 'bell-double-long-darner', title: 'Bell Double Long Darner Hand Sewing Needles', image: '/assets/images/hand-sewing-needles/12 Bell DLD.jpg', system: 'Hand', pointStyle: 'R', coating: 'Nickel', size: 'Assorted' },
                { id: 'bell-gold-compact', title: 'Bell Gold compact Hand Sewing Needles', image: '/assets/images/hand-sewing-needles/Bell Gold compact.jpg', system: 'Hand', pointStyle: 'R', coating: 'Gold', size: 'Assorted' },
                { id: 'bell-compact-threader-25', title: 'Bell Compact Hand Sewing Needles With Threader (25 pcs)', image: '/assets/images/hand-sewing-needles/Bell Colour Compact.jpg', system: 'Hand', pointStyle: 'R', coating: 'Nickel', size: 'Assorted' },
                { id: 'bell-betweens', title: 'Bell Betweens Hand Sewing Needles', image: '/assets/images/hand-sewing-needles/5 Bell Between.jpg', system: 'Hand', pointStyle: 'R', coating: 'Nickel', size: '3-9' },
                { id: 'bell-sharps-1-5', title: 'Bell Sharps 1-5 Hand Sewing Needles', image: '/assets/images/hand-sewing-needles/bell-sharps-1-5-final.jpg', system: 'Hand', pointStyle: 'SPI', coating: 'Nickel', size: '1-5' },
                { id: 'bell-capoteras-6-0', title: 'Bell Capoteras 6/0 Needles', image: '/assets/images/hand-sewing-needles/7 Bell 60.jpg', system: 'Hand', pointStyle: 'R', coating: 'Nickel', size: '6/0' },
                { id: 'bell-tapestry', title: 'Bell Tapestry Hand Sewing Needles', image: '/assets/images/hand-sewing-needles/11 Bell Tapestry.jpg', system: 'Hand', pointStyle: 'Ball', coating: 'Nickel', size: '18-24' },
                { id: 'bell-sharps', title: 'Bell Sharps Hand Sewing Needles', image: '/assets/images/hand-sewing-needles/4 Bell Sharps.jpg', system: 'Hand', pointStyle: 'SPI', coating: 'Nickel', size: 'Assorted' },
                { id: 'bell-long-darner-3-0', title: 'Bell Long Darner 3/0 Hand Sewing Needles', image: '/assets/images/hand-sewing-needles/9 Bell30.jpg', system: 'Hand', pointStyle: 'R', coating: 'Nickel', size: '3/0' }
            ]
        },

        'tailoring-scissors': {
            title: 'Bell Tailor Scissor',
            description: 'Premium stainless steel scissors with ergonomic handles designed for professional tailors.',
            products: [
                { id: 'bell-tailoring-scissors-9', title: 'Bell 9" Tailoring Scissors', image: '/assets/images/scissors/BS9.jpg', sizeInch: '9"', model: 'BS9', weight: '220 G', handle: 'Straight', material: 'German Steel', minOrder: '60 Box', usage: 'Tailor', packing: '1 Carton = 60 Boxes' },
                { id: 'bell-tailoring-scissors-10', title: 'Bell 10" Tailoring Scissors', image: '/assets/images/scissors/BS10.jpg', sizeInch: '10"', model: 'BS10', weight: '280 Gms', handle: 'Straight', material: 'German Steel', minOrder: '80 Box', usage: 'Tailor', packing: '1 Carton = 80 Boxes' },
                { id: 'bell-tailoring-scissors-11', title: 'Bell 11" Tailoring Scissors', image: '/assets/images/scissors/BS11-action.jpeg', sizeInch: '11"', model: 'BS11', weight: '355 gms', handle: 'Straight', material: 'German Steel', minOrder: '60 Box', usage: 'Tailor', packing: '1 Carton = 60 Boxes' },
                { id: 'bell-tailoring-scissors-12', title: 'Bell 12" Tailoring Scissors', image: '/assets/images/scissors/BS12.jpeg', sizeInch: '12"', model: 'BS12', weight: '482 gms', handle: 'Bent', material: 'German Steel', minOrder: '60 Box', usage: 'Tailor', packing: '1 Carton = 60 Boxes' }
            ]
        },
        'safety-pins-aromi': {
            title: 'Aromi Safety Pins',
            description: 'Premium quality Aromi safety pins in manufacturing-grade packaging. Known for their sharp points and durability.',
            products: [
                { id: 'aromi-safety-pin-0-100', title: 'Aromi Safety Pins Size-0 (100 pcs/Pouch)', image: '/assets/images/aromi pins/Aromi Safety Pins Size-0(30mm) (100 pcs: Pouch ) .jpeg', model: 'Size-0', packing: '100 Pcs / Pouch', usage: 'Garments', material: 'Stainless Steel', color: 'Silver' },
                { id: 'aromi-safety-pin-assorted-bunch', title: 'Aromi Safety Pins Assorted Size (0,1,2)', image: '/assets/images/aromi pins/012.jpeg', model: 'A-3 MIX', packing: 'Mix Bunch Packing', usage: 'Garments', material: 'Metal', color: 'Silver' },
                { id: 'aromi-safety-pin-assorted-pouch', title: 'Aromi Assorted Pouch Safety Pins', image: '/assets/images/panda pins/assorted pins.png', model: 'AP', packing: 'Pouch', usage: 'Garments', material: 'Steel', color: 'Silver' },
                { id: 'aromi-safety-pin-2', title: 'Aromi Safety Pins Size-2 (40mm)', image: '/assets/images/aromi pins/orange.jpeg', model: 'A2', packing: 'Box', usage: 'Garments', material: 'Steel', color: 'Silver' },
                { id: 'aromi-safety-pin-0-50', title: 'Aromi Safety Pins Size-0 (50 pcs/Pouch)', image: '/assets/images/aromi pins/Aromi Safety Pins Size-0(30MM) (50Pcs: Pouch).jpeg', model: 'A-00', packing: 'Box', usage: 'Garments', material: 'Steel', color: 'Silver' },
                { id: 'aromi-safety-pin-4', title: 'Aromi Safety Pins Size-4 (53mm)', image: '/assets/images/aromi pins/Aromi Safety Pins Size-4(53MM).jpeg', model: 'A4', packing: 'Box', usage: 'Garments', material: 'Steel', color: 'Silver' },
                { id: 'aromi-safety-pin-1', title: 'Aromi Safety Pins Size-1 (35mm)', image: '/assets/images/aromi pins/Aromi Safety pins size-1 (35mm) .jpeg', model: 'A-1', packing: 'Box Of 1000', usage: 'Garments', material: 'Steel', color: 'Silver' },
                { id: 'aromi-safety-pin-0-25', title: 'Aromi Safety Pins Size-0 (25 pcs/Pouch)', image: '/assets/images/aromi pins/asp30.png', model: 'A000', packing: 'Pouch', usage: 'Garments', material: 'Metal', color: 'Silver' }
            ]
        },
        'safety-pins-panda': {
            title: 'Panda Safety Pins',
            description: 'Reliable Panda safety pins for everyday and industrial use. Available in convenient bunch packaging.',
            products: [
                { id: 'panda-brass-gold', title: 'Panda Brass Gold Safety Pins', image: '/assets/images/panda pins/Panda Brass Gold Safety Pins.jpg', model: 'PB00', packing: 'Jar', usage: 'Tagging', material: 'Brass', color: 'Gold' },
                { id: 'panda-brass-black', title: 'Panda Brass Black Safety Pins', image: '/assets/images/panda pins/Panda Brass black Safety Pins.jpg', model: 'PBB00', packing: 'Jar', usage: 'Tagging', material: 'Brass', color: 'Black' },
                { id: 'panda-brass-nickel', title: 'Panda Brass Nickel Plated Safety Pins', image: '/assets/images/panda pins/3  Silver 00.jpg', model: 'PBS000', packing: 'Jar', usage: 'Tagging', material: 'Brass', color: 'Silver' },
                { id: 'panda-bulb-brass', title: 'Bulb Brass Safety Pins', image: '/images/safety-pins.png', model: 'Pear', packing: 'Jar', usage: 'Garment Tagging', material: 'Brass', color: 'Multi-Color' },
                { id: 'panda-pear-shaped', title: 'Pear Shaped Brass Safety Pins', image: '/assets/images/panda pins/Pear Shaped Brass Safety Pins.png', model: 'BRASS', packing: 'Jar', usage: 'Tags', material: 'Brass', color: 'Multi-Color' }
            ]
        },
        'safety-pins': {
            title: 'Safety Pins - Aromi & Panda',
            description: 'Select a brand to view our range of high-quality safety pins.',
            products: [] // Empty products list as this is now a selection page
        },
        'sewing-accessories': {
            title: 'Bell Sewing Accessories',
            description: 'Comprehensive collection of professional-grade sewing accessories including threads, buttons, and more.',
            products: [
                { id: 'bell-needle-threader', title: 'Bell Needle Threader (Aluminium)', image: '/assets/images/aromi pins/needle threader.png', model: 'BNT', packing: '100 Cards', usage: 'Easy Threading', material: 'Aluminium', color: 'Silver' },
                { id: 'bell-loop-turner', title: 'Bell Loop Turner Needles', image: '/assets/images/aromi pins/LOOPTTURNER.png', model: 'BLT', packing: '10 Cards', usage: 'Hand Sewing', material: 'Steel', color: 'Silver' },
                { id: 'bell-pearl-head-pins', title: 'Bell Steel Pearl Head Pins', image: '/assets/images/aromi pins/BELLPEARLHEAD PINS.jpg', model: 'BPHP', packing: '1 Pouches', usage: 'Head Pins', material: 'Steel', color: 'Multi-Color' },
                { id: 'bell-seam-ripper', title: 'Bell Seam Ripper', image: '/assets/images/aromi pins/BELL SEAM RIPPER.jpg', model: 'BSR', packing: '1 pc/ Pouch', usage: 'Seam ripper', material: 'Steel (Nickel Plated)', color: 'Assorted' },
                { id: 'bell-pin-cushion', title: 'Bell Pin Cushion', image: '/assets/images/aromi pins/BELL PIN CUSHION.jpeg', model: 'BPC', packing: '1 Pc (200 Pins)', usage: 'Stationary Pins', material: 'Steel', color: 'Multi Colour' },
                { id: 'bell-tracing-wheel', title: 'Bell Tracing wheel', image: '/assets/images/aromi pins/BELL TRACING WHEEL.jpg', model: 'BTW', packing: 'Pouch', usage: 'Transfers pattern', material: 'Steel (Nickel plated)', color: 'Silver' },



            ]
        },
        'crochet-hooks': {
            title: 'Bell Crochet Hooks',
            description: 'Premium aluminium crochet hooks with soft-grip ergonomic handles for comfortable crocheting.',
            products: [
                { id: 'bell-aluminium-crochet-hooks', title: 'Bell Aluminium Crochet Hooks- Assorted', image: '/assets/images/crochet hooks/ch1.png', model: 'BCH', packing: '1 Jar (10 Hooks)', usage: 'Crochet', material: 'Aluminium', color: 'Black with Gold' },
            ]
        },

    }

    const category = categoryData[categoryId]

    // --- Filter Logic ---
    const filterOptions = useMemo(() => {
        if (!category) return null;
        if (categoryId !== 'hand-sewing-needles' && categoryId !== 'sewing-machine-needles' && categoryId !== 'tailoring-scissors' && categoryId !== 'sewing-accessories' && categoryId !== 'crochet-hooks' && categoryId !== 'safety-pins-aromi' && categoryId !== 'safety-pins-panda') return null;

        const options = {
            system: new Set(),
            pointStyle: new Set(),
            coating: new Set(),
            size: new Set(),
            // Scissors specific
            sizeInch: new Set(),
            bladeType: new Set(),
            handle: new Set(),
            // Accessories specific
            model: new Set(),
            usage: new Set(),
            packing: new Set(),
            material: new Set(),
            color: new Set()
        };

        category.products.forEach(p => {
            if (p.system) options.system.add(p.system);
            if (p.pointStyle) options.pointStyle.add(p.pointStyle);
            if (p.coating) options.coating.add(p.coating);
            if (p.size) options.size.add(p.size);

            // Scissors & Accessories
            if (p.sizeInch) options.sizeInch.add(p.sizeInch);
            if (p.bladeType) options.bladeType.add(p.bladeType);
            if (p.handle) options.handle.add(p.handle);
            if (p.model) options.model.add(p.model);
            if (p.model) options.model.add(p.model);
            if (p.usage) options.usage.add(p.usage);
            if (p.packing) options.packing.add(p.packing);
            if (p.material) options.material.add(p.material);
            if (p.color) options.color.add(p.color);
        });

        // Convert sets to sorted arrays
        return {
            system: Array.from(options.system).sort(),
            pointStyle: Array.from(options.pointStyle).sort(),
            coating: Array.from(options.coating).sort(),
            size: Array.from(options.size).sort(),
            sizeInch: Array.from(options.sizeInch).sort(),
            bladeType: Array.from(options.bladeType).sort(),
            handle: Array.from(options.handle).sort(),
            model: Array.from(options.model || []).sort(),
            usage: Array.from(options.usage || []).sort(),
            packing: Array.from(options.packing || []).sort(),
            material: Array.from(options.material || []).sort(),
            color: Array.from(options.color || []).sort()
        };
    }, [category, categoryId]);

    const filteredProducts = useMemo(() => {
        if (!category) return [];
        if (categoryId !== 'hand-sewing-needles' && categoryId !== 'sewing-machine-needles' && categoryId !== 'tailoring-scissors' && categoryId !== 'sewing-accessories' && categoryId !== 'crochet-hooks' && categoryId !== 'safety-pins-aromi' && categoryId !== 'safety-pins-panda') return category.products;

        return category.products.filter(product => {
            // Check each filter category
            for (const [filterType, selectedValues] of Object.entries(activeFilters)) {
                if (selectedValues && selectedValues.length > 0) {
                    if (!selectedValues.includes(product[filterType])) {
                        return false;
                    }
                }
            }
            return true;
        });
    }, [category, activeFilters, categoryId]);

    const toggleFilter = (type, value) => {
        setActiveFiltersState(prev => {
            // If changing category, start fresh
            const currentFilters = prev.categoryId === categoryId ? prev.filters : {}
            const currentValues = currentFilters[type] || []

            let newValues
            if (currentValues.includes(value)) {
                newValues = currentValues.filter(v => v !== value)
            } else {
                newValues = [...currentValues, value]
            }

            return {
                categoryId,
                filters: {
                    ...currentFilters,
                    [type]: newValues
                }
            }
        });
    };

    const toggleFeatures = (e, productId) => {
        e.stopPropagation();
        if (openFeaturesId === productId) {
            setOpenFeaturesId(null)
        } else {
            setOpenFeaturesId(productId)
        }
    }

    if (!category) {
        return (
            <div className="product-category-page">
                <div className="container">
                    <h1>Category not found</h1>
                </div>
            </div>
        )
    }

    return (
        <div className="product-category-page">
            {/* Breadcrumb */}
            <section className="breadcrumb">
                <div className="container">
                    <button onClick={() => navigate('/products')} className="breadcrumb-link">
                        Products
                    </button>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{category.title}</span>
                </div>
            </section>

            {/* Category Header */}
            <section className="category-header">
                <div className="container">
                    <h1 className="category-title">{category.title}</h1>
                    <p className="category-description">{category.description}</p>
                </div>
            </section>

            {/* Product Content */}
            {categoryId === 'safety-pins' ? (
                <section className="section">
                    <div className="container">
                        <div className="brand-hero-container">
                            {/* Aromi */}
                            <div className="brand-hero aromi" onClick={() => navigate('/products/category/safety-pins-aromi')}>
                                <div className="brand-hero-content">
                                    <span className="brand-subtitle">Premium Quality</span>
                                    <h2 className="brand-title">Aromi Safety Pins</h2>
                                    <p className="brand-description">Manufacturing-grade precision with sharp points and superior durability. Perfect for delicate fabrics.</p>
                                    <Button variant="primary" className="hero-btn" icon={<ArrowRightIcon />}>View Collection</Button>
                                </div>
                                <div className="brand-hero-image">
                                    <img src="/assets/images/aromi pins/012.jpeg" alt="Aromi Safety Pins" />
                                </div>
                            </div>

                            {/* Panda */}
                            <div className="brand-hero panda" onClick={() => navigate('/products/category/safety-pins-panda')}>
                                <div className="brand-hero-content">
                                    <span className="brand-subtitle">Commercial Standard</span>
                                    <h2 className="brand-title">Panda Safety Pins</h2>
                                    <p className="brand-description">Reliable performance for everyday industrial use. Available in convenient bunch packaging options.</p>
                                    <Button variant="primary" className="hero-btn" icon={<ArrowRightIcon />}>View Collection</Button>
                                </div>
                                <div className="brand-hero-image">
                                    <img src="/assets/images/panda pins/Panda Brass Gold Safety Pins.jpg" alt="Panda Safety Pins" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            ) : (
                <section className="category-products">
                    <div className="container">
                        {/* Show product count */}
                        {(categoryId === 'hand-sewing-needles' || categoryId === 'sewing-machine-needles' || categoryId === 'tailoring-scissors' || categoryId === 'sewing-accessories' || categoryId === 'crochet-hooks' || categoryId === 'safety-pins-aromi' || categoryId === 'safety-pins-panda') && (
                            <div className="view-header">
                                <div className="result-count">
                                    Showing {filteredProducts.length} Products
                                </div>
                            </div>
                        )}

                        {/* Horizontal Inline Filters (Desktop) + Collapsible Filters (Mobile) */}
                        {(categoryId === 'hand-sewing-needles' || categoryId === 'sewing-machine-needles' || categoryId === 'tailoring-scissors' || categoryId === 'sewing-accessories' || categoryId === 'crochet-hooks' || categoryId === 'safety-pins-aromi' || categoryId === 'safety-pins-panda') && filterOptions && (
                            <>
                                {/* Mobile Filter Toggle Button */}
                                <button
                                    className="mobile-filter-toggle"
                                    onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="4" y1="6" x2="20" y2="6" />
                                        <line x1="4" y1="12" x2="16" y2="12" />
                                        <line x1="4" y1="18" x2="12" y2="18" />
                                    </svg>
                                    Filters
                                </button>

                                <div className={`inline-filters ${mobileFiltersOpen ? 'filters-open' : ''}`}>
                                    {/* SYSTEM */}
                                    {filterOptions.system.length > 0 && (
                                        <div className="inline-filter-row">
                                            <span className="inline-filter-label">SYSTEM</span>
                                            <div className="inline-filter-options">
                                                {filterOptions.system.map(opt => (
                                                    <label key={opt} className="inline-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={activeFilters.system?.includes(opt) || false}
                                                            onChange={() => toggleFilter('system', opt)}
                                                        />
                                                        <span>{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* SCISSORS: SIZE (INCH) */}
                                    {filterOptions.sizeInch && filterOptions.sizeInch.length > 0 && (
                                        <div className="inline-filter-row">
                                            <span className="inline-filter-label">SIZE</span>
                                            <div className="inline-filter-options">
                                                {filterOptions.sizeInch.map(opt => (
                                                    <label key={opt} className="inline-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={activeFilters.sizeInch?.includes(opt) || false}
                                                            onChange={() => toggleFilter('sizeInch', opt)}
                                                        />
                                                        <span>{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* POINT STYLE */}
                                    {filterOptions.pointStyle.length > 0 && (
                                        <div className="inline-filter-row">
                                            <span className="inline-filter-label">POINT STYLE</span>
                                            <div className="inline-filter-options">
                                                {filterOptions.pointStyle.map(opt => (
                                                    <label key={opt} className="inline-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={activeFilters.pointStyle?.includes(opt) || false}
                                                            onChange={() => toggleFilter('pointStyle', opt)}
                                                        />
                                                        <span>{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* SCISSORS: BLADE TYPE */}
                                    {filterOptions.bladeType && filterOptions.bladeType.length > 0 && (
                                        <div className="inline-filter-row">
                                            <span className="inline-filter-label">BLADE TYPE</span>
                                            <div className="inline-filter-options">
                                                {filterOptions.bladeType.map(opt => (
                                                    <label key={opt} className="inline-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={activeFilters.bladeType?.includes(opt) || false}
                                                            onChange={() => toggleFilter('bladeType', opt)}
                                                        />
                                                        <span>{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* COATING */}
                                    {filterOptions.coating.length > 0 && (
                                        <div className="inline-filter-row">
                                            <span className="inline-filter-label">COATING</span>
                                            <div className="inline-filter-options">
                                                {filterOptions.coating.map(opt => (
                                                    <label key={opt} className="inline-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={activeFilters.coating?.includes(opt) || false}
                                                            onChange={() => toggleFilter('coating', opt)}
                                                        />
                                                        <span>{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* SCISSORS: HANDLE */}
                                    {filterOptions.handle && filterOptions.handle.length > 0 && (
                                        <div className="inline-filter-row">
                                            <span className="inline-filter-label">HANDLE</span>
                                            <div className="inline-filter-options">
                                                {filterOptions.handle.map(opt => (
                                                    <label key={opt} className="inline-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={activeFilters.handle?.includes(opt) || false}
                                                            onChange={() => toggleFilter('handle', opt)}
                                                        />
                                                        <span>{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* USAGE */}
                                    {filterOptions.usage && filterOptions.usage.length > 0 && (
                                        <div className="inline-filter-row">
                                            <span className="inline-filter-label">USAGE</span>
                                            <div className="inline-filter-options">
                                                {filterOptions.usage.map(opt => (
                                                    <label key={opt} className="inline-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={activeFilters.usage?.includes(opt) || false}
                                                            onChange={() => toggleFilter('usage', opt)}
                                                        />
                                                        <span>{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* MATERIAL */}
                                    {filterOptions.material && filterOptions.material.length > 0 && (
                                        <div className="inline-filter-row">
                                            <span className="inline-filter-label">MATERIAL</span>
                                            <div className="inline-filter-options">
                                                {filterOptions.material.map(opt => (
                                                    <label key={opt} className="inline-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={activeFilters.material?.includes(opt) || false}
                                                            onChange={() => toggleFilter('material', opt)}
                                                        />
                                                        <span>{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* PACKING */}
                                    {filterOptions.packing && filterOptions.packing.length > 0 && (
                                        <div className="inline-filter-row">
                                            <span className="inline-filter-label">PACKING</span>
                                            <div className="inline-filter-options">
                                                {filterOptions.packing.map(opt => (
                                                    <label key={opt} className="inline-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={activeFilters.packing?.includes(opt) || false}
                                                            onChange={() => toggleFilter('packing', opt)}
                                                        />
                                                        <span>{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* NEEDLE SIZE */}
                                    {filterOptions.size.length > 0 && (
                                        <div className="inline-filter-row">
                                            <span className="inline-filter-label">NEEDLE SIZE</span>
                                            <div className="inline-filter-options">
                                                {filterOptions.size.map(opt => (
                                                    <label key={opt} className="inline-filter-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            checked={activeFilters.size?.includes(opt) || false}
                                                            onChange={() => toggleFilter('size', opt)}
                                                        />
                                                        <span>{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}

                        {/* Product List */}
                        {(categoryId === 'hand-sewing-needles' || categoryId === 'sewing-machine-needles' || categoryId === 'tailoring-scissors' || categoryId === 'sewing-accessories' || categoryId === 'crochet-hooks' || categoryId === 'safety-pins-aromi' || categoryId === 'safety-pins-panda') ? (
                            <div className="product-display-container">
                                <div className="product-list-container">
                                    <div className="list-header">
                                        <div className="col-img">PRODUCT</div>
                                        <div className="col-details">DETAILS</div>

                                        {/* Dynamic Headers based on category */}
                                        {categoryId === 'tailoring-scissors' ? (
                                            <>
                                                <div className="col-system">SIZE</div>
                                                <div className="col-point">MODEL</div>
                                                <div className="col-coating">HANDLE</div>
                                                <div className="col-size">WEIGHT</div>
                                            </>
                                        ) : categoryId === 'sewing-accessories' || categoryId === 'crochet-hooks' || categoryId === 'safety-pins-aromi' || categoryId === 'safety-pins-panda' || categoryId === 'safety-pins' ? (
                                            <>
                                                <div className="col-system">MODEL</div>
                                                <div className="col-point">USAGE</div>
                                                <div className="col-coating">PACKING</div>
                                                <div className="col-size">MATERIAL</div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="col-system">SYSTEM</div>
                                                <div className="col-point">POINT</div>
                                                <div className="col-coating">COATING</div>
                                                <div className="col-size">SIZE</div>
                                            </>
                                        )}

                                        <div className="col-order">VIEW</div>
                                    </div>
                                    {filteredProducts.length > 0 ? (
                                        filteredProducts.map((product) => (
                                            <div
                                                key={product.id}
                                                className={`list-row ${openFeaturesId === product.id ? 'active-row' : ''}`}
                                                onClick={() => navigate(`/products/${product.id}`)}
                                                role="button"
                                                tabIndex={0}
                                            >
                                                <div className="col-img">
                                                    <div className="product-image-container">
                                                        <img src={product.image} alt={product.title} />
                                                    </div>
                                                </div>
                                                <div className="col-details">
                                                    <h4>{product.title}</h4>
                                                    <span className="product-code">{categoryId === 'tailoring-scissors' || categoryId === 'sewing-accessories' || categoryId === 'crochet-hooks' ? product.model : `Mat no. ${product.id.slice(0, 8)}`}</span>
                                                    <div className="features-container">
                                                        <button
                                                            className="text-btn"
                                                            onClick={(e) => toggleFeatures(e, product.id)}
                                                        >
                                                            Product features
                                                        </button>
                                                        {openFeaturesId === product.id && (
                                                            <div className="features-dropdown" onClick={(e) => e.stopPropagation()}>
                                                                <button
                                                                    className="features-close"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setOpenFeaturesId(null);
                                                                    }}
                                                                >
                                                                    ×
                                                                </button>
                                                                <h4>Technical Details</h4>
                                                                <div className="features-list">
                                                                    {categoryId === 'tailoring-scissors' ? (
                                                                        <>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Size</span>
                                                                                <span className="feature-value">{product.sizeInch}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Model</span>
                                                                                <span className="feature-value">{product.model}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Min Order Qty</span>
                                                                                <span className="feature-value">{product.minOrder}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Usage</span>
                                                                                <span className="feature-value">{product.usage}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Handle Type</span>
                                                                                <span className="feature-value">{product.handle}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Material</span>
                                                                                <span className="feature-value">{product.material}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Packaging</span>
                                                                                <span className="feature-value">{product.packing}</span>
                                                                            </div>
                                                                        </>
                                                                    ) : categoryId === 'sewing-accessories' || categoryId === 'safety-pins' || categoryId === 'safety-pins-aromi' || categoryId === 'safety-pins-panda' || categoryId === 'crochet-hooks' ? (
                                                                        <>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Model</span>
                                                                                <span className="feature-value">{product.model}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Usage</span>
                                                                                <span className="feature-value">{product.usage}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Packing</span>
                                                                                <span className="feature-value">{product.packing}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Material</span>
                                                                                <span className="feature-value">{product.material}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Color</span>
                                                                                <span className="feature-value">{product.color}</span>
                                                                            </div>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">System</span>
                                                                                <span className="feature-value">{product.system || '-'}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Point Style</span>
                                                                                <span className="feature-value">{product.pointStyle || '-'}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Coating</span>
                                                                                <span className="feature-value">{product.coating || '-'}</span>
                                                                            </div>
                                                                            <div className="feature-row">
                                                                                <span className="feature-label">Size</span>
                                                                                <span className="feature-value">{product.size || '-'}</span>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                {categoryId === 'tailoring-scissors' ? (
                                                    <>
                                                        <div className="col-system">{product.sizeInch}</div>
                                                        <div className="col-point">{product.model}</div>
                                                        <div className="col-coating">{product.handle}</div>
                                                        <div className="col-size" style={{ fontSize: '0.8rem', whiteSpace: 'normal', lineHeight: '1.2' }}>{product.weight}</div>
                                                    </>
                                                ) : categoryId === 'sewing-accessories' || categoryId === 'safety-pins' || categoryId === 'safety-pins-aromi' || categoryId === 'safety-pins-panda' || categoryId === 'crochet-hooks' ? (
                                                    <>
                                                        <div className="col-system">{product.model}</div>
                                                        <div className="col-point">{product.usage}</div>
                                                        <div className="col-coating">{product.packing}</div>
                                                        <div className="col-size" style={{ fontSize: '0.8rem', whiteSpace: 'normal', lineHeight: '1.2' }}>{product.material}</div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="col-system">{product.system || '-'}</div>
                                                        <div className="col-point">{product.pointStyle || '-'}</div>
                                                        <div className="col-coating">{product.coating || '-'}</div>
                                                        <div className="col-size">{product.size || '-'}</div>
                                                    </>
                                                )}
                                                <div className="col-order">
                                                    <Button
                                                        variant="primary"
                                                        className="see-more-btn"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            navigate(`/products/${product.id}`)
                                                        }}
                                                        style={{ padding: '0', minWidth: 'auto' }}
                                                    >
                                                        See More
                                                    </Button>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
                                            No products match your selected filters.
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="products-grid">
                                {/* Existing grid for other categories */}
                                {category.products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="product-tile"
                                        onClick={() => navigate(`/products/${product.id}`)}
                                    >
                                        <div className="product-tile-image">
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                        <div className="product-tile-content">
                                            <h3 className="product-tile-title">{product.title}</h3>
                                            <button className="product-tile-btn">View Details</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            )}
        </div >
    )
}

export default ProductCategory
