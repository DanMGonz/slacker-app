var user =  {
    "user": {
          "name": "Kat",
          "image":  "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200",
          "full-name" : "Katherine Vicks",
          "phone" : "416-382-3820",
          "city" : "Toronto, ON",
          "email" : "kat@myemail.com",
          "street" : "34 Leval St, M63 3N2",
          "description" : "Strong user experience (UX) design skills. Experience in user research and interaction design gained through corporate and nonprofit externships. Completed three externships during summer breaks to gain experience in UX design and information architecture. Excels at managing usability testing for XYZ landing pages in preparation for Web site redesign.  Very competent in testing parameters, prepared prototypes, recruited users, facilitated tests and reported results."
        }
    };
    
let userName = document.getElementById("user-name");
let fullName = document.getElementById("full-name");
let city = document.getElementById("city");
let description = document.getElementById("description");
let image = document.getElementById("image-profile");
let phone = document.getElementById("phone");
let address = document.getElementById("street");


let userTag = '@'+ user["user"]["name"];
userName.innerHTML = userTag;
fullName.innerHTML =  user["user"]["full-name"];
city.innerHTML = user["user"]["city"];
description.innerHTML = user["user"]["description"];
image.src = user["user"]["image"];
//console.log(userTag);
phone.innerHTML = user["user"]["phone"];
address.innerHTML = user["user"]["street"];
email.innerHTML = user["user"]["email"];


    
    