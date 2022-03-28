import  { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from "./components/Profile";
import Discover from './components/Discover';
import Login from './components/Login';
import Register from './components/Register';
import NewPost from './components/NewPost';
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return(
    <>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/newpost' element={<NewPost />} />
            <Route path='/discover' element={<Discover />} />
          </Routes>
        </Router>
      </Provider>
    </>
  )
}
export default App;
