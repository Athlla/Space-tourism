import Image from 'next/image';

import { IDestination } from 'Interfaces';

import styles from './DestinationContent.module.scss';

const DestinationContent = ({
  name,
  description,
  images,
  distance,
  travel,
}: IDestination) => {
  return (
    <div className={styles.Content}>
      <div className={styles.Title}>
        <span>01</span>
        <p>Pick your destination</p>
      </div>
      <div className={styles.Destination}>
        <div className={styles.Image}>
          <Image src={images.webp} layout="fill" alt={name} />
        </div>
        <div className={styles.Info}>
          <ul className={styles.DestList}>
            <li
              className={[
                styles.DestItem,
                name === 'Moon' ? styles.Active : null,
              ].join(' ')}
            >
              Moon
            </li>
            <li
              className={[
                styles.DestItem,
                name === 'Mars' ? styles.Active : null,
              ].join(' ')}
            >
              Mars
            </li>
            <li
              className={[
                styles.DestItem,
                name === 'Europa' ? styles.Active : null,
              ].join(' ')}
            >
              Europa
            </li>
            <li
              className={[
                styles.DestItem,
                name === 'Titan' ? styles.Active : null,
              ].join(' ')}
            >
              Titan
            </li>
          </ul>
          <h1 className={styles.Title}>{name}</h1>
          <p className={styles.Description}>{description}</p>
          <span className={styles.Line} />
          <div className={styles.FeaturedInfo}>
            <div className={styles.FeaturedInfoItem}>
              <p className={styles.Text}>AVG. DISTANCE</p>
              <h3 className={styles.Value}>{distance}</h3>
            </div>
            <div className={styles.FeaturedInfoItem}>
              <p className={styles.Text}>EST. TRAVEL TIME</p>
              <h3 className={styles.Value}>{travel}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationContent;
