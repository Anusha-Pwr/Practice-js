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
