import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";

import cssVariables from "../../styles/_variables.module.scss";

type Props = { icon: "github" | "twitter" | "linkedin" | "resume" };

const iconList = {
  github: GitHubIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  resume: ContactPageIcon,
};

const Icon = ({ icon }: Props) => {
  const Component = iconList[icon];
  return (
    <Component style={{ fill: cssVariables.pinkPrimary, fontSize: "4rem" }} />
  );
};

export default Icon;
