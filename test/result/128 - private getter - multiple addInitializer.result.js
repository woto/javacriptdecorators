function addProperty(key, value) {
  return (klass, context) => {
    if ((context.kind === "method" || context.kind === "getter" || context.kind === "setter") && context.addInitializer) {
      context.addInitializer(function() {
        this[key] = value;
      });
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

const _C_member_initializers_hci54 = [];

const _C_p_symbol_n3blao = Symbol();

class C {
  constructor() {
    this.z = 100;
    _C_member_initializers_hci54.forEach(initialize => initialize.call(this));
  }
  _C_p_temp_mgd91o() {}
  static [_C_p_symbol_n3blao] = addProperty("a", 1)(C.prototype._C_p_temp_mgd91o, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_n3blao]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_hci54.push(initializer)
  }) ?? C.prototype._C_p_temp_mgd91o;
  static [_C_p_symbol_n3blao] = addProperty("b", 2)(C[_C_p_symbol_n3blao], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C.prototype[_C_p_symbol_n3blao]
    },
    ...__PrepareMetadata(C.prototype, "private", undefined),
    addInitializer: initializer => _C_member_initializers_hci54.push(initializer)
  }) ?? C[_C_p_symbol_n3blao];
  get #p() {
    return C[_C_p_symbol_n3blao].bind(this)();
  }
  [_C_p_symbol_n3blao]() {
    return C[_C_p_symbol_n3blao].bind(this);
  }
}

delete C.prototype._C_p_temp_mgd91o;

const _D_member_initializers_as19g8 = [];

const _D_p_symbol_6gdh78 = Symbol();

class D extends C {
  constructor() {
    super();
    _D_member_initializers_as19g8.forEach(initialize => initialize.call(this));
  }
  _D_p_temp_1b8pjo() {}
  static [_D_p_symbol_6gdh78] = addProperty("c", 3)(D.prototype._D_p_temp_1b8pjo, {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_6gdh78]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_as19g8.push(initializer)
  }) ?? D.prototype._D_p_temp_1b8pjo;
  static [_D_p_symbol_6gdh78] = addProperty("d", 4)(D[_D_p_symbol_6gdh78], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: D.prototype[_D_p_symbol_6gdh78]
    },
    ...__PrepareMetadata(D.prototype, "private", undefined),
    addInitializer: initializer => _D_member_initializers_as19g8.push(initializer)
  }) ?? D[_D_p_symbol_6gdh78];
  get #p() {
    return D[_D_p_symbol_6gdh78].bind(this)();
  }
  [_D_p_symbol_6gdh78]() {
    return D[_D_p_symbol_6gdh78].bind(this);
  }
}

delete D.prototype._D_p_temp_1b8pjo;

const c = new C();

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);