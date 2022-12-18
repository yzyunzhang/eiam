/*
 * eiam-portal - Employee Identity and Access Management Program
 * Copyright © 2020-2022 TopIAM (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";(self.webpackChunktopiam_portal=self.webpackChunktopiam_portal||[]).push([[396],{80720:function(_e,se,o){var Re;function D(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?D=function(i){return typeof i}:D=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},D(a)}Re={value:!0},se.Z=We;var J=te(o(67294));function $(){if(typeof WeakMap!="function")return null;var a=new WeakMap;return $=function(){return a},a}function te(a){if(a&&a.__esModule)return a;if(a===null||D(a)!=="object"&&typeof a!="function")return{default:a};var f=$();if(f&&f.has(a))return f.get(a);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in a)if(Object.prototype.hasOwnProperty.call(a,w)){var b=s?Object.getOwnPropertyDescriptor(a,w):null;b&&(b.get||b.set)?Object.defineProperty(i,w,b):i[w]=a[w]}return i.default=a,f&&f.set(a,i),i}function He(a,f){return Ve(a)||l(a,f)||v(a,f)||t()}function t(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function v(a,f){if(!!a){if(typeof a=="string")return de(a,f);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return de(a,f)}}function de(a,f){(f==null||f>a.length)&&(f=a.length);for(var i=0,s=new Array(f);i<f;i++)s[i]=a[i];return s}function l(a,f){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(a)))){var i=[],s=!0,w=!1,b=void 0;try{for(var F=a[Symbol.iterator](),Q;!(s=(Q=F.next()).done)&&(i.push(Q.value),!(f&&i.length===f));s=!0);}catch(ue){w=!0,b=ue}finally{try{!s&&F.return!=null&&F.return()}finally{if(w)throw b}}return i}}function Ve(a){if(Array.isArray(a))return a}function We(a,f){var i=f||{},s=i.defaultValue,w=i.value,b=i.onChange,F=i.postState,Q=J.useState(function(){return w!==void 0?w:s!==void 0?typeof s=="function"?s():s:typeof a=="function"?a():a}),ue=He(Q,2),ke=ue[0],Be=ue[1],ae=w!==void 0?w:ke;F&&(ae=F(ae));function Ue(be){Be(be),ae!==be&&b&&b(be,ae)}var Ke=J.useRef(!0);return J.useEffect(function(){if(Ke.current){Ke.current=!1;return}w===void 0&&Be(w)},[w]),[ae,Ue]}},46682:function(_e,se){var o;o={value:!0},se.Z=Re;function Re(D,J){for(var $=D,te=0;te<J.length;te+=1){if($==null)return;$=$[J[te]]}return $}},13992:function(_e,se,o){o.r(se),o.d(se,{default:function(){return Nn}});var Re=o(97983),D=o.n(Re),J=o(40794),$=o.n(J),te=o(12741),He=o.n(te),t=o(4942),v=o(1413),de=o(91),l=o(85893),Ve=o(65767),We=Ve.Z,a=o(46986),f=o(94184),i=o.n(f),s=o(67294),w=o(74902),b=o(97685),F=o(73964),Q=o(51158),ue=o(84164),ke=o(58448),Be=o(93125),ae=o(46682),Ue=["title","subTitle","avatar","description","extra","content","actions","type"],Ke=Ue.reduce(function(e,n){return e.set(n,!0),e},new Map),be=o(18073),on=o(84517),en=o(98293),nn=o(21687),ln=o(80720),cn=["title","subTitle","content","itemTitleRender","prefixCls","actions","item","recordKey","avatar","cardProps","description","isEditable","checkbox","index","selected","loading","expand","onExpand","expandable","rowSupportExpand","showActions","showExtra","type","style","className","record","onRow","onItem","itemHeaderRender","cardActionProps","extra"];function sn(e){var n,u=e.prefixCls,x=e.expandIcon,g=x===void 0?(0,l.jsx)(be.Z,{}):x,c=e.onExpand,r=e.expanded,I=e.record,C=g,h="".concat(u,"-row-expand-icon"),d=function(y){c(!r),y.stopPropagation()};return typeof g=="function"&&(C=g({expanded:r,onExpand:c,record:I})),(0,l.jsx)("span",{className:i()(h,(n={},(0,t.Z)(n,"".concat(u,"-row-expanded"),r),(0,t.Z)(n,"".concat(u,"-row-collapsed"),!r),n)),onClick:d,children:C})}function dn(e){var n,u,x,g,c,r=e.prefixCls,I=(0,s.useContext)(a.ZP.ConfigContext),C=I.getPrefixCls,h=(0,s.useContext)(F.L_),d=h.hashId,X=C("pro-list",r),y="".concat(X,"-row"),W=e.title,N=e.subTitle,q=e.content,T=e.itemTitleRender,me=e.prefixCls,A=e.actions,Le=e.item,Oe=e.recordKey,M=e.avatar,z=e.cardProps,j=e.description,Ie=e.isEditable,re=e.checkbox,E=e.index,Pe=e.selected,_=e.loading,B=e.expand,fe=e.onExpand,oe=e.expandable,ve=e.rowSupportExpand,G=e.showActions,ie=e.showExtra,le=e.type,k=e.style,ce=e.className,K=ce===void 0?y:ce,m=e.record,P=e.onRow,Z=e.onItem,U=e.itemHeaderRender,H=e.cardActionProps,pe=e.extra,xe=(0,de.Z)(e,cn),ee=oe||{},Ee=ee.expandedRowRender,ne=ee.expandIcon,Je=ee.expandRowByClick,ge=ee.indentSize,L=ge===void 0?8:ge,p=ee.expandedRowClassName,S=(0,ln.Z)(!!B,{value:B,onChange:fe}),O=(0,b.Z)(S,2),Y=O[0],he=O[1],R=i()((n={},(0,t.Z)(n,"".concat(y,"-selected"),!z&&Pe),(0,t.Z)(n,"".concat(y,"-show-action-hover"),G==="hover"),(0,t.Z)(n,"".concat(y,"-type-").concat(le),!!le),(0,t.Z)(n,"".concat(y,"-editable"),Ie),(0,t.Z)(n,"".concat(y,"-show-extra-hover"),ie==="hover"),n),d,y),ye=i()(d,(0,t.Z)({},"".concat(K,"-extra"),ie==="hover")),Ne=Y||Object.values(oe||{}).length===0,De=Ee&&Ee(m,E,L,Y),Ce=(0,s.useMemo)(function(){if(!(!A||H==="actions"))return[(0,l.jsx)("div",{onClick:function(Se){return Se.stopPropagation()},children:A},"action")]},[A,H]),Qe=(0,s.useMemo)(function(){if(!(!A||!H||H==="extra"))return[(0,l.jsx)("div",{onClick:function(Se){return Se.stopPropagation()},children:A},"action")]},[A,H]),Ze=W||N?(0,l.jsxs)("div",{className:"".concat(R,"-header-title ").concat(d),children:[W&&(0,l.jsx)("div",{className:"".concat(R,"-title ").concat(d),children:W}),N&&(0,l.jsx)("div",{className:"".concat(R,"-subTitle ").concat(d),children:N})]}):null,V=(u=T&&(T==null?void 0:T(m,E,Ze)))!==null&&u!==void 0?u:Ze,we=V||M||N||j?(0,l.jsx)(Q.ZP.Item.Meta,{avatar:M,title:V,description:j&&Ne&&(0,l.jsx)("div",{className:"".concat(R,"-description ").concat(d),children:j})}):null,$e=i()(d,(x={},(0,t.Z)(x,"".concat(R,"-item-has-checkbox"),re),(0,t.Z)(x,"".concat(R,"-item-has-avatar"),M),(0,t.Z)(x,R,R),x)),Te=(0,s.useMemo)(function(){return M||W?(0,l.jsxs)(l.Fragment,{children:[M&&(0,l.jsx)(en.C,{size:22,src:M,className:"".concat(C("list-item-meta-avatar")," ").concat(d)}),(0,l.jsx)("span",{className:"".concat(C("list-item-meta-title")," ").concat(d),children:W})]}):null},[M,C,d,W]),Ae=z?(0,l.jsx)(on.ZP,(0,v.Z)((0,v.Z)((0,v.Z)({bordered:!0,loading:_,hoverable:!0},z),{},{title:Te,subTitle:N,extra:Ce,actions:Qe,bodyStyle:(0,v.Z)({padding:24},z.bodyStyle)},Z==null?void 0:Z(m,E)),{},{children:(0,l.jsx)(nn.Z,{avatar:!0,title:!1,loading:_,active:!0,children:(0,l.jsxs)("div",{className:"".concat(R,"-header ").concat(d),children:[T&&(T==null?void 0:T(m,E,Ze)),q]})})})):(0,l.jsx)(Q.ZP.Item,(0,v.Z)((0,v.Z)((0,v.Z)((0,v.Z)({className:i()($e,(0,t.Z)({},K,K!==y))},xe),{},{actions:Ce,extra:!!pe&&(0,l.jsx)("div",{className:ye,children:pe})},P==null?void 0:P(m,E)),Z==null?void 0:Z(m,E)),{},{onClick:function(Se){var Me,Xe,ze,qe;P==null||(Me=P(m,E))===null||Me===void 0||(Xe=Me.onClick)===null||Xe===void 0||Xe.call(Me,Se),Z==null||(ze=Z(m,E))===null||ze===void 0||(qe=ze.onClick)===null||qe===void 0||qe.call(ze,Se),Je&&he(!Y)},children:(0,l.jsxs)(nn.Z,{avatar:!0,title:!1,loading:_,active:!0,children:[(0,l.jsxs)("div",{className:"".concat(R,"-header ").concat(d),children:[(0,l.jsxs)("div",{className:"".concat(R,"-header-option ").concat(d),children:[!!re&&(0,l.jsx)("div",{className:"".concat(R,"-checkbox ").concat(d),children:re}),Object.values(oe||{}).length>0&&ve&&sn({prefixCls:X,expandIcon:ne,onExpand:he,expanded:Y,record:m})]}),(g=U&&(U==null?void 0:U(m,E,we)))!==null&&g!==void 0?g:we]}),Ne&&(q||De)&&(0,l.jsxs)("div",{className:"".concat(R,"-content ").concat(d),children:[q,Ee&&ve&&(0,l.jsx)("div",{className:p&&p(m,E,L),children:De})]})]})}));return z?(0,l.jsx)("div",{className:i()(d,(c={},(0,t.Z)(c,"".concat(R,"-card"),z),(0,t.Z)(c,K,K!==y),c)),style:k,children:Ae}):Ae}var un=dn,mn=["dataSource","columns","rowKey","showActions","showExtra","prefixCls","actionRef","itemTitleRender","renderItem","itemCardProps","itemHeaderRender","expandable","rowSelection","pagination","onRow","onItem","rowClassName"];function fn(e){var n=e.dataSource,u=e.columns,x=e.rowKey,g=e.showActions,c=e.showExtra,r=e.prefixCls,I=e.actionRef,C=e.itemTitleRender,h=e.renderItem,d=e.itemCardProps,X=e.itemHeaderRender,y=e.expandable,W=e.rowSelection,N=e.pagination,q=e.onRow,T=e.onItem,me=e.rowClassName,A=(0,de.Z)(e,mn),Le=(0,s.useContext)(F.L_),Oe=Le.hashId,M=(0,s.useContext)(a.ZP.ConfigContext),z=M.getPrefixCls,j=s.useMemo(function(){return typeof x=="function"?x:function(L,p){return L[x]||p}},[x]),Ie=(0,ue.Z)(n,"children",j),re=(0,b.Z)(Ie,1),E=re[0],Pe=(0,ke.ZP)(n.length,(0,v.Z)({responsive:!0},N),function(){}),_=(0,b.Z)(Pe,1),B=_[0],fe=s.useMemo(function(){if(N===!1||!B.pageSize||n.length<B.total)return n;var L=B.current,p=L===void 0?1:L,S=B.pageSize,O=S===void 0?10:S,Y=n.slice((p-1)*O,p*O);return Y},[n,B,N]),oe=z("pro-list",r),ve=(0,Be.ZP)(W,{getRowKey:j,getRecordByKey:E,prefixCls:oe,data:n,pageData:fe,expandType:"row",childrenColumnName:"children",locale:{}}),G=(0,b.Z)(ve,2),ie=G[0],le=G[1],k=y||{},ce=k.expandedRowKeys,K=k.defaultExpandedRowKeys,m=k.defaultExpandAllRows,P=m===void 0?!0:m,Z=k.onExpand,U=k.onExpandedRowsChange,H=k.rowExpandable,pe=s.useState(function(){return K||(P!==!1?n.map(j):[])}),xe=(0,b.Z)(pe,2),ee=xe[0],Ee=xe[1],ne=s.useMemo(function(){return new Set(ce||ee||[])},[ce,ee]),Je=s.useCallback(function(L){var p=j(L,n.indexOf(L)),S,O=ne.has(p);O?(ne.delete(p),S=(0,w.Z)(ne)):S=[].concat((0,w.Z)(ne),[p]),Ee(S),Z&&Z(!O,L),U&&U(S)},[j,ne,n,Z,U]),ge=ie([])[0];return(0,l.jsx)(Q.ZP,(0,v.Z)((0,v.Z)({},A),{},{className:i()(z("pro-list-container",r),Oe,A.className),dataSource:fe,pagination:N&&B,renderItem:function(p,S){var O,Y,he,R={className:typeof me=="function"?me(p,S):me};u==null||u.forEach(function(V){var we=V.listKey,$e=V.cardActionProps;if(!!Ke.has(we)){var Te=V.dataIndex||we||V.key,Ae=Array.isArray(Te)?(0,ae.Z)(p,Te):p[Te];$e==="actions"&&we==="actions"&&(R.cardActionProps=$e);var je=V.render?V.render(Ae,p,S):Ae;je!=="-"&&(R[V.listKey]=je)}});var ye;ge&&ge.render&&(ye=ge.render(p,p,S)||void 0);var Ne=((O=I.current)===null||O===void 0?void 0:O.isEditable((0,v.Z)((0,v.Z)({},p),{},{index:S})))||{},De=Ne.isEditable,Ce=Ne.recordKey,Qe=le.has(Ce||S),Ze=(0,l.jsx)(un,(0,v.Z)((0,v.Z)({cardProps:A.grid?(0,v.Z)((0,v.Z)((0,v.Z)({},d),A.grid),{},{checked:Qe,onChecked:s.isValidElement(ye)?(Y=ye)===null||Y===void 0||(he=Y.props)===null||he===void 0?void 0:he.onChange:void 0}):void 0},R),{},{recordKey:Ce,isEditable:De||!1,expandable:y,expand:ne.has(j(p,S)),onExpand:function(){Je(p)},index:S,record:p,item:p,showActions:g,showExtra:c,itemTitleRender:C,itemHeaderRender:X,rowSupportExpand:!H||H&&H(p),selected:le.has(j(p,S)),checkbox:ye,onRow:q,onItem:T}),Ce);return h?h(p,S,Ze):Ze}}))}var vn=fn,pn=o(14855),xn=function(n){var u,x,g,c,r,I;return(0,t.Z)({},n.componentCls,(I={backgroundColor:"transparent"},(0,t.Z)(I,"".concat(n.proComponentsCls,"-table-alert"),{marginBlockEnd:"16px"}),(0,t.Z)(I,"&-row",(r={borderBlockEnd:"1px solid ".concat(n.colorSplit)},(0,t.Z)(r,"".concat(n.antCls,"-list-item-meta-title"),{borderBlockEnd:"none",margin:0}),(0,t.Z)(r,"&:last-child",(0,t.Z)({borderBlockEnd:"none"},"".concat(n.antCls,"-list-item"),{borderBlockEnd:"none"})),(0,t.Z)(r,"&:hover",(u={backgroundColor:"rgba(0, 0, 0, 0.02)",transition:"background-color 0.3s"},(0,t.Z)(u,"".concat(n.antCls,"-list-item-action"),{display:"block"}),(0,t.Z)(u,"".concat(n.antCls,"-list-item-extra"),{display:"flex"}),(0,t.Z)(u,"".concat(n.componentCls,"-row-extra"),{display:"block"}),(0,t.Z)(u,"".concat(n.componentCls,"-row-subheader-actions"),{display:"block"}),u)),(0,t.Z)(r,"&-card",(0,t.Z)({marginBlock:8,marginInline:0,paddingBlock:0,paddingInline:8,"&:hover":{backgroundColor:"transparent"}},"".concat(n.antCls,"-list-item-meta-title"),{flexShrink:9,marginBlock:0,marginInline:0,lineHeight:"22px"})),(0,t.Z)(r,"&".concat(n.componentCls,"-row-editable"),(0,t.Z)({},"".concat(n.componentCls,"-list-item"),{"&-meta":{"&-avatar,&-description,&-title":{paddingBlock:6,paddingInline:0}},"&-action":{display:"block"}})),(0,t.Z)(r,"&".concat(n.componentCls,"-row-selected"),{backgroundColor:n.colorPrimaryBgHover,"&:hover":{backgroundColor:n.colorPrimaryBgHover}}),(0,t.Z)(r,"&".concat(n.componentCls,"-row-type-new"),{animationName:"techUiListActive",animationDuration:"3s"}),(0,t.Z)(r,"&".concat(n.componentCls,"-row-type-inline"),(0,t.Z)({},"".concat(n.componentCls,"-row-title"),{fontWeight:"normal"})),(0,t.Z)(r,"&".concat(n.componentCls,"-row-type-top"),{backgroundImage:"url('https://gw.alipayobjects.com/zos/antfincdn/DehQfMbOJb/icon.svg')",backgroundRepeat:"no-repeat",backgroundPosition:"left top",backgroundSize:"12px 12px"}),(0,t.Z)(r,"&-show-action-hover",(x={},(0,t.Z)(x,"".concat(n.antCls,`-list-item-action,
            `).concat(n.proComponentsCls,`-card-extra,
            `).concat(n.proComponentsCls,"-card-actions"),{display:"none"}),(0,t.Z)(x,"&:hover",(0,t.Z)({},"".concat(n.proComponentsCls,"-card-extra,").concat(n.proComponentsCls,"-card-actions"),{display:"flex"})),x)),(0,t.Z)(r,"&-show-extra-hover",(0,t.Z)({},"".concat(n.antCls,"-list-item-extra"),{display:"none"})),(0,t.Z)(r,"&-extra",{display:"none"}),(0,t.Z)(r,"&-subheader",{display:"flex",alignItems:"center",justifyContent:"space-between",height:"44px",paddingInline:24,paddingBlock:0,color:n.colorTextSecondary,lineHeight:"44px",background:"rgba(0, 0, 0, 0.02)","&-actions":{display:"none"},"&-actions *":{marginInlineEnd:8,"&:last-child":{marginInlineEnd:0}}}),(0,t.Z)(r,"&-expand-icon",{marginInlineEnd:8,color:n.colorTextSecondary,"> .anticon > svg":{transition:"0.3s"}}),(0,t.Z)(r,"&-expanded",{" > .anticon > svg":{transform:"rotate(90deg)"}}),(0,t.Z)(r,"&-title",{marginInlineEnd:"16px",wordBreak:"break-all",cursor:"pointer","&:hover":{color:n.colorPrimary}}),(0,t.Z)(r,"&-content",{position:"relative",display:"flex",flex:"1",flexDirection:"column",marginBlock:0,marginInline:32}),(0,t.Z)(r,"&-subTitle",{color:"rgba(0, 0, 0, 0.45)"}),(0,t.Z)(r,"&-description",{marginBlockStart:"4px",wordBreak:"break-all"}),(0,t.Z)(r,"&-avatar",{display:"flex"}),(0,t.Z)(r,"&-header",{display:"flex",flex:"1",justifyContent:"flex-start",h4:{margin:0,padding:0}}),(0,t.Z)(r,"&-header-title",{display:"flex",alignItems:"center",justifyContent:"flex-start"}),(0,t.Z)(r,"&-header-option",{display:"flex"}),(0,t.Z)(r,"&-checkbox",{width:"16px",marginInlineEnd:"12px"}),(0,t.Z)(r,"&-no-split",(g={},(0,t.Z)(g,"".concat(n.componentCls,"-row"),{borderBlockEnd:"none"}),(0,t.Z)(g,"".concat(n.antCls,"-list ").concat(n.antCls,"-list-item"),{borderBlockEnd:"none"}),g)),(0,t.Z)(r,"&-bordered",(0,t.Z)({},"".concat(n.componentCls,"-toolbar"),{borderBlockEnd:"1px solid ".concat(n.colorSplit)})),(0,t.Z)(r,"".concat(n.antCls,"-list-vertical"),(c={},(0,t.Z)(c,"".concat(n.componentCls,"-row"),{borderBlockEnd:"12px 18px 12px 24px"}),(0,t.Z)(c,"&-header-title",{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}),(0,t.Z)(c,"&-content",{marginBlock:0,marginInline:0}),(0,t.Z)(c,"&-subTitle",{marginBlockStart:8}),(0,t.Z)(c,"".concat(n.antCls,"-list-item-extra"),(0,t.Z)({display:"flex",alignItems:"center",marginInlineStart:"32px"},"".concat(n.componentCls,"-row-description"),{marginBlockStart:16})),(0,t.Z)(c,"".concat(n.antCls,"-list-bordered ").concat(n.antCls,"-list-item"),{paddingInline:0}),(0,t.Z)(c,"".concat(n.componentCls,"-row-show-extra-hover"),(0,t.Z)({},"".concat(n.antCls,"-list-item-extra "),{display:"none"})),c)),(0,t.Z)(r,"".concat(n.antCls,"-list-pagination"),{marginBlockEnd:n.marginLG}),(0,t.Z)(r,"".concat(n.antCls,"-list-list"),{"&-item":{cursor:"pointer",paddingBlock:12,paddingInline:12}}),(0,t.Z)(r,"".concat(n.antCls,"-list-vertical .").concat(n.proComponentsCls,"-list-row ").concat(n.antCls,"-list"),(0,t.Z)({"&-header":{paddingBlock:0,paddingInline:0,borderBlockEnd:"none"}},"".concat(n.antCls,"-list-item"),{width:"100%",paddingBlock:12,paddingInlineStart:24,paddingInlineEnd:18,"&-meta-avatar":{display:"flex",alignItems:"center",marginInlineEnd:8},"&-action-split":{display:"none"},"&-meta-title":{marginBlock:0,marginInline:0}})),(0,t.Z)(r,"@keyframes techUiListActive",{"0%":{backgroundColor:"unset"},"30%":{background:"#fefbe6"},"100%":{backgroundColor:"unset"}}),r)),I))};function gn(e){return(0,pn.Xj)("ProList",function(n){var u=(0,v.Z)((0,v.Z)({},n),{},{componentCls:".".concat(e)});return[xn(u)]})}var hn=["metas","split","footer","rowKey","tooltip","className","options","search","expandable","showActions","showExtra","rowSelection","pagination","itemLayout","renderItem","grid","itemCardProps","onRow","onItem","rowClassName","locale","itemHeaderRender","itemTitleRender"];function tn(e){var n=e.metas,u=e.split,x=e.footer,g=e.rowKey,c=e.tooltip,r=e.className,I=e.options,C=I===void 0?!1:I,h=e.search,d=h===void 0?!1:h,X=e.expandable,y=e.showActions,W=e.showExtra,N=e.rowSelection,q=N===void 0?!1:N,T=e.pagination,me=T===void 0?!1:T,A=e.itemLayout,Le=e.renderItem,Oe=e.grid,M=e.itemCardProps,z=e.onRow,j=e.onItem,Ie=e.rowClassName,re=e.locale,E=e.itemHeaderRender,Pe=e.itemTitleRender,_=(0,de.Z)(e,hn),B=(0,s.useRef)();(0,s.useImperativeHandle)(_.actionRef,function(){return B.current});var fe=(0,s.useContext)(a.ZP.ConfigContext),oe=fe.getPrefixCls,ve=(0,s.useMemo)(function(){var K=[];return Object.keys(n||{}).forEach(function(m){var P=n[m]||{},Z=P.valueType;Z||(m==="avatar"&&(Z="avatar"),m==="actions"&&(Z="option"),m==="description"&&(Z="textarea")),K.push((0,v.Z)((0,v.Z)({listKey:m,dataIndex:(P==null?void 0:P.dataIndex)||m},P),{},{valueType:Z}))}),K},[n]),G=oe("pro-list",e.prefixCls),ie=gn(G),le=ie.wrapSSR,k=ie.hashId,ce=i()(G,k,(0,t.Z)({},"".concat(G,"-no-split"),!u));return le((0,l.jsx)(We,(0,v.Z)((0,v.Z)({tooltip:c},_),{},{actionRef:B,pagination:me,type:"list",rowSelection:q,search:d,options:C,className:i()(G,r,ce),columns:ve,rowKey:g,tableViewRender:function(m){var P=m.columns,Z=m.size,U=m.pagination,H=m.rowSelection,pe=m.dataSource,xe=m.loading;return(0,l.jsx)(vn,{grid:Oe,itemCardProps:M,itemTitleRender:Pe,prefixCls:e.prefixCls,columns:P,renderItem:Le,actionRef:B,dataSource:pe||[],size:Z,footer:x,split:u,rowKey:g,expandable:X,rowSelection:q===!1?void 0:H,showActions:y,showExtra:W,pagination:U,itemLayout:A,loading:xe,itemHeaderRender:E,onRow:z,onItem:j,rowClassName:Ie,locale:re})}})))}function Tn(e){return _jsx(tn,_objectSpread({cardProps:!1,search:!1,toolBarRender:!1},e))}var An=null,yn=o(19847),Cn=o(17057),Zn=o(69677),wn=o(99138),an=o(4393),Sn=o(2453),Rn=o(11281),Ye=o.n(Rn),rn=o(40367),bn=o(98971);function In(e,n,u){return Fe.apply(this,arguments)}function Fe(){return Fe=$()(D()().mark(function e(n,u,x){var g,c,r;return D()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return C.next=2,(0,bn.request)("/api/app/list",{params:Ye()(Ye()(Ye()({},n),(0,rn.YE)(u)),(0,rn.oH)(x))});case 2:return g=C.sent,c=g.result,r=g.success,C.abrupt("return",{data:c!=null&&c.list?c==null?void 0:c.list:[],success:r,total:c!=null&&c.pagination?c==null?void 0:c.pagination.total:0});case 6:case"end":return C.stop()}},e)})),Fe.apply(this,arguments)}var Ge;(function(e){e.ONLY_APP_INIT_SSO="only_app_init_sso",e.PORTAL_OR_APP_INIT_SSO="portal_or_app_init_sso"})(Ge||(Ge={}));var Pn=Cn.Z.Paragraph,En=function(){var n=(0,s.useRef)(),u=(0,s.useState)(),x=He()(u,2),g=x[0],c=x[1],r=(0,l.jsx)("div",{style:{textAlign:"center"},children:(0,l.jsx)(Zn.Z.Search,{placeholder:"\u8BF7\u8F93\u5165",enterButton:"\u641C\u7D22",size:"large",style:{maxWidth:522,width:"100%"},onSearch:function(h){var d;c({name:h}),(d=n.current)===null||d===void 0||d.reload()}})}),I=function(h){var d=window.document.createElement("div");d.innerHTML="<form action='"+h+"' method='POST' name='auto_submit_form' style='display:none'>",document.body.appendChild(d),document.forms.auto_submit_form.setAttribute("target","_blank"),document.forms.auto_submit_form.submit(),document.body.removeChild(d)};return(0,l.jsxs)(yn._z,{content:r,children:[(0,l.jsx)(wn.Z,{message:"\u8BF7\u70B9\u51FB\u4E0B\u65B9\u7684\u5E94\u7528\u8FDB\u884C\u5355\u70B9\u767B\u5F55\u3002\u82E5\u5E0C\u671B\u4FEE\u6539\u5E94\u7528\u5185\u5BB9\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002",showIcon:!0}),(0,l.jsx)("br",{}),(0,l.jsx)(tn,{rowKey:"id",ghost:!0,grid:{xs:1,sm:2,md:2,lg:3,xl:4,xxl:5},request:In,pagination:{},params:g,actionRef:n,renderItem:function(h){return h&&h.id&&(0,l.jsx)(an.Z,{style:{margin:5},hoverable:!0,onClick:$()(D()().mark(function d(){return D()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:if(h.initLoginType!==Ge.PORTAL_OR_APP_INIT_SSO){y.next=3;break}return I(h.initLoginUrl),y.abrupt("return");case 3:Sn.ZP.warning("".concat(h.name,"\u4EC5\u5141\u8BB8\u5E94\u7528\u53D1\u8D77"));case 4:case"end":return y.stop()}},d)})),children:(0,l.jsx)(an.Z.Meta,{avatar:(0,l.jsx)(en.C,{shape:"circle",size:50,src:h.icon},h.id),title:h.name,description:(0,l.jsx)(Pn,{ellipsis:{rows:2,tooltip:!0},children:h.description})})})}})]})},Nn=En}}]);
