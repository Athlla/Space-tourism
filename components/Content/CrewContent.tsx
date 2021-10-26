import Image from 'next/image';
import _ from 'lodash';
import { useRouter } from 'next/router';

import data from 'data.json';
import { ICrew } from 'Interfaces';

import styles from './CrewContent.module.scss';

const CrewContent = ({ name, images, bio, role }: ICrew) => {
  const router = useRouter();

  return (
    <div className={styles.Content}>
      <div className={styles.Step}>
        <span>02</span>
        <p>Meet your Crew</p>
      </div>
      <div className={styles.Crew}>
        <div className={styles.Image}>
          <Image
            src={images.webp}
            layout="fill"
            alt={name}
            objectFit="contain"
          />
        </div>
        <div className={styles.ControlNInfo}>
          <div className={styles.Info}>
            <h2 className={styles.Role}>{role}</h2>
            <h1 className={styles.Name}>{name}</h1>
            <p className={styles.Bio}>{bio}</p>
          </div>
          <div className={styles.Control}>
            {data.crew.map((c) => (
              <span
                key={c.name}
                className={[
                  styles.Dot,
                  c.name === name ? styles.Active : null,
                ].join(' ')}
                onClick={() => router.replace(`/crew/${_.kebabCase(c.name)}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewContent;
