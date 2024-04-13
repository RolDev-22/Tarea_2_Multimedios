import React, { useState } from "react";
import "../style/style.cards.css";

export default function Cards() {

  return (
    <div className="containerCards">
      <div className="row">
        <div className="cards">
            <h1>Card 1</h1>
            
            <button className="buttonCard">Mas</button>
        </div>
        <div className="cards">
            <h1>Card 2</h1>
            <button className="buttonCard">Mas</button>
        </div>
        <div className="cards">
            <h1>Card 3</h1>
            <button className="buttonCard">Mas</button>
        </div>
        <div className="cards">
            <h1>Card 4</h1>
            <button className="buttonCard">Mas</button>
        </div>
        
      </div>

      <div className="row">
        <div className="cards">
            <h1>Card 5</h1>
            <button className="buttonCard">Mas</button>
        </div>
        <div className="cards">
            <h1>Card 6</h1>
            <button className="buttonCard">Mas</button>
        </div>
        <div className="cards">
            <h1>Card 7</h1>
            <button className="buttonCard">Mas</button>
        </div>
        <div className="cards">
            <h1>Card 8</h1>
            <button className="buttonCard">Mas</button>
        </div>

      </div>
    </div>
  );
}
