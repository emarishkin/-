import type { FC } from "react";

import styles from "../Qviz/style/Result.module.css";

interface ResultProps {
    correct: number,
    total: number,
    onRestart: () => void
}

export const Result: FC<ResultProps> = ({ correct, total, onRestart }) => {
    return (
        <div className={styles.resultContainer}>
           <img 
             className={styles.resultImage} 
             src="https://example.com/quiz-complete.png" 
             alt="Quiz complete" 
           />
           <h2 className={styles.resultTitle}>
             Вы ответили правильно на {correct} из {total}
           </h2>
           <button 
             className={styles.restartButton}
             onClick={onRestart}
           >
             Пройти еще раз
           </button>
        </div>
    );
};