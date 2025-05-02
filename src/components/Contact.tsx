'use client';
import { motion } from 'framer-motion';
import BorderWrapper from './BorderWrapper';

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-center bg-black py-20 px-4"
    >
      <BorderWrapper className="max-w-2xl w-full text-center">
        <h2 className="text-3xl font-bold mb-6 animate-text-pulse">Get In Touch</h2>
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        Whether you&apos;re a recruiter, collaborator, or just curious — I&apos;d love to hear from you!

        </p>

        <a
          href="mailto:jigregorski@gmail.com"
          className="inline-block px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-text-pulse hover:opacity-80 hover:shadow-[0_0_15px_#a855f7] transition-all"
        >
          Email Me
        </a>

        <p className="mt-4 text-gray-400 text-sm select-all">
          Or reach me at <span className="text-white">jigregorski@gmail.com</span>
        </p>

        <div className="mt-10 flex justify-center gap-8 text-lg text-gray-400">
          <a
            href="https://github.com/jackgregorski"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jack-gregorski/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </BorderWrapper>
    </motion.section>
  );
}
