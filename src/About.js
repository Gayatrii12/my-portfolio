import Image from "./Images/pic1.png";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <div class="bg-black grid grid-cols-2 lg:grid-cols-3 items-center">
      <div class="my-40 mx-14 py-2 col-span-2 ">
        <div class="text-[#CBADD9] font-circular text-lg sm:mx-16 lg:mx-28 ">
          <Fade>Hey Everyone!</Fade>
        </div>
        <div class="text-[#8e3eb3] font-poppins text-6xl font-semibold sm:mx-16 lg:mx-28 pb-1 my-2">
          <Fade>
            <span class="text-white">I'm </span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#8e3eb3] to-[#d33cb2]">
              Gayatri Sawant.
            </span>
          </Fade>
        </div>

        <div class="text-[#CBADD9]  font-light text-3xl sm:mx-16 lg:mx-28 pb-3">
          <Fade>Web Developer | Graphic Designer</Fade>
        </div>
        <p class="text-[#CBADD9] font-poppins text-xl max-w-2xl sm:mx-16 lg:mx-28 pb-10 ">
          <Fade>
            Third-year undergraduate pursuing a BE degree in Computer
            Engineering at Pune Institute of Computer Technology. Passionate
            about web development, with a focus on frontend design and graphic
            design.
          </Fade>
        </p>

        <div>
          <button class="mx-20 w-24 rounded-md ring-1 ring-[#CBADD9] py-1 flex place-content-center text-[#CBADD9] text-lg hover:bg-[#CBADD9] hover:text-black">
            Resume
          </button>
        </div>
      </div>

      <Slide right>
        <div class="mx-auto ">
          <img
            class="h-auto w-96 flex justify-center items-center rounded-full transition duration-200 ease-in-out transform hover:bg-[#CBADD9]/[0.5] hover:scale-110"
            src={Image}
            alt="Pic"
          />
        </div>
      </Slide>
    </div>
  );
}
