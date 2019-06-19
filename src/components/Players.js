import React from 'react';

const Players = ({players, deletePlayer}) => {
  const playerList = players.length ? (
    players.map(player => {
      return (
        <div className="player" key={player.id}>
          <div className="gender">{player.gender}</div>
          <span>{player.name}</span>
          <i className="material-icons" onClick={() => {deletePlayer(player.id)}}>close</i>
        </div>
      )
    })
  ) : (
    <p>Add player</p>
  )
  return (
      <div className="players">
        {playerList}
      </div>
  )
}

export default Players;