import "./css/FeaturedCourses.css";
import featuredCourseJson from "../../data/featured.json";
import { useNavigate } from "react-router-dom";
import CourseCard from "../../components/CourseCard";
import { motion } from "framer-motion";

const FeaturedCourses = () => {
  const navigate = useNavigate();
  return (
    <motion.div className="featured-courses">
      <motion.h1
        initial={{ transform: "translateY(100%)" }}
        whileInView={{ transform: "translateY(0)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        Featured <span>Courses</span>
      </motion.h1>

      <div className="fs__featured">
        {featuredCourseJson.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
      <div className="fs__button">
        <button onClick={() => navigate("/courses")}>VIEW ALL COURSES</button>
      </div>
    </motion.div>
  );
};

export default FeaturedCourses;
