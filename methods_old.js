var methods= {};
//var output = 1337;
this.output = 1337;
// methods.updateServer = function(){
// 	console.log('Important Function');
// }

// methods.eatCookies = function(){
// 	console.log('Chocolate  cookies');
// }

// methods.node = function(){
// 	console.log('NodeJS, is AWESOME');
// }
	
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
exports.data = methods;
//exports.output = methods;