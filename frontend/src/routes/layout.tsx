import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/layout/header/header';
import Main from '../components/layout/main/main';
import Footer from '../components/layout/footer/footer' 

export default component$(() => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
});
