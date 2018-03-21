import React from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux'
class Footer extends React.Component{
  render(){
  return(
    <div>
    <button><a href ="/">New two player game</a></button>
    <button onClick = {this.props.setGameType}> <a>New one player game</a></button>
    </div>
  )
}
}
export default connect(null,actions)(Footer);
