import {useState} from "react";
import { MdArrowForwardIos,MdArrowBackIos } from "react-icons/md";

const Slider = () => {


  const [currentSlide, setCurrentSlide] = useState(0)
  
  const data = [
    "https://images.pexels.com/photos/2235831/pexels-photo-2235831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1600",
];


  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1 )
  }
  
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1 )
  }

  return(
  
    
    <div class="max-h-96 h-96 w-screen relative overflow-hidden" style={{"max-height": "640px", height: `calc(80vh-80px)`}}>
      <div class="h-full flex" style={{transform:`translateX(-${currentSlide * 100}vw)`, width:"300vw"}}>
        <img src={data[0]} alt="" class="w-screen h-full object-cover" />
        <img src={data[1]} alt="" class="w-screen h-full object-cover" />
        <img src={data[2]} alt="" class="w-screen h-full object-cover" />
      </div>

         <div class="flex w-fit absolute left-0 right-0 gap-10 justify-center" style={{bottom:"20px"}}>
         <div class="w-12 h-12 text-3xl border-2 bg-red-700 border-gray-300 rounded-md text-white flex items-center justify-center cursor-pointer" onClick={prevSlide} >
            <MdArrowBackIos/>
         </div>
         <div class="w-12 h-12 text-3xl border-2 bg-red-700 border-gray-300 rounded-md text-white flex items-center justify-center cursor-pointer" onClick={nextSlide}>
            <MdArrowForwardIos/>
        </div>
    </div>
      </div>

  )
}


export default Slider;