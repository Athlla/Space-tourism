import TechContent from 'components/Content/TechContent';
import Navbar from 'components/Navbar/Navbar';

import styles from 'styles/pages/Technology.module.scss';

const Technology = () => {
  return (
    <>
      <Navbar active="Technology" />
      <main className={styles.Tech}>
        <TechContent />
      </main>
    </>
  );
};

export default Technology;
