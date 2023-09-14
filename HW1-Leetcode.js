// 2667. Create Hello World Function
var createHelloWorld = function() {
    return function(...args) {
        return "Hello World";
    }
};

//2620. Counter
var createCounter = function(n) {
    let l = n;
    return function() {
        return l++;
    };
};
//2704. To Be Or Not To Be
var expect = function(val) {
    return {
        toBe: (val2) => {
            if(val === val2) return true
         throw new Error("Not Equal")
        },
        notToBe: (val2) => {
            if(val !== val2) return true
         throw new Error("Equal")
        }
        
    }
};

//2665. Counter II
var createCounter = function(init) {
    let a = init;
    return {
        increment: () =>  ++a,
        reset: () => a = init,
        decrement: () => --a
    }
};

//2635. Apply Transform Over Each Element in Array
var map = function(arr, fn) {
    let new_arr = [];
    for(i=0;i<arr.length;i++){
        new_arr[i] = fn(arr[i],i)
        
    }
    return new_arr
};
//2634. Filter Elements from Array
var filter = function(arr, fn) {
    let filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
};
//2626. Array Reduce Transformation
var reduce = function(nums, fn, init) {
    let reducedArr = [];
    let a = init;
    if(nums.length === 0) return a;
    for(let i=0; i<nums.length; i++){
        a = fn(a, nums[i]);
    }
    return a;
};
//2629. Function Composition
var compose = function(functions) {
	return function(x) {
    let res = x;

        for(let i=functions.length-1; i>=0; i--){
                res = functions[i](res)
        }
        return res
    }
};

//2703. Return Length of Arguments Passed
var argumentsLength = function(...args) {
 return args.length;
};

//2666. Allow One Function Call
var once = function(fn) {
    let f = false
    return function(...args){
       if (!f){
         f= true
        return fn(...args)}
    }
};

//2723. Add Two Promises
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1,promise2]).then(([value1, value2]) => {
        return value1+value2
    })
};
//2621. Sleep
async function sleep(millis) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, millis);
})
}
//2715. Timeout Cancellation
var cancellable = function(fn, args, t) {
    const timerId = setTimeout(() => {fn(...args)},t)
    const cancelFn = () => {
        clearTimeout(timerId)
    }
    return cancelFn;
   
};
//2725. Interval Cancellation
var cancellable = function(fn, args, t) {
    fn(...args);
    const timerId = setInterval(() => {fn(...args)},t);
    return () => {
        clearTimeout(timerId);
    }
};
//2727. Is Object Empty
var isEmpty = function(obj) {

    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).length === 0;
    }
    return false; 
    
};
//2677. Chunk Array
var chunk = function(arr, size) {
    let res = []

    for (let i = 0; i < arr.length; i += size) {
        res.push(arr.slice(i, i + size));
    }
    return res
};

//2619. Array Prototype Last
Array.prototype.last = function() {
    return this.length > 0 ? this[this.length-1] : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
//2724. Sort By
var sortBy = function(arr, fn) {
    const sortedArr = arr.sort((a,b) => fn(a)-fn(b))
    return sortedArr
};
//2695. Array Wrapper
var ArrayWrapper = function(nums) {
    this.n = nums;
};

ArrayWrapper.prototype.valueOf = function() {
     return this.n.reduce((a,b) => a+b, 0)
}

ArrayWrapper.prototype.toString = function() {
    return `[${this.n}]`;
}

//2726. Calculator with Method Chaining
class Calculator {
  
  /** 
   * @param {number} value
   */
  constructor(value) {
      this.res = value
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
      this.res+=value
      return this
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
      this.res-=value

      return this
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */  
  multiply(value) {

      this.res*=value
      return this
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
      if(value === 0 ) throw new Error('Division by zero is not allowed')
      this.res/=value
      return this


  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
      this.res= this.res**value
      return this

  }
    
  /** 
   * @return {number}
   */
  getResult() {
   return this.res
  }
}
