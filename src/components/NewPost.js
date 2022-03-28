import React from 'react'
import axios from 'axios'

const NewPost = () => {

    const makeMemory = (post) => {
        axios.post('https://remember-memories-database.herokuapp.com/api/posts', post).then((response) =>{
          console.log(response)
        })
    
      }  

  return (
      <>
    <div className='text-center mt-16 new-post'>New Memory</div>
    <form className='flex flex-col m-16 post-container' onSubmit={event => {makeMemory(event)}}>
        <input className='m-5 p-2 text-black rounded-3xl' type='text' placeholder='Image http://...' required/>
        <input className='m-5 p-2 text-black rounded-3xl' type='text' placeholder='Caption' required/>
        <textarea className='m-5 py-4 px-2 pb-32 mb-20 text-black rounded-3xl' type='text' placeholder='Description' />
        <button className='  rounded-3xl text-4xl edit-btn w-28 mx-auto mb-80' value='submit'>Post</button>
    </form>
    </>
  )
}

export default NewPost