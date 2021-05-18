import React from 'react';

const ListConversionRates = props => {
    console.log("list",props.USDINR)
    var rate = null
    let rates = props.USDINR;
    if(rates !== null)
    {
        rate=rates.map((item, key )=> {
            return <p>{key}:{item} </p>;
        });
    }
     
  
  

  return <div>{rate}</div>;
};

export default ListConversionRates;