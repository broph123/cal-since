import React, {useState} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

function ToDo() {
    const [item,setItem] = useState("")
    const [itemList, setItemList] = useState([{task:"Create a Todo", completed:false, id:1}])

    const handleChange = (e) =>{
        setItem(e.target.value)
        
    }
    const addItem = (e) =>{
        e.preventDefault()
        setItem("")
           const newItem = {
                task: item,
                completed: false,
                id: Math.floor(Math.random()*100000)
           }
           setItemList([...itemList,newItem])
    }

    const deleteItem = (e,id) =>{
        e.preventDefault()
        setItemList(itemList.filter(item => item.id !== id))
    }

  const editTask = (e,id) =>{
        e.preventDefault()
        const element = itemList.findIndex((elem)=>elem.id === id)
        const newItemList = [...itemList]
        newItemList[element] = {
            ...newItemList[element],
            completed:true,
        }
        setItemList(newItemList)
        }


   
   
    return (
        <>
        <div className="to-do-list">
           <ul>{itemList.map(item => 
           <p className="tasks" key={item.id}>{item.task}
           <button onClick={(e)=>deleteItem(e,item.id)}>Delete</button>
           </p>)}
           </ul>
        </div> 
        
        <div className="to-do-input">
        <form onSubmit={(e)=>addItem(e)}>
        <input type="text" placeholder="What are we working on today" value={item} onChange={handleChange} />
        </form> 
        </div>
           
            
           
            
        
        </>
    )
}

export default ToDo
