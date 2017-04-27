module.exports = {
    camelcase: function(string, uppercase){
        if(typeof uppercase == 'undefined'){
            // Default
            uppercase = false;
        }
        var output = "";
        string.split(/ /g).forEach(function(char){
            char = char.replace(char.split('')[0], char.split('')[0].toUpperCase());
            output += char;
        });
        if(!uppercase){
            output = output.replace(output.split('')[0], output.split('')[0].toLowerCase());
        }
        return output;
    },
    underscore: function(string){
        return string.replace(/ /g, '_');
    },
    uppercase: function(string){
        return string.toUpperCase();
    },
    lowercase: function(string){
        return string.toLowerCase();
    },
    trim: function(string){
        return string.replace(/ /g, '');
    },
    hyper: function(string,options){
        var mainObject = require('./index');
        var output = "";
        options.forEach(function(option){
            if(output == ""){
                output = mainObject[option](string);
            }else{
                output = mainObject[option](output);
            }
        });
        return output;
    },
    asciicode: function(string){
        var output = [];
        string.split('').forEach(function(char){
            output.push({
                character: char,
                code: char.charCodeAt()
            });
        });
        return output;
    },
    romanumber: function(number){
        var output = [];
        var romanNumeral = require('roman-numeral');
        function action(num, single){
            if(!single){
                output.push({
                    number: num,
                    romaNumber: romanNumeral.convert(num)
                });
            }else{
                output = {
                    number: num,
                    romaNumber: romanNumeral.convert(num)
                }
            }
        }
        if(typeof number == 'object'){
            number.forEach(function(num){
                action(num, false);
            });
        }else{
            action(number, true);
        }
        return output;
    },
    markdown: function(string){
        return require('marked')(string);
    }

};