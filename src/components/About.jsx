import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

import {
  FaGraduationCap,
  FaLaptopCode,
  FaRocket,
  FaBrain,
} from "react-icons/fa";

const About = () => {
  const cards = [
    {
      icon: <FaGraduationCap />,
      title: "Education",
      desc:
        portfolioData.education,
    },

    {
      icon: <FaLaptopCode />,
      title: "Developer",
      desc:
        "Building modern full-stack applications with clean UI & scalable backend systems.",
    },

    {
      icon: <FaBrain />,
      title: "AI Passion",
      desc:
        "Exploring machine learning, recommendation systems, and intelligent applications.",
    },

    {
      icon: <FaRocket />,
      title: "Goal",
      desc:
        portfolioData.goal,
    },
  ];

  return (
    <section
      id="about"
      className="py-28 px-6 md:px-20 bg-[#111827]"
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
          transition={{
            duration: 0.8,
          }}
          className="text-5xl font-bold text-center mb-6"
        >
          About{" "}
          <span className="text-purple-500">
            Me
          </span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-center text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg"
        >
          {
            portfolioData.about
          }
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {cards.map(
            (card, index) => (
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
                  duration: 0.7,
                  delay:
                    index * 0.2,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="bg-[#1f2937] rounded-3xl p-8 border border-gray-700 hover:border-purple-500 transition duration-500 shadow-lg"
              >
                <div className="text-4xl text-purple-500 mb-5">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {card.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default About;