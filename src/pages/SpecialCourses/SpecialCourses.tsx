import Inquiry from "../../components/Inquiry";
import "./SpecialCourses.css";
import specialCourses from "../../data/special-courses.json";
import SpecialCourseCard from "../../components/SpecialCourseCard";
import BrowserTitle from "../../components/BrowserTitle";

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
            special courses:
          </h2>
        </div>
        <div className="container__item">
          {specialCourses.map((course) => (
            <SpecialCourseCard {...course} />
          ))}
        </div>
      </div>

      <Inquiry />
    </div>
  );
};

export default SpecialCourses;
