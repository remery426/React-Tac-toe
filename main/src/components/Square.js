import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions';
class Square extends Component{
  constructor(props){
    super(props);
  this.handleClick = this.handleClick.bind(this);
}
  handleClick(){
    if(this.props.value == ' ' && this.props.won == false){
      {this.props.fetchBoard({turn:this.props.turn,x:this.props.x, y:this.props.y})}
    }
  }
  render(){
    return (
      <div onClick = {this.handleClick} style = {{width:70,height:70, paddingBottom:20,paddingLeft:20, borderStyle: 'solid',borderColor: 'red'}}>
        <p style ={{fontSize:40}}>{this.props.value}</p>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  const {turn, won} = state.game;
  return {turn, won}
}
export default connect(mapStateToProps,actions)(Square)
