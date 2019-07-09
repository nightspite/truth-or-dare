import React from 'react';
import Players from './Players';
import AddPlayer from './AddPlayer';
import {Link, withRouter} from 'react-router-dom';


const Home = ({players, deletePlayer, addPlayer}) => {
  return (
    <div className="home">
      <Players players={players} deletePlayer={deletePlayer}/>

        <AddPlayer addPlayer={addPlayer} />
        <Link to="/truthordare">
          <button className="start-btn">
            <i className="material-icons">play_arrow</i> <p>Let's play!</p>
          </button>
        </Link>
    </div>
  );
}

export default withRouter(Home);

