 import React, { use } from "react";
 

export default function MovieCard({ movieDatas }) {
  const cardData = use(movieDatas);
 

  const handleClick = (movie) => {
    console.log(movie.id);
    
  };

  return (
    <>
      {cardData.map((movie) => (
        <div
          key={movie.id}
          className="w-full relative h-80 flex justify-center p-2 my-6 cursor-pointer"
          onClick={() => handleClick(movie)}
        >
          <div className="transform h-64  w-80 hover:text-red-600 transition duration-500 hover:scale-125 flex justify-center items-center flex-col">
            <img
              className=" h-[250px] lg:h-[300px] w-[230px]"
              src={movie.vertical_poster}
              alt={movie.title}
            />
            <h4 className="text-xl">{movie.movie_name}</h4>
          </div>
        </div>
      ))}
    </>
  );
}
