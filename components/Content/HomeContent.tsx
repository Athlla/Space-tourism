import { useRouter } from 'next/router';

import styles from './HomeContent.module.scss';

const HomeContent = () => {
  const router = useRouter();

  return (
    <div className={styles.Content}>
      <div className={styles.Intro}>
        <h3 className={styles.Heading1}>So, you want travel to</h3>
        <h1 className={styles.Heading2}>Space</h1>
        <p className={styles.Desc}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.Explore} onClick={() => router.push('/moon')}>
        Explore
      </div>
    </div>
  );
};

export default HomeContent;
