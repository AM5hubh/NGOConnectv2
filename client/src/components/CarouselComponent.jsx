"use client";

import { Carousel } from "flowbite-react";

export function CarouselComponent() {
  return (
    <div className="h-56 sm:h-1/3 xl:h-1/3 2xl:h-3/4">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-900">Join an Event & Make a Difference!</h1>
      <Carousel pauseOnHover slideInterval={10000}>
        <div className="relative">
          <img
            src="https://res.cloudinary.com/dvv99sjjl/image/upload/v1728146712/wwivsa72kopz2jgi0neq.png"
            alt="..."
            className="w-full"
          />
          <div className="absolute inset-0 bg-black/30" />
          {/* <button className="text-white text-2xl bottom-40 left-5 absolute"></button> */}
          <div className=" bottom-[10%] md:bottom-[20%] left-10 md:left-20 absolute w-1/2">
            <h1 className="text-white font-extrabold md:text-5xl overflow-hidden overflow-ellipsis">
              UPCOMING EVENTS
            </h1>
            <button
              type="button"
              className=" mt-2 px-2 py-1.5 md:px-5 md:py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Base
            </button>
          </div>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dvv99sjjl/image/upload/v1728218967/bovemvyvqqwpqyi7feb7.png"
            alt="..."
            className="w-full"
          />
          <div className="absolute inset-0 bg-black/30" />
          {/* <button className="text-white text-2xl bottom-40 left-5 absolute"></button> */}
          <div className=" bottom-[10%] md:bottom-[20%] left-10 md:left-20 absolute w-1/2">
            <h1 className="text-white font-extrabold md:text-5xl overflow-hidden overflow-ellipsis">
              UPCOMING EVENTS
            </h1>
            <button
              type="button"
              className=" mt-2 px-2 py-1.5 md:px-5 md:py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Base
            </button>
          </div>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dvv99sjjl/image/upload/v1728146345/azqtrqvf7tnclcortmni.png"
            alt="..."
            className="w-full"
          />
          <div className="absolute inset-0 bg-black/30" />
          {/* <button className="text-white text-2xl bottom-40 left-5 absolute"></button> */}
          <div className=" bottom-[10%] md:bottom-[20%] left-10 md:left-20 absolute w-1/2">
            <h1 className="text-white font-extrabold md:text-5xl overflow-hidden overflow-ellipsis">
              UPCOMING EVENTS
            </h1>
            <button
              type="button"
              className=" mt-2 px-2 py-1.5 md:px-5 md:py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Base
            </button>
          </div>
        </div>
        {/* <img
          src="https://res.cloudinary.com/dvv99sjjl/image/upload/v1728218967/bovemvyvqqwpqyi7feb7.png"
          alt="..."
        />
        <img
          src="https://res.cloudinary.com/dvv99sjjl/image/upload/v1728146345/azqtrqvf7tnclcortmni.png"
          alt="..."
        /> */}
      </Carousel>
    </div>
  );
}
