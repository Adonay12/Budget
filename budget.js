$(document).ready(function() {
  var i = 1;
  $("#add_row_income").click(function() {
    $('#addr' + i).html("<td>" + (i + 1) + "</td><td><input name='name" +
    i + "' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='Amount" +
    i + "' type='text' placeholder='Amount in $$'  class='amount form-control input-md'></td><td><input  name='total" +
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
  var total = 0;
  $('.income').on('change', 'input.amount', function (event) {
    var amounts = $('.income input.amount')
    var total = 0;
    for (var i = 0; i < amounts.length; i++) {
      total += Number(amounts[i].value)

    }
    // $("#totals").innerHTML = total;
    $('#totals').val(total)
    console.log(total)
  })

});
  var j = 1;

$(document).ready(function() {
  $("#add_row_expense").click(function() {
    $('#addrr' + j).html("<td>" + (j + 1) + "</td><td><input name='name" +
    j + "' type='text' placeholder='Name' class='form-control input-md'  /> </td><td><input  name='Amount" +
    j + "' type='text' id='money' placeholder='Amount in $$' value=''  class='restAmount form-control input-md money'></td><td><input  name='total" +
    j + "' type='text' placeholder='Total' id='totalss' class='form-control input-md'></td>");

    $('#tab_logic').append('<tr id="addrr' + (j + 1) + '"></tr>');
    j++;
    if(j>2){
      console.log('getting into the loop for expenses');
      console.log(j);
        document.getElementById('totalss').remove();
        console.log(document.getElementById('totals'))


    }
  });
  $("#delete_row_expense").click(function() {
    console.log("hello1");
    if (j > 1) {

      $("#addrr" + (j - 1)).html('');
      j--;
    }
  });
    var remaining = 0;
  $('.expense').on('change', '.restAmount', function (event) {
    var amounts = $('.expense .restAmount')
    var remaining = 0;
    for (var i = 0; i < amounts.length; i++) {
      remaining += Number(amounts[i].value)

    }
    $('#totalss').val(remaining - $('#totals').val());
    console.log(remaining)
  })


});

