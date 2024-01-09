import './App.css';
import Employee from './components/Employee';
import {useState} from 'react'


function App() {
  
  const [role,setRole] = useState("dev");


  return (
    <div className="App">
    
      <>
        <input type="text" onChange={(e) => {
          setRole(e.target.value);
        }} placeholder="Enter Role"></input>
        <Employee name="Tirthraj" role={role}/>
      </>
    
    </div>
  );
}

export default App;
