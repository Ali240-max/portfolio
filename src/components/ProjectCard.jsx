import { Link } from "react-router";

function ProjectCard({ projects }) {
  return (
    <Link
      className="p-[1px] bg-gradient-to-br from-gray-700 to-transparent rounded-xl transition-all duration-300 flex-1 text-white cursor-pointer group min-w-60 max-w-60 max-xs:min-w-70 hover:translate-y-[-5px]"
      // onClick={() => window.open(projects.link, "_blank")}
      to={`/portfolio/${projects.id}`}
    >
      <div className="flex flex-col bg-[#202022] rounded-xl shadow-xl overflow-hidden">
        <img
          src={projects.image}
          alt={projects.title}
          className="w-full object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-106"
        />
        <div className="px-4 py-2">
          <p>{projects.title}</p>
          <p className="text-stone-400 text-sm truncate">
            {projects.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
