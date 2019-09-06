import React from 'react';


const PlayerData = (props) => {
    console.log(props)
    return(
        <div>
            <h2>Women</h2>
            <h3>{props.player.name}</h3>
            <h4>{props.player.country}</h4>
            <p>{props.player.searches}</p>
        </div>
    )
}

export default PlayerData;