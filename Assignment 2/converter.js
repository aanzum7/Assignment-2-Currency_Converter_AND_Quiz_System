function Currency(){
    y = document.getElementById("converter").value;
    return y;
  }
 
function Calculate(){
  y = Currency();
 
  x = document.getElementById("value1").value;
 
  if(x == ""){
    document.getElementById("value2").value = "";
  }else{
    switch(y){
      case "Dollar":
        document.getElementById("value2").value = x * 84.50;
      break;
 
      case "Pound":
        document.getElementById("value2").value = x * 105.36;
      break;
 
      case "Euro":
        document.getElementById("value2").value = x * 94.81;
      break;
 
      case "Yen":
        document.getElementById("value2").value = x * 0.78;
      break;
 
      case "Yuan":
        document.getElementById("value2").value = x * 12.28;
      break;

      case "CAD":
        document.getElementById("value2").value = x * 64.68;
      break;

      case "AUD":
        document.getElementById("value2").value = x * 59.54;
      break;

      case "INR":
        document.getElementById("value2").value = x * 1.23;
      break;
    }
  }
}