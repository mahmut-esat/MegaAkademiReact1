import React from "react"

const Button = ({onClick, title}) => {
  return(
    <button class="hover:delay-300 mt-3 mb-2 p-2 text-base lg:text-lg rounded-md font-semibold hover:bg-red-600  hover:text-white text-red-600 hover:bg-white hover:border border-solid border-red-600 transition duration-200 " onClick={onClick}>{title}</button>
  )
}

export default Button;