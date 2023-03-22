import styles from './Score.module.css'

function Score (){
    return (
        <div className={styles.scoreTable}>
            <div className={styles.scoreTittle}>
                Score
            </div>
            <div className={styles.scoreSpaces}>
                <div className={styles.letters}>
                    <p>X</p>
                    <p>O</p>
                </div>
                <div className={styles.scores}>
                    <p>
                        llll llll
                        <br />
                        llll
                        <br />
                        llll
                        <br />

                    </p>
                    <p>ll</p>
                </div>
            </div>
        </div>
    )
}

export default Score;