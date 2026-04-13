import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const palette = [
    "from-blue-600 to-blue-800",
    "from-indigo-600 to-indigo-800",
    "from-sky-600 to-sky-800",
    "from-cyan-600 to-cyan-800",
    "from-violet-600 to-violet-800"
];

function getInitials(name) {
    return name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]?.toUpperCase()).join('');
}

function hashToIndex(input, mod) {
    let h = 0;
    for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) >>> 0;
    return h % mod;
}

const defaultTestimonials = [
    {
        name: "Ajay Bhoyar",
        role: "Founder, AbDream Weddings",
        content: "SnapSofts built us an incredible photography management platform. It's not just a website; it's a tool that helps us manage our entire workflow from booking to final delivery. The user interface is beautiful and our clients love the private galleries.",
        rating: 5,
        verified: true,
    },
];

const Testimonials = ({
    title = "What Our Clients Say",
    subtitle = "Real feedback from businesses and partners who have grown with our solutions.",
    testimonials = defaultTestimonials
}) => {
    return (
        <section className="py-20 z-10 relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 font-medium text-sm mb-6 shadow-lg">
                        Success Stories
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight drop-shadow-lg">{title}</h2>
                    <p className="text-lg text-blue-100/80 font-medium drop-shadow">{subtitle}</p>
                </div>

                {/* Cards */}
                <div className="space-y-6">
                    {testimonials.map((t, idx) => {
                        const gradient = palette[hashToIndex(t.name, palette.length)];
                        return (
                            <motion.div
                                key={`${t.name}-${idx}`}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.55, delay: idx * 0.08, ease: "easeOut" }}
                                className="relative bg-white/8 backdrop-blur-xl border border-white/12 rounded-3xl p-7 sm:p-9 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] overflow-hidden"
                                style={{ background: 'rgba(255,255,255,0.06)' }}
                            >
                                <div className="flex flex-col sm:flex-row gap-8 items-start">
                                    {/* Left: avatar + name + role + stars */}
                                    <div className="shrink-0 flex flex-col items-start gap-3 sm:w-44">
                                        {t.image ? (
                                            <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                                                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                                            </div>
                                        ) : (
                                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                                                <span className="text-white font-bold text-2xl">{getInitials(t.name)}</span>
                                            </div>
                                        )}
                                        <div>
                                            <div className="flex items-center gap-1.5">
                                                <span className="text-white font-bold text-base leading-tight">{t.name}</span>
                                                {t.verified && (
                                                    <span className="text-blue-400 text-base">🔵</span>
                                                )}
                                            </div>
                                            <div className="text-blue-200/60 text-[11px] font-semibold tracking-widest uppercase mt-0.5">
                                                {t.role}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={i < (t.rating ?? 5) ? "w-4 h-4 text-yellow-400" : "w-4 h-4 text-white/20"}
                                                    fill={i < (t.rating ?? 5) ? "currentColor" : "none"}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Divider */}
                                    <div className="hidden sm:block w-px self-stretch bg-white/10" />

                                    {/* Right: quote */}
                                    <div className="flex-1 flex items-start gap-4">
                                        <Quote className="w-8 h-8 text-blue-300/50 shrink-0 mt-1" strokeWidth={2.5} />
                                        <p className="text-blue-50/90 font-medium leading-relaxed text-[15px] italic">
                                            {t.content}
                                        </p>
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
