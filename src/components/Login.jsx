import React from "react";
import Input from "./Input";
function Login(props){
  return (
    <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {props.condition ===false ? (<Input type= "password" placeholder = "confirm-password" />):null}
        <button type="submit">{props.condition === true ? "Login" : "Register"}</button>
        
      </form>
  )
}
export default Login;