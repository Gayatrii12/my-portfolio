import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const words = [
    "Web Developer",
    "Graphic Designer"
  ];
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      setCurrentWord((prevWord) => {
        if (isDeleting) {
          setJ((prevJ) => prevJ - 1);
          return prevWord.substring(0, j - 1);
        } else {
          setJ((prevJ) => prevJ + 1);
          return prevWord.substring(0, j + 1);
        }
      });

      if (isDeleting && j === 0) {
        setIsDeleting(false);
        setI((prevI) => (prevI + 1) % words.length);
      }

      if (!isDeleting && j === currentWord.length) {
        setIsDeleting(true);
      }
    };

    const typingInterval = setTimeout(type, 100);

    return () => clearTimeout(typingInterval);
  }, [isDeleting, j, currentWord]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-4xl font-bold">
        {currentWord}
      </h1>
    </div>
  );
};

export default Typewriter;
