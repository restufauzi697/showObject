# openObject
openObject serves to explore the structure of the object as a whole, like the console. However, you can run methods on objects and edit the string or number property.

### require
 - jQuery.js

### usage
```javascript
openObject( object ) //return div element.
```

### example
```javascript
openObject({"key":"value"}); // explore an object
openObject("this is text"); // explore a string
openObject(1234); // explore a number
openObject(Object); // explore Object function
```
