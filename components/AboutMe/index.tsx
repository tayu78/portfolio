import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import styles from "./styles.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <SectionTitle title="About Me" />
      <div className={styles.content}>
        <motion.div
          initial={{
            x: -300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
        >
          <Image
            src="/profileImg.jpg"
            alt="profileImg"
            width={350}
            height={450}
          />
        </motion.div>

        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
        >
          <p>
            I’m a Japanese developer who graduated from Electrical Engineering
            and Computer Science department in University.
            <br />I have 1 year and 3 months of professional experience in
            software development.
          </p>
          <p>
            My coding journey started at my university days with learning C.
            <br />
            On my graduation thesis about automatic control of anesthesia, I
            used Python to utilize library good for managing and visualizing
            actual patient&apos;s data.
          </p>
          <p>
            After graduated university, I worked as Full Stack Developer
            specializing React.js and Node.js in Japan. Besides developing
            application using React.js and Node.js, I was in charged of DevOps
            by myself without previous knowledge. These experience gave me
            confidence about learning new technology even if I&apos;m not
            familiar with that.
          </p>
          <p>
            I decided to move to Vancouver to achieve my desire working diverse
            culture and put myself on environment in North America where tech
            industry is big.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
