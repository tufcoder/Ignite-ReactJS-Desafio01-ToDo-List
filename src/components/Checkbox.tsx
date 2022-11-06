import { InputHTMLAttributes } from "react";
import { Task } from "../interfaces/TaskProps";

import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  task: Task;
}

export function Checkbox({ task, ...props }: CheckboxProps) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input type="checkbox" {...props} />
        <p>
          {task.content}
        </p>
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
}
