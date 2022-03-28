// import axios from 'axios'
// import { createMessage, returnErrors } from './messages'
// import { GET_POSTS, DELETE_POST, ADD_POST} from './types'

// //Get Posts
// export const getPosts = () => dispatch => {
//     axios
//     .get('https://remember-memories-database.herokuapp.com/api/posts')
//     .then(response => {
//         dispatch({
//             type: GET_POSTS,
//             payload: response.data
//         })
//     })
//     .catch(error => dispatch(
//         returnErrors(error.response.data, error.response.status)))
// }

// //Delete Post
// export const deletePost = id => dispatch => {
//     axios
//     .delete(`https://remember-memories-database.herokuapp.com/api/posts/${id}`)
//     .then(response => {
//         dispatch(createMessage({deletePost: 'Post Deleted'}))
//         dispatch({
//             type: DELETE_POST,
//             payload: id
//         })
//     })
//     .catch(error => console.log(error))
// }

// //Add Post
// export const addPost = post => dispatch => {
//     axios
//     .post('https://remember-memories-database.herokuapp.com/api/posts/', post)
//     .then(response => {
//         dispatch(createMessage({ addPost: "Post Added"}))
//         dispatch({
//             type: ADD_POST,
//             payload: response.data
//         })
//     })
//     .catch(error => dispatch(
//         returnErrors(error.response.data, error.response.status)))
//     }
