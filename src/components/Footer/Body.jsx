import React from 'react'
import styles from './Body.module.css';

function Body(props) {
    return (
        <div className={styles.body}> 
            {props.children}
        </div>
    )
}

export default Body