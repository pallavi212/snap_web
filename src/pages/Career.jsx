import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { User, Sparkles, Quote, CheckCircle2, Terminal, ArrowRight, Stethoscope, Building2, Camera, FileCode2 } from 'lucide-react';

const MarqueeTestimonials = ({ testimonials }) => {
    const [paused, setPaused] = useState(false);
    const trackRef = useRef(null);
    const posRef = useRef(0);
    const rafRef = useRef(null);
    const speed = 0.6; // px per frame

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const animate = () => {
            if (!paused) {
                posRef.current -= speed;
                const half = track.scrollWidth / 2;
                if (Math.abs(posRef.current) >= half) posRef.current = 0;
                track.style.transform = `translateX(${posRef.current}px)`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [paused]);

    // Resume on scroll
    useEffect(() => {
        const onScroll = () => { if (paused) setPaused(false); };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [paused]);

    const items = [...testimonials, ...testimonials];

    return (
        <div className="relative overflow-hidden py-10">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-20 pointer-events-none" />

            <div ref={trackRef} className="flex gap-6 w-max px-6" style={{ willChange: 'transform' }}>
                {items.map((t, idx) => (
                    <div
                        key={idx}
                        onClick={() => setPaused(p => !p)}
                        className="relative flex-shrink-0 w-[220px] md:w-[360px] min-h-[200px] md:min-h-[260px] rounded-2xl border border-white/10 shadow-xl bg-white/5 backdrop-blur-xl p-4 md:p-6 flex flex-col justify-between hover:bg-white/10 transition-colors cursor-pointer select-none"
                    >
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="flex items-start relative z-10">
                            <div className="w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                                <Quote className="w-3.5 h-3.5 text-blue-400/50" />
                            </div>
                        </div>

                        <div className="relative z-10 my-3 md:my-4">
                            <p className="text-blue-50/90 text-xs md:text-sm font-medium leading-relaxed italic line-clamp-5">"{t.content}"</p>
                        </div>

                        <div className="relative z-10 pt-3 border-t border-white/5 flex items-center justify-between">
                            <div>
                                <h3 className="text-sm font-bold text-white">{t.name}</h3>
                                <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest">Team Member</span>
                            </div>
                            <div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                                <User className="w-3.5 h-3.5 text-blue-400" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

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

    const products = [
        {
            name: "Clinic Management System",
            tech: "React, Node.js, PostgreSQL",
            description: "Complete solution for managing patient records, appointments, billing, and staff — built for modern clinics.",
            icon: Stethoscope,
            color: "blue"
        },
        {
            name: "Lab Management (Pathology)",
            tech: "React, Express, MongoDB",
            description: "Robust LIMS for pathology labs to manage samples, generate reports, and track inventory with quality control.",
            icon: Building2,
            color: "green"
        },
        {
            name: "Photography Management",
            tech: "Next.js, Tailwind CSS, Supabase",
            description: "All-in-one platform for photography studios — bookings, client galleries, invoicing, and package management.",
            icon: Camera,
            color: "purple"
        },
        {
            name: "Custom Sticker Design",
            tech: "React, Canvas API, Node.js",
            description: "Intuitive drag-and-drop sticker designer with barcode generation, batch printing, and template library.",
            icon: FileCode2,
            color: "orange"
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



                {/* Employee Testimonials Section */}
                <section className="space-y-12 overflow-hidden py-10">
                    <div className="text-center px-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">What Our <span className="text-blue-400">Team Says</span></h2>
                        <p className="text-blue-200/60 text-sm">Hear directly from the people who build SnapSofts</p>
                    </div>

                    <MarqueeTestimonials testimonials={employeeTestimonials} />
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
