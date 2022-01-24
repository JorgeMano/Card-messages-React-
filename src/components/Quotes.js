import React from 'react';

export const Quotes = ({ quote, author, changeFrase, color }) => {

    return(
      <div className='frase' >  
        <h3 style={ {color} } > { quote } </h3>
        <h3 style={ {color} } > Author: { author } </h3>
        
        <button className='random' onClick={ changeFrase } style={ {color} } ><i className="fas fa-angle-double-right"></i></button>
      </div>  
    );

};
