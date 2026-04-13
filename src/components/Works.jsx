import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github ,playStore} from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      initial="hidden"
      animate="show"
    >
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:scale-[1.02] transition-all duration-300"
      >
        {/* IMAGE */}
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* GITHUB / PLAY STORE ICON */}
          <div className="absolute inset-0 flex justify-end m-3 opacity-0 hover:opacity-100 transition" 
           onClick={() => window.open(source_code_link, "_blank")}
          >
            <div
             
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={name === "PK Connect" || name === "Chilly Apple - online grocery" || name === "HotelOps" ? playStore : github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* TAGS */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const webProjects = projects.filter((p) => p.type === "web");
  const mobileProjects = projects.filter((p) => p.type === "mobile");

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world
          examples of my work. Each project is briefly described with links to live
          demos.
        </motion.p>
      </div>

      {/* ====================== WEB PROJECTS ====================== */}
      <div className="mt-20">
        <h3 className="text-white text-[28px] font-bold mb-8">Web Applications</h3>
        <div className="flex flex-wrap gap-7">
          {webProjects.map((project, index) => (
            <ProjectCard
              key={`web-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>

      {/* ====================== MOBILE PROJECTS ====================== */}
      <div className="mt-20">
        <h3 className="text-white text-[28px] font-bold mb-8">Mobile Applications</h3>
        <div className="flex flex-wrap gap-7">
          {mobileProjects.map((project, index) => (
            <ProjectCard
              key={`mobile-${index}`}
              index={index + webProjects.length} // for smooth animation stagger
              {...project}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");