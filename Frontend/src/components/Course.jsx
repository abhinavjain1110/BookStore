import React, { useEffect, useState } from 'react'
import Cards from "./Cards"
import axios from "axios"
import {Link} from 'react-router-dom'

function Course() {

  const [book,setBook]=useState([])
  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res=await axios.get("http://localhost:4001/book");
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl font-semibold md:text-4xl'>
            We're delighted to have you Here!</h1>
            <p className='mt-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit dolor sapien, at rutrum dolor fermentum quis. Curabitur dignissim tellus est, et aliquam lacus pretium rhoncus. Vivamus non risus ut enim interdum ultrices. Sed vel sapien maximus, imperdiet odio quis, interdum magna. Morbi et egestas velit, nec pellentesque eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet dignissim orci. Nunc sodales magna a erat tristique vehicula. Aenean rhoncus vitae velit a scelerisque. Maecenas non eleifend neque. Praesent ut elit sapien. Etiam dignissim id eros id facilisis. Maecenas eget elementum ante. Cras ultrices vehicula nisl, id lobortis odio mollis vitae.
            </p>
            <Link to='/'>
            <button className='mt-4 bg-success text-white px-4 py-2 rounded-md hover:bg-success-700 duration-300 '>Back</button>
            </Link>
    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
            book.map((item)=>(
              <Cards key={item.id} item={item}/>  
            ))
        }
    </div>
    </div>
    </>
  )
}

export default Course
