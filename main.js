var pricesArray = [];

//grab value from budget input
$('#submit').click(function saveBudget(){
  var budgetInput = $('#budget-input').val();
  var newElement = $('<span></span>').append(budgetInput);
  $('.ask-budget').append(newElement);
  console.log(budgetInput);
  console.log(pricesArray);


});


//push prices to array; total them
$('#addIt').click(function addItem(){
  console.log('clicked');
  //grab value of inputs
  var priceInput = $('#price').val();
  var itemInput = $('#item').val();
  var newItem = $("<li></li>", {id : priceInput})
  newItem.append( itemInput + " " + priceInput);
  var removeBtn = $('<button></button').append('-');
  //push value to the array
  pricesArray.push(priceInput);
  // console.log(priceInput);
  // console.log(pricesArray);
  var total = 0;

  //loop it through to add up the prices
for (var i = 0; i < pricesArray.length; i++) {
    total += pricesArray[i] << 0;

  console.log(total);
  console.log(pricesArray);
}

  //put items on the page
  $('ul').append(newItem);
  $(newItem).append(removeBtn);
});

//remove items from DOM and array -- successfully removing from DOM. cannot grab value of removed li to either remove from array or subtract from array sum
  $('body').on('click', 'li', function(){
    total = 0
    var itemId = $(this).attr('id');
    console.log('remove button clicked');
    $(this).closest('li').remove();
    //re-add the items in the array
    for (var i = 0; i < pricesArray.length; i++) {
        total += pricesArray[i] << 0;
  }
      itemIdPrice = parseInt(itemId, 10);
      newTotal = total - itemIdPrice;
      // console.log(arrayTotal);
      console.log(newTotal);

});
