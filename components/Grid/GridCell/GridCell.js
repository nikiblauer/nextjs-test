import Image from "next/image";
import styles from "./GridCell.module.css";

export default function GridCell({ title, imgSrc }) {
  return (
    <>
      <div className={styles.cell}>
        <Image
          className={`${styles.cell_img} ${styles.curtain}`}
          width="275px"
          height="275px"
          src={
            imgSrc
              ? imgSrc
              : "https://assets.manufactum.de/p/027/027480/27480_01.jpg/schneidbrett-bergahornholz.jpg"
          }
          priority
          alt=""
        />
        <h3 className={styles.cell_title}>{title}</h3>
      </div>
    </>
  );
}
