import { ChangeEvent, FormEvent, useState } from "react";
import { Rocket, Notepad } from "phosphor-react";

import { CreateButton } from "./components/CreateButton";
import { Input } from "./components/Input";
import { Task } from "./components/Task";

import styles from "./App.module.css";

export function App() {
  const [tasks, setTasks] = useState(Array<string>);
  const [newTask, setNewTask] = useState('');
  const [countTaskComplete, setCountTaskComplete] = useState(0);

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const taskFinded = tasks.find(task => task === newTask);

    if (newTask.trim() !== '') {
      setNewTask('');
      if (taskFinded) {
        alert('Tarefa já existente, insira uma tarefa diferente!');
        return;
      }
      setTasks([...tasks, newTask]);
    }
  }

  function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleDelete(taskToDelete: string, checked?: boolean) {
    const tasksFiltered = tasks.filter(task => task !== taskToDelete);
    setTasks(tasksFiltered);
    if (checked) {
      handleCheckboxChange(false);
    }
  }

  function handleCheckboxChange(checked: boolean) {
    if (checked) {
      setCountTaskComplete(() => countTaskComplete + 1);
    } else {
      setCountTaskComplete(() => {
        if (countTaskComplete > 0) {
          return countTaskComplete - 1;
        }
        return countTaskComplete;
      });
    }
  }

  return (
    <>
      <header className={styles.header}>
        <Rocket size={36} className={styles.blue} />
        <h1 className={styles.blue}>to</h1>
        <h1 className={styles.purpleDark}>do</h1>
      </header>
      <div className={styles.container}>
        <form
          className={styles.newTask}
          onSubmit={handleFormSubmit}
        >
          <Input onChange={handleOnChangeInput} value={newTask} />
          <CreateButton type="submit" />
        </form>
        <div className={styles.taskList}>
          <header>
            <p className={styles.blue}>
              Tarefas criadas
              <span>{tasks.length}</span>
            </p>
            <p className={styles.purpleDark}>
              Concluídas
              <span>
                {tasks.length > 0 ? `${countTaskComplete} de ${tasks.length}` : tasks.length}
              </span>
            </p>
          </header>
          <div className={tasks.length === 0 ? styles.noTasks : styles.none}>
            <Notepad size={56} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          <div className={tasks.length > 0 ? styles.block : styles.none}>
            {tasks.map(task => {
              return (
                <Task
                  key={task}
                  content={task}
                  onDeleteTask={handleDelete}
                  onToogleTask={handleCheckboxChange}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
