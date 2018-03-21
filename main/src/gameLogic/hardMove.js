///Checks if the middle square of the board is available
function checkMiddle(board){
  if (board[1][1]==' '){
    return true
  }
  return false
}
///checks to see if there is a 2 in row
function checkRow(value,row){
  var count = 0

  for(var i = 0; i <row.length; i++){
    if(row[i] == value){
      return -1
    }
    else if (row[i]!= ' '){
        count +=1
    }
    if (row[i] == ' '){
      var win_move = i
    }
  }
  if (count == 2){
    return win_move
  }
  return -1
}
/// Helper function to see if there is any way for the computer to win
function canWin(value,board){
  if(checkHor(value,board)){
    return checkHor(value,board)
  }
  if(checkVert(value,board)){
    return checkVert(value,board)
  }
  if(checkDiag(value,board)){
    return checkDiag(value,board)
  }
  return false
}
/// function to check if any of the horizantal rows contain two in a row  and are playble
function checkHor(value,board){
  for(var i = 0; i <board.length; i++){
    var board_val = checkRow(value,board[i])
    if (board_val>=0){
      return [i,board_val]
    }
  }
  return false
}
///Put vertcal rows into array
function checkVert(value,board){
  for(var i = 0; i <3; i++){
    var col = []
    for(var j = 0 ; j <3; j++){
      col.push(board[j][i])
    }
    var board_val = checkRow(value,col)
    if (board_val>=0){
      return [board_val,i]
    }
  }
  return false
}
function checkDiag(value,board){
  var diag = []
  for(var i = 0; i <3; i++){
    diag.push(board[i][i])
  }
  var board_val =checkRow(value,diag)
  if (board_val>=0){
    console.log("this one")
    return [board_val,board_val]

  }
  diag = []
  for(var i =0; i<3; i++){
    diag.push(board[i][2-i])
  }
  board_val = checkRow(value,diag)
  if(board_val>=0){
    return [board_val, 2-board_val]
  }
  return false

}
function checkCorner(board){
  if(board[0][0] == "X" && board[2][2]=="X" || board[2][0] == "X" && board[0][2]=="X" ){
    if(board[0][1] == ' ' && board[2][1] ==  ' '){
      return [0,1]
    }
  }
}
function getCorner(board){
  if(board[0][2] == "X" && board[2][1] == "X" && board[2][2] == ' '){
    return [2,2]
  }
  if(board[0][0] == "X" && board[2][1] == "X" && board[2][0] == ' '){
    return [2,0]
  }
  if(board[2][0] == "X" && board[1][2] == "X" && board[0][2] == ' '){
    return [0,2]
  }
  if (board[0][0] == ' '){
    return [0,0]
  }
  if(board[0][2]==' '){
    return [0,2]
  }
  if(board[2][0]==' '){
    return [2,0]
  }
  if(board[2][2]==' '){
    return [2,2]
  }
  return false
}
export default function hardMove(impossible,board){
  if (checkMiddle(board) == true){
    console.log("middle")
    return { x:1, y:1}
  }
  if (canWin('X',board)){

    var results = canWin('X',board)
    return { x: results[1], y:results[0] }
  }
  if (canWin('O',board)){

    var results = canWin('O',board)
    return { x: results[1], y:results[0] }
  }
  if(impossible == true){
  if(checkCorner(board)){
      var results = checkCorner(board)
      return {x: results[1], y:results[0]}
    }
  }
  if(getCorner(board)){
    var results = getCorner(board)
    return {x:results[1], y:results[0]}
  }
  var found_num = false
  while (found_num == false){
    var x_val = Math.floor(Math.random()*3);
    var y_val = Math.floor(Math.random()*3);
    if (board[y_val][x_val] == ' '){
      found_num = true
      return {turn:1,x:x_val, y:y_val}
    }
  }
}
