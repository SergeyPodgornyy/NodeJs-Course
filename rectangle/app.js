var args = require('yargs')
	.usage("Usage: node $0 --length=[num] --breadth=[num]")
	.demand(['length', 'breadth'])
	.argv;

var rect = require('./rectangle');

function solveRect(length, breadth){
    console.log("Solving for rectangle with length "+length+" and breadth "+breadth);

    rect(length, breadth, function(error, rectangle){
        if (error) {
            console.log(error);
        } else {
            console.log("Area of rectangle is "+rectangle.area());
            console.log("Perimeter of rectangle is "+rectangle.perimeter());
        }
    });
}

solveRect(args.length, args.breadth);
