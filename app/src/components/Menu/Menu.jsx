import { useContext } from "react";
import { StageContext } from "../../services/StageContext";
import styles from './Menu.module.css'
import { IconDeviceDesktop, IconFriends } from '@tabler/icons-react';

function Menu(){   

    const { setStage } = useContext(StageContext)

    const goToGame = () => {
        setStage('game')
    }

    return (
        <>
            <div className={styles.panelButtons}>
                <button onClick={goToGame}>
                    <IconDeviceDesktop size={50} />                    
                </button>
                <button>
                    <IconFriends  size={50} />
                </button>
            </div>
        </>
    )

}

export default Menu;