import React from 'react';
import { Link} from 'react-router-dom';
import './Form.css'



function Form () {

      
    return (
       <div className="form-container">
           
          
           <h1>
               Registration
           </h1>
           <form action="">
               <div>
               <label htmlFor="name">Name:</label>
               <input type="text" name="name" id="name" placeholder="type your name" required />
               </div>
               <div>
               <label htmlFor="email">Email:</label>
               <input type="text" name="email" id="email" placeholder="type your email" required />
               </div>
               <div>
               <label htmlFor="name">Time:</label>
               <input type="number" name="time" id="time" required />
               </div>
               <div>
                <Link to="/confirmation">
                <button>Confirm</button>
                </Link>
               
               </div>

           </form>
       </div>
    );
};

export default Form;