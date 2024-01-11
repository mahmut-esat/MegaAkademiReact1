import React from "react"
import ProductCard from "./ProductCard.jsx"
import Button from "./basic/Button"


const data = [
  {
    "title": "Hamburger",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400",
    "price": 42
  },
    {
    "title": "Cheese Burger",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/2235831/pexels-photo-2235831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "price": 72
  },
    {
    "title": "Küflü Burger",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "price": 57
  },
    {
    "title": "Baklava",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/7317605/pexels-photo-7317605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "price": 17
  },
    {
    "title": "Ekmek Kadayıfı",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/6419617/pexels-photo-6419617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "price": 27
  },
    {
    "title": "CheeseCake",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 70
  },
  {
    "title": "Tavuk Burger",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400",
    "price": 42
  },
    {
    "title": "BBQ Burger",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/2235831/pexels-photo-2235831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "price": 72
  },
    {
    "title": "Islak Hamburger",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "price": 57
  },
    {
    "title": "Tavuk Burger",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400",
    "price": 17
  },
    {
    "title": "Patlıcanlı Burger",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "price": 27
  },
    {
    "title": "Pancake",
    "explanation": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "image": "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    "price": 70
  },
];





const Product = () => {
  return(
    <div class="mx-auto h-full w-screen max-w-screen-xl ">
      
      <div class="flex items-center justify-center gap-5 border-b shadow-b-lg">
        <Button title="Tümü"/>
        <Button title="Fırın Lezzetleri"/>
        <Button title="Tatlılar"/>
        <Button title="İçecekler"/>
      </div>
      
      <div class="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {data.map((item, index)=>(
            <span class="hover:scale-105 px-5 transition-scale duration-200 ease-in">
              <ProductCard key={index} item={item} />
            </span>
          ))}
      </div>
    </div>
  )
}

export default Product