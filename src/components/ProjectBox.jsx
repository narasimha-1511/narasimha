import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    AutoOtpDesc:
      "A web app that automatically detects the OTP from User's Mobile Phone and fills it in the input field in the Laptop. This project was made to understand the concept of Real time databse and how to use it to automate tasks. This project was made using a Chrome Extension and Android application.",
    AutoOtpGithub:
      "https://github.com/narasimha-1511/chrome-extension-for-auto-otp",
    TindogDesc:
      "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub: "https://github.com/DevanshSahni/tindog",
    TindogWebsite: "https://devanshsahni.github.io/tindog/",

    RogFreeDesc:
      "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    RogFreeGithub: "https://github.com/DevanshSahni/Rog-Free",
    RogFreeWebsite: "https://devanshsahni.github.io/Rog-Free/",

    NewsletterDesc:
      "A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    NewsletterGithub: "",
    NewsletterWebsite: "https://newsletter-signup-teal.vercel.app/",

    WigglesDesc:
      "An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    WigglesGithub: "https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite: "https://wiggles.vercel.app/",

    BookyAPIDesc:
      "A RESTful API for a book store where you can add, delete, update and get books. This project was made to understand the concept of RESTful API and how to use it to perform CRUD operations. This make with Go, Gin and Gorm Frameworks.",
    BookyAPIGithub: "https://github.com/narasimha-1511/zolo-backend",

    ChatAppDesc:
      "This is a Chat Application made using Node.js, Express.js, Socket.io , MongoDB, TypeScript. This project was made to understand the concept of Web Sockets and how to use them to make a real time chat application.",
    ChatAppDemo: "https://chat-app-prod-zvet.onrender.com/",
    ChatAppGithub: "https://github.com/narasimha-1511/chat-app-complete",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      {/* <img className="projectPhoto" src={projectPhoto} alt="Project display" /> */}
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
