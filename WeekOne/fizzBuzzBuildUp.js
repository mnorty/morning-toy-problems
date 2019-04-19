// -- PROBLEM ONE
    //Wrtie a function that takes in a number.
    //if the number is divisible by three, return 'fizz'
    //if the number is divisible by five, return 'buzz'
    //if the number is divisible by five and three, return 'fizz buzz'
    //if the number is not divisible by three or five, return the number

// -- White Boarding Steps
    //Step One: Clarify the question

    //Step Two: Create sample data
        //5 => 'buzz'
        //3 => 'fizz'
        //15 => 'fizz buzz'

    //Step Three: Define code constructs
        //function
        //if/else statement
        //modules -> %

    //Step Four: Psuedo Code
        //create function that takes in a number
        //check if the number is divisble by 3 and 5, if it is, return 'fizz buzz'
        

    //Step Five: Code

// -- CODE HERE
function fizzBuzz(number){
    if ((number % 5 === 0) && (number % 3 === 0)){
        return 'fizz buzz'
    }
    else if (number % 3 === 0) return 'fizz'
    else if (number % 5 === 0) return 'buzz'
    else return number
}

console.log(fizzBuzz(15));