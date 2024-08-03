import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="border-b border-neutral-900 pb-4"
    >
      <motion.h2 className="my-20 text-center text-4xl">Experience</motion.h2>

      <div>
        {EXPERIENCES.map((Experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{Experience.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {Experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {Experience.company}
                </span>
              </h6>

              <p className="mb-4 text-neutral-400">{Experience.description}</p>
              {Experience.technologies.map}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
