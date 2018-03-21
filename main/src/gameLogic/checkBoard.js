function threeInRow(arr){
  var found = true
  for(var i =1; i < arr.length; i++){
    if(arr[i-1] !=arr[i] || arr[i] == ' '){
      found = false
      break
    }
  }
  if (found == true){
    return true
  }
  return false
}
function checkHor(board){
  for(var i = 0; i <board.length; i++){
    if (threeInRow(board[i])){
      return true
    }
  }
  return false
}
function checkVert(board){
  for(var i = 0; i <3; i++){
    var col = []
    for(var j = 0 ; j <3; j++){
      col.push(board[j][i])
    }
    if (threeInRow(col)){
      return true
    }
  }
  return false
}
function checkDiag(board){
  var diag = []
  for(var i = 0; i <3; i++){
    diag.push(board[i][i])
  }
  if (threeInRow(diag)){
    return true

  }
  diag = []
  for(var i =0; i<3; i++){
    diag.push(board[i][2-i])
  }
  if(threeInRow(diag)){
    return true
  }
  return false

}
function checkBoard(board){
  if (checkHor(board) ==true){
    return true
  }
  if (checkVert(board)==true){

    return true
  }
  if (checkDiag(board)==true){
    return true
  }
  return false
}
export default checkBoard
