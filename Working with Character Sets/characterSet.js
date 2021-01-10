/*
Inside of square braces don't act as metacharters inside the braces except the hyphen which specifies a range

The range can be numbers or characters
*/

let re = /gr[ae]y/;//match one or the other
let ra = /[1-4]/ //range

/*
Excluding characters ^
*/

/*
May need to escape these Characters in data set
-
^
\
]

*/


/*
Shorthands for Character sets
\d [0-9]
\w [a-zA-Z0-9_]
\s [\t\r\n]

\D [^0-9]
\w
\S
*/



