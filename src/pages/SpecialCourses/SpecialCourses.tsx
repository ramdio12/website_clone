import Inquiry from "../../components/Inquiry";
import "./SpecialCourses.css";
import specialCourses from "../../data/special-courses.json";
import SpecialCourseCard from "../../components/SpecialCourseCard";
import BrowserTitle from "../../components/BrowserTitle";
import { motion } from "framer-motion";

const SpecialCourses = () => {
  return (
    <div className="special-course">
      <BrowserTitle name="Special Courses - " />
      <div className="sc__heading banner__title">
        <div className="title__container">
          <h1>
            Special <span>Courses</span>
          </h1>
        </div>
      </div>
      <div className="sc__container">
        <div className="container__heading">
          <h2>
            We'll be offering the following Australian government-accredited
            <span> special courses</span>:
          </h2>
        </div>
        <div className="container__item">
          {specialCourses.map((course) => (
            <SpecialCourseCard {...course} />
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="scBtn">
          KEEP ME INFORMED
        </motion.button>
      </div>

      <Inquiry />
    </div>
  );
};

export default SpecialCourses;
