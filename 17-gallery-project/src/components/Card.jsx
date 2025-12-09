import React from 'react'

const Card = (props) => {
  return (
    <div>
         <a href={props.elem.url} target="_blank">
            <div className="h-40 w-54 rounded-xl overflow-hidden ">
              <img
                className="h-full w-full object-cover "
                src={props.elem.download_url}
                alt="images"
              />
            </div>
            <h2 className=" mt-3 p-2 text-center border-2 rounded-2xl font-bold text-lg">
              {props.elem.author}
            </h2>
          </a>
    </div>
  )
}

export default Card
