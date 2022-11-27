import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./footer.css";

export default component$(() => {
  useStyles$(styles);

  return (
    <footer>
      <div className="style-l"></div>
      <div className="style-r"></div>
      <div className="footer-content">
        <h1>Thank You!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam cum
          minus beatae illo optio quam voluptatum fugiat, sed quae ea! Illum
          maxime voluptatum, aperiam reprehenderit esse assumenda dolore omnis
          nisi.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          eum doloribus voluptates repudiandae veniam a dicta et, necessitatibus
          pariatur dolores? Maxime assumenda obcaecati reiciendis accusantium
          earum similique distinctio, quis tenetur?
        </p>
      </div>
    </footer>
  );
});
