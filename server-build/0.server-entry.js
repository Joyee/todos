exports.ids = [0];
exports.modules = {

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue__ = __webpack_require__(36);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64734976_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_todo_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
function injectStyle (context) {
var i
;(i=__webpack_require__(40),i.__inject__&&i.__inject__(context),i)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-64734976"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "d293ed54"

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_todo_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64734976_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_todo_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_64734976_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_todo_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_vue__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_vue__ = __webpack_require__(48);
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



let id = 0;
/* harmony default export */ __webpack_exports__["a"] = ({
  metaInfo: {
    title: 'The Todo App'
  },
  beforeRouteEnter(to, from, next) {
    console.log('todo route enter'); // 钩子函数获取不到this
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log('todo route update');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('todo route leave');
    // if (global.confirm('are u sure leave?')) {
    //   next()
    // }
    next();
  },
  props: ['id'],
  components: {
    Item: __WEBPACK_IMPORTED_MODULE_0__item_vue__["a" /* default */],
    Tabs: __WEBPACK_IMPORTED_MODULE_1__tabs_vue__["a" /* default */]
  },
  data() {
    return {
      todos: [],
      filter: 'all'
    };
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      }
      const completed = this.filter === 'completed';
      return this.todos.filter(todo => todo.completed === completed);
    }
  },
  mounted() {
    // console.log(this.id)
  },
  methods: {
    addTodo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value.trim(),
        completed: false
      });
      e.target.value = '';
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(item => item.id === id), 1);
    },
    toggleFilter(state) {
      this.filter = state;
    },
    clearAllCompletedTodo() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  }
});

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo() {
      this.$emit('del', this.todo.id);
    }
  }
});

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      states: ['all', 'active', 'completed']
    };
  },
  computed: {
    unCompletedTodoLength() {
      return this.todos.filter(todo => !todo.completed).length;
    }
  },
  methods: {
    toggleFilter(state) {
      this.$emit('toggleFilter', state);
    },
    clearAllCompleted() {
      this.$emit('clearAll');
    }
  }
});

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(33)
module.exports.__inject__ = function (context) {
  add("033117a8", content, true, context)
};

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, ".real-app[data-v-64734976]{width:600px;margin:0 auto;-webkit-box-shadow:0 0 5px #666;box-shadow:0 0 5px #666}.add-input[data-v-64734976]{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;border:0;outline:none;color:inherit;padding:6px;border:1px solid #999;-webkit-box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,.2);-webkit-box-sizing:border-box;box-sizing:border-box;font-smoothing:antialiased;padding:16px 16px 16px 60px;border:none;-webkit-box-shadow:inset 0 -2px 1px rgba(0,0,0,.03);box-shadow:inset 0 -2px 1px rgba(0,0,0,.03)}", ""]);

// exports


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_603f7ee5_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_item_vue__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
function injectStyle (context) {
var i
;(i=__webpack_require__(43),i.__inject__&&i.__inject__(context),i)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-603f7ee5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "2a20eda3"

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_603f7ee5_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_603f7ee5_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(44);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(33)
module.exports.__inject__ = function (context) {
  add("aff252dc", content, true, context)
};

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, ".todo-item[data-v-603f7ee5]{position:relative;background-color:#fff;font-size:24px;border-bottom:1px solid rgba(0,0,0,.06)}.todo-item:hover .destroy[data-v-603f7ee5]:after{content:\"\\D7\"}.todo-item label[data-v-603f7ee5]{white-space:pre-line;word-break:break-all;padding:15px 60px 15px 15px;margin-left:45px;display:block;line-height:1.2;-webkit-transition:color .4s;transition:color .4s}.todo-item.completed label[data-v-603f7ee5]{color:#d9d9d9;text-decoration:line-through}.toggle[data-v-603f7ee5]{text-align:center;width:40px;height:40px;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.toggle[data-v-603f7ee5]:after{content:url(" + __webpack_require__(45) + ")}.toggle[data-v-603f7ee5]:checked:after{content:url(" + __webpack_require__(46) + ")}.destroy[data-v-603f7ee5]{position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#cc9a9a;margin-bottom:11px;-webkit-transition:color .2s ease-out;transition:color .2s ease-out;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-width:0;cursor:pointer;outline:none}", ""]);

