let b = document.getElementById("carogame");
let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
  board[i] = new Array(0, 0, 0, 0, 0);
}
for (let i = 0; i < 5; i++) {
  data += "<br>";
  for (let j = 0; j < 5; j++) {
    data += board[i][j] + "&nbsp;&nbsp;";
  }
}
data +=
  "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>";
b.innerHTML = data;

function changeValue() {
  let positionX = +prompt("Toa do X");
  let positionY = +prompt("Toa do Y");
  data = "";
  board[positionX][positionY] = "x";
  for (let i = 0; i < 5; i++) {
    data += "<br>";
    for (let j = 0; j < 5; j++) {
      data += board[i][j] + "&nbsp;&nbsp;";
    }
  }
  data +=
    "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>";
  b.innerHTML = data;
}
