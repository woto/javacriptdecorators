function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
  };
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
  set p(v) {}
  get p() {}
}

const _descriptor_6sp7rs4t4so = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_6sp7rs4t4so.get = meta("d", 3)(_descriptor_6sp7rs4t4so.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_6sp7rs4t4so.get;

Object.defineProperty(C.prototype, "p", _descriptor_6sp7rs4t4so);

const _descriptor_rjc5jh1pd5g = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_rjc5jh1pd5g.get = meta("c", 3)(_descriptor_rjc5jh1pd5g.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_rjc5jh1pd5g.get;

Object.defineProperty(C.prototype, "p", _descriptor_rjc5jh1pd5g);

const _descriptor_2eid09c5dh8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_2eid09c5dh8.set = meta("b", 2)(_descriptor_2eid09c5dh8.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_2eid09c5dh8.set;

Object.defineProperty(C.prototype, "p", _descriptor_2eid09c5dh8);

const _descriptor_5lg24cmnh78 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_5lg24cmnh78.set = meta("a", 1)(_descriptor_5lg24cmnh78.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_5lg24cmnh78.set;

Object.defineProperty(C.prototype, "p", _descriptor_5lg24cmnh78);

console.log(C.prototype[Symbol.metadata]);