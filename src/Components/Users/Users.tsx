import type { FC } from "react";
import type { IUser } from "./Types";


interface UsersProps{
    items:IUser[]
}

export const Users:FC<UsersProps> = ({items}) => {
    return(
        <div>
           <ul style={{display:'flex',flexWrap:'wrap',gap:10}}>
            {items.map((item)=>(
                <li style={{border:'1px solid black',marginBottom:20,width:400,height:400,listStyle:'none'}} key={item.id}>
                   <h2>{item.name.firstname}</h2>
                   <h2>{item.name.lastname}</h2>
                   <p>{item.avatar}</p>
                </li>
            ))}
           </ul>
        </div>
    )
}