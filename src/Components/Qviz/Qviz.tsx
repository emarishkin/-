import { useState, type FC } from "react";
import { Game } from "./Game";
import { Result } from "./Result";
import { Quastions } from "./Quastions";

interface QvizProps{

}

export const Qviz:FC<QvizProps> = () => {

const [step,setStep] = useState<number>(0)
const quastion = Quastions[step]
const [correct,setCorrect] = useState<number>(0)

const handleClick = (index:number) => {
    console.log(step,index)
    setStep(step+1)

    if(index === quastion.correct){
        setCorrect(correct+1)
    }
}

 const resetQuiz = () => {
        setStep(0);
        setCorrect(0);
    };

    return(
        <section>
            <div>
                {step < Quastions.length ? (
                    <Game quastion={quastion} handleClick={handleClick} />
                ) : (
                    <Result correct={correct} total={Quastions.length}  onRestart={resetQuiz} />
                )}
            </div>
        </section>
    )
}