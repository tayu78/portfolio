import React from "react";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";

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
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className={styles.blogs}>
      <h2>Blogs</h2>
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
          {datas.map(({ blogUrl, imgUrl, title, description }, index) => {
            return (
              <React.Fragment key={index}>
                <SwiperSlide>
                  <BlogCard
                    blogUrl={blogUrl}
                    imgUrl={imgUrl}
                    title={title}
                    description={description}
                  />
                </SwiperSlide>
              </React.Fragment>
            );
          })}
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

export default Blogs;
