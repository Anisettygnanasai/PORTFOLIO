import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-28 px-6 md:px-20 bg-[#111827]"
    >
      <div className="max-w-5xl mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-10"
        >
          My <span className="text-purple-500">Resume</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 text-lg leading-relaxed mb-12"
        >
          Here's a snapshot of my technical journey,
          projects, certifications, and achievements.
          Built with passion, persistence, and probably
          too much coffee ☕
        </motion.p>

        {/* Resume Viewer */}
        <div className="rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-[700px]"
          ></iframe>
        </div>

        {/* Download Button */}
        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full text-lg font-semibold transition duration-300 shadow-lg shadow-purple-700/40"
        >
          <FaDownload />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;