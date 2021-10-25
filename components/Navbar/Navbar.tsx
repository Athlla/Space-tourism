import styles from './Navbar.module.scss';

const Navbar = () => {
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
          <li className={[styles.NavItem, styles.Active].join(' ')}>
            <strong>00</strong>
            <p>HOME</p>
          </li>
          <li className={styles.NavItem}>
            <strong>01</strong>
            <p>DESTINATION</p>
          </li>
          <li className={styles.NavItem}>
            <strong>02</strong>
            <p>CREW</p>
          </li>
          <li className={styles.NavItem}>
            <strong>03</strong>
            <p>TECHNOLOGY</p>
          </li>
        </ul>
      </nav>
      <div className={styles.Menu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
          <g fill="#D0D6F9" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Navbar;
