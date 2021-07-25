import React, {useState} from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

function ToDo() {
    const [item,setItem] = useState("")
    const [itemList, setItemList] = useState([{task:"GET TO WORK", completed:false, id:1}])

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


    const handleToggle = (e,id) => {
        e.preventDefault()
        const toDoItem = itemList.find(item => item.id === id)
        const newTaskList =[...itemList]

        newTaskList[toDoItem] = {
            ...newTaskList[toDoItem],
            completed:true,
    }
    setItemList(newTaskList)
}
    

   
   
    return (
        <>
        <div className="to-do-list">
           <ul>{itemList.map(item => 
           <div className={ item.completed? "done":"tasks"} key={item.id} id={item.id} >
               {item.task} 
           <button onClick={(e)=>deleteItem(e,item.id)}>Delete</button>
           
        
           </div>
           )}
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
