import Link from 'next/link';

import styles from './NavList.module.scss';

interface Props {
  active: 'Home' | 'Destination' | 'Crew' | 'Technology';
}

const NavItem = ({ active }: Props) => {
  return (
    <>
      <Link href="/">
        <a>
          <li
            className={[
              styles.NavItem,
              active === 'Home' ? styles.Active : null,
            ].join(' ')}
          >
            <span>00</span>
            <p>HOME</p>
          </li>
        </a>
      </Link>
      <Link href="/moon">
        <a>
          <li
            className={[
              styles.NavItem,
              active === 'Destination' ? styles.Active : null,
            ].join(' ')}
          >
            <span>01</span>
            <p>DESTINATION</p>
          </li>
        </a>
      </Link>
      <Link href="/crew/douglas-hurley">
        <a>
          <li
            className={[
              styles.NavItem,
              active === 'Crew' ? styles.Active : null,
            ].join(' ')}
          >
            <span>02</span>
            <p>CREW</p>
          </li>
        </a>
      </Link>
      <Link href="/technology">
        <a>
          <li
            className={[
              styles.NavItem,
              active === 'Technology' ? styles.Active : null,
            ].join(' ')}
          >
            <span>03</span>
            <p>TECHNOLOGY</p>
          </li>
        </a>
      </Link>
    </>
  );
};

export default NavItem;
