import { component$, useClientEffect$, useSignal, useStore, useStyles$, useWatch$ } from "@builder.io/qwik";
import styles from "./connect-bar.css";

export default component$(() => {
  useStyles$(styles);
  const store = useStore({
    linkedIn: "LinkedIn",
    facebook: "facebook",
    phone: "phone",
    github: "github",
    email: "Email",
    curWindow: ""
  });
  useWatch$(({ track }) => {
    // track changes in store.count
    track(() => store);
    console.log("store changed");
  });
  const ref = useSignal<Element>();
  useClientEffect$(()=>{
    const handler = (event: Event) => {
      event.preventDefault();
      window.open(store.curWindow);
    };
    ref.value!.addEventListener('click', handler);
    return () => ref.value!.removeEventListener('click', handler);
  })
  
  return (
    <ul className="link-list">
      <li>
        <span
          onMouseEnter$={() => {
            store.curWindow = "https://google.com"
            store.linkedIn = "Click Here!";
          }}
          onMouseLeave$={() => {
            store.curWindow = window.location.toString();
            store.linkedIn = "LinkedIn";
          }}
          ref={ref}
        >
          {store.linkedIn}
        </span>
      </li>
      <li>
        <span
        onMouseEnter$={() => {
          store.curWindow = "https://google.com"
          store.email = "Click Here!";
        }}
        onMouseLeave$={() => {
          store.curWindow = window.location.toString();
          store.email = "Email";
        }}
        ref={ref}
        
        >{store.email}</span>
      </li>
      <li>
        <span
         onMouseEnter$={() => {
          store.curWindow = "https://google.com"
          store.phone = "Click Here!";
        }}
        onMouseLeave$={() => {
          store.curWindow = window.location.toString();
          store.phone = "Phone";
        }}
        ref={ref}
        >{store.phone}</span>
      </li>
      <li>
        <span
         onMouseEnter$={() => {
          store.curWindow = "https://google.com"
          store.facebook = "Click Here!";
        }}
        onMouseLeave$={() => {
          store.curWindow = window.location.toString();
          store.facebook = "Facebook";
        }}
        ref={ref}
        >{store.facebook}</span>
      </li>
      <li>
        <span
          onMouseEnter$={() => {
            store.curWindow = "https://google.com"
            store.github = "Click Here!";
          }}
          onMouseLeave$={() => {
            store.curWindow = window.location.toString();
            store.github = "github";
          }}
          ref={ref}
        >
          {store.github}
        </span>
      </li>
    </ul>
  );
});
