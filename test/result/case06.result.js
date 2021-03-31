function logged(
  value,
  {
    kind,
    name
  }
) {
  if (kind === "init-class") {
    return {
      definition: class extends value {
        constructor(...args) {
          super();
          console.log(`constructing an instance of ${name} with arguments ${args.join(", ")}`);
        }
      },
      initialize() {
        console.log(`finished defining ${this.name}`);
      }
    };
  }
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

class C {}

_result_sl40uui3b7o = logged(C, {
  kind: "init-class",
  name: "C",
  defineMetadata: __DefineMetadata(C, "constructor")
}) || {};

C = _result_sl40uui3b7o.definition || C;

_result_sl40uui3b7o.initialize && _result_sl40uui3b7o.initialize.call(C);

new C(1);