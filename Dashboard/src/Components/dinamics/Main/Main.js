import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';


import styles from './Main.module.css';

function Main(props) {
	const [lastProduct, setLastProduct] = useState();
	const [lastUser, setLastUser] = useState();

	useEffect(() => {
		fetch('http://localhost:5000/api/products')
			.then((response) => response.json())
			.then((data) => {
				if (data.data) {
					setLastProduct(data.data.pop());
				}
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		fetch('http://localhost:5000/api/users')
			.then((response) => response.json())
			.then((data) => {
				if(data.data){
					setLastUser(data.data.pop());
				}
			})
			.catch((err) => console.log(err));
	}, []);


	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainContent}>
				<div className={styles.titleContainer}>
					<h5 className={styles.title}>
						Ultimo producto en la base de datos
					</h5>
				</div>
				{lastProduct && (
					<div className={styles.mainDescription}>
						<div className={styles.imageContainer}>
							<i
								className={`fa-solid fa-image ${styles.image}`}
							></i>
						</div>
						<div className={styles.imageTitle}>
							<h2>{`${lastProduct.marca} ${lastProduct.modelo}`}</h2>
						</div>
						<div className={styles.description}>
							{lastProduct.descripcion}
						</div>
					</div>
				)}

				{!lastProduct && (
					<div className={styles.divLoading}>
						<h2 className={styles.titleLoading}>Cargando...</h2>
					</div>
				)}

				{lastProduct && (
					<div className={styles.link}>
						<a
							href={`http://localhost:5000/products/${lastProduct.id}`}
							target="_blank"
						>
							<span className={styles.linkLastProduct}>
								Mirar ultimo producto
							</span>
						</a>
					</div>
				)}

				{!lastProduct && (
					<div className={styles.link}>
						<div>	
							<span className={styles.linkLastProduct}>
								Cargando...
							</span>
						</div>
					</div>
				)}
			</div>

			<div className={styles.mainContent}>
				<div className={styles.titleContainer}>
					<h5 className={styles.title}>
						Ultimo usuario en la base de datos
					</h5>
				</div>
				{lastUser && (
					<div className={styles.mainDescription}>
						<div className={styles.imageContainer}>
							<i
								className={`fa-solid fa-image ${styles.image}`}
							></i>
						</div>
						<div className={styles.imageTitle}>
							<h2>{`${lastUser.firstName} ${lastUser.lastName}`}</h2>
						</div>
						<div className={styles.description}>
							<ul>
								<li>{lastUser.email}</li>
								<li>{lastUser.emailRespaldo}</li>
								<li>{lastUser.phoneNumber}</li>
							</ul>
						</div>
					</div>
				)}
				{!lastUser && (
					<div className={styles.divLoading}>
						<h2 className={styles.titleLoading}>Cargando...</h2>
					</div>
				)}

				{lastUser && (
					<div className={styles.link}>
						<a
							href={`http://localhost:5000/user/${lastUser.id}`}
							target="_blank"
						>
							<span className={styles.linkLastProduct}>
								Mirar ultimo usuario
							</span>
						</a>
					</div>
				)}

				{!lastUser && (
					<div className={styles.link}>
						<div>
							<span className={styles.linkLastProduct}>
								Cargando...
							</span>
						</div>
					</div>
				)}

			</div>
		</div>
	);
}

export default Main;
