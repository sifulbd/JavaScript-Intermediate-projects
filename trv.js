// var scr = document.scripts;
// var scr = document.head;

// console.log(scr);

// scrArray = Array.from(scr);

// scrArray.forEach(function name(doruce) {
//     console.log(doruce);
// });



// let ullist = document.querySelector('ul.item-collection');
// let lilist = document.querySelector('li.item');


//Cretae elememt ul

const ul = document.createElement('ul');

//add class
ul.className = "collection-list";


// console.log(ul);






// for(var i = 0; i < 10; i++) {
//     //create element li
//     const li = document.createElement('li');

//     //add class
//     li.className = "list-item";

//     //add text content
//     li.textContent = "hello there";
//     var addtodo = ul.appendChild(li);
// }

// console.log(addtodo.length);



// for(var i = 0; i < 10; i++) {
//     console.log("hello")
// };




// let desk = document.querySelector('.player');
// let title = document.querySelector('h2');
// let content = document.querySelector('p');
// var button = document.querySelector('.clkbutton');
// let pInput = document.querySelector('.playerInput');


// // desk.addEventListener('mousemove', output );

// // function output(e) {
// //     desk.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 30)`;
// //     console.log(pInput.value);
// // }


// pInput.addEventListener('keypress', output);

// function output(e) {
//     title.innerText = pInput.value;
// }


function Person (name, age, birthday) {
    this.name = name;
    this.age = age;
    this.birthday = new Date(birthday);
    this.calculateAge = function() {
        // Substruct current time from birthday time
        var diff = Date.now() - this.birthday.getTime();
        // store that on new variable
        var ageDate = new Date(diff);
        //substruct new variable from 1970
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

var brad = new Person('brad', 26, '1-11-1992');



