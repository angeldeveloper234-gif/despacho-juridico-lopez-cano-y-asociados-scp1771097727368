export const config = {
    landingClientId: "6428a6f3-4dc4-4e94-8a6c-85112ea89b4d",
    contactFormWebhook: "https://cartographic-shamika-predetrimental.ngrok-free.dev/webhook-test/contact-form",
    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL,
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    },
    bookingUrl: "#contact", 
    paymentLink: "#",
    googleMapsReviewUrl: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID",
    chatbot: {
        webhookUrl: import.meta.env.VITE_N8N_CHAT_WEBHOOK || "https://cartographic-shamika-predetrimental.ngrok-free.dev/webhook/187f7214-634a-4ba4-ae42-f1518eb50fa2/chat",
        ui: {
            title: "Asistente Legal IA",
            subtitle: "En línea - López Cano y Asoc.",
            footerText: "Despacho Jurídico López Cano y Asociados SCP",
            primaryColor: "bg-[#C6A87C] hover:bg-[#b0936a]",
            gradient: "from-[#C6A87C] to-[#8c7350]",
            accentColor: "bg-green-500"
        },
        messages: {
            welcome: "¡Hola! 👋 Bienvenido a López Cano y Asociados. Soy tu asistente virtual. ¿En qué tema legal podemos ayudarte hoy? (Inmobiliario, Corporativo, Fiscal)",
            reset: "Conversación reiniciada. ¿En qué más puedo ayudarte?",
            error: "Lo siento, hubo un error de conexión.",
            fallback: "Entendido. ¿Podrías darme más detalles?",
            negativeIntentKeywords: ['no me sirve', 'humano', 'persona']
        }
    },
    demoUser: {
        name: "Visitante Demo",
        email: "visitante@demo.com",
        whatsapp: "+529991635085"
    },
    analytics: {
        webhookUrl: "",
        enabled: true
    }
};