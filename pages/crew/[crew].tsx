import { GetStaticPaths, GetStaticProps } from 'next';
import _ from 'lodash';

import CrewContent from 'components/Content/CrewContent';
import Navbar from 'components/Navbar/Navbar';
import { ICrew } from 'Interfaces';
import data from 'data.json';

import styles from 'styles/pages/Crew.module.scss';

const Crew = ({ data }: { data: ICrew }) => {
  return (
    <>
      <Navbar active="Crew" />
      <main className={styles.Crew}>
        <CrewContent {...data} />
      </main>
    </>
  );
};

export default Crew;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.crew.map((person) => ({
    params: { crew: _.kebabCase(person.name) },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const crew = context.params.crew as string;

  const propsData = data.crew.find(
    (person) => _.kebabCase(person.name) === crew
  );

  return {
    props: { data: propsData },
  };
};
