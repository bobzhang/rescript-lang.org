(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43189],{22122:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return a}})},17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=l,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(b,o(o({ref:t},u),{},{components:n})):a.createElement(b,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"===typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"===typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},96086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},67995:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var a,l=n(22122),r=n(17375),o=n(67294),i=n(3905),s=(o.createElement,a="CodeTab",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),p={};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interop-cheatsheet"},"Interop Cheatsheet"),(0,i.kt)("h2",{id:"raw-js"},"Raw JS"),(0,i.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re"}),'let add = [%raw "(a, b) => a + b"];\n[%%raw "const a = 1"];\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-ml"}),'let add = [%raw "(a, b) => a + b"]\n[%%raw "const a = 1"]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-js"}),"var add = ((a, b) => a + b);\nconst a = 1\n"))),(0,i.kt)("h2",{id:"global-value"},"Global Value"),(0,i.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re"}),'[@bs.val] external setTimeout: (unit => unit, int) => float = "setTimeout";\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-ml"}),'external setTimeout: (unit -> unit) -> int -> float = "setTimeout" [@@bs.val]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,i.kt)("h2",{id:"global-modules-value"},"Global Module's Value"),(0,i.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re"}),'[@bs.val] [@bs.scope "Math"]\nexternal random: unit => float = "random";\n\nlet someNumber = random();\n\n[@bs.val] [@bs.scope ("window", "location", "ancestorOrigins")]\nexternal length: int = "length";\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-ml"}),'external random: unit -> float = "random"\n[@@bs.val][@@bs.scope "Math"]\n\nlet someNumber = random ()\n\nexternal length: int = "length"\n[@@bs.val][@@bs.scope ("window", "location", "ancestorOrigins")]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-js"}),"var someNumber = Math.random();\n"))),(0,i.kt)("h2",{id:"nullable"},"Nullable"),(0,i.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re"}),"let a = Some(5); // compiles to 5\nlet b = None; // compiles to undefined\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-ml"}),"let a = Some 5 (* compiles to 5 *)\nlet b = None (* compiles to undefined *)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-js"}),"var a = 5;\nvar b;\n"))),(0,i.kt)("p",null,"Handling a value that can be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),", by ditching the ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," type and using ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.Nullable.t"),":"),(0,i.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re"}),'let jsNull = Js.Nullable.null;\nlet jsUndefined = Js.Nullable.undefined;\nlet result1: Js.Nullable.t(string) = Js.Nullable.return("hello");\nlet result2: Js.Nullable.t(int) = Js.Nullable.fromOption(Some(10));\nlet result3: option(int) = Js.Nullable.toOption(Js.Nullable.return(10));\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-ml"}),'let jsNull = Js.Nullable.null\nlet jsUndefined = Js.Nullable.undefined\nlet result1: string Js.Nullable.t = Js.Nullable.return "hello"\nlet result2: int Js.Nullable.t = Js.Nullable.fromOption (Some 10)\nlet result3: int option = Js.Nullable.toOption (Js.Nullable.return 10)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-js"}),'var Caml_option = require("./stdlib/caml_option.js");\nvar Js_null_undefined = require("./stdlib/js_null_undefined.js");\n\nvar jsNull = null;\nvar jsUndefined;\nvar result1 = "hello";\nvar result2 = Js_null_undefined.fromOption(10);\nvar result3 = Caml_option.nullable_to_opt(10);\n'))),(0,i.kt)("h2",{id:"js-object"},"JS Object"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",(0,l.Z)({parentName:"li"},{href:"bind-to-js-object#bind-to-record-like-js-objects"}),"Bind to a JS object as a ReScript record"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",(0,l.Z)({parentName:"li"},{href:"bind-to-js-object#bind-to-hash-map-like-js-object"}),"Bind to a JS object that acts like a hash map"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",(0,l.Z)({parentName:"li"},{href:"bind-to-js-object#bind-to-a-js-object-thats-a-class"}),"Bind to a JS object that's a class"),".")),(0,i.kt)("h2",{id:"function"},"Function"),(0,i.kt)("h3",{id:"object-method--chaining"},"Object Method & Chaining"),(0,i.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re"}),"[@bs.send] external map: (array('a), 'a => 'b) => array('b) = \"map\";\n[@bs.send] external filter: (array('a), 'a => 'b) => array('b) = \"filter\";\n[|1, 2, 3|]\n  ->map(a => a + 1)\n  ->filter(a => a mod 2 == 0)\n  ->Js.log;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-ml"}),"external map: 'a array -> ('a -> 'b) -> 'b array = \"map\" [@@bs.send]\nexternal filter: 'a array -> ('a -> 'b) -> 'b array = \"filter\" [@@bs.send]\n[|1; 2; 3|]\n  |. map(fun a -> a + 1)\n  |. filter(fun a -> a mod 2 = 0)\n  |. Js.log\n")),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-js"}),"console.log(\n  [1, 2, 3]\n    .map(function (a) {\n      return (a + 1) | 0;\n    })\n    .filter(function (a) {\n      return a % 2 === 0;\n    })\n);\n"))),(0,i.kt)("h3",{id:"variadic-arguments"},"Variadic Arguments"),(0,i.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re"}),'[@bs.module "path"] [@bs.variadic]\nexternal join: array(string) => string = "join";\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-ml"}),'external join: string array -> string = "join"\n[@@bs.module "path"][@@bs.variadic]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,i.kt)("h3",{id:"polymorphic-function"},"Polymorphic Function"),(0,i.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re"}),'[@bs.module "Drawing"] external drawCat: unit => unit = "draw";\n[@bs.module "Drawing"] external drawDog: (~giveName: string) => unit = "draw";\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-ml"}),'external drawCat: unit -> unit = "draw" [@@bs.module "Drawing"]\nexternal drawDog: giveName:string -> unit = "draw" [@@bs.module "Drawing"]\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,i.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re"}),'[@bs.val]\nexternal padLeft: (\n  string,\n  [@bs.unwrap] [\n    | `Str(string)\n    | `Int(int)\n  ])\n  => string = "padLeft";\n\npadLeft("Hello World", `Int(4));\npadLeft("Hello World", `Str("Message from ReScript: "));\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-ml"}),'external padLeft:\n  string ->\n  (([\n    | `Str of string\n    | `Int of int\n  ]) [@bs.unwrap]) ->\n  string = "padLeft" [@@bs.val]\n\nlet _ = padLeft "Hello World" (`Int 4)\nlet _ = padLeft "Hello World" (`Str "Message from ReScript: ")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-js"}),'padLeft("Hello World", 4);\npadLeft("Hello World", "Message from ReScript: ");\n'))),(0,i.kt)("h2",{id:"js-module-interop"},"JS Module Interop"),(0,i.kt)("p",null,(0,i.kt)("a",(0,l.Z)({parentName:"p"},{href:"import-from-export-to-js.md"}),"See here")),(0,i.kt)("h2",{id:"dangerous-type-cast"},"Dangerous Type Cast"),(0,i.kt)("p",null,"Final escape hatch converter. Do not abuse."),(0,i.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-re"}),'external convertToFloat: int => float = "%identity";\nlet age = 10;\nlet gpa = 2.1 +. convertToFloat(age);\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-ml"}),'external convertToFloat: int => float = "%identity"\nlet age = 10\nlet gpa = 2.1 +. (convertToFloat age)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",(0,l.Z)({parentName:"pre"},{className:"language-js"}),"var age = 10;\nvar gpa = 2.1 + 10;\n"))),(0,i.kt)("h2",{id:"list-of-bs-decorators"},"List of ",(0,i.kt)("inlineCode",{parentName:"h2"},"@bs")," Decorators"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.as")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.get")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.inline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.int")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.meth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.new")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.return")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.scope")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.send")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.set")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.this")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.uncurry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.unwrap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.val")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@bs.variadic"))))}u.isMDXComponent=!0,u.frontmatter={title:"Interop Cheatsheet",description:"Cheatsheet for various interop scenarios in ReScript",canonical:"/docs/manual/latest/interop-cheatsheet",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/interop-cheatsheet.mdx"}},1935:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/interop-cheatsheet",function(){return n(67995)}])}},function(e){e.O(0,[49774],(function(){return t=1935,e(e.s=t);var t}));var t=e.O();_N_E=t}]);