import type { FC } from "react";
import { Quastions } from "./Quastions";

interface ResultProps{
 correct:number
 onRestart:()=>void   
}

export const Result:FC<ResultProps> = ({correct,onRestart}) => {
    return(
        <div>
           <img src="" alt="" />
           <h2>Вы выбрали {correct} правельных ответа из {Quastions.length}</h2>
           <button onClick={onRestart}>Заново</button>
        </div>
    )
}