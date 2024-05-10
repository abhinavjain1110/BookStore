import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
    <div className='w-full order-2 md:order-1 md:w-1/2  mt-11 md:mt-28'>
        <h1 className='text-2xl font-bold'>
    <span className='text-3xl text-green-500'>Unleash the Power of Learning &nbsp;<br></br></span>
     Discover the Wide Range of Books and Resources for All Ages and Skill Levels at Our Bookstore!
        </h1>
        <br></br>
        <p className='text-xl'>
        Bookstores are vital for promoting literacy and fostering a love for reading. They offer a wide range of books, magazines, and other reading materials for all ages. Bookstores like Barnes & Noble provide comfortable reading spaces, encouraging reading and promoting literacy. While some discourage reading without purchasing, most booksellers view it as a way to promote literacy. Scholastic, a leading provider of children's books, emphasizes the importance of reading in children's development. By encouraging reading, bookstores play a crucial role in shaping future generations.
        </p>
        <br></br>
<Link to='/signup' className="btn btn-success mt-2">Get Started</Link>
    </div>
    <div className='w-full order-1 md:order-2 md:w-1/2 my-14'>
    <img className='md:my-10 md:mx-5' src='../bs.jpg' />
    </div>
    </div>
    </>
  )
}
