import { Link } from 'react-router-dom';

import styles from './SideBar.module.css';

function SideBar() {
	return (
		<div className={styles.sideBarContainer}>
			<ul className={styles.sideBarUl}>
			
				<li className={styles.sideBarLi}>
					<Link to='/' className={ styles.links }>
						<i
							className={`fa-solid fa-chart-line ${styles.iconDashboard}`}
						/>
						{/* <span className={ styles.spanSideBar }>Dashboard</span> */}
					</Link>
				</li>

				<div className={styles.divisorLine} />

				<li className={styles.sideBarLi}>
					<Link to='/users' className={ styles.links }>
						<i
							className={`fa-solid fa-users ${styles.iconDashboard}`}
						></i>
						{/* <span className={ styles.spanSideBar }>Usuarios</span> */}
					</Link>
				</li>

				{/* <div className={styles.divisorLine} /> */}

				<li className={styles.sideBarLi}>
					<Link to='/products' className={ styles.links }>
						<i
							className={`fa-solid fa-van-shuttle ${styles.iconDashboard}`}
						></i>
						{/* <span className={ styles.spanSideBar }>Productos</span> */}
					</Link>
				</li>

				<div className={styles.divisorLine} />

				<li className={styles.sideBarLi}>
					<a href='http://localhost:5000/home' className={ styles.links }>
						<i
							className={`fa-solid fa-house  ${styles.iconDashboard}`}
						></i>
						{/* <span className={ styles.spanSideBar }>Productos</span> */}
					</a>
				</li>


				<li className={styles.sideBarLi}>
					<a href='http://localhost:5000/products' className={ styles.links }>
						<i
							className={`fa-solid fa-hand-holding-dollar ${styles.iconDashboard}`}
						></i>
						{/* <span className={ styles.spanSideBar }>Productos</span> */}
					</a>
				</li>

				<li className={styles.sideBarLi}>
					<a href='http://localhost:5000/aboutUs' className={ styles.links }>
						<i
							className={`fa-solid fa-comment ${styles.iconDashboard}`}
						></i>
						{/* <span className={ styles.spanSideBar }>Productos</span> */}
					</a>
				</li>

				<li className={styles.sideBarLi}>
					<a href='http://localhost:5000/rental-cart' className={ styles.links }>
						<i
							className={`fa-solid fa-cart-shopping ${styles.iconDashboard}`}
						></i>
						{/* <span className={ styles.spanSideBar }>Productos</span> */}
					</a>
				</li>


				<div className={styles.divisorLine} />



			</ul>
		</div>
	);
}

export default SideBar;
