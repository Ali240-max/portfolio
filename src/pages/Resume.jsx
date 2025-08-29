import { motion } from "framer-motion";
import {
  BookOpen,
  Code,
  Layout,
  Server,
  Database,
  Cloud,
  Wind,
} from "lucide-react";
import LineThing from "../components/LineThing";
import EducationInfo from "../components/EducationInfo";
import SkillCard from "../components/SkillCard";

function Resume() {
  return (
    <motion.div
      className="flex flex-col gap-6 pb-15 max-lg:pb-5 overflow-y-scroll"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div>
        <h1 className="text-4xl text-white font-semibold capitalize max-sm:text-3xl">
          Resume
        </h1>
        <div className="h-2 w-13 bg-blue rounded-full mt-3"></div>
      </div>
      <div className="flex gap-3 items-center relative">
        <LineThing />
        <div className="p-[1px] bg-gradient-to-br from-gray-700 to-transparent rounded-xl">
          <div className="bg-[#202022] rounded-xl shadow-xl w-12 h-12 flex items-center justify-center ">
            <BookOpen className="w-5 h-5 text-blue" />
          </div>
        </div>
        <h1 className="text-2xl text-white font-semibold capitalize">
          Education
        </h1>
      </div>
      <div className="flex flex-col gap-6 ml-15 max-lg:gap-5 ">
        <EducationInfo
          university={"University of Chenab"}
          from={"2023"}
          to={"2027"}
          content="Pursuing a Bachelor of Science in Software Engineering (BSSE)at the University of Chenab."
        />
        <EducationInfo
          university={"Lahore Grammar School"}
          from={"2021"}
          to={"2023"}
          content="Completed Intermediate in Pre—Engineering (FSC) from Lahore Grammar School (LGS) during 2021-2023."
        />
        <EducationInfo
          university={"Lahore Grammar School"}
          from={"2019"}
          to={"2021"}
          content="Completed Matriculation from Lahore Grammar School (LGS), focusing on science subjects."
        />
      </div>

      {/* Skills */}

      <div className="flex flex-col gap-4">
        <div className="flex gap-2 items-center">
          <div className="p-[1px] bg-gradient-to-br from-gray-700 to-transparent rounded-xl">
            <div className="bg-[#202022] rounded-xl shadow-xl w-12 h-12 flex items-center justify-center ">
              <Code className="w-5 h-5 text-blue" />
            </div>
          </div>
          <h1 className="text-2xl text-white font-semibold capitalize">
            Skills
          </h1>
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-xs:grid-cols-1">
          <SkillCard icon={Layout} name="React.js" />
          <SkillCard icon={Server} name="Node.js" />
          <SkillCard icon={Database} name="MongoDB" />

          <SkillCard icon={Cloud} name="Express.js" />

          <SkillCard icon={Wind} name="Tailwind" />
          <SkillCard icon={Code} name="JavaScript" />
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
