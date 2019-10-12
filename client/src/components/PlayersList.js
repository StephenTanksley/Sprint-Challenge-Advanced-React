import React from 'react'
import {Container} from './styled'
// import {useLocalStorage} from '../utils/useLocalStorage'
import PlayersCard from './PlayersCard'

export default function PlayersList ({ players }) {

    return (
        <div>
            <Container>
            {players && players.map(player => {
                return (
                    <PlayersCard 
                        key={player.name} 
                        player={player} 
                        />
                        )})}
                        </Container>
        </div>
    )
}