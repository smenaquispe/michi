import { useEffect, useState } from 'react';
import styles from './Score.module.css'

function Score ({winner}){

    const [scores, setScores] = useState({'X': 0, 'O': 0})

    useEffect(() => {
        if(winner && winner !== 'draw'){
            setScores({
                ...scores,
                [winner]: scores[winner] + 1,
            })
        }
    }, [winner])

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
                    <p>{scores['X']}</p>
                    <p>{scores['O']}</p>
                </div>
            </div>
        </div>
    )
}

export default Score;