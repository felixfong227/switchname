# Switchname

## camelcase (arguments)
This is a string > `thisIsAString`
```javascript
const switchname = require('switchname');
const string = "This is an string";
console.log(switchname.camelcase(string)); || console.log(switchname.camelcase(string, false));
// thisIsAnString

console.log(switchname.camelcase(string, true));
// ThisIsAnString
```

## underscore
This is a string > `This_is_a_string`

## uppercase
This is a string > `THIS IS A STRING`

## lowercase
This is a string > `this is a string`

## trim
This is a string > `Thisisastring`

## hyper
Max up all the mehtod you want
```javascript
const switchname = require('switchname');
const string = "This is an string";
const renderedString = switchname.hyepr(string, [
    'uppercase',
    'underscore'
]);
// THIS_IS_A_STRING
```

# asciicode [Object]
Turn your `string` or `number` into ascii code

# romanumber [Object]
Turn your `number` into roma number

Accept
- number
- array of numbers
```javascript
const switchname = require('switchname');
const string = "This is an string";
const renderedNumber = switchname.romanumber(5); // > V [Object]
const renderedArrayOfNumbers = switchname.romanumber([5,6]); // > V,VI[Object]
```

# Mark down
Turn the mark down string in to HTML code
```
MD:
# Pony

HTML:
<h1>Pony</h1>
```
