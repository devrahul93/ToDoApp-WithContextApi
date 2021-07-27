import {Container} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import {TodoContext} from "./context/TodoContext";
import todoreducer from "./context/reducer"
import {useReducer} from "react";
import TodoForm from "./Components/ToDoForm";

const App =()=>{
  const [todos,dispatch]=useReducer( todoreducer,[] )
  return(
    <TodoContext.Provider value={{todos,dispatch}}>
      <Container fluid>
      <h1>To do App with Context API</h1>
      <TodoForm/>
      </Container>
      
    </TodoContext.Provider>
  
  )
}

export default App;
