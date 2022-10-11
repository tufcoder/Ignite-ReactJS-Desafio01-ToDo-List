import { InputHTMLAttributes } from "react";

import styles from "./Checkbox.module.css";

export function Checkbox({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <input
          type="checkbox"
          className={styles.checkbox}
          {...props}
        />
        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
}
