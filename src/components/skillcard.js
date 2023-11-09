export const SkillCard = (props) => {
  const { name, url } = props.details;
  return (
    <div class=" w-36 h-auto my-7 mx-auto flex flex-col items-center transition duration-100 ease-in-out transform hover:bg-[#CBADD9]/[0.5] hover:scale-110 hover:rounded-md">
      <div class="w-16 mt-2 mb-2 flex-grow">
        <img src={url} alt={name} />
      </div>
      <p class=" text-white text-lg font-sans text-center py-2">{name}</p>
    </div>
  );
};