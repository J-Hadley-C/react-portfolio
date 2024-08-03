import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { DiJavascript } from "react-icons/di";
import { ImHtmlFive } from "react-icons/im";
import { BsWordpress } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiSymfony } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repaet: Infinity,
      repaetType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dorder-neutrel-800 p-4"
        >
          <ImHtmlFive className="text-8xl  text-orange-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dorder-neutrel-800 p-4"
        >
          <DiCss3 className="text-8xl text-blue-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dorder-neutrel-800 p-4"
        >
          <DiJavascript className="text-8xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dorder-neutrel-800 p-4"
        >
          <BsWordpress className="text-8xl text-cyan-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dorder-neutrel-800 p-4"
        >
          <RiReactjsLine className="text-8xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dorder-neutrel-800 p-4"
        >
          <TbBrandNextjs className="text-8xl bg-black text--400" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dorder-neutrel-800 p-4"
        >
          <DiPhp className="text-8xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 dorder-neutrel-800 p-4"
        >
          <DiSymfony className="text-8xl text-sky-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
