import React from 'react'
import {Container} from './styled'

export default function PlayersCard(props) {
    console.log(props)
    return (
        <Container>
            <h4 className="name">Name: {props.player.name}</h4>
            <p>Country: {props.player.country}</p>
            <p>Searches: {props.player.searches}</p>
            
            {/* Test data */}
            {/* <h4 className="name">Name: </h4>
            <p>Country: </p>
            <p>Searches: </p> */}

        </Container>
    );
};