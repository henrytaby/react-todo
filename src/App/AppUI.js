import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';


function AppUI({
    totalTodos,
    completedTodos,
    searchvalue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
          <TodoCounter 
          completed={completedTodos} total={totalTodos} 
          />
          <TodoSearch 
            serachValue = {searchvalue}
            setSearchValue = {setSearchValue}
          />
    
          <TodoList>
            {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onCompleted={() => completeTodo(todo.id)}
              onDeleted={() => deleteTodo(todo.id)}
              />
            ))}
          </TodoList>
    
          <CreateTodoButton />
        </>
      );
}

export { AppUI };