(window["webpackJsonpweb-os"]=window["webpackJsonpweb-os"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),l=n.n(o),i=(n(98),n(152)),c=n(153),u=n(47),s=n(14),d=n(10);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var b={backgroundType:"image",backgroundColor:"#ddf",backgroundImageUrl:"/web-os/files/hubble-extreme-deep-field.jpg",isSettingsMenuOpen:!1},f=n(82),g=Object(f.a)({palette:{type:"light"}}),h=n(22),E=n(12),w=n(27),y=n(28),O=n(29),v=n(20),k=n(110),C=Object(k.a)(function(e){return{container:{display:"flex",flexDirection:"column",minHeight:"100vh"},desktop:{flex:1,position:"relative"},toolbar:{flex:0}}}),j=function(e){var t=e.desktop,n=e.toolbar,a=C();return r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.desktop},t),r.a.createElement("div",{className:a.toolbar},n))},S=n(15),x=n(46),T=function(){return r.a.createElement(x.a,{variant:"h2",component:"span",style:{backgroundColor:"RGBA(255,255,255,0.5)",borderRadius:"0 0 30px 30px",padding:"0px 30px 10px"}},"WebOS")},W=Object(k.a)(function(e){return{desktop:function(e){var t=e.bgType,n=e.bgColor,a=e.bgUrl;return{backgroundColor:"color"===t?n:"transparent",backgroundImage:"image"===t?"url(".concat(a,")"):null,position:"absolute",top:0,right:0,bottom:0,left:0}}}}),z=function(e){var t=e.children,n=e.bgType,a=e.bgColor,o=e.bgUrl,l=W({bgType:n,bgColor:a,bgUrl:o});return r.a.createElement("div",{className:l.desktop,id:"desktop"},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(T,null)),t)},I=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(w.a)(this,Object(y.a)(t).call(this,e))).handleResize=n.handleResize.bind(Object(S.a)(n)),n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"handleResize",value:function(){var e=document.getElementById("desktop");this.props.setDesktopSize(e.offsetWidth,e.offsetHeight)}},{key:"componentDidMount",value:function(){this.handleResize(),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return r.a.createElement(z,this.props)}}]),t}(r.a.Component),D=function(e){return{type:"SET_IS_SETTINGS_MENU_OPEN",value:e}},N=Object(s.b)(function(e){return{bgType:e.backgroundType,bgColor:e.backgroundColor,bgUrl:e.backgroundImageUrl}},function(e){return{setDesktopSize:function(t,n){return e(function(e,t){return{type:"SET_DESKTOP_SIZE",width:e,height:t}}(t,n))}}})(I),P=n(144),M=n(43),U=n(136),B=n(137),_=n(138),R=n(139),H=Object(k.a)(function(e){return{menu:{width:250},button:{color:e.palette.primary.contrastText},header:{padding:e.spacing(1,2),backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText}}}),A=function(e){var t=e.children,n=H(),a=r.a.useState({isOpen:!1}),o=Object(M.a)(a,2),l=o[0],i=o[1],c=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&i({isOpen:e})}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.a,{onClick:c(!0),className:n.button},r.a.createElement(B.a,null,"dehaze")),r.a.createElement(_.a,{open:l.isOpen,onClose:c(!1)},r.a.createElement("div",{className:n.header},r.a.createElement(x.a,{variant:"h4"},"Menu")),r.a.createElement(R.a,null),r.a.createElement("div",{className:n.menu,role:"presentation",onClick:c(!1),onKeyDown:c(!1)},t)))},G=n(140),L=n(141),K=n(142),F=n(143),Y=n(74),J=n.n(Y),Z=n(75),q=n.n(Z),Q=n(72),V=n.n(Q),X=n(73),$=n.n(X),ee=function(){var e=0;return function(){return"Example #"+ ++e}}(),te=Object(s.b)(void 0,function(e){return{openSettingsDialog:function(){return e(D(!0))}}})(function(e){var t=e.openSettingsDialog,n=e.handleWindowCreate;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,null,r.a.createElement(L.a,{button:!0,onClick:t},r.a.createElement(K.a,null,r.a.createElement(B.a,null,"more_vert")),r.a.createElement(F.a,{primary:"Settings"}))),r.a.createElement(R.a,null),r.a.createElement(G.a,null,r.a.createElement(L.a,{button:!0,onClick:function(){return n(ee(),"example")}},r.a.createElement(K.a,null,r.a.createElement(V.a,null)),r.a.createElement(F.a,{primary:"Example Window"})),r.a.createElement(L.a,{button:!0,onClick:function(){return n("Clock App","clock")}},r.a.createElement(K.a,null,r.a.createElement($.a,null)),r.a.createElement(F.a,{primary:"Clock App"})),r.a.createElement(L.a,{button:!0},r.a.createElement(K.a,null,r.a.createElement(J.a,null)),r.a.createElement(F.a,{primary:"Files"})),r.a.createElement(L.a,{button:!0},r.a.createElement(K.a,null,r.a.createElement(q.a,null)),r.a.createElement(F.a,{primary:"Mail"}))))}),ne=function(e){var t=e.handleWindowCreate;return r.a.createElement(A,null,r.a.createElement(te,{handleWindowCreate:t}))},ae=Object(k.a)(function(e){return{time:{color:e.palette.primary.contrastText}}}),re=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(w.a)(this,Object(y.a)(t).call(this,e))).state={currentTime:new Date},n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){e.setState({currentTime:new Date})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"render",value:function(){return r.a.createElement("span",null,this.state.currentTime.toLocaleTimeString())}}]),t}(r.a.Component),oe=function(e){var t=e.handleWindowCreate,n=ae();return r.a.createElement(U.a,{onClick:function(){return t("Clock App","clock")}},r.a.createElement(x.a,{variant:"subtitle2",className:n.time},r.a.createElement(re,null)))},le=Object(k.a)(function(e){return{button:{marginRight:e.spacing(1)}}}),ie=function(e){var t=e.windows,n=e.handleWindowSelect,a=le();return r.a.createElement("div",null,t.map(function(e){return r.a.createElement(U.a,{variant:"contained",color:"primary",size:"small",className:a.button,key:e.id,onClick:function(){return n(e.id)}},e.title)}))},ce=Object(k.a)(function(e){return{toolbar:{backgroundColor:e.palette.primary.dark,display:"flex",justifyContent:"space-between"}}}),ue=function(e){var t=e.windows,n=e.handleWindowCreate,a=e.handleWindowSelect,o=ce();return r.a.createElement(P.a,{className:o.toolbar},r.a.createElement(ne,{handleWindowCreate:n}),r.a.createElement(ie,{windows:t,handleWindowSelect:a}),r.a.createElement(oe,{handleWindowCreate:n}))},se=n(76),de=n(109),me=n(150),pe=n(151),be=n(148),fe=Object(s.b)(function(e){return{bgType:e.backgroundType,bgColor:e.backgroundColor,bgUrl:e.backgroundImageUrl}})(function(e){var t=e.handleSelect,n=e.bgType,a=e.bgColor,o=e.bgUrl;return r.a.createElement(G.a,null,r.a.createElement(L.a,{button:!0,onClick:function(){return t("background")}},r.a.createElement(F.a,{primary:"Background",secondary:"image"===n?o:a})),r.a.createElement(R.a,null),r.a.createElement(L.a,{button:!0},r.a.createElement(F.a,{primary:"Something Else",secondary:""})))}),ge=n(145),he=n(146),Ee=n(156),we=n(147),ye=n(155),Oe=n(154),ve=n(149);function ke(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var Ce=Object(k.a)(function(e){return{formControl:{margin:e.spacing(3)},group:{margin:e.spacing(1,0)}}}),je=Object(s.b)(function(e){return{bgType:e.backgroundType,bgColor:e.backgroundColor,bgUrl:e.backgroundImageUrl}},function(e){return{setBackgroundType:function(t){return e(function(e){return{type:"SET_BACKGROUND_TYPE",bgType:e}}(t))},setBackgroundColor:function(t){return e(function(e){return{type:"SET_BACKGROUND_COLOR",color:e}}(t))},setBackgroundImage:function(t){return e(function(e){return{type:"SET_BACKGROUND_IMAGE",url:e}}(t))}}})(function(e){var t=e.bgType,n=e.bgColor,a=e.bgUrl,o=e.setBackgroundType,l=e.setBackgroundColor,i=e.setBackgroundImage,c=Ce(),u=r.a.useState({bgType:t,bgColor:n,bgUrl:a}),s=Object(M.a)(u,2),m=s[0],p=s[1],b=function(e){return function(t){var n=t.target.value;p(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ke(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ke(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},m,Object(d.a)({},e,n)))}};return r.a.createElement("form",null,r.a.createElement(ge.a,{component:"fieldset",className:c.formControl},r.a.createElement(he.a,{component:"legend"},"Background Type"),r.a.createElement(Ee.a,{"aria-label":"background-type",name:"backgroundType",className:c.group,value:m.bgType,onChange:b("bgType")},r.a.createElement(we.a,{value:"color",control:r.a.createElement(ye.a,null),label:"Color"}),r.a.createElement(Oe.a,{disabled:"color"!==m.bgType,label:"Background Color",value:m.bgColor,onChange:b("bgColor")}),r.a.createElement(we.a,{value:"image",control:r.a.createElement(ye.a,null),label:"Image"}),r.a.createElement(Oe.a,{disabled:"image"!==m.bgType,label:"Background Image URL",value:m.bgUrl,onChange:b("bgUrl")})),r.a.createElement(ve.a,null,"You can configure your background here."),r.a.createElement("button",{onClick:function(e){e.preventDefault(),o(m.bgType),l(m.bgColor),i(m.bgUrl)}},"Save")))}),Se=Object(se.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}),xe=r.a.forwardRef(function(e,t){return r.a.createElement(de.a,Object.assign({direction:"up",ref:t},e))}),Te=Object(s.b)(function(e){return{isOpen:e.isSettingsMenuOpen}},function(e){return{handleClose:function(){return e(D(!1))}}})(function(e){var t,n=e.isOpen,a=e.handleClose,o=Se(),l=r.a.useState("main"),i=Object(M.a)(l,2),c=i[0],u=i[1],s=function(e){return u(e)};switch(c){case"background":t=r.a.createElement(je,null);break;default:t=r.a.createElement(fe,{handleSelect:s})}return r.a.createElement(me.a,{fullScreen:!0,open:n,onClose:a,TransitionComponent:xe},r.a.createElement(pe.a,{className:o.appBar},r.a.createElement(P.a,null,r.a.createElement(be.a,{edge:"start",color:"inherit",onClick:function(){a(),u("main")},"aria-label":"close"},r.a.createElement(B.a,null,"close")),r.a.createElement(x.a,{variant:"h6",className:o.title},"App Settings"),"main"===c?null:r.a.createElement(U.a,{color:"inherit",onClick:function(){return s("main")}},"back"))),t)}),We=n(77),ze=n(79),Ie=n.n(ze),De=n(80),Ne=n.n(De),Pe=n(81),Me=n.n(Pe),Ue=Object(k.a)(function(e){return{container:{height:"100%",width:"100%",borderColor:e.palette.primary.main,borderStyle:"solid",borderWidth:"2px",display:"flex",flexDirection:"column"},contentWrapper:{flex:1,backgroundColor:e.palette.background.default,height:"100%"},topBar:{backgroundColor:e.palette.primary.main,display:"flex",justifyContent:"space-between",alignItems:"center"},topBarControls:{display:"flex",justifyContent:"flex-start",flexWrap:"nowrap"},control:{color:e.palette.primary.contrastText,margin:0,padding:0},topBarTitle:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)}}}),Be=function(e){var t=Ue(),n=e.children,a=e.title,o=e.isSelected,l=e.handleClose,i=e.handleMinimize,c=e.handleMaximize;return r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:t.topBar},r.a.createElement("div",{className:t.topBarControls},r.a.createElement(be.a,{size:"small",className:t.control,onClick:l},r.a.createElement(Ie.a,null)),r.a.createElement(be.a,{size:"small",className:t.control,onClick:i},r.a.createElement(Ne.a,null)),r.a.createElement(be.a,{size:"small",className:t.control,onClick:c},r.a.createElement(Me.a,null))),r.a.createElement(x.a,{variant:"h6",color:o?"textPrimary":"textSecondary",className:t.topBarTitle},a)),r.a.createElement("div",{className:t.contentWrapper},n))};function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var Re=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(w.a)(this,Object(y.a)(t).call(this,e))).state={x:100,y:100,width:400,height:400},n.handleMaximize=n.handleMaximize.bind(Object(S.a)(n)),n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"handleMaximize",value:function(){this.setState(function(e,t){return t.handleSelect(t.id),{x:0,y:0,width:t.desktopWidth,height:t.desktopHeight}})}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.title,o=t.isSelected,l=t.handleClose,i=t.handleHide,c=t.zIndex;return r.a.createElement(We.a,{size:{width:this.state.width,height:this.state.height},position:{x:this.state.x,y:this.state.y},onDragStop:function(t,n){e.setState({x:n.x,y:n.y})},onResize:function(t,n,a,r,o){e.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(n,!0).forEach(function(t){Object(d.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({width:a.offsetWidth,height:a.offsetHeight},o))},minWidth:200,minHeight:200,bounds:"parent",style:{overflow:"hidden",zIndex:c}},r.a.createElement(Be,{title:a,isSelected:o,handleClose:l,handleMinimize:i,handleMaximize:this.handleMaximize},n))}}]),t}(r.a.Component),He=Object(s.b)(function(e){return{desktopWidth:e.desktopWidth,desktopHeight:e.desktopHeight}})(Re),Ae=function(e){var t,n=e.size,a=e.rotate,o=e.color,l=e.width,i=e.length,c={position:"absolute",top:n/2+(t=a,-Math.cos(t*Math.PI/180)*l/2),left:n/2+function(e){return Math.sin(e*Math.PI/180)}(a)*l/2,width:i,height:l,transform:"rotate(".concat(a,"deg)"),transformOrigin:"0% 0%",backgroundColor:o,borderRadius:l/2};return r.a.createElement("div",{style:c})},Ge=function(e){var t=e.time,n=e.size,a=e.bgColor,o=e.arrColor,l=t.getSeconds()/60*360-90,i=t.getMinutes()/60*360-90,c=360*(t.getHours()/12+t.getMinutes()/60/12)-90,u={position:"relative",width:n,height:n,borderRadius:n/2,backgroundColor:a,borderColor:o,borderStyle:"solid",margin:"auto"};return r.a.createElement("div",{style:u},r.a.createElement(Ae,{size:n,rotate:c,color:o,width:10,length:.35*n}),r.a.createElement(Ae,{size:n,rotate:i,color:o,width:6,length:.45*n}),r.a.createElement(Ae,{size:n,rotate:l,color:o,width:4,length:.5*n}))},Le=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(w.a)(this,Object(y.a)(t).call(this,e))).state={currentTime:new Date},n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval(function(){e.setState({currentTime:new Date})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.props,t=e.bgColor,n=e.arrColor,a=e.size;return r.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"space-around"}},r.a.createElement(Ge,{time:this.state.currentTime,bgColor:t,arrColor:n,size:a}),r.a.createElement(x.a,{variant:"h6",align:"center",style:{padding:16}},this.state.currentTime.toLocaleString()))}}]),t}(r.a.Component);Le.defaultProps={bgColor:"indigo",arrColor:"PeachPuff",size:200};var Ke=Le,Fe=function(e){var t=e.name,n=null;return"example"===t?n=r.a.createElement("div",{style:{backgroundColor:"pink"}},r.a.createElement("p",null,"Hello, windows!"),r.a.createElement("p",null,"Created/updated at ",(new Date).toLocaleTimeString(),"...")):"clock"===t&&(n=r.a.createElement(Ke,{size:300})),n},Ye=function(e){var t=e.windows,n=e.selectedWindow,a=e.handleWindowCreate,o=e.handleWindowClose,l=e.handleWindowSelect,i=e.handleWindowHide,c=r.a.createElement(N,null,t.map(function(e){return r.a.createElement(He,{key:e.id,title:e.title,zIndex:e.zIndex,handleClose:function(){return o(e.id)},handleSelect:function(){return l(e.id)},handleHide:function(){return i(e.id)},isSelected:e.id===n},r.a.createElement(Fe,{name:e.appName}))})),u=r.a.createElement(ue,{windows:t,handleWindowCreate:a,handleWindowSelect:l});return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{desktop:c,toolbar:u}),r.a.createElement(Te,null))},Je=function(){return Date.now().toString(36)+Math.random().toString(36).substr(2)},Ze=function(e){var t=e.length?Math.max.apply(Math,Object(v.a)(e.map(function(e){return e.zIndex}))):1;return Math.max(t,1)},qe=function(e){var t={},n=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0)t[o.value]=!0}catch(c){a=!0,r=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw r}}var i=Array.from(Object.keys(t)).sort(function(e,t){return e-t});return Object.fromEntries(i.map(function(e,t){return[e,e>=0?t:e]}))},Qe=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(w.a)(this,Object(y.a)(t).call(this,e))).handleWindowCreate=function(e,t){n.setState(function(n){var a=Je(),r=Ze(n.windows)+1,o={id:a,title:e,appName:t,zIndex:r};return{windows:[].concat(Object(v.a)(n.windows),[o]),selectedWindow:a}})},n.handleWindowClose=function(e){n.setState(function(t){var n=t.windows.filter(function(t){return t.id!==e});return{windows:n=n.map(function(e){return Object.assign({},e)}),selectedWindow:t.selectedWindow===e?null:t.selectedWindow}})},n.handleWindowSelect=function(e){n.setState(function(t){var n=qe(t.windows.map(function(e){return e.zIndex})),a=t.windows.map(function(e){return Object.assign({},e,{zIndex:n[e.zIndex]})});return a.find(function(t){return t.id===e}).zIndex=Ze(a)+1,{windows:Object(v.a)(a),selectedWindow:e}})},n.handleWindowHide=function(e){n.setState(function(t){var n=t.windows.map(function(e){return Object.assign({},e)});return n.find(function(t){return t.id===e}).zIndex=-1,{windows:Object(v.a)(n)}})},n.state={windows:[],selectedWindow:null},n}return Object(O.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(Ye,{windows:this.state.windows,selectedWindow:this.state.selectedWindow,handleWindowCreate:this.handleWindowCreate,handleWindowClose:this.handleWindowClose,handleWindowSelect:this.handleWindowSelect,handleWindowHide:this.handleWindowHide})}}]),t}(r.a.Component),Ve=Object(u.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BACKGROUND_TYPE":return p({},e,{backgroundType:t.bgType});case"SET_BACKGROUND_COLOR":return p({},e,{backgroundColor:t.color});case"SET_BACKGROUND_IMAGE":return p({},e,{backgroundImageUrl:t.url});case"SET_DESKTOP_SIZE":return p({},e,{desktopWidth:t.width,desktopHeight:t.height});case"SET_IS_SETTINGS_MENU_OPEN":return p({},e,{isSettingsMenuOpen:t.value});default:return e}});l.a.render(r.a.createElement(function(){return r.a.createElement(s.a,{store:Ve},r.a.createElement(i.a,{theme:g},r.a.createElement(c.a,null),r.a.createElement(Qe,null)))},null),document.getElementById("root"))},93:function(e,t,n){e.exports=n(108)}},[[93,1,2]]]);
//# sourceMappingURL=main.09c54b70.chunk.js.map