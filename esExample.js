/*----------------Arrow function***************
1. An arrow function expression has a shorter syntax than a function expression
2. An arrow function  does not have its own this, arguments, super, or new.target.
3. These function expressions are best suited for non-method functions, and they cannot be used as constructors.
4. Arrow functions do not have their own arguments object

    (param1, param2, …, paramN) => { statements }
    (param1, param2, …, paramN) => expression
    // equivalent to: (param1, param2, …, paramN) => { return expression; }

    // Parentheses are optional when there's only one parameter name:
    (singleParam) => { statements }
    singleParam => { statements }
    singleParam => expression


// The parameter list for a function with no parameters should be written with a pair of parentheses.
() => { statements }

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

var person = new Person();

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

function Person(){
    this.age = 0;
    setInterval(()=>{
        this.age++; // |this properly refers to the person object
        console.log(this.age); //output: 1 2 3 4.....
    },1000)
}

var person = new Person();*/
 

var adder = {
    base: 1,
  
    add: function(a) {
      var f = (v) =>{ v + this.base;
      return f(a)
      };
    },
  
    addThruCall: function(a) {
      var f = v => v + this.base;
      var b = {
        base: 2
      };
  
      return f.call(b, a);
    }
  };
  
  console.log(adder.add(1));          
  console.log(adder.addThruCall(1));