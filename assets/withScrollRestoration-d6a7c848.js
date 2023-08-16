import{j as s,c as a,G as r,t as b,i as I,k as y,x as f,y as m,z as _,d as v,A as N,N as p,r as u,B as L,C as E}from"./index-5a5e6398.js";import{Data as x}from"./index-758ea15a.js";const B="_holder_hmmth_1",C="_left_hmmth_8",M="_right_hmmth_13",g={holder:B,left:C,right:M};function z({left:e,right:t,className:n,children:l,...i}){return s.jsxs("div",{className:a(g.holder,n),...i,children:[s.jsx("div",{className:a(g.left),children:e}),l,s.jsx("div",{className:a(g.right),children:t})]})}const H="_inlineFakeBlock_1qyub_1",T={inlineFakeBlock:H};function O({child:e}){return s.jsx("div",{className:a(T.inlineFakeBlock),children:e})}const A="/exile-leveling/assets/alchemy-33f131af.png",F="/exile-leveling/assets/alteration-ff894280.png",V="/exile-leveling/assets/chance-88c35651.png",G="/exile-leveling/assets/transmutation-d67e13ef.png",W="/exile-leveling/assets/wisdom-1464a665.png",$="_rewardNote_6i7qc_6",D="_noWrap_6i7qc_10",U="_gemError_6i7qc_15",h={default:"_default_6i7qc_1",rewardNote:$,noWrap:D,gemError:U};function ie(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}}]})(e)}function q(e){return r({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"}}]})(e)}function P(e){return new URL(Object.assign({"./images/alchemy.png":A,"./images/alteration.png":F,"./images/chance.png":V,"./images/transmutation.png":G,"./images/wisdom.png":W})[`./images/${e}`],self.location).href}function K(e){switch(e){case"quest":return s.jsx("span",{children:"Take "});case"vendor":return s.jsx("span",{children:"Buy "});default:return s.jsx(s.Fragment,{})}}function Y({item:e,cost:t,rewardType:n}){return s.jsxs(s.Fragment,{children:[K(n),s.jsx("span",{className:a(h.default),children:e}),n==="vendor"&&t!==void 0&&s.jsxs("div",{className:a(h.noWrap),children:[s.jsx("span",{children:" for "}),s.jsx(O,{child:s.jsx("img",{src:P(`${t}.png`),alt:""})})]})]})}function re({requiredGem:e,rewardType:t}){const n=x.Gems[e.id];return n?s.jsx(z,{left:s.jsxs(s.Fragment,{children:[s.jsx(q,{color:x.GemColours[n.primary_attribute],className:a("inlineIcon")}),s.jsx(Y,{item:n.name,cost:n.cost,rewardType:t})]}),right:s.jsx("div",{className:a(h.rewardNote),children:e.note})}):s.jsxs("div",{className:a(h.gemError),children:["This is awkward, ",s.jsx("b",{children:e.id})," doesn't seem to exist"]})}const J="_list_1jrs5_1",Q="_listItem_1jrs5_6",X="_bullet_1jrs5_13",Z="_completed_1jrs5_18",ee="_task_1jrs5_18",d={list:J,listItem:Q,bullet:X,completed:Z,task:ee};function te({children:e,isCompletedState:t}){const[n,l]=t?b(t):[void 0,void 0];return s.jsx("li",{tabIndex:0,className:a(I.item,y.hoverPrimary,d.listItem,{[d.completed]:n}),onClick:()=>{l&&l(!n)},children:e})}function oe({items:e}){return s.jsx("ol",{className:a(d.list),children:e&&e.map(({key:t,children:n,...l},i)=>s.jsxs(te,{...l,children:[s.jsxs("span",{"aria-hidden":!0,className:a(d.bullet),children:[`${i+1}`.padStart(2,"0"),"."]}),s.jsx("div",{className:a(d.task),children:n})]},t||i))})}const k=0,S=f({key:"gemLinksAtom",default:m("gem-links",k,p),effects:[_("gem-links",k)]}),ce=v({key:"gemLinksSelector",get:({get:e})=>{let t=e(S);return t===null&&(t=[]),t},set:({set:e},t)=>{const n=t instanceof N?null:t;e(S,n)}}),j=0,se=f({key:"searchStringsAtom",default:m("search-strings",j,p),effects:[_("search-strings",j)]}),de=v({key:"searchStringsSelector",get:async({get:e})=>{const t=e(se);if(!t)return null;let n,l=[];for(let i=0;i<t.length;i++){const o=t[i];o.startsWith("#")?n=o.substring(1).trim():/\S/.test(o)&&(l.push({text:o.trim(),alias:n}),n=void 0)}return l}}),w=0,R=f({key:"buildTreesAtom",default:m("build-trees",w,p),effects:[_("build-trees",w)]}),ue=v({key:"buildTreesSelector",get:({get:e})=>{let t=e(R);return t===null&&(t=[]),t},set:({set:e},t)=>{const n=t instanceof N?null:t;e(R,n)}});function he(e){return r({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"}}]})(e)}function ge(e){return r({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"}}]})(e)}function fe(e){return r({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",clipRule:"evenodd"}}]})(e)}function me(e){return r({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"}}]})(e)}function _e(e){return r({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(e)}function ve(e){function t(n){const[l,i]=u.useState(!0);return u.useEffect(()=>{i(!1)},[]),l?s.jsx(s.Fragment,{}):s.jsx(e,{...n})}return t}const ne=L({key:"scrollOffsetState",default:0});function pe(e){function t(n){const l=E(),[i,o]=b(ne(l.pathname));return u.useLayoutEffect(()=>{window.scrollTo(0,i);function c(){o(window.scrollY)}return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[]),u.useEffect(()=>{if(l.hash){const c=document.getElementById(l.hash.replace("#",""));c&&c.scrollIntoView({behavior:"smooth"})}},[l]),s.jsx(e,{...n})}return t}export{re as G,fe as H,Y as I,q as M,z as S,oe as T,O as a,ue as b,me as c,pe as d,_e as e,ge as f,ce as g,he as h,ie as i,se as j,de as s,ve as w};
