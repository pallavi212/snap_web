import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Headset, Share2, Facebook, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const services = [
        'Clinic Management System',
        'Photography Management',
        'Lab Management (Pathology)',
        'Custom Sticker Design',
        'Cloud Solutions',
        'Cybersecurity',
        'System Integration',
        'Custom Development',
        'Other'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic phone number validation (10 digits)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            setSubmitStatus({
                type: 'error',
                message: 'Please enter a valid 10-digit phone number.'
            });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        // EmailJS configuration
        const serviceID = 'service_98c6ypr';
        const templateID = 'template_hr867nh';
        const publicKey = '2-qgRIoGYfXkvtJrq';

        // Template parameters
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            name: formData.name, // Added 'name' for broader template support
            email: formData.email, // Added 'email' for broader template support
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
            reply_to: formData.email, // Standard practice to include reply_to
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setSubmitStatus({
                    type: 'success',
                    message: `Thank you ${formData.name}! Your message has been sent successfully. We'll get back to you soon.`
                });
                setFormData({ name: '', email: '', phone: '', service: '', message: '' });
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setSubmitStatus({
                    type: 'error',
                    message: 'Oops! Something went wrong. Please try again or contact us directly via email.'
                });
                setIsSubmitting(false);
            });
    };

    const pageVariants = {
        initial: { opacity: 0 },
        in: { opacity: 1, transition: { duration: 0.6 } },
        out: { opacity: 0, transition: { duration: 0.4 } }
    };

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            className="min-h-screen relative flex flex-col justify-center py-20 overflow-hidden text-white"
        >
            {/* Dark City Skyline Background with Network Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&q=80&w=2000"
                    alt="City skyline at sunset"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-950/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-blue-900/40"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16">

                {/* Header Section */}
                <div className="text-center mb-10 flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white font-sans"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-blue-100/90 font-medium drop-shadow"
                    >
                        We'd love to hear from you!
                    </motion.p>
                </div>

                {/* Main Glass Panels container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">

                    {/* Contact Form Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] relative overflow-hidden"
                    >
                        {/* Subtle highlight effect to mimic glare */}
                        <div className="absolute top-0 left-1/4 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[1px]"></div>

                        <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>

                        {/* Status Message */}
                        {submitStatus.message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success'
                                    ? 'bg-green-500/20 border border-green-500/30 text-green-100'
                                    : 'bg-red-500/20 border border-red-500/30 text-red-100'
                                    }`}
                            >
                                <p className="text-sm">{submitStatus.message}</p>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:bg-white/10 focus:border-white/30 outline-none transition-all text-white placeholder-blue-100/50"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:bg-white/10 focus:border-white/30 outline-none transition-all text-white placeholder-blue-100/50"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:bg-white/10 focus:border-white/30 outline-none transition-all text-white placeholder-blue-100/50"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-blue-100/70 mb-2">Service Interested</label>
                                <select
                                    name="service"
                                    required
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:bg-white/10 focus:border-white/30 outline-none transition-all text-white appearance-none cursor-pointer"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'right 0.75rem center',
                                        backgroundSize: '1.5em 1.5em',
                                        paddingRight: '2.5rem'
                                    }}
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                >
                                    <option value="" disabled className="bg-gray-800">Select a service</option>
                                    {services.map((service, index) => (
                                        <option key={index} value={service} className="bg-gray-800 text-white">
                                            {service}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:bg-white/10 focus:border-white/30 outline-none transition-all resize-none text-white placeholder-blue-100/50"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-48 bg-gradient-to-b from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 text-white font-medium py-3 px-6 rounded shadow-lg shadow-blue-500/30 transition-all border border-blue-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                    {/* Contact Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] h-fit"
                    >
                        <h2 className="text-2xl font-bold text-white mb-8">Reach Us</h2>

                        <div className="space-y-8">
                            <div className="flex items-start group">
                                <div className="mt-1 mr-5">
                                    <MapPin className="w-6 h-6 text-white drop-shadow" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Address</h3>
                                    <p className="text-blue-100/80">F-401, Anusaya Heritage,Dudulgaon, Moshi, Pimpri-Chinchwad,Pune – 412105</p>
                                </div>
                            </div>

                            <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent"></div>

                            <div className="flex items-start group">
                                <div className="mt-1 mr-5">
                                    <Mail className="w-6 h-6 text-white drop-shadow" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                                    <a href="mailto:shrikrishna.munde@snapsofts.com" className="text-blue-100/80 hover:text-white transition-colors">shrikrishna.munde@snapsofts.com</a>
                                </div>
                            </div>

                            <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent"></div>

                            <div className="flex items-start group">
                                <div className="mt-1 mr-5">
                                    <Phone className="w-6 h-6 text-white drop-shadow" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                                    <a href="tel:+918483898328" className="text-blue-100/80 hover:text-white transition-colors">+91 84838 98328</a>
                                </div>
                            </div>

                            <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent"></div>

                            {/* Map Section */}
                            <div className="mt-6">
                                <h3 className="text-lg font-bold text-white mb-4">Our Location</h3>
                                <div className="relative w-full h-[250px] rounded-lg overflow-hidden border border-white/20">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.673847321564!2d73.8800!3d18.6675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDQwJzAzLjAiTiA3M8KwNTInNDguMCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="SnapSofts Technology Location"
                                        className="grayscale-[20%] brightness-90"
                                    ></iframe>
                                </div>
                                <a
                                    href="https://maps.google.com/?q=F-401,+Anusaya+Heritage,+Pune+412105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-3 text-sm text-blue-300 hover:text-white transition-colors"
                                >
                                    <MapPin className="w-4 h-4" />
                                    View on Google Maps
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Footer Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <div className="flex items-center gap-4">
                        <Headset className="w-6 h-6 text-white" />
                        <div>
                            <h4 className="font-bold text-white text-sm">Support</h4>
                            <a href="mailto:shrikrishna.munde@snapsofts.com" className="text-xs text-blue-200/70 hover:text-white transition-colors">shrikrishna.munde@snapsofts.com</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="font-bold text-white text-sm mb-2 flex items-center gap-2">
                            <Share2 className="w-4 h-4 text-blue-400" /> Follow Us
                        </span>
                        <div className="flex gap-3">
                            <a href="https://business.facebook.com/latest/business_home?nav_ref=bm_home_redirect&bm_redirect_migration=true&business_id=1310917904297909" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://wa.me/917057506883" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-green-600 transition-colors">
                                <MessageCircle className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-right">
                        <div className="text-right">
                            <h4 className="font-bold text-white text-sm">Quick Links</h4>
                            <a href="/about" className="text-xs text-blue-200/70 hover:text-white transition-colors">About Us</a>
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Contact;
