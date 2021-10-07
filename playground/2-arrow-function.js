/*const square = function (x){
    return x * x;
}*/

/*const square = (x) => { 
    return x * x
}*/ // ES6 shorthand notation for function, style 1

const square = x => x * x; // ES6 shorthand notation for function, style 2

console.log(square(2));

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew','Jen','Mike'],
    printGuestList() { 
        /* - function keyword need not be mentioned as per ES6 speciality in addition to arrow function */
        console.log('Guest list for - ' + this.name);

        this.guestList.forEach(function (guest) {
            console.log(guest + ' is attending ' + this.name);
        });

        /*this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });*/ /* if arrow notation were not used it would have bound 
               to some this inside the function which doesnt exist.
               to test try replacing with regular function notation.
               Arrow notation takes the this scope of parent */
    }
}

event.printGuestList();