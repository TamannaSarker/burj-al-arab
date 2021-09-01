import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import './Form.css'




function Form () {
    const [user, setUser] = useState({
        name: "",
        email: "",
        time: "",
      });
    
      const { name, email, time } = user;
    
      const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        console.log(user);
        e.preventDefault();


        history.push("/confirm")
      };
    const history = useHistory()


    

    return (
       <> 
       <div className="form-container">
           
          
           <h1>
               Registration
           </h1>
           
           <form onSubmit={handleSubmit} action="">
               <div>
               <label htmlFor="name">Name:</label>
               <input onChange={handleChange} value={name} type="text" name="name" id="name" placeholder="type your name" required />
               </div>
               <div>
               <label htmlFor="email">Email:</label>
               <input onChange={handleChange} value={email} type="text" name="email" id="email" placeholder="type your email" />
               </div>
               <div>
               <label htmlFor="name">Time:</label>
               <input onChange={handleChange} value={time} type="number" name="time" id="time" required />
               </div>
               <div>
                
                <button>Confirm</button>
               
               
               </div>

           </form>
           
       </div>
       
       </>
    );
};

export default Form;