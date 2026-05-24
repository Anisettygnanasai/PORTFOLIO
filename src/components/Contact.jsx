import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 px-6 md:px-20 bg-[#0f172a]"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* TITLE */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          className="text-5xl font-bold mb-8"
        >
          Let's Build Something{" "}
          <span className="text-purple-500">
            Amazing
          </span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          className="text-gray-400 text-lg leading-relaxed mb-12"
        >
          Whether it's AI, web development,
          or exciting opportunities —
          I'm always open to learning,
          collaborating, and building
          impactful products.
        </motion.p>

        {/* CONTACT INFO */}
        <div className="flex flex-col gap-5 items-center mb-12">

          {/* PRIMARY EMAIL */}
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            href={`mailto:${portfolioData.email}`}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300 shadow-lg shadow-purple-700/30"
          >
            <FaEnvelope />

            {
              portfolioData.email
            }
          </motion.a>

          {/* SECONDARY EMAIL */}
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            href={`mailto:${portfolioData.secondaryEmail}`}
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-purple-500 hover:bg-purple-600/20 transition duration-300"
          >
            <FaEnvelope />

            {
              portfolioData.secondaryEmail
            }
          </motion.a>

          {/* PHONE */}
          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            href={`tel:${portfolioData.phone}`}
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-green-500 hover:bg-green-500/20 transition duration-300"
          >
            <FaPhoneAlt />

            {
              portfolioData.phone
            }
          </motion.a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex flex-wrap justify-center gap-6">

          {/* GITHUB */}
          <motion.a
            whileHover={{
              scale: 1.08,
            }}
            href={
              portfolioData.github
            }
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-gray-600 hover:border-purple-500 transition duration-300"
          >
            <FaGithub />
            GitHub
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            whileHover={{
              scale: 1.08,
            }}
            href={
              portfolioData.linkedin
            }
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-blue-500 hover:bg-blue-500/20 transition duration-300"
          >
            <FaLinkedin />
            LinkedIn
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;