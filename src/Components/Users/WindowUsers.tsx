import { useEffect, useState, type FC } from "react";
import { Users } from "./Users";
import type { IUser } from "./Types";

interface WindowUseresProps{

}

export const WindowUseres:FC<WindowUseresProps> = () => {

const [users,setUsers] = useState<IUser[]>([])

useEffect(()=>{
 fetch('https://fakestoreapi.in/api/users?_limit=10').then(res=>res.json()).then(json=>{
    setUsers(json.users)
 }).catch(err=>{
    alert(err)
 })
},[])

    return(
        <div>
           <Users items={users} />
        </div>
    )
}