import BrowserTitle from "../../components/BrowserTitle";
import Inquiry from "../../components/Inquiry";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <BrowserTitle name="Quality IT Trainings at " />
      <div className="about__container">
        <div className="about__text">
          <h1>
            About <span>Us</span>
          </h1>
          <p>
            Code At CodeLearn aims to produce career-ready professionals through
            industry-based training. The program is geared towards equipping
            OJTs, interns, and fresh graduates with CodeLearn's tools and
            technologies, systems, processes, and best practices. This makes our
            learners cut above the rest, and have an edge with the competition.
          </p>
          <p>
            As part of the corporate social responsibility of the company, Learn
            At CodeLearn is designed to give back to the community and make a
            positive impact. The program strengthens the linkage between
            industry and academe, bridging the gap between demands for talents,
            industry preparedness, and growing opportunities in IT, Software
            Solutions and more.
          </p>
        </div>
        <Inquiry />
      </div>
    </div>
  );
};

export default About;