// exports


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iLTEwIC0xOCAxMDAgMTM1Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZWRlZGVkIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4="

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iLTEwIC0xOCAxMDAgMTM1Ij48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYmRkYWQ1IiBzdHJva2Utd2lkdGg9IjMiLz48cGF0aCBmaWxsPSIjNWRjMmFmIiBkPSJNNzIgMjVMNDIgNzEgMjcgNTZsLTQgNCAyMCAyMCAzNC01MnoiLz48L3N2Zz4="

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:['todo-item', _vm.todo.completed ? 'completed' : '']},[_vm._ssrNode("<input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.todo.completed)?_vm._i(_vm.todo.completed,null)>-1:(_vm.todo.completed)))+" class=\"toggle\" data-v-603f7ee5> <label data-v-603f7ee5>"+_vm._ssrEscape(_vm._s(_vm.todo.content))+"</label> <button class=\"destroy\" data-v-603f7ee5></button>")])}
var staticRenderFns = []


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__ = __webpack_require__(38);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3305ef85_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(0);
function injectStyle (context) {
var i
;(i=__webpack_require__(49),i.__inject__&&i.__inject__(context),i)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3305ef85"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = "a2250ee4"

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3305ef85_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3305ef85_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(50);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(33)
module.exports.__inject__ = function (context) {
  add("99c649e2", content, true, context)
};

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)(undefined);
// imports


// module
exports.push([module.i, ".helper[data-v-3305ef85]{font-weight:100;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:5px 0;line-height:30px;background-color:#fff;font-size:14px;font-smoothing:antialiased}.clear[data-v-3305ef85],.left[data-v-3305ef85],.tabs[data-v-3305ef85]{padding:0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}.clear[data-v-3305ef85],.left[data-v-3305ef85]{width:150px}.left[data-v-3305ef85]{text-align:left}.clear[data-v-3305ef85]{text-align:right;cursor:pointer}.tabs[data-v-3305ef85]{width:200px;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.tabs [data-v-3305ef85]{display:inline-block;padding:0 10px;cursor:pointer;border:1px solid rgba(175,47,47,0)}.tabs .actived[data-v-3305ef85]{border-color:rgba(175,47,47,.4);border-radius:5px}", ""]);

// exports


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"helper"},[_vm._ssrNode("<span class=\"left\" data-v-3305ef85>"+_vm._ssrEscape(_vm._s(_vm.unCompletedTodoLength)+" items left")+"</span> <span class=\"tabs\" data-v-3305ef85>"+(_vm._ssrList((_vm.states),function(state){return ("<span"+(_vm._ssrClass(null,[state, _vm.filter === state ? 'actived' : '']))+" data-v-3305ef85>"+_vm._ssrEscape("\n    "+_vm._s(state)+"\n    ")+"</span>")}))+"</span> <span class=\"clear\" data-v-3305ef85>Clear Completed</span>")])}
var staticRenderFns = []


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"real-app"},[_vm._ssrNode("<input type=\"text\" autofocus=\"autofocus\" placeholder=\"接下去要做啥子\" class=\"add-input\" data-v-64734976> "),_vm._l((_vm.filteredTodos),function(todo){return _c('Item',{key:todo.id,attrs:{"todo":todo},on:{"del":_vm.deleteTodo}})}),_vm._ssrNode(" "),_c('Tabs',{attrs:{"filter":_vm.filter,"todos":_vm.todos},on:{"toggleFilter":_vm.toggleFilter,"clearAll":_vm.clearAllCompletedTodo}})],2)}
var staticRenderFns = []


/***/ })

};;
//# sourceMappingURL=0.server-entry.js.map