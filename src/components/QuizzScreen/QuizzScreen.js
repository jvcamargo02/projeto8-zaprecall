import React from 'react';
import Footer from '../footer/Footer'
import FlashCard from '../Flashcard/Flashcard'
import './quizz-screen-style.css'



export default function QuizzScreen({setInitScreen, goals, flashCards,  setIsChoicenDeck}) {

    const [answered, setAnswered] = React.useState(0)
    const [footerIcons, setFooterIcons] = React.useState([])
    const [zap, setZap] = React.useState(0)

    return (
        <div className="quizz-screen">
            <Header />
            {flashCards.map((flashCard, index) => <FlashCard key={index} index={index} visible={flashCard.isVisible} question={flashCard.question} answer={flashCard.answer} footerNum={answered} refreshFooter={setAnswered} footerIcons={footerIcons} setFooterIcons={setFooterIcons} setZap={setZap} zap={zap} />)}
            <Footer numQuestions={flashCards.length} answered={answered} footerIcons={footerIcons} setInitScreen={setInitScreen} goals={goals} zap={zap}  setIsChoicenDeck={setIsChoicenDeck}/>
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