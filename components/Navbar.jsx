import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
function Navbar() {
  return <div  className={styles.container}>
    <Link href={"/"}>steven.</Link>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href="products/desing">DESING</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="products/development">DEVELOPMENT</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="products/architect">ARCHITECT</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="products/pricing">PRICING</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="products/deploy">DEPLOY</Link>
      </li>

    </ul>


  </div>;
}

export default Navbar;
