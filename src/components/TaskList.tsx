import { useState, useEffect } from "react";
import { Notepad } from "phosphor-react";

import { TaskProps, Task } from "../interfaces/TaskProps";

import { TaskItem } from "./TaskItem";

import styles from "./TaskList.module.css";

export function TaskList({ tasks, onSetTasks }: TaskProps) {
  const [countTasksDone, setCountTasksDone] = useState(0);

  function handleDeleteButton(taskToDelete: Task) {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(task => task.id == taskToDelete.id);
    newTasks.splice(taskIndex, 1);
    onSetTasks(newTasks);
  }

  function handleTaskDone(checkedTask: Task) {
    const newTasks = [...tasks];
    newTasks.forEach(task => {
      if (task.id === checkedTask.id) {
        task = checkedTask;
      }
    });
    const tasksDone = newTasks.filter(task => task.isDone === true);
    setCountTasksDone(tasksDone.length);
  }

  useEffect(() => {
    const newTasks = [...tasks];
    const tasksDone = newTasks.filter(task => task.isDone === true);
    setCountTasksDone(tasksDone.length);
  }, [tasks]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p>Tarefas criadas<span>{tasks.length}</span></p>
        <p>Concluídas<span>{tasks.length === 0 ? 0 : `${countTasksDone} de ${tasks.length}`}</span></p>
      </header>
      <div className={tasks.length === 0 ? styles.emptyTasks : styles.none}>
        <Notepad size={56} />
        <p>
          Você ainda não tem tarefas cadastradas
        </p>
        <p>
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
      {tasks.map(task =>
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={handleDeleteButton}
          handleTaskDone={handleTaskDone}
        />
      )}
    </div>
  );
}
