; 
var Module = (function(window, undefined){

	var privateMethod = function(){
		console.log("private");
	}

	var publicMethod = function(){
		console.log("public");
	}

	return {
		publicMethod: publicMethod
	}

})(window);
