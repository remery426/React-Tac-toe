import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import * as actions from '../actions';

class Header extends Component{
  renderContent(){
    if(this.props.currentUser){
      return(
      <div>
      <Link to = '/profile'> View your match history</Link>
      <a href= '/api/logout'> Logout </a>
      </div>
    )
    }
    else{
      return(
      <a href= "/api/auth/google">Login</a>
    )
    }
  }
  render(){
    return(
      <div>
      <h1> <Link to= '/'> React-tac-toe</Link> </h1>
      {this.renderContent()}
      </div>

    )
  }
}

const mapStateToProps = (state) =>{
  const currentUser = state.auth;
  return {currentUser}
}
export default connect(mapStateToProps,actions)(Header);
