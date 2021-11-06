"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[3721],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=i.createContext({}),l=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return i.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?i.createElement(h,a(a({ref:e},u),{},{components:n})):i.createElement(h,a({ref:e},u))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8009:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var i=n(2122),o=n(9756),r=(n(7294),n(3905)),a={title:"Motivation"},c=void 0,s={unversionedId:"introduction/motivation",id:"introduction/motivation",isDocsHomePage:!1,title:"Motivation",description:"For reasons of compatibility and simplicity, it's best to use React's built-in state management capabilities rather than external global state. But React has certain limitations:",source:"@site/docs/introduction/motivation.md",sourceDirName:"introduction",slug:"/introduction/motivation",permalink:"/docs/introduction/motivation",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/introduction/motivation.md",version:"current",frontMatter:{title:"Motivation"},sidebar:"docs",next:{title:"Core Concepts",permalink:"/docs/introduction/core-concepts"}},l=[],u={toc:l};function p(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"For reasons of compatibility and simplicity, it's best to use React's built-in state management capabilities rather than external global state. But React has certain limitations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Component state can only be shared by pushing it up to the common ancestor, but this might include a huge tree that then needs to re-render."),(0,r.kt)("li",{parentName:"ul"},"Context can only store a single value, not an indefinite set of values each with its own consumers."),(0,r.kt)("li",{parentName:"ul"},"Both of these make it difficult to code-split the top of the tree (where the state has to live) from the leaves of the tree (where the state is used).")),(0,r.kt)("p",null,"We want to improve this while keeping both the API and the semantics and behavior as Reactish as possible."),(0,r.kt)("p",null,"Recoil defines a directed graph orthogonal to but also intrinsic and attached to your React tree. State changes flow from the roots of this graph (which we call atoms) through pure functions (which we call selectors) and into components. With this approach:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We get a boilerplate-free API where shared state has the same simple get/set interface as React local state (yet can be encapsulated with reducers etc. if needed)."),(0,r.kt)("li",{parentName:"ul"},"We have the possibility of compatibility with Concurrent Mode and other new React features as they become available."),(0,r.kt)("li",{parentName:"ul"},"The state definition is incremental and distributed, making code-splitting possible."),(0,r.kt)("li",{parentName:"ul"},"State can be replaced with derived data without modifying the components that use it."),(0,r.kt)("li",{parentName:"ul"},"Derived data can move between being synchronous and asynchronous without modifying the components that use it."),(0,r.kt)("li",{parentName:"ul"},"We can treat navigation as a first-class concept, even encoding state transitions in links."),(0,r.kt)("li",{parentName:"ul"},"It's easy to persist the entire application state in a way that is backwards-compatible, so persisted states can survive application changes.")))}p.isMDXComponent=!0}}]);