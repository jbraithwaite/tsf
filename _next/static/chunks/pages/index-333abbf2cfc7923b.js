(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2033)}])},1559:function(e,t,n){"use strict";n.d(t,{h:function(){return c},c:function(){return d}});var r=n(4184),i=n.n(r),o=n(7294),u=n(9384),a=n(4155),s=n(8764).Buffer,c=function(e){var t=e.rank,n=e.styleLevel,r=e.anchor,a=e.children,s=r&&"string"===typeof a?d(a):void 0,c=o.useCallback((function(){if(s){var e=new URL(window.location.href);e.hash=s,window.history.replaceState({},window.document.title,e.toString()),navigator.clipboard.writeText(e.toString()).catch(u.ZT)}}),[s]),p=l[t];return o.createElement(p,{className:i()(f[null!==n&&void 0!==n?n:p]),id:s,onClick:c},[a])},l={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"},f={"display-1":"text-6xl sm:text-8xl mb-8 font-extralight","display-2":"text-6xl sm:text-8xl mb-8 font-extralight","display-3":"text-6xl sm:text-8xl mb-8 font-extralight","display-4":"text-6xl sm:text-8xl mb-8 font-extralight",basic:"",h1:"text-4xl mb-8 font-light leading-snug",h2:"text-3xl mb-4 font-light leading-snug",h3:"text-2xl mb-3.5",h4:"text-xl mb-3",h5:"text-lg mb-2",h6:"text-base mb-1"};function d(e){var t,n=unescape(encodeURIComponent(e.toLocaleLowerCase().trim()));if(""!==n)return(void 0!==("undefined"===typeof a?"undefined":(t=a)&&"undefined"!==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t)?s.from(n).toString("base64"):window.btoa(n)).substring(0,10)}},2033:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(5893),i=n(7294),o=n(5974),u=function(){return(0,r.jsx)("div",{children:(0,r.jsxs)("p",{className:"prose",children:["We'll be in touch, in the mean time add",(0,r.jsx)("code",{children:"newsletter@blessedfootsteps.org"})," to your contacts so you don't miss a message."]})})},a=n(2521),s=n(9384);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}new a.Dy("Input(Number)",(function(e){return"number"===typeof e}),(function(e,t){var n=Number.parseInt(e,10);return Number.isNaN(n)?(0,a.Rn)(e,t):(0,a.Vp)(n)}),(function(e){return e.toString(10)}));var l=new a.Dy("Input(String)",(function(e){return"string"===typeof e}),(function(e,t){return""===e?(0,a.Rn)(e,t,"Field is required"):(0,a.Vp)(e)}),(function(e){return e.trim()})),f=new a.Dy("Input(Boolean)",(function(e){return"boolean"===typeof e}),(function(e,t){return"true"===e||"false"===e?(0,a.Vp)("true"===e):(0,a.Rn)(e,t,"Field is required")}),(function(e){return e.toString()})),d=new a.Dy("Input(Email)",(function(e){return"string"===typeof e}),(function(e,t){return""===e?(0,a.Rn)(e,t,"Field is required"):/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(e)?(0,a.Vp)(e):(0,a.Rn)(e,t,"Not a valid email address")}),(function(e){return e.trim()}));function p(e,t){var n=(0,a.Ju)({}),r=void 0===(null===t||void 0===t?void 0:t.initial)?"":e.encode(t.initial),u=c(i.useState([]),2),l=u[0],f=u[1],d=c(i.useState(r),2),p=d[0],h=d[1],g=null===t||void 0===t?void 0:t.maxLength,m=(0,o.isLeft)(e.validate("",(0,a.Ju)({}))),b=i.useCallback((function(){f([])}),[]),y=i.useCallback((function(e){h(e),b()}),[b]),v=i.useCallback((function(){h(r),b()}),[r,b]);return{validate:i.useCallback((function(t){if(null===t||void 0===t?void 0:t.silent)return e.validate(p,n);b();var r=e.validate(p,n);return(0,o.isLeft)(r)&&f(r.left.map((0,s.B3)("message")).filter(s.ri)),r}),[e,p,n,b]),reset:v,formGroupProps:{errors:l,required:m},inputProps:{value:p,required:m,error:l.length>0,maxLength:g,onChange:y}}}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g=function(e){var t=e.label,n=e.value,o=e.onChange,u=i.useCallback((function(e){o(e.target.checked.toString())}),[o]);return(0,r.jsxs)("label",{className:"inline-flex items-center",children:[(0,r.jsx)("input",{type:"checkbox",className:"rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500",checked:"true"===n,onChange:u}),(0,r.jsx)("span",{className:"ml-2 text-gray-600",children:t})]})};function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var y=function(e){var t=e.label,n=e.errors,i=e.required,o=e.children,u=b(e,["label","errors","required","children"]);return(0,r.jsxs)("label",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){m(e,t,n[t])}))}return e}({},u,{children:[(0,r.jsxs)("span",{className:"text-gray-700",children:[t,i&&(0,r.jsx)("span",{className:"text-red-600",children:"*"})]}),o,n&&(0,r.jsx)("div",{className:"text-red-600 mt-1",children:(0,r.jsx)(r.Fragment,{children:n.join(", ")})})]}))},v=n(4184),x=n.n(v);function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var O=function(e){var t=e.value,n=e.kind,o=void 0===n?"text":n,u=e.error,a=e.onChange,s=j(e,["value","kind","error","onChange"]),c=i.useCallback((function(e){a&&a(e.target.value)}),[a]);return(0,r.jsx)("input",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){w(e,t,n[t])}))}return e}({},s,{type:o,value:t,onChange:c,className:x()("mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0",u?"border-red-600":"border-transparent")}))},N=n(3604),k=n(4364),S=n(8389);function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){P(e,t,n[t])}))}return e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var B=function(){var e=E((0,S.useLoadableState)(),2),t=e[0],n=e[1],s=(0,N.z)().track,c=function(){var e=h(i.useState([]),2),t=e[0],n=e[1],r=p(l),u=p(l),s=p(d),c=p(f,{initial:!0}),g=p(f,{initial:!0}),m=i.useMemo((function(){return{firstName:r,lastName:u,email:s,updatesDaily:c,updatesBook:g}}),[s,r,u,g,c]),b="true"===c.inputProps.value||"true"===g.inputProps.value;i.useEffect((function(){b&&n([])}),[b]);var y=i.useCallback((function(){n([]);var e=(0,a.Ju)({}),t=Object.entries(m).map((function(e){var t=h(e,2);return[t[0],t[1].validate()]}));return b?t.every((function(e){return(0,o.isRight)(e[1])}))?(0,a.Vp)(Object.fromEntries(t.map((function(e){var t=h(e,2);return[t[0],t[1].right]})))):(0,a.Rn)(void 0,e):(n(["Select which updates to receive"]),(0,a.Rn)(void 0,e))}),[m,b]);return{fields:m,errors:t,validate:y}}(),m=c.validate,b=c.errors,v=c.fields,x=v.email,w=v.firstName,j=v.lastName,P=v.updatesBook,B=v.updatesDaily;return"success"===t.state?(0,r.jsx)(u,{}):(0,r.jsxs)("form",{className:"grid grid-cols-1 gap-6",children:[(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-6",children:[(0,r.jsx)(y,C({label:"First Name"},w.formGroupProps,{children:(0,r.jsx)(O,C({autoComplete:"given-name"},w.inputProps))})),(0,r.jsx)(y,C({label:"Last Name"},j.formGroupProps,{children:(0,r.jsx)(O,C({autoComplete:"family-name"},j.inputProps))}))]}),(0,r.jsx)(y,C({label:"Email"},x.formGroupProps,{children:(0,r.jsx)(O,C({kind:"email",autoComplete:"email"},x.inputProps))})),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{className:"text-gray-700",children:"Which kinds of updates would you like to receive?"}),(0,r.jsxs)("div",{className:"mt-2",children:[(0,r.jsx)("div",{children:(0,r.jsx)(g,C({},B.inputProps,{label:"Daily updates of `Abdu'l-Bah\xe1's travels in California (Oct. 3rd \u2013 Oct. 26th)"}))}),(0,r.jsx)("div",{children:(0,r.jsx)("label",{className:"inline-flex items-center",children:(0,r.jsx)(g,C({},P.inputProps,{label:"Book launch updates"}))})})]})]}),b.length>0&&(0,r.jsx)("div",{className:"text-red-600 bg-red-50 py-2 px-3",children:(0,r.jsx)(r.Fragment,{children:b.join(", ")})}),"failure"===t.state&&(0,r.jsx)("div",{className:"text-red-600 bg-red-50 py-2 px-3",children:"Could not subscribe at this time. Please try again later."}),(0,r.jsx)("button",{className:"px-10 py-4 text-lg text-center space-x-2 rounded-md ".concat(t.loading?"bg-gray-300 text-gray-50":"bg-gray-800 text-gray-300 shadow-lg hover:bg-gray-700","  leading-5 font-medium transition ease-in-out duration-100"),disabled:t.loading,onClick:function(){var e=m();if((0,o.isRight)(e)){var t=e.right,r=new FormData;r.set("EMAIL",t.email),r.set("FNAME",t.firstName),r.set("LNAME",t.lastName),t.updatesDaily&&r.set("group[30250][2]","2"),t.updatesBook&&r.set("group[30250][1]","1"),k.n.accept(n,fetch("https://blessedfootsteps.us5.list-manage.com/subscribe/post?u=ca1d84b71f4857272cf3d01b6&amp;id=889213de3b",{method:"POST",body:r,mode:"no-cors"}).then((function(){s("Newsletter Signup",{updates:t.updatesDaily&&t.updatesBook?"Daily & Book":t.updatesDaily?"Daily":t.updatesBook?"Book":void 0})})))}},children:t.loading?"Loading":"Sign up"})]})},A=n(1559),D=function(){return(0,r.jsxs)("main",{className:"max-w-full py-20 px-5 sm:px-24 sm:max-w-5xl sm:mx-auto",children:[(0,r.jsx)(A.h,{rank:"1",styleLevel:"display-1",children:"Blessed Footsteps"}),(0,r.jsxs)("div",{className:"prose prose-sm sm:prose lg:prose-lg xl:prose-xl mb-5",children:[(0,r.jsx)("h2",{children:"`Abdu'l-Bah\xe1's Visit to California"}),(0,r.jsx)("p",{children:"How could the Message of peace and unity of a mid-19th century Persian who had been imprisoned, tortured and exiled, reach the shores of the Pacific Ocean in the early 20th century with such an impact as to attract multitudes at major universities, churches, temples, and organizations throughout California, generating hundreds of newspaper articles containing thousands of words about a religion, ancient and eternal, previously largely unknown to the American public?"}),(0,r.jsx)("p",{children:"This question is explored by focusing on just 24 days of the 77 years in the life `Abdu'l-Bah\xe1\u2014the Son appointed by Bah\xe1'u'll\xe1h to maintain the purity of His Teachings after His passing. `Abdu'l-Bah\xe1's set out in 1911, at the age of 67, to familiarize those living in European and American cities of the renewal of the ancient Faith of God. His overall purpose was simply to promote true human happiness according to the heavenly principles and guidance authored by His father, Bah\xe1\u2019u\u2019ll\xe1h."}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"BlessedFootsteps.org"})," is an ever-growing website serving as a repository for the many personal accounts of whose who encountered `Abdu\u2019l-Bah\xe1 while visiting California. Additionally photos and newspaper articles from the time will be included. Information about visiting these sacred places blessed by `Abdu\u2019l-Bah\xe1\u2019s footsteps will be included as well. The launch date is expected to be in November 2021. Sign up for updated information about the website."]})]}),(0,r.jsxs)("div",{className:"p-5 bg-white filter drop-shadow-2xl rounded-2xl mt-10 ",children:[(0,r.jsx)("strong",{className:"block text-2xl text-gray-800 mb-5",children:"Receive updates"}),(0,r.jsx)(B,{})]}),(0,r.jsxs)("footer",{className:"text-gray-300 text-center text-xs my-10",children:["\xa9 ",(new Date).getFullYear()," Blessed Footsteps |"," ",(0,r.jsx)("a",{href:"mailto:tracingsacredfootsteps@gmail.com?subject=blessedfootsteps.org",children:"Contact"})]})]})}},4364:function(e,t,n){"use strict";n.d(t,{a:function(){return r},n:function(){return f}});var r={};function i(){return{state:"pending"}}function o(e){return{state:"failure",error:e}}function u(e){return{state:"success",value:e}}function a(e){return"success"===e.state}function s(e,t){return a(e)?e.value:t}function c(e,t){switch(e.state){case"success":return t.success(e.value);case"pending":return t.pending();case"failure":return t.failure(e.error)}}function l(e){return function(t){switch(t.state){case"success":return u(e(t.value));case"pending":case"failure":return t}}}n.r(r),n.d(r,{failure:function(){return o},isSuccess:function(){return a},map:function(){return l},match:function(){return c},pending:function(){return i},success:function(){return u},successOr:function(){return s}});var f=n(8389)},8389:function(e,t,n){"use strict";n.r(t),n.d(t,{initial:function(){return i},pending:function(){return o},loading:function(){return u},failed:function(){return a},failure:function(){return s},retrying:function(){return c},succeed:function(){return l},success:function(){return f},reloading:function(){return d},match:function(){return p},chain:function(){return h},map:function(){return g},mapFailure:function(){return m},getOrElse:function(){return b},getOrElseW:function(){return y},toLoading:function(){return v},accept:function(){return x},useLoadableState:function(){return w}});var r=n(7294);function i(e){return{state:"pending",loading:void 0!==e&&e}}function o(){return i(!1)}function u(){return i(!0)}function a(e,t){return{state:"failure",error:e,loading:void 0!==t&&t}}function s(e){return a(e,!1)}function c(e){return a(e,!0)}function l(e,t){return{state:"success",value:e,loading:void 0!==t&&t}}function f(e){return l(e)}function d(e){return l(e,!0)}function p(e,t){switch(e.state){case"success":return t.success(e.value,e.loading);case"pending":return t.pending(e.loading);case"failure":return t.failure(e.error,e.loading)}}function h(e){return function(t){return"success"===t.state?e(t.value,t.loading):t}}function g(e){return h((function(t,n){return n?d(e(t,n)):f(e(t,n))}))}function m(e){return function(t){return"failure"===t.state?t.loading?s(e(t.error,t.loading)):c(e(t.error,t.loading)):t}}function b(e,t){return function(n){return p(n,{success:function(e){return e},pending:e,failure:t||e})}}function y(e,t){return function(n){return p(n,{success:function(e){return e},pending:e,failure:t||e})}}function v(e){return p(e,{success:function(e){return d(e)},pending:function(){return u()},failure:function(e){return c(e)}})}function x(e,t){e.loading(),t.then(e.success,e.failure)}function w(e){var t=(0,r.useState)(e?f(e):o()),n=t[0],i=t[1];return[n,(0,r.useMemo)((function(){return e=i,{success:function(t){return e((function(){return f(t)}))},failure:function(t){return e((function(){return s(t)}))},loading:function(){return e(v)},pending:function(){return e(o)}};var e}),[i])]}},9384:function(e,t,n){"use strict";function r(e){return void 0!==e}function i(){}function o(e){return function(t){return t[e]}}n.d(t,{ri:function(){return r},ZT:function(){return i},B3:function(){return o}})}},function(e){e.O(0,[158,974,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);