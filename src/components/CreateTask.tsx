import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuid } from "uuid";

import { Button } from "./Button";
import { Input } from "./Input";

import { TaskProps, Task } from "../interfaces/TaskProps";

import styles from "./CreateTask.module.css";

export function CreateTask({ tasks, onSetTasks }: TaskProps) {
  const initialTaskState: Task = {
    id: '',
    content: '',
    isDone: false,
  }
  const [newTask, setNewTask] = useState<Task>(initialTaskState);

  function handleOnInvalidInput(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handleOnChangeInput(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setNewTask({
      id: '',
      content: event.target.value,
      isDone: false,
    });
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();

    const newTasks = [...tasks];
    newTask.id = uuid();
    newTasks.push(newTask);
    onSetTasks(newTasks);
    setNewTask(initialTaskState);
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={handleFormSubmit}
      >
        <Input
          placeholder="Adicione uma nova tarefa"
          autoComplete="off"
          onChange={handleOnChangeInput}
          onInvalid={handleOnInvalidInput}
          value={newTask.content}
          required
        />
        <Button type="submit" title="Criar" />
      </form>
    </div>
  );
}
