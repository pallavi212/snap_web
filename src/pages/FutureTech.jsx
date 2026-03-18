import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Stethoscope, ShieldAlert, ShoppingCart, Scissors, Cpu, Zap, Globe } from 'lucide-react';

const FutureTech = () => {
    const sectors = [
        {
            id: 'photography',
            title: 'PHOTOGRAPHY & IMAGING',
            icon: Camera,
            position: 'top-1/4 left-10 lg:left-20',
            glow: 'shadow-[0_0_30px_rgba(34,197,94,0.4)]',
            iconColor: 'text-green-400',
            borderColor: 'border-green-500/30'
        },
        {
            id: 'healthcare',
            title: 'HEALTHCARE & MEDTECH',
            icon: Stethoscope,
            position: 'bottom-1/4 left-10 lg:left-20',
            glow: 'shadow-[0_0_30px_rgba(239,68,68,0.4)]',
            iconColor: 'text-red-400',
            borderColor: 'border-red-500/30'
        },
        {
            id: 'cybersecurity',
            title: 'CYBERSECURITY',
            icon: ShieldAlert,
            position: 'top-1/4 right-10 lg:right-20',
            glow: 'shadow-[0_0_30px_rgba(59,130,246,0.4)]',
            iconColor: 'text-blue-400',
            borderColor: 'border-blue-500/30'
        },
        {
            id: 'retail',
            title: 'RETAIL & E-COMMERCE',
            icon: ShoppingCart,
            position: 'bottom-1/4 right-10 lg:right-20',
            glow: 'shadow-[0_0_30px_rgba(168,85,247,0.4)]',
            iconColor: 'text-purple-400',
            borderColor: 'border-purple-500/30'
        },
        {
            id: 'sticker',
            title: 'STICKER GENERATOR LAB',
            icon: Scissors,
            position: 'bottom-10 left-1/2 -translate-x-1/2',
            glow: 'shadow-[0_0_30px_rgba(234,179,8,0.4)]',
            iconColor: 'text-yellow-400',
            borderColor: 'border-yellow-500/30'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden font-sans pt-24 pb-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            </div>

            {/* Header */}
            <div className="relative z-10 text-center mb-16 px-4">
                <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
                >
                    EXPLORE THE FUTURE OF TECHNOLOGY
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-blue-400 font-bold tracking-[0.3em] text-sm md:text-base uppercase"
                >
                    INNOVATING ACROSS KEY SECTORS
                </motion.p>
            </div>

            {/* Main Interactive Map Area */}
            <div className="relative z-10 max-w-7xl mx-auto h-[600px] md:h-[700px]">
                
                {/* Central Core Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 360],
                        }}
                        transition={{ 
                            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                        }}
                        className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-blue-500/20 flex items-center justify-center relative"
                    >
                        <div className="absolute inset-0 rounded-full border-t-2 border-blue-400 shadow-[0_0_50px_rgba(59,130,246,0.3)] animate-pulse"></div>
                        <div className="w-32 h-32 md:w-40 md:h-40 bg-blue-600/10 backdrop-blur-xl rounded-full border border-blue-400/30 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.4)]">
                            <Cpu className="w-16 h-16 md:w-24 md:h-24 text-blue-400" />
                        </div>
                        
                        {/* Connecting Lines (Simulated with div and rotate) */}
                        {[0, 72, 144, 216, 288].map((deg) => (
                            <div 
                                key={deg}
                                className="absolute top-1/2 left-1/2 w-[300px] h-px bg-gradient-to-r from-blue-400/50 to-transparent origin-left"
                                style={{ transform: `rotate(${deg}deg)` }}
                            ></div>
                        ))}
                    </motion.div>
                </div>

                {/* Sector Cards */}
                {sectors.map((sector, index) => {
                    const Icon = sector.icon;
                    return (
                        <motion.div
                            key={sector.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + (index * 0.1) }}
                            whileHover={{ scale: 1.1 }}
                            className={`absolute ${sector.position} z-20 group cursor-pointer`}
                        >
                            <div className="flex flex-col items-center">
                                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-2 ${sector.borderColor} bg-gray-900/80 backdrop-blur-md flex items-center justify-center mb-4 transition-all group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] ${sector.glow}`}>
                                    <div className="absolute inset-0 rounded-full border border-white/5 animate-ping opacity-20"></div>
                                    <Icon className={`w-10 h-10 md:w-12 md:h-12 ${sector.iconColor} group-hover:scale-110 transition-transform`} />
                                </div>
                                <span className="text-[10px] md:text-xs font-black tracking-widest text-center max-w-[120px] drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                                    {sector.title}
                                </span>
                            </div>
                        </motion.div>
                    );
                })}

                {/* Decorative Elements */}
                <div className="absolute top-10 left-1/4 w-32 h-32 border border-blue-500/10 rounded-full animate-spin-slow"></div>
                <div className="absolute bottom-20 right-1/4 w-48 h-48 border border-purple-500/10 rounded-full animate-reverse-spin-slow"></div>
            </div>

            {/* Bottom Info Section */}
            <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
                    <div className="flex items-center mb-4">
                        <Zap className="text-yellow-400 w-6 h-6 mr-3" />
                        <h3 className="font-bold">Next-Gen Speed</h3>
                    </div>
                    <p className="text-sm text-gray-400">Leveraging ultra-fast processing and edge computing for instantaneous user experiences across all sectors.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
                    <div className="flex items-center mb-4">
                        <Globe className="text-blue-400 w-6 h-6 mr-3" />
                        <h3 className="font-bold">Global Connectivity</h3>
                    </div>
                    <p className="text-sm text-gray-400">Our systems are built to scale globally, connecting healthcare data and retail markets seamlessly.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl">
                    <div className="flex items-center mb-4">
                        <Cpu className="text-purple-400 w-6 h-6 mr-3" />
                        <h3 className="font-bold">AI Driven</h3>
                    </div>
                    <p className="text-sm text-gray-400">Deep learning algorithms integrated into our cybersecurity and image processing pipelines.</p>
                </div>
            </div>

            {/* Expanded Future Vision Section */}
            <div className="max-w-7xl mx-auto px-4 mt-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">The Vision for <span className="text-blue-400">2030</span></h2>
                        <div className="space-y-6 text-gray-300 leading-relaxed">
                            <p className="text-lg">
                                At SnapSofts, we aren't just following trends—we are creating the blueprints for the next decade. Our research and development labs are currently focused on three pillars of future technology:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                                <div className="border-l-2 border-blue-500 pl-4">
                                    <h4 className="text-white font-bold mb-2">Quantum Ready</h4>
                                    <p className="text-sm">Preparing our encryption protocols for the quantum computing era to ensure unbreakable data security.</p>
                                </div>
                                <div className="border-l-2 border-green-500 pl-4">
                                    <h4 className="text-white font-bold mb-2">Bio-Digital Sync</h4>
                                    <p className="text-sm">Integrating MedTech with wearable IoT to provide real-time health diagnostics through AI.</p>
                                </div>
                                <div className="border-l-2 border-purple-500 pl-4">
                                    <h4 className="text-white font-bold mb-2">Autonomous Retail</h4>
                                    <p className="text-sm">Building checkout-free systems using advanced computer vision and sensor fusion technologies.</p>
                                </div>
                                <div className="border-l-2 border-yellow-500 pl-4">
                                    <h4 className="text-white font-bold mb-2">Holographic UI</h4>
                                    <p className="text-sm">Transitioning from flat screens to immersive 3D spatial interfaces for professional creative tools.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
                            <h3 className="text-2xl font-bold mb-6 text-center text-blue-400">Technological Roadmap</h3>
                            <div className="space-y-8">
                                {[
                                    { year: "2026", goal: "Integration of Generative AI in Sticker Generator Lab" },
                                    { year: "2027", goal: "Launch of Decentralized Health Records (Blockchain MedTech)" },
                                    { year: "2028", goal: "Full rollout of AI-Driven Cybersecurity for SMEs" },
                                    { year: "2030", goal: "Achievement of Fully Autonomous Industrial Software Ecosystems" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center group/item">
                                        <div className="w-16 text-blue-400 font-black text-xl">{item.year}</div>
                                        <div className="h-px flex-grow bg-white/10 mx-4 group-hover/item:bg-blue-400/50 transition-colors"></div>
                                        <div className="w-2/3 text-gray-300 text-sm group-hover/item:text-white transition-colors">{item.goal}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            
            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes reverse-spin-slow {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 15s linear infinite;
                }
                .animate-reverse-spin-slow {
                    animation: reverse-spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default FutureTech;
