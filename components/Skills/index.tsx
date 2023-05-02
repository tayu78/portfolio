import React from "react";
import styles from "./styles.module.scss";
import SkillCard from "./SkillCard";

type Props = {};

const languages = ["Typescript", "JavaScript", "Python", "Java", "Golang", "C"];
const frameworks = ["React", "Redux", "Node(Express)", "Sass"];
const database = ["MongoDB", "PostgreSQL"];
const testing = ["React Tesging Library", "Jest", "cypress"];
const others = [
  "Kubernetes",
  "Helm",
  "Docker",
  "GCP",
  "AWS",
  "Gitlab Auto DevOps",
  "Scrum",
  "Linux",
  "Figma",
];

const Skills = (props: Props) => {
  return (
    <div className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.cardList}>
        <SkillCard title={"Language"} list={languages} />
        <SkillCard title={"Frameworks/Library"} list={frameworks} />
        <SkillCard title={"Database"} list={database} />
        <SkillCard title={"Testing"} list={testing} />
        <SkillCard title={"Others"} list={others} />
      </div>
    </div>
  );
};

export default Skills;
