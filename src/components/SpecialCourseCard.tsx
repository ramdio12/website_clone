import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/SpecialCourseCard.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

type SpecialCourseProps = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const SpecialCourseCard = ({
  id,
  name,
  description,
  image,
}: SpecialCourseProps) => {
  const text = description.substring(0, 120);
  const navigate = useNavigate();

  return (
    <div
      className="sc__card"
      key={id}
      onClick={() => navigate(`/special-courses/course/${id - 1}`)}>
      <img src={image} alt="Course Image" />
      <div className="card__text">
        <h2>{name}</h2>
        <p>{text}...</p>
        <a
          href="#"
          onClick={() => navigate(`/special-courses/course/${id - 1}`)}>
          <span>View Course</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default SpecialCourseCard;