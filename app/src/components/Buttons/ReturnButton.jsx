import Button from "./Button"
import { IconArrowLeft } from "@tabler/icons-react"
import { useContext } from "react"
import { StageContext } from "../../services/StageContext"

function ReturnButton(){

    const { setStage } = useContext(StageContext)

    return (
        <Button onClick={() => setStage('menu')} id="returnButton">
            <IconArrowLeft size={60} />
        </Button>
    )
}

export default ReturnButton