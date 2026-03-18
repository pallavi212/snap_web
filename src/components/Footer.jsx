import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import LiveVisitors from './LiveVisitors';

const Footer = () => {
    return (
        <footer className="relative z-20 bg-gray-900 border-t border-gray-800 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    <div className="space-y-6">
                        <Link to="/" className="flex items-center space-x-2 group inline-block">
                            <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary-400 transition-colors">
                                SnapSofts
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            We build intelligent software solutions specializing in Clinic, Photography, and Lab Management Systems, along with Custom Design Software.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://business.facebook.com/latest/business_home?nav_ref=bm_home_redirect&bm_redirect_migration=true&business_id=1310917904297909" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="https://wa.me/918483898328" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                                <MessageCircle className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                    <span className="mr-2 text-primary-500">›</span> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                    <span className="mr-2 text-primary-500">›</span> About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                    <span className="mr-2 text-primary-500">›</span> Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/career" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                    <span className="mr-2 text-primary-500">›</span> Career
                                </Link>
                            </li>
                            <li>
                                <Link to="/future" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                    <span className="mr-2 text-primary-500">›</span> Future Tech
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center">
                                    <span className="mr-2 text-primary-500">›</span> Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-6">Our Services</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Clinic Management System
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Photography Management System
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Lab Management System
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    Sticker Design Software
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-6">Contact Us</h3>
                        <ul className="space-y-5">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-primary-500 mr-3 mt-0.5 shrink-0" />
                                <span className="text-sm text-gray-400">F-401, Anusaya Heritage, Pune, Maharashtra – 412105</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-primary-500 mr-3 shrink-0" />
                                <a href="tel:+918483898328" className="text-sm text-gray-400 hover:text-white transition-colors">+91 84838 98328</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-primary-500 mr-3 shrink-0" />
                                <a href="mailto:shrikrishna.munde@snapsofts.com" className="text-sm text-gray-400 hover:text-white transition-colors">shrikrishna.munde@snapsofts.com</a>
                            </li>
                        </ul>
                    </div>

                </div>
                {/* Live Visitor Counter */}
                <div className="mt-8 flex justify-center py-6 border-t border-gray-800">
                    <LiveVisitors />
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} SnapSofts Technology Pvt Ltd. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 space-x-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
