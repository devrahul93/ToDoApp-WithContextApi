import React, { useState, useContext } from "react";
import {
  Form,
  FormGroup,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

import { v4 } from "uuid";
import { TodoContext } from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";

const TodoForm = () => {
    const [todoString,setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext);

    //event handling
    const handleSubmit = e => {
        e.preventDefault();
        if(todoString === ""){
            return alert('enter a todo')
        }
        const todo = {
            todoString,
            id:v4()
        }
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString("")
    }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={todoString}
            onChange={e=>setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button
              color="warning"
              //TODO: onclick
            >
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
