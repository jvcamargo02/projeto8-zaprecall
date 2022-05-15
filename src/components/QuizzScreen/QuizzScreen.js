import React from 'react';
import './style.css'
import revertImg from '../../assets/images/Vector.png'

export default function QuizzScreen () {

    const flashCards =  [{
        question: 'O que é JSX?',
        answer: 'Uma extensão de linguagem do JavaScript',
        isVisible: false
        },{
        question: 'O React é __',
        answer: 'uma biblioteca JavaScript para construção de interfaces',
        isVisible: false
        },{
        question: 'Componentes devem iniciar com __',
        answer: 'letra maiúscula',
        isVisible: false
        },{
        question: 'Podemos colocar __ dentro do JSX',
        answer: 'expressões',
        isVisible: false
        },{
        question: 'O ReactDOM nos ajuda __ ',
        answer: 'interagindo com a DOM para colocar componentes React na mesma',
        isVisible: false
        },{
        question: 'Usamos o npm para __',
        answer: 'gerenciar os pacotes necessários e suas dependências',
        isVisible: false
        },{
        question: 'Usamos props para __ ',
        answer: 'passar diferentes informações para componentes ',
        isVisible: false
        },{
        question: 'Usamos estado (state) para __',
        answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
        isVisible: false
        }]

        function shuffle () {
            flashCards.sort(comparador)
            
        }

        function comparador() {
            return Math.random() - 0.5;
        }

        const [answered, setAnswered] = React.useState(0)

        shuffle()
 
    return(
        <div className="quizz-screen">
            <Header />
            {flashCards.map((flashCard,index) => <RenderFlashCard key={index} index={index} visible={flashCard.isVisible} question={flashCard.question} answer={flashCard.answer} footerNum={answered} refreshFooter={setAnswered}/>)}
            <Footer numQuestions={flashCards.length} answered={answered}/>
        </div>
    )
}


function Header (){
    return(
        <header>
            <img src="https://imagensemoldes.com.br/wp-content/uploads/2020/04/Imagem-Raio-PNG.png" alt="Logo"/>
            <h1 className="logo-name">ZapRecall</h1>
        </header>
        
    )
}

function Footer ({numQuestions, answered}){
    return(
        <footer>
            {answered}/{numQuestions} CONCLUÍDOS
        </footer>
    )
}


function RenderFlashCard ({index, visible, question, answer, footerNum, refreshFooter}) {

    const [isVisible, setIsVisible] = React.useState(visible)
    const [status, setStatus] = React.useState('flashcard')
    const [ionicon, setIonicon] = React.useState('play-outline')

    function answered (props) {
        setIsVisible(false)
        refreshFooter(footerNum + 1)

        if(props === 'zap') {
            setStatus('flashcard zap')
            setIonicon('checkmark-circle')
        } else if (props === 'middle') {
            setStatus('flashcard middle')
            setIonicon('help-circle')
        } else {
            setStatus('flashcard wrong')
            setIonicon('close-circle')
        }
        
    }


    if(isVisible === false && status === 'flashcard') {
        return(
                <div onClick={() => setIsVisible("question")} className={status}>
                    <p>Pergunta {index + 1}</p>
                    <ion-icon name={ionicon}></ion-icon>
                </div> 
        )
    } else if(isVisible === false) {
        return(
            <div className={status}>
                <p>Pergunta {index + 1}</p>
                <ion-icon name={ionicon}></ion-icon>
            </div> 
        )
    } else if (isVisible === "question") {
        return(
            <div className='flashcard open'>
                <p >{question}</p>
                <img onClick={() => setIsVisible("answer")} src={revertImg} />
            </div>
            
        )
    } else if (isVisible === "answer") {
        return(
            <div className='flashcard open answer'>
                <p>{answer}</p>
                <div className='zap-btns'>
                    <button onClick={() => answered('wrong')} className='wrong-btn'>Não lembrei</button>
                    <button onClick={() => answered('middle')} className='middle-btn'>Quase não lembrei</button>
                    <button onClick={() => answered('zap')} className='right-btn'>Zap!</button>
                </div>
            </div>
        )
    }
}