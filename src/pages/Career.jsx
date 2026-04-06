import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Sparkles, Quote, CheckCircle2, Terminal, ArrowRight } from 'lucide-react';

const Career = () => {
    const employeeTestimonials = [
        {
            name: "Aniket",
            content: "The company offers a friendly and supportive work environment. The team works well together, the management is easy to talk to, and there are good opportunities to learn and grow.",

        },
        {
            name: "Harshad",
            content: "The office environment is highly positive and supportive, creating a great atmosphere for productivity and collaboration. Overall, it’s a motivating place to work and grow.",
        },
        {
            name: "Raj Bhute",
            content: "Had a really good experience here—worked on real projects, interacted with actual clients, and learned a lot of new technologies along the way. Great environment for practical learning and growth also the friendly culture here is so soothing and comfortable.",
        },
        {
            name: "Rushikesh Ajarekar",
            content: "Grateful to work in an environment that values innovation. From tackling new tech stacks to growing with a supportive team, every day is a step forward!",
        },
        {
            name: "Tanvi Kumbhar",
            content: "Being part of this company has been a truly rewarding experience. The workplace culture encourages cooperation, mutual respect, and open communication across teams. Leadership is supportive and attentive, creating an environment where ideas are heard and valued. The organization also promotes continuous learning and professional development. Overall, it's a place where work feels meaningful, engaging, and motivating every day.",
        }
    ];

    const whySnapSofts = [
        "Industry Leadership: Benefit from deep expertise in delivering high-impact software solutions across diverse domains.",
        "Cutting-Edge Technology Stack: Work with modern technologies including React, Next.js, and cloud-native architectures.",
        "Real-World Impact: Build products that solve complex business problems for global clients in diverse industries.",
        "Professional Mentorship: Collaborate with seasoned engineers and industry veterans to accelerate your professional growth.",
        "Innovation-Driven Culture: Join a team that prioritizes creative problem-solving and encourages curiosity-driven development.",
        "Clear Career Pathways: We provide transparent growth trajectories and long-term career development opportunities.",
        "High-Energy Collaboration: Work in a supportive, fast-paced environment where every team member's voice is valued.",
        "Engineering Excellence: Learn and apply industry-leading best practices in clean code and scalable software design.",
        "End-to-End Project Ownership: Take full responsibility from ideation to production, seeing your work make a tangible difference.",
        "Global Domain Exposure: Gain deep insights across multiple sectors, including healthcare, creative tools, and enterprise systems."
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
                        Career <span className="text-blue-400">Opportunities</span>
                    </motion.h1>
                    <p className="text-xl text-blue-100/80 max-w-3xl mx-auto font-medium">
                        Join our technical team and build modern web applications with cutting-edge technologies.
                    </p>
                </div>

                {/* Why Join Us? 10 Reasons */}
                <section className="space-y-12">
                    <div className="text-center">
                        <p className="text-blue-200/60 font-medium uppercase tracking-widest text-sm">SnapSofts Technology Pvt Ltd</p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-extrabold mb-4"
                        >
                            10 Reasons to <span className="text-blue-400">Join Us</span>
                        </motion.h2>
                        <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">Build your career with a company that values innovation, excellence, and growth.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {whySnapSofts.map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start space-x-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0 border border-blue-400/30">
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                </div>
                                <p className="text-blue-100/80 leading-relaxed">
                                    <span className="text-white font-bold">{point.split(":")[0]}:</span> {point.split(":")[1]}
                                </p>
                            </motion.div>
                        ))}
                    </div>
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
                                    "Our engineering team is focused on building scalable, high-performance solutions. We believe in continuous learning and pushing the boundaries of what's possible."
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
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Engineering Focus</h2>
                        <p className="text-blue-200/60 font-medium">Building industry-standard applications with precision and scale</p>
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
                                        Production Project
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
                                        <p className="text-[10px] text-blue-400 uppercase font-bold tracking-wider">Lead Engineer</p>
                                        <p className="text-white font-semibold text-sm">{project.mentor}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Employee Testimonials Section */}
                <section className="space-y-12 overflow-hidden py-10">
                    <div className="text-center px-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our <span className="text-blue-400">Team Says</span></h2>
                        <p className="text-blue-200/60 font-medium">Hear directly from the people who build SnapSofts</p>
                    </div>

                    {/* Infinite Auto-Scrolling Marquee */}
                    <div className="relative group/marquee overflow-hidden py-10">
                        {/* Gradient Fades for Smooth Edges */}
                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-20 pointer-events-none"></div>

                        <motion.div
                            className="flex gap-6 w-max px-6"
                            animate={{
                                x: ["0%", "-50%"]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 35,
                                    ease: "linear",
                                }
                            }}
                        >
                            {/* Double the items for a seamless infinite loop */}
                            {[...employeeTestimonials, ...employeeTestimonials].map((t, idx) => (
                                <motion.div
                                    key={idx}
                                    className="relative flex-shrink-0 w-[320px] md:w-[450px] min-h-[320px] md:min-h-[380px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group/card bg-white/5 backdrop-blur-xl p-8 flex flex-col justify-between hover:bg-white/10 transition-colors"
                                >
                                    {/* Decorative background circle */}
                                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover/card:bg-blue-400/20 transition-colors"></div>

                                    {/* Top row: Featured Tag & Icon */}
                                    <div className="flex justify-between items-start relative z-10">
                                        {t.featured ? (
                                            <span className="bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-blue-400/30 flex items-center gap-1.5 backdrop-blur-md">
                                                <Sparkles className="w-3 h-3" />
                                                Featured
                                            </span>
                                        ) : (
                                            <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                                                <Quote className="w-5 h-5 text-blue-400/50" />
                                            </div>
                                        )}

                                        <div className="w-12 h-12 bg-white/5 rounded-full border border-white/10 flex items-center justify-center text-blue-400 group-hover/card:bg-blue-500 group-hover/card:text-white transition-all duration-300">
                                            <ArrowRight className="w-5 h-5 transform -rotate-45" />
                                        </div>
                                    </div>

                                    {/* Middle content: Testimonial */}
                                    <div className="relative z-10 my-6">
                                        <p className="text-blue-50/90 text-lg md:text-xl font-medium leading-relaxed italic">
                                            "{t.content}"
                                        </p>
                                    </div>

                                    {/* Bottom row: Name & Role */}
                                    <div className="relative z-10 pt-6 border-t border-white/5 flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-white tracking-tight">{t.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="h-0.5 w-4 bg-blue-400/50 rounded-full"></div>
                                                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em]">Team Member</span>
                                            </div>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                                            <User className="w-5 h-5 text-blue-400" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
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
