(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82329],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=i,d=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"===typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"===typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},52924:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(22122),i=n(17375),a=n(67294),o=n(3905),l=(a.createElement,{});function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"difference-from-native-ocaml"},"Difference from Native OCaml"),(0,o.kt)("p",null,"This is particularly important when porting an existing OCaml application to JavaScript."),(0,o.kt)("h2",{id:"custom-data-type"},"Custom Data Type"),(0,o.kt)("p",null,"In OCaml, the C FFI allows the user to define a custom data type and customize ",(0,o.kt)("inlineCode",{parentName:"p"},"caml_compare"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"caml_hash")," behavior, etc. This is not available in our backend (since we have no C FFI)."),(0,o.kt)("h2",{id:"physical-inequality"},"Physical (in)equality"),(0,o.kt)("p",null,"In general, only use physical equality as an optimization technique; don't rely on its correctness, since it is tightly coupled with the runtime."),(0,o.kt)("h2",{id:"string-char-range"},"String Char Range"),(0,o.kt)("p",null,"Currently, BuckleScript assumes that the char range is 0-255. The user should be careful when they pass a JavaScript string to the OCaml side. We are working on a solution for this problem."),(0,o.kt)("h2",{id:"weak-map"},"Weak Map"),(0,o.kt)("p",null,"OCaml\u2019s weak map is not available in BuckleScript. The weak pointer is replaced by a strict pointer."),(0,o.kt)("h2",{id:"integers"},"Integers"),(0,o.kt)("p",null,"OCaml has ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"int32"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeint")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"int64")," types."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Both ",(0,o.kt)("inlineCode",{parentName:"li"},"int32")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"int64")," in BuckleScript have the exact same semantics as OCaml."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int")," in BuckleScript is the same as ",(0,o.kt)("inlineCode",{parentName:"li"},"int32")," while in OCaml it\u2019s platform dependent."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nativeint")," is treated as JavaScript float, except for division. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"Nativeint.div a b")," will be translated into ",(0,o.kt)("inlineCode",{parentName:"li"},"a / b | 0"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Nativeint.shift_right_logical x 0")," is different from ",(0,o.kt)("inlineCode",{parentName:"p"},"Int32.shift_right_local x 0"),". The former is literally translated into ",(0,o.kt)("inlineCode",{parentName:"p"},"x >>> 0")," (translated into an unsigned int), while the latter is ",(0,o.kt)("inlineCode",{parentName:"p"},"x | 0"),"."),(0,o.kt)("h2",{id:"printfprintf"},"Printf.printf"),(0,o.kt)("p",null,"The Printf.print implementation in BuckleScript requires a newline (",(0,o.kt)("inlineCode",{parentName:"p"},"\\n"),") to trigger the printing. This behavior is not consistent with the buffered behavior of native OCaml. The only potential problem we foresee is that if the program terminates with no newline character, the text will never be printed."),(0,o.kt)("h2",{id:"obj-module"},"Obj Module"),(0,o.kt)("p",null,"We do our best to mimic the native compiler, but we have no guarantee and there are differences."),(0,o.kt)("h2",{id:"hashtbl-hash-algorithm"},"Hashtbl Hash Algorithm"),(0,o.kt)("p",null,"BuckleScript uses the same algorithm as native OCaml, but the output is different due to the runtime representation of int/int64/int32 and float."),(0,o.kt)("h2",{id:"marshall-module"},"Marshall Module"),(0,o.kt)("p",null,"Not supported yet."),(0,o.kt)("h2",{id:"str-module"},"Str Module"),(0,o.kt)("p",null,(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"https://github.com/BuckleScript/bucklescript/issues/879"}),"Not supported")," as it is implemented in C, which is not portable to BuckleScript. Use the ",(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"/docs/manual/latest/api/js/string"}),(0,o.kt)("inlineCode",{parentName:"a"},"Js.String"))," module instead which has bindings to the JavaScript ",(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"}),(0,o.kt)("inlineCode",{parentName:"a"},"String"))," class."),(0,o.kt)("h2",{id:"sysargv-sysmax_array_length-sysmax_string_length"},"Sys.argv, Sys.max_array_length, Sys.max_string_length"),(0,o.kt)("p",null,"Command line arguments are always empty. This might be fixed in the future. ",(0,o.kt)("inlineCode",{parentName:"p"},"Sys.max_array_length")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Sys.max_string_length")," will be the same as ",(0,o.kt)("inlineCode",{parentName:"p"},"max_int"),", but it might be respected."),(0,o.kt)("h2",{id:"unsupported-io-primitives"},"Unsupported IO Primitives"),(0,o.kt)("p",null,"Because of the JS environment limitation, ",(0,o.kt)("inlineCode",{parentName:"p"},"Pervasives.stdin")," is not supported but both ",(0,o.kt)("inlineCode",{parentName:"p"},"Pervasives.stdout")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Pervasives.stderr")," are."))}s.isMDXComponent=!0,s.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/reason-compiler/latest/difference-from-native-ocaml.mdx"}},60873:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/reason-compiler/latest/difference-from-native-ocaml",function(){return n(52924)}])}},function(e){e.O(0,[49774],(function(){return t=60873,e(e.s=t);var t}));var t=e.O();_N_E=t}]);