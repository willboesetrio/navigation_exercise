import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {

return(
        <nav className={styles.navigation}>
                <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/food'>Food</ Link>
                </li>
                <li className={styles.item}>
                    <Link to='/stuff'>Stuff</ Link>
                </li>
                <li className={styles.item}>
                    <Link to='/'>Logout</ Link>
                </li>
                </ul>
            </nav>
        )
}

export default Navbar