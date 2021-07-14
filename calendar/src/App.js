
import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar'
import SinceCal from './components/sinceCal';

import './App.css';
import 'react-calendar/dist/Calendar.css';

function App() {

  const dateFromLocalStorage = localStorage.getItem('date');
  const projectFromLocalStorage = JSON.parse(localStorage.getItem('project' || ""));

  const [date, setDate] = useState(new Date());
  const [inputValue, setInputValue] = useState('');
  const [since,setSince] = useState(projectFromLocalStorage);
  const [dateNumber,setDateNumber] = useState(dateFromLocalStorage);

  const diffDate = new Date().getTime() - new Date(date).getTime();
   



useEffect(() => {
  localStorage.setItem('date', dateNumber);
  localStorage.setItem('project', JSON.stringify(since));}, [inputValue, dateNumber]);



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
    setDateNumber(Math.floor(diffDate / (1000 * 60 * 60 * 24)))
   
  
  }

  
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
         <SinceCal dayConvert={dateNumber} title={since}/>
       </div>
        <div className="react-cal">
          <Calendar onChange={onChange}value={date} showNeighboringMonth={false} maxDate={new Date()}/>
        </div>
        
        
     </div>
     

   
      
    </div>
  );
}

export default App;
