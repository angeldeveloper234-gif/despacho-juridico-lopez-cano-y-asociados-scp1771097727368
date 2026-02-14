import { MapPin, Phone, Clock } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-32 bg-[#030303] border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <h2 className="font-serif text-5xl text-white mb-12">Contacto Directo</h2>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                                    <MapPin className="text-[#C6A87C]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Oficinas Centrales</h4>
                                    <p className="text-white/50 text-sm leading-relaxed">
                                        Calle 60 Norte, Mérida, Yucatán.<br/>
                                        Zona Corporativa.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                                    <Phone className="text-[#C6A87C]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Teléfono</h4>
                                    <a href="tel:+529991635085" className="text-white/50 text-sm hover:text-[#C6A87C] transition-colors">
                                        +52 999 163 5085
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                                    <Clock className="text-[#C6A87C]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Horario</h4>
                                    <p className="text-white/50 text-sm">
                                        Lun - Vie: 9:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map - Dark Mode Hack */}
                    <div className="h-[500px] w-full grayscale invert contrast-125 brightness-75 rounded-none overflow-hidden border border-white/10">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.300686976986!2d-89.6247956850684!3d20.98056298602445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56714578167621%3A0x6d1326445582662c!2sM%C3%A9rida%2C%20Yuc.!5e0!3m2!1sen!2smx!4v1620000000000!5m2!1sen!2smx" 
                            width="100%" 
                            height="100%" 
                            style={{border:0}} 
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}