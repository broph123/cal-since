import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar'
import SinceCal from './components/SinceCal';
import ToDo from './components/ToDo';


import { useLocalStorage } from './hooks/useLocalStorage';


import './App.css';
import 'react-calendar/dist/Calendar.css';

function App() {


  const [date, setDate] = useState(new Date());
  const [inputValue, setInputValue] = useState('');
  const [since,setSince] = useLocalStorage("project", "");
  const [dateCounter, setDateCounter] = useLocalStorage("date" , 0)


 const diffDate = new Date().getTime() - new Date(date).getTime();
 const convertDate = Math.floor(diffDate / (1000 * 60 * 60 * 24))
 


// Form functions
const handleSubmit = (e) => {
  e.preventDefault();
  setSince(inputValue);
  setInputValue('');
  
}
const onInputChange = (e) => {
  setInputValue(e.target.value);
}



// Calendar Function
  const onChange = (date) => {
    setDate(date)
    setDateCounter(convertDate)
    
    
   
  
  }
  useEffect(()=>{
    
    const timer = setInterval(()=>{
      setDateCounter(dateCounter+1)
      

    },60000)
    return ()=>clearInterval(timer)
  })

  
  return (
    <div className="App">
     <nav/>
     <div className="starting">
       <form onSubmit={handleSubmit}>
         <h1>Welcome to Long-Term HQ</h1>
        <input type="text" placeholder="What Are you Working Towards" value={inputValue} onChange={onInputChange}></input>
       </form>
     </div>

     <div className="headings-container">
       <div className="left-heading">
         <h2>How are you moving foward?</h2>
       </div>
       <h2>{!since? "Enter your long-term goal" : since}</h2>
     </div>
     
     <div className="to-do-container">
       <ToDo/>
     </div>
     

      <div className="calendar-container">
         <SinceCal dayConvert={dateCounter}/>
         <Calendar onChange={onChange}value={date} showNeighboringMonth={false} maxDate={new Date()}/>

     </div> 
     

   
     
    </div>
  );
}

export default App;
