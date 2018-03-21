import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'
class Difficulty extends React.Component{
  render(){
  return(
  <div>
  Current Difficulty: {this.props.difficulty}
  <br/>
  Select difficulty:
  <ul style = {{listStyle:'none', padding: 0}}>
    <li style = {{float: 'left'}} className= '.btn-lg'> <button onClick= {() => this.props.setDifficulty('Easy')}>Easy </button> </li>
    <li style = {{float: 'left'}} className= '.btn-lg'> <button onClick = {()=>this.props.setDifficulty('Normal')}> Normal</button> </li>
    <li style = {{float: 'left'}} className= '.btn-lg'> <button onClick = {()=>this.props.setDifficulty('Hard')}> Hard </button> </li>
    </ul>
  </div>
)
}
}
const mapStateToProps = (state) =>{
  const {difficulty} = state.game;
  return {difficulty}
}
export default connect(mapStateToProps,actions)(Difficulty)
