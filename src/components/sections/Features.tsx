import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const practices = [
    { id: "01", title: "Derecho Inmobiliario", desc: "Certeza jurídica en transacciones y desarrollos." },
    { id: "02", title: "Defensa Corporativa", desc: "Estrategias legales para empresas sólidas." },
    { id: "03", title: "Asesoría Fiscal", desc: "Optimización y cumplimiento normativo." },
    { id: "04", title: "Litigio Mercantil", desc: "Resolución de conflictos comerciales complejos." }
];

export function Features() {
    return (
        <section id="features" className="py-32 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <h2 className="text-[#C6A87C] text-xs uppercase tracking-[0.4em] mb-4 md:mb-0">Áreas de Práctica</h2>
                    <p className="text-white/50 max-w-md text-right hidden md:block">
                        Enfoque multidisciplinario para resolver los retos legales más exigentes de la región.
                    </p>
                </div>

                <div className="flex flex-col">
                    {practices.map((item) => (
                        <motion.div 
                            key={item.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="group flex flex-col md:flex-row items-baseline md:items-center justify-between py-12 border-y border-white/10 hover:bg-white transition-colors duration-500 cursor-default px-4"
                        >
                            <span className="text-white/30 font-mono text-sm mb-4 md:mb-0 group-hover:text-black/50 transition-colors">{item.id}</span>
                            
                            <h3 className="font-serif text-4xl md:text-6xl text-white group-hover:text-black transition-colors w-full md:w-1/2">
                                {item.title}
                            </h3>
                            
                            <p className="text-white/50 group-hover:text-black/70 transition-colors md:w-1/4">
                                {item.desc}
                            </p>

                            <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight className="text-black w-8 h-8" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}