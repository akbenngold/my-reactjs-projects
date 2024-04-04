import React from "react";
import Button from "./Button";
import { EnvelopeIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
function Main({ banner, target, background }) {
  return (
    <section className="main">
      <span className="main__caption">{banner} </span>
      <NavLink to={target}>
        <Button label="Shop Now" />
      </NavLink>

      <div className="main__side">
        <div className="main__side-links">
          <EnvelopeIcon />
          <ChatBubbleLeftIcon />
        </div>
        <div className="main__side-line"></div>
      </div>
    </section>
  );
}

export default Main;
