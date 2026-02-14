import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: "#features", label: "Áreas" },
        { href: "#testimonials", label: "Testimonios" },
        { href: "#contact", label: "Contacto" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 mix-blend-difference text-white">
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
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8">
                    <button className="absolute top-6 right-6" onClick={() => setIsOpen(false)}>
                        <X size={32} />
                    </button>
                    {links.map((link) => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className="font-serif text-3xl hover:text-[#C6A87C] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}