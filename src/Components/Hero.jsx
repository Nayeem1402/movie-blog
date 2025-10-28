import React, { use } from 'react'

export default function Hero({ movieData }) {
    const allData = use(movieData);


    return (
        <div>
 
            <div className="carousel mt-17 ">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src={allData[0].horizontal_poster}
                        className="w-full h-[300px] lg:h-[800px] object-cover " />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src={allData[1].horizontal_poster}
                        className="w-full h-[300px] lg:h-[800px] object-cover " />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src={allData[2].horizontal_poster}
                        className="w-full h-[300px] lg:h-[800px] object-cover " />
                </div>

            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                 
            </div>

        </div>
    )
}
