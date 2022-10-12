let regForm = document.getElementById('registerform');
    regForm.addEventListener('submit', function(e){
        e.preventDefault();
    let name = regForm['name'].value;
   let email = regForm['email'].value;
   let Age = regForm['Age'].value;
   let phonenumber = regForm['phonenumber'].value;

   let myname = document.getElementById("myname");
   myname.innerHTML = name;

   let myemail = document.getElementById("myemail");
   myemail.innerHTML = email;

   let age = document.getElementById("age");
   age.innerHTML = Age;

   let inputnumber = document.getElementById("inputnumber");
   inputnumber.innerHTML = phonenumber;

})