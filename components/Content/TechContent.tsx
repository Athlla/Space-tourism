import Image from 'next/image';
import { isDesktop } from 'react-device-detect';

import data from 'data.json';
import styles from './TechContent.module.scss';
import { useState } from 'react';

const TechContent = () => {
  const [activeData, setActiveData] = useState<number>(0);

  const { technology } = data;

  console.log(isDesktop);

  return (
    <div className={styles.Content}>
      <div className={styles.Step}>
        <span>01</span>
        <p>Pick your destination</p>
      </div>
      <div className={styles.Tech}>
        <div className={styles.Image}>
          <Image
            src={
              isDesktop
                ? technology[activeData].images.portrait
                : technology[activeData].images.landscape
            }
            layout="fill"
            alt={technology[activeData].name}
            objectFit="cover"
            objectPosition="bottom"
          />
        </div>
        <div className={styles.ControlNInfo}>
          <div className={styles.Control}>
            {technology.map((tech, i) => (
              <div
                key={i}
                className={[
                  styles.ControlItem,
                  activeData === i ? styles.Active : null,
                ].join(' ')}
                onClick={() => setActiveData(i)}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className={styles.Info}>
            <h2 className={styles.Text}>The Terminology...</h2>
            <h1 className={styles.TechName}>{technology[activeData].name}</h1>
            <p className={styles.Desc}>{technology[activeData].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechContent;
