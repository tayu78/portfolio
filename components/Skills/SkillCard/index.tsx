import React from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
  list: string[];
};

const SkillCard = ({ title, list }: Props) => {
  return (
    <div className={styles.skillCard}>
      <h3>{title}</h3>
      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default SkillCard;
