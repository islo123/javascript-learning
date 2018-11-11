/* 
funciton first () {
    return this;
}

console.log(first()=== global); //this equal to global
 */
/* function second () {
    'use strict';

    return this;
}

console.log(second() === global);
console.log(second() === undefined); */

/* let myObjet= { value: 'My Object'};

global.value = 'Global object';

function third() {
    return this.value;
}

console.log(third()); */

function fifth() {
    console.log(this.firstName + ' ' + this.lastName);
    
}
let customer1 = {
    firstName: 'bob',
    lastName: 'tabor',
    print: fifth
}
let customer2 = {
    firstName: 'richard',
    lastName: 'boughton',
    print: fifth
}
customer2.print();
customer1.print();