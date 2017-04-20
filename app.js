var switchname = require('./bin/index');
var string = "This is a string";
var markdownString = `# Mark down
Mark down is awesome
- Is look nice
- It feel clean
- GitHub use it lol`;

// This is a string | This_is_a_string | This-is-a-string > thisIsAString
console.log(switchname.camelcase(string));

// This is a string > This_is_a_string
console.log(switchname.underscore(string));

// This is a string | This_is_a_string | This-is-a-string > THIS IS A STRING
console.log(switchname.uppercase(string));

// This is a string | This_is_a_string | This-is-a-string > this is a string
console.log(switchname.lowercase(string));

// This is a string | This_is_a_string | This-is-a-string > Thisisastring
console.log(switchname.trim(string));

// This is a string | This_is_a_string | This-is-a-string > Anything you want
console.log(switchname.hyper(string, [
    'trim',
    'uppercase'
]));

// This is a string | This_is_a_string | This-is-a-string > [Array of ascii code]
console.log(switchname.asciicode(string));

// [Array of numbers] > [output]
console.log(switchname.romanumber([
    1,
    2,
    3,
    4,
    5
]));

// // [Number] > [Object]
console.log(switchname.romanumber(1))

console.log(switchname.markdown(markdownString));