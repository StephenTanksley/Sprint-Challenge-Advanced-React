import React from 'react'
// import {useLocalStorage} from '../utils/useLocalStorage'
import PlayersCard from './PlayersCard'

export default function PlayersList ({ data }) {

    return (
        <div>
            {data && data.map(player => {
                return (
                <PlayersCard 
                    key={player.name} 
                    player={player} 
                    />
            )})}
        </div>
    )
}