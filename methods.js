var methods= module.exports = {};

	// a = { pro1: true};
	// b = a
	// b.propl = false;
	// console.log(a.prop1) // false
	methods.sumNumbers = function(a , b){
		output = a+b;
		return output;
		//return a+b;
	}

	methods.circleCircumference = function(radius){
		output = 2 * Math.PI * radius;
		return output;
		//return 2 * Math.PI * radius;
	}

	methods.areaOfRectangle = function(a, b){
		output = a*b;
		return output;
		//return a*b;
	}
module.exports.data = methods;
//exports.output = methods;