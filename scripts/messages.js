var channels = ["Sports","Shows","Movies","Pets"]
var messages =[
    {
       "user":{
          "name":"Kat",
          "image":"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
       },
       "message":{
          "text":"I'm changing the due date on the landing page because I need more time. The designs look great!",
          "date":1534885670000
       }
    },
    {
       "user":{
          "name":"Ron",
          "image":"https://images.pexels.com/photos/1498335/pexels-photo-1498335.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
       },
       "message":{
          "text":"I'm changing the due date on the landing page because I need more time. The designs look great!",
          "date":1534485670000
       }
    },
    {
       "user":{
          "name":"Benny",
          "image":"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
       },
       "message":{
          "text":"It is great to finally see this project complete",
          "date":1534785670000
       }
    },
    {
       "user":{
          "name":"Betty",
          "image":"https://images.pexels.com/photos/1498778/pexels-photo-1498778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=25"
       },
       "message":{
          "text":"Next time I will be able to see things better",
          "date":1537564070000
       }
    }
]
/*
let  d = new Date(1534885670000);
let hours = d.getHours();
let day = d.getDay();
let year = d.getFullYear();

//o prevent any jQuery code from running before the document is finished loading (is ready).
$(document).ready(function(){

    // jQuery methods go here...
    
  
  });
*/
console.log(messages[0]["user"]["name"]);
for( var message in messages){
   for (var items in message){
       console.log(typeof(items));
       console.log(items);
   }
    
}