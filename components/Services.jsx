import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/Services.module.css";
function Services({ services }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Discover the stephen</h1>
      <h1 className={styles.desc}>And you'll see why 1984 won't be "1984"</h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <span className={styles.cat}>{service.name}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    className={styles.video}
                    src={service.video}
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <Image
                    src={`/assets/${service.photo}`}
                    alt={service.title}
                    width="50%"
                    layout="responsive"
                    objectFit="cover"
                    height="50%"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Services;
