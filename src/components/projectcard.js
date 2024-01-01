export const ProjectCard = (props) => {
  const { name, desc, image, link } = props.details;
  return (
    <div className="bg-black flex flex-col justify-center items-center mx-4 my-4">
      <div className=" h-124 border-2 border-[#8e3eb3]/[0.2] my-18 lg:h-128 transition duration-100 ease-in-out transform hover:bg-[#8e3eb3]/[0.2] hover:scale-105">
        <div className="flex justify-center">
          <img className=" h-48 w-96 opacity-70" src={image} alt={name} />
        </div>
        <div className="text-[#d0aedf] font-poppins font-medium text-3xl text-center my-4">
          {name}
        </div>
        <p className="text-white font-poppins text-center text-lg text-center mx-2 pb-2">
          {desc}
        </p>
        <div class="flex justify-center">
          <a href={link}>
            <img
              class="my-4"
              src="https://img.icons8.com/ios-glyphs/40/9F6BB7/github.png"
              alt="github"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
