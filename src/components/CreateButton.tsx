import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from "phosphor-react";

import styles from "./CreateButton.module.css";

export function CreateButton({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        {...props}
      >
        Criar
        <PlusCircle size={16} />
      </button>
    </div>
  );
}
