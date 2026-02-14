export function Footer() {
    return (
        <footer className="bg-[#030303] text-white pt-24 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                {/* Huge Brand Name */}
                <div className="border-b border-white/10 pb-12 mb-12">
                    <h2 className="text-[10vw] leading-none font-serif text-center opacity-20 hover:opacity-40 transition-opacity cursor-default">
                        LÓPEZ CANO
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white/40">
                    <div>
                        <p>© {new Date().getFullYear()} López Cano y Asociados SCP.</p>
                        <p>Todos los derechos reservados.</p>
                    </div>
                    <div className="md:text-center">
                        <a href="#" className="hover:text-[#C6A87C] transition-colors">Privacidad</a>
                        <span className="mx-2">•</span>
                        <a href="#" className="hover:text-[#C6A87C] transition-colors">Términos</a>
                    </div>
                    <div className="md:text-right">
                        <p>Diseñado con precisión en Mérida, MX.</p>
                    </div>
                </div>

                {/* Disclaimer Text (Replacing Modal) */}
                <div className="mt-12 pt-8 border-t border-white/5 text-[10px] text-white/20 text-justify">
                    <p>
                        AVISO LEGAL IMPORTANTE: La información contenida en este sitio web tiene únicamente fines informativos y no constituye asesoramiento legal. 
                        El uso de este sitio o el envío de información a través del mismo no crea una relación abogado-cliente. 
                        No debe actuar basándose en la información proporcionada sin buscar asesoramiento profesional específico para su situación. 
                        López Cano y Asociados SCP no se hace responsable de las acciones tomadas basándose en el contenido de este sitio.
                    </p>
                </div>
            </div>
        </footer>
    );
}