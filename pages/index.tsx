import HomeContent from 'components/Content/HomeContent';
import Navbar from 'components/Navbar/Navbar';

import styles from 'styles/pages/Home.module.scss';

const Home = () => {
  return (
    <>
      <Navbar active="Home" />
      <main className={styles.Home}>
        <HomeContent />
      </main>
    </>
  );
};

export default Home;
