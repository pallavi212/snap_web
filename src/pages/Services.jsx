import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Stethoscope, Building2, LayoutGrid, Smartphone, Globe, Bug, LifeBuoy, Rocket, ArrowRight, Sticker, Camera, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const abdreamImages = useMemo(() => {
        const modules = import.meta.glob('../assets/abdream/*.{png,jpg,jpeg,webp,svg}', { eager: true, query: '?url', import: 'default' });
        return Object.entries(modules)
            .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
            .map(([, url]) => url);
    }, []);

    const stickerImages = useMemo(() => {
        const modules = import.meta.glob('../assets/Stickers/*.{png,jpg,jpeg,webp,svg}', { eager: true, query: '?url', import: 'default' });
        return Object.entries(modules)
            .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
            .map(([, url]) => url);
    }, []);

    const photographyImages = useMemo(() => {
        const modules = import.meta.glob('../assets/photography/*.{png,jpg,jpeg,webp,svg}', { eager: true, query: '?url', import: 'default' });
        const urls = Object.entries(modules)
            .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
            .map(([, url]) => url);
        return urls.length
            ? urls
            : [
                "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&q=80&w=1600",
                "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=1600",
                "https://images.unsplash.com/photo-1520975693411-b4d5a254a3b1?auto=format&fit=crop&q=80&w=1600",
            ];
    }, []);

    const clinicImages = useMemo(() => {
        const modules = import.meta.glob('../assets/clinic/*.{png,jpg,jpeg,webp,svg}', { eager: true, query: '?url', import: 'default' });
        return Object.entries(modules)
            .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
            .map(([, url]) => url);
    }, []);

    const labImages = useMemo(() => {
        const modules = import.meta.glob('../assets/lab/*.{png,jpg,jpeg,webp,svg}', { eager: true, query: '?url', import: 'default' });
        return Object.entries(modules)
            .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
            .map(([, url]) => url);
    }, []);

    const products = useMemo(() => ([
        {
            id: "clinic",
            title: "Clinic Management System",
            description: "Complete solution for managing patient records, appointments, and billing.",
            icon: Stethoscope,
            coverImage: clinicImages[0],
            images: clinicImages,
            liveLink: "https://abdreamweddings.com/",
            highlights: [
                "Digital patient records & history",
                "Smart appointment scheduling",
                "Billing, invoices & reports",
                "Staff and role management"
            ]
        },
        {
            id: "lab",
            title: "Pathology Lab Management System",
            description: "Advanced system for lab sample tracking and report management.",
            icon: Building2,
            coverImage: labImages[0],
            images: labImages,
            highlights: [
                "Sample tracking and barcode flow",
                "Automated report generation",
                "Inventory & consumables tracking",
                "Quality control insights"
            ]
        }
    ]), [clinicImages, labImages]);

    const [activeProductId, setActiveProductId] = useState(null);
    const [activeProductImageIdx, setActiveProductImageIdx] = useState(0);
    const activeProduct = useMemo(
        () => products.find(p => p.id === activeProductId) ?? null,
        [activeProductId, products]
    );

    const [activePopup, setActivePopup] = useState(null); // 'webapps' | null
    const [activeWebAppProjectId, setActiveWebAppProjectId] = useState(null); // 'abdream' | 'stickers' | 'photography' | null
    const [activeWebAppImageIdx, setActiveWebAppImageIdx] = useState(0);

    useEffect(() => {
        if (!activeProduct && !activePopup) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                setActiveProductId(null);
                setActivePopup(null);
                setActiveWebAppProjectId(null);
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeProduct, activePopup]);

    useEffect(() => {
        setActiveProductImageIdx(0);
    }, [activeProductId]);

    useEffect(() => {
        setActiveWebAppImageIdx(0);
    }, [activeWebAppProjectId]);

    const servicesWeProvide = [
        { icon: LayoutGrid, title: "Software Development", subtitle: "Custom solutions" },
        { icon: Globe, title: "Web Applications", subtitle: "Modern web apps", popup: "webapps" },
        { icon: Smartphone, title: "Mobile Apps", subtitle: "Android / iOS / Hybrid" },
        { icon: Globe, title: "Websites", subtitle: "Business websites" }
    ];

    const testingServices = [
        { icon: Bug, title: "Defect Fixing", subtitle: "Development phase" },
        { icon: LifeBuoy, title: "Post-Production Support", subtitle: "Post production" },
        { icon: Rocket, title: "Release Management", subtitle: "Software maintenance" }
    ];

    const pageVariants = {
        initial: { opacity: 0, y: 15 },
        in: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        out: { opacity: 0, y: -15, transition: { duration: 0.3, ease: "easeIn" } }
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            className="relative min-h-screen pt-24 pb-20 overflow-hidden text-white bg-gray-900"
        >
            {/* Dark background like Home */}
            <div className="fixed inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                    alt="Connected network over earth"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-950/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-primary-900/40"></div>
            </div>

            {/* Hero */}
            <section className="relative z-10 pt-10 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow">
                                Our Software Solutions <span className="text-primary-300">&amp;</span> Services
                            </h1>
                            <p className="mt-4 text-primary-100/80 leading-relaxed text-[15px] sm:text-base max-w-xl drop-shadow">
                                We deliver reliable software solutions and technology services designed to help businesses operate efficiently and grow faster.
                            </p>
                            <div className="mt-7">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-b from-primary-500 to-primary-700 text-white text-sm font-semibold shadow-lg hover:from-primary-400 hover:to-primary-600 transition-colors border border-primary-400/30"
                                >
                                    Get Started
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                                <img
                                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1800"
                                    alt="Team discussing software solutions"
                                    className="h-[270px] sm:h-[340px] lg:h-[380px] w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-gray-950/35 via-transparent to-primary-900/30" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Products */}
            <section className="relative z-10 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-white drop-shadow">Our Products</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {products.map((p, idx) => {
                            const Icon = p.icon;
                            return (
                                <motion.div
                                    key={p.title}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => setActiveProductId(p.id)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') setActiveProductId(p.id);
                                    }}
                                    className="group rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_16px_45px_rgba(0,0,0,0.35)] overflow-hidden hover:shadow-[0_22px_60px_rgba(0,0,0,0.45)] transition-shadow cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
                                >
                                    <div className="h-48 sm:h-56 overflow-hidden">
                                        <img
                                            src={p.coverImage}
                                            alt={p.title}
                                            className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="h-10 w-10 rounded-xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center">
                                                <Icon className="h-5 w-5 text-primary-200" />
                                            </div>
                                            <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                                                {p.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-primary-100/80 leading-relaxed">
                                            {p.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Product Popup / Modal */}
            <AnimatePresence>
                {activeProduct && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
                            onClick={() => setActiveProductId(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="relative w-full max-w-5xl rounded-3xl border border-white/15 bg-gray-950/70 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.65)] overflow-y-auto max-h-[92vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Sticky close bar */}
                            <div className="sticky top-0 z-20 flex justify-end px-4 pt-4 pb-2 bg-gray-950/80 backdrop-blur-sm">
                                <button
                                    type="button"
                                    onClick={() => setActiveProductId(null)}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 border border-white/15 hover:bg-white/20 transition-colors focus:outline-none"
                                    aria-label="Close"
                                >
                                    <X className="h-4 w-4 text-white" />
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                                    <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/20 shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                                        <img
                                            src={activeProduct.images[activeProductImageIdx] ?? activeProduct.coverImage}
                                            alt={activeProduct.title}
                                            className="w-full h-[200px] sm:h-[280px] object-contain bg-black/20"
                                        />
                                    </div>

                                    {activeProduct.images.length > 1 && (
                                        <div className="mt-4 grid grid-cols-3 gap-2">
                                            {activeProduct.images.slice(0, 6).map((url, i) => (
                                                <button
                                                    key={url}
                                                    type="button"
                                                    onClick={() => setActiveProductImageIdx(i)}
                                                    className={`rounded-xl overflow-hidden border ${i === activeProductImageIdx ? 'border-primary-300/60 ring-2 ring-primary-400/30' : 'border-white/10 hover:border-white/20'} bg-black/20 transition-colors`}
                                                    aria-label={`View screenshot ${i + 1}`}
                                                >
                                                    <img src={url} alt="" className="w-full h-16 sm:h-20 object-cover" loading="lazy" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 sm:p-8">
                                    <div className="flex items-center gap-3">
                                        <div className="h-11 w-11 rounded-2xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center">
                                            {React.createElement(activeProduct.icon, { className: "h-6 w-6 text-primary-200" })}
                                        </div>
                                        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-200/90">
                                            Product
                                        </div>
                                    </div>

                                    <h3 className="mt-4 text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                                        {activeProduct.title}
                                    </h3>
                                    <p className="mt-3 text-sm text-primary-100/80 leading-relaxed">
                                        {activeProduct.description}
                                    </p>

                                    <div className="mt-6">
                                        <div className="text-sm font-semibold text-white mb-3">Key features</div>
                                        <ul className="space-y-2.5">
                                            {activeProduct.highlights.map((h) => (
                                                <li key={h} className="text-sm text-primary-100/85 flex items-start gap-2.5">
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-300 shrink-0" />
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                        {activeProduct.liveLink ? (
                                            <a
                                                href={activeProduct.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-b from-primary-500 to-primary-700 text-white text-sm font-semibold shadow-lg hover:from-primary-400 hover:to-primary-600 transition-colors border border-primary-400/30"
                                            >
                                                Visit Site
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </a>
                                        ) : (
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-b from-primary-500 to-primary-700 text-white text-sm font-semibold shadow-lg hover:from-primary-400 hover:to-primary-600 transition-colors border border-primary-400/30"
                                            >
                                                Get Started
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => setActiveProductId(null)}
                                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/15 hover:bg-white/15 transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Services We Provide */}
            <section className="relative z-10 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-white drop-shadow">Services We Provide</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {servicesWeProvide.map((s, idx) => {
                            const Icon = s.icon;
                            const isInteractive = Boolean(s.popup);
                            return (
                                <motion.div
                                    key={s.title}
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.45, delay: idx * 0.04 }}
                                >
                                    <div
                                        role={isInteractive ? "button" : undefined}
                                        tabIndex={isInteractive ? 0 : undefined}
                                        onClick={() => {
                                            if (s.popup === 'webapps') setActivePopup('webapps');
                                        }}
                                        onKeyDown={(e) => {
                                            if (!isInteractive) return;
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                if (s.popup === 'webapps') setActivePopup('webapps');
                                            }
                                        }}
                                        className={`rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-5 sm:p-6 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition-shadow text-center ${isInteractive ? 'hover:bg-white/10 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60 focus-visible:ring-offset-0' : ''}`}
                                    >
                                        <div className="mx-auto h-12 w-12 rounded-2xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center">
                                            <Icon className="h-6 w-6 text-primary-200" />
                                        </div>
                                        <div className="mt-4 text-sm font-semibold text-white">{s.title}</div>
                                        <div className="mt-1 text-xs text-primary-100/70">{s.subtitle}</div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Web Applications Popup */}
            <AnimatePresence>
                {activePopup === 'webapps' && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div
                            className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"
                            onClick={() => {
                                setActivePopup(null);
                                setActiveWebAppProjectId(null);
                            }}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="relative w-full max-w-5xl rounded-3xl border border-white/15 bg-gray-950/70 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.65)] overflow-y-auto max-h-[92vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Sticky close bar */}
                            <div className="sticky top-0 z-20 flex justify-end px-4 pt-4 pb-2 bg-gray-950/80 backdrop-blur-sm">
                                <button
                                    type="button"
                                    onClick={() => { setActivePopup(null); setActiveWebAppProjectId(null); }}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 border border-white/15 hover:bg-white/20 transition-colors focus:outline-none"
                                    aria-label="Close"
                                >
                                    <X className="h-4 w-4 text-white" />
                                </button>
                            </div>

                            {/* Header */}
                            <div className="p-7 sm:p-9 border-b border-white/10">
                                <div className="flex items-center justify-between gap-4 flex-wrap">
                                    <div>
                                        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary-200/90">
                                            <Globe className="h-4 w-4" />
                                            Web Applications
                                        </div>
                                        <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                                            Our Web App Projects
                                        </h3>
                                        <p className="mt-2 text-sm sm:text-base text-primary-100/80 max-w-2xl leading-relaxed">
                                            Select a project to view screenshots and links.
                                        </p>
                                    </div>

                                    {activeWebAppProjectId && (
                                        <button
                                            type="button"
                                            onClick={() => setActiveWebAppProjectId(null)}
                                            className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 text-white text-sm font-semibold border border-white/15 hover:bg-white/15 transition-colors"
                                        >
                                            <ChevronLeft className="mr-2 h-4 w-4" />
                                            Back
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Body */}
                            <div className="p-6 sm:p-8">
                                {!activeWebAppProjectId && (
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                                        <button
                                            type="button"
                                            onClick={() => setActiveWebAppProjectId('abdream')}
                                            className="text-left rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-xl shadow-[0_16px_45px_rgba(0,0,0,0.35)] overflow-hidden transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
                                        >
                                            <div className="h-40 overflow-hidden bg-black/20">
                                                <img src={abdreamImages[0]} alt="ABDream preview" className="h-full w-full object-cover" />
                                            </div>
                                            <div className="p-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded-xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center">
                                                        <Globe className="h-5 w-5 text-primary-200" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-white">ABDream Weddings</div>
                                                        <div className="text-xs text-primary-100/70">Wedding photography website</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setActiveWebAppProjectId('photography')}
                                            className="text-left rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-xl shadow-[0_16px_45px_rgba(0,0,0,0.35)] overflow-hidden transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
                                        >
                                            <div className="h-40 overflow-hidden bg-black/20">
                                                <img src={photographyImages[0]} alt="Photography preview" className="h-full w-full object-cover" />
                                            </div>
                                            <div className="p-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded-xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center">
                                                        <Camera className="h-5 w-5 text-primary-200" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-white">Photography Management</div>
                                                        <div className="text-xs text-primary-100/70">Bookings, galleries, invoices</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => setActiveWebAppProjectId('stickers')}
                                            className="text-left rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur-xl shadow-[0_16px_45px_rgba(0,0,0,0.35)] overflow-hidden transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60"
                                        >
                                            <div className="h-40 overflow-hidden bg-black/20">
                                                <img src={stickerImages[0]} alt="Stickers preview" className="h-full w-full object-cover" />
                                            </div>
                                            <div className="p-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-10 w-10 rounded-xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center">
                                                        <Sticker className="h-5 w-5 text-primary-200" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-white">Sticker Design Software</div>
                                                        <div className="text-xs text-primary-100/70">Templates, QR/Barcode, batch print</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                )}

                                {activeWebAppProjectId === 'abdream' && (
                                    <>
                                        <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
                                            <div>
                                                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-200/90">
                                                    ABDream Weddings
                                                </div>
                                                <div className="mt-2 text-sm text-primary-100/80">
                                                    Live link:{" "}
                                                    <a
                                                        href="https://abdreamweddings.com/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-primary-200 hover:text-primary-100 underline underline-offset-4"
                                                    >
                                                        https://abdreamweddings.com
                                                    </a>
                                                </div>
                                            </div>
                                            <a
                                                href="https://abdreamweddings.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-b from-primary-500 to-primary-700 text-white text-sm font-semibold shadow-lg hover:from-primary-400 hover:to-primary-600 transition-colors border border-primary-400/30"
                                            >
                                                Visit Website
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </a>
                                        </div>

                                        <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/20 shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                                            <img
                                                src={abdreamImages[activeWebAppImageIdx] ?? abdreamImages[0]}
                                                alt="ABDream project screenshot"
                                                className="w-full h-[240px] sm:h-[360px] object-contain bg-black/20"
                                            />
                                        </div>
                                        <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 gap-3">
                                            {abdreamImages.slice(0, 12).map((url, i) => (
                                                <button
                                                    key={url}
                                                    type="button"
                                                    onClick={() => setActiveWebAppImageIdx(i)}
                                                    className={`rounded-xl overflow-hidden border ${i === activeWebAppImageIdx ? 'border-primary-300/60 ring-2 ring-primary-400/30' : 'border-white/10 hover:border-white/20'} bg-black/20 transition-colors`}
                                                    aria-label={`View screenshot ${i + 1}`}
                                                >
                                                    <img src={url} alt="" className="w-full h-16 object-cover" loading="lazy" />
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {activeWebAppProjectId === 'stickers' && (
                                    <>
                                        <div className="mb-6">
                                            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-200/90">
                                                Sticker Design Software
                                            </div>
                                            <div className="mt-2 text-sm text-primary-100/80">
                                                Templates, QR/Barcode generation, and batch printing workflows.
                                            </div>
                                        </div>

                                        <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/20 shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                                            <img
                                                src={stickerImages[activeWebAppImageIdx] ?? stickerImages[0]}
                                                alt="Sticker project screenshot"
                                                className="w-full h-[240px] sm:h-[360px] object-contain bg-black/20"
                                            />
                                        </div>
                                        <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 gap-3">
                                            {stickerImages.slice(0, 12).map((url, i) => (
                                                <button
                                                    key={url}
                                                    type="button"
                                                    onClick={() => setActiveWebAppImageIdx(i)}
                                                    className={`rounded-xl overflow-hidden border ${i === activeWebAppImageIdx ? 'border-primary-300/60 ring-2 ring-primary-400/30' : 'border-white/10 hover:border-white/20'} bg-black/20 transition-colors`}
                                                    aria-label={`View screenshot ${i + 1}`}
                                                >
                                                    <img src={url} alt="" className="w-full h-16 object-cover" loading="lazy" />
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}

                                {activeWebAppProjectId === 'photography' && (
                                    <>
                                        <div className="mb-6">
                                            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-200/90">
                                                Photography Management
                                            </div>
                                            <div className="mt-2 text-sm text-primary-100/80">
                                                Add your screenshots to `src/assets/photography/` (img1.png, img2.png...) to replace the demo images.
                                            </div>
                                        </div>

                                        <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/20 shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                                            <img
                                                src={photographyImages[activeWebAppImageIdx] ?? photographyImages[0]}
                                                alt="Photography project screenshot"
                                                className="w-full h-[240px] sm:h-[360px] object-contain bg-black/20"
                                            />
                                        </div>
                                        <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 gap-3">
                                            {photographyImages.slice(0, 12).map((url, i) => (
                                                <button
                                                    key={`${url}-${i}`}
                                                    type="button"
                                                    onClick={() => setActiveWebAppImageIdx(i)}
                                                    className={`rounded-xl overflow-hidden border ${i === activeWebAppImageIdx ? 'border-primary-300/60 ring-2 ring-primary-400/30' : 'border-white/10 hover:border-white/20'} bg-black/20 transition-colors`}
                                                    aria-label={`View screenshot ${i + 1}`}
                                                >
                                                    <img src={url} alt="" className="w-full h-16 object-cover" loading="lazy" />
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Testing Services */}
            <section className="relative z-10 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold text-white drop-shadow">Testing Services</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {testingServices.map((t, idx) => {
                            const Icon = t.icon;
                            return (
                                <motion.div
                                    key={t.title}
                                    initial={{ opacity: 0, y: 14 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.45, delay: idx * 0.05 }}
                                    className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_55px_rgba(0,0,0,0.45)] transition-shadow"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="h-12 w-12 rounded-2xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center shrink-0">
                                            <Icon className="h-6 w-6 text-primary-200" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-white">{t.title}</div>
                                            <div className="mt-1 text-xs text-primary-100/70">{t.subtitle}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </motion.div>
    );
};

export default Services;
