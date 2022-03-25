import React from 'react'
import me from '../board-images/heather.jpeg'

const Profile = () => {
  return (
    <>
    <div className='flex flex-col justify-center align-center'>
      <div className='profile-photo w-32 rounded-full mx-auto mt-28'>
        <img className='w-100 rounded-full'src={me} alt="userPhoto"/>
      </div>
      <div className=' flex flex-col justify-center align-center'>
        <p className='text-4xl text-center'>Name:</p>
        <p className='text-sm text-center'>UserName:</p>
        <div className='profile-buttons flex justify-center align-center my-5'>
            <button className='bg-white p-2 rounded-2xl '>Edit Profile</button>
          </div>
          <p className='text-3xl underline decoration-1 underline-offset-8 text-center'>Your Memories</p>
      </div>
    </div>
    </>
  )
}

export default Profile