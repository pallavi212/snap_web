import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Camera, Stethoscope, FileCode2, Zap, Layers, ShieldCheck, X } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
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

    const stickerImages = useMemo(() => {
        const modules = import.meta.glob('../assets/Stickers/*.{png,jpg,jpeg,webp,svg}', { eager: true, query: '?url', import: 'default' });
        return Object.entries(modules)
            .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
            .map(([, url]) => url);
    }, []);

    const abdreamImages = useMemo(() => {
        const modules = import.meta.glob('../assets/abdream/*.{png,jpg,jpeg,webp,svg}', { eager: true, query: '?url', import: 'default' });
        return Object.entries(modules)
            .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
            .map(([, url]) => url);
    }, []);

    const [activeProduct, setActiveProduct] = useState(null);
    const [activeProductImageIdx, setActiveProductImageIdx] = useState(0);

    useEffect(() => {
        if (!activeProduct) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setActiveProduct(null);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [activeProduct]);

    const services = [
        {
            id: "clinic",
            title: "Clinic Management System",
            description: "Comprehensive software to streamline your clinic operations, from patient records to appointment scheduling.",
            icon: Stethoscope,
            features: ["Patient Records Management", "Appointment Scheduling", "Billing & Invoicing", "Prescription Management"],
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
            id: "photography",
            title: "Photography Management",
            description: "An all-in-one solution for photography studios to manage bookings, portfolios, and client deliveries.",
            icon: Camera,
            features: ["Booking Calendar", "Client Galleries", "Invoice Generation", "Package Management"],
            images: abdreamImages,
            liveLink: "https://abdreamweddings.com/",
            highlights: [
                "Timeless Wedding Stories & Films",
                "Cinematic Storytelling",
                "Professional Posing Assistance",
                "Intimate & Grand Event Coverage"
            ]
        },
        {
            id: "lab",
            title: "Lab Management (Pathology)",
            description: "Robust LIMS for pathology labs to manage samples, generate reports, and track inventory.",
            icon: Building2,
            features: ["Sample Tracking", "Automated Reporting", "Inventory Management", "Quality Control"],
            images: labImages,
            highlights: [
                "Sample tracking & barcode flow",
                "Automated report generation",
                "Inventory & consumables tracking",
                "Quality control insights"
            ]
        },
        {
            id: "stickers",
            title: "Custom Sticker Design",
            description: "Intuitive software for designing and printing custom stickers with dynamic data handling.",
            icon: FileCode2,
            features: ["Drag & Drop Editor", "Barcode Generation", "Batch Printing", "Template Library"],
            images: stickerImages,
            highlights: [
                "Templates & batch printing",
                "QR/Barcode generation",
                "Intuitive drag & drop editor",
                "Custom data integration"
            ]
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 relative overflow-hidden font-sans pb-10">
            {/* Global Dark Tech/City Background */}
            <div className="fixed inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                    alt="Connected network over earth"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-950/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-blue-900/40"></div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 font-medium text-sm mb-8 shadow-lg"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 shadow-[0_0_8px_rgba(96,165,250,0.8)]"></span>
                            Modernizing Business Workflows
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg"
                        >
                            Transforming Ideas into <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                                Reliable Software
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-blue-100/80 mb-8 leading-relaxed font-medium drop-shadow"
                        >
                            We build specialized platforms replacing complexity with intuitive, fast, and reliable architectures.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
                        >
                            <Link
                                to="/services"
                                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white rounded-full font-semibold text-[15px] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center justify-center border border-blue-400/30"
                            >
                                Explore Solutions
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-[15px] transition-all flex items-center justify-center shadow-lg"
                            >
                                Get a Quote
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="py-24 z-10 relative">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">Purpose-Built Platforms</h2>
                        <p className="text-lg text-blue-100/80 font-medium drop-shadow">
                            We don't do generic. Our systems are tailored precisely to the workflows of their respective industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                        {services.map((service, idx) => (
                            <ServiceCard
                                key={idx}
                                delay={idx * 0.1}
                                onClick={() => {
                                    setActiveProduct(service);
                                    setActiveProductImageIdx(0);
                                }}
                                {...service}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* New Informational Section: How We Work (Adding Image and Info as requested) */}
            <section className="py-24 z-10 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 lg:p-16 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden group">
                        {/* Decorative glare */}
                        <div className="absolute top-0 left-1/4 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent blur-[1px]"></div>

                        <div className="lg:grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
                                    Transforming operations with <span className="text-blue-400">intelligent automation</span>.
                                </h2>
                                <p className="text-[17px] text-blue-100/80 mb-8 leading-relaxed font-medium">
                                    Our software bridges the gap between complex data and actionable insights. By automating administrative tasks, we empower your team to focus on what truly matters—growing your business and serving your clients.
                                </p>

                                <div className="space-y-6 mb-8">
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-blue-400/30">
                                            <Zap className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Rapid Deployment</h4>
                                            <p className="text-blue-200/70 text-sm">Cloud-native architecture means you're up and running in days, not months.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-blue-400/30">
                                            <ShieldCheck className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Enterprise Security</h4>
                                            <p className="text-blue-200/70 text-sm">Bank-grade encryption ensures your operational data is always protected.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0 mr-4 border border-blue-400/30">
                                            <Layers className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1">Seamless Integration</h4>
                                            <p className="text-blue-200/70 text-sm">Connects flawlessly with your existing accounting and CRM software.</p>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to="/about"
                                    className="inline-flex items-center font-semibold text-blue-400 hover:text-blue-300 transition-colors text-[15px] group/link"
                                >
                                    Learn more about our methodology
                                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mt-12 lg:mt-0 relative"
                            >
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.2)] border border-white/20 group/img relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                                        alt="Modern Data Dashboard"
                                        className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clean minimal CTA Section */}
            <section className="py-24 z-10 relative text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-lg border border-white/10 p-12 rounded-3xl shadow-xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-8 leading-tight text-white tracking-tight drop-shadow-md"
                    >
                        Ready for a streamlined workflow?
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-full font-semibold text-[15px] transition-all hover:from-blue-400 hover:to-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/30"
                        >
                            Get in Touch Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Product Modal */}
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
                            onClick={() => setActiveProduct(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="relative w-full max-w-5xl rounded-3xl border border-white/15 bg-gray-950/70 backdrop-blur-xl shadow-[0_30px_90px_rgba(0,0,0,0.65)] overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => setActiveProduct(null)}
                                className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/15 hover:bg-white/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                                aria-label="Close"
                            >
                                <X className="h-5 w-5 text-white" />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
                                    <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/20 shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                                        <img
                                            src={activeProduct.images[activeProductImageIdx]}
                                            alt={activeProduct.title}
                                            className="w-full h-[240px] sm:h-[320px] object-contain bg-black/20"
                                        />
                                    </div>

                                    {activeProduct.images.length > 1 && (
                                        <div className="mt-4 grid grid-cols-3 gap-3">
                                            {activeProduct.images.slice(0, 6).map((url, i) => (
                                                <button
                                                    key={url}
                                                    type="button"
                                                    onClick={() => setActiveProductImageIdx(i)}
                                                    className={`rounded-xl overflow-hidden border ${i === activeProductImageIdx ? 'border-blue-400/60 ring-2 ring-blue-400/30' : 'border-white/10 hover:border-white/20'} bg-black/20 transition-colors`}
                                                    aria-label={`View screenshot ${i + 1}`}
                                                >
                                                    <img src={url} alt="" className="w-full h-20 object-cover" loading="lazy" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="p-7 sm:p-9">
                                    <div className="ftems-center gap-3">
                                        <div className="h-11 w-11 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                                            {React.createElement(activeProduct.icon, { className: "h-6 w-6 text-blue-400" })}
                                        </div>
                                        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-200/90">
                                            Product Details
                                        </div>
                                    </div>

                                    <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                                        {activeProduct.title}
                                    </h3>
                                    <p className="mt-3 text-sm sm:text-base text-blue-100/80 leading-relaxed font-medium">
                                        {activeProduct.description}
                                    </p>

                                    <div className="mt-6">
                                        <div className="text-sm font-semibold text-white mb-3">Key features</div>
                                        <ul className="space-y-2.5">
                                            {activeProduct.highlights.map((h) => (
                                                <li key={h} className="text-sm text-blue-100/85 flex items-start gap-2.5">
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0" />
                                                    <span className="font-medium">{h}</span>
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
                                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white rounded-full font-semibold text-[15px] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/30"
                                            >
                                                Visit Site
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </a>
                                        ) : (
                                            <Link
                                                to="/contact"
                                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white rounded-full font-semibold text-[15px] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/30"
                                            >
                                                Get Started
                                                <ArrowRight className="ml-2 w-4 h-4" />
                                            </Link>
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => setActiveProduct(null)}
                                            className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-[15px] transition-all shadow-lg"
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
        </div>
    );
};

export default Home;
