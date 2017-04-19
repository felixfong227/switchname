# Switchname

## camelcase
This is a string > `thisIsAString`

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

# ascii [Object]
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