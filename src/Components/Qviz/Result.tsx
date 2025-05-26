import type { FC } from "react";

interface ResultProps{
    
}

export const Result:FC<ResultProps> = () => {
    return(
        <div>
           <img src="" alt="" />
           <h2>Вы выбрали 3 правельных ответа из 4</h2>
           <button>Заново</button>
        </div>
    )
}