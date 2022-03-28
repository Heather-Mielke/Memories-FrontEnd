// import axios from 'axios'
// import Cookies from 'js-cookie'
// import { 
//     REGISTER_SUCCESS,
//     REGISTER_FAIL
// } from './types'

// export const register = (username, password, re_password) => async dispatch => {
//     const config = {
//         Headers: {
//             'Accept' : 'application/json',
//             'Content-Type' : 'application/json',
//             'X-CSRFToken' : Cookies.get('csrftoken')
//         }
//     }
//     const body = JSON.stringify({username, password, re_password})

//     try {
//         const response = await axios.post(`${process.env.REACT_APP_API_URL}/register`, body, config)

//         if (response.data.error) {
//             dispatch({
//                 type: REGISTER_FAIL
//             })
//         } else {
//             dispatch({
//                 type: REGISTER_SUCCESS
//             })
//         }
//     } catch (error) {
//             dispatch({
//                 type: REGISTER_FAIL
//             })
//     }
// }