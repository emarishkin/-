import type { FC } from "react";

interface ModalProps{
closeModal:()=>void
}

export const Modal:FC<ModalProps> = ({closeModal}) => {
    return(
        <div>
            <img src="" alt="" />
            <button onClick={closeModal}>Закрыть окно</button>
        </div>
    )
}