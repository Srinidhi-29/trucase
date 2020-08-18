function validateForm() {
  var check = document.forms["editForm"]["title"].value;
  if (check == "") {
    alert("Title is required");
    return false;
  }
  if(check<2||check>65)
  {
	  alert("Title should have 2 to 65 characters");
	  return false;
  }
  var ch2=document.getElementById("price").value;
    if (ch2 == "") {
    alert("Price is required");
    return false;
  }
  if(isNaN(ch2))
  {
	  alert("Price has to be a number");
	  return false;
  }
   var ch3=document.getElementById("dateOfLaunch").value;
    if ( ch3== "") {
    alert("Date Of Launch is required");
    return false;
  } 
   var ch4=document.forms["editForm"]["category"].value;
    if ( ch4== "Choose") {
    alert("Category is required");
    return false;
  }
else{
	setTimeout(function() {window.location = "edit-menu-item-status.html" });
}  
}