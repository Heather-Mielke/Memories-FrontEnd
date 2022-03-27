import React from 'react'
import family from '../images/family3.jpg'

const Register = () => {
  return (
      <>
        <div className='main-container flex justify-center align-center'>
            <div className='sign-up'>
                <div className='sign-container'>
                    <h3 className='text-5xl'>Sign Up</h3>
                        <form>
                            <input className='input' type='text' placeholder='Name' />
                            <input className='input' type='email' placeholder='Email'/>
                            <input className='input' type='password' placeholder='Password' />
                            <p className='details'>By Signing Up I agree to all of the <span>Terms & Conditions</span></p>
                            <button className='submit' type='submit'>Sign Up</button>
                            <p className='details'>Already have an account? <span className='underline'>Login</span></p>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Register