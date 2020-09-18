import React, {Component} from 'react';
import NewTodo from '../NewTodo/NewTodo';
import Todo from '../Todo/Todo';
import TodoDetail from "../TodoDetail/TodoDetail";
import {NavLink} from 'react-router-dom';
import "./TodoList.css";

class TodoList extends Component{
    state = {
        todos:[
            {id: 1, title:'SWPP', content: 'finish swpp practice', done: false},
            {id: 2, title:'Movie', content: 'Watch Harry Potter', done: false},
            {id: 3, title:'Lunch', content: 'Eat lunch', done: true}
        ],
        selectedTodo: null,
    }

    clickTodoHandler = (td) => {
        if(this.state.selectedTodo === td){
            this.setState({selectedTodo: null});
        } else {
            this.setState({selectedTodo: td});
        }
    }

    render(){
        const todos = this.state.todos.map((td) => {
            return (<Todo key={td.id} title={td.title} 
                    done={td.done} clicked={()=>this.clickTodoHandler(td)}/>);
        });
        let todoDetail = null;
        if(this.state.selectedTodo){
            todoDetail = <TodoDetail title={this.state.selectedTodo.title}
                        content={this.state.selectedTodo.content}/>
        }

        return(
            <div className='TodoList'>
                <div className='title'>{this.props.title}</div>
                <div className='todos'>{todos}</div>
                {todoDetail}
                <NewTodo></NewTodo>
                <NavLink to='/new-todo' exact>New Todo</NavLink>
            </div>
        );
    }
}
export default TodoList;

