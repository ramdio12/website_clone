import "./Contact.css";
import MapPic from "../../assets/img/maplocation.png";
import BrowserTitle from "../../components/BrowserTitle";

const Contact = () => {
  return (
    <div className="contact">
      <BrowserTitle name="Take IT Related Trainings at " />
      <div className="contact__heading banner__title">
        <div className="title__container">
          <h1>
            Contact <span>Us</span>
          </h1>
        </div>
      </div>
      <div className="contact__details">
        <div className="detail__container">
          <div className="location">
            <img src={MapPic} alt="" />
          </div>
          <div className="contact__form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="School/Organization" />
              </div>
              <div>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone No." />
              </div>
              <textarea name="" id="" placeholder="Message"></textarea> <br />
              <input
                type="submit"
                value="SUBMIT"
                style={{ cursor: "pointer" }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
