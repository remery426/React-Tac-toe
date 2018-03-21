const INITIAL_STATE={gameBoard:[[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']],turn:1,won:false, single:false, tie:false, difficulty:'Easy'}
export default function (state = INITIAL_STATE,action){
  switch (action.type){
    case 'update_board':
      const newBoard =[]
      for(var i = 0; i < state.gameBoard.length; i++){
        var row = []
        for(var j =0; j <state.gameBoard[i].length;j++){
          if(action.payload.x == j && action.payload.y == i){
            if(action.payload.turn == 1){
              row.push("X")
            }
            else{
              row.push("O")
            }
          }
          else{
            row.push(state.gameBoard[i][j])
          }

        }
        newBoard.push(row.slice())
        row = []
      }
        if(action.payload.turn == 1){
          return{...state, gameBoard: newBoard, turn:2}
        }
        else{
          return{...state, gameBoard: newBoard, turn:1}
        }
    case 'set_win':
      return{...state, won:true}
    case 'set_tie':
      return{...state, tie: true}
    case 'set_difficult':
      return{...state, difficulty: action.payload}
    case 'set_game':
      return {...state, gameBoard:INITIAL_STATE.gameBoard , turn:1, won: false, tie:false, single: true}
    default:
      return state;
  }
}
