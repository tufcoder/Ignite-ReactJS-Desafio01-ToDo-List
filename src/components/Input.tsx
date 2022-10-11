import { InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        autoComplete="off"
        placeholder="Adicione uma tarefa"
        className={styles.input}
        {...props}
      />
    </div>
  );
}
