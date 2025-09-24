import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { project } from "../../public/data";

function Portfolio() {
  const projects = project;
  return (
    <motion.div
      className="flex flex-col gap-5 max-lg:overflow-y-visible"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div>
        <h1 className="text-4xl text-white font-semibold capitalize max-sm:text-3xl">
          Portfolio
        </h1>
        <div className="h-2 w-13 bg-blue rounded-full mt-3"></div>
      </div>
      <div className="flex gap-5 flex-wrap items-center justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} projects={project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Portfolio;
