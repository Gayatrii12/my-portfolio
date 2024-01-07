import Img from "../Images/bg.png"
import { Slide } from "react-awesome-reveal";

export default function About()
{
 return (
   <div class="bg-black">
     <div class="py-10 text-5xl font-poppins font-semibold flex justify-center">
       <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#8e3eb3] to-[#d0aedf]">
         ABOUT ME
       </span>
     </div>

     <div class=" font-poppins text-[#CBADD9] text-center flex justify-center sm:mx-16 lg:mx-28">
       <p class="flex justify-center lg:text-2xl sm:text-xl lg:px-32 sm:px-16">
         Hello there! I'm Gayatri Sawant, a third-year undergraduate pursuing
         Computer Engineering at SCTR's Pune Institute of Computer Technology.
         I'm passionate about web development, with a focus on frontend
         development and graphic design. But wait, there's more! I'm not just
         stopping there—I'm also exploring Machine Learning, adding an extra
         layer of excitement to my tech adventure.
         <br></br>I'm a selenophile who loves reading novels, listening songs,
         binge watching kdramas and sometimes I draw :)
       </p>
     </div>
     <div class="flex justify-center">
       <Slide direction="up" triggerOnce>
         <img class="h-auto w-full" src={Img} alt="Pic" />
       </Slide>
     </div>
   </div>
 );
};