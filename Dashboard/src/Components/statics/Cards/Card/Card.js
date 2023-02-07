import styles from './Card.module.css'
import './Colores.css';



function Card (props) {
    return (
        <div className={ styles.cardContainer + ` ${props.color}BorderLeft` }>
            <div className={ styles.cardInfoContainer}>
                <div className={ styles.cardInfo }>
                    <div className={ styles.cardTitle + ` ${ props.color }CardTitle` }>{ props.title }</div>
                    <span className={ styles.cardValue }>{ props.value }</span>
                </div>
                <div className={ styles.cardIcon }>
                    <i className= {`${ props.icon } ${ styles.cardIcon }`}></i>
                </div>
            </div>
        </div>

        
    )
}

export default Card