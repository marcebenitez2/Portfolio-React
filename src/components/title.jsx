import React from "react";
import { motion } from "framer-motion";

function Title() {
  return (
    <div className="container-title w-full py-20 flex flex-col text-[#D1D5D8] leading-none">
      <div className="flex items-center">
        <motion.div
          className="title_hero hover:text-orange-400"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5  }}
        >
          FULL
        </motion.div>
        <motion.div
          className="title_hero hover:text-orange-400"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5}}
        >
          STACK
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="title_hero  hover:text-orange-400">DEVELOPER</div>
        <div className="flex gap-6">
          <div className="subtitle_hero text-orange-400">MARCELO</div>
          <div className="subtitle_hero text-orange-400">BENITEZ</div>
        </div>
      </motion.div>
    </div>
  );
}

export default Title;
