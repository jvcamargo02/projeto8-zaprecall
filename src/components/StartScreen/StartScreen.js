import React from "react"
import './style.css'

export default function StartScreen ({setInitScreen}) {
    return (
        <div className="InitScreen">  
            <img src='https://imagensemoldes.com.br/wp-content/uploads/2020/04/Imagem-Raio-PNG.png' alt="Imagem logo"/>
            <h1>ZapRecall</h1>
            <button onClick={() => setInitScreen("tchau")}>Iniciar Recall!</button>
        </div>
    )
}