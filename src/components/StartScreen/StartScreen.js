import React from "react"
import './start-screen-style.css'


export default function StartScreen ({setInitScreen, setIsChoicenDeck, isChoicenDeck, setGoals, deck1, deck2}){

    function refresh (goalsVal) {
        setGoals(goalsVal)
        setInitScreen("QuizzScreen")
    }
    class Form extends React.Component {
    constructor(){
        super()
        this.state={
            value: "",
            select:""
        }
        
    }
     
    handleChange = (event) => { 
        this.setState({value: event.target.value})
}
    handleChangeForm = (event) => { 
        this.setState({select: event.target.value})
        setIsChoicenDeck(event.target.value)
    }

    render() {
        if(isChoicenDeck === false){
            return(
                <>
                <select className="input" value={this.state.select} onChange={this.handleChangeForm}>
                    <option value="" disabled selected>Escolha seu deck</option>
                    <option value="react">React</option>
                    <option value="deck2">Deck 2</option>
                </select>
                <button className="disabled">Iniciar Recall!</button> 
                </>
            )
            
        } else if (this.state.value >= 1 && (isChoicenDeck === 'react' ? this.state.value <= deck1.length : this.state.value <= deck2.length)){
            return( 
            <>   
            <input className="input" placeholder="Digite sua meta de zaps..." type="number" min="1" value={this.state.value} onChange={this.handleChange}/>
            <button onClick={() => refresh(this.state.value)}>Iniciar Recall!</button> 
            </>)
            } else {
            return(
            <>
            <input className="input" placeholder="Digite sua meta de zaps..." type="number" min="1" value={this.state.value} onChange={this.handleChange}/>
            <button className="disabled">Iniciar Recall!</button> 
            </>)
        }
    } 
}

    return(
            <div className="init-screen">  
            <img src='https://imagensemoldes.com.br/wp-content/uploads/2020/04/Imagem-Raio-PNG.png' alt="Logo"/>
            <h1 className="logo-name">ZapRecall</h1>
            <Form />
            </div>
    )
}