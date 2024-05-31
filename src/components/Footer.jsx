import React from "react";
import "./css/footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";

const FooterCustom = () => {
  return (
    <footer>
      <h4>Developed by Narasimha</h4>
      <h4>Copyright &copy; 2022 LN</h4>
      <div className="footerLinks">
        <a href="https://github.com/narasimha-1511" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/narasimha15/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailTo:s.narasimha.2005@gmail.com" target="_blank">
          <GrMail />
        </a>
        <a href="https://leetcode.com/narasimha-1511/" target="_blank">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
};

export default FooterCustom;
