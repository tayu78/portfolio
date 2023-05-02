import React from "react";
import styles from "./styles.module.scss";
import ProjectCard from "./ProjectCard";

type Props = {};
const datas = [
  {
    imgUrl: "/projects/reibunshare.png",
    projectName: "Reibun Share",
    description:
      "Full stuck application that enable user to find native expression",
    stacks: [
      "React",
      "Typescript",
      "Node(Express)",
      "MongoDB",
      "json web token",
    ],
    githubUrl: "https://github.com/tayu78/reibunshare-frontend",
    projectUrl: "https://reibunshare-frontend.vercel.app/",
  },
  {
    imgUrl: "/projects/auth-management.png",
    projectName: "KENGEN KANRI",
    description:
      "Application for creating user’s permission and role flexiblly  ,aimed managing user easily",

    stacks: ["React", "Node(Express)", "PostgreSQL", "sequelize"],
    githubUrl: "https://github.com/tayu78/auth-management",
    projectUrl: "https://auth-management.vercel.app/landing",
  },
  {
    imgUrl: "/projects/attendance.png",
    projectName: "Attendance",
    description:
      "Appointment application for school which enable students to make appointment to teacher or reserve classNameroom easily",
    stacks: ["React", "Node(Express)", "Mongodb", "json web token"],
    githubUrl: "https://github.com/kubilaycakmak/attendance-backend",
    projectUrl: "https://test-attendance.netlify.app/",
  },
  {
    imgUrl: "/projects/ns-typing.png",
    projectName: "NS TYPING",
    description: "Simple typing game, my first Web application made in 2020",
    stacks: ["React", "Golang", "AWS Lambda", "GraphQL", "minikube"],
    githubUrl: "https://github.com/tayu78/typing-game",
    projectUrl: "https://yuya78-typing-app.web.app/",
  },
];

const Projects = (props: Props) => {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.cardList}>
        {datas.map(
          ({
            imgUrl,
            projectName,
            description,
            stacks,
            githubUrl,
            projectUrl,
          }) => {
            return (
              <React.Fragment key={projectName}>
                <ProjectCard
                  imgUrl={imgUrl}
                  projectName={projectName}
                  description={description}
                  stacks={stacks}
                  githubUrl={githubUrl}
                  projectUrl={projectUrl}
                />
              </React.Fragment>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Projects;
