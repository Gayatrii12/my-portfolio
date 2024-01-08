// import { Fade } from "react-reveal/Fade";
import Ast from "../Images/ast.png";
import End from "../Images/7756627.png"
import { Slide } from "react-awesome-reveal";

export default function Contacts() {
    return (
      <div class="bg-black h-full lg:pt-12 scroll-smooth">
        <div class="py-10 text-5xl font-poppins font-semibold flex justify-center">
          <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#8e3eb3] to-[#d0aedf]">
            CONTACT ME
          </span>
        </div>
        <div class="grid grid-cols-3">
          <div class="flex justify-center col-span-1 animate-wiggle animate-infinite">
            <img
              class="h-auto lg:w-72 sm:w-20  rounded-full"
              src={Ast}
              alt="Ast"
            />
          </div>
          <div class="flex flex-col item-center col-span-2">
            <p class="text-white lg:text-2xl sm:text-md font-poppins">
              Join me as I blend technology, creativity, and curiosity into a
              dynamic mix of endless possibilities!
            </p>

            <div class="flex flex-row my-3 lg:mt-10">
              <Slide direction="right" triggerOnce>
                <img
                  class="lg:h-8 lg:w-8 sm:h-2"
                  src="https://img.icons8.com/material-rounded/24/9F6BB7/mail.png"
                />
                <a href="mailto:sawantgd03@gmail.com">
                  <span class="text-[#9F6BB7] lg:text-xl sm: text-md mx-2">
                    sawantgd03@gamil.com
                  </span>
                </a>
              </Slide>
            </div>
            <div class="flex flex-row my-3">
              <Slide direction="right" triggerOnce>
                <img
                  class="lg:h-8 lg:w-8 sm:h-2 "
                  src="https://img.icons8.com/ios-filled/24/9F6BB7/linkedin.png"
                />
                <a href="https://www.linkedin.com/in/gayatri-sawant-115689179/">
                  <span class="text-[#9F6BB7] lg:text-xl sm:text-sm mx-2">
                    Gayatri Sawant
                  </span>
                </a>
              </Slide>
            </div>
            <div class="flex flex-row my-3">
              <Slide direction="right" triggerOnce>
                <img
                  class="lg:h-8 lg:w-8 sm:h-4"
                  src="https://img.icons8.com/ios-glyphs/24/9F6BB7/github.png"
                />
                <a href="https://github.com/Gayatrii12">
                  <span class="text-[#9F6BB7] lg:text-xl sm:text-sm mx-2">
                    Gayatrii12
                  </span>
                </a>
              </Slide>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <Slide direction="up" triggerOnce>
            <img class="h-auto w-full" src={End} alt="Pic" />
          </Slide>
        </div>
      </div>
    );
}