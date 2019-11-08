import React from 'react'
import {CardDisplay} from './styled'
// import {useLocalStorage} from '../utils/useLocalStorage'
import PlayersCard from './PlayersCard'

export default function PlayersList ({ players }) {

    return (
        <CardDisplay>
            {players && players.map(player => {
                return (
                    <PlayersCard 
                        key={player.name} 
                        player={player} 
                        />
                        )})}
        </CardDisplay>
    )
}