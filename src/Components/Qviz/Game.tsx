import type { FC } from "react";
import type { IQuest } from "./QuastionsType";

interface GameProps{
quastion:IQuest
handleClick:(index:number)=>void
}

export const Game:FC<GameProps> = ({quastion, handleClick}) => {
    return(
        <div>
           <h2>{quastion.title}</h2>
           <div>
               <ul>
                 {quastion.variants.map((text,index)=>(
                    <li onClick={()=>handleClick(index)} key={text}>
                        {text}
                    </li>
                 ))}
               </ul>
           </div>
        </div>
    )
}