# showObject
showObject serves to explore the structure of the object as a whole, like the console. However, you can run methods on objects and edit the string or number property.

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
