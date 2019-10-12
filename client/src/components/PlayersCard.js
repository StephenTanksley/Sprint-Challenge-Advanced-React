import React from 'react'

export default function PlayerCard({player}) {
    return (
        <div>

            <h2 className="name">Name: {player.name}</h2>
            <h3>Country: {player.country}</h3>
            {/* <h3>Searches: {player.searches}</h3> */}
        </div>
    );
};