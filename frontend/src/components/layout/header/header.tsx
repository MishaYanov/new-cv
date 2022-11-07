import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import Navbar from './navbar/navbar';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <Navbar/>
    </header>
  );
});
