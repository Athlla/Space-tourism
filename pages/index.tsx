import Navbar from 'components/Navbar/Navbar';

import styles from 'styles/pages/Home.module.scss';

const Home = () => {
  return (
    <>
      <main className={styles.Home}>
        <Navbar />
      </main>
    </>
  );
};

export default Home;
