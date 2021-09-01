import React from 'react';
import { useHistory } from 'react-router';
import './Form.css'




function Form () {
    const history = useHistory()


    function sendData (){

        history.push("/confirm")
    }

   
    

      
    return (


       <> 
       
         
         
         <div className="form-container">
           
          
         <h1>
             Registration
         </h1>
         <form  onSubmit={sendData} action="">
             <div>
             <label htmlFor="name">Name:</label>
             <input type="text" name="name" id="name" placeholder="type your name" required />
             </div>
             <div>
             <label htmlFor="email">Email:</label>
             <input type="text" name="email" id="email" placeholder="type your email"  />
             </div>
             <div>
             <label htmlFor="time">Time:</label>
             <input type="number" name="time" id="time" required />
             </div>
             <div>
             <label htmlFor="phn-umber">Mobile Number:</label>
             <input type="number" name="phn-number" id="phn-number" />
             </div>
             
            <div>
                <button>Confirmed</button>
            </div>
         </form>
     </div>
     
         
       
       
       </>
    );
};

export default Form;