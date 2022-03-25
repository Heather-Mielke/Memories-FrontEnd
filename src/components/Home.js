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
            <span ><img src={beach}/></span>
            <span ><img src={canyon}/></span>
            <span ><img src={family1}/></span>
            <span ><img src={gramps}/></span>
            <span ><img src={parasail}/></span>
            <span ><img src={family2}/></span>
            <span ><img src={paint}/></span>
            <span ><img src={family4}/></span>
            <span ><img src={couple}/></span>
        </div>
    </div>
    <div className='title-container flex justify-center mt-16'>
        <h2 className=' text-3xl md:text-5xl text-white title'>Share Your Fondest Memories</h2>
    </div>
    <section className=' masonary-container'>
        
        <div className=' relative text-sm cards'>
            <img src={hiking} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={familyBeach} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={kidGarden} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={friends} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={swim} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={hiking} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={familyBeach} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={kidGarden} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={friends} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={swim} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={family1} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={hiking} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
            <div className='flex mb-2'>
                 <FaHeart className='fill-red-200 hover:fill-red-900 mr-3'/>
                 <FaComments className='fill-slate-300 hover:fill-slate-500 text-lg'/>
             </div>
        </div>
        <div className=' relative text-sm cards'>
            <img src={family2} className='rounded-lg'/>
            <button className='absolute top-0 right-0 mr-1 mt-1 fill-white text-2xl'><IoExpand className='absolute top-0 right-0 mr-1 mt-1 fill-white '/></button>
            <p className='font-bold pt-2'>Hiking</p>
            <p>Who Posted</p>
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