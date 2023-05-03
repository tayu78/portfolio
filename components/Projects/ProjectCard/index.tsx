import React from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import styles from "./styles.module.scss";

type Props = {
  imgUrl: string;
  projectName: string;
  description: string;
  stacks: string[];
  githubUrl: string;
  projectUrl: string;
};

const ProjectCard = ({
  imgUrl,
  projectName,
  description,
  stacks,
  githubUrl,
  projectUrl,
}: Props) => {
  return (
    <div className={styles.projectCard}>
      <Image src={imgUrl} alt={projectName} width={400} height={200} />
      <div>
        <h3>{projectName}</h3>
        <p>{description}</p>
        <ul>
          {stacks.map((stack, index) => {
            return <li key={index}>{stack}</li>;
          })}
        </ul>
      </div>

      <div>
        <div className={styles.icons}>
          <a href={githubUrl} target="_blank">
            <GitHubIcon />
          </a>
          <a href={projectUrl} target="_blank">
            <LaunchIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
