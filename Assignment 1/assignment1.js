const myHeading = document.getElementById("myHeading");
let tableVisible = false;
// display text on hover and toggle on or off the table
function setHoverText() {                               
  myHeading.textContent = "Display Multiplication Table: Toggle Me";
}
function resetText() {
  myHeading.textContent = "Assignment 1";
}

myHeading.addEventListener("mouseover", setHoverText);
myHeading.addEventListener("mouseout", resetText);

myHeading.addEventListener("click", function() {
  if (!tableVisible) {
    const table = document.createElement("table");

    for (let i = 1; i <= 10; i++) {
      const row = table.insertRow();
      for (let j = 1; j <= 10; j++) {
        const cell = row.insertCell();
        cell.textContent = i * j;
      }
    }

    myHeading.insertAdjacentElement("afterend", table);
    tableVisible = true;
  } else {
    const table = document.querySelector("table");
    table.remove();
    tableVisible = false;
  }
});

function makeTable() {
  var row = parseInt(document.getElementById("rows").value);
  var col = parseInt(document.getElementById("cols").value);
  var table = "<table><p>" + row + " x " + col + " Table </p><br>";

  for (var i = 1; i <= row; i++) {
    table += "<tr>";

    for (var j = 1; j <= col; j++) {
      if (j == 1) {
        table += "<th>" + i + "</th>";
      }

      table += "<td>" + i + " x " + j + " = " + (i * j) + "</td>";
    }
    table += "</tr>";
  }
  document.getElementById("tableDiv").innerHTML = table + "</table>";
}

window.onload = makeTable();