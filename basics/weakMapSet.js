/*

WeakMap: * keys must be objects, not primitive values.

         * if that object key has no other refrence except being a key of that weakmap,
           then it will be garbage collected from the map and the memory!

         * WeakMap does not support iteration and finding size
         * Methods available: weakMap.set(key, value), weakMap.get(key), weakMap.has(key), weakMap.delete(key)

Usecase: * Caching: store result so we don't recompute
         * Map caching can cause memory leaks
         * WeakMap caching is safe for object that might disappear.

WeakSet: * has only objects
         * deletes the object when it is not accessible by other means.
         * no iteration and size
*/

/* using normal map */
// let john = {name: "John"};
// let array = [john];
// john = null;
// console.log(array[0]); // {name: "John"} 

/* using WeakMap */
let john = {name: "John"};
let weakmap = new WeakMap();
weakmap.set(john, "hello");
john = null;
console.log(weakmap.get(john)); // undefined


/* question 1 */
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  const readMessages = new WeakSet();
  for(let msgObj of messages) {
    readMessages.add(msgObj);
  }

  readMessages.has(messages[0]) // true or false

/* question 2 */
// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
// ];

// let msgMap = new WeakMap();
// for(let msg of messages) {
//     msgMap.set(msg, date);
// }

