import { motion } from "framer-motion";
import LearnPic from "../../assets/img/whylearn.jpg";
import "./css/Learn.css";

const Learn = () => {
  return (
    <div className="learn">
      <motion.div
        className="learn__image"
        initial={{ opacity: 0, transform: "translateX(-50%)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <img src={LearnPic} alt="" />
      </motion.div>
      <motion.div
        className="learn__text"
        initial={{ opacity: 0, transform: "translateX(50%)" }}
        whileInView={{ opacity: 1, transform: "translateX(0)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}>
        <h2>
          Why <span>Learn @ CodeLearn?</span>
        </h2>
        <p>
          As one of the fastest growing IT companies in the country, Codelearn
          also believes in sharing its knowledge and experience to advance the
          careers of others. Thus, Codelearn is also a trusted platform for
          learning and education for IT-related courses. Codelearn training is
          all about bringing out creative skills to achieve professional and
          personal goals.
        </p>
        <p>
          Codelearn wants to reimagine the possibilities for people to be
          educated on their own terms while supporting them at every stage,
          whether exploring new avenues, changing fields, or just entering the
          job market. This is achieved through courses engaged by top-quality
          and experienced industry experts.
        </p>
      </motion.div>
    </div>
  );
};

export default Learn;
