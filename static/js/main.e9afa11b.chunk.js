(window["webpackJsonpweb-os"]=window["webpackJsonpweb-os"]||[]).push([[0],{86:function(e,t,a){e.exports=a(98)},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=(a(91),a(142)),u=a(143),i=a(41),m=a(27),b=a(11);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var s={backgroundType:"image",backgroundColor:"#ddf",backgroundImageUrl:"/web-os/files/hubble-extreme-deep-field.jpg"},d=a(74),f=Object(d.a)({palette:{type:"light"}}),E=a(100),y=a(40),k=a(137),O=a(32),C=a(139),v=a(138),h=a(140),j=a(129),T=a(125),w=a(127),S=a(141),U=a(128),I=a(70),B=a.n(I),D=a(71),P=a.n(D),x=a(69),N=a(99),_=a(135),R=a(136),A=a(133),G=Object(m.b)(function(e){return{bgType:e.backgroundType,bgColor:e.backgroundColor,bgUrl:e.backgroundImageUrl}})(function(e){var t=e.handleSelect,a=e.bgType,n=e.bgColor,o=e.bgUrl;return r.a.createElement(T.a,null,r.a.createElement(w.a,{button:!0,onClick:function(){return t("background")}},r.a.createElement(U.a,{primary:"Background",secondary:"image"===a?o:n})),r.a.createElement(j.a,null),r.a.createElement(w.a,{button:!0},r.a.createElement(U.a,{primary:"Something Else",secondary:""})))}),K=a(130),L=a(131),M=a(146),Y=a(132),F=a(145),J=a(144),W=a(134);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var H=Object(E.a)(function(e){return{formControl:{margin:e.spacing(3)},group:{margin:e.spacing(1,0)}}}),q=Object(m.b)(function(e){return{backgroundType:e.backgroundType,backgroundColor:e.backgroundColor,backgroundImageUrl:e.backgroundImageUrl}},function(e){return{setBackgroundType:function(t){return e(function(e){return{type:"SET_BACKGROUND_TYPE",bgType:e}}(t))},setBackgroundColor:function(t){return e(function(e){return{type:"SET_BACKGROUND_COLOR",color:e}}(t))},setBackgroundImage:function(t){return e(function(e){return{type:"SET_BACKGROUND_IMAGE",url:e}}(t))}}})(function(e){var t=e.backgroundType,a=e.backgroundColor,n=e.backgroundImageUrl,o=e.setBackgroundType,l=e.setBackgroundColor,c=e.setBackgroundImage,u=H(),i=r.a.useState({backgroundType:t,backgroundColor:a,backgroundImageUrl:n}),m=Object(O.a)(i,2),g=m[0],p=m[1],s=function(e){return function(t){var a=t.target.value;p(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},g,Object(b.a)({},e,a)))}};return r.a.createElement("form",null,r.a.createElement(K.a,{component:"fieldset",className:u.formControl},r.a.createElement(L.a,{component:"legend"},"Background Type"),r.a.createElement(M.a,{"aria-label":"background-type",name:"backgroundType",className:u.group,value:g.backgroundType,onChange:s("backgroundType")},r.a.createElement(Y.a,{value:"color",control:r.a.createElement(F.a,null),label:"Color"}),r.a.createElement(J.a,{disabled:"color"!==g.backgroundType,label:"Background Color",value:g.backgroundColor,onChange:s("backgroundColor")}),r.a.createElement(Y.a,{value:"image",control:r.a.createElement(F.a,null),label:"Image"}),r.a.createElement(J.a,{disabled:"image"!==g.backgroundType,label:"Background Image URL",value:g.backgroundImageUrl,onChange:s("backgroundImageUrl")})),r.a.createElement(W.a,null,"You can configure your background here."),r.a.createElement("button",{onClick:function(e){e.preventDefault(),o(g.backgroundType),l(g.backgroundColor),c(g.backgroundImageUrl)}},"Save")))}),Q=Object(x.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}),V=r.a.forwardRef(function(e,t){return r.a.createElement(N.a,Object.assign({direction:"up",ref:t},e))}),X=function(e){var t,a=e.isOpen,n=e.handleClose,o=Q(),l=r.a.useState("main"),c=Object(O.a)(l,2),u=c[0],i=c[1],m=function(e){return i(e)};switch(u){case"background":t=r.a.createElement(q,null);break;default:t=r.a.createElement(G,{handleSelect:m})}return r.a.createElement(_.a,{fullScreen:!0,open:a,onClose:n,TransitionComponent:V},r.a.createElement(R.a,{className:o.appBar},r.a.createElement(k.a,null,r.a.createElement(A.a,{edge:"start",color:"inherit",onClick:function(){n(),i("main")},"aria-label":"close"},r.a.createElement(v.a,null,"close")),r.a.createElement(y.a,{variant:"h6",className:o.title},"App Settings"),"main"===u?null:r.a.createElement(C.a,{color:"inherit",onClick:function(){return m("main")}},"back"))),t)},Z=Object(E.a)(function(e){return{menu:{width:250},header:{padding:e.spacing(1,2),backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText}}}),$=function(){var e=Z(),t=r.a.useState({isOpen:!1}),a=Object(O.a)(t,2),n=a[0],o=a[1],l=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&o({isOpen:e})}},c=r.a.useState(!1),u=Object(O.a)(c,2),i=u[0],m=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{onClick:l(!0)},r.a.createElement(v.a,null,"dehaze")),r.a.createElement(h.a,{open:n.isOpen,onClose:l(!1)},r.a.createElement("div",{className:e.header},r.a.createElement(y.a,{variant:"h4"},"Menu")),r.a.createElement(j.a,null),r.a.createElement("div",{className:e.menu,role:"presentation",onClick:l(!1),onKeyDown:l(!1)},r.a.createElement(T.a,null,r.a.createElement(w.a,{button:!0,onClick:function(){m(!0)}},r.a.createElement(S.a,null,r.a.createElement(v.a,null,"more_vert")),r.a.createElement(U.a,{primary:"Settings"}))),r.a.createElement(j.a,null),r.a.createElement(T.a,null,r.a.createElement(w.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(B.a,null)),r.a.createElement(U.a,{primary:"Files"})),r.a.createElement(w.a,{button:!0},r.a.createElement(S.a,null,r.a.createElement(P.a,null)),r.a.createElement(U.a,{primary:"Mail"}))))),r.a.createElement(X,{isOpen:i,handleClose:function(){m(!1)}}))},ee=a(48),te=a(29),ae=a(72),ne=a(73),re=a(75),oe=function(e){function t(e){var a;return Object(ee.a)(this,t),(a=Object(ae.a)(this,Object(ne.a)(t).call(this,e))).state={currentTime:new Date},a}return Object(re.a)(t,e),Object(te.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){e.setState({currentTime:new Date})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return r.a.createElement("span",null,this.state.currentTime.toLocaleString())}}]),t}(r.a.Component),le=Object(E.a)(function(e){return{root:{minHeight:"100vh",display:"flex",flexDirection:"column"},main:function(e){var t=e.bgType,a=e.bgColor,n=e.bgUrl;return{flex:1,backgroundColor:"color"===t?a:"transparent",backgroundImage:"image"===t?"url(".concat(n,")"):null}},toolbar:{flex:0,backgroundColor:"#aaf",display:"flex",justifyContent:"space-between"}}}),ce=Object(m.b)(function(e){return{bgType:e.backgroundType,bgColor:e.backgroundColor,bgUrl:e.backgroundImageUrl}})(function(e){var t=e.bgType,a=e.bgColor,n=e.bgUrl,o=le({bgType:t,bgColor:a,bgUrl:n});return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.main},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(y.a,{variant:"h2",component:"span",style:{backgroundColor:"RGBA(255,255,255,0.5)",borderRadius:"0 0 30px 30px",padding:"0px 30px 10px"}},"WebOS"))),r.a.createElement(k.a,{className:o.toolbar},r.a.createElement($,null),r.a.createElement(y.a,{variant:"h4"},"Toolbar"),r.a.createElement(y.a,{variant:"subtitle2"},r.a.createElement(oe,null))))}),ue=Object(i.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BACKGROUND_TYPE":return p({},e,{backgroundType:t.bgType});case"SET_BACKGROUND_COLOR":return p({},e,{backgroundColor:t.color});case"SET_BACKGROUND_IMAGE":return p({},e,{backgroundImageUrl:t.url});default:return e}});l.a.render(r.a.createElement(function(){return r.a.createElement(m.a,{store:ue},r.a.createElement(c.a,{theme:f},r.a.createElement(u.a,null),r.a.createElement(ce,null)))},null),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.e9afa11b.chunk.js.map