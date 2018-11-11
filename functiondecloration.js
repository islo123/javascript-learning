//Function decloration
/*function sayHello() {                        
    console.log('-------------');             
    console.log('hello!');   
    console.log('-------------');                       
}
*/

//sayHello();
/*let a = sayHello;
a();
a();
a(); */

/*
function sayHello(name){
    console.log('--------------------');
    console.log('hello ' + name + '!' );
    console.log('--------------------');
}

sayHello('Bob');
sayHello('Beth');
sayHello('Mr Tibbles');
*/

function colculateTax(amount) {
    let result = amount * 0.0825;
    return result;
}
let tax = colculateTax(100);
console.log(tax);