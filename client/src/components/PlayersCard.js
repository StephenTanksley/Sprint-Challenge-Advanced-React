import React from 'react'
import {Container} from './styled'

export default function PlayersCard(player) {
    console.log(player)
    return (
        <Container>
            <h4 className="name">Name: {player.player.name}</h4>
            <p>Country: {player.player.country}</p>
            <p>Searches: {player.player.searches}</p>
            
            {/* Test data */}
            {/* <h4 className="name">Name: </h4>
            <p>Country: </p>
            <p>Searches: </p> */}

        </Container>
    );
};