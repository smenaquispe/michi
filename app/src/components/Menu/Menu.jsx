import { useContext } from "react";
import { StageContext } from "../../services/StageContext";
import styles from './Menu.module.css'
import { IconDeviceDesktop, IconFriends } from '@tabler/icons-react';

function Menu({setGameMode}){   

    const { setStage } = useContext(StageContext)

    const goToMultiPlayer = () => {
        localStorage.setItem('gamemode', JSON.stringify('multiplayer'))
        setStage('game')
        setGameMode('multiplayer')
    }

    const goToSinglePlayer = () => {
        localStorage.setItem('gamemode', JSON.stringify('singleplayer'))
        setStage('game')
        setGameMode('singleplayer')
    }

    return (
        <>
            <div className={styles.panelButtons}>
                <button onClick={goToSinglePlayer}>
                    <IconDeviceDesktop size={50} />                    
                </button>
                <button onClick={goToMultiPlayer}>
                    <IconFriends  size={50} />
                </button>
            </div>
        </>
    )

}

export default Menu;