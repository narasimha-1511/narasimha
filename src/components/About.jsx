import React from "react";
import Lottie from "lottie-react";
import Coder from "../Lottie/coder.json";
import Skills from "./Skills";
import "./css/about.css";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Narasimha</b> and I am from Hyderabad, India. I'm
            a <b>MERN stack web developer</b> and a first year college student
            pursuing <b>Bsc in Computer Science</b>. <br />
            <br />I worked as a <b>Project Intern</b> at Bhashini, Bengaluru,
            Karnataka, India (Remote). As part of the team, I contributed to
            developing various products using Bhashini's SDK to translate
            websites into users' preferred languages. I have a passion for
            solving real-time problems, learning new technologies, and building
            innovative projects. You can check out some of my work in the
            projects section and see a{" "}
            <a
              href="https://www.linkedin.com/posts/scaler-school-of-technology_our-students-worked-with-the-government-of-activity-7182001652999110656-X9RQ/"
              target="_blank"
            >
              {" "}
              LinkedIn post
            </a>{" "}
            about the project.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding, I am also an athlete and a footballer.{" "}
          </p>
        </div>

        <div>
          <Lottie className="illustration" animationData={Coder} loop={true} />
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
