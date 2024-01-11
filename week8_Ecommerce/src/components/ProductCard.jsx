import React from "react"

const ProductCard = ({item}) => {
  return(
    <div class="flex   w-56 overflow-hidden">
      
      <div class="h-72 w-56 mx-3 my-3 bg-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-150">
      <img src={item.image} class="w-full h-48 object-cover hover:opacity-100 hover:scale-105 transition-scale duration-200 ease-in group-hover:scale-110 "/>
      <div class="mt-3 pb-2">
        <h1 class="text-lg font-bold uppercase text-red-700 text-center">{item.title}</h1>
        <button class="hover:skew-y-12 hover:animate-bounce">
          <div class="flex items-center justify-center bg-red-600 m-3 p-3 cursor-pointer w-full h-9 gap-2 rounded-xl hover:delay-300 hover:animate-bounce">

            <p class="text-white font-bold">{'\u20BA'} {item.price}</p>
            <p class="text-white font-semibold">|</p>
            <p class="text-white font-bold">EKLE</p>
          </div>
        </button>
      </div>
        
    </div>

    </div>
  )
}

export default ProductCard