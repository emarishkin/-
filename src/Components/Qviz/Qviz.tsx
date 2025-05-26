import { useState, type FC } from "react";
import { Game } from "./Game";
import { Result } from "./Result";
import { Quastions } from "./Quastions";

interface QvizProps{

}

export const Qviz:FC<QvizProps> = () => {

const [step,setStep] = useState<number>(0)
const quastion = Quastions[step]

const handleClick = () => {
    setStep(step+1)
}

    return(
        <section>
            <div>
                <Game quastion={quastion} handleClick={handleClick} />
                <Result />
            </div>
        </section>
    )
}