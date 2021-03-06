import Sidebar from 'components/Sidebar/Sidebar';

import NavList from './NavList';

import styles from './Navbar.module.scss';
import { useState } from 'react';

interface Props {
  active: 'Home' | 'Destination' | 'Crew' | 'Technology';
}

const Navbar = ({ active }: Props) => {
  const [sideBar, setSideBar] = useState(false);

  const sidebarHandler = () => {
    setSideBar((prevState) => !prevState);
  };

  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <span className={styles.Line}></span>
      <nav className={styles.Nav}>
        <ul className={styles.NavList}>
          <NavList active={active} />
        </ul>
      </nav>
      <div className={styles.Menu} onClick={sidebarHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>
      <Sidebar active={active} show={sideBar} close={sidebarHandler} />
    </header>
  );
};

export default Navbar;
