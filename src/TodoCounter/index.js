import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
  const { 
    completedTodos,
    totalTodos, 
  } = React.useContext(TodoContext)
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
/*
function TodoCounter({ total, completed }) {

  return (
    <>
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs 
    </h1>
    {total === completed && (
        <h2 className="happy">Felicidades!!! Completaste las tareas</h2>
      )}
    <br />
    
    </>
  );
}

export { TodoCounter };
*/