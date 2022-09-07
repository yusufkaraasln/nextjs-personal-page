import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
function Navbar() {
  return <div  className={styles.container}>
    <Link href={"/"}>steven.</Link>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href="products/desing">MAC</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="products/development">iMAC</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="products/architect">iPHONE</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="products/pricing">iPAD</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="products/deploy">MACBOOK</Link>
      </li>

    </ul>


  </div>;
}

export default Navbar;
