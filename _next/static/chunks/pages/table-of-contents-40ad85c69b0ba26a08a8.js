(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{9439:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return f}});var r,i=n(2809),a=n(5893),c=n(513),l=n(2521),o=n(5833),u=(n(7294),n(6415)),d=n(7129),h=n(6788),s=n(9341),f=!0;e.default=function(t){var e=t.allChapters;return(0,a.jsxs)(d.W,{children:[(0,a.jsx)(h.h,{rank:"1",children:(0,a.jsx)(u.r,{name:"home",children:(0,a.jsx)("a",{children:"Contents"})})}),(0,a.jsx)("ol",{className:"list-decimal",children:e.edges.map((function(t,e){var n=t.node.body.filter((function(t){return c.tO(m.decode(t))})),r=t.node._meta.uid;return(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:r?(0,a.jsx)(u.r,{name:"chapter",chapterUid:r,basic:!0,children:(0,a.jsx)("a",{className:"hover:underline",children:t.node.chapter_title[0].text})}):t.node.chapter_title[0].text}),n.map((function(t,e){var n=t.primary.heading_content[0],i=(0,h.c)(n.text),c=x[n.type];return r?(0,a.jsx)(u.r,{name:"chapter",chapterUid:r,basic:!0,hash:i,children:(0,a.jsx)("a",{className:c,children:n.text})},e):(0,a.jsx)("div",{className:c,children:n.text},e)}))]},e)}))})]})};var m=l.dt({__typename:l.i0("ChapterBodyHeading"),primary:l.dt({heading_content:l.IX(l.dt({text:l.Z_,type:l.mM({heading2:null,heading3:null,heading4:null})}))})}),x=(l.dt({allChapters:l.dt({edges:l.IX(l.dt({node:l.dt({_meta:l.dt({uid:(0,s.j)(l.Z_)}),chapter_title:l.IX(l.dt({text:l.Z_,type:l.mM({heading1:null})})),body:l.IX(l.G0([l.dt({__typename:l.Z_}),m]))})}))})}),r={},(0,i.Z)(r,o.Elements.heading2,"block ml-4 mb-1 hover:underline"),(0,i.Z)(r,o.Elements.heading3,"block ml-12 mb-1 hover:underline italic"),(0,i.Z)(r,o.Elements.heading4,"block ml-18 mb-1 hover:underline italic"),r)},3514:function(t,e,n){"use strict";n.d(e,{r:function(){return h},q:function(){return s}});var r=n(5893),i=n(8360),a=n(4184),c=n.n(a),l=n(1664),o=n(7294);var u={home:{href:function(){return"/"}},toc:{href:function(){return"/table-of-contents"}},chapter:{href:function(t){var e=t.chapterUid;return"/chapter/".concat(e)},path:"/chapter/:uid"},citation:{href:function(t){var e=t.citationUid;return"/citation/".concat(e)},path:"/citation/:uid"}},d=(Object.keys(u).map((function(t){var e=u[t].path;return e?{type:t,path:e}:void 0})).filter((function(t){return void 0!==t})),n(6017)),h=function(t){var e=t.name,n=t.basic,a=t.children,h=t.query,f=t.hash,m=(0,i.Z)(t,["name","basic","children","query","hash"]),x=(0,d.w)(),p=h?"?"+h:"",b=f?"#"+f:"",v=u[e].href(m)+p+b,_=o.Children.only(a);return"object"===typeof _&&o.isValidElement(_)&&"a"===_.type?(0,r.jsx)(l.default,{href:v,children:o.cloneElement(_,{className:c()(_.props.className,!n&&s)})}):(x.warn("Children must be a single anchor element"),(0,r.jsx)(l.default,{href:v,children:a}))},s="underline hover:text-blue-600"},6415:function(t,e,n){"use strict";n.d(e,{r:function(){return r.r}});var r=n(3514)},7129:function(t,e,n){"use strict";n.d(e,{W:function(){return c}});var r=n(5893),i=n(4184),a=n.n(i),c=(n(7294),function(t){var e=t.children,n=t.className;return(0,r.jsx)("div",{className:a()("max-w-full px-5 py-20 sm:px-24 sm:max-w-3xl sm:mx-auto",n),children:e})})},6788:function(t,e,n){"use strict";n.d(e,{h:function(){return o},c:function(){return h}});var r=n(4184),i=n.n(r),a=n(7294),c=n(4155),l=n(8764).Buffer,o=function(t){var e=t.rank,n=t.styleLevel,r=t.anchor,c=t.children,l=u[e],o=r&&"string"===typeof c?h(c):void 0;return a.createElement(l,{className:i()(d[null!==n&&void 0!==n?n:l],"mt-5"),id:o},[c])},u={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"},d={"display-1":"text-8xl mb-8 font-extralight","display-2":"text-8xl mb-8 font-extralight","display-3":"text-8xl mb-8 font-extralight","display-4":"text-8xl mb-8 font-extralight",h1:"text-4xl mb-8 font-light leading-snug",h2:"text-3xl mb-4 font-light leading-snug",h3:"text-2xl mb-3.5",h4:"text-xl mb-3",h5:"text-lg mb-2",h6:"text-base mb-1"};function h(t){var e=unescape(encodeURIComponent(t.toLocaleLowerCase()));return(void 0!==typeof c?l.from(e).toString("base64"):window.btoa(e)).substring(0,10)}},9341:function(t,e,n){"use strict";n.d(e,{d:function(){return i},j:function(){return a}});var r=n(2521);function i(t){return(0,r.dt)(t)}function a(t){return(0,r.G0)([t,r.S1])}},512:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/table-of-contents",function(){return n(9439)}])}},function(t){t.O(0,[849,962,774,888,179],(function(){return e=512,t(t.s=e);var e}));var e=t.O();_N_E=e}]);