import {useState,useContext} from "react";
import {
    Form,
    FormGroup,
    Input,
    InputGroup,
    Button,
    InputGroupAddon
} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import {v4} from "uuid"
import {TodoContext} from "../context/TodoContext"
import {ADD_TODO} from "../context/action.types"

const TodoForm = ()=>{
    return(
        <Form>
            <FormGroup>
                <InputGroup>
                <Input
                type='text'
                name='todo'
                id='todo'
                placeholder='Next To Do'
                //haven't added value and onchange
                />
                <InputGroupAddon addonType='prepend'>
                   <Button color='warning'></Button>
                </InputGroupAddon>
                
                </InputGroup>
                
            </FormGroup>
        </Form>
    )
}

export default TodoForm