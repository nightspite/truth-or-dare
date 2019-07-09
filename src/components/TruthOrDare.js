import React from 'react';

const TruthOrDare = ({players}) => {
  const randomPick = Math.floor(Math.random() * players.length)
  return (
    <div className="truth-or-dare">
     {/* <Players players={players}/> */}

      <div className="card">
        <div className="truth">TRUTH</div>
        <div className="player">
          {players[randomPick].name}
          
        </div>
        <div className="dare">DARE</div>
      </div>
    </div>
  );
}

export default TruthOrDare;

