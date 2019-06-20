import React, {Component} from 'react';

class AddPlayer extends Component{
  state = {
    name: '',
    gender: 'M'
  }


  handleChange = (e) => {
    if(e.target.value !== null){
      this.setState({
        name: e.target.value
      });
    } 
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let name = this.state.name;
    

    if(name){
      this.props.addPlayer(this.state);
      this.setState({
        name: ''
      })
    } 
  }

  handleOptionChange = (e) => {
    this.setState({
      gender: e.target.value
    });
  }


  render(){
    return(

      <div className="add-player">
        <form className="player-form" onSubmit={this.handleSubmit}>
          <div className="switch">

            
            <input type="radio" name="gender" value="M" id="male" checked={this.state.gender === 'M'} onChange={this.handleOptionChange}/>
            <label htmlFor="male" className="switch__label">M</label>
            
            
            <input type="radio" name="gender" value="F" id="female" checked={this.state.gender === 'F'} onChange={this.handleOptionChange}/>
            <label htmlFor="female" className="switch__label">F</label>
            

            <div className="switch__indicator"></div>
          </div>
          

          <input type="text" id="user-input" placeholder="Add player" onChange={this.handleChange} value={this.state.name}/>

          <button><i className="material-icons">add</i></button>
        </form>
      </div>
    )
  }
}

export default AddPlayer;