import React from "react";
import Icon from "../Icon";
import styles from "./styles.module.scss";

type Props = {};

type Data = { icon: "github" | "twitter" | "linkedin" | "resume"; url: string };
const datas: Data[] = [
  {
    icon: "github",
    url: "https://github.com/tayu78",
  },
  {
    icon: "twitter",
    url: "https://twitter.com/yuyaweb78",
  },
  {
    icon: "linkedin",
    url: "https://www.linkedin.com/in/yuya-satake-bb6031246/",
  },
  {
    icon: "resume",
    url: "./images/developer-resume.pdf",
  },
];

const Hero = (props: Props) => {
  return (
    <div className={styles.hero}>
      <h1>YUYA SATAKE</h1>
      <p className={styles.jobTitle}>Full Stack Developer</p>
      <p className={styles.desc}>
        I’m a full stack developer who is passionate about learning new things
        and enjoys developing
      </p>
      <div>
        <ul className={styles.socialList}>
          {datas.map((data) => {
            return (
              <React.Fragment key={data.icon}>
                <a href={data.url} target="_blank">
                  <Icon icon={data.icon} />
                </a>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
