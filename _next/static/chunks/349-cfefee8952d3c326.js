(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[349],{7741:function(e,t,n){"use strict";n.d(t,{hU:function(){return v},zx:function(){return y}});var r=n(7294),a=n(6734),l=n(5818),o=n(4520),i=n(8387),c=n(5610),s=(...e)=>e.filter(Boolean).join(" "),u=e=>e?"":void 0,[m,f]=(0,i.k)({strict:!1,name:"ButtonGroupContext"});function d(e){let{children:t,className:n,...a}=e,o=(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,i=s("chakra-button__icon",n);return r.createElement(l.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:i},o)}function p(e){let{label:t,placement:n,spacing:a="0.5rem",children:o=r.createElement(c.$,{color:"currentColor",width:"1em",height:"1em"}),className:i,__css:u,...m}=e,f=s("chakra-button__spinner",i),d="start"===n?"marginEnd":"marginStart",p=(0,r.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[d]:t?a:0,fontSize:"1em",lineHeight:"normal",...u}),[u,t,d,a]);return r.createElement(l.m$.div,{className:f,...m,__css:p},o)}d.displayName="ButtonIcon",p.displayName="ButtonSpinner";var y=(0,l.Gp)((e,t)=>{let n=f(),i=(0,l.mq)("Button",{...n,...e}),{isDisabled:c=null==n?void 0:n.isDisabled,isLoading:m,isActive:d,children:y,leftIcon:v,rightIcon:h,loadingText:b,iconSpacing:x="0.5rem",type:_,spinner:E,spinnerPlacement:k="start",className:N,as:C,...w}=(0,o.Lr)(e),S=(0,r.useMemo)(()=>{let e={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!n&&{_focus:e}}},[i,n]),{ref:L,type:G}=function(e){let[t,n]=(0,r.useState)(!e),a=(0,r.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:a,type:t?"button":void 0}}(C),$={rightIcon:h,leftIcon:v,iconSpacing:x,children:y};return r.createElement(l.m$.button,{disabled:c||m,ref:(0,a.qq)(t,L),as:C,type:_??G,"data-active":u(d),"data-loading":u(m),__css:S,className:s("chakra-button",N),...w},m&&"start"===k&&r.createElement(p,{className:"chakra-button__spinner--start",label:b,placement:"start",spacing:x},E),m?b||r.createElement(l.m$.span,{opacity:0},r.createElement(g,{...$})):r.createElement(g,{...$}),m&&"end"===k&&r.createElement(p,{className:"chakra-button__spinner--end",label:b,placement:"end",spacing:x},E))});function g(e){let{leftIcon:t,rightIcon:n,children:a,iconSpacing:l}=e;return r.createElement(r.Fragment,null,t&&r.createElement(d,{marginEnd:l},t),a,n&&r.createElement(d,{marginStart:l},n))}y.displayName="Button",(0,l.Gp)(function(e,t){let{size:n,colorScheme:a,variant:o,className:i,spacing:c="0.5rem",isAttached:u,isDisabled:f,...d}=e,p=s("chakra-button__group",i),y=(0,r.useMemo)(()=>({size:n,colorScheme:a,variant:o,isDisabled:f}),[n,a,o,f]),g={display:"inline-flex"};return g=u?{...g,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...g,"& > *:not(style) ~ *:not(style)":{marginStart:c}},r.createElement(m,{value:y},r.createElement(l.m$.div,{ref:t,role:"group",__css:g,className:p,"data-attached":u?"":void 0,...d}))}).displayName="ButtonGroup";var v=(0,l.Gp)((e,t)=>{let{icon:n,children:a,isRound:l,"aria-label":o,...i}=e,c=n||a,s=(0,r.isValidElement)(c)?(0,r.cloneElement)(c,{"aria-hidden":!0,focusable:!1}):null;return r.createElement(y,{padding:"0",borderRadius:l?"full":void 0,ref:t,"aria-label":o,...i},s)});v.displayName="IconButton"},639:function(e,t,n){"use strict";n.d(t,{oM:function(){return f},xu:function(){return d},M5:function(){return g},Cd:function(){return y},W2:function(){return h},kC:function(){return b},rj:function(){return x},P4:function(){return E},Ug:function(){return O},X6:function(){return k},rU:function(){return N},HC:function(){return G},GS:function(){return L},Kq:function(){return M},xv:function(){return I}});var r=n(7294),a=n(5818);function l(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):!function(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}(e)?null!=e?t(e):null:Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{})}Object.freeze(["base","sm","md","lg","xl","2xl"]);var o=n(5336),i=n(4520),c=n(6076),s=n(2494),u=n(8387),m=n(4031),f=(0,a.Gp)(function(e,t){let{ratio:n=4/3,children:i,className:c,...s}=e,u=r.Children.only(i),m=(0,o.cx)("chakra-aspect-ratio",c);return r.createElement(a.m$.div,{ref:t,position:"relative",className:m,_before:{height:0,content:'""',display:"block",paddingBottom:l(n,e=>`${1/e*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...s},u)});f.displayName="AspectRatio",(0,a.Gp)(function(e,t){let n=(0,a.mq)("Badge",e),{className:l,...c}=(0,i.Lr)(e);return r.createElement(a.m$.span,{ref:t,className:(0,o.cx)("chakra-badge",e.className),...c,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...n}})}).displayName="Badge";var d=(0,a.m$)("div");d.displayName="Box";var p=(0,a.Gp)(function(e,t){let{size:n,centerContent:a=!0,...l}=e;return r.createElement(d,{ref:t,boxSize:n,__css:{...a?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...l})});p.displayName="Square";var y=(0,a.Gp)(function(e,t){let{size:n,...a}=e;return r.createElement(p,{size:n,ref:t,borderRadius:"9999px",...a})});y.displayName="Circle";var g=(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});g.displayName="Center";var v={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.Gp)(function(e,t){let{axis:n="both",...l}=e;return r.createElement(a.m$.div,{ref:t,__css:v[n],...l,position:"absolute"})}),(0,a.Gp)(function(e,t){let n=(0,a.mq)("Code",e),{className:l,...c}=(0,i.Lr)(e);return r.createElement(a.m$.code,{ref:t,className:(0,o.cx)("chakra-code",e.className),...c,__css:{display:"inline-block",...n}})}).displayName="Code";var h=(0,a.Gp)(function(e,t){let{className:n,centerContent:l,...c}=(0,i.Lr)(e),s=(0,a.mq)("Container",e);return r.createElement(a.m$.div,{ref:t,className:(0,o.cx)("chakra-container",n),...c,__css:{...s,...l&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});h.displayName="Container",(0,a.Gp)(function(e,t){let{borderLeftWidth:n,borderBottomWidth:l,borderTopWidth:c,borderRightWidth:s,borderWidth:u,borderStyle:m,borderColor:f,...d}=(0,a.mq)("Divider",e),{className:p,orientation:y="horizontal",__css:g,...v}=(0,i.Lr)(e);return r.createElement(a.m$.hr,{ref:t,"aria-orientation":y,...v,__css:{...d,border:"0",borderColor:f,borderStyle:m,...{vertical:{borderLeftWidth:n||s||u||"1px",height:"100%"},horizontal:{borderBottomWidth:l||c||u||"1px",width:"100%"}}[y],...g},className:(0,o.cx)("chakra-divider",p)})}).displayName="Divider";var b=(0,a.Gp)(function(e,t){let{direction:n,align:l,justify:o,wrap:i,basis:c,grow:s,shrink:u,...m}=e;return r.createElement(a.m$.div,{ref:t,__css:{display:"flex",flexDirection:n,alignItems:l,justifyContent:o,flexWrap:i,flexBasis:c,flexGrow:s,flexShrink:u},...m})});b.displayName="Flex";var x=(0,a.Gp)(function(e,t){let{templateAreas:n,gap:l,rowGap:o,columnGap:i,column:c,row:s,autoFlow:u,autoRows:m,templateRows:f,autoColumns:d,templateColumns:p,...y}=e;return r.createElement(a.m$.div,{ref:t,__css:{display:"grid",gridTemplateAreas:n,gridGap:l,gridRowGap:o,gridColumnGap:i,gridAutoColumns:d,gridColumn:c,gridRow:s,gridAutoFlow:u,gridAutoRows:m,gridTemplateRows:f,gridTemplateColumns:p},...y})});function _(e){return l(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}x.displayName="Grid";var E=(0,a.Gp)(function(e,t){let{area:n,colSpan:l,colStart:o,colEnd:i,rowEnd:s,rowSpan:u,rowStart:m,...f}=e,d=(0,c.oA)({gridArea:n,gridColumn:_(l),gridRow:_(u),gridColumnStart:o,gridColumnEnd:i,gridRowStart:m,gridRowEnd:s});return r.createElement(a.m$.div,{ref:t,__css:d,...f})});E.displayName="GridItem";var k=(0,a.Gp)(function(e,t){let n=(0,a.mq)("Heading",e),{className:l,...c}=(0,i.Lr)(e);return r.createElement(a.m$.h2,{ref:t,className:(0,o.cx)("chakra-heading",e.className),...c,__css:n})});k.displayName="Heading",(0,a.Gp)(function(e,t){let n=(0,a.mq)("Mark",e),l=(0,i.Lr)(e);return r.createElement(d,{ref:t,...l,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...n}})}),(0,a.Gp)(function(e,t){let n=(0,a.mq)("Kbd",e),{className:l,...c}=(0,i.Lr)(e);return r.createElement(a.m$.kbd,{ref:t,className:(0,o.cx)("chakra-kbd",l),...c,__css:{fontFamily:"mono",...n}})}).displayName="Kbd";var N=(0,a.Gp)(function(e,t){let n=(0,a.mq)("Link",e),{className:l,isExternal:c,...s}=(0,i.Lr)(e);return r.createElement(a.m$.a,{target:c?"_blank":void 0,rel:c?"noopener":void 0,ref:t,className:(0,o.cx)("chakra-link",l),...s,__css:n})});N.displayName="Link",(0,a.Gp)(function(e,t){let{isExternal:n,target:l,rel:i,className:c,...s}=e;return r.createElement(a.m$.a,{...s,ref:t,className:(0,o.cx)("chakra-linkbox__overlay",c),rel:n?"noopener noreferrer":i,target:n?"_blank":l,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})}),(0,a.Gp)(function(e,t){let{className:n,...l}=e;return r.createElement(a.m$.div,{ref:t,position:"relative",...l,className:(0,o.cx)("chakra-linkbox",n),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});var[C,w]=(0,u.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),S=(0,a.Gp)(function(e,t){let n=(0,a.jC)("List",e),{children:l,styleType:o="none",stylePosition:c,spacing:s,...u}=(0,i.Lr)(e),f=(0,m.W)(l);return r.createElement(C,{value:n},r.createElement(a.m$.ul,{ref:t,listStyleType:o,listStylePosition:c,role:"list",__css:{...n.container,...s?{"& > *:not(style) ~ *:not(style)":{mt:s}}:{}},...u},f))});S.displayName="List";var L=(0,a.Gp)((e,t)=>{let{as:n,...a}=e;return r.createElement(S,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...a})});L.displayName="OrderedList",(0,a.Gp)(function(e,t){let{as:n,...a}=e;return r.createElement(S,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...a})}).displayName="UnorderedList";var G=(0,a.Gp)(function(e,t){let n=w();return r.createElement(a.m$.li,{ref:t,...e,__css:n.item})});G.displayName="ListItem",(0,a.Gp)(function(e,t){let n=w();return r.createElement(s.JO,{ref:t,role:"presentation",...e,__css:n.icon})}).displayName="ListIcon",(0,a.Gp)(function(e,t){let{columns:n,spacingX:o,spacingY:i,spacing:c,minChildWidth:s,...u}=e,m=(0,a.Fg)(),f=s?l(s,e=>{let t=(0,a.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(m);return null===e?null:`repeat(auto-fit, minmax(${t}, 1fr))`}):l(n,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return r.createElement(x,{ref:t,gap:c,columnGap:o,rowGap:i,templateColumns:f,...u})}).displayName="SimpleGrid",(0,a.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}).displayName="Spacer";var $="& > *:not(style) ~ *:not(style)",j=e=>r.createElement(a.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});j.displayName="StackItem";var M=(0,a.Gp)((e,t)=>{let{isInline:n,direction:i,align:c,justify:s,spacing:u="0.5rem",wrap:f,children:d,divider:p,className:y,shouldWrapChildren:g,...v}=e,h=n?"row":i??"column",b=(0,r.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[$]:l(n,e=>r[e])}})({direction:h,spacing:u}),[h,u]),x=(0,r.useMemo)(()=>(function(e){let{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":l(n,e=>r[e])}})({spacing:u,direction:h}),[u,h]),_=!!p,E=!g&&!_,k=(0,r.useMemo)(()=>{let e=(0,m.W)(d);return E?e:e.map((t,n)=>{let a=void 0!==t.key?t.key:n,l=n+1===e.length,o=r.createElement(j,{key:a},t),i=g?o:t;if(!_)return i;let c=(0,r.cloneElement)(p,{__css:x});return r.createElement(r.Fragment,{key:a},i,l?null:c)})},[p,x,_,E,g,d]),N=(0,o.cx)("chakra-stack",y);return r.createElement(a.m$.div,{ref:t,display:"flex",alignItems:c,justifyContent:s,flexDirection:b.flexDirection,flexWrap:f,className:N,__css:_?{}:{[$]:b[$]},...v},k)});M.displayName="Stack";var O=(0,a.Gp)((e,t)=>r.createElement(M,{align:"center",...e,direction:"row",ref:t}));O.displayName="HStack",(0,a.Gp)((e,t)=>r.createElement(M,{align:"center",...e,direction:"column",ref:t})).displayName="VStack";var I=(0,a.Gp)(function(e,t){let n=(0,a.mq)("Text",e),{className:l,align:s,decoration:u,casing:m,...f}=(0,i.Lr)(e),d=(0,c.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return r.createElement(a.m$.p,{ref:t,className:(0,o.cx)("chakra-text",e.className),...d,...f,__css:n})});function R(e){return"number"==typeof e?`${e}px`:e}I.displayName="Text",(0,a.Gp)(function(e,t){let{spacing:n="0.5rem",spacingX:c,spacingY:s,children:u,justify:m,direction:f,align:d,className:p,shouldWrapChildren:y,...g}=e,v=(0,r.useMemo)(()=>{let{spacingX:e=n,spacingY:t=n}={spacingX:c,spacingY:s};return{"--chakra-wrap-x-spacing":t=>l(e,e=>R((0,i.fr)("space",e)(t))),"--chakra-wrap-y-spacing":e=>l(t,t=>R((0,i.fr)("space",t)(e))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:m,alignItems:d,flexDirection:f,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[n,c,s,m,d,f]),h=(0,r.useMemo)(()=>y?r.Children.map(u,(e,t)=>r.createElement(B,{key:t},e)):u,[u,y]);return r.createElement(a.m$.div,{ref:t,className:(0,o.cx)("chakra-wrap",p),overflow:"hidden",...g},r.createElement(a.m$.ul,{className:"chakra-wrap__list",__css:v},h))}).displayName="Wrap";var B=(0,a.Gp)(function(e,t){let{className:n,...l}=e;return r.createElement(a.m$.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,o.cx)("chakra-wrap__listitem",n),...l})});B.displayName="WrapItem"},6076:function(e,t,n){"use strict";function r(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}n.d(t,{oA:function(){return r}})},4031:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(7294);function a(e){return r.Children.toArray(e).filter(e=>(0,r.isValidElement)(e))}},6734:function(e,t,n){"use strict";n.d(t,{lq:function(){return a},qq:function(){return l}});var r=n(7294);function a(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}}function l(...e){return(0,r.useMemo)(()=>a(...e),e)}},1685:function(e){"use strict";var t=function(e){var t=3===e.length||4===e.length;return{r:t?"".concat(e.slice(0,1)).concat(e.slice(0,1)):e.slice(0,2),g:t?"".concat(e.slice(1,2)).concat(e.slice(1,2)):e.slice(2,4),b:t?"".concat(e.slice(2,3)).concat(e.slice(2,3)):e.slice(4,6),a:(t?"".concat(e.slice(3,4)).concat(e.slice(3,4)):e.slice(6,8))||"ff"}},n=function(e){return parseInt(e,16)},r=function(e){var t=e.r,r=e.g,a=e.b,l=e.a;return{r:n(t),g:n(r),b:n(a),a:+(n(l)/255).toFixed(2)}},a=function(e,t){var n=e.r,r=e.g,a=e.b,l=e.a,o=!isNaN(parseFloat(t))&&isFinite(t)?t:l;return"rgba(".concat(n,", ").concat(r,", ").concat(a,", ").concat(o,")")},l=function(e,n){return a(r(t("#"===e.charAt(0)?e.slice(1):e)),n)};e.exports=l},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,l=r(n(7294)),o=n(1003),i=n(4465),c=n(2692),s=n(8245),u=n(9246),m=n(227),f=n(3468);let d={};function p(e,t,n,r){if(!e||!o.isLocalURL(t))return;Promise.resolve(e.prefetch(t,n,r)).catch(e=>{});let a=r&&void 0!==r.locale?r.locale:e&&e.locale;d[t+"%"+n+(a?"%"+a:"")]=!0}let y=l.default.forwardRef(function(e,t){let n,r;let{href:y,as:g,children:v,prefetch:h,passHref:b,replace:x,shallow:_,scroll:E,locale:k,onClick:N,onMouseEnter:C,onTouchStart:w,legacyBehavior:S=!0!==Boolean(!0)}=e,L=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,S&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let G=!1!==h,$=l.default.useContext(c.RouterContext),j=l.default.useContext(s.AppRouterContext);j&&($=j);let{href:M,as:O}=l.default.useMemo(()=>{let[e,t]=o.resolveHref($,y,!0);return{href:e,as:g?o.resolveHref($,g):t||e}},[$,y,g]),I=l.default.useRef(M),R=l.default.useRef(O);S&&(r=l.default.Children.only(n));let B=S?r&&"object"==typeof r&&r.ref:t,[T,A,W]=u.useIntersection({rootMargin:"200px"}),q=l.default.useCallback(e=>{(R.current!==O||I.current!==M)&&(W(),R.current=O,I.current=M),T(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[O,B,M,W,T]);l.default.useEffect(()=>{let e=A&&G&&o.isLocalURL(M),t=void 0!==k?k:$&&$.locale,n=d[M+"%"+O+(t?"%"+t:"")];e&&!n&&p($,M,O,{locale:t})},[O,M,A,k,G,$]);let P={ref:q,onClick(e){S||"function"!=typeof N||N(e),S&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,c,s,u,m){let{nodeName:f}=e.currentTarget,d="A"===f.toUpperCase();if(d&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!o.isLocalURL(n)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!m})};u?l.default.startTransition(p):p()}(e,$,M,O,x,_,E,k,Boolean(j),G)},onMouseEnter(e){S||"function"!=typeof C||C(e),S&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),!(!G&&j)&&o.isLocalURL(M)&&p($,M,O,{priority:!0})},onTouchStart(e){S||"function"!=typeof w||w(e),S&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),!(!G&&j)&&o.isLocalURL(M)&&p($,M,O,{priority:!0})}};if(!S||b||"a"===r.type&&!("href"in r.props)){let z=void 0!==k?k:$&&$.locale,D=$&&$.isLocaleDomain&&m.getDomainLocale(O,z,$.locales,$.domainLocales);P.href=D||f.addBasePath(i.addLocale(O,z,$&&$.defaultLocale))}return S?l.default.cloneElement(r,P):l.default.createElement("a",Object.assign({},L,P),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,s=c||!l,[u,m]=r.useState(!1),[f,d]=r.useState(null);r.useEffect(()=>{if(l){if(!s&&!u&&f&&f.tagName){let e=function(e,t,n){let{id:r,observer:a,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=o.get(r)))return t;let a=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:a},i.push(n),o.set(n,t),t}(n);return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),o.delete(r);let t=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);t>-1&&i.splice(t,1)}}}(f,e=>e&&m(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let r=a.requestIdleCallback(()=>m(!0));return()=>a.cancelIdleCallback(r)}},[f,s,n,t,u]);let p=r.useCallback(()=>{m(!1)},[]);return[d,u,p]};var r=n(7294),a=n(4686);let l="function"==typeof IntersectionObserver,o=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8245:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294));let a=r.default.createContext(null);t.AppRouterContext=a;let l=r.default.createContext(null);t.LayoutRouterContext=l;let o=r.default.createContext(null);t.GlobalLayoutRouterContext=o;let i=r.default.createContext(null);t.TemplateContext=i},1664:function(e,t,n){e.exports=n(1551)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function c(e){return function(t){return r.createElement(s,o({attr:o({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,o({key:n},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var n,a=e.attr,l=e.size,c=e.title,s=i(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==l?r.createElement(l.Consumer,null,function(e){return t(e)}):t(a)}}}]);