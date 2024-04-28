import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Home from './Pages/Home';
import {Routes,Route,Router , Navigate} from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./Context/AuthContex.jsx";

function App() {

  const {authuser} = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element = {authuser?<Home/>:<Navigate to = "/login"/>}/>
        <Route path="/login" element = {authuser?<Navigate to="/"/>:<Login/>}/>
        <Route path="signUp" element = {authuser?<Navigate to="/"/>:<SignUp/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
