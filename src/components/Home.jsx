import React from "react";
import Typing from "./Typing";

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
      </div>
    </div>
  );
};

export default Home;
