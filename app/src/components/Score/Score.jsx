import { useEffect, useState, useContext } from 'react';
import { StageContext } from '../../services/StageContext';
import styles from './Score.module.css'
import { IconX, IconCircle } from '@tabler/icons-react';

function Score ({winner}){

    const [scores, setScores] = useState({'X': 0, 'O': 0})

    const { stage } = useContext(StageContext)
    
    useEffect(() => {
        if(winner && winner !== 'draw'){
            setScores({
                ...scores,
                [winner]: scores[winner] + 1,
            })
        }
    }, [winner])

    return (
        <div className={styles.scoreTable} id="score-table">
            <div className={styles.scoreTittle}>
                Score
            </div>
            <div className={styles.scoreSpaces}>
                <div className={styles.letters}>
                    <p><IconX /></p>
                    <p><IconCircle /></p>
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