(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{5766:function(t,e,n){"use strict";n.d(e,{r:function(){return d}});var r=n(4925),i=n(4184),a=n.n(i),c=n(1664),o=n(7294),l=n(5230),u=n(7484),s=n(5893),h=["name","basic","children","query","hash"],d=function(t){var e=t.name,n=(t.basic,t.children),i=t.query,d=t.hash,f=(0,r.Z)(t,h),m=(0,u.w)(),x=i?"?"+i:"",p=d?"#"+d:"",v=l.jw[e].href(f)+x+p,g=o.Children.only(n);return"object"===typeof g&&o.isValidElement(g)&&"a"===g.type?(0,s.jsx)(c.default,{href:v,children:o.cloneElement(g,{className:a()(g.props.className)})}):(m.warn("Children must be a single anchor element"),(0,s.jsx)(c.default,{href:v,children:n}))}},5614:function(t,e,n){"use strict";n.d(e,{W:function(){return c},T:function(){return l}});var r=n(4184),i=n.n(r),a=(n(7294),n(5893)),c=function(t){var e=t.children,n=t.className;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:i()("max-w-full px-5 py-20 sm:px-24 sm:max-w-3xl sm:mx-auto",n),children:e})})},o=n(5230),l=function(t){var e=t.children,n=t.className,r=(0,o.tv)(),c=r.isPreview,l=r.push;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:i()("app-page","pb-40",n),children:e}),c&&(0,a.jsx)("a",{onClick:function(){return l({name:"exitPreview"})},className:"bg-yellow-400 text-white p-3 rounded-lg fixed bottom-4 right-4 shadow-md hover:shadow-sm hover:bg-yellow-500 active:shadow-inner active:bg-yellow-600",children:"Exit Preview"})]})}},6788:function(t,e,n){"use strict";n.d(e,{h:function(){return u},c:function(){return d}});var r=n(4184),i=n.n(r),a=n(7294),c=n(8052),o=n(4155),l=n(8764).Buffer,u=function(t){var e=t.rank,n=t.styleLevel,r=t.anchor,o=t.children,l=r&&"string"===typeof o?d(o):void 0,u=a.useCallback((function(){if(l){var t=new URL(window.location.href);t.hash=l,window.history.replaceState({},window.document.title,t.toString()),navigator.clipboard.writeText(t.toString()).catch(c.ZT)}}),[l]),f=s[e];return a.createElement(f,{className:i()(h[null!==n&&void 0!==n?n:f]),id:l,onClick:u},[o])},s={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"},h={"display-1":"text-6xl sm:text-8xl mb-8 font-extralight","display-2":"text-6xl sm:text-8xl mb-8 font-extralight","display-3":"text-6xl sm:text-8xl mb-8 font-extralight","display-4":"text-6xl sm:text-8xl mb-8 font-extralight",basic:"",h1:"text-4xl mb-8 font-light leading-snug",h2:"text-3xl mb-4 font-light leading-snug",h3:"text-2xl mb-3.5",h4:"text-xl mb-3",h5:"text-lg mb-2",h6:"text-base mb-1"};function d(t){var e=unescape(encodeURIComponent(t.toLocaleLowerCase().trim()));if(""!==e)return(void 0!==typeof o?l.from(e).toString("base64"):window.btoa(e)).substring(0,10)}},9523:function(t,e,n){"use strict";n.d(e,{Ol:function(){return i}});n(7294);var r=n(5893),i=function(t){var e=t.children;return(0,r.jsx)("ol",{className:"list-decimal list-inside sm:list-outside",children:e})}},3714:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return x}});var r,i=n(4942),a=n(513),c=n(2521),o=n(5833),l=(n(7294),n(5766)),u=n(5614),s=n(6788),h=n(9523),d=n(7484),f=n(9341),m=n(5893),x=!0;e.default=function(t){var e=t.allChapters,n=(0,d.w)();return(0,m.jsxs)(u.W,{children:[(0,m.jsx)(s.h,{rank:"1",children:(0,m.jsx)(l.r,{name:"home",children:(0,m.jsx)("a",{children:"Contents"})})}),(0,m.jsx)(h.Ol,{children:e.edges.map((function(t,e){var r=t.node.body.filter((function(t){return a.tO(p.decode(t))})),i=t.node._meta.uid,c=t.node.chapter_title[0];return c?(0,m.jsxs)("li",{children:[(0,m.jsx)("strong",{children:i?(0,m.jsx)(l.r,{name:"chapter",chapterUid:i,basic:!0,children:(0,m.jsx)("a",{className:"hover:underline",children:c.text})}):c.text}),r.map((function(t,e){var r=t.primary.heading_content[0];if(!r)return n.warn("`heading_content` missing content"),null;var a=(0,s.c)(r.text),c=v[r.type];return i?(0,m.jsx)(l.r,{name:"chapter",chapterUid:i,basic:!0,hash:a,prefetch:!1,children:(0,m.jsx)("a",{className:c,children:r.text})},e):(0,m.jsx)("div",{className:c,children:r.text},e)}))]},e):(n.warn("`chapter_title` missing content"),null)}))})]})};var p=c.dt({__typename:c.i0("ChapterBodyHeading"),primary:c.dt({heading_content:c.IX(c.dt({text:c.Z_,type:c.mM({heading2:null,heading3:null,heading4:null})}))})}),v=(c.dt({allChapters:c.dt({edges:c.IX(c.dt({node:c.dt({_meta:c.dt({uid:(0,f.j)(c.Z_)}),chapter_title:c.IX(c.dt({text:c.Z_,type:c.mM({heading1:null})})),body:c.IX(c.G0([c.dt({__typename:c.Z_}),p]))})}))})}),r={},(0,i.Z)(r,o.Elements.heading2,"block ml-4 mb-1 hover:underline"),(0,i.Z)(r,o.Elements.heading3,"block ml-12 mb-1 hover:underline italic"),(0,i.Z)(r,o.Elements.heading4,"block ml-18 mb-1 hover:underline italic"),r)},5230:function(t,e,n){"use strict";n.d(e,{tv:function(){return o},jw:function(){return l}});var r=n(4925),i=n(1163),a=n(8052),c=["name"];function o(){var t=(0,i.useRouter)();return{push:function(e){var n=e.name,i=(0,r.Z)(e,c),o=l[n].href(i);t.push(o).catch(a.ZT)},isPreview:t.isPreview}}var l={home:{href:function(){return"/"}},toc:{href:function(){return"/table-of-contents"}},chapter:{href:function(t){var e=t.chapterUid;return"/chapter/".concat(e)},path:"/chapter/:uid"},citation:{href:function(t){var e=t.citationUid;return"/citation/".concat(e)},path:"/citation/:uid"},preview:{href:function(){return"/api/preview"}},exitPreview:{href:function(){return"/api/exit-preview"}}};Object.keys(l).map((function(t){var e=l[t].path;return e?{type:t,path:e}:void 0})).filter(a.ri)},9341:function(t,e,n){"use strict";n.d(e,{d:function(){return i},j:function(){return a}});var r=n(2521);function i(t){return(0,r.dt)(t)}function a(t){return(0,r.G0)([t,r.S1])}},8052:function(t,e,n){"use strict";function r(t){return void 0!==t}function i(){}function a(t){return function(e){return e[t]}}n.d(e,{ri:function(){return r},ZT:function(){return i},B3:function(){return a}})},512:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/table-of-contents",function(){return n(3714)}])}},function(t){t.O(0,[622,217,774,888,179],(function(){return e=512,t(t.s=e);var e}));var e=t.O();_N_E=e}]);