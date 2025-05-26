import type { FC } from "react";
import type { IQuest } from "./QuastionsType";

interface GameProps{
quastion:IQuest
handleClick:()=>void
}

export const Game:FC<GameProps> = ({quastion, handleClick}) => {
    return(
        <div>
           <h2>{quastion.title}</h2>
           <div>
               <ul>
                 {quastion.variants.map((text,index)=>(
                    <li key={index}>
                        {text}
                    </li>
                 ))}
               </ul>
           </div>
           <button onClick={handleClick}>ответить</button>
        </div>
    )
}