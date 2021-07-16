import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar'
import SinceCal from './components/sinceCal';
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
      

    },86400000)
    return ()=>clearInterval(timer)
  })

  
  return (
    <div className="App">
     <nav/>
     <div className="starting">
       <form onSubmit={handleSubmit}>
         <h1>What Did We Start?</h1>
        <input type="text" placeholder="Stay on Track" value={inputValue} onChange={onInputChange}></input>
       </form>
       
  
     </div>
     <div className="content">
       <div className="column">
         <SinceCal dayConvert={dateCounter} title={since}/>
       </div>
        <div className="react-cal">
          <Calendar onChange={onChange}value={date} showNeighboringMonth={false} maxDate={new Date()}/>
        </div>
        
        
     </div>
     

   
      
    </div>
  );
}

export default App;
