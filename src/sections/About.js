import Img from "../Images/bg.png"
import { Slide } from "react-awesome-reveal";

export default function About()
{
 return (
   <div class="bg-black lg:pt-24 scroll-smooth ">
     <div class="py-10 text-6xl font-titillium font-bold flex justify-center">
       <span class="bg-clip-text text-transparent bg-gradient-to-b from-[#8e3eb3] to-[#d0aedf]">
         ABOUT ME
       </span>
     </div>

     <div class=" text-white text-center flex justify-center sm:mx-16 lg:mx-28">
       <p class="flex justify-center font-titillium lg:text-2xl sm:text-lg lg:px-32 sm:px-16">
         Hello, I'm Gayatri Sawant, a final-year undergraduate student pursuing
         a degree in Computer Engineering at SCTR's Pune Institute of Computer
         Technology. I have a strong passion for full-stack web development and
         machine learning. My academic journey and practical experiences have
         equipped me with a solid foundation in both frontend and backend
         development, as well as a keen interest in exploring advanced machine
         learning techniques. I'm always eager to learn new things, take on
         challenges, and explore new opportunities in the tech world.
         <br></br>
         <br></br>I'm a selenophile who loves reading novels, listening songs,
         binge watching kdramas and sometimes I draw :)
         {/* <br></br> Let's connect and share our journeys! */}
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