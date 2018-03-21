import React from'react';
import {connect} from 'react-redux';
import Footer from './Footer';
import Square from './Square';
import axios from 'axios';
import checkBoard from '../gameLogic/checkBoard';
import checkTie from '../gameLogic/checkTie';
import easyMove from '../gameLogic/easyMove';
import hardMove from '../gameLogic/hardMove';
import Difficulty from './Difficulty'
import * as actions from '../actions';
class Board extends React.Component{
  renderName(){
    if(this.props.currentUser){

      return <h4> Welcome back {this.props.currentUser.username} </h4>

    }

    return null
  }
  renderSelect(){
    if(this.props.single == true){
      return(
        <Difficulty/>
      )
    }
  }
  renderTurn(){
    if(this.props.tie == true){
      if(this.props.currentUser){
        setTimeout(() =>{
          this.props.updateUser({ difficulty: this.props.difficulty, result: 'Tie' })},1500)
    }
      return <h3> Its a tie </h3>
    }
    else if (this.props.won == true){
      if(this.props.turn ==1){
        if(this.props.single == true){
          if(this.props.currentUser){
            setTimeout(() =>{
              this.props.updateUser({ difficulty: this.props.difficulty, result: 'Loss' })},1500)
        }
          return <h3> Computer wins </h3>
        }
        return <h3> Player two wins </h3>

      }
      else{
        if(this.props.single == true){
        setTimeout(() =>{
          this.props.updateUser({ difficulty: this.props.difficulty, result: 'Win' })},1500)
          return <h3>You win </h3>

          }
          else{
              return <h3> Player one wins </h3>
          }
      }
    }
    if(this.props.turn ==1){
      if(this.props.single == true){
        return <h3> Your turn </h3>
      }
      else{
      return <h3> Player ones turn </h3>
    }
    }
    else{
      return <h3> Player twos turn </h3>
    }
  }
  componentDidUpdate(){
    console.log(this.props.currentUser)
    if(checkBoard(this.props.gameBoard)==true){
      {this.props.setWin()}

    }
    else{
     if(checkTie(this.props.gameBoard) == true){
      {this.props.setTie()}
    }

    else if(this.props.single == true && this.props.turn ==2) {

      if (this.props.difficulty == 'Easy'){
        var turn_obj = easyMove(this.props.gameBoard)
      }
      else{
        if(this.props.difficulty == 'Normal'){
          var turn_obj = hardMove(false,this.props.gameBoard)

        }
        else{
            var turn_obj = hardMove(true,this.props.gameBoard)
        }

      }
      this.props.fetchBoard(turn_obj)
  }
}
}


  render(){
    return(
      <div>
      <div style={{marginBottom:50}}>
      {this.renderName()}
      {this.renderSelect()}
      <br/>
      {this.renderTurn()}
      <table style= {{listStyle: 'none', margin:0, padding: 0}} >
      {this.props.gameBoard.map((item, row)=>
        <tr>
        {item.map((thing, index)=>
          <tr key = {3*row+index} style= {{listStyle: 'none',  margin:1, padding: 0, width:70,height:70, display: 'inline-block'}}> <Square value = {thing} x= {index} y= {row}/> </tr>
        )}
        </tr>
      )}
      </table>
      </div>
      <Footer/>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  const {gameBoard, turn, won,tie,single, difficulty} = state.game;
  const currentUser = state.auth
  return{gameBoard, turn, won,tie,single, difficulty, currentUser}
}
export default connect(mapStateToProps,actions)(Board)
