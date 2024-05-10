import React from 'react'
import axios from "axios"
import { useState ,useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  /*used for creating sliding effect in cards*/ 
import Slider from "react-slick";

import Cards from './Cards';

function Freebook() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res=await axios.get("http://localhost:5000/book");
        const data=res.data.filter((data)=>data.category==='Free')

        setBook(data);
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
        };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='font-bold text-2xl pb-2'>Free For You</h1>
      <p>"B is for Books, a free children's bookstore, offers a wide range of books for kids of all ages to take home and cherish, fostering a love for reading and learning.".</p>
    </div>
    <div>
    <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook
