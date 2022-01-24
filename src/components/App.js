import React, { useState } from 'react';
import frases from '../quotes.json';
import { Quotes } from '../components/Quotes';

import '../Styles/App.css';

export const App = () => {

    const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F"];
    const [ frase, setFrase ] = useState(frases[getNumber(frases.length)]);
    const [ background, setBackground ] = useState(colors[getNumber(colors.length)]);    

    const handleFrases = () => {
        const index = getNumber(frases.length);
        setFrase(frases[index]);
        setBackground(colors[getNumber(colors.length)]);
    };

    return(
    <div className='App' style={ {background} }>
        <Quotes 
            quote={ frase.quote } 
            author={ frase.author }
            changeFrase={handleFrases}
            color={ background }
        />
    </div>
    );  
};

const getNumber = max => Math.floor(Math.random() * max);


