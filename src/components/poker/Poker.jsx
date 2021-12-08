import "./Poker.css"

const Player = () => {
    return (
        <div className="player">
            {/* <img src="https://www.pinclipart.com/picdir/big/411-4115229_profile-account-contact-avatar-portrait-man-users-comments.png" alt="" className="player-img" /> */}
            <div className="player-info">
                <div className="player-name">Player</div>
                <div className="player-balance">$999</div>
            </div>
            <div className="modifier">
                <div className="addsub">
                    <button class = "addButton">+</button>
                    <button class = "subButton">-</button>
                </div>
                <input type = "number" class = "betDial"/>
            </div>
        </div> 
    )
}

const Poker = () => {
    return (
        <div className = "pkr">
            <div className="game-area">
                <div className="players">
                    <Player></Player>
                    <Player></Player>
                    <Player></Player>
                    <Player></Player>
                </div>
                <button className="pot">Pot: $<span id = "potValue">0</span></button>
            </div>
        </div>
    )
}

export default Poker
