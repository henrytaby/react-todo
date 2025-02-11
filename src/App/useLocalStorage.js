import React from "react";
/*
const defaultTodos = [
  { id:1, text: 'Cortar cebolla', completed: true },
  { id:2, text: 'Tomar el curso de intro a React', completed: false },
  { id:3, text: 'Llorar con la llorona', completed: false },
  { id:4, text: 'LALALALALALALALALALALA', completed: false },
  { id:5, text: 'Hacer el reto de React', completed: false },
  { id:6, text: 'Iniciar React', completed: true }
];
localStorage.setItem('TODOS_V1',  JSON.stringify(defaultTodos));
localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
localStorage.removeItem('TODOS_V1');
*/
function useLocalStorage(itemName, initialValue) {
  
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

export { useLocalStorage };