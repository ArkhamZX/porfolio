import type { CollectionEntry } from 'astro:content';
import { Chips } from './Chips';

type Props = {
  proyect: CollectionEntry<'projects'>;
};

export const ProyectCard = ({ proyect }: Props) => {
  const { title, summary, isInConstruction, tags } = proyect.data;

  return (
    <article className="
      relative p-5 rounded-md
      ring-1 ring-gray-300 dark:ring-gray-600
      hover:bg-gray-100/50 dark:hover:bg-gray-700/50
      transition-colors duration-300
      group
    ">
      <a 
        href={`/info-proyects/${proyect.slug}`}
        className="flex flex-col justify-between gap-4 no-underline"
      >
        <header className="flex justify-between items-center gap-2">
          <h2 
            className="
              text-lg md:text-xl
              flex items-end gap-1
              transition-colors duration-300
              group-hover:text-blue-600 dark:group-hover:text-blue-400
            "
            style={{ viewTransitionName: `${title}-title` }}
          >
            {title}
          </h2>
        </header>

        <div className="flex flex-col gap-1">
          {isInConstruction && (
            <span className="text-xs text-yellow-600 dark:text-yellow-400">
              En desarrollo
            </span>
          )}
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {summary}
          </span>
          <Chips tegnologies={tags} />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            stroke-current overflow-visible
            text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400
          "
        >
          <line 
            x1="5" 
            y1="12" 
            x2="19" 
            y2="12" 
            className="
              scale-x-0 translate-x-1
              origin-left
              transition-transform duration-300
              group-hover:scale-x-100 group-hover:translate-x-0.5
            "
          />
          <polyline 
            points="12 5 19 12 12 19" 
            className="
              transition-transform duration-300
              group-hover:translate-x-0.5
            "
          />
        </svg>
      </a>
    </article>
  );
};