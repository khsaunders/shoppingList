var pricesObject = {};
var items = [];

//grab value from budget input
$('#submit').click(function saveBudget(){
  var budgetInput = $('#budget-input').val();
  var newElement = $('<span></span>').append(budgetInput);
  $('.ask-budget').append(newElement);
})


//push prices to array; total them
$('#addIt').click(function addItem(){

  //grab value of inputs
  var priceInput = $('#price').val();
  var itemInput = $('#item').val();
  var newItem = $("<li></li>").append( itemInput + " " + priceInput);
  var removeBtn = $('<button></button').append('-');

  //push value to the array
  pricesOject.push(priceInput);
  console.log(priceInput);
  var total = 0;

  //loop it through to add up the prices
for (var i = 0; i < pricesOject.length; i++) {
    total += pricesOject[i] << 0;
  console.log(total);
}

  //put items on the page
  $('ul').append(newItem);
  $(newItem).append(removeBtn);
});

//remove items from DOM and array
  $('body').on('click', 'li', function(){
    console.log('remove button clicked');
    $(this).closest('li').remove();
    var content =  $(this).closest('li');
    console.log(content);
});
