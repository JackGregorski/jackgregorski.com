import Link from 'next/link';
import { projects } from '@/data/projects';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateStaticParams(): Promise<Props['params'][]> {
    return projects.map((project) => ({
      slug: project.slug,
    }));
  }



type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  return {
    title: project?.title || 'Project',
  };
}


export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div className="text-white p-10">Project not found.</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 flex justify-center">
      <div className="max-w-3xl w-full animate-border-gradient p-[2px] rounded-2xl">
        <div className="bg-black rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-6 animate-text-pulse text-center">
            {project.title}
          </h1>

          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-lg mb-8 border border-gray-800"
            />
          )}

          <p className="text-gray-300 text-lg leading-relaxed whitespace-pre-line">
            {project.content}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-white font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-6 py-2 rounded-lg animate-text-pulse hover:opacity-80 hover:shadow-[0_0_15px_#a855f7] transition-all"
            >
              Visit project →
            </a>
          )}

          <div className="mt-10 text-center">
            <Link href="/">
              <span className="inline-block text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4">
                ← Back to Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
