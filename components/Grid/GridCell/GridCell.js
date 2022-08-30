import Image from "next/image";
import styles from "./GridCell.module.css";

export default function GridCell() {
  return (
    <div className={styles.cell}>
      <img className={`${styles.cell_img} ${styles.curtain}`} width="100%" height="100%" src="https://www.leatherman.com/dw/image/v2/AAMV_PRD/on/demandware.static/-/Sites-master/default/dw5aab317e/large/basics-pullover-hoodie/0030_basics-pullover-hoodie-gray-front.jpg?sw=600&sh=600&sm=fit&sfrm=jpg" alt=""/>
    </div>
  );
}
