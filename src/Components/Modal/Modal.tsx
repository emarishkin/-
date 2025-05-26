import type { FC } from "react";

interface ModalProps{
closeModal:()=>void
}

export const Modal:FC<ModalProps> = ({closeModal}) => {
    return(
        <div style={{width:1000,height:200,border:'2px solid black',backgroundColor:'red'}}>
            <img style={{width:1000,height:200}} src="https://gamemag.ru/images/cache/News/News177754/02b3b0eeae-2_2780x1200.jpg" alt="" />
            <button onClick={closeModal}>Закрыть окно</button>
        </div>
    )
}