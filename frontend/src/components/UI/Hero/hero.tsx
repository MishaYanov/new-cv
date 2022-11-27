import styles from "./hero.css";
import { component$, useStore, useStyles$ } from "@builder.io/qwik";

export default component$(() => {
  useStyles$(styles);
  const store = useStore({
    showContent$: false,
  });
  return (
    <div
      className="hero-wrapper"
      //@ts-ignore
      onMouseEnter$={() => {
        store.showContent$ = true;
      }}
      // onMouseLeave$={() => {
      //   store.showContent$ = false;
      // }}
    >
      <div className="hero-creative" id={store.showContent$ ? "image-transition" : "image-transition"}>
        <img src="https://via.placeholder.com/300x400" alt="" />
      </div>
      {/* {store.showContent$ && */}
      <div className="placeholder">
      <div
        className="hero-content"
        id={store.showContent$ ? "show-animation" : "hide-animation"}>
        <h1>Hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            eos ut quod, optio architecto fugiat perferendis dolorum incidunt
            minus, cumque distinctio ducimus quae ea sit reiciendis fugit?
            Ipsam, eius obcaecati.
          </p>
        </div>
      </div>
      {/* } */}
    </div>
  );
});
