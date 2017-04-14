var switchname = require('./bin/index');
var string = "This is a string";

// This is a string | This_is_a_string | This-is-a-string > thisIsAString
console.log(switchname.camelcase(string));

// This is a string | This-is-a-string > This_is_a_string
console.log(switchname.underscore(string));

// This is a string | This_is_a_string | This-is-a-string > THIS IS A STRING
console.log(switchname.uppercase(string));

// This is a string | This_is_a_string | This-is-a-string > this is a string
console.log(switchname.lowercase(string));

// This is a string | This_is_a_string | This-is-a-string > Thisisastring
console.log(switchname.trim(string));