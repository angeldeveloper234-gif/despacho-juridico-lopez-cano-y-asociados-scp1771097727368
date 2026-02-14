import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const fees = [
    {
        title: "Asesoría Inicial",
        price: "$1,500",
        desc: "Consulta estratégica de 60 minutos.",
        features: ["Análisis preliminar", "Revisión de documentos", "Hoja de ruta legal"]
    },
    {
        title: "Defensa Corporativa",
        price: "A Medida",
        desc: "Iguala mensual para empresas.",
        features: ["Disponibilidad prioritaria", "Auditoría de contratos", "Defensa laboral y fiscal", "Gestión de actas"],
        highlight: true
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="py-32 bg-[#030303]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {fees.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`relative p-12 border flex flex-col justify-between min-h-[500px] ${
                                plan.highlight 
                                ? "bg-white/5 border-[#C6A87C]/50 backdrop-blur-md" 
                                : "bg-transparent border-white/10"
                            }`}
                        >
                            {plan.highlight && (
                                <div className="absolute inset-0 bg-[#C6A87C]/5 blur-3xl -z-10" />
                            )}
                            
                            <div>
                                <h3 className="text-[#C6A87C] text-xs uppercase tracking-[0.2em] mb-4">{plan.title}</h3>
                                <div className="font-serif text-5xl text-white mb-6">{plan.price}</div>
                                <p className="text-white/50 mb-8">{plan.desc}</p>
                                
                                <ul className="space-y-4">
                                    {plan.features.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-white/80 text-sm">
                                            <Check className="w-4 h-4 text-[#C6A87C]" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button 
                                className={`w-full mt-12 ${\n                                    plan.highlight 
                                    ? "bg-[#C6A87C] text-black hover:bg-white" 
                                    : "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black"
                                }`}
                            >
                                Solicitar Servicio
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}