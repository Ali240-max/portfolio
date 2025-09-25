// import { useParams } from "react-router";
// import { project } from "../../public/data";
// import SkillCard from "../components/SkillCard";
// import { Github, Link, Server } from "lucide-react";

// function ProjectPage() {
//   const [loaded, setLoaded] = useState(false);
//   let projects = project;
//   const { id } = useParams();
//   const idToString = +id;
//   projects = projects.find((p) => p.id === idToString);

//   return (
//     <div className="flex flex-col gap-2 ">
//       <div>
//         <h1 className="text-4xl text-white font-semibold capitalize max-sm:text-3xl">
//           {projects.title}
//         </h1>
//         <div className="h-2 w-13 bg-blue rounded-full mt-3"></div>
//       </div>
//       <div className="flex gap-2 justify-between text-white mt-5">
//         <div className="flex flex-col gap-4 max-lg:gap-0 ">
//           <p>{projects.description}</p>
//           <div className="text-white my-3 text-lg underline decoration-blue-500 lg:mt-8 ">
//             <div className="flex gap-2 items-center ">
//               <a href={projects.link} target="_blank">
//                 Try it now
//               </a>
//               <Link className="w-5 h-5 text-blue" />
//             </div>
//             <div className="flex gap-2 items-center ">
//               <a href={projects.github} target="_blank">
//                 Source Code
//               </a>
//               <Github className="w-5 h-5 text-blue" />
//             </div>
//           </div>
//         </div>
//         <img
//           src={projects.image}
//           className="h-60 w-110 rounded-xl max-lg:hidden"
//           alt=""
//         />
//       </div>

//       <div>
//         <h1 className="text-2xl text-white font-semibold capitalize mb-3">
//           Tech Stack
//         </h1>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-xs:grid-cols-1">
//           {projects.tech.map((tech, index) => (
//             <SkillCard icon={Server} name={tech} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectPage;

import { useParams } from "react-router";
import { project } from "../../public/data";
import SkillCard from "../components/SkillCard";
import { Github, Link as LinkIcon, Server } from "lucide-react";
import { useState } from "react";

function ProjectPage() {
  let projects = project;
  const { id } = useParams();
  const idToString = +id;
  projects = projects.find((p) => p.id === idToString);

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-4xl text-white font-semibold capitalize max-sm:text-3xl">
          {projects.title}
        </h1>
        <div className="h-2 w-13 bg-blue rounded-full mt-3"></div>
      </div>

      <div className="flex gap-2 justify-between text-white mt-5">
        <div className="flex flex-col gap-4 max-lg:gap-0">
          <p>{projects.description}</p>
          <div className="text-white my-3 text-lg underline decoration-blue-500 lg:mt-8">
            <div className="flex gap-2 items-center">
              <a href={projects.link} target="_blank">
                Try it now
              </a>
              <LinkIcon className="w-5 h-5 text-blue" />
            </div>
            <div className="flex gap-2 items-center">
              <a href={projects.github} target="_blank">
                Source Code
              </a>
              <Github className="w-5 h-5 text-blue" />
            </div>
          </div>
        </div>

        <div className=" w-300 max-lg:hidden">
          {!loaded && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-xl" />
          )}
          <img
            src={projects.image}
            alt={projects.title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`h-60 w-110 rounded-xl object-cover transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      <div>
        <h1 className="text-2xl text-white font-semibold capitalize mb-3">
          Tech Stack
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-xs:grid-cols-1">
          {projects.tech.map((tech, index) => (
            <SkillCard key={index} icon={Server} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
