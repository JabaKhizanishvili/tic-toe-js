// let obj = {
//     btn : document.getElementById('btn'),
//     text : document.querySelector('h1'),
//     changeColor: function(){
//         this.btn.addEventListener('click',()=>{
//             if(this.text.style.color != "red")this.text.style.color = "red"
//             else this.text.style.color = "unset";
//         });
//     },
// };

// obj.changeColor();

let box = document.querySelectorAll(".box");
let counter = 0;

let logic = true;
box.forEach(function(e){
    e.addEventListener("click", ()=>{
        // for (let i=0; i < box.length; i++){
        //     e.innerHTML = "<i class='far fa-circle'></i>";
        //     if(e.innerHTML == "<i class='far fa-circle'></i>"){
        //         e.innerHTML = "<i class='fas fa-times'></i>";
        //     }
        // }


        // counter++;
        // if(counter %2 == 0) {
        //     e.innerHTML = "<i class='fas fa-times'></i>";
        // }else{
        //     e.innerHTML = "<i class='fas fa-circle'></i>";
        // }
       if(e.innerHTML == ""){
        if(logic){
            e.innerHTML = "<i class='fas fa-times'></i>";
           } else{
            e.innerHTML = "<i class='far fa-circle'></i>";
           }
    
           logic = !logic;
       }
       
    })
})


// for(let i = 0; i < box.length; i++){
//     box[i].addEventListener('click', function(e){
//         if(i %2 == 0) box[i].innerHTML = "<i class='far fa-circle'></i>";
//         else box[i].innerHTML = "<i class='fas fa-times'></i>";                   
//     })
// }


// let text= document.getElementById('txt');
// let inc = document.getElementById("add") 
// let dec = document.getElementById("min") 

// let sum = 0;

// function add(){
// inc.addEventListener("click", function() {
//     sum++;
//      text.innerHTML = sum;
//      if(text.innerHTML >= 10){
//         text.innerHTML = "max num";
//         return;
//      }
//      if(sum >= 10){
//          return;
//      }
//      console.log(sum)
// })

// }

// function min(){
//     dec.addEventListener("click", function() {
//         sum--;
//          text.innerHTML = sum;
//          if(text.innerHTML <= -10){
//              text.innerHTML = "min num";
//              return
//          }
//          if(sum < -10){
//             return;
//         }
//         console.log(sum)
//     })
// }

// add();
// min();
