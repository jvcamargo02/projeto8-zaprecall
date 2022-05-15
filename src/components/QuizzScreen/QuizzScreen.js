import React from 'react';
import Footer from '../footer/Footer'
import FlashCard from '../Flashcard/Flashcard'
import './style.css'



export default function QuizzScreen({setInitScreen}) {

    const flashCards = [{
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

    function shuffle() {
        flashCards.sort(comparador)

    }

    function comparador() {
        return Math.random() - 0.5;
    }

    const [answered, setAnswered] = React.useState(0)
    const [footerIcons, setFooterIcons] = React.useState([])
    shuffle()

    return (
        <div className="quizz-screen">
            <Header />
            {flashCards.map((flashCard, index) => <FlashCard key={index} index={index} visible={flashCard.isVisible} question={flashCard.question} answer={flashCard.answer} footerNum={answered} refreshFooter={setAnswered} footerIcons={footerIcons} setFooterIcons={setFooterIcons} />)}
            <Footer numQuestions={flashCards.length} answered={answered} footerIcons={footerIcons} setInitScreen={setInitScreen}/>
        </div>
    )
}


function Header() {
    return (
        <header>
            <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Imagem-Raio-PNG.png" alt="Logo" />
            <h1 className="logo-name">ZapRecall</h1>
        </header>

    )
}