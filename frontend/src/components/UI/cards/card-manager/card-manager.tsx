import { component$, useStyles$ } from "@builder.io/qwik";
import Card from "../card/card";
import styles from "./card-manager.css";

export default component$(() => {
    useStyles$(styles)
  return (
    <div className="card-list_wrapper">
      <h1>My Projects</h1>
      <div className="card-list">
          <Card/>
          <Card/>
          <Card/>
      </div>
      <div className="action-bar">
        <button>get new projects</button>
      </div>
    </div>
  );
});
