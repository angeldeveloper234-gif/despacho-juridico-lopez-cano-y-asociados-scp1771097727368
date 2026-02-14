import { motion } from "framer-motion";

export function Testimonials() {
    return (
        <section id="testimonials" className="py-32 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                            alt="Client Portrait" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                    </motion.div>

                    {/* Text Side */}
                    <div className="flex flex-col justify-center border-l border-white/10 pl-8 md:pl-16 py-12">
                        <p className="font-serif italic text-3xl md:text-4xl text-[#C6A87C] leading-relaxed mb-8">
                            "Recomiendo mucho este despacho, muy buena atención y rapidez. En especial el Lic. Faridh quien demostró ser experto en la materia notarial."
                        </p>
                        <div>
                            <h4 className="text-white font-sans uppercase tracking-widest text-sm">Regina Viana</h4>
                            <p className="text-white/40 text-xs mt-1">Cliente Inmobiliario</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}