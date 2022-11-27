import { component$, useStylesScoped$ } from '@builder.io/qwik';
import CardManager from '~/components/UI/cards/card-manager/card-manager';
import ConnectBar from '~/components/UI/connect-bar/connect-bar';
import Hero from '~/components/UI/Hero/hero';
import NewSlider from '~/components/UI/new-slider/new-slider';
import Skills from '~/components/UI/skillset/skills';

export default component$(() => {

  return (
    <>
    <Hero></Hero>
    <ConnectBar/>
    <>
    <NewSlider/>
    </>
    </>
  );
});
