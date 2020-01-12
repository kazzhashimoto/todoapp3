import React,{Component} from 'react';

class TodoList extends Component{
  deleteTodo(i){
    this.props.del(i);
  }

  render(){
    return(
      <div>
        <h5>Todo List3</h5>
          <ul>
            {
              this.props.todos.map((todo,i)=>{
                return(
                  <li key={i}>{todo}
                    <button onClick={this.deleteTodo.bind(this,i)}>DEL</button>
                  </li>
                )
              })
            }
          </ul>
      </div>
    );
  }
}

export default TodoList;