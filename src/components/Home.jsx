import React from "react";
import Typing from "./Typing";
import "./css/home.css";
import Lottie from "lottie-react";
import SpaceBoy1 from "../Lottie/SpaceBoy.json";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi there!</h1>
          <h1>
            I'M <b>NARASIMHA</b>
          </h1>
          <Typing texts={["Software Developer", "MERN Stack Developer"]} />
        </div>

        <Lottie
          className="illustration"
          background="transparent"
          loop={true}
          animationData={SpaceBoy1}
        ></Lottie>
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I love the process of changing a raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am fluent in <b>Javascript</b> and know a bit of{" "}
            <b>Python</b> and am working on a few projects in the <b>MERN</b>{" "}
            stack.
            <br />I plan to learn <b>Next.js</b>, <b>Three.js</b> in the near
            future. <br />
            <br />
            Also, I love <b>coffee</b>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
