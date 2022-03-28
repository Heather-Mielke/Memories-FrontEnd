import React, {useEffect, useState} from 'react'
import {FaHeart, FaComments} from 'react-icons/fa'
import {IoExpand} from 'react-icons/io5'
import axios from 'axios'

const Discover = () => {
  const [posts, setPosts] = useState([])


  const getPosts = () => {
      axios.get('https://remember-memories-database.herokuapp.com/api/posts')
      .then((response)=>{
          setPosts(response.data)
      })
  }

  

  useEffect(()=>{
     getPosts()
  }, [])

  return (
   <>
   <div className='my-20 discover-title'>
      <h2 className='text-white text-center text-5xl'>Discover the Memories</h2>
   </div>
   <section className=' masonary-container'>
     
        {posts.map((post) => {
         
          return(
            <div className=' relative text-sm cards' >
               <img src={post.image} alt='hiking' className='rounded-lg'/>
                <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
               <div className='flex justify-between'>
                  <p className='font-bold pt-2 text-white'>{post.caption}</p>
                   <p className='pt-2 text-white opacity-50 text-xs'>{Date(post.date).slice(4,15)}</p>
               </div>
                  <p className='text-white'>Heather</p>
                <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
              </div>
            </div>
          )
         
        })}
        
        
      
        </section>
   </>
  )
}

export default Discover