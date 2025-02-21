import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const greetings = [
  { text: "Hello"},
  { text: "Hola"},
  { text: "Bonjour"},
  { text: "Hallo"},
  { text: "Ciao"},
  { text: "こんにちは"},
  { text: "안녕하세요"},
  { text: "你好"},
  { text: "Привет"},
  { text: "नमस्ते"},
  { text: "Merhaba"},
];

export default function SwitchingText() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (index < greetings.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      navigate("/home");
    }
  }, [index, navigate]);

  return (
    <div className="font-poppins flex flex-col items-center justify-center h-screen text-black bg-white dark:bg-black dark:text-white">
      {index < greetings.length && (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.1 }}
          className="text-4xl font-bold"
        >
          {greetings[index].text}
        </motion.div>
      )}
    </div>
  );
}
