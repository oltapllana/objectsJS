
// let square = {
//     topLeft: {
//         x: 10,
//         y:10
//     },
//     bottomRight: {
//         x:20,
//         y:20
//     },

// }
// // A function accepts a rectangle object and types out the info about it
// //  (where the points are located).

// // function printSquare(squareObject){
// //     console.log(squareObject.topLeft.x);
// //     console.log(squareObject.topLeft.y);
// //     console.log(squareObject.bottomRight.x);
// //     console.log(squareObject.bottomRight.y);
// // }
// // printSquare(square);


// // A function accepts a rectangle object and returns its width.
// function printWidth(squareObject){
//     console.log('Width: '+ (-squareObject.topLeft.x+squareObject.bottomRight.x));
//     return -squareObject.topLeft.x+squareObject.bottomRight.x
// }
// printWidth(square);
// // A function accepts a rectangle object and returns its height.
// function printHeight(squareObject){
//     console.log('Height: '+ (-squareObject.topLeft.y+squareObject.bottomRight.y));
//     return -squareObject.topLeft.y+squareObject.bottomRight.y

// }
// printHeight(square);
// // A function accepts a rectangle object and returns its content.
// function contentSquare(squareObject){
//     console.log(printWidth(squareObject)*printHeight(squareObject));
// }
// contentSquare(square);

// // A function accepts a rectangle object and returns its perimeter.
// function perimeterSquare(squareObject){
//     console.log('Perimeter: '+(2*printWidth(squareObject)+2*printHeight(squareObject)));
// }
// perimeterSquare(square);
// // A function for changing the width of the rectangle. 
// // It takes an object and by how many units to change the width.
// function changeWidth(squareObject,a){
//    return (squareObject.bottomRight.x+a -squareObject.topLeft.x);
// }
// changeWidth(square,20);
// // A function for changing the height of the rectangle. 
// // It takes an object and by how many units to change the height.
// function changeHeight(squareObject,a){
//     return (squareObject.bottomRight.y+a -squareObject.topLeft.y);
// }
// changeHeight(square,20);
// // A function for changing the width and the height of the rectangle.
// // It takes an object and by how many units to change the width and the height.
// function changeWidthAndHeight(squareObject, width, height){
//     console.log(changeWidth(squareObject,width) , changeHeight(squareObject,height));
// }
// changeWidthAndHeight(square,30,40);
// A function for conveying the X-shift of the rectangle.
// It takes an object and by how many units to move it.
// A function for conveying the Y-shift of the rectangle. It takes an object and by how many units to move it.
// A function for conveying the shift on both axis. It takes an object and by how many units to move it for both X and Y axis.


// A function for checking if the point is within the rectangle.
// It accepts a rectangle object and the point coordinates.
// function checkPoints(squareObject,x,y){
//     if(x>=squareObject.topLeft.x && y<=squareObject.bottomRight.y){
//         console.log('Within rectANGLE');
//     }
//     else{
//         console.log('isnt within rectangle');
//     }

// }
// checkPoints(square,19,13);

// 1. Create an object that describes a car (manufacturer, model, year of release, average speed)
// and the following methods for working with this object:
// A method that displays the car info
// A method for counting a time frame necessary to cover a given distance with
// the average speed.Note that every 4 hours the driver has to take a 1-hour break.
// let car = {
//     manufacturer: 'Toyota',
//     model: 'A',
//     'year of release': 2015,
//     'avarage speed': 80,
//     displayInfo() {
//         console.log('manufacturer: '+this.manufacturer+ ' ' +'model'+this.model
//         +'year of release'+this['year of release']+' '+ 'avarage speed'+this['avarage speed']);
//     },
//     countTime(distance, avarageSpeed){
//         let time = distance / avarageSpeed; 
//         console.log(time);
//         let time1 = time;
//         for(let i=0;i<=time1;i++){
//         if(i % 4 == 0){
//             time1--;
//         }
//         }
//         console.log(time1);
//     }
// }
// car.displayInfo();
// car.countTime(2000,car["avarage speed"]);



// 2. Create an object that contains separately the numerator and the denominator
// of a fraction, and the following functions for working with this object:
// A function for adding two fraction objects.
// A function for subtracting two fraction objects.
// A function for multiplying two fraction objects.
// A function for dividing two fraction objects.
// A function for simplifying a fraction object.

// fraction1 = {
//     numerator: 1,
//     denominator:3
// }
// fraction2 = {
//     numerator: 1,
//     denominator:2
// }
// function adding(fraction1,fraction2){
//     let y = fraction1.denominator*fraction2.denominator;
//     let x = fraction1.numerator*fraction2.denominator + fraction2.numerator*fraction1.denominator
//     console.log(x+' /'+y);
//     console.log(x/y);
// }
// function sub(fraction1,fraction2){
//     let y = fraction1.denominator*fraction2.denominator;
//     let x = fraction1.numerator*fraction2.denominator - fraction2.numerator*fraction1.denominator
//     console.log(x+' /'+y);
//     console.log(x/y);
// }
// function mul(fraction1,fraction2){
//     let y = fraction1.denominator*fraction2.denominator;
//     let x = fraction1.numerator+fraction2.numerator;
//     console.log(x+' /'+y);
//     console.log(x/y);
// }
// function div(fraction1,fraction2){
//     let y = fraction1.denominator*fraction2.numerator;
//     let x = fraction1.numerator*fraction2.denominator;
//     console.log(x+' /'+y);
//     console.log(x/y);
// }

// adding(fraction1,fraction2);
// sub(fraction1,fraction2);
// mul(fraction1,fraction2)
// div(fraction1,fraction2)


// 3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:
// A method for displaying the time.
// A method for changing the time by a given amount of seconds.
// A method for changing the time by a given amount of minutes. 
// A method for changing the time by a given amount of hours.
let time = {
    hour: 20,
    minutes: 58,
    seconds: 40,
    displayTime(){
        console.log(`${this.hour}:${this.minutes}:${this.seconds}`);
    },
    changeSeconds(second){
        if((this.seconds+second)>=60){
            this.minutes++;
            this.seconds=(this.seconds+second)%60;
        }
        else{
            this.seconds = this.seconds+second;
        }
        console.log(`50 seconds added ${this.hour}:${this.minutes}:${this.seconds}`);
    },
    changeMinutes(minutes){
        if((this.minutes+minutes)>=60){
            this.hour++;
            this.minutes=(this.minutes+minutes)%60;
        }
        else{
            this.minutes = this.minutes+minutes;
        }
        console.log(`50 minutes added ${this.hour}:${this.minutes}:${this.seconds}`);
    },
    changeHour(hour){
        if((this.hour+hour)>=24){
            this.hour=(this.hour+hour)%24;
        }
        else{
            this.hour = this.hour+hour;
        }
        console.log(`4 hours added ${this.hour}:${this.minutes}:${this.seconds}`);
    }
}
time.displayTime();
time.changeSeconds(50);
time.changeMinutes(50);
time.changeHour(4);