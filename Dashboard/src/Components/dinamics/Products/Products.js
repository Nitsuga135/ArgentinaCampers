// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ProductData from './ProductData/ProductData';
import MostPopular from './ProductData/MostPopular';

import styles from '../Users/Users.module.css';

function Products() {
	const [products, setProducts] = useState();
	const [numPage, setNumPage] = useState(1);

	const [mostPopular, setMostPopular] = useState();

	let loading = 'Cargando...';

	useEffect(() => {
		fetch(`http://localhost:5000/api/products?page=${numPage}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.data) {
					setProducts(data.data);
				} else {
					setNumPage(numPage - 1);
				}
			})
			.catch((err) => {
				if (err) {
					setProducts();
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

	useEffect(() => {
		fetch(`http://localhost:5000/api/mostPopular`)
			.then((response) => response.json())
			.then((data) => {
				if (data.data.length > 0) {
					setMostPopular(data.data);
				} else if (data.data.length === 0) {
					setMostPopular('');
				}
			})
			.catch((err) => {
				if (err) {
					setMostPopular(undefined);
				}
			});
	}, []);

	console.log(mostPopular);

	return (
		<div className={styles.dataContainerAll}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>Productos</h2>
			</div>

			<div className={styles.infoContainer}>
				{products && (
					<table className={styles.dataTable}>
						<thead className={styles.tableHead}>
							<tr>
								<th className={ styles.column1 }>Id</th>
								<th className={ styles.column2 }>Marca</th>
								<th className={ styles.column3 }>Color</th>
								<th className={ styles.column4 }>Capacidad</th>
								<th className={ styles.column5 }>Precio</th>
								<th className={ styles.column6 }>Stock</th>
								<th className={ styles.column7 }>Estado</th>
							</tr>
						</thead>
						<tbody className={styles.tableBody}>
							{products.map((product, i) => {
								return <ProductData {...product} key={i} />;
							})}
						</tbody>
					</table>
				)}
				{products === undefined && (
					<div className={styles.loadingUsers}>
						<h2 className={styles.titleLoadingUsers}>{loading}</h2>
					</div>
				)}
			</div>
			{products && (
				<div className={styles.containerArrows}>
					<div
						onClick={previousPage}
						className={styles.containerArrowLeft}
					>
						<i
							className={`fa-solid fa-arrow-left-long ${styles.arrowLeft}`}
						></i>
						<span className={styles.textArrowLeft}>Anterior</span>
					</div>
					<div
						onClick={nextPage}
						className={styles.containerArrowRight}
					>
						<span className={styles.textArrowRight}>Siguiente</span>
						<i
							className={`fa-solid fa-arrow-right-long ${styles.arrowRight}`}
						></i>
					</div>
				</div>
			)}

			<div
				className={
					styles.titleContainer + ' ' + styles.titleContainerSold
				}
			>
				<h2 className={styles.title}>Productos mas vendidos</h2>
			</div>

			<div className={styles.infoContainer}>
				{mostPopular && (
					<table className={styles.dataTable}>
						<thead className={styles.tableHead}>
							<tr>
								<th className={ styles.column1 }>Id</th>
								<th className={ styles.column2 }>Marca</th>
								<th className={ styles.column3 }>Color</th>
								<th className={ styles.column4 }>Capacidad</th>
								<th className={ styles.column5 }>Precio</th>
								<th className={ styles.column6 }>Stock</th>
								<th className={ styles.column7 }>Estado</th>
								<th className={ styles.column8 }>Ventas</th>
							</tr>
						</thead>
						<tbody className={styles.tableBody}>
							{mostPopular.map((product, i) => {
								return <MostPopular {...product} key={i} />;
							})}
						</tbody>
					</table>
				)}
				{mostPopular === '' && (
					<div className={styles.loadingUsers}>
						<h2 className={styles.titleLoadingUsers}>
							Ups, parece que no hay productos populares...
						</h2>
					</div>
				)}
				{mostPopular === undefined && (
					<div className={styles.loadingUsers}>
						<h2 className={styles.titleLoadingUsers}>{loading}</h2>
					</div>
				)}
			</div>
		</div>
	);
}

export default Products;
