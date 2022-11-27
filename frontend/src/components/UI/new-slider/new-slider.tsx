import { component$, useClientEffect$, useMount$, useOn, useOnWindow, useRef, useServerMount$, useSignal, useStore, useStyles$, useWatch$ } from "@builder.io/qwik";
import Sstyles from "./new-slider.css";

export default component$(() => {
  useStyles$(Sstyles);
  const rightSlide = useSignal<HTMLElement>();
  const leftSlide = useSignal<HTMLElement>();

  // useServerMount$(() => {
  //   console.log(leftSlide);
   
  // });
  console.log(leftSlide.value);
  
  const Objects = useStore({
    objectStore: [
      {
        header: "",
        text: "",
        url: "",
      },
    ],
  });

  const sliderManger = useStore({
    activeSlide: 0,
    activeDescription: 3,
    sliderHeight: 3,
  });
  
  return (

    <div className="block_blocker">
      <h1>Taste Of My Stuff</h1>
      <div class="slider-container">
        <div class="left-slide" ref={leftSlide} document:onLoad$={()=>{
          console.log(leftSlide.value);
          
          leftSlide.value!.style.transform = `translateY(-180vh)`;
        }}>
          <div style="background-color: #FD3555">
            <h1>Nature flower</h1>
            <p>all in pink</p>
          </div>
          <div style="background-color: #2A86BA">
            <h1>Bluuue Sky</h1>
            <p>with it's mountains</p>
          </div>
          <div style="background-color: #252E33">
            <h1>Lonely castle</h1>
            <p>in the wilderness</p>
          </div>
          <div style="background-color: #FFB866">
            <h1>Flying eagle</h1>
            <p>in the sunset</p>
          </div>
        </div>
        <div class="right-slide" ref={rightSlide}>
          <div style="background-image: url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80')"></div>
          <div style="background-image: url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80')"></div>
          <div style="background-image: url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80')"></div>
          <div style="background-image: url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80')"></div>
        </div>
        <div class="action--buttons">
          <button
            class="down-button slider-button"
            onClick$={() => {
              sliderManger.activeSlide ++;
              if(sliderManger.activeSlide > sliderManger.sliderHeight){
                sliderManger.activeSlide = 0;
              }
              sliderManger.activeDescription--;
              if(sliderManger.activeDescription < 0){
                sliderManger.activeDescription = 3;
              }
              let calcR = -60 * sliderManger.activeSlide;

              let calcL = -60 *  sliderManger.activeDescription;
              // @ts-ignore
              rightSlide!.untrackedValue.style.transform = `translateY(${calcR}vh)`;
              // @ts-ignore
              leftSlide!.untrackedValue.style.transform = `translateY(${calcL}vh)`;
            }}
          >
           Down
          </button>
          <button
            class="up-button slider-button"
            onClick$={() => {
              sliderManger.activeSlide --;
              if(sliderManger.activeSlide < 0){
                sliderManger.activeSlide = 3;
              }
              sliderManger.activeDescription++;
              if(sliderManger.activeDescription > sliderManger.sliderHeight){
                sliderManger.activeDescription = 0;
              }
              let calcL = -60 *  sliderManger.activeDescription;

              let calcR = -60 * sliderManger.activeSlide;
             
              //@ts-ignore
              rightSlide!.untrackedValue.style.transform = `translateY(${calcR}vh)`;
              //@ts-ignore
              leftSlide!.untrackedValue.style.transform = `translateY(${calcL}vh)`;

            }}
          >
            Up
          </button>
        </div>
      </div>
    </div>
  );
});
