import React, { useEffect, useRef } from "react";
import ReactDom from "react-dom";
import "../Model/Modal.css";
const Modal = (props) => {
  const rootElement = document.getElementById("modal");
  let modalWrapper = null,
    closeIcon = null;
  const root = document.getElementById("root");
  const {
    title,
    content,
    agreeText = false,
    handleModel,
    currentElement,
  } = props;
  const refElement = useRef(null);

  const handleOutsideModalClick = (event) => {
    if (event.target == modalWrapper) handleModel();
    console.log("Inside modal", event.target, "+", modalWrapper);
  };

  useEffect(() => {
    console.log("Modal");
    if (root) {
      root.classList.add("modal-active");
      root.setAttribute("aria-hidden", true);
    }
    if (refElement.current) refElement.current.focus();
    console.log(refElement.current, " selvam");
    if (closeIcon == null) closeIcon = document.getElementById("close-icon");
    if (modalWrapper == null) modalWrapper = document.getElementById("myModal");
    return () => {
      root.removeAttribute("class");
      currentElement.focus();
    };
  }, [handleModel]);

  const Modal = (
    <div className="modal">
      <div
        aria-modal="true"
        aria-describedby="modal-title"
        className="modal-data"
        id="modal-wrapper"
        role="dialog"
      >
        <h2 id="modal-title">{title}</h2>
        {content}
        <div className="close-icon">
          <a id="close-icon" href="#" onClick={handleModel}>
            <i class="fas fa-times"></i>
          </a>
        </div>
        <div className="button-row">
          {agreeText && (
            <button
              className="close-button"
              onClick={() => handleModel()}
              ref={refElement}
            >
              {agreeText}
            </button>
          )}
          <button
            className="close-button"
            onClick={() => handleModel()}
            ref={refElement}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );

  console.log("finaly");
  return ReactDom.createPortal(
    <div
      className="common-modal"
      id="myModal"
      onClick={(event) => handleOutsideModalClick(event)}
      onKeyDown={(event) => (event.which === 27 ? handleModel() : null)}
    >
      {Modal}
    </div>,
    rootElement
  );
};

export default Modal;
