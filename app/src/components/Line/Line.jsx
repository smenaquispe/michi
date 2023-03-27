import { motion } from 'framer-motion'
import styles from './Line.module.css'

const getProps = (pos1, pos2) => {

    const [x1, y1] = pos1
    const [x2, y2] = pos2

    let dx = x2 - x1;
    let dy = y2 - y1;
    let c = Math.sqrt(dx * dx + dy * dy);

    console.log(c)
    
    let alpha = Math.atan2(dy, dx);

    let x = x1;
    let y = y1;

    console.log(x)

    return [x, y, c, alpha]
}

function Line({pos1, pos2}){

    const [x, y, length, angle] = getProps(pos1, pos2)
    const position = {
        width: length,
        top: y,
        left: x,
        transform: `rotate(${angle}rad)`,
    }

    return (
        <motion.div 
            className={styles.line} 
            style={{...position}} 
/*
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.5}}
*/
        />
    )
}

export default Line;