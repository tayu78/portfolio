import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
};

const SectionTitle = ({ title }: Props) => {
  return (
    <motion.h2
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 1,
      }}
      transition={{
        duration: 2,
      }}
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
