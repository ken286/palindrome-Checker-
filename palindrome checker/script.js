const btn = document.getElementById("btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindrome);


//madam 
function palindrome() {
   const word = document.querySelector(".input-text").value; 
   let len = word.length;

   let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
   let end = word.substring(len - Math.floor(len / 2)).toLowerCase();

   let flip = end.split("").reverse().join("");
   if (start == flip){
      result.innerHTML = `${word.toUpperCase ()} is  palindrome`; 
   } else{
      result.innerHTML = `${word.toUpperCase()} is  NOt palindrome`; 
   }

  
//   alert(flip)
}