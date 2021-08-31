import React from 'react';
import CardList from '../CardList/CardList';

function Card  (){
    const service = [{name:'Apartment in Lost Panorama', description:'4 guests 2 bedrooms 2 beds 2 baths. Wif Air conditioning Kitchen. Cancellation flexibility available ',
    price:'200sek'}]
    return (
        <div>
             <CardList name={service[0].name} description={service[0].description} price={service
               [0].price}></CardList>
             
        </div>
    );
};

export default Card;