import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";

import { Task } from "../interfaces/TaskProps";

import styles from "./TaskItem.module.css";
import { ChangeEvent } from "react";

interface TaskItemProps {
  task: Task;
  onDeleteTask: (task: Task) => void;
  handleTaskDone: (task: Task) => void;
}

export function TaskItem({ task, onDeleteTask, handleTaskDone }: TaskItemProps) {

  function handleDeleteTask(event: any) {
    onDeleteTask(task);
  }

  function handleOnChange(event: ChangeEvent) {
    if (event.target.nodeName.toLowerCase() === 'input') {
      task.isDone = !task.isDone;
    }

    handleTaskDone(task);
  }

  return (
    <div className={styles.container}>
      <Checkbox task={task} onChange={handleOnChange} />
      <DeleteButton onClick={handleDeleteTask} />
    </div>
  );
}
