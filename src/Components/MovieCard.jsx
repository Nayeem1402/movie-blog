import React, { use } from "react";
import { Grid } from "swiper/modules";
import './../index.css';


export default function MovieCard({ movieDatas }) {
  const cardData = use(movieDatas);

  // State to store selected movie
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  const handleClick = (movie) => {
    setSelectedMovie(movie);
    document.getElementById("movie_modal").checked = true;
  };


  return (
    <>
      {/* Movie Cards */}
      {cardData.map((movie) => (
        <div
          key={movie.id}
          className="w-full relative h-80 flex justify-center p-2 my-6 cursor-pointer"
          onClick={() => handleClick(movie)}
        >
         <div className="transform h-[270px] w-[260px] hover:text-red-600 transition duration-500 hover:scale-105 justify-center my-4 px-2 items-center flex-col flex">
            <img
              className="h-[250px] lg:h-[300px] w-[230px]"  
              src={movie.vertical_poster}
              alt={movie.title}
            />

            <div className="mt-4 flex justify-between items-center w-[230px] px-2">
              <div>
                <h4 className="text-2xl">{movie.movie_name}</h4>
                <p className="text-gray-400">{movie.language}</p>
              </div>

              <div>
                <p className="text-gray-400 flex rating  items-center">  
                   {movie.rating}</p>
                <p className="text-gray-400">{movie.release_year}</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      <input type="checkbox" id="movie_modal" className="modal-toggle" />
      <div className="modal overflow-y-auto my-auto">
        <div className="modal-box relative w-11/12 md:w-10/12 lg:w-7/12 max-w-[90vw] max-h-[70vh] flex flex-col">
          {/* Close Button */}
          <label
            htmlFor="movie_modal"
            className="btn absolute top-5 right-9 lg:right-12 px-3 py-2 rounded-full bg-red-600 text-white   cursor-pointer z-10 hover:bg-white hover:text-red-600"
          >
            Close
          </label>

          {/* Modal Content */}
          <div className="overflow-y-auto pr-2 modal-container">
            {selectedMovie ? (
              <>

                <div className=" modal-img">
                  <img
                    className="w-full  h-[200px] lg:h-[350px] object-cover my-4 rounded "
                    src={selectedMovie.horizontal_poster}
                    alt={selectedMovie.movie_name}
                  />
                </div>


                <h3 className="text-2xl lg:mt-10 font-bold text-start modal-name">{selectedMovie.movie_name}</h3>





                <div className="btn-container">
                  <button className="btn modal-button1  bg-white text-red-600 rounded-3xl font-bold w-[150px] hover:bg-red-600 hover:text-white">
                    <a target="blank" href={selectedMovie.movie_link}>Watch Movie</a>
                  </button>
                  <button className="btn modal-button2  bg-white text-red-600 rounded-3xl w-[150px] font-bold  hover:bg-red-600 hover:text-white">
                    <a target="blank" href={selectedMovie.trailer_link}>Watch Trailer</a>
                  </button>
                </div>

                <div className="modal-details">

                  <p className="text-gray-400"><span className="font-semibold text-white">Category:</span> {selectedMovie.category}</p>
                  <p className="text-gray-400"><span className="font-semibold text-white">Release Year:</span> {selectedMovie.release_year}</p>
                  <p className="text-gray-400"><span className="font-semibold text-white">IMDB Rating:</span> {selectedMovie.rating}</p>
                  <p className="text-gray-400"><span className="font-semibold text-white">Actor:</span> {selectedMovie.actor_name}</p>
                  <p className="text-gray-400"><span className="font-semibold text-white">Actress:</span> {selectedMovie.actress_name}</p>

                </div>



                <p className="py-2 modal-dis text-gray-400">
                  <span className="font-semibold text-white">Description:</span> <br />
                  {selectedMovie.description || "No description available."}
                </p>
                <br />

              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
