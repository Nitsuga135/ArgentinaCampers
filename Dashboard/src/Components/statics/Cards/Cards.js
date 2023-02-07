import { useState, useEffect } from 'react';

import Card from './Card/Card';

import styles from './Cards.module.css';

let usersQuantity = {
	title: 'Cantidad de usuarios',
	value: 'Cargando...',
	color: 'blue',
	icon: 'fa-solid fa-users',
};

let productsQuantity = {
	title: 'Cantidad de productos',
	value: 'Cargando...',
	color: 'yellow',
	icon: 'fa-solid fa-van-shuttle',
};

let productsTotalValue = {
	title: 'Total ventas',
	value: 'Cargando...',
	color: 'green',
	icon: 'fa-solid fa-money-bill',
};

let cardsProperties = [usersQuantity, productsQuantity, productsTotalValue];

function Cards() {
	let [usuarios, setUsuarios] = useState([]);
	let [productos, setProductos] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/api/users')
			.then((response) => response.json())
			.then((data) => {
				setUsuarios(data);
				usersQuantity.value = data.count;
			})
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		fetch('http://localhost:5000/api/products')
			.then((response) => response.json())
			.then((data) => {
				setProductos(data);
				productsQuantity.value = data.count;
				productsTotalValue.value = data.totalVentas;
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className={styles.cardsContainer}>
			<div className={styles.cardsTitle}>
				<h2 className={styles.title}>App dashboard</h2>
			</div>
			<div className={styles.cards}>
				{cardsProperties.map((cardProperty, i) => {
					return <Card {...cardProperty} key={i} />;
				})}
			</div>
		</div>
	);
}

export default Cards;
