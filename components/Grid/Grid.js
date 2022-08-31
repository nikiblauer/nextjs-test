import styles from "./Grid.module.css";
import GridCell from "./GridCell/GridCell";

export default function Grid({ children }) {
  return <div className={styles.container}>{children}</div>;
}
