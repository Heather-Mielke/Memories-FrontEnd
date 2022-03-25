import React from 'react'
import beach from '../images/beach.jpg'
import canyon from '../images/canyon.jpg'
import family1 from '../images/family1.jpg'
import gramps from '../images/gramps-kid.jpg'
import parasail from '../images/parasail.jpg'
import family2 from '../images/family2.jpg'
import paint from '../images/kid-paint.jpg'
import family4 from '../images/family-baby.jpg'
import couple from '../images/old-couple.jpg'
import hiking from '../board-images/hiking1.jpg'
import familyBeach from '../board-images/family-beach.jpg'
import kidGarden from '../board-images/kid-garden.jpg'
import friends from '../board-images/friends.jpg'
import swim from '../board-images/swim-ocean.jpg'
import {FaHeart, FaComments} from 'react-icons/fa'
import {IoExpand} from 'react-icons/io5'


//used this site to help make rotating images https://www.cssscript.com/3d-rotator-gallery/
const Home = () => {
  return (
    <>
    <div className='head-container'>
        <div className='box'>
            <span ><img src={beach} alt='beach'/></span>
            <span ><img src={canyon} alt='canyon'/></span>
            <span ><img src={family1} alt='familyPhoto'/></span>
            <span ><img src={gramps} alt='grandpaAndChild'/></span>
            <span ><img src={parasail} alt='parasailing'/></span>
            <span ><img src={family2} alt='familyPhoto'/></span>
            <span ><img src={paint} alt='childCoveredInPaint'/></span>
            <span ><img src={family4} alt='familyPhoto'/></span>
            <span ><img src={couple} alt='couple'/></span>
        </div>
    </div>
    <div className='title-container flex justify-center mt-16'>
        <h2 className=' text-5xl text-white title'>Share Your Fondest Memories</h2>
    </div>
    <section className=' masonary-container'>
        
        <div className=' relative text-sm cards'>
            <img src={hiking} alt='hiking' className='rounded-lg'/>
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
            <img src={familyBeach} alt='family beach' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={kidGarden} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={friends} alt='friends' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={swim} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={hiking} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={familyBeach} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={kidGarden} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={friends} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={swim} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={family1} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={hiking} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
            <p className='text-white'>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={family2} alt='hiking' className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2 text-white'>Hiking</p>
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

export default Home