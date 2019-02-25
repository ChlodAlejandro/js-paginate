# object-pager
Split an object into an array of pages.

# Usage
```
var Paginate = require('object-pager');

var objects = {"a": "b", "c": "d", "e": "f", "g": "h", "i": "j", "k": "l", "m": "n", "o": "p", "q": "r", "s": "t"};

console.log(Paginate(objects, 3));
// [{"a": "b", "c": "d", "e": "f"},
//  {"g": "h", "i": "j", "k": "l"},
//  {"m": "n", "o": "p", "q": "r"},
//  {"s": "t"}]

console.log(Paginate({objects}, 10));
// [{"a": "b", "c": "d", "e": "f", "g": "h", "i": "j", "k": "l", "m": "n", "o": "p", "q": "r", "s": "t"}]

console.log(Paginate({"a": "b", "c": "d", "e": "f"}, 10));
// [{"a": "b", "c": "d", "e": "f"}]

console.log(0);
// Error: Object (first argument) is not of type "object".

console.log(objects, 0);
// Error: Pages must contain at least one object.
```
