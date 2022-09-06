import Image from "next/image";
import React from "react";
import styles from "../styles/Intro.module.css";
import apple from "../public/assets/apple.svg";
import Circle from "./Circle";

function Intro() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="gray" top="-20vh" left="-30vw"/>
      <Circle backgroundColor="gray" top="70vh" left="70vw"/>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>
            stephen. <br />
          </span>
          DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
          repellat incidunt, repudiandae expedita eveniet veritatis beatae
          recusandae atque voluptatem accusantium est dolores amet qui eaque
          tempore. Officiis omnis in mollitia!
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image style={{
          zIndex: 45643569845978,
        }} src={apple} width="500" height="500"/>

      </div>
    </div>
  );
}

export default Intro;
