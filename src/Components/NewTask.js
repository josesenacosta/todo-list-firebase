import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
const style = {
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
};

const NewTask = ({ getInputChild }) => {
  const [input, setInput] = React.useState('');

  //Tratando o submit do formulario e enviando o valor do input atraves de props para o component pai por meio da funcao getInputChild
  const createTask = async (event) => {
    event.preventDefault(event);
    if (input === '') {
      alert('Por favor, insira uma tarefa!');
      return;
    }
    getInputChild(input);
    setInput('');
  };

  return (
    <form onSubmit={createTask} className={style.form}>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
        className={style.input}
        type="text"
        placeholder="Adicone uma tarefa"
      />
      <button className={style.button}>
        <AiOutlinePlus size={30} />
      </button>
    </form>
  );
};

export default NewTask;
