/*----------------Arrow function***************
1. An arrow function does not have its own this;

*/

/*function Person(){
    this.age = 0;
    setInterval(function(){
        // In non-strict mode, function defines `this` 
        // as the global object, which is different from the `this`
        this.age++; 
        console.log(this.age); //It retuen NaN
    },1000)
}

var person = new Person();*/

function Person() {
    var that = this;
    that.age = 0;
  
    setInterval(function() {
      // The callback refers to the `that` variable of which
      // the value is the expected object.
      that.age++;
      console.log(that.age); //it return 1 2 3  4.....
    }, 1000);
  }
var person = new Person();

