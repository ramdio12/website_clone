import { useParams } from "react-router-dom";
import SpecialCourseItem from "../../data/special-courses.json";
import "./SpecialCourse.css";

const SpecialCourse = () => {
  const { id }: any = useParams();
  const course = SpecialCourseItem[id];
  const { name, image, description } = course;

  return (
    <div className="course">
      <div className="course__title">
        <div className="title__container">
          <h1>{name}</h1>
        </div>
      </div>
      <div className="course__details">
        <img src={image} alt={`image of ${name}`} />
        <div className="details">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialCourse;
