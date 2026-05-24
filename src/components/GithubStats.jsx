import { motion } from "framer-motion";

import {
  FaGithub,
  FaCode,
  FaFire,
  FaStar,
} from "react-icons/fa";

const GithubStats = () => {
  return (
    <section
      id="github"
      className="py-28 px-6 md:px-20 bg-[#111827]"
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6">
            GitHub{" "}
            <span className="text-purple-500">
              Activity
            </span>
          </h2>

          <p className="text-gray-400 text-lg">
            Building consistently.
            Learning endlessly.
          </p>
        </motion.div>

        {/* STATS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="bg-[#1f2937] p-8 rounded-3xl border border-gray-700 hover:border-purple-500 transition duration-500 text-center"
          >
            <FaGithub className="text-5xl mx-auto mb-5 text-purple-500" />

            <h3 className="text-4xl font-bold mb-2">
              10+
            </h3>

            <p className="text-gray-400">
              Public Repositories
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="bg-[#1f2937] p-8 rounded-3xl border border-gray-700 hover:border-blue-500 transition duration-500 text-center"
          >
            <FaCode className="text-5xl mx-auto mb-5 text-blue-500" />

            <h3 className="text-4xl font-bold mb-2">
              React
            </h3>

            <p className="text-gray-400">
              Favorite Technology
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.3,
            }}
            className="bg-[#1f2937] p-8 rounded-3xl border border-gray-700 hover:border-orange-500 transition duration-500 text-center"
          >
            <FaFire className="text-5xl mx-auto mb-5 text-orange-500" />

            <h3 className="text-4xl font-bold mb-2">
              Daily
            </h3>

            <p className="text-gray-400">
              Learning Habit
            </p>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
            className="bg-[#1f2937] p-8 rounded-3xl border border-gray-700 hover:border-pink-500 transition duration-500 text-center"
          >
            <FaStar className="text-5xl mx-auto mb-5 text-pink-500" />

            <h3 className="text-4xl font-bold mb-2">
              AI/ML
            </h3>

            <p className="text-gray-400">
              Career Focus
            </p>
          </motion.div>
        </div>

        {/* GITHUB BUTTON */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
          }}
          className="flex justify-center mt-16"
        >
          <a
            href="https://github.com/Anisettygnanasai"
            target="_blank"
            rel="noreferrer"
            className="px-10 py-5 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300 font-semibold text-lg flex items-center gap-3 shadow-lg shadow-purple-500/20"
          >
            <FaGithub />
            Visit My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;