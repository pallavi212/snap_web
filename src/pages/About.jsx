import { motion } from 'framer-motion';
import { Target, CheckCircle2, FileCode2, ShieldCheck, Zap, Building2, Layers, Camera, Mail, Phone } from 'lucide-react';
import ceoImage from '../assets/CEO-jaishri.jpeg';

const About = () => {
    const leadership = [
        {
            name: "Mrs. Jaishri Satish Ghuge",
            position: "Chief Executive Officer",
            email: "jaishri.ghuge@snapsofts.com",
            phone: "+91 92849 16836",
            image: ceoImage
        },
        {
            name: "Dr. Shrikrishna Panditrao Munde",
            position: "Director",
            email: "shrikrishna.munde@snapsofts.com",
            phone: "+91 84838 98328",
            image: new URL('../assets/Dr.Shirkrushna.JPG', import.meta.url).href
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
            {/* Dark Tech/City Skyline Background */}
            <div className="fixed inset-0 -z-10">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
                    alt="Connected network over earth"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-950/70 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-blue-900/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-24">

                {/* Hero Section */}
                <div className="text-center pt-8 md:pt-16 pb-8 flex flex-col items-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg text-white font-sans"
                    >
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SnapSofts</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-blue-100/90 font-medium drop-shadow max-w-3xl mx-auto leading-relaxed"
                    >
                        At SnapSofts Technology Pvt. Ltd., we believe in not just building software — but in <span className="text-blue-400 font-semibold">building people</span>.
                    </motion.p>
                </div>

                {/* Main About Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
                >
                    {/* Company Intro */}
                    <div className="text-center mb-12">
                        <p className="text-xl text-blue-100/90 max-w-4xl mx-auto leading-relaxed">
                            Based in Pune, India, we specialize in custom software development, mobile & web solutions, quality testing, and hands-on technical training.
                        </p>
                    </div>

                    {/* What We Do - 3 Columns */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
                            <span className="text-3xl mr-3">💡</span> What We Do
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 border border-blue-400/30">
                                    <FileCode2 className="w-6 h-6 text-blue-400" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">Custom Software & App Development</h4>
                                <p className="text-blue-200/80 leading-relaxed">
                                    We partner with clients — from startups to enterprise — to architect and deliver robust software, mobile apps, and web platforms that solve real-world problems.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 border border-green-400/30">
                                    <ShieldCheck className="w-6 h-6 text-green-400" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">Software Testing & QA</h4>
                                <p className="text-blue-200/80 leading-relaxed">
                                    Reliability is non-negotiable. We integrate rigorous testing and quality assurance throughout the development lifecycle to deliver bug-free, performant software.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 border border-purple-400/30">
                                    <Layers className="w-6 h-6 text-purple-400" />
                                </div>
                                <h4 className="text-xl font-bold text-white mb-3">Corporate & Student Training</h4>
                                <p className="text-blue-200/80 leading-relaxed">
                                    At the heart of SnapSofts is our passion for education. We conduct hands-on workshops and training programs in C, C++, Java, Android, SQL, and more, bridging the gap between academic learning and industry expectations.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Philosophy & Differentiators */}
                    <div className="mb-16">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center flex items-center justify-center">
                            <span className="text-3xl mr-3">🔍</span> Our Philosophy & Differentiators
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center shrink-0 border border-blue-400/30">
                                    <Zap className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Learning by doing</h4>
                                    <p className="text-blue-200/80 text-sm leading-relaxed">
                                        We don't believe in passive lectures. Students and trainees build, break, and debug — on real code — under mentorship from experienced engineers.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center shrink-0 border border-green-400/30">
                                    <Building2 className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Mentorship-driven growth</h4>
                                    <p className="text-blue-200/80 text-sm leading-relaxed">
                                        Each learner gets a mentor — someone who listens, challenges, and guides. We strive to be that guiding hand for others.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start space-x-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center shrink-0 border border-purple-400/30">
                                    <Camera className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">Client-centric innovation</h4>
                                    <p className="text-blue-200/80 text-sm leading-relaxed">
                                        SnapSofts is not just a vendor; we become technology partners. We invest time in understanding your domain, your users, and your vision — then deliver solutions that scale.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-start space-x-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0 border border-orange-400/30">
                                    <Target className="w-5 h-5 text-orange-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">End-to-end ownership</h4>
                                    <p className="text-blue-200/80 text-sm leading-relaxed">
                                        From ideation to deployment, from QA to support — we take full responsibility. Our clients trust us for delivering turnkey, production-ready solutions.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mission Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-400/30 rounded-2xl p-8 text-center"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center justify-center">
                            <span className="text-3xl mr-3">🌱</span> Our Mission
                        </h3>
                        <p className="text-xl text-blue-100 font-semibold mb-4 italic">
                            "To empower businesses with smart, scalable software — and empower developers with the skills, mindset, and confidence they need to thrive."
                        </p>
                        <p className="text-blue-200/80 leading-relaxed max-w-3xl mx-auto">
                            We envision a world where technology is accessible, reliable, and human-centered — and where every coder, beginner or advanced, has access to mentorship, practical learning, and a path to impact.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Leadership Team Section */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center drop-shadow-lg">Our Leadership</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {leadership.map((leader, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 shadow-xl"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.4)] border-4 border-white/20">
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">{leader.name}</h3>
                                    <p className="text-blue-300 font-bold tracking-wide uppercase text-sm mb-6">{leader.position}</p>

                                    <div className="w-full space-y-3">
                                        <div className="flex items-center justify-center space-x-3 text-blue-200/80 hover:text-white transition-colors">
                                            <Mail className="w-4 h-4" />
                                            <a href={`mailto:${leader.email}`} className="text-sm">
                                                {leader.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center justify-center space-x-3 text-blue-200/80 hover:text-white transition-colors">
                                            <Phone className="w-4 h-4" />
                                            <a href={`tel:${leader.phone}`} className="text-sm">
                                                {leader.phone}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Why Choose Us */}
                <section>
                    <div className="lg:grid lg:grid-cols-2 gap-16 items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow">Why Partner With Us?</h2>
                            <p className="text-lg text-blue-100/80 mb-8 leading-relaxed font-medium">
                                We believe that great software shouldn't require a steep learning curve. From clinics to photo studios, we design interfaces that are as intuitive as they are powerful.
                            </p>
                            <ul className="space-y-5">
                                {[
                                    "Domain-specific expertise in Healthcare and Creative tools.",
                                    "Dedicated 24/7 customer support and regular updates.",
                                    "Customizable modules to fit your exact workflow.",
                                    "Seamless onboarding and data migration services."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 className="w-6 h-6 text-blue-400 mr-4 shrink-0 shadow-blue-500/50 drop-shadow-md" />
                                        <span className="text-white font-medium text-[16px] drop-shadow-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mt-12 lg:mt-0 relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-white/20"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay z-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000"
                                alt="Team working together"
                                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700 relative z-0"
                            />
                        </motion.div>
                    </div>
                </section>

            </div>

        </motion.div>
    );
};

export default About;
