/* this is a module */
; 
var Module = (function(window, undefined){

  var privateMethod = function(){
    console.log("private");
  }

  var publicMethod = function(){
    console.log("public");
  }

  /**
   * return public methods
  **/
  return {
    publicMethod: publicMethod
  }

})(window);
