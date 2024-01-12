import "./css/Home.css";
import { useNavigate } from "react-router-dom";
import person from "../../assets/img/person.png";
import CodeFlexImgs from "../../components/CodeFlexImgs";
import ImageSlideshow from "../../components/ImageSlideshow";
import picData from "../../data/data.json";
import FeaturedCourses from "./FeaturedCourses";
import TrainingStats from "./TrainingStats";
import Learn from "./Learn";
import Community from "./Community";
import Inquiry from "../../components/Inquiry";
import { motion } from "framer-motion";
import BrowserTitle from "../../components/BrowserTitle";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <BrowserTitle name="The Leading IT Trainings" />
      <motion.div className="home__intro">
        <motion.div
          className="home__intro-text"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          <h1>
            Learn at Codelearn Offers <span>FREE Courses and Trainings</span>
          </h1>
          <p>
            Learn at Codelearn is the educational arm of CodeLearn, aiming to
            help learners gain the skills needed to achieve their full
            potential. The courses we offer are free to help you excel or
            prepare for the new career of your dreams.
          </p>
          <button onClick={() => navigate("/about")}>LEARN MORE</button>
        </motion.div>
        <div className="home__intro-image">
          <motion.img
            src={person}
            alt="person"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
      {/*  */}
      <motion.div
        className="home__codeimages"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        {picData.map((pic) => (
          <CodeFlexImgs key={pic.id} {...pic} />
        ))}
      </motion.div>
      <FeaturedCourses />
      <TrainingStats />
      <ImageSlideshow />
      <Learn />
      <Community />
      <Inquiry />
    </div>
  );
};
