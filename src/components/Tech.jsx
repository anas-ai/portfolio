import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech) => (
        <div className='w-28 h-28 flex justify-center items-center p-4 bg-tertiary rounded-full shadow-card' key={tech.name}>
          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
