import { IconX } from '@tabler/icons-react'
import { IconCircle } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import styles from './Locker.module.css'

const figureMap = {
    '': null,
    'X': <IconX size={80} />,
    'O': <IconCircle size={80} />
}


const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };


function Locker ({id, figureTurn}) {

    return (
        <div className={`locker ${styles.locker}`} id={id} >
            {
                figureMap[figureTurn] &&
                <motion.div
                    initial={{rotate:0, scale:0.1}}
                    animate={{rotate:360, scale:1}}
                >
                    {figureMap[figureTurn]}
                </motion.div>
            }
        </div>
    ) 
}

export default Locker