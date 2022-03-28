import React, {useState} from 'react'
import { Navigate, Link } from 'react-router-dom'
import { register } from '../actions/auth'
// import { connect } from 'react-redux'
// import CSRFToken from '../components/CSRFToken'

const Register = ({ register }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        re_password: ''
    })

    const [accountCreated, setAccountCreated] = useState(false)

    const { username, password, re_password} = formData

    const onChange = event => setFormData({...formData, [event.target.name] : event.target.value})

    const onSubmit = event => {
        event.preventDefault()

        if (password === re_password) {
            register(username, password, re_password)
            setAccountCreated(true)
        }
    }

    if (accountCreated)
        return <Navigate to='/login' />

  return (
      <>
        <div className='main-container flex justify-center align-center'>
            <div className='sign-up'>
                <div className='sign-container'>
                    <h3 className='text-5xl'>Sign Up</h3>
                        <form onSubmit={e => onSubmit(e)}>
                       
                            <input 
                            className='input' 
                            type='text' 
                            placeholder='Username' 
                            name='username' 
                            value={username}
                            onChange={e => onChange(e)}
                            required
                            />
                            <input 
                            className='input' 
                            type='password' 
                            placeholder='Password' 
                            name='password' 
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                            />
                            <input 
                            className='input' 
                            type='password' 
                            placeholder='Confirm Password' 
                            name='re_password'
                            onChange={e => onChange(e)}
                            minLength='6'
                            required
                            />
                            <p className='details'>By Signing Up I agree to all of the <span>Terms & Conditions</span></p>
                            <button className='submit' type='submit'>Sign Up</button>
                            <p className='details'>Already have an account? <Link className='underline span' to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Register