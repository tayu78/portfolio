import React from "react";
import styles from "./styles.module.scss";
import Icon from "../Icon";

type Props = {};

type Data = { icon: "github" | "twitter" | "linkedin" | "email"; url: string };
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
    icon: "email",
    url: "mailto:sata.yu.7878@gmail.com",
  },
];

const Contacts = (props: Props) => {
  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      <p>Keep in touch with me!!</p>
      <ul className={styles.icons}>
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
  );
};

export default Contacts;
