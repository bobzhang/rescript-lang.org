(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32803],{22122:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},17375:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,{Z:function(){return r}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(k,l(l({ref:n},c),{},{components:t})):r.createElement(k,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"===typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"===typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96086:function(e){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},94663:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(22122),i=t(17375),a=t(67294),l=t(3905),o=(a.createElement,{});function p(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pinned-dependencies"},"Pinned Dependencies"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since 8.4")),(0,l.kt)("p",null,"Usually we'd recommend to use ReScript in a single-codebase style by using one ",(0,l.kt)("inlineCode",{parentName:"p"},"bsconfig.json")," file for your whole codebase."),(0,l.kt)("p",null,"There are scenarios where you still want to connect and build multiple independent ReScript packages for one main project though (",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),' workspaces-like "monorepos"). This is where ',(0,l.kt)("inlineCode",{parentName:"p"},"pinned-dependencies")," come into play."),(0,l.kt)("h2",{id:"package-types"},"Package Types"),(0,l.kt)("p",null,"Before we go into detail, let's first explain all the different package types recognized by the build system:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Toplevel (this is usually the final app you are building, which has dependencies to other packages)"),(0,l.kt)("li",{parentName:"ul"},"Pinned dependencies (these are your local packages that should always rebuild when you build your toplevel, those should be listed in ",(0,l.kt)("inlineCode",{parentName:"li"},"bs-dependencies")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"pinned-dependencies"),")"),(0,l.kt)("li",{parentName:"ul"},"Normal dependencies (these are packages that are consumed from npm and listed via ",(0,l.kt)("inlineCode",{parentName:"li"},"bs-dependencies"),")")),(0,l.kt)("p",null,"Whenever a package is being built (",(0,l.kt)("inlineCode",{parentName:"p"},"rescript build"),"), the build system will build the toplevel package with its pinned-dependencies. So any changes made in a pinned dependency will automatically be reflected in the final app."),(0,l.kt)("h2",{id:"build-system-package-rules"},"Build System Package Rules"),(0,l.kt)("p",null,"The build system respects the following rules for each package type:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Toplevel")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Warnings reported"),(0,l.kt)("li",{parentName:"ul"},"Warn-error respected"),(0,l.kt)("li",{parentName:"ul"},"Builds dev dependencies"),(0,l.kt)("li",{parentName:"ul"},"Builds pinned dependencies"),(0,l.kt)("li",{parentName:"ul"},"Runs custom rules"),(0,l.kt)("li",{parentName:"ul"},"Package-specs like ES6/CommonJS overrides all its dependencies")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pinned dependencies")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Warnings reported"),(0,l.kt)("li",{parentName:"ul"},"Warn-error respected"),(0,l.kt)("li",{parentName:"ul"},"Ignores pinned dependencies"),(0,l.kt)("li",{parentName:"ul"},"Builds dev dependencies"),(0,l.kt)("li",{parentName:"ul"},"Runs custom rules")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Normal dependencies")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Warnings, warn-error ignored"),(0,l.kt)("li",{parentName:"ul"},"Ignores dev directories"),(0,l.kt)("li",{parentName:"ul"},"Ignores pinned dependencies"),(0,l.kt)("li",{parentName:"ul"},"Ignores custom generator rules")),(0,l.kt)("p",null,"So with that knowledge in mind, let's dive into some more concrete examples to see our pinned dependencies in action."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"yarn-workspaces"},"Yarn workspaces"),(0,l.kt)("p",null,"Let's assume we have a codebase like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{}),"myproject/\n  app/\n   - src/App.res\n   - bsconfig.json\n  common/\n   - src/Header.res\n   - bsconfig.json\n  myplugin/\n   - src/MyPlugin.res\n   - bsconfig.json\n  package.json\n")),(0,l.kt)("p",null,"Our ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file within our codebase root would look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "myproject",\n  "private": true,\n  "workspaces": {\n    "packages": [\n      "app",\n      "common",\n      "myplugin"\n    ]\n  }\n}\n')),(0,l.kt)("p",null,"Our ",(0,l.kt)("inlineCode",{parentName:"p"},"app")," folder would be our toplevel package, consuming our ",(0,l.kt)("inlineCode",{parentName:"p"},"common")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"myplugin")," packages as ",(0,l.kt)("inlineCode",{parentName:"p"},"pinned-dependencies"),". The configuration for ",(0,l.kt)("inlineCode",{parentName:"p"},"app/bsconfig.json")," looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",(0,r.Z)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "app",\n  "version": "1.0.0",\n  "sources": {\n    "dir" : "src",\n    "subdirs" : true\n  },\n  /* ... */\n  "bs-dependencies": [\n    "common",\n    "myplugin"\n  ],\n  "pinned-dependencies": ["common", "myplugin"],\n  /* ... */\n}\n')),(0,l.kt)("p",null,"Now, whenever we are running ",(0,l.kt)("inlineCode",{parentName:"p"},"rescript build")," within our ",(0,l.kt)("inlineCode",{parentName:"p"},"app")," package, the compiler would always rebuild any changes within its pinned dependencies as well."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Important:")," ReScript will not rebuild any ",(0,l.kt)("inlineCode",{parentName:"p"},"pinned-dependencies")," in watch mode! This is due to the complexity of file watching, so you'd need to set up your own file-watcher process that runs ",(0,l.kt)("inlineCode",{parentName:"p"},"rescript build")," on specific file changes."))}p.isMDXComponent=!0,p.frontmatter={title:"Pinned Dependencies",metaTitle:"Pinned Dependencies",description:"Handling multiple packages within one ReScript project with pinned dependencies",canonical:"/docs/manual/latest/build-pinned-dependencies",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/latest/build-pinned-dependencies.mdx"}},24128:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/latest/build-pinned-dependencies",function(){return t(94663)}])}},function(e){e.O(0,[49774],(function(){return n=24128,e(e.s=n);var n}));var n=e.O();_N_E=n}]);