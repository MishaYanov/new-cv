import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./card.css";

export default component$(() => {
  useStyles$(styles);
  return (
    <div className="card-wrapper">
      <div className="card-container">
        <div className="card-header">
          <h3>This card header</h3>
        </div>
        <div className="card-body">
          <div className="card-image">
            <img src="https://via.placeholder.com/300x200" alt="" />
          </div>
          <div className="card-desc">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Unde quidem deleniti ratione nulla quas porro, nobis, beatae, magnam
            sequi enim rem cum nam odit iste pariatur facere inventore
            repellendus voluptatem?</p>
          </div>
          <div className="card-actions">
            <a href=""><span>Link</span></a>
          </div>
        </div>
      </div>
    </div>
  );
});
