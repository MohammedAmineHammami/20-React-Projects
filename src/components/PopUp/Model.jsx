import React from "react";
import "./style.css";
import { MdOutlineCancelPresentation } from "react-icons/md";

function Model({ header, body, footer, onClose }) {
  return (
    <div className="model">
      <div className="modelHeader">
        {header ? header : <h1>header</h1>}

        <MdOutlineCancelPresentation
          onClick={onClose}
          className="x"
          size={25}
        />
      </div>
      <div className="body">{body ? body : <p>body</p>}</div>
      <div className="footer">{footer ? footer : <h2>footer</h2>}</div>
    </div>
  );
}

export default Model;
