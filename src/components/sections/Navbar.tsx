import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "#features", label: "Áreas" },
        { href: "#testimonials", label: "Testimonios" },
        { href: "#contact", label: "Contacto" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-40 text-white ${!isOpen ? "mix-blend-difference" : ""}`}>
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <a href="#" className="text-sm font-bold tracking-[0.2em] uppercase">
                    López Cano <span className="text-[#C6A87C]">SCP</span>
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-12">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} className="text-xs uppercase tracking-widest hover:text-[#C6A87C] transition-colors">
                            {link.label}
                        </a>
                    ))}
                    <Button variant="outline" className="rounded-none border-white hover:bg-white hover:text-black text-xs uppercase tracking-widest px-6">
                        Agendar Cita
                    </Button>
                </div>

                {/* Mobile */}
                <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 bg-[#030303] z-[60] flex flex-col items-center justify-center gap-8"
                    >
                        <button className="absolute top-6 right-6 p-2" onClick={() => setIsOpen(false)}>
                            <X size={32} />
                        </button>
                        {links.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                onClick={() => setIsOpen(false)}
                                className="font-serif text-4xl hover:text-[#C6A87C] transition-colors"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <Button className="rounded-none bg-[#C6A87C] text-black hover:bg-white text-sm uppercase tracking-widest px-8 py-6 mt-4">
                                Agendar Cita
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
