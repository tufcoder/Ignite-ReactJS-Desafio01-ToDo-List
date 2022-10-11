import { ButtonHTMLAttributes, ChangeEvent, useState } from "react";

import { Checkbox } from "./Checkbox";
import { DeleteButton } from "./DeleteButton";

import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  onDeleteTask: (task: string, checked?: boolean) => void;
  onToogleTask: (checked: boolean) => void;
}

export function Task({ content, onDeleteTask, onToogleTask }: TaskProps) {
  const [checked, setChecked] = useState(false);

  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    setChecked(!checked);
    onToogleTask(!checked);
  }

  function handleButtonDelete() {
    onDeleteTask(content, checked);
  }

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <Checkbox onChange={handleCheckboxChange} />
        <p className={checked ? styles.complete : ''}>{content}</p>
      </label>
      <DeleteButton
       onClick={handleButtonDelete}
      />
    </div>
  );
}
