import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/TrainingStats.css";
import {
  faBookOpenReader,
  faChalkboardUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const TrainingStats = () => {
  return (
    <div className="training-stats">
      <div className="ts__container">
        <motion.h2
          initial={{ opacity: 0, transform: "translateY(50%)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}>
          We have conducted trainings since <span>2020</span>
        </motion.h2>

        <motion.div
          className="fs__stats-content"
          initial={{ opacity: 0, transform: "translateY(50%)" }}
          whileInView={{ opacity: 1, transform: "translateY(0)" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}>
          <div className="stat__item">
            <FontAwesomeIcon icon={faUsers} color="skyblue" className="icon" />
            <h3>
              <span>100+</span> Attendees
            </h3>
          </div>
          <div className="stat__item">
            <FontAwesomeIcon
              icon={faBookOpenReader}
              color="skyblue"
              className="icon"
            />
            <h3>
              <span>10</span> courses
            </h3>
          </div>
          <div className="stat__item">
            <FontAwesomeIcon
              icon={faChalkboardUser}
              color="skyblue"
              className="icon"
            />
            <h3>
              <span>41</span> trainings
            </h3>
          </div>
        </motion.div>
        <h3 className="email">
          International Students can reach us out at{" "}
          <span>studyinaus@code.learnings.com</span>
        </h3>
      </div>
    </div>
  );
};

export default TrainingStats;
