import { useState, useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { CheckIcon, DownloadIcon, HomeIcon, RulerIcon, BookIcon, StarIcon, HandIcon, AnchorIcon, BedIcon, PaletteIcon, ShieldIcon, TailorIcon, FactoryIcon, BadgeIcon, PackageIcon, EyeIcon } from '../components/Icons'
import Magnifier from '../components/Magnifier'
import './ProductDetail.css'

const ProductDetail = () => {
    const { productId } = useParams()
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('features')
    const [quantity, setQuantity] = useState(100)
    const [selectedImage, setSelectedImage] = useState(0)
    const [selectedVariant, setSelectedVariant] = useState(null)

    // Product data - in a real app, this would come from an API or database
    const productData = useMemo(() => ({
        'sewing-machine-needles': {
            title: 'Bell Sewing Machine Needles',
            description: 'High-performance industrial sewing machine needles engineered for precision and durability. Specifically designed for high-speed industrial lockstitch machines, featuring heat-resistant coating and reinforced shanks.',
            inStock: true,
            images: [
                '/images/sewing-machine-needles.png',
                '/images/sewing-machine-needles.png',
                '/images/sewing-machine-needles.png',
                '/images/sewing-machine-needles.png'
            ],
            specifications: {
                'Part Number': 'BELL-IND-DBX1-14',
                'Needle Size': '90/14 (Regular Medium)',
                'Point Style': 'R - Normal Round Point',
                'Material': 'Chromium Finished Steel',
                'Shank Type': 'Round Shank'
            },
            features: [
                {
                    icon: <ShieldIcon />,
                    title: 'Durability',
                    description: 'Titanium-nitride coating reduces heat buildup by 40%, ensuring long-lasting performance during 24/7 production cycles.'
                },
                {
                    icon: <FactoryIcon />,
                    title: 'Compatibility',
                    description: 'Universally compatible with Juki, Brother, Singer, and Mitsubishi industrial lockstitch and walking foot machines.'
                },
                {
                    icon: <BadgeIcon />,
                    title: 'Precision',
                    description: 'Reinforced scarf and eye geometry prevent skipped stitches and thread breakage on heavy fabrics and technical textiles.'
                }
            ],
            applications: [
                'Industrial garment manufacturing',
                'Heavy-duty fabric stitching',
                'Leather and upholstery work',
                'Technical textile production'
            ]
        },
        'hand-sewing-needles': {
            title: 'Bell Hand Sewing Needles',
            description: 'Professional-grade hand sewing needles crafted for precision work. Sharp points and smooth eyes ensure effortless stitching for tailors and craftspeople.',
            inStock: true,
            images: [
                '/images/hand-sewing-needles.png',
                '/images/hand-sewing-needles.png',
                '/images/hand-sewing-needles.png',
                '/images/hand-sewing-needles.png'
            ],
            specifications: {
                'Part Number': 'BELL-HND-001',
                'Needle Size': 'Assorted (1-12)',
                'Point Style': 'Sharp Point',
                'Material': 'Nickel-Plated Steel',
                'Package': 'Assorted Pack'
            },
            features: [
                {
                    icon: <ShieldIcon />,
                    title: 'Durability',
                    description: 'Nickel-plated finish prevents rust and corrosion, ensuring needles stay sharp and smooth for extended use.'
                },
                {
                    icon: <FactoryIcon />,
                    title: 'Compatibility',
                    description: 'Complete size range from fine to heavy-duty, suitable for all hand sewing applications and fabric types.'
                },
                {
                    icon: <BadgeIcon />,
                    title: 'Precision',
                    description: 'Ultra-sharp points and polished eyes allow smooth thread passage and precise stitching on delicate fabrics.'
                }
            ],
            applications: [
                'Professional tailoring',
                'Embroidery and decorative work',
                'Garment repairs and alterations',
                'Craft and hobby projects'
            ],

        },
        'bell-crewels': {
            title: 'Bell Crewels Hand Sewing Needles',
            description: 'Bell crewel hand sewing needles has medium long-eye, sharp tip and is recommended for embroidery work. Bell crewel needle sizes @ 1-12',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Material': 'Steel',
                'Packaging Size': 'Box',
                'Packaging Type': 'PVC',
                'Brand': 'Bell',
                'Color': 'Grey',
                'Quantity Per Pack': '1000 Pieces',
                'Is It Rust Proof': 'Rust Proof',
                'Features': 'Best use for Embroidery Work',
                'Finishing Type': 'Sleek'
            },
            variants: [
                { name: 'Bell Crewel', code: 'BC5', size: '5', length: '42', wireDia: '0.8' },
                { name: 'Bell Crewel', code: 'BC6', size: '6', length: '40', wireDia: '0.8' },
                { name: 'Bell Crewel', code: 'BC7', size: '7', length: '38', wireDia: '0.7' },
                { name: 'Bell Crewel', code: 'BC8', size: '8', length: '36', wireDia: '0.6' },
                { name: 'Bell Crewel', code: 'BC9', size: '9', length: '35', wireDia: '0.5' },
                { name: 'Bell Crewel', code: 'BC10', size: '10', length: '33', wireDia: '0.45' },
                { name: 'Bell Crewel', code: 'BC11', size: '11', length: '31', wireDia: '0.45' },
                { name: 'Bell Crewel', code: 'BC12', size: '12', length: '29', wireDia: '0.45' },
                { name: 'Bell Crewel', code: 'BC1', size: '1', length: '47', wireDia: '0.85' },
            ],
            additionalInfo: {
                'Item Code': 'BC',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 Needles (25 Needles x 40 Pouches) 1 Carton = 100 Boxes'
            },
            features: [
                { icon: <TailorIcon />, title: 'Embroidery Special', description: 'Best use for Embroidery Work' },
                { icon: <StarIcon />, title: 'Sleek Finish', description: 'Sleek finishing type' }
            ],
            applications: ['Embroidery Work', 'Hand Sewing']
        },
        'bell-darner': {
            title: 'Bell Darner Hand Sewing Needles',
            description: 'Bell darner hand sewing needles has large eye, sharp tip and is recommended for darning. Bell darner needle sizes @ 1-12',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Usage/Application': 'Hand Sewing',
                'Packaging Size': '25 Needles x 40 Packets',
                'Color': 'Steel',
                'Quantity Per Pack': '1000 Pieces',

                'Is It Rust Proof': 'Rust Proof',
                'Features': 'Yarning',
                'Brand': 'Bell'
            },
            additionalInfo: {
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 Needles (25 Needles x 40 Pouches) 1 Carton = 100 Boxes'
            },
            features: [
                { icon: <EyeIcon />, title: 'Large Eye', description: 'Easy to thread' },
                { icon: <StarIcon />, title: 'Sharp Tip', description: 'Recommended for darning' }
            ],
            applications: ['Darning', 'Hand Sewing']
        },
        'bell-beading': {
            title: 'Bell Beading Hand Sewing Needles',
            description: 'Bell beading hand sewing needles has very small eye, fine sizes and is recommended for threading beads and sequins. Bell beading needle sizes @ 10,11,12',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Material': 'Stainless Steel',
                'Needle Size': '10,11,12,16Inch',
                'Packaging Type': 'Box',
                'Brand': 'Bell',
                'Color': 'Steel',
                'Quantity Per Pack': '1000 Pieces',
                'Is It Rust Proof': 'Rust Proof',
                'Features': 'Export Quality',
                'Usage/Application': 'Hand Sewing Needles'
            },
            additionalInfo: {
                'Item Code': 'BB12',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 Needles (25 Needles x 40 Pouches) 1 Carton = 30 Boxes'
            },
            features: [
                { icon: <StarIcon />, title: 'Fine Sizes', description: 'Very small eye for beads' },
                { icon: <BadgeIcon />, title: 'Quality', description: 'Export Quality' }
            ],
            applications: ['Threading Beads', 'Sequins', 'Hand Sewing']
        },
        'bell-compact-threader': {
            title: 'Bell Compact Hand Sewing Needles With Threader',
            description: 'Bell compact hand sewing needles has assorted needles with threaders and are recommended for household use.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Material': 'High carbon needle wire',
                'Packaging Size': '10 Cards of 30 pcs Compact needle each',
                'Needle Size': 'Assorted',
                'Brand': 'Bell',
                'Features': 'Premium Compact',
                'Finishing Type': 'Nickel',
                'Usage/Application': 'General Domestic Sewing'
            },
            additionalInfo: {
                'Item Code': 'BNC',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box =10 Cards of 30 pcs Compact needle with Threader each 1 Carton = 52 Boxes'
            },
            features: [
                { icon: <PackageIcon />, title: 'Assorted', description: 'Needles with threaders' },
                { icon: <HomeIcon />, title: 'Household', description: 'General Domestic Sewing' }
            ],
            applications: ['Household Use', 'General Domestic Sewing']
        },
        'bell-darner-3-5': {
            title: 'Bell Darner 3.5" Needles',
            description: 'Bell Darner 3.5" has Long-Eye and also has sharp tip. It is recommended for basting and layering fabrics together.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Packaging Size': '25 Needles/ Pouch x 40 Pouches',
                'Packaging Type': 'PVC Pouches',
                'Color': 'Steel',
                'Quantity Per Pack': '1000 pcs',

                'Is It Rust Proof': 'Rust Proof',
                'Features': 'Basting And Layering Fabrics Together',
                'Brand': 'Bell'
            },
            additionalInfo: {
                'Item Code': 'B3.5',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 Needles (25 Needles x 40 Pouches) 1 Carton = 30 Boxes'
            },
            features: [
                { icon: <RulerIcon />, title: 'Long Eye', description: 'Easy threading' },
                { icon: <StarIcon />, title: 'Sharp Tip', description: 'Basting and layering' }
            ],
            applications: ['Basting', 'Layering Fabrics']
        },
        'bell-book-binding': {
            title: 'Bell Book Binding Needles',
            description: 'Bell book binder hand sewing needles has medium-long eye, sharp tip and is recommended for binding work. Bell book binder needle sizes @ 3",4",5",6",8"',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Material': 'Steel',
                'Needle Size': '4",5",6",8" Inch',
                'Packaging Type': 'Foil',
                'Color': 'Silver',
                'Brand': 'Bell',
                'Quantity Per Pack': '100 Pcs',
                'Is It Rust Proof': 'Rust Proof',
                'Features': 'Binding Books'
            },
            additionalInfo: {
                'Item Code': 'BBB',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 100 Needles (25 Needles x 4 Pouches) 1 Carton = 100 Boxes'
            },
            features: [
                { icon: <BookIcon />, title: 'Binding', description: 'Recommended for binding work' },
                { icon: <StarIcon />, title: 'Sharp Tip', description: 'Medium-long eye' }
            ],
            applications: ['Binding Work', 'Book Binding', 'Hand Sewing']
        },
        'bell-short-darner-4-0': {
            title: 'Bell Short Darner 4/0 Needles',
            description: 'Bell darner 4/0 hand sewing needles has long-eye, sharp tip and is recommended for mending and darning',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Material': 'High carbon needle wire',
                'Packaging Size': '25 Needles x 40 Packets',
                'Needle Size': '2.75"',
                'Brand': 'Bell',
                'Features': 'Pouch Pack',
                'Finishing Type': 'Nickel',
                'Usage/Application': 'Mending & Darning'
            },
            additionalInfo: {
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immedaite',
                'Packaging Details': '1 Box = 1000 Needles (25 Needles x 40 Pouches) 1 Carton = 30 Boxes'
            },
            features: [
                { icon: <StarIcon />, title: 'Long Eye', description: 'Recommended for mending' },
                { icon: <EyeIcon />, title: 'Sharp Tip', description: 'Darning & Mending' }
            ],
            applications: ['Mending', 'Darning']
        },
        'bell-double-long-darner': {
            title: 'Bell Double Long Darner Hand Sewing Needles',
            description: 'Bell long darner 3/0 hand sewing needles has long-eye, sharp tip and is recommended for mending and darning.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Packaging Size': '1000 pcs',
                'Needle Size': '5 & 6',
                'Packaging Type': 'Pouch',
                'Color': 'Silver',
                'Brand': 'Bell',
                'Quantity Per Pack': '25 pcs',

                'Is It Rust Proof': 'Rust Proof',
                'Features': 'mending and darning.',
                'Finishing Type': 'Nickel',
                'Item No': 'DLD',
                'Country of Origin': 'Made in India'
            },
            additionalInfo: {
                'Item Code': 'BDLD',
                'Production Capacity': '10000 Box',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 pcs 1 Carton = 45 Boxes'
            },
            features: [
                { icon: <EyeIcon />, title: 'Long Eye', description: 'For Mending/Darning' },
                { icon: <StarIcon />, title: 'Sharp Tip', description: 'Nickel Finish' }
            ],
            applications: ['Mending', 'Darning']
        },
        'bell-gold-compact': {
            title: 'Bell Gold compact Hand Sewing Needles',
            description: 'Bell gold-eye compact hand sewing needles has assorted needles with threader and are recommended for household use.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Usage/Application': 'Hand Sewing',
                'Packaging Size': '10 Cards',
                'Needle Size': 'Assorted',
                'Packaging Type': 'card',
                'Brand': 'Bell',
                'Color': 'Black',
                'Features': '30 pcs Assorted needle set',
                'Finishing Type': 'Nickel',
                'Country of Origin': 'Made in India'
            },
            additionalInfo: {
                'Item Code': 'BNGC',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 10 Cards 1 Carton = 52 Boxes'
            },
            features: [
                { icon: <StarIcon />, title: 'Gold Eye', description: 'Assorted set' },
                { icon: <HomeIcon />, title: 'Household', description: 'For general use' }
            ],
            applications: ['Household Use', 'Hand Sewing']
        },
        'bell-compact-threader-25': {
            title: 'Bell Compact Hand Sewing Needles With Threader (25 pcs)',
            description: 'Bell compact hand sewing needles has assorted needles with threaders and are recommended for household use.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Usage/Application': 'Hand Sewing',
                'Packaging Size': '25 Pcs',
                'Needle Size': 'Assorted',
                'Packaging Type': 'Card',
                'Brand': 'Bell',
                'Features': 'Different type of needles for multipurpose use',
                'Finishing Type': 'Nickel',
                'Country of Origin': 'Made in India'
            },
            additionalInfo: {
                'Item Code': 'BNCC',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immedaite',
                'Packaging Details': '1Box = 10 card with threaders 1 Carton = 52 Boxes'
            },
            features: [
                { icon: <PackageIcon />, title: '25 Pcs', description: 'Assorted with threader' },
                { icon: <HomeIcon />, title: 'Multipurpose', description: 'For household use' }
            ],
            applications: ['Household Use', 'Hand Sewing']
        },
        'bell-betweens': {
            title: 'Bell Betweens Hand Sewing Needles',
            description: 'Bell between hand sewing needles has small eye, sharp tip and is recommended for embroidery work. Bell between needle sizes @ 1-12',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Material': 'Stainless Steel',
                'Packaging Type': 'Box',
                'Color': 'Steel',
                'Brand': 'Bell',
                'Quantity Per Pack': '1000 Pieces',
                'Is It Rust Proof': 'Rust Proof',
                'Features': 'Export Quality',
                'Usage/Application': 'Hand Sewing Needles'
            },
            additionalInfo: {
                'Item Code': 'BB',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 Needles (25 Needles x 40 Pouches) 1 Carton = 100 Boxes'
            },
            features: [
                { icon: <EyeIcon />, title: 'Small Eye', description: 'For embroidery' },
                { icon: <StarIcon />, title: 'Sharp Tip', description: 'Export Quality' }
            ],
            applications: ['Embroidery', 'Hand Sewing']
        },
        'bell-sharps-1-5': {
            title: 'Bell Sharps 1-5 Hand Sewing Needles',
            description: 'Bell sharps hand sewing needles has small eye, sharp tip and is recommended for general domestic sewing. Bell sharp needle sizes @ 1-5',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Material': 'High carbon needle wire',
                'Packaging Size': '25 Needles x 200 Packets',
                'Needle Size': '1,2,3,4,5',
                'Brand': 'Bell',
                'Features': 'Pouch Pack',
                'Finishing Type': 'Nickel',
                'Usage/Application': 'General Domestic Sewing',
                'Country of Origin': 'Made in India'
            },
            additionalInfo: {
                'Item Code': 'BS1-5',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 5000 Needles (25 Needles x 200 Pouches) 1 Carton = 20 Boxes'
            },
            features: [
                { icon: <EyeIcon />, title: 'Small Eye', description: 'Sharp Tip' },
                { icon: <HomeIcon />, title: 'Domestic', description: 'General Domestic Sewing' }
            ],
            applications: ['General Domestic Sewing', 'Hand Sewing']
        },
        'bell-capoteras-6-0': {
            title: 'Bell Capoteras 6/0 Needles',
            description: 'Bell capotera hand sewing needles has long-eye, sharp tip and is recommended for embroidery work using multiple threads.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Material': 'Steel',
                'Needle Size': '6Inch',
                'Packaging Type': 'PVC Pouches',
                'Color': 'Silver',
                'Brand': 'Bell',
                'Quantity Per Pack': '1000 Pieces',
                'Is It Rust Proof': 'Rust Proof',
                'Features': 'Multiple Threads For Embroidery'
            },
            additionalInfo: {
                'Item Code': 'B60',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 Needles (25 Needles x 40 Pouches) 1 Carton = 44 Boxes'
            },
            features: [
                { icon: <EyeIcon />, title: 'Long Eye', description: 'Multiple Threads' },
                { icon: <StarIcon />, title: 'Sharp Tip', description: 'For Embroidery' }
            ],
            applications: ['Embroidery Work', 'Hand Sewing']
        },
        'bell-tapestry': {
            title: 'Bell Tapestry Hand Sewing Needles',
            description: 'Bell tapestry hand sewing needles has extra long-eye, sharp tip and is recommended for cross stitching work.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Material': 'Stainless Steel',
                'Needle Size': '1.1Inch',
                'Packaging Type': 'PVC Pouch',
                'Color': 'Silver',
                'Brand': 'Bell',
                'Quantity Per Pack': '1000 Pieces',
                'Is It Rust Proof': 'Rust Proof',
                'Features': 'Export Quality',
                'Usage/Application': 'Cross Stitching Work'
            },
            additionalInfo: {
                'Item Code': 'BT18',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': 'Box Packaging consist of 1000 Needles'
            },
            features: [
                { icon: <EyeIcon />, title: 'Extra Long Eye', description: 'Cross Stitching' },
                { icon: <StarIcon />, title: 'Sharp Tip', description: 'Export Quality' }
            ],
            applications: ['Cross Stitching', 'Hand Sewing']
        },
        'bell-sharps': {
            title: 'Bell Sharps Hand Sewing Needles',
            description: 'Bell sharp hand sewing needles has medium small eye, sharp tip and is recommended for general domestic sewing. Bell sharp needle sizes @ 1-12',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Material': 'Steel',
                'Packaging Size': '25 Needles/ Pouch x 40 Pouches',
                'Packaging Type': 'PVC Pouches',
                'Brand': 'Bell',
                'Quantity Per Pack': '1000 Pieces',
                'Is It Rust Proof': 'Rust Proof',
                'Features': 'General Domestic Sewing',
                'Usage/Application': 'General Domestic Sewing'
            },
            additionalInfo: {
                'Item Code': 'BS',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 Needles (25 Needles x 40 Pouches) 1 Carton = 100 Boxes'
            },
            features: [
                { icon: <StarIcon />, title: 'Sharp Tip', description: 'Small eye' },
                { icon: <HomeIcon />, title: 'Domestic', description: 'General Sewing' }
            ],
            applications: ['General Domestic Sewing', 'Hand Sewing']
        },
        'bell-long-darner-3-0': {
            title: 'Bell Long Darner 3/0 Hand Sewing Needles',
            description: 'Bell long darner 3/0 hand sewing needles has long-eye, sharp tip and is recommended for mending and darning.',
            inStock: true,
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: {
                'Packaging Type': '25pcs x40 pouches',
                'Color': 'Silver',
                'Quantity Per Pack': '1000 pcs',

                'Is It Rust Proof': 'Rust Proof',
                'Item No': '3/0',
                'Thickness': '1.80MM'
            },
            additionalInfo: {
                'Item Code': 'B30',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 pcs 1 carton = 20 boxes'
            },
            features: [
                { icon: <EyeIcon />, title: 'Long Eye', description: 'Mending and darning' },
                { icon: <StarIcon />, title: 'Sharp Tip', description: 'High Quality' }
            ],
            applications: ['Mending', 'Darning']
        },
        'safety-pins': {
            title: 'Safety Pins - Aromi & Panda',
            description: 'High-quality safety pins available in brass and steel finishes. Strong springs and corrosion-resistant materials make them ideal for garment manufacturing and general use.',
            inStock: true,
            images: [
                '/images/safety-pins.png',
                '/images/safety-pins.png',
                '/images/safety-pins.png',
                '/images/safety-pins.png'
            ],
            specifications: {
                'Part Number': 'BELL-SAF-MIX',
                'Size Range': '0-4 (Multiple Sizes)',
                'Material': 'Brass & Steel',
                'Finish': 'Nickel/Brass Plated',
                'Package': 'Bulk Available'
            },
            features: [
                {
                    icon: <ShieldIcon />,
                    title: 'Durability',
                    description: 'Hardened steel springs maintain tension through thousands of uses without weakening or breaking.'
                },
                {
                    icon: <FactoryIcon />,
                    title: 'Compatibility',
                    description: 'Available in multiple sizes for various applications, from delicate fabrics to heavy-duty industrial use.'
                },
                {
                    icon: <BadgeIcon />,
                    title: 'Precision',
                    description: 'Smooth clasp mechanism and sharp points ensure secure fastening without damaging fabrics.'
                }
            ],
            applications: [
                'Garment manufacturing and assembly',
                'Pattern making and draping',
                'Laundry and dry cleaning',
                'General purpose fastening'
            ]
        },

        'bell-tailoring-scissors-9': {
            title: 'Bell 9" Tailoring Scissors',
            description: 'Bell Tailoring Scissors, German Steel, Bigger Brass Bolt, Sharper Blades, Export Quality, Premium Packaging.',
            inStock: true,
            images: [
                '/assets/images/scissors/BS9.jpg',
                '/assets/images/scissors/BS9-action.jpg',
                '/assets/images/scissors/BS-ALL.jpg'
            ],
            specifications: {
                'Minimum Order Quantity': '60 Box',
                'Size': '9 Inch',
                'Brand': 'Bell',
                'Handle Type': 'Straight',
                'Model Name/Number': 'BS9',
                'Usage/Application': 'Tailor',
                'Weight': '220 G',
                'Material': 'German Steel'
            },
            additionalInfo: {
                'Item Code': 'BS9',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Carton = 60 Boxes'
            },
            features: [
                { icon: <ShieldIcon />, title: 'German Steel', description: 'High quality German Steel construction' },
                { icon: <BadgeIcon />, title: 'Sharper Blades', description: 'Precision engineered sharper blades' },
                { icon: <PackageIcon />, title: 'Premium Packaging', description: 'Export Quality Premium Packaging' }
            ],
            applications: ['Tailoring', 'Fabric Cutting']
        },
        'bell-tailoring-scissors-10': {
            title: 'Bell 10" Tailoring Scissors',
            description: 'Bell Tailoring Scissors, German Steel, Bigger Brass Bolt, Sharper Blades, Export Quality, Premium Packaging.',
            inStock: true,
            images: [
                '/assets/images/scissors/BS10.jpg',
                '/assets/images/scissors/BS10-action.jpg',
                '/assets/images/scissors/BS-ALL.jpg'
            ],
            specifications: {
                'Minimum Order Quantity': '80 Box',
                'Size': '10 Inch',
                'Brand': 'Bell',
                'Handle Type': 'Straight',
                'Model Name/Number': 'BS10',
                'Usage/Application': 'Tailor',
                'Weight': '280 Gms',
                'Material': 'German Steel'
            },
            additionalInfo: {
                'Item Code': 'BS10',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Carton = 80 Boxes'
            },
            features: [
                { icon: <ShieldIcon />, title: 'German Steel', description: 'High quality German Steel construction' },
                { icon: <BadgeIcon />, title: 'Sharper Blades', description: 'Precision engineered sharper blades' },
                { icon: <PackageIcon />, title: 'Premium Packaging', description: 'Export Quality Premium Packaging' }
            ],
            applications: ['Tailoring', 'Fabric Cutting']
        },
        'bell-tailoring-scissors-11': {
            title: 'Bell 11" Tailoring Scissors',
            description: 'Bell Tailoring Scissors, German Steel, Bigger Brass Bolt, Sharper Blades, Export Quality, Premium Packaging.',
            inStock: true,
            images: [
                '/assets/images/scissors/BS11-action.jpeg',
                '/assets/images/scissors/BS11.jpeg',
                '/assets/images/scissors/BS-ALL.jpg'
            ],
            specifications: {
                'Minimum Order Quantity': '60 Box',
                'Size': '11 Inch',
                'Brand': 'Bell',
                'Handle Type': 'Straight',
                'Model Name/Number': 'BS11',
                'Usage/Application': 'Tailor',
                'Weight': '355 gms',
                'Material': 'German Steel'
            },
            additionalInfo: {
                'Item Code': 'BS11',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Carton = 60 Boxes'
            },
            features: [
                { icon: <ShieldIcon />, title: 'German Steel', description: 'High quality German Steel construction' },
                { icon: <BadgeIcon />, title: 'Sharper Blades', description: 'Precision engineered sharper blades' },
                { icon: <PackageIcon />, title: 'Premium Packaging', description: 'Export Quality Premium Packaging' }
            ],
            applications: ['Tailoring', 'Fabric Cutting']
        },
        'bell-tailoring-scissors-12': {
            title: 'Bell 12" Tailoring Scissors',
            description: 'Bell Tailoring Scissors. German Steel, Bigger Brass Bolt, Sharper Blades, Export Quality, Premium Packaging. Large Eye makes for ease off control of the scissors. No Lifting or Shifting of the Fabric.',
            inStock: true,
            images: [
                '/assets/images/scissors/BS12.jpeg',
                '/assets/images/scissors/BS12-action.jpeg',
                '/assets/images/scissors/BS-ALL.jpg'
            ],
            specifications: {
                'Minimum Order Quantity': '60 Box',
                'Size': '12 Inch',
                'Brand': 'Bell',
                'Handle Type': 'Bent',
                'Model Name/Number': 'BS12',
                'Usage/Application': 'Tailor',
                'Weight': '482 gms',
                'Material': 'German Steel'
            },
            additionalInfo: {
                'Item Code': 'BS12',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Carton = 60 Boxes'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Ease of Control', description: 'Large Eye makes for ease of control of the scissors' },
                { icon: <BadgeIcon />, title: 'Fabric Stability', description: 'No Lifting or Shifting of the Fabric' },
                { icon: <PackageIcon />, title: 'Professional', description: 'Fabric Scissors for professional dressmakers and tailors' }
            ],
            applications: ['Tailoring', 'Fabric Cutting', 'Professional Dressmaking']
        },
        'sewing-accessories': {
            title: 'Bell Sewing Accessories',
            description: 'Comprehensive collection of professional-grade sewing accessories including threads, buttons, measuring tapes, thimbles, and more for all your tailoring needs.',
            inStock: true,
            images: [
                '/images/sewing-accessories.png',
                '/images/sewing-accessories.png',
                '/images/sewing-accessories.png',
                '/images/sewing-accessories.png'
            ],
            specifications: {
                'Part Number': 'BELL-ACC-RANGE',
                'Category': 'Mixed Accessories',
                'Quality': 'Professional Grade',
                'Variety': '100+ Items',
                'Packaging': 'Bulk & Retail'
            },
            features: [
                {
                    icon: <ShieldIcon />,
                    title: 'Durability',
                    description: 'All accessories manufactured to professional standards, ensuring reliability and longevity in demanding environments.'
                },
                {
                    icon: <FactoryIcon />,
                    title: 'Compatibility',
                    description: 'Complete range covers all sewing and tailoring needs, from basic to specialized applications.'
                },
                {
                    icon: <BadgeIcon />,
                    title: 'Precision',
                    description: 'Each accessory designed for accuracy and ease of use, helping professionals achieve perfect results.'
                }
            ],
            applications: [
                'Complete tailoring setups',
                'Garment manufacturing facilities',
                'Retail sewing supply stores',
                'Educational institutions'
            ]
        },
        'bell-steel-press-button': {
            title: 'Bell Steel Press Button',
            description: 'Bell Press Button. Material = Steel (Nickel Plated). Size = 1 (9mm). 1 Carton = 300 Boxes. 1 Box = 10 Cards. 1 card = 20 Sets.',
            inStock: true,
            datasheet: '/assets/datasheets/ACCESSORIES.pdf',
            images: ['/images/sewing-accessories.png', '/images/sewing-accessories.png', '/images/sewing-accessories.png', '/images/sewing-accessories.png'],
            specifications: {
                'Minimum Order Quantity': '300 Box',
                'Material': 'Metal',
                'Shape': 'Round',
                'Size': '1',
                'Color': 'Silver',
                'Brand': 'Bell',
                'Packaging Type': 'Card',
                'Set Contain': '200 Sets',
                'Country of Origin': 'Made in India',
                'Rust Protective': 'Yes'
            },
            additionalInfo: {
                'Item Code': 'BPB-s',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immeditate',
                'Packaging Details': '1 Box = 10 cards ( 200 sets) 1 card = 20 sets 1 carton = 200 Boxes'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Rust Protective', description: 'Yes' },
                { icon: <CheckIcon />, title: 'Quality', description: 'Made in India' }
            ],
            applications: ['Garments', 'Tailoring']
        },
        'bell-brass-press-button': {
            title: 'Bell Brass Press Button',
            description: 'Bell Brass Press Button Features: Superior Guide Hole Design, High-Quality Brass Material, Smooth Snap Action, Precision Machined Finish. Ideal for Tailoring & Garment Use.',
            inStock: true,
            datasheet: '/assets/datasheets/ACCESSORIES.pdf',
            images: ['/images/sewing-accessories.png', '/images/sewing-accessories.png', '/images/sewing-accessories.png', '/images/sewing-accessories.png'],
            specifications: {
                'Minimum Order Quantity': '200 Box',
                'Material': 'Brass',
                'Shape': 'Round',
                'Size': '1 (9mm)',
                'Color': 'Silver',
                'Brand': 'Bell',
                'Country of Origin': 'Made in India',
                'Plating': 'Nickel',
                'Rust Proof': 'Yes'
            },
            additionalInfo: {
                'Item Code': 'BPB-B',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immedaite',
                'Packaging Details': '1 Box = 10 cards ( 200 sets) 1 card = 20 sets 1 carton = 200 Boxes'
            },
            features: [
                { icon: <StarIcon />, title: 'Superior Design', description: 'Superior Guide Hole Design & Precision Machined Finish' },
                { icon: <ShieldIcon />, title: 'Brass Material', description: 'High-Quality Brass Material' },
                { icon: <CheckIcon />, title: 'Smooth Action', description: 'Smooth Snap Action' },
                { icon: <TailorIcon />, title: 'Tailoring', description: 'Ideal for Tailoring & Garment Use' }
            ],
            applications: ['Tailoring', 'Garment Use']
        },
        'bell-needle-threader': {
            title: 'Bell Needle Threader (Aluminium)',
            description: 'Bell needle threader are made from high grade aluminum material and are used for easy threading. An essential tool for quick and frustration-free needle threading.',
            inStock: true,
            datasheet: '/assets/datasheets/ACCESSORIES.pdf',
            images: ['/assets/images/aromi pins/needle threader.png', '/assets/images/aromi pins/needle threader 2.png'],
            specifications: {
                'Packaging Type': 'Card',
                'Color': 'Silver',
                'Quantity Per Pack': '100 Cards',
                'Is It Rust Proof': 'Rust Proof',
                'Item No': 'BNT',
                'Brand': 'Bell',
                'Country of Origin': 'Made in India'
            },
            additionalInfo: {
                'Item Code': 'BNTa',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 BOX = 100 Cards 1 Carton = 50 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'High Grade Aluminium', description: 'Durable construction' },
                { icon: <ShieldIcon />, title: 'Easy Threading', description: 'Simplifies needle threading' }
            ],
            applications: ['Hand Sewing', 'Needle Threading']
        },
        'bell-loop-turner': {
            title: 'Bell Loop Turner Needles',
            description: 'The Bell Loop Turner is a versatile sewing tool for turning fabric tubes right-side out. Features a slender shaft and hooked end for effortless fabric grabbing and turning. Ideal for creating fabric straps, spaghetti straps, belts, and more.',
            inStock: true,
            datasheet: '/assets/datasheets/ACCESSORIES.pdf',
            images: ['/assets/images/aromi pins/LOOPTTURNER.png', '/assets/images/aromi pins/LOOPTURNER.png'],
            specifications: {
                'Minimum Order Quantity': '10 Box',
                'Usage/Application': 'Hand Sewing',
                'Material': 'Steel',
                'Packaging Type': 'Card',
                'Color': 'Silver',
                'Quantity Per Pack': '10 Cards',
                'Size': '10.5 "',
                'Is It Rust Proof': 'Rust Proof',
                'Item No.': 'BLT',
                'Thickness': '1.60mm',
                'Brand': 'Bell',
                'Country of Origin': 'Made in India',
                'Plating': 'Nickel'
            },
            additionalInfo: {
                'Item Code': 'BLT',
                'Production Capacity': '10000 Box',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 box = 10 Cards 1 carton = 50 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Versatile Tool', description: 'For turning fabric tubes right-side out' },
                { icon: <ShieldIcon />, title: 'Slender Shaft', description: 'Hooked end for effortless grabbing' },
                { icon: <FactoryIcon />, title: 'Efficient', description: 'Simplifies manipulating narrow fabric tubes' },
                { icon: <BadgeIcon />, title: 'User-Friendly', description: 'Ensures efficient and precise fabric handling' }
            ],
            applications: ['Creating fabric straps', 'Spaghetti straps', 'Belts', 'Turning fabric tubes']
        },
        'bell-pearl-head-pins': {
            title: 'Bell Steel Pearl Head Pins',
            description: 'Bell Pearl Head Pins feature smooth, snag-free heads and a flexible, durable design. The polished surface ensures smoothness and rust protection, while brightly colored heads offer easy visibility. Thin points allow easy penetration without fabric damage.',
            inStock: true,
            datasheet: '/assets/datasheets/ACCESSORIES.pdf',
            images: ['/assets/images/aromi pins/BELLPEARLHEAD PINS.jpg'],
            specifications: {
                'Minimum Order Quantity': '50 Box',
                'Material': 'Steel',
                'Usage/Application': 'Head Pins',
                'Brand': 'Bell',
                'Kit Contents': '1 Disk = 40 pins',
                'Capacity': '10000 boxes',
                'Country of Origin': 'Made in India'
            },
            additionalInfo: {
                'Item Code': 'BPHP',
                'Production Capacity': '10,000 Boxes',
                'Delivery Time': 'Immedite',
                'Packaging Details': '1 Box = 1 Pouches 1 Carton = 48 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Snag-Free', description: 'Smooth heads prevent fabric snagging' },
                { icon: <ShieldIcon />, title: 'Rust Protection', description: 'Polished surface' },
                { icon: <EyeIcon />, title: 'High Visibility', description: 'Brightly coloured heads' },
                { icon: <BadgeIcon />, title: 'Fine Point', description: 'Easy penetration without damage' }
            ],
            applications: ['Heads Pins', 'Tailoring', 'Dressmaking']
        },
        'bell-seam-ripper': {
            title: 'Bell Seam Ripper',
            description: 'A seam ripper is a must-have tool for easy, precise adjustments in sewing projects. Remove stitches, open seams, fix mistakes, and trim buttonholes quickly without damaging fabric.',
            inStock: true,
            datasheet: '/assets/datasheets/ACCESSORIES.pdf',
            images: ['/assets/images/aromi pins/BELL SEAM RIPPER.jpg'],
            specifications: {
                'Minimum Order Quantity': '45 Box',
                'Packaging Type': '1 pc/ Pouch',
                'Usage/Application': 'Seam ripper',
                'Size': 'Small',
                'Features': 'Sharp point with cap',
                'Material': 'Steel ( Nickel Plated)'
            },
            additionalInfo: {
                'Item Code': 'BSR',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 10 pouches 1 Carton = 45 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Remove Stitches', description: 'Lift gently and cut thread' },
                { icon: <ShieldIcon />, title: 'Open Seams', description: 'Cut stitches along seam' },
                { icon: <BadgeIcon />, title: 'Fix Mistakes', description: 'Remove unwanted stitches safely' },
                { icon: <FactoryIcon />, title: 'Trim Buttonholes', description: 'Open buttonholes neatly' }
            ],
            applications: ['Seam Ripping', 'Stitch Removal', 'Buttonhole Opening']
        },
        'bell-pin-cushion': {
            title: 'Bell Pin Cushion',
            description: 'The Bell Pin Cushion combines functionality with refined design. Each unit includes 200 precision-crafted color ball pins securely held in a premium cushion for effortless use. Engineered for professionals, it ensures durability, safety, and convenience.',
            inStock: true,
            datasheet: '/assets/datasheets/ACCESSORIES.pdf',
            images: ['/assets/images/aromi pins/BELL PIN CUSHION.jpeg'],
            specifications: {
                'Minimum Order Quantity': '75 Box',
                'Material': 'Steel',
                'Color': 'Multi Colour',
                'Usage/Application': 'Stationary Pins',
                'Brand': 'Bell',
                'Kit Contents': '200 Pins with Cushion',
                'Country of Origin': 'Made in India',
                'Plating': 'Nickel'
            },
            additionalInfo: {
                'Item Code': 'BPC',
                'Production Capacity': '10000 Box',
                'Delivery Time': 'Immedaite',
                'Packaging Details': '1 Box = 1 pc 1 Pc =200 pins with cushion 1 Carton = 75 boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Refined Design', description: 'Functionality met with style' },
                { icon: <ShieldIcon />, title: 'Included Pins', description: '200 precision-crafted color ball pins' },
                { icon: <BadgeIcon />, title: 'Professional', description: 'Durability, Safety, Convenience' }
            ],
            applications: ['Pin Storage', 'Stationary Pins', 'Tailoring']
        },
        'bell-tracing-wheel': {
            title: 'Bell Tracing wheel',
            description: 'A tracing wheel is ideal for accurately transferring patterns and creating guides on fabric in sewing and tailoring. Transfer patterns, mark seam allowances, and create dotted lines easily.',
            inStock: true,
            datasheet: '/assets/datasheets/ACCESSORIES.pdf',
            images: ['/assets/images/aromi pins/BELL TRACING WHEEL.jpg'],
            specifications: {
                'Minimum Order Quantity': '42 Box',
                'Packaging Type': 'pouch',
                'Usage/Application': 'Transfers pattern, mark seam allowances, create dotted lines,works with carbon paper',
                'Size': 'Small',
                'Features': 'Steel( Nickel plated)'
            },
            additionalInfo: {
                'Item Code': 'BTW',
                'Production Capacity': '10,000 boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 10 Pouches 1 Carton = 42 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Transfer Patterns', description: 'Roll over pattern lines' },
                { icon: <ShieldIcon />, title: 'Mark Allowances', description: 'Create clear guidelines' },
                { icon: <BadgeIcon />, title: 'Dotted Lines', description: 'Guide for cutting or stitching' },
                { icon: <FactoryIcon />, title: 'Carbon Paper Ready', description: 'Works with carbon paper' }
            ],
            applications: ['Pattern Transfer', 'Marking Seams', 'Tailoring']
        },
        'bell-double-long-darners': {
            title: 'Bell Double Long Darners',
            description: 'Extra-long needles for heavy darning, soft sculpture, and working with thick materials.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: { 'Part Number': 'BELL-DLD-010', 'Needle Size': 'Assorted (5-6)', 'Point Style': 'Sharp Point', 'Material': 'High Carbon Steel', 'Package': 'Assorted Pack' },
            features: [{ icon: '🔧', title: 'Extra Long', description: 'Extended length for specialized darning applications.' }],
            applications: ['Heavy darning', 'Soft sculpture', 'Thick materials']
        },
        'bell-capoteras': {
            title: 'Bell Capoteras Needles',
            description: 'Heavy-duty 6-inch needles for industrial sewing, upholstery, and thick fabric work.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: { 'Part Number': 'BELL-CAP-011', 'Needle Size': '6"', 'Point Style': 'Sharp Point', 'Material': 'High Carbon Steel', 'Package': 'Individual' },
            features: [{ icon: '💪', title: 'Industrial Strength', description: 'Built for heavy-duty professional applications.' }],
            applications: ['Heavy duty sewing', 'Upholstery', 'Industrial work']
        },
        'bell-glovers': {
            title: 'Bell Glovers / Leather Needles',
            description: 'Triangular-point needles specifically designed for leather, fur, vinyl, and heavy materials.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: { 'Part Number': 'BELL-GLV-012', 'Needle Size': 'Assorted', 'Point Style': 'Triangular Point', 'Material': 'High Carbon Steel', 'Package': 'Assorted Pack' },
            features: [{ icon: '🧤', title: 'Leather Expert', description: 'Triangular point easily penetrates leather without tearing.' }],
            applications: ['Leather working', 'Fur', 'Vinyl', 'Glove making']
        },
        'bell-sail': {
            title: 'Bell Sail Needles',
            description: 'Heavy-duty needles for sailmaking, canvas work, and sewing heavy outdoor fabrics.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: { 'Part Number': 'BELL-SAL-013', 'Needle Size': 'Assorted', 'Point Style': 'Triangular Point', 'Material': 'High Carbon Steel', 'Package': 'Assorted Pack' },
            features: [{ icon: '⛵', title: 'Marine Grade', description: 'Designed for heavy canvas and sailmaking applications.' }],
            applications: ['Canvas', 'Sails', 'Heavy material', 'Outdoor fabrics']
        },
        'bell-curved-mattress': {
            title: 'Bell Curved Mattress Needles',
            description: 'Curved needles designed for upholstery repair, mattress work, and hard-to-reach seams.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: { 'Part Number': 'BELL-CMT-014', 'Needle Size': 'Assorted', 'Point Style': 'Curved', 'Material': 'High Carbon Steel', 'Package': 'Assorted Pack' },
            features: [{ icon: '🛏️', title: 'Curved Design', description: 'Curved shape reaches difficult angles in upholstery.' }],
            applications: ['Upholstery repair', 'Mattress', 'Curved seams']
        },
        'bell-sacking': {
            title: 'Bell Sacking Needles',
            description: 'Heavy needles for sewing sacks, jute bags, and coarse industrial fabrics.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: { 'Part Number': 'BELL-SCK-015', 'Needle Size': 'Assorted', 'Point Style': 'Sharp Point', 'Material': 'High Carbon Steel', 'Package': 'Assorted Pack' },
            features: [{ icon: '📦', title: 'Industrial', description: 'Built to handle coarse jute and heavy sacks.' }],
            applications: ['Sacking', 'Jute bags', 'Coarse fabrics']
        },
        'bell-packing': {
            title: 'Bell Packing Needles',
            description: 'Extra-heavy needles for packing heavy crates, bags, and industrial packaging applications.',
            inStock: true,
            datasheet: '/assets/datasheets/HAND-SEWING-NEEDLES.pdf',
            images: ['/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png', '/images/hand-sewing-needles.png'],
            specifications: { 'Part Number': 'BELL-PCK-016', 'Needle Size': 'Assorted', 'Point Style': 'Sharp Point', 'Material': 'High Carbon Steel', 'Package': 'Assorted Pack' },
            features: [{ icon: '📦', title: 'Extra Heavy', description: 'Maximum strength for industrial packaging.' }],
            applications: ['Packing heavy crates/bags', 'Industrial packaging']
        },
        // DBx1 Industrial Sewing Machine Needles
        // Industrial Sewing Machine Needles - New Bell Models
        'bell-hax1-sewing-machine-needles': {
            title: 'Bell HAX1 Sewing Machine Needles',
            description: 'We are a leading Manufacturer of bell hax1 sewing machine needles from Chennai, India.',
            inStock: true,
            datasheet: '/assets/datasheets/MACHINE-NEEDLES.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Minimum Order Quantity': '30 Box',
                'Material': 'Steel',
                'Usage/Application': 'Domestic Sewing Needles',
                'Machine Needle Size': '11,14,16,18,21',
                'Packaging Type': 'Box',
                'Type': 'Regular Point',
                'Color': 'Silver',
                'Finish': 'Nickel',
                'Quantity Per Pack': '10 Needles',
                'Packaging Size': '500 Needles',
                'Set Content': '10 Needles',
                'Is It Rust Proof': 'Rust Proof',
                'Brand': 'Bell'
            },
            variants: [
                { name: 'Bell HAX1 Sewing Machine Needles', code: 'HAX1', size: '11', length: '33.80 mm', wireDia: '2.02 mm' },
                { name: 'Bell HAX1 Sewing Machine Needles', code: 'HAX1', size: '14', length: '33.80 mm', wireDia: '2.02 mm' },
                { name: 'Bell HAX1 Sewing Machine Needles', code: 'HAX1', size: '16', length: '33.80 mm', wireDia: '2.02 mm' },
                { name: 'Bell HAX1 Sewing Machine Needles', code: 'HAX1', size: '18', length: '33.80 mm', wireDia: '2.02 mm' },
                { name: 'Bell HAX1 Sewing Machine Needles', code: 'HAX1', size: '21', length: '33.80 mm', wireDia: '2.02 mm' }
            ],
            additionalInfo: {
                'Item Code': 'HAX1',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 500 Needles 1 Carton = 30 Boxes',
                'System Usage': 'Home Sewing, Computer embroidery needles'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Bell Needles System', description: 'HAX1 (Similar: 15X1, 130/705H)' },
                { icon: <StarIcon />, title: 'Usage', description: 'Home Sewing, Computer embroidery' }
            ],
            applications: ['Home Sewing', 'Computer embroidery']
        },
        'bell-dbxk5-sewing-machine-needles': {
            title: 'Bell DBXK5 Sewing Machine Needles',
            description: 'We are a leading Manufacturer of bell dbxk5 sewing machine needles from Chennai, India.',
            inStock: true,
            datasheet: '/assets/datasheets/MACHINE-NEEDLES.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Minimum Order Quantity': '30 Box',
                'Material': 'Steel',
                'Usage/Application': 'Sewing Machine Needles',
                'Machine Needle Size': '11,14,16,18,21',
                'Packaging Type': 'Box',
                'Type': 'Regular Point',
                'Color': 'Silver',
                'Finish': 'Chrome',
                'Quantity Per Pack': '10 Needles',
                'Packaging Size': '500 Needles',
                'Set Content': '10 Needles',
                'Is It Rust Proof': 'Rust Proof',
                'Brand': 'Bell',
                'Item No.': 'DBXK5'
            },
            variants: [
                { name: 'Bell DBXK5 Sewing Machine Needles', code: 'DBXK5', size: '11', length: '33.80 mm', wireDia: '1.63 mm' },
                { name: 'Bell DBXK5 Sewing Machine Needles', code: 'DBXK5', size: '14', length: '33.80 mm', wireDia: '1.63 mm' },
                { name: 'Bell DBXK5 Sewing Machine Needles', code: 'DBXK5', size: '16', length: '33.80 mm', wireDia: '1.63 mm' },
                { name: 'Bell DBXK5 Sewing Machine Needles', code: 'DBXK5', size: '18', length: '33.80 mm', wireDia: '1.63 mm' },
                { name: 'Bell DBXK5 Sewing Machine Needles', code: 'DBXK5', size: '21', length: '33.80 mm', wireDia: '1.63 mm' }
            ],
            additionalInfo: {
                'Item Code': 'DBXK5',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 500 Needles 1 Carton = 30 Boxes',
                'System Usage': 'High speed for embroidery applications'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Bell Needles System', description: 'DBXK5 (Similar: 16X231, 1738)' },
                { icon: <StarIcon />, title: 'Usage', description: 'High speed for embroidery applications' }
            ],
            applications: ['Embroidery', 'Commercial sewing']
        },
        'bell-dpx5-sewing-machine-needles': {
            title: 'Bell DPX5 Sewing Machine Needles',
            description: 'We are a leading Manufacturer of bell dpx5 sewing machine needles from Chennai, India.',
            inStock: true,
            datasheet: '/assets/datasheets/MACHINE-NEEDLES.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Minimum Order Quantity': '30 Box',
                'Material': 'Steel',
                'Usage/Application': 'Sewing Machine Needles',
                'Machine Needle Size': '11,14,16,18,21',
                'Packaging Type': 'Box',
                'Type': 'Regular Point',
                'Color': 'Silver',
                'Finish': 'Carbide',
                'Quantity Per Pack': '10 Needles',
                'Packaging Size': '500 Needles',
                'Set Content': '10 Needles',
                'Is It Rust Proof': 'Rust Proof',
                'Brand': 'Bell',
                'Item No.': 'DPX5'
            },
            variants: [
                { name: 'Bell DPX5 Sewing Machine Needles', code: 'DPX5', size: '11', length: '33.90 mm', wireDia: '2.00 mm' },
                { name: 'Bell DPX5 Sewing Machine Needles', code: 'DPX5', size: '14', length: '33.90 mm', wireDia: '2.00 mm' },
                { name: 'Bell DPX5 Sewing Machine Needles', code: 'DPX5', size: '16', length: '33.90 mm', wireDia: '2.00 mm' },
                { name: 'Bell DPX5 Sewing Machine Needles', code: 'DPX5', size: '18', length: '33.90 mm', wireDia: '2.00 mm' },
                { name: 'Bell DPX5 Sewing Machine Needles', code: 'DPX5', size: '21', length: '33.90 mm', wireDia: '2.00 mm' }
            ],
            additionalInfo: {
                'Item Code': 'DPX5',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 500 Needles 1 Carton = 30 Boxes',
                'System Usage': 'Lock stitch, Button Holing, Zigzag, Double Needle'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Bell Needles System', description: 'DPX5 (Similar: 134R, 135X5)' },
                { icon: <StarIcon />, title: 'Usage', description: 'Lock stitch, Button Holing, Zigzag' }
            ],
            applications: ['Lock stitch', 'Button Holing', 'Zigzag', 'Double Needle']
        },
        'bell-dbx1-sewing-machine-needles': {
            title: 'Bell DBX1 Sewing Machine Needles',
            description: 'We are a leading Manufacturer of bell dbx1 sewing machine needles from Chennai, India.',
            inStock: true,
            datasheet: '/assets/datasheets/MACHINE-NEEDLES.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Minimum Order Quantity': '30 Box',
                'Material': 'Steel',
                'Usage/Application': 'Industrial Machine Needles',
                'Machine Needle Size': '9-25',
                'Packaging Type': 'Box',
                'Type': 'Regular Point',
                'Color': 'Silver',
                'Finish': 'Chrome',
                'Quantity Per Pack': '500 pcs',
                'Packaging Size': '500 needles',
                'Set Content': '10 needles',
                'Is It Rust Proof': 'Rust Proof',
                'Brand': 'Bell',
                'Item No.': 'DBX1'
            },
            variants: [
                { name: 'Bell DBX1 Sewing Machine Needles', code: 'DBX1', size: '9-25', length: '33.80 mm', wireDia: '1.63 mm' }
            ],
            additionalInfo: {
                'Item Code': 'DBX1',
                'Production Capacity': '10000 BOXES',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 500 Needles 1 Carton = 30 Boxes',
                'System Usage': 'Lock stitch & for general sewing on light and medium woven fabrics. High speed computer embroidery needles.'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Bell Needles System', description: 'DBX1 (Similar: 16X231, 1738)' },
                { icon: <StarIcon />, title: 'Usage', description: 'Lock stitch, Embroidery' }
            ],
            applications: ['Lock stitch', 'General sewing', 'Embroidery']
        },
        'bell-gold-dbx1-sewing-machine-needles': {
            title: 'Bell Gold DBX1 Sewing Machine Needles',
            description: 'We are a leading Manufacturer of bell gold dbx1 sewing machine needles from Chennai, India.',
            inStock: true,
            datasheet: '/assets/datasheets/MACHINE-NEEDLES.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Minimum Order Quantity': '30 Box',
                'Material': 'Steel',
                'Usage/Application': 'Sewing Machine Needles',
                'Machine Needle Size': '14,16,18',
                'Packaging Type': 'Lid',
                'Type': 'Regular Point',
                'Color': 'Gold',
                'Quantity Per Pack': '500 Pcs',
                'Finish': 'Titanium',
                'Packaging Size': '10 Needles',
                'Set Content': '50 Lids',
                'Is It Rust Proof': 'Rust Proof',
                'Brand': 'Bell',
                'Features': 'Titanium Coating',
                'Finishing Type': 'Titanium'
            },
            variants: [
                { name: 'Bell Gold DBX1 Sewing Machine Needles', code: 'BG', size: '14', length: '33.80 mm', wireDia: '1.63 mm' },
                { name: 'Bell Gold DBX1 Sewing Machine Needles', code: 'BG', size: '16', length: '33.80 mm', wireDia: '1.63 mm' },
                { name: 'Bell Gold DBX1 Sewing Machine Needles', code: 'BG', size: '18', length: '33.80 mm', wireDia: '1.63 mm' }
            ],
            additionalInfo: {
                'Item Code': 'BG',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 500 Pcs 1 Carton = 30 Boxes'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Titanium Coated', description: 'Longer life, Heat Resistant' },
                { icon: <StarIcon />, title: 'Premium Quality', description: 'Economic Pricing, No Thread Breakage' }
            ],
            applications: ['Lock stitch', 'Embroidery', 'Basic home sewing']
        },
        'bell-dcx1-sewing-machine-needles': {
            title: 'Bell DCX1 Sewing Machine Needles',
            description: 'We are a leading Manufacturer of bell dcx1 sewing machine needles from Chennai, India.',
            inStock: true,
            datasheet: '/assets/datasheets/MACHINE-NEEDLES.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Minimum Order Quantity': '30 Box',
                'Material': 'Steel',
                'Usage/Application': 'Sewing Machine Needles',
                'Machine Needle Size': '11,14,16,18,21',
                'Packaging Type': 'Box',
                'Type': 'Regular Point',
                'Color': 'Silver',
                'Finish': 'Chrome',
                'Quantity Per Pack': '10 Needles',
                'Packaging Size': '500 Needles',
                'Set Content': '10 Needles',
                'Is It Rust Proof': 'Rust Proof',
                'Brand': 'Bell',
                'Item No.': 'DCX1'
            },
            variants: [
                { name: 'Bell DCX1 Sewing Machine Needles', code: 'DCX1', size: '11', length: '28.60 mm', wireDia: '2.02 mm' },
                { name: 'Bell DCX1 Sewing Machine Needles', code: 'DCX1', size: '14', length: '28.60 mm', wireDia: '2.02 mm' },
                { name: 'Bell DCX1 Sewing Machine Needles', code: 'DCX1', size: '16', length: '28.60 mm', wireDia: '2.02 mm' },
                { name: 'Bell DCX1 Sewing Machine Needles', code: 'DCX1', size: '18', length: '28.60 mm', wireDia: '2.02 mm' },
                { name: 'Bell DCX1 Sewing Machine Needles', code: 'DCX1', size: '21', length: '28.60 mm', wireDia: '2.02 mm' }
            ],
            additionalInfo: {
                'Item Code': 'DCX1',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 500 Needles 1 Carton = 30 Boxes',
                'System Usage': 'High speed overlock needle {Garment, Knitted wears}'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Bell Needles System', description: 'DCX1 (Similar: 81X1, MY1023A)' },
                { icon: <StarIcon />, title: 'Usage', description: 'High speed overlock needle' }
            ],
            applications: ['Overlocking', 'Serging', 'Edge finishing']
        },
        'bell-dpx17-sewing-machine-needles': {
            title: 'Bell DPX17 Sewing Machine Needles',
            description: 'We are a leading Manufacturer of bell dpx17 sewing machine needles from Chennai, India.',
            inStock: true,
            datasheet: '/assets/datasheets/MACHINE-NEEDLES.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Minimum Order Quantity': '30 Box',
                'Material': 'Steel',
                'Usage/Application': 'Sewing Machine Needles',
                'Machine Needle Size': '11,14,16,18,21',
                'Packaging Type': 'Box',
                'Type': 'Regular Point',
                'Color': 'Silver',
                'Quantity Per Pack': '10 Needles',
                'Finish': 'Chrome',
                'Packaging Size': '500 Needles',
                'Set Content': '10 Needles',
                'Is It Rust Proof': 'Rust Proof',
                'Brand': 'Bell',
                'Item No.': 'DPX17'
            },
            variants: [
                { name: 'Bell DPX17 Sewing Machine Needles', code: 'DPX17', size: '11', length: '39.00 mm', wireDia: '2.00 mm' },
                { name: 'Bell DPX17 Sewing Machine Needles', code: 'DPX17', size: '14', length: '39.00 mm', wireDia: '2.00 mm' },
                { name: 'Bell DPX17 Sewing Machine Needles', code: 'DPX17', size: '16', length: '39.00 mm', wireDia: '2.00 mm' },
                { name: 'Bell DPX17 Sewing Machine Needles', code: 'DPX17', size: '18', length: '39.00 mm', wireDia: '2.00 mm' },
                { name: 'Bell DPX17 Sewing Machine Needles', code: 'DPX17', size: '21', length: '39.00 mm', wireDia: '2.00 mm' }
            ],
            additionalInfo: {
                'Item Code': 'DPX17',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 500 Needles 1 Carton = 30 Boxes',
                'System Usage': 'Medium or Heavy material sewing Automatic machine sewing'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Bell Needles System', description: 'DPX17 (Similar: 135X17, SY355)' },
                { icon: <StarIcon />, title: 'Usage', description: 'Medium or Heavy material sewing' }
            ],
            applications: ['Medium/Heavy material', 'Automatic machine sewing']
        },
        'bell-dvx1-sewing-machine-needles': {
            title: 'Bell DVX1 Sewing Machine Needles',
            description: 'We are a leading Manufacturer of bell dvx1 sewing machine needles from Chennai, India.',
            inStock: true,
            datasheet: '/assets/datasheets/MACHINE-NEEDLES.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Minimum Order Quantity': '30 Box',
                'Material': 'Steel',
                'Usage/Application': 'Sewing Machine Needles',
                'Machine Needle Size': '11,14,16,18',
                'Packaging Type': 'Box',
                'Type': 'Regular Point',
                'Color': 'Silver',
                'Quantity Per Pack': '10 Needles',
                'Finish': 'Carbide',
                'Packaging Size': '500 Needles',
                'Set Content': '10 Needles',
                'Is It Rust Proof': 'Rust Proof',
                'Brand': 'Bell'
            },
            variants: [
                { name: 'Bell DVX1 Sewing Machine Needles', code: 'DVX1', size: '11', length: '39.00 mm', wireDia: '2.00 mm' },
                { name: 'Bell DVX1 Sewing Machine Needles', code: 'DVX1', size: '14', length: '39.00 mm', wireDia: '2.00 mm' },
                { name: 'Bell DVX1 Sewing Machine Needles', code: 'DVX1', size: '16', length: '39.00 mm', wireDia: '2.00 mm' },
                { name: 'Bell DVX1 Sewing Machine Needles', code: 'DVX1', size: '18', length: '39.00 mm', wireDia: '2.00 mm' }
            ],
            additionalInfo: {
                'Item Code': 'DVX1',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 500 Needles 1 Carton = 30 Boxes',
                'System Usage': 'Two needle double chain stitch.'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Bell Needles System', description: 'DVX1 (Similar: UY121GS, MY1001)' },
                { icon: <StarIcon />, title: 'Usage', description: 'Two needle double chain stitch' }
            ],
            applications: ['Double chain stitch', 'Coverstitch']
        },
        'bell-uy128-gas-sewing-machine-needles': {
            title: 'Bell UY128 GAS Sewing Machine Needles',
            description: 'We are a leading Manufacturer of bell uy128 gas sewing machine needles from Chennai, India.',
            inStock: true,
            datasheet: '/assets/datasheets/MACHINE-NEEDLES.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Minimum Order Quantity': '30 Box',
                'Material': 'Steel',
                'Usage/Application': 'Sewing Machine Needles',
                'Machine Needle Size': '11,14,16,18,21',
                'Packaging Type': 'Box',
                'Type': 'Regular Point',
                'Color': 'Silver',
                'Finish': 'Chrome',
                'Quantity Per Pack': '10 Needles',
                'Packaging Size': '500 Needles',
                'Set Content': '10 Needles',
                'Is It Rust Proof': 'Rust Proof',
                'Brand': 'Bell'
            },
            variants: [
                { name: 'Bell UY128 GAS Sewing Machine Needles', code: 'UY128', size: '11', length: '39.00 mm', wireDia: '2.00 mm' },
                { name: 'Bell UY128 GAS Sewing Machine Needles', code: 'UY128', size: '14', length: '39.00 mm', wireDia: '2.00 mm' },
                { name: 'Bell UY128 GAS Sewing Machine Needles', code: 'UY128', size: '16', length: '39.00 mm', wireDia: '2.00 mm' },
                { name: 'Bell UY128 GAS Sewing Machine Needles', code: 'UY128', size: '18', length: '39.00 mm', wireDia: '2.00 mm' },
                { name: 'Bell UY128 GAS Sewing Machine Needles', code: 'UY128', size: '21', length: '39.00 mm', wireDia: '2.00 mm' }
            ],
            additionalInfo: {
                'Item Code': 'UY128',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 500 Needles 1 Carton = 30 Boxes',
                'System Usage': 'Two needle double chain stitch for attaching elastic tape, rings or lace.'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Bell Needles System', description: 'UY128 GAS (Similar: UY128 GAS, MY1044)' },
                { icon: <StarIcon />, title: 'Usage', description: 'Two needle double chain stitch' }
            ],
            applications: ['Waistbands', 'Multi-needle machines', 'Elastic tape']
        },
        'bell-tqx1-sewing-machine-needles': {
            title: 'Bell TQX1 Sewing Machine Needles',
            description: 'We are a leading Manufacturer of bell tqx1 sewing machine needles from Chennai, India.',
            inStock: true,
            datasheet: '/assets/datasheets/MACHINE-NEEDLES.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Minimum Order Quantity': '30 Box',
                'Material': 'Steel',
                'Usage/Application': 'Sewing Machine Needles',
                'Machine Needle Size': '11,14,16,18,21',
                'Packaging Type': 'Box',
                'Type': 'Regular Point',
                'Color': 'Silver',
                'Finish': 'Chrome',
                'Quantity Per Pack': '10 Needles',
                'Packaging Size': '500 Needles',
                'Set Content': '10 Needles',
                'Is It Rust Proof': 'Rust Proof',
                'Brand': 'Bell'
            },
            variants: [
                { name: 'Bell TQX1 Sewing Machine Needles', code: 'TQX1', size: '11', length: '37.20 mm', wireDia: '1.75 mm' },
                { name: 'Bell TQX1 Sewing Machine Needles', code: 'TQX1', size: '14', length: '37.20 mm', wireDia: '1.75 mm' },
                { name: 'Bell TQX1 Sewing Machine Needles', code: 'TQX1', size: '16', length: '37.20 mm', wireDia: '1.75 mm' },
                { name: 'Bell TQX1 Sewing Machine Needles', code: 'TQX1', size: '18', length: '37.20 mm', wireDia: '1.75 mm' },
                { name: 'Bell TQX1 Sewing Machine Needles', code: 'TQX1', size: '21', length: '37.20 mm', wireDia: '1.75 mm' }
            ],
            additionalInfo: {
                'Item Code': 'TQX1',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 500 Needles 1 Carton = 30 Boxes'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Premium Quality', description: 'Economic Pricing, No Thread Breakage' },
                { icon: <StarIcon />, title: 'Durability', description: 'Perfect hole in fabric, Low Machine Maintenance' }
            ],
            applications: ['Button sewing', 'Bar tacking']
        },
        'bell-sewing-machine-needles': {
            title: 'Bell Sewing Machine Needles',
            description: 'Bell Needles is a range of high quality premium sewing machine needles at economic prices for popular applications like lock stitch, embroidery and basic home sewing.',
            inStock: true,
            datasheet: '/assets/datasheets/bell-sewing-machine-needles-compressed.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Usage/Application': 'Sewing Machine Needles',
                'Machine Needle Size': 'HAX1, DBX1, DBXK5,DPX5,TQX1, DPX17, DVX1, DCX1, UY128 GAS',
                'Packaging Type': 'Box',
                'Type': 'Regular Point',
                'Quantity Per Pack': '10',
                'Size': '11,14,16,18',
                'Finish': 'Carbide',
                'Is It Rust Proof': 'Rust Proof',
                'Packaging Size': '50 Lids',
                'Set Content': '10 Needles',
                'Brand': 'Bell'
            },
            variants: [
                { name: 'Bell Sewing Machine Needles', code: 'BMNG', size: '11', length: '-', wireDia: '-' },
                { name: 'Bell Sewing Machine Needles', code: 'BMNG', size: '14', length: '-', wireDia: '-' },
                { name: 'Bell Sewing Machine Needles', code: 'BMNG', size: '16', length: '-', wireDia: '-' },
                { name: 'Bell Sewing Machine Needles', code: 'BMNG', size: '18', length: '-', wireDia: '-' }
            ],
            additionalInfo: {
                'Item Code': 'BMNG',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 500 Needles 1 Carton = 36 Boxes'
            },
            features: [
                { icon: <ShieldIcon />, title: 'Advantage', description: 'Premium Quality, Economic Pricing' },
                { icon: <StarIcon />, title: 'Performance', description: 'No Thread Breakage, Easy Penetration' }
            ],
            applications: ['Lock stitch', 'Embroidery', 'Basic home sewing']
        },
        'bell-assorted-home-sewing-machine-needles': {
            title: 'Bell Assorted Home Sewing Machine Needles',
            description: 'Assorted pack of home sewing machine needles suitable for most domestic machines.',
            inStock: true,
            datasheet: '/assets/datasheets/bell-assorted-home-sewing-machine-needles-compressed.pdf',
            images: ['/assets/images/machine-needles/allmsn.png', '/assets/images/machine-needles/needleanatomy.png'],
            specifications: {
                'Minimum Order Quantity': '10 Cards',
                'Material': 'Steel',
                'Usage/Application': 'Domestic Sewing Machine',
                'Machine Needle Size': '14,16,18',
                'Packaging Type': 'Card',
                'Type': 'Regular Point',
                'Color': 'Silver',
                'Finish': 'Nickel',
                'Quantity Per Pack': '10 Needles',
                'Packaging Size': '10 Cards',
                'Is It Rust Proof': 'Rust Proof',
                'Brand': 'Bell'
            },
            variants: [
                { name: 'Bell Assorted Home Sewing Machine Needles', code: 'BMN-A', size: '14', length: '-', wireDia: '-' },
                { name: 'Bell Assorted Home Sewing Machine Needles', code: 'BMN-A', size: '16', length: '-', wireDia: '-' },
                { name: 'Bell Assorted Home Sewing Machine Needles', code: 'BMN-A', size: '18', length: '-', wireDia: '-' }
            ],
            additionalInfo: {
                'Item Code': 'BMNC',
                'Production Capacity': '100000 Pcs',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 10 Cards (5 Needles per card) 1 Carton = 50 Boxes'
            },
            features: [
                { icon: <HomeIcon />, title: 'Home Use', description: 'For Domestic Machines' },
                { icon: <FactoryIcon />, title: 'Assorted', description: 'Assorted sizes for home use' }
            ],
            applications: ['Home sewing', 'Domestic machines', 'Hobby projects']
        },
        'bell-aluminium-crochet-hooks': {
            title: 'Bell Aluminium Crochet Hooks- Assorted',
            category: 'crochet-hooks',
            description: 'Premium aluminium crochet hooks with soft-grip ergonomic handles. Smooth gold hooks glide through all yarn types without snagging. Comfortable to hold for long hours; reduces wrist strain.',
            inStock: true,
            datasheet: '/assets/datasheets/ACCESSORIES.pdf',
            images: ['/assets/images/crochet hooks/ch1.png', '/assets/images/crochet hooks/ch2.png', '/assets/images/crochet hooks/ch3.png'],
            specifications: {
                'Minimum Order Quantity': '24 Box',
                'Size': '2.00mm - 6.50mm',
                'Packaging Size': 'Assorted',
                'Color': 'Black with Gold',
                'Usage/Application': 'Crochet',
                'Material': 'Aluminium',
                'Country of Origin': 'Made in India'
            },
            additionalInfo: {
                'Item Code': 'BCH',
                'Production Capacity': '10000 Box',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1 Jar | 1 Jar = 10 Assorted Crochet Hooks | 1 Carton = 24 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Premium Aluminium', description: 'Soft-grip ergonomic handles' },
                { icon: <CheckIcon />, title: 'Smooth Glide', description: 'Gold hooks glide without snagging' },
                { icon: <CheckIcon />, title: 'Comfortable', description: 'Reduces wrist strain' },
                { icon: <CheckIcon />, title: 'Clear Markings', description: 'Clear size marking on each hook' },
                { icon: <CheckIcon />, title: 'Assorted Sizes', description: '10 assorted sizes (2.0mm – 6.5mm)' },
                { icon: <CheckIcon />, title: 'Versatile', description: 'Ideal for apparel, amigurumi, home décor' },
                { icon: <CheckIcon />, title: 'Durable & Lightweight', description: 'Designed for effortless precision' }
            ],
            applications: ['Apparel', 'Amigurumi', 'Home décor', 'Hobby crafting', 'Crochet Projects']
        },
        'aromi-safety-pin-0-100': {
            title: 'Aromi Safety Pins Size-0(30mm) (100 pcs/ Pouch )',
            category: 'safety-pins-aromi',
            description: 'Aromi safety pins are high quality steel safety pins. Size-0 (30mm) in 100 pcs pouch.',
            inStock: true,
            datasheet: '/assets/datasheets/AROMI PINS.pdf',
            images: ['/assets/images/aromi pins/Aromi Safety Pins Size-0(30mm) (100 pcs: Pouch ) .jpeg', '/assets/images/aromi pins/Aromi Safety Pins Size-0(30mm) (100 pcs: Pouch ) 2.png'],
            specifications: {
                'Minimum Order Quantity': '100 Box',
                'Material': 'Stainless Steel',
                'Finishing': 'Rust Resistant',
                'Model Number': 'Size-0',
                'Shape': 'Basic',
                'Brand': 'Aromi',
                'Size/Dimension': '0{30mm}',
                'Color': 'Silver',
                'Quantity Per Pack': 'Text'
            },
            additionalInfo: {
                'Item Code': 'A-0',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': 'Aromi Size -0{30mm} 1 BOX= 10 Pouches= 100 Pins each pouch 1 Carton = 100 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Packaging', description: 'Standard Pouch Packaging' },
                { icon: <CheckIcon />, title: 'Identification', description: 'Barcode on pouches and boxes' },
                { icon: <CheckIcon />, title: 'Durability', description: 'Rust Resistant' },
                { icon: <CheckIcon />, title: 'Finish', description: 'Bright Nickel Plating' }
            ],
            applications: ['Garments', 'Tagging', 'Home Use']
        },
        'aromi-safety-pin-assorted-bunch': {
            title: 'Aromi Safety Pins Assorted Size (0,1,2)',
            category: 'safety-pins-aromi',
            description: 'Aromi Safety Pins - Mix Bunch Packing. 1 Box of 1000 Safety Pins.',
            inStock: true,
            datasheet: '/assets/datasheets/AROMI PINS.pdf',
            images: ['/assets/images/aromi pins/012.jpeg', '/assets/images/aromi pins/Aromi Safety Pins Assorted Size (0,1,2) 2.png'],
            specifications: {
                'Minimum Order Quantity': '75 Box',
                'Material': 'Metal',
                'Finishing': 'Rust Resistant',
                'Model Number': 'A-3 MIX',
                'Shape': 'Basic',
                'Packaging Type': 'Box',
                'Brand': 'Aromi',
                'Size/Dimension': 'MIX/Assorted',
                'Color': 'silver',
                'Quantity Per Pack': 'Text'
            },
            additionalInfo: {
                'Item Code': 'A-3Mix',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': 'Aromi Safety Pins- Mix Bunch Packing 1 Box = 100 bunches=1Bunch=10 Safety Pins 1 Bunch = Size-0{30mm} 3Pcs Size-1{35mm} 3Pcs Size-2{40mm} 4Pcs 1 Box of 1000 Safety Pins 1 Carton = 75 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Included Sizes', description: 'Size-0 (30mm), Size-1 (35mm), Size-2 (40mm)' },
                { icon: <CheckIcon />, title: 'Packaging', description: 'Convenient Bunch Packing' }
            ],
            applications: ['Garments', 'Tagging', 'Home Use']
        },
        'aromi-safety-pin-assorted-pouch': {
            title: 'Aromi Assorted Pouch Safety Pins',
            category: 'safety-pins-aromi',
            description: 'Aromi safety pins are high quality steel safety pins. Assorted sizes in pouch.',
            inStock: true,
            datasheet: '/assets/datasheets/AROMI PINS.pdf',
            images: ['/assets/images/panda pins/assorted pins.png', '/assets/images/aromi pins/pins assort2.png'],
            specifications: {
                'Minimum Order Quantity': '75 Box',
                'Surface Finish': 'Bright Nickel Plated',
                'Finishing': 'Nickel',
                'Material': 'Steel',
                'Color': 'Silver',
                'Model Name/Number': 'AP',
                'Size/Dimension': '30-40 mm',
                'Packaging Type': 'Pouch',
                'Shape': 'Safety Pins',
                'Brand': 'Aromi',
                'Quantity Per Pack': '1000 Pieces'
            },
            additionalInfo: {
                'Item Code': 'AP',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': 'Item: 0,1,2 Pouch Content: Size: 0(30mm) - 8pcs Size: 1(35mm) - 6pcs Size: 2(40mm) - 6pcs Carton = 75 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Packaging', description: 'Standard Pouch Packaging' },
                { icon: <CheckIcon />, title: 'Identification', description: 'Barcode on pouches and boxes' },
                { icon: <CheckIcon />, title: 'Durability', description: 'Rust Resistant' },
                { icon: <CheckIcon />, title: 'Finish', description: 'Bright Nickel Plating' }
            ],
            applications: ['Garments', 'Tagging', 'Home Use']
        },
        'aromi-safety-pin-2': {
            title: 'Aromi Safety Pins Size-2(40mm)',
            category: 'safety-pins-aromi',
            description: 'Aromi safety pins are high quality steel safety pins. Size-2 (40mm).',
            inStock: true,
            datasheet: '/assets/datasheets/AROMI PINS.pdf',
            images: ['/assets/images/aromi pins/orange.jpeg', '/assets/images/aromi pins/orange2.jpeg'],
            specifications: {
                'Minimum Order Quantity': '75 Box',
                'Material': 'Steel',
                'Color': 'Silver',
                'Size/Dimension': '2-{40mm}',
                'Finishing': 'Rust Resistant',
                'Model Number': 'A2',
                'Shape': 'Basic',
                'Packaging Type': 'Box',
                'Brand': 'Aromi',
                'Quantity Per Pack': '1000 Safety Pins'
            },
            additionalInfo: {
                'Item Code': 'A-2',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': 'Aromi Size -2{40mm} 1 BOX= 20 Pouches= 50 Pins each pouch 1 Carton = 75 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Packaging', description: 'Standard Pouch Packaging' },
                { icon: <CheckIcon />, title: 'Identification', description: 'Barcode on pouches and boxes' },
                { icon: <CheckIcon />, title: 'Durability', description: 'Rust Resistant' },
                { icon: <CheckIcon />, title: 'Finish', description: 'Bright Nickel Plating' }
            ],
            applications: ['Garments', 'Tagging', 'Home Use']
        },
        'aromi-safety-pin-0-50': {
            title: 'Aromi Safety Pins Size-0(30MM) (50Pcs/ Pouch)',
            category: 'safety-pins-aromi',
            description: 'Aromi safety pins are high quality steel safety pins. Size-0 (30mm) in 50 pcs pouch.',
            inStock: true,
            datasheet: '/assets/datasheets/AROMI PINS.pdf',
            images: ['/assets/images/aromi pins/Aromi Safety Pins Size-0(30MM) (50Pcs: Pouch).jpeg', '/assets/images/aromi pins/Aromi Safety Pins Size-0(30MM) (50Pcs: Pouch)2.png'],
            specifications: {
                'Minimum Order Quantity': '100 Box',
                'Material': 'Steel',
                'Color': 'Silver',
                'Size/Dimension': '30mm',
                'Surface Finish': 'Nickel',
                'Finishing': 'Rust free',
                'Packaging Type': 'Box',
                'Brand': 'Aromi',
                'Quantity Per Pack': 'Text'
            },
            additionalInfo: {
                'Item Code': 'A-00',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 50 Pins x 20 Pouches 1 Carton = 100 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Packaging', description: 'Standard Pouch Packaging' },
                { icon: <CheckIcon />, title: 'Identification', description: 'Barcode on pouches and boxes' },
                { icon: <CheckIcon />, title: 'Durability', description: 'Rust Resistant' },
                { icon: <CheckIcon />, title: 'Finish', description: 'Bright Nickel Plating' }
            ],
            applications: ['Garments', 'Tagging', 'Home Use']
        },
        'aromi-safety-pin-4': {
            title: 'Aromi Safety Pins Size-4(53MM)',
            category: 'safety-pins-aromi',
            description: 'Aromi safety pins are high quality steel safety pins. Size-4 (53mm).',
            inStock: true,
            datasheet: '/assets/datasheets/AROMI PINS.pdf',
            images: ['/assets/images/aromi pins/Aromi Safety Pins Size-4(53MM).jpeg', '/assets/images/aromi pins/Aromi Safety Pins Size-4(53MM)2.jpeg'],
            specifications: {
                'Minimum Order Quantity': '100 Box',
                'Material': 'Steel',
                'Color': 'Silver',
                'Size/Dimension': '4 {53mm}',
                'Surface Finish': 'Nickel',
                'Finishing': 'Bright Nickel',
                'Model Name/Number': 'A4',
                'Packaging Type': 'Box',
                'Shape': 'Safety Pin',
                'Brand': 'Aromi',
                'Quantity Per Pack': '250 Pieces'
            },
            additionalInfo: {
                'Item Code': 'a4',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'immediate',
                'Packaging Details': '1 Box= 25 Bunch (1 Bunch= 10 Pins) = 250 Pins 1 Carton = 100 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Packaging', description: 'Standard Pouch Packaging' },
                { icon: <CheckIcon />, title: 'Identification', description: 'Barcode on pouches and boxes' },
                { icon: <CheckIcon />, title: 'Durability', description: 'Rust Resistant' },
                { icon: <CheckIcon />, title: 'Finish', description: 'Bright Nickel Plating' }
            ],
            applications: ['Garments', 'Tagging', 'Home Use']
        },
        'aromi-safety-pin-1': {
            title: 'Aromi Safety pins size-1 (35mm)',
            category: 'safety-pins-aromi',
            description: 'Aromi safety pins are high quality steel safety pins. Size-1 (35mm).',
            inStock: true,
            datasheet: '/assets/datasheets/AROMI PINS.pdf',
            images: ['/assets/images/aromi pins/Aromi Safety pins size-1 (35mm) .jpeg', '/assets/images/aromi pins/Aromi Safety pins size-1 (35mm)2. jpeg.jpeg'],
            specifications: {
                'Minimum Order Quantity': '75 Box',
                'Material': 'Steel',
                'Color': 'Silver',
                'Size/Dimension': '1{35mm}',
                'Finishing': 'Rust Resistant',
                'Model Number': '1',
                'Shape': 'Basic',
                'Packaging Type': 'Box Of 1000 Safety Pins',
                'Brand': 'Aromi',
                'Quantity Per Pack': '1000 Safety Pins'
            },
            additionalInfo: {
                'Item Code': 'A-1',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': 'Aromi Safety Pins size-1{35mm} 1 BOX = 1000 safety pins=20 Pouch = 50 pins per pouch'
            },
            features: [
                { icon: <CheckIcon />, title: 'Packaging', description: 'Standard Pouch Packaging' },
                { icon: <CheckIcon />, title: 'Identification', description: 'Barcode on pouches and boxes' },
                { icon: <CheckIcon />, title: 'Durability', description: 'Rust Resistant' },
                { icon: <CheckIcon />, title: 'Finish', description: 'Bright Nickel Plating' }
            ],
            applications: ['Garments', 'Tagging', 'Home Use']
        },
        'aromi-safety-pin-0-25': {
            title: 'Aromi Safety Pins Size-0(30mm) (25 pcs/ Pouch )',
            category: 'safety-pins-aromi',
            description: 'Aromi safety pins are high quality steel safety pins. Size-0 (30mm) in 25 pcs pouch.',
            inStock: true,
            datasheet: '/assets/datasheets/AROMI PINS.pdf',
            images: ['/assets/images/aromi pins/asp30.png', '/assets/images/aromi pins/asp302.png'],
            specifications: {
                'Minimum Order Quantity': '100 Box',
                'Material': 'Metal',
                'Color': 'Silver',
                'Size/Dimension': '30mm',
                'Surface Finish': 'Nickel',
                'Finishing': 'Bright Nickel Plating',
                'Model Name/Number': 'A000',
                'Packaging Type': 'Pouch',
                'Brand': 'Aromi'
            },
            additionalInfo: {
                'Item Code': 'A000',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 25 Pins x 40 Pouches 1 Carton = 100 Boxes'
            },
            features: [
                { icon: <CheckIcon />, title: 'Packaging', description: 'Standard Pouch Packaging' },
                { icon: <CheckIcon />, title: 'Identification', description: 'Barcode on pouches and boxes' },
                { icon: <CheckIcon />, title: 'Durability', description: 'Rust Resistant' },
                { icon: <CheckIcon />, title: 'Finish', description: 'Bright Nickel Plating' }
            ],
            applications: ['Garments', 'Tagging', 'Home Use']
        },
        'panda-brass-gold': {
            title: 'Panda Brass Gold Safety Pins',
            category: 'safety-pins-panda',
            description: 'Panda Brass Gold Safety Pins are export quality pure brass safety pins. Available in sizes 000 (19mm) and 00 (22mm). Customization available in color and sizes.',
            inStock: true,
            datasheet: '/assets/datasheets/PANDA PINS.pdf',
            images: [
                '/assets/images/panda pins/Panda Brass Gold Safety Pins.jpg',
                '/assets/images/panda pins/Panda Brass Gold Safety Pins 2.jpg',
                '/assets/images/panda pins/Panda Brass Gold Safety Pins 3.png',
                '/assets/images/panda pins/Panda Brass Gold Safety Pins 4.png'
            ],
            specifications: {
                'Material': 'Brass',
                'Quantity Per Pack': '1000 Pieces',
                'Model Name/Number': 'PB00',
                'Shape': 'Safety Pins',
                'Packaging Type': 'Jar',
                'Brand': 'Panda',
                'Available Sizes': 'Size 000: 19mm, Size 00: 22mm',
                'Color': 'Gold',
                'Finish': 'Pure Brass'
            },
            additionalInfo: {
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 Brass Safety Pins'
            },
            features: [
                { icon: <CheckIcon />, title: 'Export Quality', description: 'Pure brass construction' },
                { icon: <CheckIcon />, title: 'Available Sizes', description: 'Size 000 (19mm) and Size 00 (22mm)' },
                { icon: <CheckIcon />, title: 'Customization', description: 'Color and size customization available' },
                { icon: <CheckIcon />, title: 'Durable', description: 'High-quality brass material' }
            ],
            applications: ['Garment Tagging', 'Industrial Use', 'Export']
        },
        'panda-brass-black': {
            title: 'Panda Brass Black Safety Pins',
            category: 'safety-pins-panda',
            description: 'Panda Brass Black Safety Pins are export quality pure brass safety pins. Available in sizes 000 (19mm) and 00 (22mm). Customization available in color and sizes.',
            inStock: true,
            datasheet: '/assets/datasheets/PANDA PINS.pdf',
            images: [
                '/assets/images/panda pins/Panda Brass black Safety Pins.jpg',
                '/assets/images/panda pins/Panda Brass black Safety Pins 2.jpg',
                '/assets/images/panda pins/Panda Brass black Safety Pins 3.png',
                '/assets/images/panda pins/Panda Brass black Safety Pins 4.png'
            ],
            specifications: {
                'Material': 'Brass',
                'Quantity Per Pack': '1000 Pieces',
                'Model Name/Number': 'PBB00',
                'Packaging Type': 'Jar',
                'Brand': 'Panda',
                'Size/Dimension': '19mm',
                'Available Sizes': 'Size 000: 19mm, Size 00: 22mm',
                'Color': 'Black',
                'Finish': 'Black Coated Brass'
            },
            additionalInfo: {
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 Safety Pins'
            },
            features: [
                { icon: <CheckIcon />, title: 'Export Quality', description: 'Pure brass with black finish' },
                { icon: <CheckIcon />, title: 'Available Sizes', description: 'Size 000 (19mm) and Size 00 (22mm)' },
                { icon: <CheckIcon />, title: 'Customization', description: 'Color and size customization available' },
                { icon: <CheckIcon />, title: 'Premium Finish', description: 'Black coated for aesthetic appeal' }
            ],
            applications: ['Garment Tagging', 'Industrial Use', 'Export']
        },
        'panda-brass-nickel': {
            title: 'Panda Brass Nickel Plated Safety Pins',
            category: 'safety-pins-panda',
            description: 'Panda Brass Nickel Plated Safety Pins are export quality pure brass safety pins with bright nickel plating. Available in sizes 000 (19mm) and 00 (22mm). Customization available in color and sizes.',
            inStock: true,
            datasheet: '/assets/datasheets/PANDA PINS.pdf',
            images: [
                '/assets/images/panda pins/3  Silver 00.jpg',
                '/assets/images/panda pins/4 Silver 000.jpg',
                '/assets/images/panda pins/nickel 1.png',
                '/assets/images/panda pins/nickel.png'
            ],
            specifications: {
                'Material': 'Brass',
                'Color': 'Silver',
                'Size/Dimension': '19mm',
                'Surface Finish': 'Nickel Plated',
                'Finishing': 'Bright Nickel Plated',
                'Quantity Per Pack': '1000 Pieces',
                'Brand': 'Panda',
                'Model Name/Number': 'PBS000',
                'Packaging Type': 'Jar',
                'Available Sizes': 'Size 000: 19mm, Size 00: 22mm'
            },
            additionalInfo: {
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 Safety Pins'
            },
            features: [
                { icon: <CheckIcon />, title: 'Export Quality', description: 'Pure brass with nickel plating' },
                { icon: <CheckIcon />, title: 'Bright Finish', description: 'Bright nickel plated surface' },
                { icon: <CheckIcon />, title: 'Available Sizes', description: 'Size 000 (19mm) and Size 00 (22mm)' },
                { icon: <CheckIcon />, title: 'Customization', description: 'Color and size customization available' }
            ],
            applications: ['Garment Tagging', 'Industrial Use', 'Export']
        },
        'panda-bulb-brass': {
            title: 'Bulb Brass Safety Pins',
            category: 'safety-pins-panda',
            description: 'Bulb safety pins are widely used for garment tagging. We deal in lead free nickel free brass bulb safety pins. Size: 22mm.',
            inStock: true,
            datasheet: '/assets/datasheets/PANDA PINS.pdf',
            images: ['/images/safety-pins.png'],
            specifications: {
                'Material': 'Brass',
                'Quantity Per Pack': '1000 Pieces',
                'Model Name/Number': 'Pear',
                'Shape': 'Pear Or Bulb Shaped',
                'Packaging Type': 'Jar',
                'Color': 'Gold, Silver, Black, Antique Copper, Rose Gold, White',
                'Size/Dimension': '22mm',
                'Quality': 'Lead Free, Nickel Free'
            },
            additionalInfo: {
                'Item Code': 'Pear',
                'Production Capacity': '10000 Boxes',
                'Delivery Time': 'Immediate',
                'Packaging Details': '1 Box = 1000 Safety Pins'
            },
            features: [
                { icon: <CheckIcon />, title: 'Bulb Shape', description: 'Pear or bulb shaped design' },
                { icon: <CheckIcon />, title: 'Lead & Nickel Free', description: 'Safe for garment use' },
                { icon: <CheckIcon />, title: 'Multiple Colors', description: 'Available in 6 color options' },
                { icon: <CheckIcon />, title: 'Garment Tagging', description: 'Widely used for tagging applications' }
            ],
            applications: ['Garment Tagging', 'Industrial Tagging', 'Export']
        },
        'panda-pear-shaped': {
            title: 'Pear Shaped Brass Safety Pins',
            category: 'safety-pins-panda',
            description: 'As one of the most appreciated and reliable manufacturer and supplier, we are engaged in offering the high quality of pear shaped safety pin to our clients. These pins are manufactured using qualitative metals to ensure their durability and quality.',
            inStock: true,
            datasheet: '/assets/datasheets/PANDA PINS.pdf',
            images: ['/assets/images/panda pins/Pear Shaped Brass Safety Pins.png'],
            specifications: {
                'Material': 'Brass',
                'Color': 'Golden, Silver, Copper, Black',
                'Size/Dimension': '22mm',
                'Quantity Per Pack': '1000 Safety Pins',
                'Brand': 'Panda',
                'Packaging Type': 'Jar Packing',
                'Shape': 'Pear Shaped',
                'Usage': 'Mainly Used in Tags',
                'Polishes Available': 'Nickel Free, Golden, Brass Antique, Black Nickel, Copper, Silver'
            },
            additionalInfo: {
                'Item Code': 'BRASS',
                'Packaging Details': '1000 Pcs per Box, 50 Box wholesale pack'
            },
            features: [
                { icon: <CheckIcon />, title: 'Various Colors', description: 'Available in multiple finish options' },
                { icon: <CheckIcon />, title: 'Available Sizes', description: '22mm size for tagging' },
                { icon: <CheckIcon />, title: 'Highly Durable', description: 'Quality material ensures longevity' },
                { icon: <CheckIcon />, title: 'Multiple Polishes', description: '6 different polish options available' }
            ],
            applications: ['Tags', 'Garment Tagging', 'Industrial Use']
        }
    }), [])

    const product = productData[productId] || productData['sewing-machine-needles']

    // Helper to determine if an asset is a video
    const isVideo = (src) => src && src.toLowerCase().endsWith('.mp4');

    // Image mapping for hand sewing needle products - returns primary product image
    const getProductImage = (productId) => {
        const imageMap = {
            'bell-crewels': '/assets/images/hand-sewing-needles/1 Bell Crewels.jpg',
            'bell-darner': '/assets/images/hand-sewing-needles/2 Bell Darners.jpg',
            'bell-sharps-1-5': '/assets/images/hand-sewing-needles/bell-sharps-1-5-final.jpg',
            'bell-sharps': '/assets/images/hand-sewing-needles/4 Bell Sharps.jpg',
            'bell-betweens': '/assets/images/hand-sewing-needles/5 Bell Between.jpg',
            'bell-darner-3-5': '/assets/images/hand-sewing-needles/6 Bell 3.5.jpg',
            'bell-capoteras-6-0': '/assets/images/hand-sewing-needles/7 Bell 60.jpg',
            'bell-short-darner-4-0': '/assets/images/hand-sewing-needles/short-darner-4-0-main.jpg',
            'bell-long-darner-3-0': '/assets/images/hand-sewing-needles/9 Bell30.jpg',
            'bell-beading': '/assets/images/hand-sewing-needles/10 Bell Beading.jpg',
            'bell-tapestry': '/assets/images/hand-sewing-needles/11 Bell Tapestry.jpg',
            'bell-double-long-darner': '/assets/images/hand-sewing-needles/12 Bell DLD.jpg',
            'bell-book-binding': '/assets/images/hand-sewing-needles/13 Bell Book Binders.jpg',
            'bell-compact-threader': '/assets/images/hand-sewing-needles/14 Bell Compact.jpg',

            'bell-compact-threader-25': '/assets/images/hand-sewing-needles/Bell Colour Compact.jpg',
            'bell-gold-compact': '/assets/images/hand-sewing-needles/Bell Gold compact.jpg',

            // Machine Sewing Needles
            'bell-hax1-sewing-machine-needles': '/assets/images/machine-needles/HAX1.png',
            'bell-assorted-home-sewing-machine-needles': '/assets/images/machine-needles/HAX1 GOLD.png',
            'bell-dbxk5-sewing-machine-needles': '/assets/images/machine-needles/DBXK5.png',
            'bell-dpx5-sewing-machine-needles': '/assets/images/machine-needles/DPX5.png',
            'bell-dbx1-sewing-machine-needles': '/assets/images/machine-needles/DBX1.png',
            'bell-gold-dbx1-sewing-machine-needles': '/assets/images/machine-needles/DBX1 GOLD.png',
            'bell-dcx1-sewing-machine-needles': '/assets/images/machine-needles/DCX1.png',
            'bell-dpx17-sewing-machine-needles': '/assets/images/machine-needles/DPX17.png',
            'bell-uy128-gas-sewing-machine-needles': '/assets/images/machine-needles/UY128 GAS.png',
            'bell-tqx1-sewing-machine-needles': '/assets/images/machine-needles/TQX1.png'
        };

        return imageMap[productId] || null;
    };

    // Additional images mapping for specific products
    const getAdditionalImages = (productId) => {
        const additionalImagesMap = {
            'bell-crewels': [
                '/assets/images/hand-sewing-needles/crewels2.jpg',
                '/assets/images/hand-sewing-needles/crewels3.jpg'
            ],
            'bell-darner': [
                '/assets/images/hand-sewing-needles/darners2.jpg',
                '/assets/images/hand-sewing-needles/darners3.jpg'
            ],
            'bell-betweens': [
                '/assets/images/hand-sewing-needles/between2.jpg'
            ],
            'bell-sharps': [
                '/assets/images/hand-sewing-needles/sharp2.jpg'
            ],
            'bell-darner-3-5': [
                '/assets/images/hand-sewing-needles/common-darners-capoteras.jpg'
            ],
            'bell-capoteras-6-0': [
                '/assets/images/hand-sewing-needles/common-darners-capoteras.jpg'
            ],
            'bell-sharps-1-5': [
                '/assets/images/hand-sewing-needles/bell-sharps-1-5-new.jpg'
            ],
            'bell-beading': [
                '/assets/images/hand-sewing-needles/beading2.jpg'
            ],
            'bell-double-long-darner': [
                '/assets/images/hand-sewing-needles/double long darner 2.jpg'
            ],
            'bell-book-binding': [
                '/assets/images/hand-sewing-needles/book-binder-1.jpg',
                '/assets/images/hand-sewing-needles/book-binder-2.jpg'
            ],
            'bell-compact-threader': [
                '/assets/images/hand-sewing-needles/Compact Hand Sewing Needles 2.jpg'
            ],
            'bell-compact-threader-25': [
                '/assets/images/hand-sewing-needles/Compact Hand Sewing Needles 2.jpg'
            ],
            'bell-gold-compact': [
                '/assets/images/hand-sewing-needles/Compact Hand Sewing Needles 2.jpg'
            ],
            'bell-tapestry': [
                '/assets/images/hand-sewing-needles/tapestry2.jpg'
            ],
            'bell-long-darner-3-0': [
                '/assets/images/hand-sewing-needles/long darners2.jpg'
            ],
            'bell-short-darner-4-0': [
                '/assets/images/hand-sewing-needles/short-darner-4-0-info.jpg'
            ],
            'bell-hax1-sewing-machine-needles': [
                '/assets/images/machine-needles/hax1-size-11.png',
                '/assets/images/machine-needles/hax1-size-14.png',
                '/assets/images/machine-needles/hax1-size-16.png',
                '/assets/images/machine-needles/hax1-size-18.png',
                '/assets/images/machine-needles/hax1-size-21.png'
            ]
        };

        return additionalImagesMap[productId] || [];
    };


    // Inject Videos and Images for different product types
    const productWithMedia = useMemo(() => {
        if (!product) return null;

        let videoPath = null;
        let imagePath = null;
        let additionalImages = [];

        // Check if this is a hand sewing needle product by checking productId OR title
        const isHandSewingNeedle = productId.startsWith('bell-') &&
            (productId.includes('crewel') || productId.includes('darner') ||
                productId.includes('sharp') || productId.includes('between') ||
                productId.includes('beading') || productId.includes('tapestry') ||
                productId.includes('compact') || productId.includes('capoteras') ||
                productId.includes('book-binding') || productId.includes('needle-threader') ||
                productId.includes('glovers') || productId.includes('sail') ||
                productId.includes('mattress') || productId.includes('sacking') ||
                productId.includes('packing')) &&
            !productId.includes('machine');

        // Determine which video to inject based on product type
        if (isHandSewingNeedle || (product.title.toLowerCase().includes('hand sewing') && !product.title.toLowerCase().includes('machine'))) {
            // Hand Sewing Needles - inject video for ALL hand sewing needle products
            videoPath = '/assets/videos/Bell Hand Sewing Needles Video.mp4';
            // Get product-specific image
            imagePath = getProductImage(productId);
            // Get additional images if available
            additionalImages = getAdditionalImages(productId);
        } else if (product.title.toLowerCase().includes('machine') || product.title.toLowerCase().includes('sewing machine')) {
            // Machine Needles
            videoPath = '/assets/videos/Bell machine needles.mp4';
            // Get product-specific image for machine needles
            imagePath = getProductImage(productId);
            // Inject HAX1 explicit size images for HAX1 product
            if (productId === 'bell-hax1-sewing-machine-needles') {
                additionalImages = getAdditionalImages(productId);
            }
        } else if (product.title.toLowerCase().includes('scissor') || product.title.toLowerCase().includes('tailor')) {
            // Scissors/Tailoring products
            videoPath = '/assets/videos/bell-scissors-video.mp4';
        } else if (productId.includes('aromi') || (product.category && product.category.includes('aromi'))) {
            // Aromi Safety Pins
            videoPath = '/assets/videos/Aromi safety pins.mp4';
        }

        // Build new images array with video first, then product image, then additional images, then existing images
        let newImages = [...product.images];

        // Define common images for all hand sewing needles
        const commonImages = [
            '/assets/images/hand-sewing-needles/hand-sewing-common-1.png',
            '/assets/images/hand-sewing-needles/hand-sewing-common-2.png'
        ];

        // Remove the video, product image, and additional images if they're already in the array
        if (videoPath) {
            newImages = newImages.filter(img => img !== videoPath);
        }
        if (imagePath) {
            newImages = newImages.filter(img => img !== imagePath);
        }
        additionalImages.forEach(addImg => {
            newImages = newImages.filter(img => img !== addImg);
        });

        // For hand sewing needles, remove the generic placeholder and ensure common images aren't duplicated
        if (isHandSewingNeedle || (product.title.toLowerCase().includes('hand sewing') && !product.title.toLowerCase().includes('machine'))) {
            // Remove generic placeholder for ALL hand sewing needles
            newImages = newImages.filter(img => img !== '/images/hand-sewing-needles.png');

            // Remove common images if they might be in the list already (to avoid dupes if re-rendering)
            commonImages.forEach(common => {
                newImages = newImages.filter(img => img !== common);
            });
        }

        // For machine needles, remove generic placeholder if specific image is available
        if (product.title.toLowerCase().includes('machine') || product.title.toLowerCase().includes('sewing machine')) {
            if (imagePath) {
                newImages = newImages.filter(img => img !== '/images/sewing-machine-needles.png');
            }
        }

        // Inject media in order: video first, then product image, then additional images
        const mediaToInject = [];
        if (videoPath) mediaToInject.push(videoPath);
        if (imagePath) mediaToInject.push(imagePath);
        if (additionalImages.length > 0) mediaToInject.push(...additionalImages);

        // For hand sewing needles, append the common images after specific product images
        if (isHandSewingNeedle || (product.title.toLowerCase().includes('hand sewing') && !product.title.toLowerCase().includes('machine'))) {
            mediaToInject.push(...commonImages);
        }

        if (mediaToInject.length > 0 || (isHandSewingNeedle && newImages.length !== product.images.length)) {
            return {
                ...product,
                images: [...mediaToInject, ...newImages]
            };
        }

        return product;
    }, [product, productId]);

    // Use productWithMedia instead of product for rendering
    const displayProduct = productWithMedia || product;

    // Effect to update image when variant changes (specifically for HAX1)
    useEffect(() => {
        if (!displayProduct || !selectedVariant) return;

        if (productId === 'bell-hax1-sewing-machine-needles') {
            const hax1SizeImages = {
                '9': '/assets/images/machine-needles/hax1-size-14.png', // Fallback
                '11': '/assets/images/machine-needles/hax1-size-11.png',
                '14': '/assets/images/machine-needles/hax1-size-14.png',
                '16': '/assets/images/machine-needles/hax1-size-16.png',
                '18': '/assets/images/machine-needles/hax1-size-18.png',
                '21': '/assets/images/machine-needles/hax1-size-21.png'
            };

            const newImage = hax1SizeImages[selectedVariant.size];
            // Check provided newImage is valid
            if (newImage && displayProduct.images) {
                const imgIndex = displayProduct.images.indexOf(newImage);
                if (imgIndex !== -1) {
                    setSelectedImage(imgIndex);
                }
            }
        }
    }, [selectedVariant, productId, displayProduct]);

    useEffect(() => {
        if (displayProduct && displayProduct.variants && displayProduct.variants.length > 0) {
            setSelectedVariant(displayProduct.variants[0])
        } else {
            setSelectedVariant(null)
        }
    }, [displayProduct])

    useEffect(() => {
        // Reset selected image when product changes
        setSelectedImage(0);
    }, [productId]);


    const handleQuantityChange = (delta) => {
        const newQuantity = quantity + delta
        if (newQuantity >= 50) {
            setQuantity(newQuantity)
        }
    }

    return (
        <div className="product-detail-page" >
            {/* Breadcrumb */}
            < section className="breadcrumb" >
                <div className="container">
                    <button onClick={() => navigate('/products')} className="breadcrumb-link">
                        Products
                    </button>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{displayProduct.title}</span>
                </div>
            </section>

            {/* Product Detail Section */}
            <section className="section">
                <div className="container">
                    <div className="product-detail-grid">
                        {/* Image Gallery */}
                        <div className="product-gallery">
                            <div className="gallery-main">
                                {isVideo(displayProduct.images[selectedImage]) ? (
                                    <video
                                        src={displayProduct.images[selectedImage]}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    />
                                ) : (
                                    <Magnifier src={displayProduct.images[selectedImage]} alt={displayProduct.title} />
                                )}
                            </div>
                            <div className="gallery-thumbnails">
                                {displayProduct.images.map((image, index) => (
                                    <button
                                        key={index}
                                        className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                        onClick={() => setSelectedImage(index)}
                                    >
                                        {isVideo(image) ? (
                                            <div className="video-thumbnail">
                                                <span className="play-icon">▶</span>
                                            </div>
                                        ) : (
                                            <img src={image} alt={`${displayProduct.title} view ${index + 1}`} />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="product-info-section">
                            {displayProduct.inStock && (
                                <div className="stock-badge">
                                    <span className="stock-dot"></span>
                                    IN STOCK
                                </div>
                            )}

                            <h1 className="product-detail-title">{displayProduct.title}</h1>

                            {/* Technical Specifications */}
                            <div className="specifications-section">
                                <h3>Product Details:</h3>
                                <div style={{ overflowX: 'auto' }}>
                                    <table className="specifications-table">
                                        <tbody>
                                            {Object.entries(product.specifications).map(([key, value]) => (
                                                <tr key={key}>
                                                    <td className="spec-label">{key}</td>
                                                    <td className="spec-value">{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Interactive Variant Selector */}
                            {product.variants && (
                                <div className="specifications-section" style={{ marginTop: '24px' }}>
                                    <h3>Select Size Model:</h3>

                                    <div className="variant-selector-container">
                                        <div className="variant-selector-grid">
                                            {product.variants.map((variant, index) => (
                                                <button
                                                    key={index}
                                                    className={`variant-selector-btn ${selectedVariant?.size === variant.size ? 'active' : ''}`}
                                                    onClick={() => setSelectedVariant(variant)}
                                                >
                                                    Size {variant.size}
                                                </button>
                                            ))}
                                        </div>

                                        {selectedVariant && (
                                            <div className="variant-detail-card">
                                                <div className="variant-detail-grid">
                                                    <div className="variant-detail-item">
                                                        <span className="variant-detail-label">Item Code</span>
                                                        <span className="variant-detail-value">{selectedVariant.code}</span>
                                                    </div>
                                                    <div className="variant-detail-item">
                                                        <span className="variant-detail-label">Needle Size</span>
                                                        <span className="variant-detail-value">Size {selectedVariant.size}</span>
                                                    </div>
                                                    <div className="variant-detail-item">
                                                        <span className="variant-detail-label">Length</span>
                                                        <span className="variant-detail-value">{selectedVariant.length === '-' ? '-' : selectedVariant.length}</span>
                                                    </div>
                                                    <div className="variant-detail-item">
                                                        <span className="variant-detail-label">Wire Diameter</span>
                                                        <span className="variant-detail-value">{selectedVariant.wireDia === '-' ? '-' : selectedVariant.wireDia}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            <p className="product-detail-description">{product.description}</p>

                            {/* Additional Information */}
                            {product.additionalInfo && (
                                <div className="additional-info-section" style={{ marginTop: '20px' }}>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '700', color: '#666', marginBottom: '10px' }}>Additional Information:</h3>
                                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.95rem', color: '#333' }}>
                                        {Object.entries(product.additionalInfo).map(([key, value]) => (
                                            <li key={key} style={{ marginBottom: '6px' }}>
                                                <strong style={{ color: '#555' }}>• {key}:</strong> {value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}



                            {/* Action Buttons */}
                            <div className="action-buttons">
                                <Button
                                    variant="primary"
                                    onClick={() => {
                                        // Force logic: Check category property first, then fallback to title check
                                        if (product?.category) {
                                            navigate(`/products/category/${product.category}`)
                                        } else if (product?.title?.toLowerCase().includes('crochet')) {
                                            navigate('/products/category/crochet-hooks')
                                        } else if (product?.title?.toLowerCase().includes('safety pin') || product?.title?.toLowerCase().includes('aromi') || product?.title?.toLowerCase().includes('panda')) {
                                            navigate('/products/category/safety-pins')
                                        } else {
                                            navigate('/contact')
                                        }
                                    }}
                                >
                                    ▶ Enquire Now
                                </Button>
                                {product.datasheet && (
                                    <Button
                                        variant="secondary"
                                        onClick={() => window.open(product.datasheet, '_blank')}
                                    >
                                        📄 Download Brochure
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabbed Content Section */}
            <section className="section bg-gray">
                <div className="container">
                    {/* Tab Navigation */}
                    <div className="tab-navigation">
                        <button
                            className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                            onClick={() => setActiveTab('features')}
                        >
                            Product Features
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'applications' ? 'active' : ''}`}
                            onClick={() => setActiveTab('applications')}
                        >
                            Applications
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'pricing' ? 'active' : ''}`}
                            onClick={() => setActiveTab('pricing')}
                        >
                            Bulk Pricing
                        </button>
                        {product.availableModels && (
                            <button
                                className={`tab-btn ${activeTab === 'models' ? 'active' : ''}`}
                                onClick={() => setActiveTab('models')}
                            >
                                Models
                            </button>
                        )}
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content">
                        {activeTab === 'features' && product.features && (
                            <div className="features-grid">
                                {product.features.map((feature, index) => (
                                    <div key={index} className="feature-card">
                                        <div className="feature-icon">{feature.icon}</div>
                                        <h3 className="feature-title">{feature.title}</h3>
                                        <p className="feature-description">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'applications' && product.applications && (
                            <div className="applications-content">
                                <h3>Recommended Applications</h3>
                                <ul className="applications-list">
                                    {product.applications.map((app, index) => (
                                        <li key={index}>
                                            <CheckIcon /> {app}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {activeTab === 'pricing' && (
                            <div className="pricing-content">
                                <h3>Bulk Pricing Information</h3>
                                <p>We offer competitive wholesale pricing for bulk orders. Contact our sales team for custom quotes based on your requirements.</p>
                                <table className="pricing-table">
                                    <thead>
                                        <tr>
                                            <th>Quantity</th>
                                            <th>Discount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>50 - 500 units</td>
                                            <td>Standard Pricing</td>
                                        </tr>
                                        <tr>
                                            <td>500 - 2,000 units</td>
                                            <td>5% Discount</td>
                                        </tr>
                                        <tr>
                                            <td>2,000 - 10,000 units</td>
                                            <td>10% Discount</td>
                                        </tr>
                                        <tr>
                                            <td>10,000+ units</td>
                                            <td>Custom Pricing</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="pricing-cta">
                                    <Button variant="primary">Request Custom Quote</Button>
                                </div>
                            </div>
                        )}
                        {activeTab === 'models' && product.availableModels && (
                            <div className="applications-content">
                                <h3>Available Models</h3>
                                <ul className="applications-list">
                                    {product.availableModels.map((model, index) => (
                                        <li key={index}>
                                            <CheckIcon /> {model}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail
