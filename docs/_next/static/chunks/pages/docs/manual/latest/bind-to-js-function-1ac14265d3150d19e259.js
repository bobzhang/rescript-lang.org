(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[13862],{22122:function(e,n,t){"use strict";function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return a}})},17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"===typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"===typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},96086:function(e){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},61871:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a,r=t(22122),i=t(17375),l=t(67294),o=t(3905),p=(l.createElement,a="CodeTab",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),s={};function u(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"function"},"Function"),(0,o.kt)("p",null,"Binding a JS function is like binding any other value:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'// Import nodejs\' path.dirname\n@module("path") external dirname: string => string = "dirname"\nlet root = dirname("/User/github") // returns "User"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var Path = require("path");\nvar root = Path.dirname("/User/github");\n'))),(0,o.kt)("p",null,"We also expose a few special features, described below."),(0,o.kt)("h2",{id:"labeled-arguments"},"Labeled Arguments"),(0,o.kt)("p",null,"ReScript has ",(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"function.md#labeled-arguments"}),"labeled arguments")," (that can also be optional). These work on an ",(0,o.kt)("inlineCode",{parentName:"p"},"external")," too! You'd use them to ",(0,o.kt)("em",{parentName:"p"},"fix")," a JS function's unclear usage. Assuming we're modeling this:"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"// MyGame.js\n\nfunction draw(x, y, border) {\n   // suppose `border` is optional and defaults to false\n}\ndraw(10, 20)\ndraw(20, 20, true)\n")),(0,o.kt)("p",null,"It'd be nice if on ReScript's side, we can bind & call ",(0,o.kt)("inlineCode",{parentName:"p"},"draw")," while labeling things a bit:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("MyGame")\nexternal draw: (~x: int, ~y: int, ~border: bool=?, unit) => unit = "draw"\n\ndraw(~x=10, ~y=20, ~border=true, ())\ndraw(~x=10, ~y=20, ())\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var MyGame = require("MyGame");\n\nMyGame.draw(10, 20, true);\nMyGame.draw(10, 20, undefined);\n'))),(0,o.kt)("p",null,"We've compiled to the same function, but now the usage is much clearer on the ReScript side thanks to labels!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": in this particular case, you need a unit, ",(0,o.kt)("inlineCode",{parentName:"p"},"()")," after ",(0,o.kt)("inlineCode",{parentName:"p"},"border"),", since ",(0,o.kt)("inlineCode",{parentName:"p"},"border")," is an ",(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"function.md#optional-labeled-arguments"}),"optional argument at the last position"),". Not having a unit to indicate you've finished applying the function would generate a warning."),(0,o.kt)("p",null,"Note that you can freely reorder the labels on the ReScript side; they'll always correctly appear in their declaration order in the JavaScript output:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("MyGame")\nexternal draw: (~x: int, ~y: int, ~border: bool=?, unit) => unit = "draw"\n\ndraw(~x=10, ~y=20, ())\ndraw(~y=20, ~x=10, ())\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var MyGame = require("MyGame");\n\nMyGame.draw(10, 20, undefined);\nMyGame.draw(10, 20, undefined);\n'))),(0,o.kt)("h2",{id:"object-method"},"Object Method"),(0,o.kt)("p",null,"Functions attached to a JS objects (other than JS modules) require a special way of binding to them, using ",(0,o.kt)("inlineCode",{parentName:"p"},"send"),":"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type document // abstract type for a document object\n@send external getElementById: (document, string) => Dom.element = "getElementById"\n@val external doc: document = "document"\n\nlet el = getElementById(doc, "myId")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var el = document.getElementById("myId");\n'))),(0,o.kt)("p",null,"In a ",(0,o.kt)("inlineCode",{parentName:"p"},"send"),", the object is always the first argument. Actual arguments of the method follow (this is a bit what modern OOP objects are really)."),(0,o.kt)("h3",{id:"chaining"},"Chaining"),(0,o.kt)("p",null,"Ever used ",(0,o.kt)("inlineCode",{parentName:"p"},"foo().bar().baz()"),' chaining ("fluent api") in JS OOP? We can model that in ReScript too, through the ',(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"pipe.md"}),"pipe operator"),"."),(0,o.kt)("h2",{id:"variadic-function-arguments"},"Variadic Function Arguments"),(0,o.kt)("p",null,"You might have JS functions that take an arbitrary amount of arguments. ReScript supports modeling those, under the condition that the arbitrary arguments part is homogenous (aka of the same type). If so, add ",(0,o.kt)("inlineCode",{parentName:"p"},"variadic")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"external"),"."),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("path") @variadic\nexternal join: array<string> => string = "join"\n\nlet v = join(["a", "b"])\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var Path = require("path");\nvar v = Path.join("a", "b");\n'))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"module")," will be explained in ",(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"import-from-export-to-js.md"}),"Import from/Export to JS"),"."),(0,o.kt)("h2",{id:"modeling-polymorphic-function"},"Modeling Polymorphic Function"),(0,o.kt)("p",null,"Apart from the above special-case, JS function in general are often arbitrary overloaded in terms of argument types and number. How would you bind to those?"),(0,o.kt)("h3",{id:"trick-1-multiple-externals"},"Trick 1: Multiple ",(0,o.kt)("inlineCode",{parentName:"h3"},"external"),"s"),(0,o.kt)("p",null,"If you can exhaustively enumerate the many forms an overloaded JS function can take, simply bind to each differently:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("MyGame") external drawCat: unit => unit = "draw"\n@module("MyGame") external drawDog: (~giveName: string) => unit = "draw"\n@module("MyGame") external draw: (string, ~useRandomAnimal: bool) => unit = "draw"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,o.kt)("p",null,"Note how all three externals bind to the same JS function, ",(0,o.kt)("inlineCode",{parentName:"p"},"draw"),"."),(0,o.kt)("h3",{id:"trick-2-polymorphic-variant--unwrap"},"Trick 2: Polymorphic Variant + ",(0,o.kt)("inlineCode",{parentName:"h3"},"unwrap")),(0,o.kt)("p",null,'If you have the irresistible urge of saying "if only this JS function argument was a variant instead of informally being either ',(0,o.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"int"),'", then good news: we do provide such ',(0,o.kt)("inlineCode",{parentName:"p"},"external")," features through annotating a parameter as a polymorphic variant! Assuming you have the following JS function you'd like to bind to:"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'function padLeft(value, padding) {\n  if (typeof padding === "number") {\n    return Array(padding + 1).join(" ") + value;\n  }\n  if (typeof padding === "string") {\n    return padding + value;\n  }\n  throw new Error(`Expected string or number, got \'${padding}\'.`);\n}\n')),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"padding")," is really conceptually a variant. Let's model it as such."),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val\nexternal padLeft: (\n  string,\n  @unwrap [\n    | #Str(string)\n    | #Int(int)\n  ])\n  => string = "padLeft"\npadLeft("Hello World", #Int(4))\npadLeft("Hello World", #Str("Message from ReScript: "))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'padLeft("Hello World", 4);\npadLeft("Hello World", "Message from ReScript: ");\n'))),(0,o.kt)("p",null,"Obviously, the JS side couldn't have an argument that's a polymorphic variant! But here, we're just piggy backing on poly variants' type checking and syntax. The secret is the ",(0,o.kt)("inlineCode",{parentName:"p"},"@unwrap")," annotation on the type. It strips the variant constructors and compile to just the payload's value. See the output."),(0,o.kt)("h2",{id:"constrain-arguments-better"},"Constrain Arguments Better"),(0,o.kt)("p",null,"Consider the Node ",(0,o.kt)("inlineCode",{parentName:"p"},"fs.readFileSync"),"'s second argument. It can take a string, but really only a defined set: ",(0,o.kt)("inlineCode",{parentName:"p"},'"ascii"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"utf8"'),", etc. You can still bind it as a string, but we can use poly variants + ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," to ensure that our usage's more correct:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("fs")\nexternal readFileSync: (\n  ~name: string,\n  @string [\n    | #utf8\n    | @as("ascii") #useAscii\n  ],\n) => string = "readFileSync"\n\nreadFileSync(~name="xx.txt", #useAscii)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var Fs = require("fs");\nFs.readFileSync("xx.txt", "ascii");\n'))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Attaching ",(0,o.kt)("inlineCode",{parentName:"li"},"@string")," to the whole poly variant type makes its constructor compile to a string of the same name."),(0,o.kt)("li",{parentName:"ul"},"Attaching a ",(0,o.kt)("inlineCode",{parentName:"li"},'@as("bla")')," to a constructor lets you customize the final string.")),(0,o.kt)("p",null,"And now, passing something like ",(0,o.kt)("inlineCode",{parentName:"p"},'"myOwnUnicode"')," or other variant constructor names to ",(0,o.kt)("inlineCode",{parentName:"p"},"readFileSync")," would correctly error."),(0,o.kt)("p",null,"Aside from string, you can also compile an argument to an int, using ",(0,o.kt)("inlineCode",{parentName:"p"},"int")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," in a similar way:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val\nexternal testIntType: (\n  @int [\n    | #onClosed\n    | @as(20) #onOpen\n    | #inBinary\n  ])\n  => int = "testIntType"\ntestIntType(#inBinary)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"testIntType(21);\n"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"onClosed")," compiles to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onOpen")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"20")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inBinary")," to ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"21")),"."),(0,o.kt)("h2",{id:"special-case-event-listeners"},"Special-case: Event Listeners"),(0,o.kt)("p",null,"One last trick with polymorphic variants:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type readline\n\n@send\nexternal on: (\n    readline,\n    @string [\n      | #close(unit => unit)\n      | #line(string => unit)\n    ]\n  )\n  => readline = "on"\n\nlet register = rl =>\n  rl\n  ->on(#close(event => ()))\n  ->on(#line(line => Js.log(line)));\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'function register(rl) {\n  return rl\n    .on("close", function($$event) {})\n    .on("line", function(line) {\n      console.log(line);\n    });\n}\n'))),(0,o.kt)("h2",{id:"fixed-arguments"},"Fixed Arguments"),(0,o.kt)("p",null,"Sometimes it's convenient to bind to a function using an ",(0,o.kt)("inlineCode",{parentName:"p"},"external"),", while passing predetermined argument values to the JS function:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val\nexternal processOnExit: (\n  @as("exit") _,\n  int => unit\n) => unit = "process.on"\n\nprocessOnExit(exitCode =>\n  Js.log("error code: " ++ Js.Int.toString(exitCode))\n);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'process.on("exit", function (exitCode) {\n  console.log("error code: " + exitCode.toString());\n});\n'))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},'@as("exit")')," and the placeholder ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," argument together indicates that you want the first argument to compile to the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"exit"'),". You can also use any JSON literal with ",(0,o.kt)("inlineCode",{parentName:"p"},"as"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"@as(json`true`)"),", ",(0,o.kt)("inlineCode",{parentName:"p"},'@as(json`{"name": "John"}`)'),", etc."),(0,o.kt)("h2",{id:"curry--uncurry"},"Curry & Uncurry"),(0,o.kt)("p",null,"Curry is a delicious Indian dish. More importantly, in the context of ReScript (and functional programming in general), currying means that function taking multiple arguments can be applied a few arguments at time, until all the arguments are applied."),(0,o.kt)("p",null,"See the ",(0,o.kt)("inlineCode",{parentName:"p"},"addFive")," intermediate function? ",(0,o.kt)("inlineCode",{parentName:"p"},"add"),' takes in 3 arguments but received only 1. It\'s interpreted as "currying" the argument ',(0,o.kt)("inlineCode",{parentName:"p"},"5")," and waiting for the next 2 arguments to be applied later on. Type signatures:"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let add: (int, int, int) => int\nlet addFive: (int, int) => int\nlet twelve: int\n")),(0,o.kt)("p",null,"(In a dynamic language such as JS, currying would be dangerous, since accidentally forgetting to pass an argument doesn't error at compile time)."),(0,o.kt)("h3",{id:"drawback"},"Drawback"),(0,o.kt)("p",null,"Unfortunately, due to JS not having currying because of the aforementioned reason, it's hard for ReScript multi-argument functions to map cleanly to JS functions 100% of the time:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When all the arguments of a function are supplied (aka no currying), ReScript does its best to to compile e.g. a 3-arguments call into a plain JS call with 3 arguments.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If it's too hard to detect whether a function application is complete","*",", ReScript will use a runtime mechanism (the ",(0,o.kt)("inlineCode",{parentName:"p"},"Curry")," module) to curry as many args as we can and check whether the result is fully applied.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Some JS APIs like ",(0,o.kt)("inlineCode",{parentName:"p"},"throttle"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"debounce")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"promise")," might mess with context, aka use the function ",(0,o.kt)("inlineCode",{parentName:"p"},"bind")," mechanism, carry around ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),", etc. Such implementation clashes with the previous currying logic."))),(0,o.kt)("p",null,"*"," If the call site is typed as having 3 arguments, we sometimes don't know whether it's a function that's being curried, or if the original one indeed has only 3 arguments."),(0,o.kt)("p",null,"ReScript tries to do #1 as much as it can. Even when it bails and uses #2's currying mechanism, it's usually harmless."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"However"),", if you encounter #3, heuristics are not good enough: you need a guaranteed way of fully applying a function, without intermediate currying steps. We provide such guarantee through the use of the ",(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"./function#uncurried-function"}),'"uncurrying" syntax')," on a function declaration & call site."),(0,o.kt)("h3",{id:"solution-use-guaranteed-uncurrying"},"Solution: Use Guaranteed Uncurrying"),(0,o.kt)("p",null,(0,o.kt)("a",(0,r.Z)({parentName:"p"},{href:"function.md#uncurried-function"}),"Uncurried function")," annotation also works on ",(0,o.kt)("inlineCode",{parentName:"p"},"external"),":"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type timerId\n@val external setTimeout: ((. unit) => unit, int) => timerId = "setTimeout"\n\nlet id = setTimeout((.) => Js.log("hello"), 1000)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'var id = setTimeout(function () {\n  console.log("hello");\n}, 1000);\n'))),(0,o.kt)("h4",{id:"extra-solution"},"Extra Solution"),(0,o.kt)("p",null,"The above solution is safe, guaranteed, and performant, but sometimes visually a little burdensome. We provide an alternative solution if:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you're using ",(0,o.kt)("inlineCode",{parentName:"li"},"external")),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"external")," function takes in an argument that's another function"),(0,o.kt)("li",{parentName:"ul"},"you want the user ",(0,o.kt)("strong",{parentName:"li"},"not")," to need to annotate the call sites with the dot")),(0,o.kt)("p",null,"Then try ",(0,o.kt)("inlineCode",{parentName:"p"},"@uncurry"),":"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"@send external map: (array<'a>, @uncurry ('a => 'b)) => array<'b> = \"map\"\nmap([1, 2, 3], x => x + 1)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,o.kt)("p",null,"In general, ",(0,o.kt)("inlineCode",{parentName:"p"},"uncurry")," is recommended; the compiler will do lots of optimizations to resolve the currying to uncurrying at compile time. However, there are some cases the compiler can't optimize it. In these cases, it will be converted to a runtime check."),(0,o.kt)("h2",{id:"modeling-this-based-callbacks"},"Modeling ",(0,o.kt)("inlineCode",{parentName:"h2"},"this"),"-based Callbacks"),(0,o.kt)("p",null,"Many JS libraries have callbacks which rely on this (the source), for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"x.onload = function(v) {\n  console.log(this.response + v)\n}\n")),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," would point to ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," (actually, it depends on how ",(0,o.kt)("inlineCode",{parentName:"p"},"onload")," is called, but we digress). It's not correct to declare ",(0,o.kt)("inlineCode",{parentName:"p"},"x.onload")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"(. unit) -> unit"),". Instead, we introduced a special attribute, ",(0,o.kt)("inlineCode",{parentName:"p"},"this"),", which allows us to type ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," as so:"),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type x\n@val external x: x = "x"\n@set external setOnload: (x, @this ((x, int) => unit)) => unit = "onload"\n@get external resp: x => int = "response"\nsetOnload(x, @this ((o, v) => Js.log(resp(o) + v)))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),"x.onload = function (v) {\n  var o = this;\n  console.log((o.response + v) | 0);\n};\n"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"this")," has its first parameter is reserved for ",(0,o.kt)("inlineCode",{parentName:"p"},"this")," and for arity of 0, there is no need for a redundant ",(0,o.kt)("inlineCode",{parentName:"p"},"unit")," type."),(0,o.kt)("h2",{id:"function-nullable-return-value-wrapping"},"Function Nullable Return Value Wrapping"),(0,o.kt)("p",null,"For JS functions that return a value that can also be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", we provide ",(0,o.kt)("inlineCode",{parentName:"p"},"@return(...)"),". To automatically convert that value to an ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," type (recall that ReScript ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," type's ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," value only compiles to ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," and not ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)(p,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type element\ntype dom\n\n@send @return(nullable)\nexternal getElementById: (dom, string) => option<element> = "getElementById"\n\nlet test = dom => {\n  let elem = dom->(getElementById("haha"))\n  switch (elem) {\n  | None => 1\n  | Some(_ui) => 2\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-js"}),'function test(dom) {\n  var elem = dom.getElementById("haha");\n  if (elem == null) {\n    return 1;\n  } else {\n    console.log(elem);\n    return 2;\n  }\n}\n\n'))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"return(nullable)")," attribute will automatically convert ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," type."),(0,o.kt)("p",null,"Currently 4 directives are supported: ",(0,o.kt)("inlineCode",{parentName:"p"},"null_to_opt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined_to_opt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"nullable")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"identity"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"identity")," will make sure that compiler will do nothing about the returned value. It is rarely used, but introduced here for debugging purpose."))}u.isMDXComponent=!0,u.frontmatter={title:"Bind to JS Function",description:"JS interop with functions in ReScript",canonical:"/docs/manual/latest/bind-to-js-function",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/bind-to-js-function.mdx"}},6278:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/bind-to-js-function",function(){return t(61871)}])}},function(e){e.O(0,[49774],(function(){return n=6278,e(e.s=n);var n}));var n=e.O();_N_E=n}]);