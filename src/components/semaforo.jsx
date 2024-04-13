import React, { useState } from "react";
import '../style/style.semaforo.css'

export default function Semaforo(){

    const [buttonGreen, setButtonGreen] = useState(''); 
    const [buttonYellow, setButtonYellow] = useState(''); 
    const [buttonRed, setButtonRed] = useState(''); 

    function cambio_Btn_Green(){
        if(buttonGreen.valueOf !== '#1aff00'){
            setButtonGreen('#1aff00');
            setButtonYellow('');
            setButtonRed('');
        }
    }
    function cambio_Btn_Yellow(){
        if(buttonYellow.valueOf !== 'yellow'){
            setButtonGreen('');
            setButtonYellow('yellow');
            setButtonRed('');
        }
    }
    function cambio_Btn_Red(){
        if(buttonRed.valueOf !== 'red'){
            setButtonRed('red');
            setButtonYellow('');
            setButtonGreen('');
        }
    }

    return(
        <div className="container">
            <button onClick={cambio_Btn_Green} className="light-Sem" id="btn-green" style={{backgroundColor:buttonGreen}}></button>
            <button onClick={cambio_Btn_Yellow} className="light-Sem" id="btn-yellow" style={{backgroundColor:buttonYellow}}></button>
            <button onClick={cambio_Btn_Red} className="light-Sem" id="btn-red" style={{backgroundColor:buttonRed}}></button>
        </div>
    )
}