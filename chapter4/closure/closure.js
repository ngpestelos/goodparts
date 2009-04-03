var myObject = function() {
  var value = 0;

  return {
    increment: function(inc) {
      value += typeof inc == 'number' ? inc : 1;
    },
    getValue: function() {
      return value;
    }
  };
}(); // <--- it's a function call

myObject.increment(1);
document.writeln(myObject.getValue()); // 1

myObject.increment(2);
document.writeln(myObject.getValue()); // 3
