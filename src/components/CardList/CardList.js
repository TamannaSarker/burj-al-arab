import React from 'react';
import './CardList.css'
import image from '../../images/Double.png'

function CardList  (props)  {
    return (
        
        <div className="card">
           <img src={image} alt="" />
           <h2>{props.name}</h2>
           <p>{props.description}</p>
           <div className="display">
              <button>Boka</button>
              <h5>{props.price}</h5>
           </div>
        
        </div>
            
    
    );
};

export default CardList;