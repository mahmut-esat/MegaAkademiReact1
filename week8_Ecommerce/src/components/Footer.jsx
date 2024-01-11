import React from "react"
import { MdArrowBackIos } from "react-icons/md";

const Footer = () => {
  return(
    <div class="flex items-center w-full justify-around bg-red-600 h-48 mt-3 border-t shadow-sm  ">
      <div class="flex flex-col justify-center items-center">
        <div class="p-3 bg-white rounded-2xl ">
          <img src="./src/assets/Logo.png" alt="logo" class="h-16 object-cover" />
        </div>
        <div class="mt-2 text-center">
          <h1 class="text-md font-semibold text-white">Bizi Instagram'da Takip Edin</h1>
          <MdArrowBackIos class="text-white cursor-pointer my-1 text-center"/>

        </div>
        
      </div>
      <div class="bg-white  py-5 px-4 rounded-lg">
      
        <h1 class="font-bold text-red-600 mb-2 text-center animate-bounce">İLETİŞİM</h1>
        <h3 class="">Yenişehir Mahallesi Meram/KONYA</h3>
        <h3 class="font-semibold">0555 000 4242</h3>
      </div>
    </div>
  )
}

export default Footer;