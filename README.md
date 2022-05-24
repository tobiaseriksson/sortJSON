# sortJSON
Sorts a JSON recursively

## Example 
```json
    {
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
```

should result in :

```json
{
  "a": "100",
  "e": "200",
  "g": [
    "a",
    "b",
    "c"
  ],
  "l": {
    "x": {
      "a": 2,
      "b": 1
    },
    "y": {
      "a": 2,
      "b": 1
    }
  },
  "m": "0",
  "q": {
    "a": "0",
    "m": "2",
    "z": "1"
  }
}
```


