import React from "react";

const API_URL = "https://fastapi-product.onrender.com/tasks/";

function useApi() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    fetchTasks();
  }, []);

  // Obtener tareas de la API
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Error al obtener las tareas");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Agregar nueva tarea
  const addTodo = async (title, description = "Sin descripción") => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          completed: false,
        }),
      });

      if (!response.ok) throw new Error("Error al agregar la tarea");

      fetchTasks(); // Recargar la lista de tareas después de agregar
    } catch (error) {
      setError(true);
    }
  };

  // Marcar tarea como completada
  const completeTodo = async (id, title, description) => {
    try {
      const response = await fetch(`${API_URL}${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          completed: true,
        }),
      });

      if (!response.ok) throw new Error("Error al completar la tarea");

      fetchTasks(); // Recargar la lista de tareas después de actualizar
    } catch (error) {
      setError(true);
    }
  };

  // Eliminar tarea
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${API_URL}${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar la tarea");

      fetchTasks(); // Recargar la lista de tareas después de eliminar
    } catch (error) {
      setError(true);
    }
  };

  return {
    items,
    addTodo,
    completeTodo,
    deleteTodo,
    loading,
    error,
  };
}

export { useApi };
