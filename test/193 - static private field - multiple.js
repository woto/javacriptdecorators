function decorator1(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 2;
    }
  }
}
function decorator2(value, context) {
  if (context.kind === "field") {
    return function(v) {
      return v * 3;
    }
  }
}

class C {
  @decorator1
  @decorator2
  static #p = 1;
  
  static get check() {
    return this.#p;
  }
}

console.assert(C.check === 6)