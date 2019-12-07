// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/components/AllArticle.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: "AllArticle"
};
exports.default = _default;
        var $90da8d = exports.default || module.exports;
      
      if (typeof $90da8d === 'function') {
        $90da8d = $90da8d.options;
      }
    
        /* template */
        Object.assign($90da8d, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "all-article" },
    [
      _c("h2", { staticClass: "subheading grey--text" }, [
        _vm._v("ALL ARTICLE")
      ]),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "", "justify-center": "" } },
            [
              _c(
                "v-flex",
                { staticClass: "mx-5 my-5", attrs: { xs12: "", md3: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto", attrs: { "max-width": "400" } },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text align-end",
                          attrs: {
                            height: "200px",
                            src:
                              "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                          }
                        },
                        [
                          _c("v-card-title", [
                            _vm._v("Top 10 Australian beaches")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-subtitle", { staticClass: "pb-0" }, [
                        _vm._v("Number 10")
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "text--primary" }, [
                        _c("div", [_vm._v("Whitehaven Beach")]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v("Whitsunday Island, Whitsunday Islands")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          {
                                            attrs: { color: "orange", text: "" }
                                          },
                                          on
                                        ),
                                        [_vm._v("Share")]
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("want share")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { color: "orange", text: "" } },
                            [_vm._v("Explore")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { staticClass: "mx-5 my-5", attrs: { xs12: "", md3: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto", attrs: { "max-width": "400" } },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text align-end",
                          attrs: {
                            height: "200px",
                            src:
                              "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                          }
                        },
                        [
                          _c("v-card-title", [
                            _vm._v("Top 10 Australian beaches")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-subtitle", { staticClass: "pb-0" }, [
                        _vm._v("Number 10")
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "text--primary" }, [
                        _c("div", [_vm._v("Whitehaven Beach")]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v("Whitsunday Island, Whitsunday Islands")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            { attrs: { color: "orange", text: "" } },
                            [_vm._v("Share")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { color: "orange", text: "" } },
                            [_vm._v("Explore")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { staticClass: "mx-5 my-5", attrs: { xs12: "", md3: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto", attrs: { "max-width": "400" } },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text align-end",
                          attrs: {
                            height: "200px",
                            src:
                              "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                          }
                        },
                        [
                          _c("v-card-title", [
                            _vm._v("Top 10 Australian beaches")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-subtitle", { staticClass: "pb-0" }, [
                        _vm._v("Number 10")
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "text--primary" }, [
                        _c("div", [_vm._v("Whitehaven Beach")]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v("Whitsunday Island, Whitsunday Islands")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            { attrs: { color: "orange", text: "" } },
                            [_vm._v("Share")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { color: "orange", text: "" } },
                            [_vm._v("Explore")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { staticClass: "mx-5 my-5", attrs: { xs12: "", md3: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto", attrs: { "max-width": "400" } },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text align-end",
                          attrs: {
                            height: "200px",
                            src:
                              "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                          }
                        },
                        [
                          _c("v-card-title", [
                            _vm._v("Top 10 Australian beaches")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-subtitle", { staticClass: "pb-0" }, [
                        _vm._v("Number 10")
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "text--primary" }, [
                        _c("div", [_vm._v("Whitehaven Beach")]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v("Whitsunday Island, Whitsunday Islands")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            { attrs: { color: "orange", text: "" } },
                            [_vm._v("Share")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { color: "orange", text: "" } },
                            [_vm._v("Explore")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { staticClass: "mx-5 my-5", attrs: { xs12: "", md3: "" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto", attrs: { "max-width": "400" } },
                    [
                      _c(
                        "v-img",
                        {
                          staticClass: "white--text align-end",
                          attrs: {
                            height: "200px",
                            src:
                              "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                          }
                        },
                        [
                          _c("v-card-title", [
                            _vm._v("Top 10 Australian beaches")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-subtitle", { staticClass: "pb-0" }, [
                        _vm._v("Number 10")
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "text--primary" }, [
                        _c("div", [_vm._v("Whitehaven Beach")]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v("Whitsunday Island, Whitsunday Islands")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            { attrs: { color: "orange", text: "" } },
                            [_vm._v("Share")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { color: "orange", text: "" } },
                            [_vm._v("Explore")]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$90da8d', $90da8d);
          } else {
            api.reload('$90da8d', $90da8d);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"_css_loader":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"node_modules/vue-hot-reload-api/dist/index.js","vue":"node_modules/vue/dist/vue.runtime.esm.js"}],"src/views/Dashboard.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AllArticle = _interopRequireDefault(require("../components/AllArticle.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
// @ is an alias to /src
var _default = {
  name: "DashBoard",
  components: {
    "allarticle-item": _AllArticle.default
  },
  data: function data() {
    return {};
  }
};
exports.default = _default;
        var $4e12ab = exports.default || module.exports;
      
      if (typeof $4e12ab === 'function') {
        $4e12ab = $4e12ab.options;
      }
    
        /* template */
        Object.assign($4e12ab, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "dashboard" },
    [
      this.$route.path === "/" ? _c("allarticle-item") : _vm._e(),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$4e12ab', $4e12ab);
          } else {
            api.reload('$4e12ab', $4e12ab);
          }
        }

        
      }
    })();
},{"../components/AllArticle.vue":"src/components/AllArticle.vue","vue-hot-reload-api":"node_modules/vue-hot-reload-api/dist/index.js","vue":"node_modules/vue/dist/vue.runtime.esm.js"}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "46635" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Dashboard.c48d6e24.js.map