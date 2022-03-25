import  { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import Profile from "./components/Profile";
import Discover from "./components/Discover";

const App = () => {
  return(
    <>
     <Router>
       <Navbar />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/discover' element={<Discover />} />
         </Routes>
      </Router>
    </>
  )
}
export default App;
