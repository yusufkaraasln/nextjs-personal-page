import Link from "next/link";
import React from "react";
import styles from "../styles/Navbar.module.css";
function Navbar() {
  return <div  className={styles.container}>
    <Link href={"/"}>steven.</Link>
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href="/products/mac">MAC</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/products/imac">iMAC</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/products/iphone">iPHONE</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/products/ipad">iPAD</Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/products/macbook">MACBOOK</Link>
      </li>

    </ul>


  </div>;
}

export default Navbar;
