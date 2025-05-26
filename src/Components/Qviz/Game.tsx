import type { FC } from "react";
import type { IQuest } from "./QuastionsType";
import styles from "../Qviz/style/Game.module.css";

interface GameProps {
    quastion: IQuest,
    handleClick: (index: number) => void
}

export const Game: FC<GameProps> = ({ quastion, handleClick }) => {
    return (
        <div className={styles.container}>
           <h2 className={styles.title}>{quastion.title}</h2>
           <div>
               <ul className={styles.variantsList}>
                 {quastion.variants.map((text, index) => (
                    <li 
                      className={styles.variantItem}
                      onClick={() => handleClick(index)} 
                      key={text}
                    >
                        {text}
                    </li>
                 ))}
               </ul>
           </div>
        </div>
    );
};