import React from "react";
import styles from "./styles.module.scss";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      <p>&#169; Yuya Satake 2023. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
