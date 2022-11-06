import { useState } from "react";

import { Header } from "./components/Header";
import { ToDo } from "./components/ToDo";

import { Task } from "./interfaces/TaskProps";

import styles from "./App.module.css";

export function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  return (
    <div className={styles.container}>
      <Header />
      <ToDo tasks={tasks} onSetTasks={setTasks} />
    </div>
  )
}
