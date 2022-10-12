let regForm = document.getElementById('registerform');
    regForm.addEventListener('submit', function(e){
        e.preventDefault();
    let name = regForm['name'].value;
   let email = regForm['email'].value;
   let Age = regForm['Age'].value;
   let phonenumber = regForm['phonenumber'].value;

//    name
   let myname = document.getElementById("myname");
   myname.innerHTML = name;

//    email 
   let myemail = document.getElementById("myemail");
   myemail.innerHTML = email;

//    age
   let age = document.getElementById("age");
   if( Age >= 18){
     valid = Age
   }
else{
    valid = "You must be " + 18
}
      age.innerHTML = valid;


    // phonenumber
   let inputnumber = document.getElementById("inputnumber");

   if(phonenumber.startsWith('070') || phonenumber.startsWith('080')  || phonenumber.startsWith('081') || phonenumber.startsWith('090'))
   if(phonenumber.length == 11){
      valid = phonenumber} 
      else{
  valid = "Number is Invalid"}  
  else{
   valid = "Number is Invalid"}
  inputnumber.innerHTML = valid;
   


})