module.exports = {
    camelcase: function(string){
        var output = "";
        string.split(/ |_|-/g).forEach(function(char){
            char = char.replace(char.split('')[0], char.split('')[0].toUpperCase());
            output += char;
        });
        output = output.replace(output.split('')[0], output.split('')[0].toLowerCase());
        return output;
    },
    underscore: function(string){
        return string.replace(/ |-/g, '_');
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
    }
};