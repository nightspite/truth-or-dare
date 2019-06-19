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

        <input type="radio" name="gender" value="M" checked={this.state.gender === 'M'} onChange={this.handleOptionChange}/>
          <label htmlFor="M">M</label>

          <input type="radio" name="gender" value="F" checked={this.state.gender === 'F'} onChange={this.handleOptionChange}/>
          <label htmlFor="F">F </label>

          <input type="text" onChange={this.handleChange} value={this.state.name}/>

          <button>SUBMIT</button>
        </form>
      </div>
        
    )
  }
}

export default AddPlayer;