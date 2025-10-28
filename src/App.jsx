import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import MovieCard from './Components/MovieCard'

const fetchData = fetch('./../public/data.json')
  .then(response => response.json());

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className=" ">
      <Navbar></Navbar>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero className=" " movieData={fetchData}></Hero>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
     <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 px-10 mt-10 mx-auto w-11/12'>
         <MovieCard  movieDatas={fetchData}></MovieCard>
     </div>
      </Suspense>
      <Footer></Footer>
    </div>
  )
}

export default App
