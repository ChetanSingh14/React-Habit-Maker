import styles from './Display.module.css'
 
export default function CustomList ({listData,handleDelete}) {

    const {
        What = '',
        Where = '',
        Why = '',
        date = '',
        id = ''
    } = listData || {}

    console.log({listData})


    return (
        <ul className={styles.orderedList}>
            <li>{What}</li>
            <li>{Where}</li>
            <li>{Why}</li>
            <li>{date}</li>
            <button onClick={() =>handleDelete(id)}>Delete</button>
        </ul>
    )
}