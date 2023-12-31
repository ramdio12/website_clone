import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/CourseCard.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type FeaturedProps = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const CourseCard = ({ id, name, description, image }: FeaturedProps) => {
  const text = description.substring(0, 120);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(50%)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="card"
      key={id}>
      <img
        src={image}
        alt="Course Image"
        onClick={() => navigate(`/training/${id - 1}`)}
      />
      <div className="card__text">
        <h2>{name}</h2>
        <p>{text}...</p>
        <a href="#" onClick={() => navigate(`/training/${id - 1}`)}>
          <span>View Course</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </motion.div>
  );
};

export default CourseCard;
