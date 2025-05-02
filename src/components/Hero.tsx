'use client';
import { motion } from 'framer-motion';
import BorderWrapper from './BorderWrapper';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full flex items-center justify-center bg-black py-24 px-4"
    >
      <BorderWrapper className="max-w-3xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight pb-2 animate-text-pulse">
          Hi, I’m Jack Gregorski
        </h1>
        <p className="text-lg text-gray-300 animate-fadeIn delay-300">
          CS @ Princeton · Web Dev · ML Enthusiast
        </p>
        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-text-pulse shadow-md hover:opacity-80 hover:shadow-[0_0_15px_#a855f7] transition-all"
        >
          See My Work
        </a>
      </BorderWrapper>
    </motion.section>
  );
}
