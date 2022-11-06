import { Rocket } from "phosphor-react";

import styles from "./Header.module.css";

export function Header() {
  return(
    <header className={styles.container}>
      <Rocket size={36} />
      <h1>to</h1>
      <h1>do</h1>
    </header>
  );
}
