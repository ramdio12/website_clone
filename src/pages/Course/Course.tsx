import { useParams } from "react-router-dom";
import CourseItem from "../../data/courses.json";
import "./Course.css";

const Course = () => {
  const { id }: any = useParams();
  const course = CourseItem[id];
  const {
    name: myName,
    image: myImage,
    description: myDescription,
  } = course || {};

  return (
    <div className="course">
      <div className="course__title">
        <div className="title__container">
          <h1>{myName}</h1>
        </div>
      </div>
      <div className="course__details">
        <img src={myImage} alt={`image of ${myName}`} />
        <div className="details">
          <p>{myDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
