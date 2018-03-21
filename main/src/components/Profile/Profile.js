
import React,{Component} from 'react';
import {connect} from 'react-redux';
import Pie from '../Chart/Pie'

class Profile extends Component{
  renderContent(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let minViewportSize = Math.min(width, height);
    // This sets the radius of the pie chart to fit within
    // the current window size, with some additional padding
    let radius = (minViewportSize * .9) / 10;
    // Centers the pie chart
    let x = width / 10;
    let y = height / 12;
    if(this.props.currentUser){
      return(
        <div>
        <h2 style={{marginBottom:30}}> Username:{this.props.currentUser.username}</h2>
        <h3> Your record:</h3>
        <ul  style ={{listStyle: 'None', margin: 0, padding:0}}>
          <li> Wins:{this.props.currentUser.wins} </li>
          <li> Losses:{this.props.currentUser.losses} </li>
          <li> Ties: {this.props.currentUser.ties}   </li>
        </ul>
        <h3> Difficulty Breakdown of Matches:</h3>
        <svg style = {{height: 500, paddingTop: 50}} width="100%" height="100%" >

        <Pie x={x} y={y} radius={radius} data={[this.props.currentUser.easy,this.props.currentUser.normal, this.props.currentUser.hard ]} />
        ///
        </svg>
        </div>
      )
    }
    else{
      return(
      <div>
      <h1> Pelease <a href= "/auth/google"> Login </a> to view your profile </h1>
      </div>
    )
    }
  }
  render(){

    return(
      this.renderContent()
    )
  }
}
const mapStateToProps = (state)=>{
  const currentUser = state.auth
  return{currentUser}
}
export default connect(mapStateToProps,null)(Profile);
