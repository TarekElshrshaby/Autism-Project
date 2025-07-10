import {  useState } from "react";

export default function useOnline() {
    let [isOnline , setInOnline] = useState(true)
    window.addEventListener("online" , ()=>{
        setInOnline(true)
    })
    window.addEventListener("offline" , ()=>{
        setInOnline(false)
    })

    return isOnline
}