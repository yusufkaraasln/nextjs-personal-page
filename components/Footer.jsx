import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.carL}>
        <h1 className={styles.title}>stephen.</h1>
        <h1 className={styles.linkTitle}>
          <a href="/contact" passHref>
            <span>WORK WITH US</span>
          </a>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          Mounthain View <br /> CA/USA
        </div>
        <div className={styles.cardItem}>
          info@apple.com <br /> +1 (917) 888-8888
        </div>
      </div>
      <div className={styles.cardS}>


      <div className={styles.cardItem}>
          Follow Us:<br />
          LinkedIn
        </div>

        <div className={styles.cardItem}>
        © Apple Inc.
        <br />
        All rights reserved.
        </div>


      </div>
    </div>
  );
}

export default Footer;
