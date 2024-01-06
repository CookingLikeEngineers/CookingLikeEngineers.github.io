function multiplyValues() {
  // Get selected multiplier
  var selectedMultiplier = document.getElementById("multiplier").value;

      // Get and update the bread text
      var scale_status = document.getElementById("scale_status");
      var originalBreadValue = scale_status.innerHTML;
      var breadNumber = parseFloat(originalBreadValue.match(/\d+(\.\d+)?/)[0]);
      var multipliedBreadValue = breadNumber * parseFloat(selectedMultiplier);
      scale_status.innerHTML = originalBreadValue.replace(/\d+(\.\d+)?/, multipliedBreadValue);

  // Get all tables with class "ingredientTable"
  var tables = document.getElementsByClassName("recipe_card");

  // Iterate through tables
  for (var t = 0; t < tables.length; t++) {
    var table = tables[t];

    // Iterate through rows and multiply values in the first column
    for (var i = 0; i < table.rows.length; i++) {
      var cell = table.rows[i].cells[0];
      var originalValue = cell.innerHTML;
      var number = parseFloat(originalValue.match(/\d+(\.\d+)?/)[0]);
      var multipliedValue = number * parseFloat(selectedMultiplier);
      cell.innerHTML = originalValue.replace(/\d+(\.\d+)?/, multipliedValue);
    }
  }

}
