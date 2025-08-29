import { motion } from "framer-motion";
import { Briefcase, Layout, Palette, Server } from "lucide-react";

import ServiceCard from "../components/ServiceCard";

function About() {
  return (
    <motion.div
      className="flex flex-col gap-5 max-lg:overflow-y-visible"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div>
        <h1 className="text-4xl text-white font-semibold capitalize max-sm:text-3xl ">
          About me
        </h1>
        <div className="h-2 w-13 bg-blue rounded-full mt-3"></div>
      </div>
      <div className="text-stone-300">
        <p className="max-xs:text-sm">
          I&apos;m a Full Stack Web Developer specializing in the MERN stack
          (MongoDB, Express.js, React, Node.js) and Tailwind CSS. I build fast,
          secure backends and craft sleek, responsive frontends that turn
          complex ideas into seamless, user-friendly web experiences -
          functional, creative, and built to make an impact.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <h1 className="text-3xl text-white font-semibold capitalize">
          What I&apos;m doing
        </h1>
        <div className="grid grid-cols-2 gap-5 mt-5 max-lg:grid-cols-1 ">
          <ServiceCard
            heading="Web Design"
            content="Modern, responsive, and visually striking designs crafted for seamless user experiences."
            icon={Palette}
          />
          <ServiceCard
            heading="Frontend Development"
            content="Building fast, interactive interfaces using React and Tailwind with pixel-perfect precision."
            icon={Layout}
          />
          <ServiceCard
            heading="Backend Development"
            content="RESTful APIs and scalable architectures using Node.js to power dynamic applications."
            icon={Server}
          />
          <ServiceCard
            heading="Freelancing"
            content="Providing reliable and professional solutions — delivered on time, every single time."
            icon={Briefcase}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default About;
