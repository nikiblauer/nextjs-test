import Image from "next/image";
import Link from "next/link";
import { getAllProductIds, getProduct } from "../../lib/products";

import styles from "./product_page.module.css";

export default function Product({ productData }) {
  return (
    <>
      <div className={styles.big_container}>
        <Image
          className={styles.product_img}
          src={productData.data.img}
          width={400}
          height={400}
          alt="product image"
        />
        <div className={styles.text_container}>
          <h1>{productData.id.toUpperCase()}</h1>
          <p>{productData.data.description}</p>
        </div>
      </div>
      <Link href={"/"}>
        <a className={styles.link}>Back to home</a>
      </Link>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllProductIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productData = getProduct(params.id);

  return {
    props: {
      productData,
    },
  };
}
