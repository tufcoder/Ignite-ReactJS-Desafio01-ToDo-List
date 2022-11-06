import { CreateTask } from "./CreateTask";
import { TaskList } from "./TaskList";

import { TaskProps, Task } from "../interfaces/TaskProps";

import styles from "./ToDo.module.css";

export function ToDo({ tasks, onSetTasks }: TaskProps) {
  function handleSetTasks(newTasks: Task[]) {
    onSetTasks(newTasks);
  }

  return(
    <div className={styles.container}>
      <CreateTask tasks={tasks} onSetTasks={handleSetTasks} />
      <TaskList tasks={tasks} onSetTasks={handleSetTasks} />
    </div>
  );
}
