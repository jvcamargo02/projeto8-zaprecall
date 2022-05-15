import React from "react"
import './style.css'

export default function StartScreen ({setInitScreen}) {
    return (
        <div className="init-screen">  
            <img src='https://imagensemoldes.com.br/wp-content/uploads/2020/04/Imagem-Raio-PNG.png' alt="Logo"/>
            <h1 className="logo-name">ZapRecall</h1>
            <button onClick={() => setInitScreen("QuizzScreen")}>Iniciar Recall!</button>
        </div>
    )
}