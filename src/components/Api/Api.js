import React from 'react';
import axios from 'axios';


const Api = () => {

   
         async function  fetchData  (){

            const response =  await  axios.get('https://jsonplaceholder.typicode.com/todos/1')
            console.log(response.data)
           
         }

     return (
        <> 
           <h1>Hello API!</h1>
           <button onClick= {fetchData}>Click Here</button>
        </>
    );
};

export default Api;