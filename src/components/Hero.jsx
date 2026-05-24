import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen gradient-bg flex items-center px-6 md:px-20 pt-28 relative"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p className="text-purple-400 text-lg mb-4">
            🚀 Welcome to my digital universe
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm{" "}
            <span className="text-purple-500">
              Gnana Sai
            </span>
          </h1>

          <div className="mt-5 text-2xl md:text-3xl font-semibold text-gray-300">
            <TypeAnimation
              sequence={[
                "AI & ML Engineer Aspirant",
                2000,
                "Full Stack Developer",
                2000,
                "Problem Solver",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-gray-300 text-lg leading-relaxed max-w-xl">
            {
              portfolioData.intro
            }
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-10 flex-wrap">

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="#projects"
              className="px-8 py-4 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-700/40"
            >
              View My Work
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 border border-purple-500 rounded-full font-semibold hover:bg-purple-500 transition duration-300"
            >
              Resume
            </motion.a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-6 mt-10 text-3xl">

            <motion.a
              whileHover={{
                scale: 1.2,
                rotate: 5,
              }}
              href={
                portfolioData.github
              }
              target="_blank"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.2,
                rotate: -5,
              }}
              href={
                portfolioData.linkedin
              }
              target="_blank"
              className="text-blue-400"
            >
              <FaLinkedin />
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* GLOW */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-purple-700 opacity-40 animate-pulse"></div>

            {/* FLOATING RING */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-500 animate-spin-slow"></div>

            <img
              src="/profile.png"
              alt="profile"
              className="relative w-[320px] md:w-[420px] rounded-full border-4 border-purple-500 shadow-2xl shadow-purple-900 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;