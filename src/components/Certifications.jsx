import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Certifications = () => {
  return (
    <section
      id="certifications"
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
          transition={{
            duration: 0.8,
          }}
          className="text-5xl font-bold text-center mb-20"
        >
          Certifications &{" "}
          <span className="text-purple-500">
            Achievements
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {portfolioData.certifications.map(
            (cert, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay:
                    index * 0.2,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="bg-[#1f2937] rounded-3xl overflow-hidden border border-gray-700 hover:border-purple-500 transition duration-500 shadow-xl"
              >
                
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-[250px] object-cover hover:scale-110 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <h3 className="text-2xl font-bold mb-3">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 mb-2">
                    Issued By:{" "}
                    {cert.issuer}
                  </p>

                  <p className="text-gray-500 mb-6">
                    {cert.date}
                  </p>

                  <a
                    href={cert.image}
                    target="_blank"
                    className="inline-block px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-300"
                  >
                    View Certificate
                  </a>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Certifications;