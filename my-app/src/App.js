import './App.css';
import Employee from './components/Employee';

function App() {
  console.log("This is the Employee Component");
  let showEmployee = false;

  return (
    <div className="App">
      {showEmployee?(
        <>
          <Employee />
        </>
      ):(
        <p>
          You cannot see the Employee
        </p>
      )}
    </div>
  );
}

export default App;
