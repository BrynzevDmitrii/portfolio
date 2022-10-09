import styles from "./Item.module.scss";
export const Items = () => {
  return (
    <ul className={styles.menulist}>
      <li className={styles.menuItem}>Home</li>
      <li className={styles.menuItem}>Portfolio</li>
      <li className={styles.menuItem}>About Me</li>
      <li className={styles.menuItem}>Contacts</li>
    </ul>
  );
};
