import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom"

function Navbar() {
  return (
    <nav class="w-full bg-white border-b shadow-sm sticky top-0 z-40 py-1 overflow-hidden">
      <header class="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div class="">
              <img src="./src/assets/Logo.png" alt="logo" 
                class="h-16 object-cover cursor-pointer"
                onClick={()=> navigate("/")}
                />
            </div>
            <div class="justify-center items-center">
              
              <ul class="flex space-x-10 ">
                <li class="text-center text-gray-700 font-semibold cursor-pointer hover:text-red-600 transition duration-200"
                  onClick={()=> navigate("/")}
                  >
                  ANA SAYFA
                </li>
                <li class="text-center text-gray-700 font-semibold cursor-pointer hover:text-red-600 transition duration-200 ">
                  ŞUBELERİMİZ
                </li>
                <li class="text-center text-gray-700 font-semibold cursor-pointer hover:text-red-600 transition duration-200">
                  HİKAYEMİZ
                </li>
              </ul>
            </div>
            <div>
              <ul class="flex space-x-10 hidden md:flex ">
                <li class="text-center text-gray-700 font-semibold cursor-pointer hover:text-red-600 transition duration-200">
                  Üye Ol
                </li>
                <li class="text-center text-gray-700 font-semibold cursor-pointer hover:text-red-600 transition duration-200">
                  Giriş Yap
                </li>
              </ul>
            </div>
    </header>
    </nav >
  )
}

export default Navbar;