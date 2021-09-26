function myFunction() {
    //document.getElementById("hello").innerHTML = "Hello World";
    console.log("hello");
  }
 
 function validateform(){
    var letterCheck = /^[A-Za-z]+$/;
    var emailCheck= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneCheck=/^\d{10}$/;
    var quantity=document.forms["myform"]["quantity"];
    var phoneNo=document.forms["myform"]["phonenumber"];
    var color=document.forms["myform"]["color"];
    var tagline=document.forms["myform"]["Tagline"];
    var email=document.forms["myform"]["email-id"];
  // var quantity=document.getElementById("quan");
    var address=document.forms["myform"]["address"];
    if (quantity.value<1){
        alert("Please enter a positive integer");
        return false;
    }
    else if(1<phoneNo.value.length<11 && !phoneNo.value.match(phoneCheck)){
        alert("Please enter a valid phone number");
        return false;
    }
    else if(!color.value.match(letterCheck)){
        alert("Please enter letters only");
        return false;
    }
    else if(!email.value.match(emailCheck)){
        alert("Please enter a valid email");
        return false;
    }
}

function displayReceipt(){
    var quantity=document.forms["myform"]["quantity"];
    document.getElementById("hello").innerHTML=document.forms["myform"]["quantity"];
}

