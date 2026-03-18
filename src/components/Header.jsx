import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/Snap.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About Us', path: '/about' },
        { name: 'Career', path: '/career' },
        { name: 'Future Tech', path: '/future' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="h-10 w-10 rounded-md overflow-hidden bg-transparent flex items-center justify-center">
                            <img
                                src={logo}
                                alt="SnapSofts Technology Pvt. Ltd. Logo"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className={`text-lg sm:text-xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'} group-hover:text-primary-200 sm:group-hover:text-primary-100 transition-colors`}>
                                SnapSofts
                            </span>
                            <span className={`text-[11px] sm:text-xs font-medium ${scrolled ? 'text-gray-500' : 'text-gray-200/90'}`}>
                                Technology Pvt. Ltd.
                            </span>
                        </div>
                    </Link>

                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary-600 relative overflow-hidden group ${location.pathname === link.path ? 'text-primary-600 font-semibold' : (scrolled ? 'text-gray-600' : 'text-gray-200')
                                    }`}
                            >
                                {link.name}
                                {location.pathname === link.path && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
                                    />
                                )}
                            </Link>
                        ))}
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                to="/contact"
                                className="bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-700 transition-all shadow-md hover:shadow-lg hover:shadow-primary-500/30 active:scale-95 block"
                            >
                                Get a Quote
                            </Link>
                        </motion.div>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:text-primary-600 focus:outline-none p-2`}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isOpen ? "close" : "open"}
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    exit={{ opacity: 0, rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                </motion.div>
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg px-4 overflow-hidden"
                    >
                        <div className="py-4 flex flex-col space-y-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${location.pathname === link.path
                                        ? 'bg-primary-50 text-primary-600'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="mt-4 text-center bg-primary-600 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-primary-700 transition-colors"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
