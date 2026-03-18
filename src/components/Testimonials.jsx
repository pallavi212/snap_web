import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';
import rohitImage from '../assets/rohit-patil.jpeg';
import rahulImage from '../assets/Rahul-Khot.jpeg';

const palette = [
    "from-blue-500/25 to-cyan-400/15",
    "from-indigo-500/25 to-blue-400/15",
    "from-sky-500/25 to-indigo-400/15",
    "from-cyan-500/25 to-blue-500/15",
    "from-violet-500/25 to-blue-500/15"
];

function getInitials(name) {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((p) => p[0]?.toUpperCase())
        .join('');
}

function hashToIndex(input, mod) {
    let h = 0;
    for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) >>> 0;
    return h % mod;
}

const defaultTestimonials = [
    {
        name: "Rohit Patil",
        role: "Student & Mentee",
        content: "Satish Sir has been an invaluable guide in my career journey. With his expert mentorship, I was able to choose the right path and make informed decisions. His constant support and constructive feedback helped me grow both personally and professionally. His outstanding programming expertise is matched only by his generosity in sharing knowledge and real-world experience. I'm truly grateful for his guidance, which has had a lasting impact on my life and career. Thank you, Satish Sir, for being an amazing mentor!",
        rating: 5,
        verified: true,
        image: rohitImage
    },
    {
        name: "Rahul Khot",
        role: "Lead Mobile Application Developer",
        content: "I'm truly grateful to Satish Sir for his exceptional teaching style and guidance. His clear explanations, practical approach, and emphasis on coding standards helped me build a strong foundation in Java and Android development. Today, as a Lead Mobile Application Developer, I owe much of my success to the skills and discipline I learned under his mentorship.",
        rating: 5,
        verified: true,
        image: rahulImage
    }
];

const Testimonials = ({
    title = "What Our Students Say",
    subtitle = "Real feedback from students and mentees who have grown under expert guidance.",
    testimonials = defaultTestimonials
}) => {
    return (
        <section className="py-24 z-10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 font-medium text-sm mb-6 shadow-lg">
                        Student Success Stories
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight drop-shadow-lg">{title}</h2>
                    <p className="text-lg text-blue-100/80 font-medium drop-shadow">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10 max-w-6xl mx-auto">
                    {testimonials.map((t, idx) => {
                        const gradient = palette[hashToIndex(t.name, palette.length)];
                        return (
                            <motion.div
                                key={`${t.name}-${idx}`}
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                                className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] overflow-hidden group"
                            >
                                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity"></div>
                                <div className="absolute top-0 left-1/4 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[1px]"></div>

                                <div className="relative z-10 flex items-center gap-4 mb-6">
                                    {t.image ? (
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg">
                                            <img
                                                src={t.image}
                                                alt={t.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} border border-white/20 flex items-center justify-center`}>
                                            <span className="text-white font-bold text-lg">{getInitials(t.name)}</span>
                                        </div>
                                    )}

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="text-white font-bold text-lg">{t.name}</div>
                                            {t.verified && (
                                                <CheckCircle className="w-5 h-5 text-blue-400" fill="currentColor" />
                                            )}
                                        </div>
                                        <div className="text-blue-200/70 text-sm font-medium">{t.role}</div>
                                    </div>

                                    <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                                        {Array.from({ length: 5 }).map((_, i) => {
                                            const active = i < (t.rating ?? 5);
                                            return (
                                                <Star
                                                    key={i}
                                                    className={active ? "w-4 h-4 text-yellow-400" : "w-4 h-4 text-white/20"}
                                                    fill={active ? "currentColor" : "none"}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-start gap-3">
                                        <Quote className="w-5 h-5 text-blue-300/80 shrink-0 mt-1" />
                                        <p className="text-blue-50/90 font-medium leading-relaxed">{t.content}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
