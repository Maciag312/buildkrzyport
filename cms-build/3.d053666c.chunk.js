(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{2285:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(1).createContext)();t.default=a},2286:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(12));function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l=function(e){return Object.keys(e).map((function(t,n){return i(i({},e[t]),{},{name:t,index:n})}))};t.default=l},2287:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){var t;switch(e){case"date":case"datetime":case"time":case"timestamp":t="date";break;case"integer":case"biginteger":case"decimal":case"float":t="number";break;case"string":case"text":t="text";break;case"":t="relation";break;default:t=e}return t};t.default=a},2288:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(6)),r=a(n(12)),i=a(n(1)),l=a(n(2)),u=n(10),d=n(8),c=n(27),f=n(76),s=a(n(106)),m=a(n(2360)),p=a(n(116)),_=a(n(2361)),g=a(n(2289)),b=a(n(2366));function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){var t=e.className,n=e.customRowComponent,a=e.items,r=e.addComponentToDZ,l=e.targetUid,h=e.mainTypeName,y=e.editTarget,C=e.isFromDynamicZone,w=e.isNestedInDZComponent,x=e.isMain,E=e.firstLoopComponentName,k=e.firstLoopComponentUid,O=e.secondLoopComponentName,T=e.secondLoopComponentUid,N=e.isSub,P=e.dzName,j=(0,d.useGlobalContext)().formatMessage,D=(0,p.default)(),L=D.isInDevelopmentMode,M=D.modifiedData,F=(0,m.default)().openModalAddField,U=function(){var e=(0,u.get)(M,["components",k,"schema","icon"],""),t=(0,u.get)(M,["components",k,"category"],null),n=(0,u.get)(M,["components",k,"schema","name"],null),a=(0,u.get)(M,["components",T,"category"],null),o=(0,u.get)(M,["components",T,"schema","name"],null),r=(0,u.get)(M,["components",T,"schema","icon"],""),i="contentType"===y?(0,u.get)(M,["contentType","schema","kind"],null):y,d={header_label_1:h,header_icon_name_1:i,header_icon_isCustom_1:!1,header_info_category_1:null,header_info_name_1:null},c={header_label_2:E,header_icon_name_2:"component",header_icon_isCustom_2:!1,header_info_category_2:t,header_info_name_2:n},f={header_icon_name_3:"component",header_icon_isCustom_3:!1,header_info_category_3:a,header_info_name_3:o},s={header_icon_name_4:null,header_icon_isCustom_4:!1,header_info_category_4:a,header_info_name_4:o};E&&(d=v(v({},d),{},{header_icon_name_1:e,header_icon_isCustom_1:!0})),T&&(d=v(v({},d),{},{header_icon_name_1:r,header_icon_isCustom_1:!0}),f=v(v({},f),{},{header_label_3:O})),(C||w)&&(c=v(v({},c),{},{header_label_2:P,header_icon_name_2:"dynamiczone",header_icon_isCustom_2:!1,header_info_category_2:null,header_info_name_2:null}),f=v(v({},f),{},{header_icon_name_3:w?"component":null,header_label_3:E,header_info_category_3:t,header_info_name_3:n}),s=v(v({},s),{},{header_label_4:O})),F(y,l,d,c,f,s)},Z={icon:!N&&i.default.createElement(f.Plus,{fill:"#007eff",width:"11px",height:"11px"}),color:"primary",label:L?j({id:N?"".concat(s.default,".form.button.add.field.to.component"):"".concat(s.default,".form.button.add.field.to.").concat(M.contentType?M.contentType.schema.kind:y),defaultMessage:"Add another field"}):null,onClick:U};return l?i.default.createElement(i.default.Fragment,null,i.default.createElement(b.default,{className:t,isFromDynamicZone:C},i.default.createElement("table",null,i.default.createElement("tbody",null,a.map((function(e){var t=e.type,a=n;return i.default.createElement(i.default.Fragment,{key:e.name},i.default.createElement(a,(0,o.default)({},e,{dzName:P,isNestedInDZComponent:w,targetUid:l,mainTypeName:h,editTarget:y,firstLoopComponentName:E,firstLoopComponentUid:k,isFromDynamicZone:C,secondLoopComponentName:O,secondLoopComponentUid:T})),"component"===t&&i.default.createElement(g.default,(0,o.default)({},e,{customRowComponent:n,targetUid:l,dzName:P,isNestedInDZComponent:C,mainTypeName:h,editTarget:y,firstLoopComponentName:E,firstLoopComponentUid:k})),"dynamiczone"===t&&i.default.createElement(_.default,(0,o.default)({},e,{customRowComponent:n,addComponent:r,targetUid:l,mainTypeName:h})))})))),x&&L&&i.default.createElement(d.ListButton,null,i.default.createElement(c.Button,Z)),!x&&i.default.createElement(d.ListButton,null,i.default.createElement(c.Button,Z))),N&&i.default.createElement("div",{className:"plus-icon",onClick:U},L&&i.default.createElement(f.Plus,{fill:C?"#007EFF":"#b4b6ba"}))):null}y.defaultProps={addComponentToDZ:function(){},className:null,customRowComponent:null,dzName:null,firstLoopComponentName:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentName:null,secondLoopComponentUid:null,targetUid:null},y.propTypes={addComponentToDZ:l.default.func,className:l.default.string,customRowComponent:l.default.func,dzName:l.default.string,editTarget:l.default.string.isRequired,firstLoopComponentName:l.default.string,firstLoopComponentUid:l.default.string,isFromDynamicZone:l.default.bool,isNestedInDZComponent:l.default.bool,isMain:l.default.bool,items:l.default.instanceOf(Array),mainTypeName:l.default.string.isRequired,secondLoopComponentName:l.default.string,secondLoopComponentUid:l.default.string,targetUid:l.default.string,isSub:l.default.bool};var C=y;t.default=C},2289:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1)),r=n(10),i=a(n(2)),l=a(n(2288)),u=a(n(116)),d=a(n(2286)),c=a(n(2290));function f(e){var t=e.customRowComponent,n=e.component,a=e.dzName,i=e.mainTypeName,f=e.isFromDynamicZone,s=e.isNestedInDZComponent,m=e.firstLoopComponentName,p=e.firstLoopComponentUid,_=(0,u.default)().modifiedData,g=(0,r.get)(_,["components",n],{schema:{attributes:{}}}).schema,b=g.name,h=g.attributes;return o.default.createElement("tr",{className:"component-row"},o.default.createElement(c.default,{colSpan:12,isChildOfDynamicZone:f},o.default.createElement(l.default,{customRowComponent:t,dzName:a,items:(0,d.default)(h),targetUid:n,mainTypeName:i,firstLoopComponentName:m||b,firstLoopComponentUid:p||n,editTarget:"components",isFromDynamicZone:f,isNestedInDZComponent:s,isSub:!0,secondLoopComponentName:m?b:null,secondLoopComponentUid:p?n:null})))}f.defaultProps={component:null,customRowComponent:null,dzName:null,firstLoopComponentName:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},f.propTypes={component:i.default.string,customRowComponent:i.default.func,dzName:i.default.string,firstLoopComponentName:i.default.string,firstLoopComponentUid:i.default.string,isFromDynamicZone:i.default.bool,isNestedInDZComponent:i.default.bool,mainTypeName:i.default.string.isRequired};var s=f;t.default=s},2290:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4));function r(){var e=(0,o.default)(["\n  &::before {\n    content: '&';\n    width: 5px;\n    height: calc(100% - 15px);\n    position: absolute;\n    top: -7px;\n    left: 45px;\n    color: transparent;\n\n    ","\n\n    border-radius: 3px;\n  }\n"]);return r=function(){return e},e}var i=a(n(3)).default.td(r(),(function(e){var t=e.isFromDynamicZone;return e.isChildOfDynamicZone?"\n          z-index: -1;\n          background-color: transparent !important;\n        ":t?"\n          background-color: #AED4FB !important;\n        ":"\n        background-color: #f3f4f4 !important;\n      "}));t.default=i},2357:function(e,t,n){"use strict";var a=n(7),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.ListRow=C,t.default=void 0;var r=o(n(12)),i=a(n(1)),l=o(n(2)),u=n(10),d=n(17),c=n(27),f=n(38),s=o(n(106)),m=o(n(116)),p=o(n(2287)),_=o(n(67)),g=o(n(2358)),b=o(n(129)),h=o(n(2359));function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){var t=e.configurable,n=e.name,a=e.dzName,o=e.nature,r=e.onClick,l=e.plugin,v=e.target,C=e.targetUid,w=e.type,x=e.mainTypeName,E=e.editTarget,k=e.firstLoopComponentName,O=e.firstLoopComponentUid,T=e.isFromDynamicZone,N=e.repeatable,P=e.secondLoopComponentName,j=e.secondLoopComponentUid,D=e.isNestedInDZComponent,L=(0,m.default)(),M=L.contentTypes,F=L.isInDevelopmentMode,U=L.modifiedData,Z=L.removeAttribute,I="*"===v,z=["integer","biginteger","float","decimal"].includes(w)?"number":w,R=w;["integer","biginteger","float","decimal"].includes(w)?R="number":["string"].includes(w)&&(R="text");var A,B=(0,u.get)(M,[v,"schema","name"],""),S=v?"relation":z,q=function(){if(!I&&!1!==t){var e=(0,u.get)(U,["components",O,"category"],null),i=(0,u.get)(U,["components",j,"category"],null),l=o?"relation":w,d=(0,p.default)(l),c={header_label_1:x,header_icon_name_1:d,header_icon_isCustom_1:!1,header_info_category_1:null,header_info_name_1:null},f={header_label_2:n,header_icon_name_2:null,header_icon_isCustom_2:!1,header_info_category_2:null,header_info_name_2:null},s={header_icon_name_3:"component",header_icon_isCustom_3:!1,header_info_category_3:null,header_info_name_3:null},m={header_icon_name_4:null,header_icon_isCustom_4:!1,header_info_category_4:null,header_info_name_4:null},_={header_icon_name_5:null,header_icon_isCustom_5:!1,header_info_category_5:null,header_info_name_5:null};k&&(f={header_label_2:k,header_icon_name_2:"component",header_icon_isCustom_2:!1,header_info_category_2:e,header_info_name_2:k},s=y(y({},s),{},{header_label_3:n,header_icon_name_3:null})),j&&(s=y(y({},s),{},{header_label_3:P,header_icon_name_3:"component",header_info_category_3:i,header_info_name_3:P}),m=y(y({},m),{},{header_label_4:n,header_icon_name_4:null})),(T||D)&&(f={header_label_2:a,header_icon_name_2:"dynamiczone",header_icon_isCustom_2:!1,header_info_name_2:null,header_info_category_2:null},s={header_icon_name_3:"component",header_label_3:k,header_info_name_3:e,header_info_category_3:e},D?(m={header_icon_name_4:"components",header_icon_isCustom_4:!1,header_info_category_4:i,header_info_name_4:P,header_label_4:P},_=y(y({},_),{},{header_label_5:n})):m={header_icon_name_4:null,header_icon_isCustom_4:!1,header_info_category_4:null,header_label_4:n}),r(E,j||O||C,n,l,c,f,s,m,_)}};return A=j&&O?2:O?1:0,i.default.createElement(h.default,{onClick:q,className:[v?"relation-row":"",t?"clickable":""],loopNumber:A},i.default.createElement("td",null,i.default.createElement(c.AttributeIcon,{key:S,type:S}),i.default.createElement(g.default,{fill:T?"#AED4FB":"#f3f4f4"})),i.default.createElement("td",{style:{fontWeight:600}},i.default.createElement("p",null,n)),i.default.createElement("td",null,v?i.default.createElement("div",null,i.default.createElement(d.FormattedMessage,{id:"".concat(s.default,".modelPage.attribute.").concat(I?"relation-polymorphic":"relationWith")}),"\xa0",i.default.createElement(d.FormattedMessage,{id:"".concat(s.default,".from")},(function(e){return i.default.createElement("span",{style:{fontStyle:"italic"}},i.default.createElement(b.default,{content:B}),"\xa0",l&&"(".concat(e,": ").concat(l,")"))}))):i.default.createElement(i.default.Fragment,null,i.default.createElement(d.FormattedMessage,{id:"".concat(s.default,".attribute.").concat(R)}),"\xa0",N&&i.default.createElement(d.FormattedMessage,{id:(0,_.default)("component.repeatable")}))),i.default.createElement("td",{className:"button-container"},F&&i.default.createElement(i.default.Fragment,null,t?i.default.createElement(i.default.Fragment,null,I?i.default.createElement(c.IconLinks,{links:[{icon:i.default.createElement(f.FontAwesomeIcon,{icon:"trash-alt"}),onClick:function(e){e.stopPropagation(),Z(E,n,j||O||"")}}]}):i.default.createElement(c.IconLinks,{links:[{icon:i.default.createElement(f.FontAwesomeIcon,{icon:"pencil-alt"}),onClick:function(){return q()}},{icon:i.default.createElement(f.FontAwesomeIcon,{icon:"trash-alt"}),onClick:function(e){e.stopPropagation(),Z(E,n,j||O||"")}}]})):i.default.createElement("button",{type:"button"},i.default.createElement(f.FontAwesomeIcon,{icon:"lock"})))))}C.defaultProps={configurable:!0,dzName:null,firstLoopComponentName:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,nature:null,onClick:function(){},plugin:null,repeatable:!1,secondLoopComponentName:null,secondLoopComponentUid:null,target:null,targetUid:null,type:null},C.propTypes={configurable:l.default.bool,dzName:l.default.string,editTarget:l.default.string.isRequired,firstLoopComponentName:l.default.string,firstLoopComponentUid:l.default.string,isFromDynamicZone:l.default.bool,isNestedInDZComponent:l.default.bool,mainTypeName:l.default.string.isRequired,name:l.default.string.isRequired,nature:l.default.string,onClick:l.default.func,plugin:l.default.string,repeatable:l.default.bool,secondLoopComponentName:l.default.string,secondLoopComponentUid:l.default.string,target:l.default.string,targetUid:l.default.string,type:l.default.string};var w=(0,i.memo)(C);t.default=w},2358:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(6)),r=a(n(1)),i=a(n(2)),l=function(e){return r.default.createElement("svg",(0,o.default)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 21.08 21"},e),r.default.createElement("g",null,r.default.createElement("path",{d:"M2.58 2.5q-1.2 16 16 16",fill:"none",stroke:e.fill,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"5"})))};l.defaultProps={fill:"#f3f4f4"},l.propTypes={fill:i.default.string};var u=l;t.default=u},2359:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4)),r=a(n(3)),i=n(8);function l(){var e=(0,o.default)(["\n  background-color: transparent;\n  p {\n    margin-bottom: 0;\n  }\n  img {\n    width: 35px;\n  }\n  button {\n    cursor: pointer;\n  }\n  td:first-of-type {\n    padding-left: 3rem;\n    position: relative;\n    img {\n      width: 35px;\n      height: 20px;\n      position: absolute;\n      top: calc(50% - 10px);\n      left: 3rem;\n    }\n    img + p {\n      width: 237px;\n      padding-left: calc(3rem + 35px);\n    }\n  }\n  td:nth-child(2) {\n    ","\n    p {\n      font-weight: 500;\n    }\n  }\n  td:last-child {\n    text-align: right;\n    &:not(:first-of-type) {\n      font-size: 10px;\n    }\n  }\n  &.relation-row {\n    background: linear-gradient(135deg, rgba(28, 93, 231, 0.05), rgba(239, 243, 253, 0));\n  }\n  &.clickable {\n    &:hover {\n      cursor: pointer;\n      background-color: ",";\n      & + tr {\n        &::before {\n          background-color: transparent;\n        }\n      }\n    }\n  }\n  .button-container {\n    svg {\n      color: #333740;\n      vertical-align: middle;\n    }\n  }\n"]);return l=function(){return e},e}var u=r.default.tr(l(),(function(e){var t=e.loopNumber;return"\n        width: calc(25rem - ".concat(5*t,"rem);\n      ")}),i.colors.grey);t.default=u},2360:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(1),r=a(n(2285)),i=function(){return(0,o.useContext)(r.default)};t.default=i},2361:function(e,t,n){"use strict";var a=n(7),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(6)),i=o(n(18)),l=a(n(1)),u=o(n(2)),d=n(17),c=n(59),f=n(76),s=o(n(116)),m=o(n(67)),p=o(n(2289)),_=o(n(2362)),g=o(n(2290)),b=o(n(2365));function h(e){var t=e.customRowComponent,n=e.components,a=e.addComponent,o=e.mainTypeName,u=e.name,h=e.targetUid,v=(0,s.default)().isInDevelopmentMode,y=(0,l.useState)("0"),C=(0,i.default)(y,2),w=C[0],x=C[1];return l.default.createElement("tr",{className:"dynamiczone-row"},l.default.createElement(g.default,{colSpan:12,isFromDynamicZone:!0},l.default.createElement("div",null,l.default.createElement("div",{className:"tabs-wrapper"},l.default.createElement(c.Nav,{tabs:!0},v&&l.default.createElement("li",null,l.default.createElement(b.default,{onClick:function(){a(u)}},l.default.createElement("div",null,l.default.createElement(f.Plus,{style:{height:15,width:15}})),l.default.createElement("p",null,l.default.createElement(d.FormattedMessage,{id:(0,m.default)("button.component.add")})))),n.map((function(e,t){return l.default.createElement("li",{key:e},l.default.createElement(_.default,{dzName:u,index:t,component:e,isActive:w==="".concat(t),isInDevelopmentMode:v,onClick:function(){var e;e="".concat(t),w!==e&&x(e)}}))})))),l.default.createElement(c.TabContent,{activeTab:w},n.map((function(e,n){var a={customRowComponent:t,component:e};return l.default.createElement(c.TabPane,{tabId:"".concat(n),key:e},l.default.createElement("table",null,l.default.createElement("tbody",null,l.default.createElement(p.default,(0,r.default)({},a,{isFromDynamicZone:!0,dzName:u,mainTypeName:o,targetUid:h,key:e})))))}))))))}h.defaultProps={addComponent:function(){},components:[],customRowComponent:null,name:null},h.propTypes={addComponent:u.default.func,components:u.default.instanceOf(Array),customRowComponent:u.default.func,mainTypeName:u.default.string.isRequired,name:u.default.string,targetUid:u.default.string.isRequired};var v=h;t.default=v},2362:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(1)),r=n(10),i=a(n(2)),l=n(38),u=a(n(116)),d=a(n(2363)),c=a(n(2364));function f(e){var t=e.component,n=e.dzName,a=e.index,i=e.isActive,f=e.isInDevelopmentMode,s=e.onClick,m=(0,u.default)(),p=m.modifiedData,_=m.removeComponentFromDynamicZone,g=(0,r.get)(p,["components",t],{schema:{icon:null}}).schema,b=g.icon,h=g.name;return o.default.createElement(d.default,{onClick:s,className:i?"active":""},o.default.createElement("div",null,o.default.createElement(l.FontAwesomeIcon,{icon:b})),o.default.createElement("p",null,h),o.default.createElement("div",{className:"close-btn",onClick:function(e){e.stopPropagation(),_(n,a)}},f&&o.default.createElement(c.default,{width:"7px",height:"7px"})))}f.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick:function(){}},f.propTypes={component:i.default.string,dzName:i.default.string.isRequired,index:i.default.number.isRequired,isActive:i.default.bool,isInDevelopmentMode:i.default.bool,onClick:i.default.func};var s=f;t.default=s},2363:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4));function r(){var e=(0,o.default)(["\n  width: 139px;\n  height: 90px;\n  position: relative;\n  padding: 0;\n  padding-top: 5px;\n  border-radius: 2px;\n  text-align: center;\n  border: solid 1px #fafafb;\n  background-color: #fafafb;\n\n  &:focus {\n    outline: 0;\n  }\n\n  div:first-of-type {\n    display: flex;\n    width: 35px;\n    height: 35px;\n    margin: auto;\n    border-radius: 18px;\n    background-color: #e9eaeb;\n    color: #919bae;\n    font-size: 12px;\n\n    svg {\n      margin: auto;\n    }\n  }\n\n  div:last-of-type {\n    position: absolute;\n    padding: 0 7px;\n    top: 0;\n    right: 0;\n    display: none;\n  }\n\n  p {\n    margin-top: 5px;\n    padding-left: 5px;\n    padding-right: 5px;\n    line-height: normal;\n    font-size: 13px;\n    font-weight: bold;\n    color: #919bae;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  &.active {\n    cursor: initial;\n  }\n\n  &:hover,\n  &.active {\n    border-color: #aed4fb;\n    background-color: #e6f0fb;\n\n    div:first-of-type {\n      background-color: #aed4fb;\n      color: #007eff;\n    }\n\n    div:last-of-type {\n      display: block;\n    }\n\n    p {\n      color: #007eff;\n    }\n  }\n"]);return r=function(){return e},e}var i=a(n(3)).default.button(r());t.default=i},2364:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4)),r=a(n(3)),i=n(76);function l(){var e=(0,o.default)(["\n  > g {\n    > path {\n      fill: #007eff;\n    }\n  }\n"]);return l=function(){return e},e}var u=(0,r.default)(i.Remove)(l());t.default=u},2365:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4));function r(){var e=(0,o.default)(["\n  width: 139px;\n  height: 90px;\n  padding-top: 7px;\n  &:focus {\n    outline: 0;\n  }\n\n  div {\n    width: 35px;\n    height: 35px;\n    border-radius: 18px;\n    background-color: #2c3138;\n    display: flex;\n    margin: auto;\n    svg {\n      margin: auto;\n      width: 11px;\n      height: 11px;\n    }\n  }\n  p {\n    margin-top: 5px;\n    font-size: 13px;\n    font-weight: bold;\n    color: #2c3138;\n    line-height: normal;\n  }\n"]);return r=function(){return e},e}var i=a(n(3)).default.button(r());t.default=i},2366:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4)),r=a(n(3)),i=n(21);function l(){var e=(0,o.default)(["\n  table-layout: fixed;\n\n  tbody {\n    td:first-of-type:not(:last-of-type) {\n      width: 73px;\n      padding-left: 30px;\n      > svg {\n        width: auto;\n        height: 16px;\n        position: absolute;\n        left: -4px;\n        top: 16px;\n        display: none;\n      }\n    }\n    td[colspan='12'] {\n      position: relative;\n      padding: 0 0 0 50px;\n      > div {\n        box-shadow: none;\n      }\n    }\n    tr.component-row {\n      &:not(:first-of-type) {\n        &::before {\n          background-color: transparent;\n        }\n      }\n      table tr td:first-of-type:not(:last-of-type) {\n        width: 79px;\n        padding-left: 36px;\n        svg {\n          display: block;\n        }\n      }\n    }\n    table + div button {\n      position: relative;\n      background-color: transparent;\n      text-transform: initial;\n      color: #9ea7b8;\n      text-align: left;\n      padding-left: 35px;\n      border-color: transparent;\n      svg {\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n    }\n    tr.dynamiczone-row {\n      &:not(:first-of-type) {\n        &::before {\n          background-color: transparent;\n        }\n      }\n      > td[colspan='12'] {\n        padding-left: 0;\n        padding-right: 0;\n      }\n\n      .tabs-wrapper {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 2;\n        padding-top: 18px;\n        padding-left: 86px;\n        padding-right: 30px;\n        .nav-tabs {\n          border-bottom: 0;\n        }\n        ul.nav {\n          width: 100%;\n          display: flex;\n          flex-wrap: nowrap;\n          overflow-x: auto;\n          overflow-y: hidden;\n          li {\n            margin-right: 9px;\n          }\n        }\n        & + .tab-content {\n          padding-top: 126px;\n          position: relative;\n          z-index: 1;\n        }\n      }\n    }\n  }\n  & + .plus-icon {\n    width: 27px;\n    height: 27px;\n    border-radius: 18px;\n    position: absolute;\n    bottom: 14px;\n    left: 34px;\n    background-color: ",";\n\n    color: transparent;\n    text-align: center;\n    line-height: 27px;\n    display: flex;\n    cursor: pointer;\n    svg {\n      margin: auto;\n      width: 11px;\n      height: 11px;\n    }\n  }\n"]);return l=function(){return e},e}var u=(0,r.default)(i.List)(l(),(function(e){return e.isFromDynamicZone?"#AED4FB":"#f3f4f4"}));u.defaultProps={isFromDynamicZone:!1};var d=u;t.default=d},2367:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(6)),r=a(n(1)),i=a(n(2)),l=n(2368),u=a(n(2369)),d=a(n(2370));function c(e){var t=e.actions,n=e.title;return r.default.createElement(d.default,null,r.default.createElement("div",{className:"list-header-actions"},t.map((function(e){var t=e.disabled,n=e.label,a=e.onClick;return r.default.createElement(l.ListHeaderButton,(0,o.default)({key:n,onClick:a,disabled:t||!1},e),n)}))),r.default.createElement("div",{className:"list-header-title"},n.map((function(e){return r.default.createElement(u.default,{key:e},e,"\xa0")}))))}c.defaultProps={actions:[],title:[]},c.propTypes={actions:i.default.arrayOf(i.default.shape({disabled:i.default.bool,onClick:i.default.func,title:i.default.string})),title:i.default.arrayOf(i.default.string)};var f=c;t.default=f},2368:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.ListHeaderButton=void 0;var o=a(n(4)),r=a(n(3)),i=n(27);function l(){var e=(0,o.default)(["\n  padding-left: 15px;\n  padding-right: 15px;\n"]);return l=function(){return e},e}var u=(0,r.default)(i.Button)(l());t.ListHeaderButton=u},2369:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4)),r=a(n(3)),i=n(8);function l(){var e=(0,o.default)(["\n  margin-bottom: 0;\n  color: ",";\n  font-family: 'Lato';\n  font-size: 1.8rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n"]);return l=function(){return e},e}var u=r.default.p(l(),i.colors.blueTxt);t.default=u},2370:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4));function r(){var e=(0,o.default)(["\n  position: relative;\n  padding: 2.1rem 6rem 1.7rem 3rem;\n  background-color: white;\n  .list-header-actions {\n    position: absolute;\n    top: 1.8rem;\n    right: 3rem;\n    button {\n      outline: 0;\n      margin-left: 10px;\n    }\n  }\n"]);return r=function(){return e},e}var i=a(n(3)).default.div(r());t.default=i},2371:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(6)),r=a(n(44)),i=a(n(47)),l=a(n(1)),u=a(n(2)),d=n(10),c=n(40),f=n(8),s=a(n(106)),m=a(n(67)),p=a(n(2372)),_=a(n(116)),g=a(n(398)),b=a(n(2375)),h=function(){strapi.notification.info("".concat(s.default,".notification.info.creating.notSaved"))};function v(e){var t=e.wait,n=(0,_.default)(),a=n.components,u=n.componentsGroupedByCategory,v=n.contentTypes,y=n.isInDevelopmentMode,C=n.sortedContentTypesList,w=(0,f.useGlobalContext)(),x=w.emitEvent,E=w.formatMessage,k=(0,c.useHistory)().push,O=(0,d.sortBy)(Object.keys(u).map((function(e){return{name:e,title:e,isEditable:y,onClickEdit:function(e,t){e.stopPropagation();var n=(0,g.default)({actionType:"edit",modalType:"editCategory",categoryName:t.name,header_label_1:E({id:(0,m.default)("modalForm.header.categories")}),header_icon_name_1:"component",header_icon_isCustom_1:!1,header_info_category_1:null,header_info_name_1:null,header_label_2:t.name,header_icon_name_2:null,header_icon_isCustom_2:!1,header_info_category_2:null,header_info_name_2:null,settingType:"base"});k({search:n})},links:(0,d.sortBy)(u[e].map((function(t){return{name:t.uid,to:"/plugins/".concat(s.default,"/component-categories/").concat(e,"/").concat(t.uid),title:t.schema.name}})),(function(e){return e.title}))}})),(function(e){return e.title})),T=function(){return!Object.keys(v).some((function(e){return!0===v[e].isTemporary}))&&!Object.keys(a).some((function(e){return!0===a[e].isTemporary}))},N=function(){var e=(0,i.default)(r.default.mark((function e(n){var a,o,i,l=arguments;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=l.length>1&&void 0!==l[1]?l[1]:"",o="singleType"===a?a:n,!T()){e.next=10;break}return x("willCreate".concat((0,d.upperFirst)((0,d.camelCase)(o)))),e.next=6,t();case 6:i=(0,g.default)({modalType:n,kind:a,actionType:"create",settingType:"base",forTarget:n,headerId:(0,m.default)("modalForm.".concat(o,".header-create")),header_icon_isCustom_1:"false",header_icon_name_1:o,header_label_1:"null"}),k({search:i}),e.next=11;break;case 10:h();case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=[{name:"models",title:{id:"".concat(s.default,".menu.section.models.name.")},searchable:!0,customLink:y?{Component:p.default,componentProps:{id:"".concat(s.default,".button.model.create"),onClick:function(){N("contentType","collectionType")}}}:null,links:C.filter((function(e){return"collectionType"===e.kind}))},{name:"singleTypes",title:{id:"".concat(s.default,".menu.section.single-types.name.")},searchable:!0,customLink:y?{Component:p.default,componentProps:{id:"".concat(s.default,".button.single-types.create"),onClick:function(){N("contentType","singleType")}}}:null,links:C.filter((function(e){return"singleType"===e.kind}))},{name:"components",title:{id:"".concat(s.default,".menu.section.components.name.")},searchable:!0,customLink:y?{Component:p.default,componentProps:{id:"".concat(s.default,".button.component.create"),onClick:function(){N("component")}}}:null,links:O}];return l.default.createElement(b.default,{className:"col-md-3"},P.map((function(e){return l.default.createElement(f.LeftMenuList,(0,o.default)({},e,{key:e.name}))})))}v.defaultProps={wait:function(){}},v.propTypes={wait:u.default.func};var y=v;t.default=y},2372:function(e,t,n){"use strict";var a=n(0),o=n(7);Object.defineProperty(t,"__esModule",{value:!0}),t.CustomLink=t.default=void 0;var r=o(n(1)),i=n(17),l=a(n(2)),u=n(76),d=a(n(2373)),c=a(n(2374)),f=function(e){var t=e.disabled,n=e.id,a=e.onClick;return r.default.createElement(c.default,{disabled:t},r.default.createElement("button",{onClick:a,disabled:t,type:"button"},r.default.createElement(d.default,null,r.default.createElement(u.Plus,{fill:"#007EFF",width:"11px",height:"11px"}),n&&r.default.createElement(i.FormattedMessage,{id:n}))))};t.CustomLink=f,f.defaultProps={disabled:!1,id:null},f.propTypes={disabled:l.default.bool,id:l.default.string,onClick:l.default.func.isRequired};var s=(0,r.memo)(f);t.default=s},2373:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4)),r=a(n(3)),i=n(8);function l(){var e=(0,o.default)(["\n  color: ",";\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n  text-align: left;\n  > svg {\n    margin-right: 7px;\n    vertical-align: initial;\n    -webkit-font-smoothing: subpixel-antialiased;\n  }\n"]);return l=function(){return e},e}var u=r.default.p(l(),i.colors.blue);t.default=u},2374:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4));function r(){var e=(0,o.default)(["\n  padding-left: 15px;\n  padding-top: 6px;\n  margin-left: -3px;\n  button {\n    cursor: ",";\n    padding: 0;\n    line-height: 16px;\n  }\n"]);return r=function(){return e},e}var i=a(n(3)).default.div(r(),(function(e){return e.disabled?"not-allowed":"pointer"}));t.default=i},2375:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4)),r=a(n(3)),i=n(8);function l(){var e=(0,o.default)(["\n  width: 100%;\n  min-height: calc(100vh - ",");\n  background-color: ",";\n  padding-top: 3.1rem;\n  padding-left: 2rem;\n  padding-right: 2rem;\n"]);return l=function(){return e},e}var u=r.default.div(l(),i.sizes.header.height,i.colors.leftMenu.mediumGrey);t.default=u},2376:function(e,t,n){"use strict";var a=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(4)),r=a(n(3)),i=n(8);function l(){var e=(0,o.default)(["\n  .button-secondary {\n    &:hover {\n      background-color: #ffffff !important;\n      box-shadow: 0 0 0 #fff;\n    }\n  }\n  .button-submit {\n    min-width: 140px;\n  }\n"]);return l=function(){return e},e}var u=(0,r.default)(i.ViewContainer)(l());t.default=u},773:function(e,t,n){"use strict";var a=n(7),o=n(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(6)),i=o(n(44)),l=o(n(12)),u=o(n(47)),d=o(n(18)),c=a(n(1)),f=n(40),s=o(n(2)),m=n(10),p=n(8),_=n(66),g=o(n(2285)),b=o(n(2286)),h=o(n(2287)),v=o(n(67)),y=o(n(398)),C=o(n(2357)),w=o(n(2288)),x=o(n(116)),E=o(n(106)),k=o(n(2367)),O=o(n(2371)),T=o(n(2376));function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=function(){var e=(0,x.default)(),t=e.initialData,n=e.modifiedData,a=e.isInDevelopmentMode,o=e.isInContentTypeView,l=e.submitData,N=e.toggleModalCancel,j=(0,p.useGlobalContext)(),D=j.emitEvent,L=j.formatMessage,M=(0,f.useHistory)(),F=M.push,U=M.goBack,Z=(0,f.useLocation)().search,I=(0,c.useState)(!0),z=(0,d.default)(I,2),R=z[0],A=z[1];(0,c.useEffect)((function(){""===Z&&A(!0)}),[Z]),(0,c.useEffect)((function(){""!==Z&&A(!1)}),[]);var B=o?"contentType":"component",S=[B,"schema","attributes"],q=(0,m.get)(n,[B,"uid"]),H=(0,m.get)(n,[B,"isTemporary"],!1),G=(0,m.get)(n,[B,"schema","kind"],null),W=(0,m.get)(n,S,{}),J=Object.keys(W).length,V=(0,m.get)(t,[B,"schema","name"],""),K=(0,m.has)(t,[B,"plugin"]),Q=!(0,m.isEqual)(n,t),X=o?"contentType":"component",Y=function(){var e=(0,u.default)(i.default.mark((function e(t,n,a,o,r,l){var u;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:u=P(P(P(P({modalType:"chooseAttribute",forTarget:t,targetUid:n},a),o),r),l),F({search:(0,y.default)(u)});case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,o,r,i){return e.apply(this,arguments)}}(),$=function(){var e=(0,u.default)(i.default.mark((function e(t){var n,a;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={header_label_2:t},a=P(P({modalType:"addComponentToDynamicZone",forTarget:"contentType",targetUid:q,dynamicZoneTarget:t,settingType:"base",step:"1",actionType:"edit"},{header_label_1:V,header_icon_name_1:"dynamiczone",header_icon_isCustom_1:!1}),n),e.next=5,te();case 5:F({search:(0,y.default)(a,!0)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=(0,u.default)(i.default.mark((function e(t,n,a,o,r,l,u,d,c){var f,s;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f=(0,h.default)(o),e.next=3,te();case 3:return s=P(P(P(P(P({modalType:"attribute",actionType:"edit",settingType:"base",forTarget:t,targetUid:n,attributeName:a,attributeType:f,step:"component"===o?"2":null},r),l),u),d),c),e.next=6,te();case 6:F({search:(0,y.default)(s,!0)});case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,o,r,i,l,u,d){return e.apply(this,arguments)}}(),te=function(){var e=(0,u.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!1),e.abrupt("return",new Promise((function(e){return setTimeout(e,100)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=(0,m.get)(n,[B,"schema","name"],""),ae=(0,m.get)(n,[B,"schema","kind"],""),oe={actions:a?[{color:"cancel",onClick:function(){N()},label:L({id:"".concat(E.default,".form.button.cancel")}),type:"button",disabled:(0,m.isEqual)(n,t)},{className:"button-submit",color:"success",onClick:function(){return l()},label:L({id:"".concat(E.default,".form.button.save")}),type:"submit",disabled:(0,m.isEqual)(n,t)}]:[],title:{label:ne,cta:a&&!K?{icon:"pencil-alt",onClick:function(){var e=(0,u.default)(i.default.mark((function e(){var t;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te();case 2:"collectionType"===(t=ae||B)&&D("willEditNameOfContentType"),"singleType"===t&&D("willEditNameOfSingleType"),F({search:(0,y.default)({modalType:B,actionType:"edit",settingType:"base",forTarget:B,targetUid:q,header_label_1:ne,header_icon_isCustom_1:!1,header_icon_name_1:"singleType"===t?t:B,headerId:(0,v.default)("modalForm.header-edit")})});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}:null},content:(0,m.get)(n,[B,"schema","description"],null)||L({id:"".concat(E.default,".modelPage.contentHeader.emptyDescription.description")})},re=[L({id:"".concat(E.default,".table.attributes.title.").concat(J>1?"plural":"singular")},{number:J})],ie={icon:!0,color:"primary",label:L({id:"".concat(E.default,".button.attributes.add.another")}),onClick:function(){Y(X,q,{header_label_1:V,header_icon_name_1:"contentType"===X?G:X,header_icon_isCustom_1:!1})}},le={icon:c.default.createElement(p.LayoutIcon,{className:"colored",fill:H?"#B4B6BA":"#007eff"}),color:"secondary",label:L({id:"".concat(E.default,".form.button.configure-view")}),onClick:function(){var e=o?"/plugins/content-manager/".concat(G,"/").concat(q,"/ctm-configurations/edit-settings/content-types"):"/plugins/content-manager/ctm-configurations/edit-settings/components/".concat(q,"/");H||F(e)},style:{marginTop:"2px"},disabled:H},ue=a?[P({},le),P({},ie)]:[le],de=function(e){var t=e.name;return c.default.createElement(C.default,(0,r.default)({},e,{attributeName:t,name:t,onClick:ee}))};return de.defaultProps={name:null},de.propTypes={name:s.default.string},c.default.createElement(g.default.Provider,{value:{openModalAddField:Y}},c.default.createElement(T.default,null,c.default.createElement(p.BackHeader,{onClick:U}),c.default.createElement(f.Prompt,{message:L({id:(0,v.default)("prompt.unsaved")}),when:Q&&R}),c.default.createElement("div",{className:"container-fluid"},c.default.createElement("div",{className:"row"},c.default.createElement(O.default,{wait:te}),c.default.createElement("div",{className:"col-md-9 content",style:{paddingLeft:"30px",paddingRight:"30px"}},c.default.createElement(_.Header,oe),c.default.createElement(p.ListWrapper,{style:{marginBottom:80}},c.default.createElement(k.default,{actions:ue,title:re}),c.default.createElement(w.default,{items:(0,b.default)(W),customRowComponent:function(e){return c.default.createElement(de,e)},addComponentToDZ:$,targetUid:q,dataType:X,dataTypeName:V,mainTypeName:V,editTarget:X,isMain:!0})))))))};t.default=j}}]);