'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageSquareMoreIcon, Send, X } from 'lucide-react'
import { useState } from 'react'
import profilePic from "../../../public/profile-pic.png"
import Image from 'next/image'

export default function Chat() {
    const [messages, setMessages] = useState<{ from: string, text: string }[]>([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const sendMessage = async () => {
        if (!input.trim()) return

        const userMessage = { from: 'user', text: input }
        const currentInput = input // Store current input
        setMessages(prev => [...prev, userMessage])
        setInput('')
        setLoading(true)

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: currentInput }),
            })

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`)
            }

            const data = await res.json()

            if (data.error) {
                throw new Error(data.error)
            }

            const botMessage = { from: 'bot', text: data.reply }
            setMessages(prev => [...prev, botMessage])
        } catch (error) {
            console.error('Chat error:', error)
            const errorMessage = {
                from: 'bot',
                text: 'Sorry, I encountered an error. Please try again.'
            }
            setMessages(prev => [...prev, errorMessage])
        } finally {
            setLoading(false)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    const toggleChat = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed bottom-20 right-4 w-[90%] sm:w-96 h-[550px] bg-white border border-gray-200 dark:border-[#333333] rounded-lg z-50 flex flex-col">
                        {/* Header */}
                        <div className="text-black border-b-1 border-gray-200 dark:border-[#333333] dark:bg-black p-4 rounded-t-md flex justify-between items-center">
                            <div className='flex items-center gap-2'>
                                <Image src={profilePic}
                                    alt="Profile"
                                    width={40}
                                    height={40}
                                    className="rounded-full object-cover w-10 h-10" />
                                <div className='dark:text-white'>
                                    <h3 className="text-sm font-medium">Chat with Leuan</h3>
                                    <div className='flex items-center gap-2'>
                                        <span aria-label="success" className="status status-warning animate-pulse"></span>
                                        <p className='text-xs'>Online</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="text-black dark:text-white hover:text-gray-200 cursor-pointer text-xl font-bold"
                            >
                                <X />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-2 dark:bg-black">
                            {messages.length === 0 && (
                                <div className="flex flex-col items-start">
                                    <div className="flex gap-2 items-center mb-2">
                                        <Image
                                            src={profilePic}
                                            alt="Profile"
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover w-8 h-8"
                                        />
                                        <p className="text-xs dark:text-white">Leuan Santos</p>
                                    </div>
                                    <div className="relative">
                                        <div className="mb-5 inline-block px-4 py-3 rounded-lg max-w-xs text-sm bg-gray-100 dark:bg-[#1f2937] dark:text-white">
                                            Hey there! 👋🏻<br /><br />
                                            Welcome to my portfolio! I'm Leuan, I am here to guide you through my work in programming and web development. Feel free to ask about my projects, skills, or experience in tech — let’s chat!
                                        </div>
                                        {/* Chat bubble tail */}
                                        <div className="absolute top-2 w-0 h-0 left-0 -translate-x-2 border-r-[12px] border-r-gray-100 dark:border-r-[#1f2937] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
                                    </div>
                                </div>

                            )}
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
                                    {msg.from !== 'user' && (
                                        <div className='flex gap-2 items-center mb-2'>
                                            <Image src={profilePic}
                                                alt="Profile"
                                                width={40}
                                                height={40}
                                                className="rounded-full object-cover w-8 h-8" />
                                            <p className='text-xs dark:text-white'>Leuan Santos</p>
                                        </div>
                                    )}
                                    <div className="relative">
                                        <div
                                            className={`mb-5 inline-block px-4 py-3 rounded-lg max-w-xs text-sm ${msg.from === 'user' ? 'bg-black text-white dark:text-black dark:bg-white' : 'bg-gray-100 dark:bg-[#1f2937] dark:text-white'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                        {/* Chat bubble tail */}
                                        <div
                                            className={`absolute top-2 w-0 h-0 ${msg.from === 'user'
                                                ? 'right-0 translate-x-2 border-l-[12px] border-l-black dark:border-l-gray-100 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent'
                                                : 'left-0 -translate-x-2 border-r-[12px] border-r-gray-100 dark:border-r-[#1f2937] border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent'
                                                }`}
                                        />
                                    </div>
                                </div>
                            ))}

                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 dark:bg-[#1f2937] dark:text-white rounded-md px-4 py-3 shadow-sm">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-gray-200 bg-white dark:bg-black dark:border-[#333333] rounded-b-lg">
                            <div className="flex gap-2">
                                <input
                                    className="border border-gray-300 dark:border-[#333333] flex-1 p-2 rounded-md text-sm dark:text-white"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    disabled={loading}
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={loading || !input.trim()}
                                    className="bg-black dark:bg-white text-white px-3 py-2 rounded-md hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm font-medium transition-colors"
                                >
                                    <Send size={20} className='text-white dark:text-black' />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Button */}
            <button
                onClick={toggleChat}
                className='fixed bottom-4 right-4 py-3 px-5 rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-300 bg-black dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-200 cursor-pointer'>
                <div className='flex gap-2 items-center'>
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                        <MessageSquareMoreIcon size={20} className='text-white dark:text-black' />
                    </motion.div>
                    <p className='text-sm text-white dark:text-black'>Chat with Leuan</p>
                </div>
            </button>
        </>
    )
}