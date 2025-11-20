import React from 'react'

const RightCardContent = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full  w-full  p-4 flex flex-col justify-between"> 
        <h2 className="bg-white  text-xl font-bold rounded-full h-10 w-10 flex justify-center items-center">
          1
        </h2>
        <div>
          <p className="text-sm leading-relaxed text-white mb-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab non
            reprehenderit minima, molestiae rerum illo.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-600 text-white font-medium px-4 py-1 rounded-full">Satisfied</button>
            <button className="bg-blue-600 text-white font-medium px-2 py-1 rounded-full">
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent