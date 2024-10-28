import React, {useState} from "react";

const Semaforo = () => {
    const [color, setColor] = useState("");

    const changeColor = (colorActual) => {
        setColor(colorActual)
    }
    return(

        <>
            <div className="trafficTop d-flex justify-content-center">
                <div className="semaforo justify-content-center">
                    <div  onClick={()=> changeColor ("red")} className={`red-ligth ${color === "red" ? "selected" :""}`}></div>
                    <div onClick={()=> changeColor ("yellow")} className={`yellow-ligth ${color === "yellow" ? "selected" :""}`}></div>
                    <div onClick={()=> changeColor ("green")} className={`green-ligth ${color === "green" ? "selected" :""}`}></div>
                </div>
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="post" />
            </div>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="base border border-secondary" />
            </div>

        </>


        
    )
}

export default Semaforo;