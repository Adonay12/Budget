$(document).ready(function() {
  var i = 1;
  $("#add_row_income").click(function() {
    $('#addr' + i).html("<td>" + (i + 1) + "</td><td><input name='name" +
    i + "' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='Amount" +
    i + "' type='text' placeholder='Amount in $$'  class='form-control input-md'></td><td><input  name='total" +
    i + "' type='text' placeholder='Total' id='totals' class='form-control input-md'></td>");

    $('#tab_logicc').append('<tr id="addr' + (i + 1) + '"></tr>');
    i++;
    if(i>2){
      console.log('getting into the loop');
      console.log(i);
      console.log(document.getElementById('totals'))
      document.getElementById('totals').remove();

    }
  });
  $("#delete_row_income").click(function() {
    if (i > 1) {
      $("#addr" + (i - 1)).html('');
      i--;
    }
  });

});
$(document).ready(function() {
  var j = 1;
  $("#add_row_expense").click(function() {
    $('#addrr' + j).html("<td>" + (j + 1) + "</td><td><input name='name" +
    j + "' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='Amount" +
    j + "' type='text' placeholder='Amount in $$'  class='form-control input-md'></td><td><input  name='total" +
    j + "' type='text' placeholder='Total' id='totalss' class='form-control input-md'></td>");

    $('#tab_logic').append('<tr id="addrr' + (j + 1) + '"></tr>');
    j++;
    if(j>2){
      console.log('getting into the loop for expenses');
      console.log(j);
     // console.log(document.getElementById('totals'))
      document.getElementById('totalss').remove();

    }
  });
  $("#delete_row_expense").click(function() {
    if (j > 1) {

      $("#addrr" + (j - 1)).html('');
      j--;
    }
  });

});
