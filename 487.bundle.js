"use strict";(self.webpackChunktab_nodes_tree_extension=self.webpackChunktab_nodes_tree_extension||[]).push([[487],{46076:(e,t,n)=>{n.d(t,{nP:()=>c});var r=n(22507),l=n(85887);let i=l.s.map(e=>`${e}-inverse`);function c(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return t?[].concat((0,r.A)(i),(0,r.A)(l.s)).includes(e):l.s.includes(e)}},95847:(e,t,n)=>{function r(e){return["small","middle","large"].includes(e)}n.d(t,{X:()=>r})},79352:(e,t,n)=>{n.d(t,{YK:()=>a});var r=n(79474),l=n(11019),i=n(42363);let c={Modal:100,Drawer:100,Popover:100,Popconfirm:100,Tooltip:100,Tour:100},o={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function a(e,t){let n;let[,a]=(0,l.Ay)(),u=r.useContext(i.A),s=e in c;if(void 0!==t)n=[t,t];else{let r=null!=u?u:0;s?r+=(u?0:a.zIndexPopupBase)+c[e]:r+=o[e],n=[void 0===u?t:r,r]}return n}},40753:(e,t,n)=>{n.d(t,{Ob:()=>c,zv:()=>l});var r=n(79474);function l(e){return e&&r.isValidElement(e)&&e.type===r.Fragment}let i=(e,t,n)=>r.isValidElement(e)?r.cloneElement(e,"function"==typeof n?n(e.props||{}):n):t;function c(e,t){return i(e,e,t)}},83604:(e,t,n)=>{n.d(t,{Ap:()=>c,Ve:()=>a,uR:()=>u});var r=n(79474),l=n(40753);let i=/^[\u4e00-\u9fa5]{2}$/,c=i.test.bind(i);function o(e){return"string"==typeof e}function a(e){return"text"===e||"link"===e}function u(e,t){let n=!1,i=[];return r.Children.forEach(e,e=>{let t=typeof e,r="string"===t||"number"===t;if(n&&r){let t=i.length-1,n=i[t];i[t]=`${n}${e}`}else i.push(e);n=r}),r.Children.map(i,e=>(function(e,t){if(null==e)return;let n=t?" ":"";return"string"!=typeof e&&"number"!=typeof e&&o(e.type)&&c(e.props.children)?(0,l.Ob)(e,{children:e.props.children.split("").join(n)}):o(e)?c(e)?r.createElement("span",null,e.split("").join(n)):r.createElement("span",null,e):(0,l.zv)(e)?r.createElement("span",null,e):e})(e,t))}},8144:(e,t,n)=>{n.d(t,{K6:()=>a,RQ:()=>o});var r=n(79474),l=n(97500),i=n.n(l);n(10509);let c=r.createContext(null),o=(e,t)=>{let n=r.useContext(c),l=r.useMemo(()=>{if(!n)return"";let{compactDirection:r,isFirstItem:l,isLastItem:c}=n,o="vertical"===r?"-vertical-":"-";return i()(`${e}-compact${o}item`,{[`${e}-compact${o}first-item`]:l,[`${e}-compact${o}last-item`]:c,[`${e}-compact${o}item-rtl`]:"rtl"===t})},[e,t,n]);return{compactSize:null==n?void 0:n.compactSize,compactDirection:null==n?void 0:n.compactDirection,compactItemClassnames:l}},a=e=>{let{children:t}=e;return r.createElement(c.Provider,{value:null},t)}},10509:(e,t,n)=>{n.d(t,{A:()=>function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=[];return r.Children.forEach(t,function(t){(null!=t||n.keepEmpty)&&(Array.isArray(t)?i=i.concat(e(t)):(0,l.isFragment)(t)&&t.props?i=i.concat(e(t.props.children,n)):i.push(t))}),i}});var r=n(79474),l=n(73176)},20627:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(58603),l=n(40075),i=n(33030),c=n(37390),o=n(27207);function a(e){let{pageTitle:t,pageFavIconUrl:n,icon:a,message:u,button:s}=e;return t&&(0,c.wE)(t),n&&(0,c.Iv)(n),(0,o.FD)(r.A,{align:"center",gap:"large",vertical:!0,className:"p-16",children:[(0,o.Y)("span",{className:"text-7xl",children:a}),(0,o.Y)(l.A.Text,{className:"text-2xl",children:u}),(0,o.Y)(i.Ay,{type:"primary",onClick:s.onClick,children:s.text},"console")]})}}}]);