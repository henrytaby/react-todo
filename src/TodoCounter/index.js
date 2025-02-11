import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
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