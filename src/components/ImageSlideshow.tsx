import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./css/ImageSlideshow.css";

import slidePicData from "../data/slideshow-pic-data.json";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ImageSlideshow = () => {
  const navigate = useNavigate();

  return (
    <div className="image-slideshow">
      <motion.h2
        initial={{ opacity: 0, transform: "translateY(50%)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        Upcoming <span>Trainings</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, transform: "translateY(50%)" }}
        whileInView={{ opacity: 1, transform: "translateY(0)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        Take IT-related courses from some of the best and most experienced in
        the country, if not in Mindanao. The courses include graded bootcamps,
        lectures, open-discussions, and forums.
      </motion.p>

      <div className="is__container">
        <Swiper
          spaceBetween={40}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="swiper">
          {slidePicData.map(({ id, image }) => (
            <SwiperSlide className="swiper-slide" key={id}>
              <img src={image} alt={`pic no. ${id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button onClick={() => navigate("/contact")}>KEEP ME INFORMED</button>
    </div>
  );
};

export default ImageSlideshow;
