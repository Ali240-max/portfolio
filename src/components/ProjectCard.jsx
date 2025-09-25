import { Link } from "react-router";
import { useState } from "react";

function ProjectCard({ projects }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      className="p-[1px] bg-gradient-to-br from-gray-700 to-transparent rounded-xl transition-all duration-300 flex-1 text-white cursor-pointer group min-w-60 max-w-60 max-xs:min-w-70 hover:translate-y-[-5px]"
      to={`/portfolio/${projects.id}`}
    >
      <div className="flex flex-col bg-[#202022] rounded-xl shadow-xl overflow-hidden">
        <div className="aspect-[16/9] relative">
          {!loaded && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse" />
          )}

          <img
            src={projects.image}
            alt={projects.title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="px-4 py-2">
          <p className="font-medium">{projects.title}</p>
          <p className="text-stone-400 text-sm truncate">
            {projects.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
