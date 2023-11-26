import Inquiry from "../../components/Inquiry";
import "./Courses.css";
import courses from "../../data/courses.json";
import CourseCard from "../../components/CourseCard";
import BrowserTitle from "../../components/BrowserTitle";
import ImageSlideshow from "../../components/ImageSlideshow";

const Courses = () => {
  return (
    <div className="courses">
      <BrowserTitle name="Register with Short IT Courses" />
      <div className="courses__heading banner__title">
        <div className="title__container">
          <h1>
            All <span>Courses</span>
          </h1>
        </div>
      </div>
      <div className="courses__container">
        {courses.map((course) => (
          <CourseCard {...course} />
        ))}
      </div>

      <Inquiry />
      <ImageSlideshow />
    </div>
  );
};

export default Courses;
