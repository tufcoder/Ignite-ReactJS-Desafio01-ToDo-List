import { Trash } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";

import styles from "./DeleteButton.module.css";

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function DeleteButton({ ...props }: DeleteButtonProps) {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.button}
        {...props}
      >
        <Trash size={16} />
      </button>
    </div>
  );
}
