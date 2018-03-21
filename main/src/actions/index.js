import {UPDATE_BOARD, UPDATE_USER, SET_WIN, SET_TIE, SET_GAME, SET_DIFFICULT, FETCH_USER} from './types';
import axios from 'axios';
export const fetchBoard = (data) => {
  return {type:UPDATE_BOARD, payload:data};
};
export const setWin = () => {
  return {type:SET_WIN};
};
export const setTie = () => {
  return {type:SET_TIE};
};
export const setGameType = () =>{
  return {type:SET_GAME}
}
export const setDifficulty = (data) => {
  return {type:SET_DIFFICULT, payload:data}
}
export const fetchUser = () => async dispatch=> {
  const res = await axios.get('/api/current_user');
  dispatch({type: FETCH_USER, payload:res.data})
};
export const updateUser = (gameResult) => async dispatch=> {
  const res = await axios.post('/api/updateRecord',gameResult);
  const game  = await dispatch({type:SET_GAME})
  dispatch({type: FETCH_USER, payload:res.data})
};
