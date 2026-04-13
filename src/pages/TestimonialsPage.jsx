import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => {
    const pageVariants = {
        initial: { opacity: 0, y: 10 },
        in: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
        out: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } }
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            className="relative flex flex-col pt-24 pb-20 overflow-hidden text-white min-h-screen"
        >
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                    alt="Connected network over earth"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-950/75 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-blue-900/40"></div>
            </div>

            {/* Hero */}
            <section className="relative z-10 pt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg"
                        >
                            Testimonials
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 }}
                            className="text-xl text-blue-100/85 font-medium drop-shadow leading-relaxed"
                        >
                            Teams choose SnapSofts for clarity, speed, and reliability—here’s what they say after going live.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="mt-10 flex items-center justify-center gap-4"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white rounded-full font-semibold text-[15px] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] border border-blue-400/30"
                            >
                                Get a Quote
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                            <Link
                                to="/services"
                                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full font-semibold text-[15px] transition-all shadow-lg"
                            >
                                View Services
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Testimonials
                title="What Our Clients Say"
                subtitle="Real feedback from businesses and partners who have grown with our solutions."
            />
        </motion.div>
    );
};

export default TestimonialsPage;