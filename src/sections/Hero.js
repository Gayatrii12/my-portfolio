import Image from "../Images/pic1.png";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import Moon from "../Images/moon.png"
import Typewriter from "../components/type";

export default function Hero() {
  function hrefFunction() {
    window.location.href =
      "https://drive.google.com/file/d/1dAPQT99HxplzTXtaBAxmcO2nzkRgdgRD/view?usp=drive_linkhttps://drive.google.com/file/d/1dAPQT99HxplzTXtaBAxmcO2nzkRgdgRD/view?usp=drive_link";
  }

  return (
    <div class="">
      <div class="bg-gradient-to-b from-[#8e3eb3]/[0.5] flex justify-start">
        <img
          class="h-auto w-48 rounded-full transition duration-200 ease-in-out transform hover:scale-110 animate-pulse"
          src={Moon}
          alt="Moon"
        />
      </div>

      <div class="bg-black grid place-items-center lg:grid-cols-3">
        <div class="col-span-2 ">
          <div class="text-[#CBADD9] font-poppins px-4 text-xl font-semibold">
            <Fade>Hey! I'm</Fade>
          </div>
          <div class="text-[#8e3eb3] font-poppins px-4 lg:text-6xl sm: text-5xl font-bold  pb-1 my-2">
            <Fade>Gayatri Sawant.</Fade>
          </div>
          {/* <div>
            <Typewriter />
          </div> */}

          <div class="text-[#CBADD9] font-semibold px-4 lg:text-5xl sm: text-4xl pb-3">
            <Fade>Web Developer |</Fade>
          </div>
          <div class="text-[#CBADD9] font-semibold px-4 lg:text-5xl sm: text-4xl pb-10">
            <Fade>Graphic Designer</Fade>
          </div>
          <div class="px-4 pb-4">
            <button
              id="mainBtn"
              onClick={hrefFunction}
              class="w-24 rounded-md ring-1 ring-[#CBADD9] py-1 font-poppins flex place-content-center text-[#CBADD9] text-xl font-medium hover:bg-[#CBADD9] hover:text-black"
            >
              <Fade>Resume</Fade>
            </button>
          </div>
        </div>

        <Slide direction="right" triggerOnce>
          <div class="flex justify-center col-span-1 animate-fade-left animate-once animate-duration-1000 animate-delay-0 animate-ease-in">
            <img
              class="h-auto w-96 rounded-full transition duration-200 ease-in-out transform hover:bg-[#CBADD9]/[0.5] hover:scale-110"
              src={Image}
              alt="Pic"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
}
