const myName = require("./information");

const cowsay = require("cowsay");

    console.log(cowsay.say({
    	text : "Hello I'm  " + `${myName.name}` + " from " + `${myName.campus}` + " campus",
    	e : "oO",
    	T : "U "
    }));