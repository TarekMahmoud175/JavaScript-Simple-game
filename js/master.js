/*jslint plusplus: true */
function createTable(x, y) {
  event.preventDefault();
  X = x.value, Y = y.value;
  var myTable = "<table id=\"created\">";
  var i, z;
  for (i = 1; i <= X; i++) {
    myTable = myTable + "<tr>";
    for (z = 1; z <= Y; z++) {
      myTable = myTable + "<td ";
      // if(change[0].checked)
      myTable += " onclick='changecolor(this, \"click\")'";
      // if(change[1].checked)
      myTable += " onmouseover='changecolor(this, \"hover\")'";
      myTable += " id=" + "\"" + i + "" + z + "\">" + "</td>";
    }
    myTable = myTable + "</tr>";
  }
  myTable = myTable + "</table>";
  document.getElementById('table').innerHTML = myTable;
}
function changecolor(td, event) {
  var change = document.getElementsByName('change');
  if ((event == "click" && change[0].checked) || (event == "hover" && change[1].checked)) {
    if (td.style.backgroundColor == "white" || td.style.backgroundColor == "") td.style.backgroundColor = "grey";
    else if (td.style.backgroundColor == "grey") td.style.backgroundColor = "black";
    else if (td.style.backgroundColor == "black") td.style.backgroundColor = "white";
  }
}
  // var change = document.getElementsByName('change');
  // console.log("event", event);
  // console.log("Click", change[0].checked, ", Hover", change[1].checked);
// var times =0 ;
// if(times == 0 )
// td.style.backgroundColor = "black";
// if(times == 1)
//   td.style.backgroundColor = "grey";
// if(times == 2)
//   td.style.backgroundColor = "white";
// times++
// if (times == 3)
//   times = 0 ;
// function changebyclick(){
//  var i , z;
//  var rows = document.getElementById('x').value ,
//     cols = document.getElementById('y').value;
//   for (i = 1 ; i <= rows ;i++) {
//     for(z=1 ; z<= cols ; z++){
//       document.getElementById(i+""+z).onClick=function(){
//         document.getElementById(i+""+z).style.background="black";
//       }
//     }
//     }}
