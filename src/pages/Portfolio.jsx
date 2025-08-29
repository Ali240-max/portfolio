import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
  const projects = [
    {
      title: "WorldWise",
      description: "Travel tracking made social",
      image: "/images/worldwise.png",
      link: "https://wworldwisee.netlify.app/",
    },

    {
      title: "Freelancer Dashboard",
      description: "A dashboard for freelancers",
      image: "/images/freelance.png",
      link: "https://freelance-dashboardd.netlify.app/",
    },
    {
      title: "Job Application Tracker",
      description: "Tracking job applications",
      image: "/images/job.png",
      link: "https://job-applicationn-tracker.netlify.app/dashboard",
    },
    {
      title: "Taskflow",
      description: "Fictional task management app",
      image: "/images/taskflow.png",
      link: "https://taskffloww.netlify.app/",
    },
    {
      title: "Ali's Blog",
      description: "Fictional blog site",
      image: "/images/blog.png",
      link: "https://alisblogg.netlify.app/",
    },
    {
      title: "usePopcorn",
      description: "Movie Tracking App",
      image: "/images/popcorn.png",
      link: "https://usee-popcorn.netlify.app/",
    },
    {
      title: "The Wild Oasis",
      description: "Full Stack App with Supabase",
      image: "/images/wild.png",
      link: "https://the-wwild-oasis.netlify.app/",
    },
  ];
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
