import './App.css';
import Employee from './components/Employee';
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'


function App() {
  const [employees,setEmployees] = useState(
    [
      {
        "name":"Tirthraj",
        "age":"19",
        "dob":"7 June 2004",
        "role":"Developer",
        "image":"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "name":"Julie",
        "age":"24",
        "dob":"21 January 1999",
        "role":"HR",
        "image":"https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "name":"Sofia",
        "age":"25",
        "dob":"20 June 2004",
        "role":"Developer",
        "image":"https://images.unsplash.com/photo-1601412436009-d964bd02edbc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "name":"Caleb",
        "age":"15",
        "dob":"2 December 2007",
        "role":"Intern",
        "image":"https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "name":"Mary",
        "age":"25",
        "dob":"21 May 1997",
        "role":"Developer",
        "image":"https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        "name":"Rocky",
        "age":"22",
        "dob":"1 Feb 2000",
        "role":"Developer",
        "image":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
    ]
  )
  
  return (
    <div className="App">
    
      <>
        <div className="flex flex-wrap flex-row justify-center gap-5 pt-5 pb-5">
          {employees.map((employee)=>{
            return(
              <Employee key={uuidv4()} name={employee.name} age={employee.age} dob={employee.dob} role={employee.role} image={employee.image}/>
            )
          })}
        </div>    

      </>
    
    </div>
  );
}

export default App;
