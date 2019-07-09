import React from 'react';
import shot from './shot.png';

const TruthCard = ({players}) => {
  return (
    <div className="truth-card">
      <div className="card">
        <div className="label">TRUTH</div>
        <div className="content">Have you ever cheated on your partner?</div>
        <div className="shot">
          <img src={shot} alt="shot"/>
        </div>
        <div className="next-round-btn">Next round</div>
        
      </div>
    </div>
  );
}

export default TruthCard;

