import React from 'react'

function Card({image,category,title,price,id,rating,sale  }) {
  return (
    <>
  

<div className="lg:w-1/4 md:w-1/2 p-4 w-full" id={id}>
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={image}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            {category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {title}
          </h2>
          <p><span>{rating}</span><span>{sale}</span></p>
          <p className="mt-1">${price}</p>
        </div>
      </div>

    </>
  )
}

export default Card