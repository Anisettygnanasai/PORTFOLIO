import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      skills:
        portfolioData.skills
          .frontend,
    },

    {
      title: "Backend",
      skills:
        portfolioData.skills
          .backend,
    },

    {
      title: "Tools",
      skills:
        portfolioData.skills
          .tools,
    },

    {
      title: "Soft Skills",
      skills:
        portfolioData.skills
          .soft,
    },
  ];

  return (
    <section
      id="skills"
      className="py-28 px-6 md:px-20 bg-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="text-5xl font-bold text-center mb-20"
        >
          My{" "}
          <span className="text-purple-500">
            Skills
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {skillGroups.map(
            (group, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                whileHover={{
                  y: -5,
                }}
                className="bg-[#1f2937] p-10 rounded-3xl border border-gray-700 hover:border-purple-500 transition duration-500"
              >
                <h3 className="text-3xl font-bold mb-8 text-purple-400">
                  {group.title}
                </h3>

                <div className="flex flex-wrap gap-4">

                  {group.skills.map(
                    (
                      skill,
                      i
                    ) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          scale: 1.1,
                        }}
                        className="px-5 py-3 rounded-full bg-purple-600/20 border border-purple-500 text-white font-medium cursor-pointer"
                      >
                        {skill}
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;