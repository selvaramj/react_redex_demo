import React, { useState, useRef, useEffect } from "react";
import "./Footer.css";
import Modal from "../Model";
const FooterSection = () => {
  const [linkText, setLinkText] = useState("");
  const [isModelOpened, setModelOpen] = useState(false);
  const [currentElement, setCurrentElement] = useState("");

  const handleModel = () => {
    setModelOpen(!isModelOpened);
  };

  const ModalProps = {
    title: "Sorry for inconvinence...",
    content: (
      <>
        <p>Currently `{linkText} page under maintainence`</p>
        <i>Please, Try Again Later..</i>
      </>
    ),
    agreeText: "",
    cancel: true,
    handleModel: handleModel,
    currentElement: currentElement,
  };

  const handleClick = (event) => {
    if (event.target.text) {
      setLinkText(event.target.text);
      setCurrentElement(event.target);
      handleModel();
    }
  };

  return (
    <footer
      className="footer"
      onClick={(ele) => console.log("clicked", ele.target)}
    >
      <nav className="footer-main-navigation">
        <ul className="footer-nav-links">
          <li>
            <a href="#" onClick={(e) => handleClick(e)}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleClick(e)}>
              Glossary
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleClick(e)}>
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleClick(e)}>
              Help & Support
            </a>
          </li>
        </ul>
        {isModelOpened && <Modal {...ModalProps} />}
        <ul className="social-media-links">
          <li>
            <a href="https://www.instagram.com/accounts/login/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/login" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div></div>
      <div className="rights-reserved">
        <p>20011-2022 @All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
