var pricesArray = [];

//grab value from budget input
$('#submit').click(function saveBudget(){
  var budgetInput = $('#budget-input').val();
  var newElement = $('<span id="theBudget"></span>').append('$' + budgetInput);
  // $('.ask-budget').append(newElement);
  $('#submit').css('display', 'none');
  $('.fa-check-circle-o').css('display', 'inline');
  $('#budget-input').css('margin-right', '5%');
  console.log(budgetInput);
  console.log(pricesArray);
  localStorage.setItem('budget', budgetInput);

});


//push prices to array; total them
$('#addIt').click(function addItem(){
  console.log('clicked');
  var priceInput = $('#price').val();
  var itemInput = $('#item').val();
  //create new elements with id
  var newListItem = $("<li class=newListItem></li>");
  var newEntry = $('<span class=newEntry></span>');
  var newPrice = $("<span class=newPrice></span>", {id : priceInput});
  var totalSpot = $('#total');
  newPrice.append('$ ' + priceInput);
  newEntry.append(itemInput);
  newListItem.append(newPrice, newEntry);
  document.getElementById('price').value = ' ';
  document.getElementById('item').value = ' ';
  var total = 0;

  //push value to the array
  pricesArray.push(priceInput);

  //loop it through to add up the prices
for (var i = 0; i < pricesArray.length; i++) {
    total += pricesArray[i] << 0;
}

  var budget = localStorage.getItem('budget')
  //put items on the page
  $('ul').append(newListItem);
  // $(newListItem).append(removeBtn);
  console.log(total);
  var remaining = budget - total;
  var budgetSpace = document.getElementById('budgetSpace');
  console.log(remaining);
  // console.log('Remaining monz' + newElement.val - total);

  $('#totalId').html(total);
  $('#remainingCash').html(remaining);
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

  //subtract value from array total
      itemIdPrice = parseInt(itemId, 10);
      newTotal = total - itemIdPrice;
      $('p').html(newTotal);
      console.log(newTotal);

});

$('#reset').on('click', function(){
  window.location.reload();
})
