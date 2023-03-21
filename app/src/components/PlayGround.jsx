import styles from './PlayGround.module.css'
import Table from "./Table";

function PlayGround () {
    return (
        <main className={styles.playground}>
            <h1>Tik Tak Toe</h1>
            <Table />
        </main>
    )
}

export default PlayGround;