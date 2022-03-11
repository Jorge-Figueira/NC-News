import { UserContext } from "./UserContext";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


export default function User() {
    const [imputUser, setImputUser] = useState("")
    const {setUser} = useContext(UserContext)
    const navigate = useNavigate();
    return (
    <section>
    <Link to= "/"><p>Home</p></Link>
    <form onSubmit= {(e)=> {
        e.preventDefault()
        setUser(imputUser)
        navigate("/")}}>
        <legend>Enter your Username</legend>
        <input
          className="User__Input"
          type="text"
          value={imputUser}
          onChange= {(e) =>{
              
              setImputUser(e.target.value)}}                
        />
        <button type="submit">Submit</button>
    </form>
    </section>
    )
}