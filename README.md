# showObject
showObject functions to explore the overall structure of an object, such as a console.  However, you can run methods on objects and edit string or number properties.

### require
 - jQuery.js

### usage
```javascript
showObject( object ) //return div element.
```

### example
```javascript
showObject({"key":"value"}); // explore an object
showObject("this is text"); // explore a string
showObject(1234); // explore a number
showObject(Object); // explore Object function
```
