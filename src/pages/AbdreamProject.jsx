import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AbdreamProject = () => {
    const images = useMemo(() => {
        const modules = import.meta.glob('../assets/abdream/*.{png,jpg,jpeg,webp,svg}', { eager: true, query: '?url', import: 'default' });
        return Object.entries(modules)
            .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
            .map(([path, url]) => ({
                path,
                url
            }));
    }, []);

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

            <section className="relative z-10 pt-10 pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div>
                            <div className="inline-flex items-center gap-2 text-sm text-primary-100/80">
                                <ArrowLeft className="h-4 w-4" />
                                <Link to="/services" className="hover:text-primary-100 transition-colors">Back to Services</Link>
                            </div>
                            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow">
                                ABDream Weddings
                            </h1>
                            <p className="mt-3 text-primary-100/80 max-w-2xl leading-relaxed">
                                Web application project showcase (screenshots from our work).
                            </p>
                        </div>

                        <a
                            href="https://abdreamweddings.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-b from-primary-500 to-primary-700 text-white text-sm font-semibold shadow-lg hover:from-primary-400 hover:to-primary-600 transition-colors border border-primary-400/30"
                        >
                            Visit Website
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
                        {images.map((img) => (
                            <div
                                key={img.path}
                                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_16px_45px_rgba(0,0,0,0.35)] overflow-hidden"
                            >
                                <img
                                    src={img.url}
                                    alt="ABDream project screenshot"
                                    className="w-full h-auto object-contain bg-black/20"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default AbdreamProject;

