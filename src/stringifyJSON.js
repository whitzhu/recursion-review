// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  //var type = typeof obj;
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    var resultArray = [];
    for (var i = 0; i < obj.length; i++) {
      if (obj[i] === undefined || typeof obj[i] === 'function') {
        continue;
      }
      resultArray.push(stringifyJSON(obj[i]));
    }
    return '[' + resultArray.join(',') + ']';
  }

  if (typeof obj === 'object' && obj !== null && typeof obj !== 'function') {
    var resultObj = [];
    for (var key in obj) {
      if (obj[key] === undefined || typeof obj[key] === 'function') {
        continue;
      }
      resultObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + resultObj.join(',') + '}';
  }

  return '' + obj;
};