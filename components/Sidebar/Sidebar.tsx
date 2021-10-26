import NavList from '../Navbar/NavList';

import styles from './Sidebar.module.scss';

interface Props {
  show: boolean;
  close: () => void;
  active: 'Home' | 'Destination' | 'Crew' | 'Technology';
}

const Sidebar = ({ show, close, active }: Props) => {
  return (
    <aside className={[styles.Sidebar, show ? styles.Show : null].join(' ')}>
      <div className={styles.Close} onClick={close}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.Logo}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <nav className={styles.Nav}>
        <ul className={styles.NavList}>
          <NavList active={active} />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
