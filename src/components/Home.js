import React from 'react';
//add users
const Home = ({players, deletePlayer}) => {
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
    <div className="add-players">
      <div className="players">
        {playerList}
      </div>
      <div className="add-player"></div>
        <button className="start-btn">
        <i className="material-icons">play_arrow</i> <p>Let's play!</p>
        </button>
     </div>


  )
}

export default Home;


