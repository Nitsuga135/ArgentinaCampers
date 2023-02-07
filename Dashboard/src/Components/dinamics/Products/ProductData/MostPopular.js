import styles from '../../Users/UserData/UserData.module.css'

import {Link} from 'react-router-dom'

function MostPopular (props) {
    return (
        <tr>
			<td className={styles.cellPadding + ' ' + styles.column1}>{props.id}</td>
			<td className={styles.cellPadding + ' ' + styles.column2}><a href={`http://localhost:5000/products/${props.id}`} target="_blank" className={styles.link}>{props.marca + ' ' + props.modelo}</a></td>
			<td className={styles.cellPadding + ' ' + styles.column5}>{props.color}</td>
            <td className={styles.cellPadding + ' ' + styles.column4}>{props.capacidad}</td>
			<td className={styles.cellPadding + ' ' + styles.column3}>{props.precioDia}</td>
			<td className={styles.cellPadding + ' ' + styles.column6}>{props.stock}</td>
            <td className={styles.cellPadding + ' ' + styles.column7}>
                {
                    props.estado_id === 1 && 'Disponible'
                }    
                {
                    props.estado_id === 2 && 'No disponible'
                }
                {
                    props.estado_id === 3 && 'En mantenimiento'
                }         
            </td>
            <td className={styles.cellPadding + ' ' + styles.column3}>{props.ventas}</td>
		</tr>
    )
}



export default MostPopular;