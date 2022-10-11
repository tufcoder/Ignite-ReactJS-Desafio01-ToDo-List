import { ButtonHTMLAttributes } from "react";
import { Trash } from "phosphor-react";

import styles from "./DeleteButton.module.css";

export function DeleteButton({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className={styles.container}>
      <button {...props}>
        <Trash
          size={24}
          className={styles.icon}
        />
      </button>
    </div>
  );
}
