import React from "react";
import BlogCard from "./BlogCard";
import styles from "./styles.module.scss";

type Props = {};

const datas = [
  {
    blogUrl: "https://dev.to/tayu78/how-to-optimize-react-rendering-33d5",
    imgUrl: "/blogs/how-to-optimize-react-rendering.jpg",
    title: "How to optimize React rendering",
    description:
      "React is one of the most used framework in terms of Javascript.Some developer may use it without knowing how to optimize rendering...",
  },
];

const Blogs = (props: Props) => {
  return (
    <div className={styles.blogs}>
      <h2>Blogs</h2>
      <div className={styles.cardList}>
        {datas.map(({ blogUrl, imgUrl, title, description }, index) => {
          return (
            <React.Fragment key={index}>
              <BlogCard
                blogUrl={blogUrl}
                imgUrl={imgUrl}
                title={title}
                description={description}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
