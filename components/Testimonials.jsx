import React from "react";
import Circle from "./Circle";
import styles from "../styles/Testimonials.module.css";
import { cardData } from "../data";
import Image from "next/image";

function Testimonials() {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="black" left="0"  top="-70vh" right="0"/>
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {cardData.map((user) => (
          <div key={user.id} className={styles.card}>
            <Image style={{
                margin: "0 auto",
            }} className={styles.logo} src={"/assets/" + user.logo} width="100" height={100} />
            <p className={styles.comment}>{user.comment}</p>
            <div className={styles.person}>
              <Image
                width={50}
                height={50}
                alt=""
                className={styles.avatar}
                objectFit="cover"
                src={`/assets/${user.avatar}`}
              />

                <div className={styles.info}>

                    <span className={styles.username}>{user.name}</span>
                    <span className={styles.status}>{user.title}</span>


                </div>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
