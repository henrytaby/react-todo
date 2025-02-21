import PropTypes from 'prop-types'; // Importa prop-types
import dayjs from 'dayjs';
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'

import './TodoItem.css';

function TodoItem(props) {
  let date_task = dayjs(props.date).format("d MMM");
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text} <br />
        <span className='task-date'><strong>Fecha de Creación: </strong>{dayjs(props.date).format("DD/MM/YY HH:mm")}</span>
      </p>

      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

// Define las validaciones de las props
TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired, // 'completed' debe ser un booleano y es requerido
  onComplete: PropTypes.func.isRequired, // 'onComplete' debe ser una función y es requerido
  text: PropTypes.string.isRequired, // 'text' debe ser un string y es requerido
  date: PropTypes.string.isRequired, // 'date' debe ser un string y es requerido
  onDelete: PropTypes.func.isRequired, // 'onDelete' debe ser una función y es requerido
};
export { TodoItem };