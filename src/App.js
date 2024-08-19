import { Navigate, Outlet,useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import { useState,useEffect } from "react";

function App() {
  const[isLoggedIn, setIsLoggedIn]= useState(false)
const navigate=useNavigate()

const login = () => {
  setIsLoggedIn(true);
}
const logout = () =>{
  setIsLoggedIn(false);
}

useEffect (()=>{
  if(isLoggedIn){
    navigate("/")
  }else{
    navigate("/login")
  };
}, [isLoggedIn])
  return (
    <div className="app">
     {isLoggedIn ? <NavBar logout={logout }/> : <Navigate to ="/login"/>}
      <Outlet login={login} />
    </div>
  );
}

export default App;
