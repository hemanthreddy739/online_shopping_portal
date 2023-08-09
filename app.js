
  function validloginfunc(){
  var uname = document.forms["form1"]["uname"].value;
  var pass = document.forms["form1"]["pass"].value;
  if( uname == null || uname == ""){
      alert("user name can't be null");
      return false;
  }
  if(uname.length<3){
        alert("username must be atleast 3 characters");
        return false;
    }

   if(pass == null || pass==""){
    alert("password should not be empty");
    return false;
   } 
   if(pass.length<8){
    alert("password should be min 8 character length");
    return false;
   }

   if(pass.includes(uname)){
    alert("don't use username in side password");
    return false;
   }

   if(pass.length>=8){
    const spclch = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(/[A-Z]/.test(pass) && spclch.test(pass) && /\d/.test(pass)){
      return true;
    }
    else{
      alert("Include atleast 1 capital letter,1 special character,1 number");
      return false;
    }
   }
   
}










var listOfCartItemsCost=[];

$('.cart').click(togglePopup);


  function togglePopup(){

    var price = $(this).parent().siblings().children('.price').html();
  
        $('.pop-up-msg').html(`one product is added to cart worth ${price}`);
        $(".content").toggle();
  }


$('.buy').click(function(){
  alert("This functionality will be implemented soon :)");
});

$('.cart-total').click(function(){
  $('.bill-summary-head').html("Message from developer")
  $('.bill-summary-msg').html("cart-total functionality will be implemented soon");
});

$('.checkout-total').click(function(){
  $('.bill-summary-head').html("Message from developer")
  $('.bill-summary-msg').html("checkout-total functionality will be implemented soon");
});



// flipping-po-up

$(function() {
  $('.flipping-po-up').delay(2000).fadeOut();
 });

 