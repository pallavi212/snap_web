import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, User, Code, Sparkles, Quote, CheckCircle2, Terminal } from 'lucide-react';

const Career = () => {
    const internshipTypes = [
        {
            title: "Internship",
            description: "A free introductory program focused on foundational skills and learning. Work on non-critical internal projects to build your portfolio and understanding of industry practices.",
            icon: GraduationCap,
            color: "text-blue-400",
            bgColor: "bg-blue-500/20"
        }
    ];

    const projects = [
        {
            name: "Enterprise Resource Planner (ERP)",
            tech: "React, Node.js, PostgreSQL",
            description: "A full-stack web application for managing business processes, inventory, and human resources.",
            mentor: "Satish Ghuge"
        },
        {
            name: "Real-time Analytics Dashboard",
            tech: "Next.js, Tailwind CSS, Socket.io",
            description: "High-performance dashboard for monitoring live data streams with interactive visualizations.",
            mentor: "Satish Ghuge"
        },
        {
            name: "Healthcare Management Portal",
            tech: "React, Express, MongoDB",
            description: "Comprehensive system for patient records, scheduling, and billing specifically for clinics.",
            mentor: "Satish Ghuge"
        }
    ];

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
            className="relative flex flex-col pt-24 pb-20 overflow-hidden text-white"
        >
            {/* Background */}
            <div className="fixed inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
                    alt="Team working in office"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gray-950/85 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/70 to-blue-900/30"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-24">
                
                <div className="text-center pt-8 md:pt-16 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-md border border-blue-400/20 text-blue-300 font-medium text-sm mb-6 shadow-lg"
                    >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Shape Your Future With Us
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg"
                    >
                        Internship <span className="text-blue-400">Programs</span>
                    </motion.h1>
                    <p className="text-xl text-blue-100/80 max-w-3xl mx-auto font-medium">
                        Join our technical team and gain real-world experience building modern web applications with cutting-edge technologies.
                    </p>
                </div>

                {/* Internship Types */}
                <section className="flex justify-center">
                    {internshipTypes.map((type, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl hover:bg-white/10 transition-all group max-w-lg"
                        >
                            <div className={`w-14 h-14 ${type.bgColor} rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform`}>
                                <type.icon className={`w-8 h-8 ${type.color}`} />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">{type.title}</h3>
                            <p className="text-blue-100/70 leading-relaxed text-lg">{type.description}</p>
                        </motion.div>
                    ))}
                </section>

                {/* Experience Speech & Positive Thought Section */}
                <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 lg:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Quote className="w-32 h-32 text-blue-400" />
                    </div>
                    
                    <div className="lg:grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                A Message from our <span className="text-blue-400">Technical Leadership</span>
                            </h2>
                            <div className="space-y-4 text-blue-100/80 text-lg leading-relaxed italic">
                                <p>
                                    "With over <span className="text-white font-bold">13 years of experience in the IT industry</span>, I've seen technologies come and go, but the core principle remains the same: Solve real problems with elegant code."
                                </p>
                                <p>
                                    "Our internship program is designed not just to teach you how to code, but how to think like an engineer. We bridge the gap between academic theory and industry reality."
                                </p>
                            </div>
                            <div className="pt-6">
                                <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-2">Positive Thought</p>
                                <p className="text-2xl font-semibold text-white">
                                    "The only way to do great work is to love what you do. Innovation starts with curiosity."
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 mt-12 lg:mt-0">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-square">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                    alt="Collaboration"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Showcase Section */}
                <section className="space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Project Based Learning</h2>
                        <p className="text-blue-200/60 font-medium">Build industry-standard applications under expert guidance</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-blue-400/50 transition-all flex flex-col"
                            >
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
                                        <Terminal className="w-6 h-6" />
                                    </div>
                                    <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-3 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30">
                                        Active Project
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.name}</h3>
                                <p className="text-sm text-blue-300/80 mb-4 font-mono">{project.tech}</p>
                                <p className="text-blue-100/60 text-sm mb-6 flex-grow">{project.description}</p>
                                
                                <div className="pt-6 border-t border-white/5 flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mr-3">
                                        <User className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-blue-400 uppercase font-bold tracking-wider">Mentor</p>
                                        <p className="text-white font-semibold text-sm">{project.mentor}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center bg-blue-600 rounded-3xl p-12 shadow-[0_0_50px_rgba(37,99,235,0.3)]">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your journey?</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                        We are looking for motivated individuals who want to learn and grow in a fast-paced environment.
                    </p>
                    <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                        Apply Now
                    </button>
                </section>

            </div>
        </motion.div>
    );
};

export default Career;
