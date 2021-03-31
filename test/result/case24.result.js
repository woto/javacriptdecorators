function decorator1(value, context) {
  context.defineMetadata("one", 1);
}

function decorator2(value, context) {
  context.defineMetadata("one", 1);
  context.defineMetadata("two", 2);
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol();
}

function __DefineMetadata(base, name) {
  return function(key, value) {
    if (!base[Symbol.metadata]) {
      base[Symbol.metadata] = Object.create(null);
    }
    if (!base[Symbol.metadata][name]) {
      base[Symbol.metadata][name] = {};
    }
    const db = base[Symbol.metadata][name];
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  };
}

class C {
  get p() {
    return "a";
  }
}

const _descriptor_f49h30gv3bo = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_f49h30gv3bo.get = decorator2(_descriptor_f49h30gv3bo.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_f49h30gv3bo.get;

Object.defineProperty(C.prototype, "p", _descriptor_f49h30gv3bo);

const _descriptor_0rhjii9rbb8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_0rhjii9rbb8.get = decorator1(_descriptor_0rhjii9rbb8.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_0rhjii9rbb8.get;

Object.defineProperty(C.prototype, "p", _descriptor_0rhjii9rbb8);

const a = new C();

console.assert(a.p === "a");

console.log(C.prototype[Symbol.metadata]);