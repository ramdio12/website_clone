import "./css/Inquiry.css";
import { useNavigate } from "react-router-dom";

const Inquiry = () => {
  const navigate = useNavigate();
  return (
    <div className="inquiry">
      <div className="inquiry__container">
        <div className="inquiry__learn">
          <h2>
            Ready To <span>Learn?</span>
          </h2>
          <button onClick={() => navigate("/courses")}>VIEW COURSES</button>
        </div>
        <hr />
        <div className="inquiry__question">
          <h2>
            Got any <span>Questions?</span>
          </h2>
          <button onClick={() => navigate("/contact")}>CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
