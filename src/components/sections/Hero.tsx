import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
                    alt="Corporate Architecture" 
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-end justify-between gap-12">
                
                {/* Text Content - Bottom Left */}
                <div className="max-w-4xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-[clamp(3rem,6vw,7rem)] leading-[0.9] text-white"
                    >
                        <span className="block text-white/40 italic text-3xl md:text-5xl mb-4 font-sans font-light tracking-wide">
                            Defendiendo su legado
                        </span>
                        <span className="block">LÓPEZ CANO</span>
                        <span className="block text-[#C6A87C] md:ml-32">& ASOCIADOS</span>
                    </motion.h1>
                </div>

                {/* Floating Card - Bottom Right */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="hidden md:block p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-none border-l-2 border-l-[#C6A87C]"
                >
                    <p className="text-[#C6A87C] text-xs uppercase tracking-[0.3em] mb-2">Establecidos en Mérida</p>
                    <p className="text-white font-serif text-2xl">Excelencia Jurídica <br/> & Corporativa</p>
                </motion.div>
            </div>
        </section>
    );
}