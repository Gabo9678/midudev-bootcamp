import './App.css';
import Mensaje from './Mensaje.js'
/*const Suma = () =>{
  
  return <h1>Hola mundo</h1>
  
}*/


const App = () => {
  return (
    <div className="App">
      
      <Mensaje color='red' message='Hola a todos'/>
      <Mensaje color='green' message='Curso de: '/>
      <Mensaje color='blue' message='React'/>
      
     <br />
     
     
     
     {+new Date()}
    </div>
  );
}

export default App;
