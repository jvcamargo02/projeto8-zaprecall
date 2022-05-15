import React from "react"
import './assets/styles/reset.css'
import './assets/styles/style.css'
import QuizzScreen from "./components/QuizzScreen/QuizzScreen"
import StartScreen from "./components/StartScreen/StartScreen"

export default function App (){

    const [initScreen, setInitScreen] = React.useState("startScreen")

    return(
        <>
            {initScreen === "startScreen" ? <StartScreen setInitScreen={setInitScreen}/> : <QuizzScreen setInitScreen={setInitScreen}/>}
        </>
    )
}