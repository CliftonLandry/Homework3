function multiplicationTable() {
    var table;
    table = '';
    var minCol = document.getElementById("minCol").value;
    var maxCol = document.getElementById("maxCol").value;
    var minRow = document.getElementById("minRow").value;
    var maxRow = document.getElementById("maxRow").value;
    var intCheck = (((minCol - Math.floor(minCol)) !== 0) || ((maxCol - Math.floor(maxCol)) !== 0) || ((minRow - Math.floor(minRow)) !== 0) || ((maxRow - Math.floor(maxRow)) !== 0));
    var inBoundsCheck = ((minCol < -50) || (minCol > 50) || (maxCol < -50) || (maxCol > 50) || (minRow < -50) || (minRow > 50) || (maxRow < -50) || (maxRow > 50));
    var minColCheck = (maxCol - minCol < 0);
    var minRowCheck = (maxRow - minRow < 0);
    if (intCheck) {
        document.getElementById("error").innerHTML = '<h4>Error: non-integer entered</h4>';
        table = '';
    }
    else if (inBoundsCheck) {
        document.getElementById("error").innerHTML = '<h4>Error: must enter a value within -50 to 50 (inclusive)</h4>';
        table = '';
    }
    else if (minColCheck) {
        console.log(minColCheck);
        document.getElementById("error").innerHTML = '<h4>Error: minimum column is greater than maximum column</h4>';
        table = '';
    }
    else if (minRowCheck) {
        console.log(minRowCheck);
        document.getElementById("error").innerHTML = '<h4>Error: minimum row is greater than maximum row</h4>';
        table = '';
    }
    else {
        document.getElementById("error").innerHTML = '';
        table = '<table id="mtable">';
        table += '<tr>';
        table += '<td>' + '</td>';
        for (k = parseFloat(minCol); k <= parseFloat(maxCol); k++) {
            table += '<th>' + k + '</th>';
        }
        table += '</tr>';
        for (i = parseFloat(minRow); i <= parseFloat(maxRow); i++) {
            table += '<tr>';
            table += '<th>' + i + '</th>';
            for (j = parseFloat(minCol); j <= parseFloat(maxCol); j++) {
                table += '<td>' + j * i + '</td>';
            }
            table += '</tr>';
        }
    }
    table += '</table>';
    document.getElementById("result").innerHTML = table;
}