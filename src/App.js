import React from 'react';
import Header from './Components/Header';
import NewTask from './Components/NewTask';
import Tasks from './Components/Tasks';
import { db } from './Connection/firebase';
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2f8aed] to-[#1cb5e0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  count: `text-center p-2`,
};

function App() {
  const [tasks, setTasks] = React.useState([]);

  //CRUD

  //Criar Tarefa

  const getInputChild = async (input) => {
    //recebendo o valor do input vindo do componente filho <NewTask/> por meio de props
    await addDoc(collection(db, 'todos'), {
      //alimentado a colecao no firebase
      text: input,
      completed: false,
    });
  };

  //Ler Tarefa
  React.useEffect(() => {
    const response = query(collection(db, 'todos'));
    const consulta = onSnapshot(response, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTasks(todosArr);
    });
    return () => consulta();
  }, []);

  //Atualizar Tarefa
  const toggleComplete = async (task) => {
    await updateDoc(doc(db, 'todos', task.id), {
      completed: !task.completed,
    });
  };

  //Deletar Tarefa
  const deleteTask = async (id) => {
    await deleteDoc(doc(db, 'todos', id));
  };

  const counterTasks = (t) => {
    if (t.length < 1) {
      return null;
    } else if (t.length === 1) {
      return <p className={style.count}>{`Você tem ${tasks.length} tarefa`}</p>;
    } else {
      return (
        <p className={style.count}>{`Você tem ${tasks.length} tarefas`}</p>
      );
    }
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <Header />
        <NewTask getInputChild={getInputChild} />
        <ul>
          {tasks.map((task, index) => (
            <Tasks
              key={index}
              task={task}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
        {counterTasks(tasks)}
      </div>
    </div>
  );
}

export default App;
