document.getElementById('addItem').addEventListener('click', function(event) {
    event.preventDefault();

    // Get input values
    let foodItem = document.getElementById('foodItem').value;
    let price = document.getElementById('price').value;
    let output = document.getElementById('foodTable')

    // Create a new table row
    let row = output.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    // Add values to the cells
    cell1.innerHTML = foodItem;
    cell2.innerHTML = '$' + price;

    // Clear the form inputs
    document.getElementById('foodItem').value = '';
    document.getElementById('price').value = '';
});