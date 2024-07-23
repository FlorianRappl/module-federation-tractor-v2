"use strict";(self.webpackChunkexplore=self.webpackChunkexplore||[]).push([[821],{451:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,'.e_Button {\n  --button-height: 50px;\n  display: block;\n  height: var(--button-height);\n  width: 100%;\n  border-radius: calc(var(--button-height) / 2);\n  padding: 2px;\n  border: 0;\n  background: linear-gradient(180deg, rgb(168, 168, 168), rgb(255, 255, 255)),\n    var(--accent-color);\n  box-shadow:\n    0 -2px 3px rgb(229, 229, 229),\n    0 2px 3px 2px rgb(255, 255, 255),\n    0 0 25px rgba(0, 0, 0, 0.05),\n    0 -10px 5px rgb(255, 255, 255) inset;\n  position: relative;\n  text-transform: uppercase;\n  letter-spacing: 0.3em;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  text-decoration: none;\n  font-size: 16px;\n}\n\n.e_Button--primary {\n  --accent-color: #ff5a55;\n  color: #fff;\n}\n\n.e_Button--secondary {\n  --accent-color: #ffffff;\n  color: #000;\n}\n\n.e_Button--rounded {\n  --button-height: 66px;\n  width: var(--button-height);\n}\n\n.e_Button[disabled] {\n  --accent-color: #d3d3d3;\n  pointer-events: none;\n}\n\n.e_Button::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: inherit;\n  left: 0;\n  background: linear-gradient(\n      0deg,\n      rgba(0, 0, 0, 0.19),\n      rgba(255, 255, 255, 0.3)\n    ),\n    var(--accent-color);\n  content: "";\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.1);\n  display: block;\n  transition:\n    transform 0.3s,\n    box-shadow 0.3s,\n    background 0.1s 0.2s;\n}\n\n.e_Button__inner {\n  position: relative;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: var(--accent-color);\n  height: calc(var(--button-height) - 4px);\n  border-radius: inherit;\n  display: grid;\n  place-content: center;\n  transition:\n    transform 0.3s,\n    background 0.3s,\n    box-shadow 0.3s;\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none;\n  white-space: nowrap;\n}\n\n.e_Button:hover .e_Button__inner,\n.e_Button:focus .e_Button__inner {\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05)),\n    var(--accent-color);\n}\n\n.e_Button:focus {\n  /* outline: none; */\n}\n\n.e_Button:active::before {\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.09), rgba(0, 0, 0, 0.16)),\n    var(--accent-color);\n  box-shadow:\n    0 0 3px rgba(0, 0, 0, 0.6) inset,\n    0 2px 1px -1px rgba(0, 0, 0, 0.1);\n  transform: scale(0.97);\n  transition:\n    all 0.1s,\n    background 0.05s;\n}\n\n.e_Button:active .e_Button__inner {\n  transform: scale(0.97);\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),\n    var(--accent-color);\n  transition: all 0.1s;\n  box-shadow:\n    0 5px 5px rgba(0, 0, 0, 0.2) inset,\n    0 -3px 3px rgba(255, 255, 255, 0.2) inset;\n}\n',""]);const d=o},938:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,".e_CategoryPage {\n  max-width: calc(1000px + var(--outer-space) * 2);\n  padding: 0 var(--outer-space);\n  margin: 0 auto;\n}\n\n.e_CategoryPage_list {\n  display: grid;\n\n  grid-gap: 40px;\n  padding: 0;\n  list-style-type: none;\n}\n\n@media (max-width: 499px) {\n  .e_CategoryPage_list {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (min-width: 500px) and (max-width: 999px) {\n  .e_CategoryPage_list {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n@media (min-width: 1000px) {\n  .e_CategoryPage_list {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n}\n\n.e_CategoryPage__subline {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1em;\n  justify-content: space-between;\n}\n\n.e_CategoryPage__subline * {\n  margin: 0;\n  line-height: 1.5;\n}\n",""]);const d=o},501:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,'.e_Filter {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: var(--outer-space);\n  gap: 1rem;\n}\n\n.e_Filter ul {\n  display: flex;\n  list-style: none;\n  gap: 0.8rem;\n  padding: 0;\n  margin: 0;\n}\n\n.e_Filter li {\n  position: relative;\n}\n\n.e_Filter a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.e_Filter__filter--active::before,\n.e_Filter a:hover::before {\n  content: "";\n  display: block;\n  width: 100%;\n  height: 2px;\n  bottom: -2px;\n  position: absolute;\n}\n\n.e_Filter__filter--active::before {\n  background-color: black;\n}\n\n.e_Filter a:hover::before {\n  background-color: #ff5a55;\n}\n',""]);const d=o},562:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,'.e_Footer {\n  max-width: calc(1000px + var(--outer-space) * 2);\n  margin: 1rem auto 2rem;\n  align-items: center;\n}\n\n.e_Footer__cutter {\n  @media (min-width: 1100px) {\n    margin: 0 calc(var(--outer-space) * -1);\n  }\n  overflow: hidden;\n  padding: 30px 0 0;\n}\n\n.e_Footer__inner {\n  @media (max-width: 999px) {\n    padding: 3rem var(--outer-space);\n  }\n\n  @media (min-width: 1000px) {\n    display: flex;\n    padding: 3rem calc(2 * var(--outer-space));\n  }\n\n  @media (min-width: 1000px) and (max-width: 1099px) {\n    padding: 3rem var(--outer-space);\n    display: flex;\n  }\n\n  min-height: 135px;\n  box-shadow: 0 10px 20px 10px #eb5b5920;\n  border-top: 1px solid #eeebe2;\n  mix-blend-mode: darken;\n}\n\n.e_Footer__inner::before,\n.e_Footer__inner::after {\n  position: absolute;\n  top: 0;\n  width: 48px;\n  height: calc(100% + 30px);\n}\n\n@media (min-width: 1000px) {\n  .e_Footer__inner::before,\n  .e_Footer__inner::after {\n    content: "";\n    display: block;\n  }\n}\n\n@media (max-width: 1099px) {\n  .e_Footer__inner::before,\n  .e_Footer__inner::after {\n    width: var(--outer-space);\n  }\n}\n\n@media (min-width: 1100px) {\n  .e_Footer__inner::before,\n  .e_Footer__inner::after {\n    width: calc(var(--outer-space) * 2);\n  }\n}\n\n.e_Footer__inner::before {\n  left: 0;\n  background: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 1),\n    rgba(255, 255, 255, 0)\n  );\n}\n\n@media (min-width: 1100px) {\n  .e_Footer__inner::before {\n    left: calc(var(--outer-space) * -1);\n  }\n}\n\n.e_Footer__inner::after {\n  right: 0;\n  background: linear-gradient(\n    -90deg,\n    rgba(255, 255, 255, 1),\n    rgba(255, 255, 255, 0)\n  );\n}\n\n@media (min-width: 1100px) {\n  .e_Footer__inner::after {\n    right: calc(var(--outer-space) * -1);\n  }\n}\n\n.e_Footer a {\n  color: #ff5a55;\n}\n\n.e_Footer__initiative {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  flex: 1;\n  margin-bottom: 2rem;\n}\n\n.e_Footer__initiative,\n.e_Footer__credits {\n  flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 50%;\n}\n\n.e_Footer__initiative img {\n  margin-top: 4px;\n  width: 45px;\n}\n\n.e_Footer__initiative p {\n  margin: 0;\n}\n\n.e_Footer__credits h3 {\n  margin: 0;\n  font-size: 1em;\n  font-weight: normal;\n  color: #ff5a55;\n}\n\n.e_Footer__credits p {\n  margin: 0 0 1rem;\n}\n\n.e_Footer__credits img {\n  display: inline-block;\n  width: 15px;\n}\n',""]);const d=o},360:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,'.e_Header {\n  max-width: calc(1000px + var(--outer-space) * 2);\n  margin: 1rem auto 0;\n  align-items: center;\n}\n\n.e_Header__cutter {\n  @media (min-width: 1100px) {\n    margin: 0 calc(var(--outer-space) * -1);\n  }\n  overflow: hidden;\n  padding: 0 0 30px;\n}\n\n.e_Header__inner {\n  @media (max-width: 999px) {\n    display: grid;\n    grid-template:\n      "logo mini-cart"\n      "navigation navigation";\n  }\n\n  @media (min-width: 1000px) {\n    padding: 0 var(--outer-space);\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n\n  @media (min-width: 1000px) and (max-width: 1099px) {\n    padding: 0;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-between;\n  }\n\n  min-height: 135px;\n  box-shadow: 0 0 20px 10px #eb5b5920;\n  border-bottom: 1px solid #eeebe2;\n  mix-blend-mode: darken;\n  flex: 1;\n}\n\n.e_Header__inner::before,\n.e_Header__inner::after {\n  position: absolute;\n  top: 0;\n  width: 48px;\n  height: calc(100% + 30px);\n}\n\n@media (min-width: 1000px) {\n  .e_Header__inner::before,\n  .e_Header__inner::after {\n    content: "";\n    display: block;\n  }\n}\n\n@media (max-width: 1099px) {\n  .e_Header__inner::before,\n  .e_Header__inner::after {\n    width: var(--outer-space);\n  }\n}\n\n@media (min-width: 1100px) {\n  .e_Header__inner::before,\n  .e_Header__inner::after {\n    width: calc(var(--outer-space) * 2);\n  }\n}\n\n.e_Header__inner::before {\n  left: 0;\n  background: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 1),\n    rgba(255, 255, 255, 0)\n  );\n}\n\n@media (min-width: 1100px) {\n  .e_Header__inner::before {\n    left: calc(var(--outer-space) * -1);\n  }\n}\n\n.e_Header__inner::after {\n  right: 0;\n  background: linear-gradient(\n    -90deg,\n    rgba(255, 255, 255, 1),\n    rgba(255, 255, 255, 0)\n  );\n}\n\n@media (min-width: 1100px) {\n  .e_Header__inner::after {\n    right: calc(var(--outer-space) * -1);\n  }\n}\n\n.e_Header__logo {\n  @media (max-width: 499px) {\n    width: 170px;\n  }\n\n  @media (min-width: 500px) {\n    width: 270px;\n  }\n  aspect-ratio: 3.5;\n  display: block;\n}\n\n.e_Header__link {\n  grid-area: logo;\n  display: flex;\n  margin-left: var(--outer-space);\n  align-items: center;\n}\n\n.e_Header__cart {\n  grid-area: mini-cart;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.e_Header__navigation {\n  @media (max-width: 999px) {\n    margin-bottom: 1rem;\n  }\n  grid-area: navigation;\n}\n',""]);const d=o},771:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,".e_HomePage {\n  @media (min-width: 500px) {\n    grid-template-columns: 1fr 1fr;\n    display: grid;\n    gap: 1rem;\n  }\n\n  max-width: calc(1000px + var(--outer-space) * 2);\n  padding: 0 var(--outer-space);\n  margin: 3rem auto 0;\n}\n\n.e_HomePage__categoryLink {\n  display: block;\n  position: relative;\n  margin-bottom: 2rem;\n  color: inherit;\n  text-align: center;\n  text-decoration: none;\n}\n\n.e_HomePage__categoryLink:hover,\n.e_HomePage__categoryLink:focus {\n  text-decoration: underline;\n}\n\n.e_HomePage__categoryLink img {\n  width: 100%;\n  aspect-ratio: 1000 / 560;\n  margin-bottom: 0.75rem;\n}\n\n.e_HomePage__recommendations {\n  grid-column: span 2;\n}\n",""]);const d=o},765:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,'.e_Navigation {\n  flex-grow: 1;\n}\n\n.e_Navigation__list {\n  display: flex;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  justify-content: center;\n  gap: 2rem;\n}\n\n.e_Navigation__item a {\n  position: relative;\n  display: block;\n  padding: 5px 20px;\n  color: #000;\n  text-transform: uppercase;\n  font-size: 13px;\n  letter-spacing: 4px;\n  text-decoration: none;\n  background: linear-gradient(0deg, #f5f5f5, #fff);\n  border-bottom: 1px solid #eeebe2;\n}\n\n.e_Navigation__item:hover a,\n.e_Navigation__item:focus a {\n  border-bottom-color: #757165;\n}\n\n.e_Navigation__item a::before,\n.e_Navigation__item a::after {\n  display: block;\n  content: "";\n  position: absolute;\n  width: 20px;\n  height: calc(100% + 1px);\n  top: 0;\n}\n\n.e_Navigation__item a::before {\n  left: 0;\n  background: linear-gradient(\n    -90deg,\n    rgba(255, 255, 255, 0),\n    rgba(255, 255, 255, 1)\n  );\n}\n\n.e_Navigation__item a::after {\n  right: 0;\n  background: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 0),\n    rgba(255, 255, 255, 1)\n  );\n}\n',""]);const d=o},382:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,".e_Product {\n  margin: 0;\n}\n\n.e_Product_link {\n  text-decoration: none;\n  color: black;\n}\n\n.e_Product_image {\n  width: 100%;\n  height: auto;\n  aspect-ratio: 1 / 1;\n  display: block;\n}\n\n.e_Product_name {\n  margin: 12px 0 8px;\n  color: black;\n  text-align: center;\n  display: block;\n}\n\n.e_Product_price {\n  margin: 8px 0;\n  color: black;\n  text-align: center;\n  display: block;\n}\n",""]);const d=o},82:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,".e_Recommendation {\n  margin: 0;\n}\n\n@media (min-width: 500px) and (max-width: 999px) {\n  .e_Recommendation:nth-child(4) {\n    display: none;\n  }\n}\n\n.e_Recommendation_link {\n  text-decoration: none;\n  color: black;\n}\n\n.e_Recommendation_image {\n  width: 100%;\n  height: auto;\n  aspect-ratio: 1 / 1;\n  display: block;\n}\n\n.e_Recommendation_name {\n  margin: 1rem 0;\n  color: black;\n  text-align: center;\n  display: block;\n}\n",""]);const d=o},655:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,".e_Recommendations {\n  padding: 1rem;\n  margin: 0 -1rem 3rem;\n}\n\n.e_Recommendations_list {\n  @media (max-width: 499px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media (min-width: 500px) and (max-width: 999px) {\n    grid-template-columns: 1fr 1fr 1fr;\n  }\n\n  @media (min-width: 1000px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n  position: relative;\n  display: grid;\n  gap: 40px;\n  padding: 0;\n  list-style-type: none;\n}\n",""]);const d=o},690:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,".e_StorePicker_control {\n  padding: 2rem;\n  margin: 0 0 0 -1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  max-width: 500px;\n}\n\n.e_StorePicker_dialog::backdrop {\n  backdrop-filter: blur(2px);\n}\n\n.e_StorePicker_dialog {\n  border: none;\n  padding: 1rem 2rem;\n  max-height: 90vh;\n  border-radius: 1rem;\n  overflow: visible;\n}\n\n.e_StorePicker_wrapper {\n  display: block;\n  max-height: calc(90vh - 2rem);\n  max-width: 100%;\n  padding: 0 5px;\n  overflow: auto;\n}\n\n.e_StorePicker_list {\n  @media (max-width: 499px) {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n\n  @media (min-width: 500px) and (max-width: 999px) {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2rem;\n  }\n\n  @media (min-width: 1000px) {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 3rem;\n  }\n\n  display: grid;\n\n  list-style-type: none;\n  padding: 0;\n}\n\n.e_StorePicker_content {\n  position: relative;\n}\n\n.e_StorePicker_image {\n  display: block;\n  max-width: 200px;\n  width: 100%;\n  height: auto;\n}\n\n.e_StorePicker_address {\n  margin: 1rem 0;\n}\n\n.e_StorePicker_selected {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.e_StorePicker_selected:empty {\n  display: none;\n}\n",""]);const d=o},896:(n,e,t)=>{t.d(e,{A:()=>d});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([n.id,".e_StoresPage {\n  max-width: calc(1000px + var(--outer-space) * 2);\n  padding: 0 var(--outer-space);\n  margin: 0 auto;\n}\n\n.e_StoresPage_list {\n  list-style: none;\n  padding: 0;\n  margin: 5em 0 4em;\n  display: flex;\n  justify-content: space-between;\n  gap: 2em;\n  flex-wrap: wrap;\n}\n\n.e_StoresPage p {\n  max-width: 80ch;\n}\n",""]);const d=o},211:(n,e,t)=>{t.d(e,{A:()=>v});var r=t(601),a=t.n(r),i=t(314),o=t.n(i),d=t(360),c=t(765),p=t(562),l=t(690),s=t(382),m=t(655),g=t(82),_=t(451),u=t(501),f=t(938),x=t(896),h=t(771),b=o()(a());b.i(d.A),b.i(c.A),b.i(p.A),b.i(l.A),b.i(s.A),b.i(m.A),b.i(g.A),b.i(_.A),b.i(u.A),b.i(f.A),b.i(x.A),b.i(h.A),b.push([n.id,"\n",""]);const v=b},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(o[c]=!0)}for(var p=0;p<n.length;p++){var l=[].concat(n[p]);r&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},888:(n,e,t)=>{var r=t(72),a=t.n(r),i=t(825),o=t.n(i),d=t(659),c=t.n(d),p=t(56),l=t.n(p),s=t(159),m=t.n(s),g=t(113),_=t.n(g),u=t(211),f={};f.styleTagTransform=_(),f.setAttributes=l(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=m(),a()(u.A,f),u.A&&u.A.locals&&u.A.locals},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},o=[],d=0;d<n.length;d++){var c=n[d],p=r.base?c[0]+r.base:c[0],l=i[p]||0,s="".concat(p," ").concat(l);i[p]=l+1;var m=t(s),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(g);else{var _=a(g,r);r.byIndex=d,e.splice(d,0,{identifier:s,updater:_,references:1})}o.push(s)}return o}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var i=r(n=n||[],a=a||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var d=t(i[o]);e[d].references--}for(var c=r(n,a),p=0;p<i.length;p++){var l=t(i[p]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},159:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);