/*

Unary negation: reverses the sign of a number

+ operator: -> sums numbers
            -> if applied to strings, concatenates them
            -> other operand is also converted to string if one operand is a string
            -> only + supports this, other operators convert their operands to numbers!

Unary + -> does nothing to numbers.
        -> if the operand is not a number, then it converts it to a number

        // Converts non-numbers
        alert( +true ); // 1
        alert( +"" );   // 0

*/

/*

Operator precedence: -> operator with the larger precedence operates first
                     -> if the precedence is the same, execution order is from left to right

parentheses > unary +, - > exponentiation > binary division, multiplication > binary addition, subtraction > assignment

parentheses > unary > exponentiation > multi, divi, modulus > add, sub > relational operators > equality > logical && > logical || > assignment

* exponentiation happens right to left (when precedence is same)

Assignment operator: returns the value assigned

Modify and assign: +=, *=, etc
                   same priority as assignment operator

                   let n = 2;

                  n *= 3 + 5; // right part evaluated first, same as n *= 8

                  alert( n ); // 16
*/

/*
Increment/Decrement operators: increase/decrease the value by 1
                               -> prefix form: ++a // returns the new value
                               -> postfix form: a++ // returns the old value

Comma operator: -> result of only the last expression is returned
                -> has very low precedence, even lower than =

                let a = (1 + 2, 3 + 4);

                alert( a ); // 7 (the result of 3 + 4)
*/

console.log(5++); // SyntaxError

/* question 1 */
// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// a = 2, b = 2, c = 2, d = 1

/* question 2 */
let a = 2;

let x = 1 + (a *= 2); // x = 5, a = 4

/*
