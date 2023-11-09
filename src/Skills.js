import { Data } from "./data/skills";
import { SkillCard } from "./components/skillcard";
import Fade from "react-reveal/Fade";

export default function Skills() {
  return (
    <div class="bg-black h-full">
      <div class="pt-10 text-6xl font-gilmer font-semibold flex justify-center">
        <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#8e3eb3] to-[#d0aedf]">
          SKILLS
        </span>
      </div>

      <div class=" mx-4 my-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1 pt-12 ">
        <Fade>
          {Data.map((skill, index) => {
            return <SkillCard details={skill} key={index} />;
          })}
        </Fade>
      </div>
    </div>
  );
}
