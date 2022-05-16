import './footer-style.css'

export default function Footer({ numQuestions, answered, footerIcons, setInitScreen, goals, zap,  setIsChoicenDeck }) {

    function reset () {
        setInitScreen("startScreen")
        setIsChoicenDeck(false)
    }

    if(footerIcons.length === 0) {
        return(
            <footer>
                <p>{answered}/{numQuestions} CONCLUÍDOS</p>
            </footer> 
        )
    } else if (numQuestions === answered &&  zap < goals) {
        return (
            <footer>
                <p className='footer-title'>😢 Putz...</p>
                <p className='footer-text'>Ainda faltam alguns... Mas não desanime!</p>
                <p>{answered}/{numQuestions} CONCLUÍDOS</p>
                <div className='icons'>
                    {footerIcons.map((footerIcon, index) => <ion-icon key={index} name={footerIcon}></ion-icon>)}
                </div>
                <button onClick={reset}>Reiniciar Recall</button>
            </footer>
        )
    } else if (numQuestions === answered &&  zap >= goals) {
        return(
            <footer>
                <p className='footer-title'>🥳 Parabéns!</p>
                <p className='footer-text'>Você não esqueceu de nenhum flashcard!</p>
                <p>{answered}/{numQuestions} CONCLUÍDOS</p>
                <div className='icons'>
                    {footerIcons.map((footerIcon, index) => <ion-icon key={index} name={footerIcon}></ion-icon>)}
                </div>
                <button onClick={reset}>Reiniciar Recall</button>
            </footer>
    )} else {
        return(
            <footer>
                <p>{answered}/{numQuestions} CONCLUÍDOS</p>
                <div className='icons'>
                    {footerIcons.map((footerIcon, index) => <ion-icon key={index} name={footerIcon}></ion-icon>)}
                </div>
            </footer>
        )
    }
}