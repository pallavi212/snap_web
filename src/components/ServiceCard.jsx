import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, features, delay = 0, to = "/services", onClick }) => {
    return (
        <Link 
            to={to} 
            className="block h-full"
            onClick={(e) => {
                if (onClick) {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2xl] p-8 md:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/15 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/60 focus-visible:ring-offset-0"
            >
                {/* Subtle top glare effect */}
                <div className="absolute top-0 left-1/4 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[1px]"></div>

                {/* Oversized Background Icon Watermark */}
                <div className="absolute -top-4 -right-4 md:top-4 md:right-4 opacity-[0.05] pointer-events-none transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-40 h-40 text-blue-400" strokeWidth={1} />
                </div>

                {/* Primary Icon in Top Left Box */}
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 relative z-10 border border-blue-400/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-400 drop-shadow" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-5 relative z-10 pr-4 leading-tight drop-shadow-sm">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-blue-100/80 mb-10 leading-relaxed font-medium relative z-10 flex-grow">
                    {description}
                </p>

                {/* Features List */}
                <ul className="space-y-4 relative z-10">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-white/90">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 shrink-0 -mt-0.5 drop-shadow-sm" strokeWidth={2} />
                            <span className="leading-tight font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </Link>
    );
};

export default ServiceCard;
