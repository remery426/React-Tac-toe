export default function easyMove(board){
    var found_num = false
    while (found_num == false){
      var x_val = Math.floor(Math.random()*3);
      var y_val = Math.floor(Math.random()*3);
      if (board[y_val][x_val] == ' '){
        found_num = true
        return {x:x_val, y:y_val}
      }
    }
}
