"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  "😍 Tudo por apenas R$ 10,00",
  "🚐 Frete grátis em pedidos acima de R$ 99!",
  "✨ Visite nossas unidades em Fortaleza!",
];

export default function Announcementbar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white font-bold">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="block"
        >
          {messages[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
