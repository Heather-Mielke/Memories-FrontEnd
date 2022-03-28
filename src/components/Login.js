import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'


const Login = () => {
//    const [formData, setFormData] = useState({
//        email: '',
//        password: ''
//    })
//    const {email, password} = formData

//    const onChange = event => setFormData({...formData, [event.target.name]: event.target.value})
   
//    const onSubmit = event => {
//        event.preventDefault()
//        // login(Email, passowrd)
//    }
  return (
      <>
    <div className='main-container flex justify-center align-center'>
            <div className='sign-up'>
                <div className='sign-container'>
                    <h3 className='text-5xl'>Memories</h3>
                        <form >
                            <input className='input' type='email' placeholder='Email' name='email' 
                           required/>
                            <input className='input' type='password' placeholder='Password' 
                            minLength='5' required />
                            <p className='details'>Forgot password? <Link to='/reset-password' className='underline span'>Reset Password</Link></p>
                            <button className='submit' type='submit'>Log In</button>
                            <p className='details'>Don't have an account? <Link to='/register' className='underline span'>Sign Up</Link></p>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

// const mapStateToProps = state => ({
//     //is authenticated
// })

export default Login