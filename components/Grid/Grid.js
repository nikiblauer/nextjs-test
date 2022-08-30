import styles from "./Grid.module.css";
import GridCell from "./GridCell/GridCell";

export default function Grid(props) {
  return (
      <div className={styles.container}>
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />
        <GridCell />

      </div>
  );
}
