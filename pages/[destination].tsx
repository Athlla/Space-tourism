import { GetStaticPaths, GetStaticProps } from 'next';

import DestinationContent from 'components/Content/DestinationContent';
import Navbar from 'components/Navbar/Navbar';
import data from 'data.json';
import { IDestination } from 'Interfaces';

import styles from 'styles/pages/Destination.module.scss';

const Destination = ({ data }: { data: IDestination }) => {
  return (
    <>
      <Navbar active="Destination" />
      <main className={styles.Destination}>
        <DestinationContent {...data} />
      </main>
    </>
  );
};

export default Destination;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.destinations.map((dest) => ({
    params: { destination: dest.name.toLowerCase() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const destination = context.params.destination as string;

  const propsData = data.destinations.find(
    (dest) => dest.name.toLowerCase() === destination.toLowerCase()
  );

  return {
    props: { data: propsData },
  };
};
