import React from 'react'

const Login = () => {
  return (
      <>
    <div className='main-container flex justify-center align-center'>
            <div className='sign-up'>
                <div className='sign-container'>
                    <h3 className='text-5xl'>Memories</h3>
                        <form>
                            <input className='input' type='email' placeholder='Email'/>
                            <input className='input' type='password' placeholder='Password' />
                            <p className='details'>Forgot password? <span className='underline'>Reset Password</span></p>
                            <button className='submit' type='submit'>Log In</button>
                            <p className='details'>Don't have an account? <span className='underline'>Sign Up</span></p>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Login