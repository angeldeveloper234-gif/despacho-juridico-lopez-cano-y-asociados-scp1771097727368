import React, { useState, useEffect } from 'react';
import { useChat } from '../../../hooks/useChat';
import { ChatWindow } from './ChatWindow';
import { ChatInput } from './ChatInput';
import { Bot, X, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../../../config';

interface LegalBotWidgetProps {
    webhookUrl?: string;
    clientId: string;
}

const STICKY_PROMPTS = [
    "¿Necesitas ayuda legal?",
    "Consulta gratuita aquí",
    "Expertos en Inmobiliario",
    "Asesoría Corporativa"
];

export const LegalBotWidget: React.FC<LegalBotWidgetProps> = ({ webhookUrl, clientId }) => {
    const finalWebhookUrl = webhookUrl || config.chatbot.webhookUrl;
    const { messages, isLoading, sendMessage, isOpen, setIsOpen, clearHistory } = useChat({ webhookUrl: finalWebhookUrl, clientId });
    const { ui } = config.chatbot;

    const [promptIndex, setPromptIndex] = useState(0);

    // Rotate prompts every 5 seconds
    useEffect(() => {
        if (isOpen) return;
        const interval = setInterval(() => {
            setPromptIndex((prev) => (prev + 1) % STICKY_PROMPTS.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isOpen]);

    return (
        <>
            {/* Floating Trigger Area */}
            <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">

                {/* Sticky Prompts (Text Bubble) */}
                <AnimatePresence mode="wait">
                    {!isOpen && (
                        <motion.div
                            key={promptIndex}
                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 10, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="hidden md:block bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium"
                        >
                            {STICKY_PROMPTS[promptIndex]}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Sticky Prompt (Smaller) */}
                <AnimatePresence mode="wait">
                    {!isOpen && (
                        <motion.div
                            key={`mobile-${promptIndex}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="md:hidden absolute bottom-16 right-0 w-max bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 rounded-lg shadow-lg text-xs whitespace-nowrap"
                        >
                            {STICKY_PROMPTS[promptIndex]}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Toggle Button */}
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            initial={{ scale: 0, rotate: 180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: -180 }}
                            onClick={() => setIsOpen(true)}
                            className="relative group"
                        >
                            {/* Pulse Effect Background */}
                            <div className={`absolute inset-0 rounded-full ${ui.primaryColor} blur-md animate-pulse opacity-50`}></div>

                            {/* Intrigue Point (The Dot) */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute -top-1 -right-1 z-10"
                            >
                                <span className="relative flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A87C] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C6A87C] border-2 border-[#030303]"></span>
                                </span>
                            </motion.div>

                            {/* Button Itself */}
                            <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-tr ${ui.gradient} flex items-center justify-center shadow-2xl border border-white/10 overflow-hidden`}>
                                {/* Glass Shine */}
                                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 blur-sm"></div>

                                <Bot size={32} className="text-white drop-shadow-md" />
                            </div>

                            {/* Notification Badge (Internal history check) */}
                            {messages.length > 1 && (
                                <span className="absolute -top-1 -left-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#030303] animate-bounce z-10"></span>
                            )}
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-[100] md:inset-auto md:bottom-6 md:right-6 w-full h-full md:w-[400px] md:h-[650px] md:max-h-[85vh] flex flex-col bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 md:rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-5 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${ui.gradient} flex items-center justify-center shadow-inner`}>
                                        <Bot size={20} className="text-white" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#0a0a0a] rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-serif font-medium text-white text-base tracking-wide">{ui.title}</h3>
                                    <p className="text-[10px] text-white/50 uppercase tracking-widest">{ui.subtitle}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={clearHistory}
                                    className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                                    title="Limpiar chat"
                                >
                                    <Trash2 size={16} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-hidden relative">
                            <ChatWindow messages={messages} isLoading={isLoading} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-black/40 border-t border-white/5">
                            <ChatInput onSend={sendMessage} isLoading={isLoading} />
                            <div className="text-center mt-2">
                                <span className="text-[10px] text-white/20">{ui.footerText}</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
