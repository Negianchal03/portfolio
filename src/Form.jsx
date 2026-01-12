import { useState } from "react";
import { DiVim } from "react-icons/di";

function Form(){


    const[data,setData]=useState({
        name:"",
        email:"",
        phone:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(data.name.length>10||data.name.length<=2){
            alert("name is too long");
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
             {/*name*/}
             <label htmlFor="name">Name</label> 
             <input
             required
             type="text"
             name="name"
             value={data.name}
             onChange={(e)=>{
                setData({...data,name:e.target.value});
             }} />  

             <br />

             {/*email*/}
             <label htmlFor="email">Email</label> 
             <input
             required
             type="email"
             name="email"
             value={data.email}
             onChange={(e)=>{
                setData({...data,email:e.target.value});
             }} />  

             <br />

            </form>
        </div>
    )
}

export default Form