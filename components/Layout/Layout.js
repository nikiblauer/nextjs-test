import Head from "next/head";
import styles from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>NEXTJS TEST</title>
      </Head>
      <header>
        <div className={styles.navbar}>
          <h1 className={`${styles.heading} center`}>TEST SHOP</h1>
        </div>
      </header>
      {children}
      <footer>
        <div className={styles.footer}></div>
      </footer>
    </>
  );
}
