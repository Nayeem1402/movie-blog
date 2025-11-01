 import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import MovieCard from './Components/MovieCard'

const fetchData = fetch('./../public/data.json')
  .then(response => response.json());

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // 🔹 Search স্টেট

  // Filtered movie data using Suspense fetch result
  const filteredDataPromise = fetchData.then(data => {
    let filtered = data;

    // 🔹 Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(movie =>
        movie.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // 🔹 Search filter (movie name অনুযায়ী)
    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(movie =>
        movie.movie_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  });

  return (
    <div className=" ">
      {/* 🔹 Navbar এ props পাঠানো */}
      <Navbar
        setSelectedCategory={setSelectedCategory}
        setSearchQuery={setSearchQuery}
      ></Navbar>

      <Suspense fallback={<div>Loading...</div>}>
        <Hero className="mt-16" movieData={fetchData}></Hero>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <div className='min-h-[60vh] flex flex-col items-center justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 px-10 mt-10 mx-auto w-11/12'>
            <MovieCard movieDatas={filteredDataPromise}></MovieCard>
          </div>

          {/* 🔹 যদি কিছু না মেলে */}
          <Suspense fallback={<></>}>
            {filteredDataPromise.then(data => {
              if (data.length === 0) {
                return (
                  <p className="text-center text-gray-400 text-xl my-10">
                    {searchQuery.trim() !== ""
                      ? "Opps! Can't find any movie by this name 😢"
                      : "Opps! Can't find any movie by this category 😢"}
                  </p>
                );
              }
              return null;
            })}
          </Suspense>
        </div>
      </Suspense>

      <Footer></Footer>
    </div>
  )
}

export default App
