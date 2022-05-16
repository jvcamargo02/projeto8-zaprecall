import React from "react"
import './assets/styles/reset.css'
import './assets/styles/style.css'
import QuizzScreen from "./components/QuizzScreen/QuizzScreen"
import StartScreen from "./components/StartScreen/StartScreen"

export default function App (){

    const [initScreen, setInitScreen] = React.useState("startScreen")
    const [isChoicenDeck, setIsChoicenDeck] = React.useState(false)
    const [goals, setGoals] = React.useState(0)
    
    const deck1 = [{
        question: 'O que é JSX?',
        answer: 'Uma extensão de linguagem do JavaScript',
        isVisible: false
    }, {
        question: 'O React é __',
        answer: 'uma biblioteca JavaScript para construção de interfaces',
        isVisible: false
    }, {
        question: 'Componentes devem iniciar com __',
        answer: 'letra maiúscula',
        isVisible: false
    }, {
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões',
        isVisible: false
    }, {
        question: 'O ReactDOM nos ajuda __ ',
        answer: 'interagindo com a DOM para colocar componentes React na mesma',
        isVisible: false
    }, {
        question: 'Usamos o npm para __',
        answer: 'gerenciar os pacotes necessários e suas dependências',
        isVisible: false
    }, {
        question: 'Usamos props para __ ',
        answer: 'passar diferentes informações para componentes ',
        isVisible: false
    }, {
        question: 'Usamos estado (state) para __',
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
        isVisible: false
    }]

    const deck2 = [{
        question: 'Qual o nome do nosso professor?',
        answer: 'Lêlê',
        isVisible: false
    }, {
        question: 'Qual a tutora do grupo 11?',
        answer: 'Andrezza',
        isVisible: false
    }, {
        question: 'Quem é a professora de soft-skills?',
        answer: 'Marina',
        isVisible: false
    }, {
        question: 'Quantos projetos já foram feitos com esse?',
        answer: '8',
        isVisible: false
    }]

    function shuffle() {
        deck2.sort(comparador)
    }

    function comparador() {
        return Math.random() - 0.5;
    }
    shuffle()

    

    return(
        <>
            {initScreen === "startScreen" ? <StartScreen setInitScreen={setInitScreen} setIsChoicenDeck={setIsChoicenDeck} isChoicenDeck={isChoicenDeck} setGoals={setGoals} deck1={deck1} deck2={deck2}/> : <QuizzScreen setInitScreen={setInitScreen} goals={goals} flashCards={isChoicenDeck === 'react' ? deck1 : deck2}/>}
        </>
    )
}