import React from "react";
import styles from "./styles.module.scss";
import ProjectCard from "./ProjectCard";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

type Props = {};
const datas = [
  {
    imgUrl: "/projects/reibunshare.png",
    projectName: "Reibun Share",
    description:
      "Full stuck application that enable user to find language native expression",
    stacks: [
      "React",
      "Redux",
      "Typescript",
      "Node(Express)",
      "MongoDB",
      "json web token",
    ],
    githubUrl: "https://github.com/tayu78/reibunshare-frontend",
    projectUrl: "https://reibunshare-frontend.vercel.app/",
  },
  {
    imgUrl: "/projects/whistleblowing.png",
    projectName: "Whistleblowing",
    description:
      "robust whistleblowing system that allows employees and stakeholders to report issues without fear of retaliation or negative consequences.",
    stacks: [
      "React",
      "Typescript",
      "Node(Express)",
      "MongoDB",
      "json web token",
    ],
    githubUrl:
      "https://github.com/WMAD-0522-Final-Project/whistleblower-app-backend/tree/dev",
    projectUrl: "https://dev-whistler-app.vercel.app/login",
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
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <p className={styles.moreInfo}>
        please click Github icon for more detail for each project!
      </p>
      <div className={styles.cardList}>
        <Swiper
          spaceBetween={50}
          slidesPerView={isSmallScreen ? undefined : 2}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={false}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
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
                  <SwiperSlide>
                    <ProjectCard
                      imgUrl={imgUrl}
                      projectName={projectName}
                      description={description}
                      stacks={stacks}
                      githubUrl={githubUrl}
                      projectUrl={projectUrl}
                    />
                  </SwiperSlide>
                </React.Fragment>
              );
            }
          )}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow"></div>
            <div className="swiper-button-next slider-arrow"></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
