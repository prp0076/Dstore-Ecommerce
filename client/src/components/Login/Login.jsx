import React ,{useState} from "react"
import "./Login.scss"
import {    MdClose } from "react-icons/md";
export const  Login =({setShowLog}) =>{
    const [email , setEmail] = useState("");
    const [pass , setPass] = useState("");
    const [number , setNumber] = useState("");
    const [name , setName] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        let mess= "Hey! "+ name + " visit dstore";
        alert("Login Successful")
        alert(mess)
        for(let i=0;i<100000000;i++){

        }
        setShowLog(false)
    }
    return (
        <>
        <div className="form-modal">
        
        <form action="" onSubmit={handleSubmit} className="form-field">
            <label>Full Name</label>
            <input type="text" name="fullName" required value={name} placeholder="Enter your name"  onChange={(e)=>( setName(e.target.value))} />
            <label htmlFor="email" >Email</label>
            <input type="email" value={email}  onChange={(e)=>( setEmail(e.target.value))} placeholder="Email Address" id="email" name="email" autoComplete="off" required/>
            <label htmlFor="password" >Password</label>
            <input type="password" value={pass} onChange={(e)=>( setPass(e.target.value))} placeholder="Enter your password" id="passsword" name="password" required/>
            <label>Phone Number</label>
            <input type="tel" name="phoneNumber" pattern="[0-9]{10}" value={number} onChange={(e)=>( setNumber(e.target.value))} required placeholder="Enter your contact number" />
            <button type="submit">Log In</button>
        </form>
        <MdClose onClick={()=>(setShowLog(false))}/>
       
        
        </div>
        
        </>
    )
}