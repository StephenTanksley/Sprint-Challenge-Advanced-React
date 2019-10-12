import React from 'react'

export default function PlayerCard(player) {
    console.log(player)
    return (
        <div>
            <h2 className="name">Name: {player.player.name}</h2>
            <h3>Country: {player.player.country}</h3>
            <h3>Searches: {player.player.searches}</h3>
        </div>
    );
};