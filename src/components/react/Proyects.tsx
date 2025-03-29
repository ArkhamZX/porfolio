import type { CollectionEntry } from 'astro:content';
import { useState } from 'react';

type Props = {
  initialProyects: CollectionEntry<'projects'>[];
};

const TAGS = ['React', 'NextJS', 'AstroJS', 'JavaScript', 'TypeScript'];

export const Proyects = ({ initialProyects }: Props) => {
  const [filterByTag, setFilterByTag] = useState<Set<string>>(new Set());

  const toggleTag = (tag: string) => {
    setFilterByTag(prev => {
      const newFilters = new Set(prev);
      if (newFilters.has(tag)) {
        newFilters.delete(tag);
      } else {
        newFilters.add(tag);
      }
      return newFilters;
    });
  };

  const filteredProyects = initialProyects.filter(proyect =>
    Array.from(filterByTag).every(tag =>
      proyect.data.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
    )
  );

  return (
    <div className="container max-w-2xl mx-auto px-4 py-8">
      	<button
				className="py-2 px-4 mb-8 text-black dark:text-white border-neutral-600 rounded-md border bg-transparent cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-500/50 hover:shadow-lg"
        onClick={() => history.back()}
				aria-label="botón para ir a los proyectos"
			>
				Volver a proyectos
			</button>
      {/* Filtros */}
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase text-gray-600 dark:text-gray-300 mb-2">Filtros</p>
        <div className="flex flex-wrap gap-2">
          {TAGS.map(tag => (
            <button
              key={tag}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition 
                ${filterByTag.has(tag) 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Sección de Proyectos */}
      <section>
        <h2 className="text-xs font-light uppercase text-gray-600 dark:text-gray-300 mb-3">
          Mostrando {filteredProyects.length} de {initialProyects.length} proyectos
        </h2>

        <div className="flex flex-col gap-6">
          {filteredProyects.map(proyect => (
            <a 
              key={proyect.slug}
              href={`/info-proyects/${proyect.slug}`}
              className="block bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:scale-[1.02]"
            >
              {/* Imagen */}
              <div className="w-full h-48 relative overflow-hidden">
                <img
                  src={proyect.data.image.src}
                  alt={proyect.data.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{proyect.data.title}</h3>
                {proyect.data.isInConstruction && (
                  <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded mt-2 inline-block">
                    En desarrollo
                  </span>
                )}
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">{proyect.data.summary}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {proyect.data.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
       
      </section>
    </div>
  );
};
