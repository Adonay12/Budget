$(document).ready(function() {
  var i = 1;
  $("#add_row").click(function() {
    $('#addr' + i).html("<td>" + (i + 1) + "</td><td><input name='name" +
    i + "' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='Amount" +
    i + "' type='text' placeholder='Amount in $$'  class='form-control input-md'></td><td><input  name='total" +
    i + "' type='text' placeholder='Total' id='totals' class='form-control input-md'></td>");

    $('#tab_logic').append('<tr id="addr' + (i + 1) + '"></tr>');
    i++;
    if(i>2){
      console.log('getting into the loop');
      console.log(i);
      console.log(document.getElementById('totals'))
      document.getElementById('totals').remove();

    }
  });
  $("#delete_row").click(function() {
    if (i > 1) {
      $("#addr" + (i - 1)).html('');
      i--;
    }
  });

});
