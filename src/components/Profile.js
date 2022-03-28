import React from 'react'
import me from '../board-images/heather.jpeg'
import {IoImages} from 'react-icons/io5'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Profile = () => {

   
return (
    <>
    <div className='flex flex-col justify-center align-center'>
      <div className='profile-photo w-32 rounded-full mx-auto mt-28'>
        <img className='w-100 rounded-full'src={me} alt="userPhoto"/>
      </div>
      <div className=' flex flex-col justify-center align-center'>
        <p className='text-4xl text-center profile'>Name:</p>
        <p className='text-sm text-center profile'>UserName:</p>
        <div className='profile-buttons flex justify-center align-center my-5 gap-5'>
            <button className='bg-white p-1 rounded-2xl text-2xl edit-btn'>Edit Profile</button>
            <Link to='/newpost' className='bg-white p-1 rounded-2xl text-2xl post-btn'>New Memory</Link>
          </div>
          <p className='text-3xl text-center border py-4 mt-4 profile '>Your Memories</p>
      </div>
    </div>
    <div className='wx-100 wy-100 my-48'>
      <p className='text-center text-6xl mb-4 opacity-20 profile'><IoImages/></p>
      <p className='text-center text-5xl opacity-20 profile'>No Memories Yet</p>
    </div>
    </>
  )
}

export default Profile