(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2603)}])},3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let a=r(4788),n=r(8754),o=r(1757),i=r(224),l=o._(r(7294)),s=n._(r(2636)),c=r(7757),d=r(3735),u=r(3341);r(4210);let f=n._(r(7746)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function p(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,r,n,o,i,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current(a._({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}function b(e){let[t,r]=l.version.split("."),a=parseInt(t,10),n=parseInt(r,10);return a>18||18===a&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let x=(0,l.forwardRef)((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:o,qualityInt:s,className:c,imgStyle:d,blurStyle:u,isLazy:f,fetchPriority:m,fill:p,placeholder:g,loading:x,srcString:v,config:w,unoptimized:y,loader:_,onLoadRef:j,onLoadingCompleteRef:k,setBlurComplete:N,setShowAltText:E,onLoad:S,onError:z}=e,C=i._(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return x=f?"lazy":x,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",a._({},C,b(m),{loading:x,width:o,height:n,decoding:"async","data-nimg":p?"fill":"1",className:c,style:a._({},d,u)},r,{ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(z&&(e.src=e.src),e.complete&&h(e,v,g,j,k,N,y))},[v,g,j,k,N,z,y,t]),onLoad:e=>{let t=e.currentTarget;h(t,v,g,j,k,N,y)},onError:e=>{E(!0),"blur"===g&&N(!0),z&&z(e)}})))}),v=(0,l.forwardRef)((e,t)=>{let r,n;var o,{src:h,sizes:v,unoptimized:w=!1,priority:y=!1,loading:_,className:j,quality:k,width:N,height:E,fill:S,style:z,onLoad:C,onLoadingComplete:P,placeholder:I="empty",blurDataURL:R,fetchPriority:O,layout:L,objectFit:A,objectPosition:M,lazyBoundary:D,lazyRoot:F}=e,B=i._(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=(0,l.useContext)(u.ImageConfigContext),W=(0,l.useMemo)(()=>{let e=m||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return a._({},e,{allSizes:t,deviceSizes:r})},[T]),q=B,G=q.loader||f.default;delete q.loader;let U="__next_img_default"in G;if(U){if("custom"===W.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=G;G=t=>{let{config:r}=t,a=i._(t,["config"]);return e(a)}}if(L){"fill"===L&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(z=a._({},z,e));let t={responsive:"100vw",fill:"100vw"}[L];t&&!v&&(v=t)}let V="",H=g(N),J=g(E);if("object"==typeof(o=h)&&(p(o)||void 0!==o.src)){let e=p(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,R=R||e.blurDataURL,V=e.src,!S){if(H||J){if(H&&!J){let t=H/e.width;J=Math.round(e.height*t)}else if(!H&&J){let t=J/e.height;H=Math.round(e.width*t)}}else H=e.width,J=e.height}}let X=!y&&("lazy"===_||void 0===_);(!(h="string"==typeof h?h:V)||h.startsWith("data:")||h.startsWith("blob:"))&&(w=!0,X=!1),W.unoptimized&&(w=!0),U&&h.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(w=!0),y&&(O="high");let[Y,$]=(0,l.useState)(!1),[K,Q]=(0,l.useState)(!1),Z=g(k),ee=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:M}:{},K?{}:{color:"transparent"},z),et="blur"===I&&R&&!Y?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat((0,c.getImageBlurSvg)({widthInt:H,heightInt:J,blurWidth:r,blurHeight:n,blurDataURL:R,objectFit:ee.objectFit}),'")')}:{},er=function(e){let{config:t,src:r,unoptimized:a,width:n,quality:o,sizes:i,loader:l}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:a,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let o=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:o,kind:"x"}}(t,n,i),d=s.length-1;return{sizes:i||"w"!==c?i:"100vw",srcSet:s.map((e,a)=>"".concat(l({config:t,src:r,quality:o,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:l({config:t,src:r,quality:o,width:s[d]})}}({config:W,src:h,unoptimized:w,width:H,quality:Z,sizes:v,loader:G}),ea=h,en=(0,l.useRef)(C);(0,l.useEffect)(()=>{en.current=C},[C]);let eo=(0,l.useRef)(P);(0,l.useEffect)(()=>{eo.current=P},[P]);let ei=a._({isLazy:X,imgAttributes:er,heightInt:J,widthInt:H,qualityInt:Z,className:j,imgStyle:ee,blurStyle:et,loading:_,config:W,fetchPriority:O,fill:S,unoptimized:w,placeholder:I,loader:G,srcString:ea,onLoadRef:en,onLoadingCompleteRef:eo,setBlurComplete:$,setShowAltText:Q},q);return l.default.createElement(l.default.Fragment,null,l.default.createElement(x,a._({},ei,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",a._({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src,imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:q.crossOrigin},b(O)))):null)}),w=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:n,blurDataURL:o,objectFit:i}=e,l=a||t,s=n||r,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:a,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(a,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),r.__next_img_default=!0;let a=r},2603:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var a=r(5893),n=r(7849),o=r.n(n),i=r(5675),l=r.n(i);function s(){return(0,a.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-24 ".concat(o().className),children:[(0,a.jsxs)("div",{className:"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex",children:[(0,a.jsxs)("p",{className:"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30",children:["Get started by editing\xa0",(0,a.jsx)("code",{className:"font-mono font-bold",children:"pages/index.tsx"})]}),(0,a.jsx)("div",{className:"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none",children:(0,a.jsxs)("a",{className:"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0",href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,a.jsx)(l(),{src:"/vercel.svg",alt:"Vercel Logo",className:"dark:invert",width:100,height:24,priority:!0})]})})]}),(0,a.jsx)("div",{className:"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]",children:(0,a.jsx)(l(),{className:"relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert",src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0})}),(0,a.jsxs)("div",{className:"mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left",children:[(0,a.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Docs"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Find in-depth information about Next.js features and API. JOSHUA WILLS WAS HERE :)"})]}),(0,a.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Learn"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,a.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Templates"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,a.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",className:"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:"mb-3 text-2xl font-semibold",children:["Deploy"," ",(0,a.jsx)("span",{className:"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none",children:"->"})]}),(0,a.jsx)("p",{className:"m-0 max-w-[30ch] text-sm opacity-50",children:"Instantly deploy your Next.js site to a shareable URL with Vercel."})]})]})]})}},7849:function(e){e.exports={style:{fontFamily:"'__Inter_ccafe3', '__Inter_Fallback_ccafe3'",fontStyle:"normal"},className:"__className_ccafe3"}},5675:function(e,t,r){e.exports=r(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);