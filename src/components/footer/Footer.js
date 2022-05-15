export default function Footer({ numQuestions, answered, footerIcons }) {
    console.log(footerIcons)

    if(footerIcons.length === 0) {
        return(
            <footer>
                <p>{answered}/{numQuestions} CONCLUÍDOS</p>
            </footer> 
        )
    } else if (numQuestions === answered && footerIcons.includes("close-circle")) {
        return (
            <footer>
                <p className='footer-title'>😢 Putz...</p>
                <p className='footer-text'>Ainda faltam alguns... Mas não desanime!</p>
                <p>{answered}/{numQuestions} CONCLUÍDOS</p>
                <div className='icons'>
                    {footerIcons.map((footerIcon) => <ion-icon name={footerIcon}></ion-icon>)}
                </div>
            </footer>
        )
    } else if (numQuestions === answered) {
        return(
            <footer>
                <p className='footer-title'>🥳 Parabéns!</p>
                <p className='footer-text'>Você não esqueceu de nenhum flashcard!</p>
                <p>{answered}/{numQuestions} CONCLUÍDOS</p>
                <div className='icons'>
                    {footerIcons.map((footerIcon) => <ion-icon name={footerIcon}></ion-icon>)}
                </div>
            </footer>
    )} else {
        return(
            <footer>
                <p>{answered}/{numQuestions} CONCLUÍDOS</p>
                <div className='icons'>
                    {footerIcons.map((footerIcon) => <ion-icon name={footerIcon}></ion-icon>)}
                </div>
            </footer>
        )
    }
}