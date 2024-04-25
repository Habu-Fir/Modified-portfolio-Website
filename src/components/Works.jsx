import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, image, description, tags }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 45,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className=" relative w-full h-[230] ">
          <img
            src={image}
            alt={name}
            className=" w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className=" mt-5 ">
          <h3 className=" text-white font-bold text-[15px]">{name}</h3>
          <p className=" mt-2 text-secondary text-[12px]">{description}</p>
        </div>
        <div className=" mt-4 flex flex-wrap gap-2 ">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className=" w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className=" mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Welcome to my Projects section! This space serves as a showcase of my
          expertise and experience across various web development technologies.
          Below, you'll find a carefully curated selection of projects I've
          developed, each demonstrating different aspects of my skills as a
          full-stack developer.
        </motion.p>
      </div>
      <div className=" mt-20 flex flex-wrap gap-7 ">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
