import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import styles from "./styles.module.scss";
import cssVariables from "../../styles/_variables.module.scss";

type Props = {};

const datas = [
  {
    title: "Full Stack Web Developer ",
    place: "Doctors Mobile",
    location: "Japan",
    description: "ndobgggogfndsbo",
    date: "July 2023 - Present",
    icon: "work",
  },
  {
    title: "Web Development Student",
    place: "Cornerstone Community College of Canada",
    location: "Vancouver, Canada",
    description: "ndobgggogfndsbo",
    date: "May 2022 - April 2023",
    icon: "school",
  },
  {
    title: "Full Stack Web Developer ",
    place: "Kinki Research Center",
    location: "Kyoto, Japan",
    description: "ndobgggogfndsbo",
    date: "February 2021 - April 2022",
    icon: "work",
  },
  {
    title: "Computer Science and Electrical Engeneering Student",
    place: "University of Hyogo",
    location: "Hyogo, Japan",
    description: "ndobgggogfndsbo",
    date: "April 2016 - March 2020",
    icon: "school",
  },
];

const WorkExperiences = (props: Props) => {
  return (
    <div className={styles.workExperiences}>
      <h2>Work Experiences &amp; Educations</h2>
      <VerticalTimeline>
        {datas.map((data, index) => {
          const icon = data.icon === "work" ? <WorkIcon /> : <SchoolIcon />;
          return (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: cssVariables.pinkSecondary,
                color: "#fff",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  " + cssVariables.pinkSecondary,
              }}
              iconStyle={{
                background: cssVariables.pinkSecondary,
                color: "#fff",
              }}
              date={data.date}
              icon={icon}
            >
              <h3>{data.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {data.place} ({data.location})
              </h4>
              {/* <p>{data.description}</p> */}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperiences;
