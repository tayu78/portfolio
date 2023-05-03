import React from "react";
import { useMediaQuery } from "react-responsive";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import EmailIcon from "@mui/icons-material/Email";

import cssVariables from "../../styles/_variables.module.scss";

type Props = { icon: "github" | "twitter" | "linkedin" | "resume" | "email" };

const iconList = {
  github: GitHubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  resume: ContactPageIcon,
  email: EmailIcon,
};

const Icon = ({ icon }: Props) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const Component = iconList[icon];
  return (
    <Component
      style={{
        fill: cssVariables.pinkPrimary,
        fontSize: isSmallScreen ? "3rem" : "4rem",
      }}
    />
  );
};

export default Icon;
