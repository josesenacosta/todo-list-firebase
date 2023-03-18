import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Tasks = ({ task, toggleComplete, deleteTask }) => {
  return (
    <>
      <li className={task.completed ? style.liComplete : style.li}>
        <div className={style.row}>
          <input
            onChange={() => toggleComplete(task)}
            type="checkbox"
            checked={task.completed ? 'checked' : ''}
          />
          <p
            onClick={() => toggleComplete(task)}
            className={task.completed ? style.textComplete : style.text}
          >
            {task.text}
          </p>
        </div>
        <button onClick={() => deleteTask(task.id)}>{<FaRegTrashAlt />}</button>
      </li>
    </>
  );
};

export default Tasks;
