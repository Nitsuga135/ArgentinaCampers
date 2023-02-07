import styles from './Header.module.css';

import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.headerContainer}>
				<h1 className={styles.headerContent}>
					<Link to='/' className={styles.title}>
						Argentina Campers
					</Link>
				</h1>
			</div>
		</div>
	);
}

export default Header;
