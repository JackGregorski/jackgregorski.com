import type { Project } from '@/components/ProjectCard';


export const projects: Project[] = [
  {
    slug: 'genconnect',
    title: 'Genconnect',
    description: 'AI-powered shortform video generation with Remotion and OpenAI.',
    link: 'https://genconnect-collinbolers-projects.vercel.app/',
    image: '/images/genconnect.png',
    content: `Genconnect is a shortform video generation platform that leverages OpenAI's TTS, AssemblyAI, and Remotion to create stylized, Reddit-style videos with subtitles, audio, and custom backgrounds. It supports message animations and video templates for rapid content creation.`,
  },
  {
    slug: 'protein-classifier',
    title: 'Protein-Compound Classifier',
    description: 'ML model predicting microbiome-protein interactions using PLMs and molecular fingerprints.',
    link: '/papers/written_final_report.pdf',
    image: '/images/IW.png',
    content: `This project explores the use of protein language models and chemical fingerprints to predict small molecule–protein interactions relevant to the human microbiome. The model was trained and evaluated across multiple thresholds, with extensive benchmarking against logistic regression and dummy classifiers. Results demonstrate the promise of deep learning in computational biology and feature reproducible model code.`,
  },
];

