import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 px-6 md:px-20 bg-[#111827]"
    >
      <div className="max-w-7xl mx-auto">
        
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-20"
        >
          Featured <span className="text-purple-500">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="bg-[#1f2937] rounded-3xl overflow-hidden border border-gray-700 hover:border-purple-500 transition duration-500 shadow-xl"
            >
              
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={
                    index === 0
                      ? "/project1.png"
                      : "/project2.png"
                  }
                  alt={project.title}
                  className="w-full h-[260px] object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                
                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-purple-600/20 border border-purple-500 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-5">
                  
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-500 hover:border-purple-500 hover:bg-purple-600/20 transition duration-300"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;