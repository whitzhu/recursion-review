// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element, result) {

  if (element === undefined) {
    element = document.body;
    result = [];
  }
  
  if (element.className !== undefined && element.className.length > 0) {
    if (element.className.indexOf(className) !== -1 ){
      result.push(element);  
    }
  }

  if ( element.childNodes.length > 0) {
    for (var i = 0; i < element.childNodes.length; i++) {
      getElementsByClassName(className, element.childNodes[i], result);
    }
  }

  return result; 
  
};
