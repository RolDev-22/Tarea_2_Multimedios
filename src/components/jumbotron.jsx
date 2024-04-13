import React from "react";
import '../style/style.jumbotron.css';

export default function Jumbotron(){
    return(
        <div className="containerJumbotron">
            <h1>Jumbotron component</h1>
            <h2 style={{textAlign:'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum est consequuntur, ab ipsum facilis voluptatibus iusto velit mollitia, ea soluta error minus explicabo sunt exercitationem unde itaque esse porro pariatur?</h2>
            <button className="buttonJumbotron">Learm More</button>
        </div>
    );
}