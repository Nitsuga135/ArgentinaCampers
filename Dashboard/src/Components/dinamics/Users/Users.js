// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import UserData from './UserData/UserData';

import styles from './Users.module.css';

function Users() {
	const [users, setUsers] = useState();

	const [numPage, setNumPage] = useState(1);

	useEffect(() => {
		fetch(`http://localhost:5000/api/users?page=${numPage}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.data) {
					setUsers(data.data);
				} else {
					setNumPage(numPage - 1);
				}
			})
			.catch((err) => {
				if (err) {
					console.log('hola');
				}
			});
	}, [numPage]);

	let previousPage = (e) => {
		if (numPage === 1 || numPage < 1) {
			e.preventDefault();
		} else {
			setNumPage(numPage - 1);
		}
	};

	let nextPage = (e) => {
		if (numPage < 1) {
			e.preventDefault();
		} else {
			setNumPage(numPage + 1);
		}
	};

	return (
		<div className={styles.dataContainerAll}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>Usuarios</h2>
			</div>
			<div className={styles.infoContainer}>
				{users && (
					<table className={styles.dataTable}>
						<thead className={styles.tableHead}>
							<tr>
								<th className={ styles.column1 }>Id</th>
								<th className={ styles.column2 }>Nombre</th>
								<th className={ styles.column3 }>Apellido</th>
								<th className={ styles.column4 }>Nombre de usuario</th>
								<th className={ styles.column5 }>Email</th>
								<th className={ styles.column6 }>Numero telefonico</th>
								<th className={ styles.column7 }>Tipo de usuario</th>
							</tr>
						</thead>
						<tbody className={styles.tableBody}>
							{users &&
								users.map((user, i) => {
									return <UserData {...user} key={i} />;
								})}
						</tbody>
					</table>
				)}
				{users === undefined && (
					<div className={styles.loadingUsers}>
						<h2 className={styles.titleLoadingUsers}>
							Cargando...
						</h2>
					</div>
				)}
			</div>

			{users && (
				<div className={styles.containerArrows}>
					<div onClick={previousPage} className={styles.containerArrowLeft}>
						<i className={`fa-solid fa-arrow-left-long ${styles.arrowLeft}`}></i>
						<span className={styles.textArrowLeft}>Anterior</span>
					</div>
					<div onClick={nextPage} className={styles.containerArrowRight}>
						<span className={styles.textArrowRight}>Siguiente</span>
						<i className={`fa-solid fa-arrow-right-long ${styles.arrowRight}`}></i>
					</div>
				</div>
			)}
		</div>
	);
}

export default Users;
