function Menu({setStage}){   
    return (
        <>
            <button onClick={() => setStage('game')}>Play with Computer</button>
            <button>Play with a Friend</button>
        </>
    )

}

export default Menu;