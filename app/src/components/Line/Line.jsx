import { motion } from 'framer-motion'
import styles from './Line.module.css'

const getProps = (pos1, pos2) => {

    const [x1, y1] = pos1
    const [x2, y2] = pos2

    let a = x1 - x2,
    b = y1 - y2,
    c = Math.sqrt(a * a + b * b);

    let sx = (x1 + x2) / 2,
        sy = (y1 + y2) / 2;

    let x = sx - c / 2,
        y = sy;

    let alpha = Math.PI - Math.atan2(-b, a);

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

            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1.5}}
        />
    )
}

export default Line;