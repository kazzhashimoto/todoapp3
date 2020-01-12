import React, {Component} from 'react';
import TodoForm from './components/TodoForms';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[]
    };
  }

  componentDidMount(){
    const todos=JSON.parse(localStorage.getItem('todos'))||[];
    this.setState({todos:todos});
  }

  addTodo(newTodo){
    const todos=this.state.todos;
    todos.push(newTodo);
    this.setState({todos:todos});
    localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }

  deleteTodo(i){
    const todos=this.state.todos;
    todos.splice(i,1);
    this.setState({todos:todos});
    localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }

  render(){
    return(
      <div>
        <TodoForm add={this.addTodo.bind(this)}></TodoForm>
        <TodoList todos={this.state.todos} del={this.deleteTodo.bind(this)}></TodoList>
      </div>
    );
  }
}

export default App;
