// // var scr = document.scripts;
// // var scr = document.head;

// // console.log(scr);

// // scrArray = Array.from(scr);

// // scrArray.forEach(function name(doruce) {
// //     console.log(doruce);
// // });



// // let ullist = document.querySelector('ul.item-collection');
// // let lilist = document.querySelector('li.item');


// //Cretae elememt ul

// const ul = document.createElement('ul');

// //add class
// ul.className = "collection-list";


// // console.log(ul);






// // for(var i = 0; i < 10; i++) {
// //     //create element li
// //     const li = document.createElement('li');

// //     //add class
// //     li.className = "list-item";

// //     //add text content
// //     li.textContent = "hello there";
// //     var addtodo = ul.appendChild(li);
// // }

// // console.log(addtodo.length);



// // for(var i = 0; i < 10; i++) {
// //     console.log("hello")
// // };




let desk = document.querySelector('.player');
// let title = document.querySelector('h2');
// let content = document.querySelector('p');
// var button = document.querySelector('.clkbutton');
// let pInput = document.querySelector('.playerInput');


desk.addEventListener('mousemove', output2 );
function output2(e) {
    desk.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 30)`;
}


// pInput.addEventListener('keypress', output);
// function output(e) { 
//     title.innerText = pInput.value;
// }


// function Person (fname, lname, age, birthday) {
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.birthday = new Date(birthday);
// }

// var brad = new Person('brad', 26, '1-11-1992');




// // Prototype: 

// Person.prototype.calculateAge = function() {
//     // Substruct current time from birthday time
//     var diff = Date.now() - this.birthday.getTime();
//     // store that on new variable
//     var ageDate = new Date(diff);
//     //substruct new variable from 1970
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// } 
// Person.prototype.fullname = function() {
//     return `The person name is ${this.fname} ${this.lname}`;
// } 

// const marry = new Person('Marry', 'Gorge', 23, '2-02-1999');
// var doe = new Person('Marry', 'Gorge', 23, '2-02-1999');


// console.log(marry.fullname());

// console.log(marry.calculateAge());

// Person.prototype.getMarried = function(newlastname) {
//     return this.lname = newlastname;
// }

// marry.getMarried('Doe');

// console.log(marry.fullname());

// console.log(marry.hasOwnProperty('age'));

// function Customer(fname, lname, age, mobile) {
//     Person.call(this, fname, lname);
//     this.age = age;
//     this.mobile = mobile;
// }

// //inherit person protype to customer
// Customer.prototype = Object.create(Person.prototype);



// customer1 = new Customer('jhon','doe', 36, '444-444-444');

// console.log(customer1.fname);
// console.log(customer1.fullname());

// Customer.prototype.fullname = function() {
//     return `The customer name is ${this.fname} ${this.lname}`;
// } 

// console.log(customer1.fullname());


const personprototype = {
    greetings: function() {
        return `Hello there ${this.firstname} ${this.lastname}`;
    },
    getmaried: function(newlastn) {
        this.lastname = newlastn;
    }
}

//
const mardry = Object.create(personprototype);
mardry.firstname = "Marry";
mardry.lastname = "Thompson";
console.log(mardry.greetings());



// 
const jhons = Object.create(personprototype, {
    firstname : {value: "Jhon"},
    lastname : {value: "pal"}
});

console.log(jhons.greetings());


class Person {
    constructor (firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age
    }
    gretings() {
        return `Hello ${this.firstname} ${this.lastname}. Good to see you here.`;
    }
    merrid(newlastname) {
        this.lastname = newlastname;
    }
}
class Customer extends Person {
    constructor(firstname, lastname, age, phone, membership) {
        super(firstname, lastname, age);
        this.phone = phone;
        this.membership = membership;
    }
    gretings() {
        return  `Hello dear ${this.firstname} and ${this.lastname} . We cant 
        rach by dialing ${this.phone} this number for ${this.membership} `;
    }
}



customer1 = new Customer('Sharmin', 'apa', 23, '5555-555-55', 'standard');

console.log(customer1.gretings());
 