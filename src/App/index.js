
//import './App.css';
import React, { useState } from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

  const [searchvalue, setSearchValue] = React.useState('');
  useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length; // !! convierte a booleano Doble negación
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    todo =>  {
      const todoText = todo.text.toLowerCase();
      const searchText = searchvalue.toLowerCase();
      return todoText.includes(searchText)
    }
  );

  
  const completeTodo = (id) => {
    const newTodos = [...todos]; // Copia de los todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos]; // Copia de los todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );

    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return(
  <AppUI 
    totalTodos = {totalTodos}
    completedTodos = {completedTodos}
    searchvalue = {searchvalue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
  />
  );
  
}

export default App;
