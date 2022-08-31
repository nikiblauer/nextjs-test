import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import GridCell from "../components/Grid/GridCell/GridCell";
import Grid from "../components/Grid/Grid";
import { getProducts } from "../lib/products";

export default function Home({ products }) {
  return (
    <div>
      <Grid>
        {products.map((product, index) => {
          return (
            <GridCell key={index} title={product.title} imgSrc={product.img} />
          );
        })}
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  const products = getProducts();

  return {
    props: {
      products,
    },
  };
}
