import styles from './UserData.module.css'

import {Link} from 'react-router-dom'

function UserData (props) {
    return (
        <tr>
			<td className={styles.cellPadding + ' ' + styles.column1}>{props.id}</td>
			<td className={styles.cellPadding + ' ' + styles.column2}><a href={`http://localhost:5000/user/${props.id}`} target="_blank" className={styles.link}>{props.firstName}</a></td>
			<td className={styles.cellPadding + ' ' + styles.column3}><a href={`http://localhost:5000/user/${props.id}`} target="_blank" className={styles.link}>{props.lastName}</a></td>
            <td className={styles.cellPadding + ' ' + styles.column4}><a href={`http://localhost:5000/user/${props.id}`} target="_blank" className={styles.link}>{props.userName}</a></td>
			<td className={styles.cellPadding + ' ' + styles.column5}><a href={`http://localhost:5000/user/${props.id}`} target="_blank" className={styles.link}>{props.email}</a></td>
			<td className={styles.cellPadding + ' ' + styles.column6}>{props.phoneNumber}</td>
            <td className={styles.cellPadding + ' ' + styles.column7}>
                {
                    props.typeOfUser === 1 && 'Admin'
                }    
                {
                    props.typeOfUser !== 1 && 'Cliente'
                }    
            </td>
		</tr>
    )
}



export default UserData;