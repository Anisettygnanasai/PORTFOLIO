import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#0f172a] flex flex-col justify-center items-center z-[9999]">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
        className="w-24 h-24 border-4 border-purple-500 border-t-transparent rounded-full"
      />

      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
        }}
        className="mt-8 text-3xl font-bold"
      >
        Loading Magic ✨
      </motion.h1>
    </div>
  );
};

export default Loader;