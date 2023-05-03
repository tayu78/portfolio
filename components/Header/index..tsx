import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

type Props = {};

const Header = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
        <ul>
          <li onClick={() => setIsActive((prev) => !prev)}>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link onClick={() => setIsActive((prev) => !prev)} href="#aboutMe">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsActive(false)} href="#skills">
              Skills
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsActive(false)} href="#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsActive(false)} href="#blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link onClick={() => setIsActive(false)} href="#contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
      <div
        className={`${styles.burgerMenu} ${isActive ? styles.active : ""}`}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <span className={styles.burgerBar}></span>
        <span className={styles.burgerBar}></span>
        <span className={styles.burgerBar}></span>
      </div>
    </>
  );
};

export default Header;
