//function calculatePrice (phonePrice, customsFee, taxFee) {
  //  var phonePrice = $('#insert-price').val();
 //  var customsFee = (phonePrice /100) *5;
   // var taxFee = (phonePrice+customFee) + ()



 // function calculateTotalPrice(itemPrice) {
 //     return itemPrice* 1.05 * 1.18;

 // }

 /// var priceOfTrotinetFromSolun = calculateTotalPrice(420);

 // alert (priceOfTrotinetFromSolun);///



  /////////////////////////////////

 /* function calculateCost()  {
 var bhp = 54;
    if (bhp >150) {
    return 15000;
  }if (bhp > 85 ) {
  return 5000;
  }if (bhp <85){
  return 3000;
  }

 
  }

  var bhp= calculateCost(90);
    
  alert (bhp);
*/






function calculate () {
var x;
x = document.getElementById("insert-price").value * 1.05 * 1.18;
x=document.getElementById("rezultat").value = Math.round (x);
}
