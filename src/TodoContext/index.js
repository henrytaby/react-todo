import React from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import { useApi } from "./useApi";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        items: todos,
        addTodo,
        completeTodo,
        deleteTodo,
        loading,
        error,
      } = useApi();

      const [searchValue, setSearchValue] = React.useState("");
      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter((todo) => !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter((todo) => {
          const todoText = todo.title.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        }
      );
 
      const contextValue = React.useMemo(() => ({
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }), [
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        addTodo
      ]);
      
      return(
        <TodoContext.Provider value={contextValue}>
            {children}
        </TodoContext.Provider>
      );
}

// Validación de PropTypes
TodoProvider.propTypes = {
  children: PropTypes.node.isRequired, // children debe ser un nodo de React y es obligatorio
};


export { TodoContext, TodoProvider };

