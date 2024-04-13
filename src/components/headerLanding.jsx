import React from "react";
import '../style/style.headerlLanding.css';

export default function HeaderLanding(){
    return(
        <div className="containerHeaderLanding">
            <div className="log">Logo</div>
            <ul>
                <li className="links"><a href="#" className="link">Inicio</a></li>
                <li className="links"><a href="#" className="link">Cards</a></li>
                <li className="links"><a href="#" className="link">Footer</a></li>
            </ul>
        </div>
    );
}