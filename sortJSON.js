
console.log("Sorting JSON recursively...")

function isAllElementsOfArrayScalars(arr) {
  if( ! (arr instanceof Array) ) {
    return arr
  }
  allAreOK = arr.every(isScalar)
  if( allAreOK ) {
    return true;
  } 
}

function isScalar(obj) {
  if( obj instanceof Array) {
    return false
  }
  if( typeof obj === "object") {
    return false
  }
  return true
}

function sortJSON(object) {
	if (object instanceof Array) {
        if( isAllElementsOfArrayScalars(object) ) {
            return object.sort()
        }
		for (var i = 0; i < object.length; i++) {
			object[i] = sortJSON(object[i]);
		}
		return object;
	} else if (typeof object != "object") return object;

	var keys = Object.keys(object);
	keys = keys.sort();
	var newObject = {};
	for (var i = 0; i < keys.length; i++) {
		newObject[keys[i]] = sortJSON(object[keys[i]])
	}
	return newObject;
}

js1 = {
	  "a": "100",
    "e": "200",
    "m": "0",
    "q": {
    	"a": "0",
        "z": "1",
    	"m": "2" 
    },
    "g" : [
      "b","a","c"
    ],
    "l" : {
      "y": {
        "b": 1,
        "a": 2
      },
      "x": {
        "b": 1,
        "a": 2
      }      
    }

}

console.log("output : "+JSON.stringify(sortJSON(js1),null,2))
