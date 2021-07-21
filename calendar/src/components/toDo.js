import React, {useState} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

function toDo() {
    const [item,setItem] = useState("")
    const itemList, setItemList = useLocalStorage([])
    
    return (
        <div>
            
        </div>
    )
}

export default toDo
