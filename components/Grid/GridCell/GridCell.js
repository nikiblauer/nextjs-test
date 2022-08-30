import Image from "next/image";
import styles from "./GridCell.module.css";

export default function GridCell() {
  return (
    <div className={styles.cell}>
      <img
        className={`${styles.cell_img} ${styles.curtain}`}
        width="100%"
        height="100%"
        src="https://assets.manufactum.de/p/027/027480/27480_01.jpg/schneidbrett-bergahornholz.jpg"
        alt=""
      />
    </div>
  );
}
