import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  blogUrl: string;
  imgUrl: string;
  title: string;
  description: string;
};

const BlogCard = ({ blogUrl, imgUrl, title, description }: Props) => {
  return (
    <article className={styles.blogCard}>
      <a href={blogUrl} target="_blank">
        <div className={styles.imageContainer}>
          <Image src={imgUrl} alt={title} fill />
        </div>
        <div className="article-content">
          <h3>{title}</h3>
          <p className="desc">{description}</p>
        </div>
      </a>
    </article>
  );
};

export default BlogCard;
