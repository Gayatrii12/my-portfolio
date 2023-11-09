export const ProjectCard = (props) => {
    const{name, desc} = props.details;
    return (
      <div class="w-25% sm:h-auto lg:h-64 transition duration-100 ease-in-out transform hover:bg-[#8e3eb3]/[0.5] hover:scale-105">
        <div class="font-gilmer text-[#d0aedf] text-3xl text-center mb-4 py-6">
          {name}
        </div>
        <p class="text-white font-gilmer text-lg text-center mx-10 pb-6">
          {desc}
        </p>
      </div>
    );
}