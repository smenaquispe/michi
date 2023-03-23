import { useContext } from "react";
import { StageContext } from "../../services/StageContext";

function Menu(){   

    const { setStage } = useContext(StageContext)

    return (
        <>
            <button onClick={() => setStage('game')}>Play with Computer</button>
            <button>Play with a Friend</button>
        </>
    )

}

export default Menu;