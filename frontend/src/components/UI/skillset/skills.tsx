import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./skills.css";
import Slide from "./slide/slide";
import SlideLeft from "./slider/left/slide-left";
import SlideRight from "./slider/right/slide-right";

export default component$(() => {
  useStyles$(styles);

  //load images
  //cut images in half

  return (
    <div className="skills-wrapper">
      <div className="arrow arrow-left">
        <h3>L</h3>
      </div>
      <div className="arrow arrow-right">
        <h3>R</h3>
      </div>
      <div className="skills-cont">
        <div className="slides-handler">
          <SlideLeft />
          <SlideRight />
        </div>
      </div>
      <div className="action-bar">
        <button>I dont have Time!</button>
        <span> (show me the run down)</span>
      </div>
      <div class="action-buttons">
        <button class="down-button">
          <i class="fas fa-arrow-down"></i>
        </button>
        <button class="up-button">
          <i class="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
});
