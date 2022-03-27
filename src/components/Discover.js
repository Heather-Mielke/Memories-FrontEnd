import React from 'react'
import kidGarden from '../board-images/kid-garden.jpg'
import friends from '../board-images/friends.jpg'
import swim from '../board-images/swim-ocean.jpg'
import {FaHeart, FaComments} from 'react-icons/fa'
import {IoExpand} from 'react-icons/io5'

const Discover = () => {
  return (
   <>
   <div className='my-20 discover-title'>
      <h2 className='text-white text-center text-5xl'>Discover the Memories</h2>
   </div>
   <section className=' masonary-container'>
        
        <div className=' relative text-sm cards'>
            <img src={kidGarden} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <div className='flex justify-between'>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='pt-2 text-white opacity-50 text-xs'>March 5th, 2022</p>
            </div>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={friends} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <div className='flex justify-between'>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='pt-2 text-white opacity-50 text-xs'>March 5th, 2022</p>
            </div>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={swim} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <div className='flex justify-between'>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='pt-2 text-white opacity-50 text-xs'>March 5th, 2022</p>
            </div>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={kidGarden} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <div className='flex justify-between'>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='pt-2 text-white opacity-50 text-xs'>March 5th, 2022</p>
            </div>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        
        </section>
   </>
  )
}

export default Discover