import Link from 'next/link';
import BorderWrapper from './BorderWrapper';

export type Project = {
  slug: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  content?: string;
};

export default function ProjectCard({ slug, title, description, image }: Project) {
  return (
    <div className="h-full flex">
      <BorderWrapper className="w-full flex flex-col justify-between">
        <div className="space-y-4 text-left">
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover rounded-md"
            />
          )}
          <h3 className="text-xl font-bold text-white animate-text-pulse">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
        <Link
          href={`/projects/${slug}`}
          className="mt-4 text-sm font-medium text-white underline underline-offset-4 hover:text-pink-400 transition-colors"
        >
          View Project →
        </Link>
      </BorderWrapper>
    </div>
  );
}
