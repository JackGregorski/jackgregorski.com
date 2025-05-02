'use client';
import { motion } from 'framer-motion';
import BorderWrapper from './BorderWrapper';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-center bg-black py-20 px-4"
    >
      <BorderWrapper className="max-w-3xl w-full text-center">
        <h2 className="text-3xl font-bold mb-6 animate-text-pulse">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed animate-fadeIn delay-300">
        I'm Jack Gregorski — a Computer Science major at Princeton with a minor in Finance. I’m passionate about full-stack development, machine learning, and building useful tools at the intersection of design and functionality. I’ve worked on everything from AI-generated video platforms to protein-small molecule interaction models.
        </p>
        <div className="mt-10 text-left">
          <h3 className="text-xl font-semibold mb-4 text-white">Skills & Tools</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 text-sm text-gray-400 list-disc list-inside">
            <li>Python</li>
            <li>JavaScript/TypeScript</li>
            <li>Next.js / React</li>
            <li>Flask / FastAPI</li>
            <li>PyTorch / scikit-learn</li>
            <li>AWS / S3</li>
            <li>SQL</li>
            <li>Tailwind CSS</li>
            <li>Git / GitHub</li>
          </ul>
        </div>
      </BorderWrapper>
    </motion.section>
  );
}
