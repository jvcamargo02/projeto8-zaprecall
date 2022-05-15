import React from 'react'
import revertImg from '../../assets/images/Vector.png'

export default function FlashCard({ index, visible, question, answer, footerNum, refreshFooter, footerIcons, setFooterIcons }) {

    const [isVisible, setIsVisible] = React.useState(visible)
    const [status, setStatus] = React.useState('flashcard')
    const [ionicon, setIonicon] = React.useState('play-outline')

    function answered(props) {
        setIsVisible(false)
        refreshFooter(footerNum + 1)

        if (props === 'zap') {
            setStatus('flashcard zap')
            setIonicon('checkmark-circle')
            const footer = [...footerIcons, 'checkmark-circle']
            setFooterIcons(footer)
        } else if (props === 'middle') {
            setStatus('flashcard middle')
            setIonicon('help-circle')
            const footer = [...footerIcons, 'help-circle']
            setFooterIcons(footer)
        } else {
            setStatus('flashcard wrong')
            setIonicon('close-circle')
            const footer = [...footerIcons, 'close-circle']
            setFooterIcons(footer)
        }

    }


    if (isVisible === false && status === 'flashcard') {
        return (
            <div onClick={() => setIsVisible("question")} className={status}>
                <p>Pergunta {index + 1}</p>
                <ion-icon name={ionicon}></ion-icon>
            </div>
        )
    } else if (isVisible === false) {
        return (
            <div className={status}>
                <p>Pergunta {index + 1}</p>
                <ion-icon name={ionicon}></ion-icon>
            </div>
        )
    } else if (isVisible === "question") {
        return (
            <div className='flashcard open'>
                <p >{question}</p>
                <img onClick={() => setIsVisible("answer")} src={revertImg} alt="Revert Card"/>
            </div>

        )
    } else if (isVisible === "answer") {
        return (
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