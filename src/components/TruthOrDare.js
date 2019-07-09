import React from 'react';

const TruthOrDare = ({players}) => {
  const playerRoll = players.length ? (
    players.filter(player => {
      return (
        player.id === 3
      )
    })
  ) : (
    <div className="player no-players">
      <span>Add users</span>
    </div>
  )

  return (
    <div className="truth-or-dare">
     {/* <Players players={players}/> */}

      <div className="card">
        <div className="truth">TRUTH</div>
        <div className="player">
          {playerRoll}
        </div>
        <div className="dare">DARE</div>
      </div>
    </div>
  );
}

export default TruthOrDare;

