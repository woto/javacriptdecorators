function decorator(context) {
  return {
    initialize(v) {
      return v * 2;
    }
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || null);
  return {
    getMetadata(key) {
      if (base[Symbol.metadata] && base[Symbol.metadata][key] && typeof base[Symbol.metadata][key][kind] !== "undefined") {
        return kind === "public" ? base[Symbol.metadata][key].public[property] : base[Symbol.metadata][key][kind];
      }
    },
    setMetadata(key, value) {
      if (typeof key !== "symbol") {
        throw new TypeError("the key must be a Symbol");
      }
      base[Symbol.metadata] = createObjectWithPrototype(base, Symbol.metadata);
      base[Symbol.metadata][key] = createObjectWithPrototype(base[Symbol.metadata], key);
      base[Symbol.metadata][key].public = createObjectWithPrototype(base[Symbol.metadata][key], "public");
      if (!Object.hasOwnProperty.call(base[Symbol.metadata][key], "private")) {
        Object.defineProperty(base[Symbol.metadata][key], "private", {
          get() {
            return (__metadataPrivate.get(base[Symbol.metadata][key]) || []).concat(Object.getPrototypeOf(base[Symbol.metadata][key])?.private || []);
          }
        });
      }
      if (kind === "public") {
        base[Symbol.metadata][key].public[property] = value;
      } else if (kind === "private") {
        if (!__metadataPrivate.has(base[Symbol.metadata][key])) {
          __metadataPrivate.set(base[Symbol.metadata][key], []);
        }
        __metadataPrivate.get(base[Symbol.metadata][key]).push(value);
      } else if (kind === "constructor") {
        base[Symbol.metadata][key].constructor = value;
      }
    }
  };
}

const _C_p_get_symbol_lqpeno = Symbol();

const _C_p_set_symbol_oshpd8 = Symbol();

let _C_p_getter_bmqst8;

let _C_p_setter_d79co8;

let _C_p_initializer_299b7o;

class C {
  #_p_private_property_21dke = _C_p_initializer_299b7o.call(this, 10);
  get #p() {
    return _C_p_getter_bmqst8.call(this);
  }
  set #p(v) {
    return _C_p_setter_d79co8.call(this, v);
  }
  static _C_p_getter_bmqst8() {
    return this.#_p_private_property_21dke;
  }
  static _C_p_setter_d79co8(v) {
    this.#_p_private_property_21dke = v;
  }
  [_C_p_get_symbol_lqpeno]() {
    return this.#p;
  }
  [_C_p_set_symbol_oshpd8](v) {
    this.#p = v;
  }
  get check() {
    return this.#p;
  }
}

_C_p_getter_bmqst8 = C._C_p_getter_bmqst8;

_C_p_setter_d79co8 = C._C_p_setter_d79co8;

delete C._C_p_getter_bmqst8;

delete C._C_p_setter_d79co8;

const _C_p_result_87e2ug = decorator({
  get: _C_p_getter_bmqst8,
  set: _C_p_setter_d79co8
}, {
  kind: "auto-accessor",
  name: "#p",
  access: {
    get: C.prototype[_C_p_get_symbol_lqpeno],
    set: C.prototype[_C_p_set_symbol_oshpd8]
  },
  isStatic: false,
  isPrivate: true,
  ...__PrepareMetadata(C.prototype, "private", undefined)
}) || {};

_C_p_initializer_299b7o = _C_p_result_87e2ug.initialize || (v => v);

_C_p_getter_bmqst8 = _C_p_result_87e2ug.get || _C_p_getter_bmqst8;

_C_p_setter_d79co8 = _C_p_result_87e2ug.set || _C_p_setter_d79co8;

const c = new C();

console.assert(c.check === 20);