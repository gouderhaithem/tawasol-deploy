(self.webpackChunkmattermost_webapp=self.webpackChunkmattermost_webapp||[]).push([[4402],{84402(e,t,n){"use strict";n.d(t,{xA:()=>tt});var r=n(13299),i=n(36418),o=n(67166),a="#121212",s="#212121",l="#4a4a4a",c="#a6a6a6",u="#ffffff",d="#00ccff",f="#00ff99",h="#9933ff",p="#ff6666",m="#fff35c",g=n(53442);function v(e,t,n,r){var i,o=!1,a=0;function s(){i&&clearTimeout(i)}function l(){for(var l=arguments.length,c=new Array(l),u=0;u<l;u++)c[u]=arguments[u];var d=this,f=Date.now()-a;function h(){a=Date.now(),n.apply(d,c)}o||(r&&!i&&h(),s(),void 0===r&&f>e?h():!0!==t&&(i=setTimeout(r?function(){i=void 0}:h,void 0===r?e-f:e)))}return"boolean"!=typeof t&&(r=n,n=t,t=void 0),l.cancel=function(){s(),o=!0},l}function y(e,t,n){return void 0===n?v(e,t,!1):v(e,n,!1!==t)}n(91315);var b,w=Object.defineProperty,E=Object.getOwnPropertySymbols,_=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))_.call(t,n)&&x(e,n,t[n]);if(E)for(var n of E(t))C.call(t,n)&&x(e,n,t[n]);return e},L=(e,t,n)=>{const i=(0,r.Up)(e,[n]),o=(0,r.Up)(t,[n]);return i[n]&&o[n]?k(k(k({},e),t),{[n]:i[n]+", "+o[n]}):k(k({},e),t)},$=("undefined"!=typeof window?window:n.g)||{},A=`${(null==(b=$)?void 0:b.GIPHY_PINGBACK_URL)||"https://pingback.giphy.com"}/v2/pingback?apikey=l0HlIwPWyBBUDAUgM`,S=[];$.giphyRandomId=(0,r.t0)();var O="";function P(){const e=[...S];S=[],(e=>{const t=(0,r.D6)();null==t||t.set("Content-Type","application/json"),r.Vy.debug("Pingback session",e),e.length?fetch(A,{method:"POST",body:JSON.stringify({events:e}),headers:t}).catch(e=>{r.Vy.warn(`pingbacks failing to post ${e}`)}):new Promise(e=>e())})(e)}var I,R,j=y(1e3,P);null==(R=(I=$).addEventListener)||R.call(I,"beforeunload",P);var N=({userId:e,eventType:t,actionType:n,attributes:i,queueEvents:o=!0,analyticsResponsePayload:a})=>{O=e?String(e):O;const s={ts:Date.now(),attributes:i,action_type:n,user_id:(0,r.t0)(),analytics_response_payload:a};O&&(s.logged_in_user_id=O),s.analytics_response_payload&&(s.analytics_response_payload=`${s.analytics_response_payload}${r.Vy.ENABLED?"&mode=verification":""}`),t&&(s.event_type=t),S.push(s),o?j():P()},D=n(70897),T=n(55814),F=n(4386),M=n(75349),G=n(55690),V=n(42016),H=Object.defineProperty,z=Object.defineProperties,U=Object.getOwnPropertyDescriptors,B=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,Z=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q=(e,t)=>{for(var n in t||(t={}))W.call(t,n)&&Z(e,n,t[n]);if(B)for(var n of B(t))K.call(t,n)&&Z(e,n,t[n]);return e},Q=(e,t)=>z(e,U(t)),Y=(e,t,n)=>new Promise((r,i)=>{var o=e=>{try{s(n.next(e))}catch(e){i(e)}},a=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,a);s((n=n.apply(e,t)).next())}),X=o.default.img`
    object-fit: cover;
    width: 32px;
    height: 32px;
    margin-right: 8px;
`,J=({user:e,className:t=""})=>{const n=(0,i.useRef)(Math.floor(5*Math.random())+1),r=e.avatar_url?(e=>{var t,n;if(!e)return"";const r=null==(n=null==(t=null==e?void 0:e.split("."))?void 0:t.pop())?void 0:n.toLowerCase();return e.replace(`.${r}`,`/80h.${r}`)})(e.avatar_url):`https://media.giphy.com/avatars/default${n.current}.gif`;return i.createElement(X,{src:r,className:t})},ee=({className:e="",size:t=17,fill:n="#15CDFF"})=>i.createElement("svg",{className:[ee.className,e].join(" "),height:t,width:"19px",viewBox:"0 0 19 17"},i.createElement("path",{className:ee.checkMarkClassName,d:"M9.32727273,9.44126709 L9.32727273,3.03016561 L6.55027155,3.03016561 L6.55027155,10.8150746 L6.55027155,12.188882 L12.1042739,12.188882 L12.1042739,9.44126709 L9.32727273,9.44126709 Z",fill:a,transform:"translate(9.327273, 7.609524) scale(-1, 1) rotate(-45.000000) translate(-9.327273, -7.609524) "}),i.createElement("g",{transform:"translate(-532.000000, -466.000000)",fill:n},i.createElement("g",{transform:"translate(141.000000, 235.000000)"},i.createElement("g",{transform:"translate(264.000000, 0.000000)"},i.createElement("g",{transform:"translate(10.000000, 224.000000)"},i.createElement("g",{transform:"translate(114.000000, 2.500000)"},i.createElement("path",{d:"M15.112432,4.80769231 L16.8814194,6.87556817 L19.4157673,7.90116318 L19.6184416,10.6028916 L21.0594951,12.9065042 L19.6184416,15.2101168 L19.4157673,17.9118452 L16.8814194,18.9374402 L15.112432,21.0053161 L12.4528245,20.3611511 L9.79321699,21.0053161 L8.02422954,18.9374402 L5.48988167,17.9118452 L5.28720734,15.2101168 L3.84615385,12.9065042 L5.28720734,10.6028916 L5.48988167,7.90116318 L8.02422954,6.87556817 L9.79321699,4.80769231 L12.4528245,5.4518573 L15.112432,4.80769231 Z M17.8163503,10.8991009 L15.9282384,9.01098901 L11.5681538,13.3696923 L9.68115218,11.4818515 L7.81302031,13.3499833 L9.7011322,15.2380952 L11.5892441,17.1262071 L17.8163503,10.8991009 Z"})))))));ee.className="giphy-verified-badge",ee.checkMarkClassName="giphy-verified-checkmark";var te=ee,ne=o.default.div`
    color: white;
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
`,re=(0,o.default)(te)`
    margin-left: 4px;
    flex-shrink: 0;
`,ie=o.default.div`
    display: flex;
    align-items: center;
    min-width: 0;
`,oe=({user:e})=>{const{display_name:t,username:n}=e;return i.createElement(ie,null,i.createElement(ne,null,t||`@${n}`),e.is_verified?i.createElement(re,{size:14}):null)},ae=o.default.div`
    display: flex;
    align-items: center;
    font-family: interface, helvetica, arial;
`,se=(0,o.default)(J)`
    flex-shrink: 0;
`,le=({gif:e,className:t,onClick:n})=>{const{user:r}=e;return(null==r?void 0:r.username)||(null==r?void 0:r.display_name)?i.createElement(ae,{className:[le.className,t].join(" "),onClick:t=>{if(t.preventDefault(),t.stopPropagation(),n)n(e);else{const e=r.profile_url;e&&window.open(e,"_blank")}}},i.createElement(se,{user:r}),i.createElement(oe,{user:e.user})):null};le.className="giphy-attribution";var ce=le,ue=o.default.div`
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6));
    cursor: default;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 75px;
    pointer-events: none;
`,de=(0,o.default)(ce)`
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
`,fe=o.default.div`
    transition: opacity 150ms ease-in;
`,he=({gif:e,isHovered:t,onClick:n})=>{const r=(0,i.useRef)(t);return t&&(r.current=!0),e.user&&r.current?i.createElement(fe,{style:{opacity:t?1:0}},i.createElement(ue,null),i.createElement(de,{gif:e,onClick:n})):null},pe=({children:e,className:t,onVisibleChange:n,config:r})=>{const o=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e;return o.current&&(e=new IntersectionObserver(([e])=>{n&&n(e.isIntersecting)},r),e.observe(o.current)),()=>null==e?void 0:e.disconnect()},[n,o,r]),i.createElement("div",{ref:o,className:t},e)},me=e=>(t,n,i,o={})=>{t.analytics_response_payload&&N({analyticsResponsePayload:t.analytics_response_payload,userId:n,actionType:e,attributes:q({position:JSON.stringify((0,r.Sj)(i))},o)})},ge=me("CLICK"),ve=me("HOVER"),ye=function({src:e}){const t=(0,i.useRef)((n=(n=(n=(n=e).replace("%%CACHEBUSTER%%",(0,r.yn)())).replace("%%TIMESTAMP%%",`${Date.now()}`)).replace("%%APPBUNDLE%%","web"),"undefined"!=typeof window&&(n=(n=n.replace("%%APP_WINDOW_SIZE%%",`${window.innerWidth},${window.innerHeight}`)).replace("%%DEVICE_LANGUAGE%%",`${navigator.language}`)),n));var n;const[o,a]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{a(!0)},[]),o?i.createElement("img",{src:t.current,width:0,height:0}):null},be=(0,i.createContext)({}),we=({attributes:e,children:t})=>{const{attributes:n={}}=(0,i.useContext)(be);return i.createElement(be.Provider,{value:{attributes:L(n,e,"layout_type")}},t)},Ee=o.default.div`
    position: relative;
    display: block;
    picture {
        display: block;
        width: 100%;
        height: 100%;
    }
    img {
        display: block;
    }
    .${te.className} {
        g {
            fill: white;
        }
    }
    .${te.checkMarkClassName} {
        opacity: 0;
    }
`,_e=[d,f,h,p,m],Ce="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",xe=!("undefined"==typeof window||!window.document||!window.document.createElement),ke=()=>{},Le=({children:e})=>{const[t,n]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{n(!0)},[]),t?i.createElement(i.Fragment,null,e):null},$e=({gif:e,gif:{bottle_data:t={}},width:n,percentWidth:o,percentHeight:a,height:s,onGifRightClick:l=ke,className:c="",onGifClick:u=ke,onGifKeyPress:d=ke,onGifSeen:f=ke,onGifVisible:h=ke,user:p={},backgroundColor:m,overlay:g,hideAttribution:v=!1,noLink:y=!1,borderRadius:b=4,style:w,tabIndex:E,lazyLoad:_=!0})=>{var C;const[x,k]=(0,i.useState)(!1),[L,$]=(0,i.useState)(!1),[A,S]=(0,i.useState)(!xe||!_),[O,P]=(0,i.useState)(""),I=(0,i.useRef)(_e[Math.round(Math.random()*(_e.length-1))]),R=(0,i.useRef)(null),j=(0,i.useRef)(null),D=(0,i.useRef)(),T=(0,i.useRef)(),F=(0,i.useRef)(),M=(0,i.useRef)(ke),G=Object.keys(t).length>0,{attributes:V}=(0,i.useContext)(be);let H=g;H||v||(H=he),M.current=t=>{k(!0),r.Vy.debug(`GIF ${e.id} seen. ${e.title}`),((e,t,n,r={})=>{e.analytics_response_payload&&N({analyticsResponsePayload:e.analytics_response_payload,userId:t,actionType:"SEEN",attributes:q({position:JSON.stringify(n)},r)})})(e,null==p?void 0:p.id,t.boundingClientRect,V),null==f||f(e,t.boundingClientRect),T.current&&T.current.disconnect()};const z=()=>{T.current||(T.current=new IntersectionObserver(([e])=>{e.isIntersecting&&M.current(e)},{threshold:[.99]})),!x&&R.current&&T.current&&T.current.observe(R.current)};(0,i.useEffect)(()=>{var t,n;(null==(t=j.current)?void 0:t.complete)&&(z(),h(e)),null==(n=T.current)||n.disconnect(),k(!1)},[e.id]),(0,i.useEffect)(()=>(D.current=new IntersectionObserver(([e])=>{const{isIntersecting:t}=e;S(t),!t&&T.current&&T.current.disconnect()}),D.current.observe(R.current),()=>{D.current&&D.current.disconnect(),T.current&&T.current.disconnect(),F.current&&clearTimeout(F.current)}),[]);const U=(0,r._2)(e,n);let B=s;(null==w?void 0:w.aspectRatio)||s||(B=U);const W=(0,r.th)(e.images,n,s||U);if(!W)return e.images?console.error(`no rendition for ${e.id}, rendition names: ${Object.keys(e.images).join(", ")}`):console.error(`no rendition for ${e.id} - no images`),null;const K=e.images[W.renditionName],Z=O!==$e.imgLoadedClassName||e.is_sticker?m||(e.is_sticker?"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4AQMAAACSSKldAAAABlBMVEUhIiIWFhYoSqvJAAAAGElEQVQY02MAAv7///8PWxqIPwDZw5UGABtgwz2xhFKxAAAAAElFTkSuQmCC') 0 0":I.current):"unset",Q=b?"hidden":"unset";return i.createElement(Ee,{as:y?"div":"a",href:y?void 0:e.url,"data-giphy-id":e.id,"data-giphy-is-sticker":e.is_sticker,style:q({width:o||n,height:a||B,overflow:Q,borderRadius:b},w),className:[$e.className,c].join(" "),onMouseOver:t=>{clearTimeout(F.current),t.persist(),$(!0),F.current=window.setTimeout(()=>{ve(e,null==p?void 0:p.id,t.target,V)},200)},onMouseLeave:()=>{clearTimeout(F.current),$(!1)},onClick:t=>{ge(e,null==p?void 0:p.id,t.target,V),u(e,t)},onContextMenu:t=>l(e,t),onKeyPress:t=>{d(e,t)},tabIndex:E,ref:R},i.createElement("picture",null,i.createElement("source",{type:"image/webp",srcSet:A?K.webp:Ce,suppressHydrationWarning:!0}),i.createElement("img",{ref:j,suppressHydrationWarning:!0,className:[$e.imgClassName,O].join(" "),src:A?K.url:Ce,style:{background:Z},width:"100%",height:"100%",alt:(0,r.lm)(e),onLoad:A?t=>{z(),h(e,t),P($e.imgLoadedClassName)}:()=>{}})),G&&(null==(C=null==t?void 0:t.tags)?void 0:C.map((e,t)=>i.createElement(ye,{src:e,key:t}))),H&&i.createElement(Le,null,A&&i.createElement(H,{gif:e,isHovered:L,width:n,height:B})))};$e.className="giphy-gif",$e.imgClassName="giphy-gif-img",$e.imgLoadedClassName="giphy-img-loaded";var Ae=$e,Se=o.default.div`
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    position: relative;
`,Oe=(0,o.default)(Ae)`
    position: relative;
    display: inline-block;
    list-style: none;
    margin-left: ${e=>e.$ml}px;
    /* make sure gifs are fully visible with a scrollbar */
    margin-bottom: 1px;

    &:first-of-type {
        margin-left: 0;
    }
    .${Ae.imgClassName} {
        position: absolute;
        top: 0;
        left: 0;
    }
`,Pe=(0,o.default)(pe)`
    display: inline-block;
`,Ie=o.default.div`
    width: 30px;
    display: inline-block;
    opacity: ${e=>e.$isFirstLoad?0:1};
    height: ${e=>e.$height}px;
`,Re=Object.freeze({gutter:6,user:{},initialGifs:[]}),je=Object.freeze({isFetching:!1,gifs:[],isLoaderVisible:!1,isDoneFetching:!1}),Ne=class e extends i.PureComponent{constructor(){super(...arguments),this.state=Q(q({},je),{gifs:this.props.initialGifs||[]}),this.unmounted=!1,this.paginator=(0,g.Oo)(this.props.fetchGifs,this.state.gifs),this.onLoaderVisible=e=>{this.unmounted||this.setState({isLoaderVisible:e},this.onFetch)},this.onFetch=y(100,()=>Y(this,null,function*(){if(this.unmounted)return;const{isFetching:e,isLoaderVisible:t,gifs:n}=this.state;if(!e&&t){let e;this.setState({isFetching:!0});try{e=yield this.paginator()}catch(e){this.setState({isFetching:!1})}if(e)if((null==e?void 0:e.skipCountCheck)||n.length!==e.length){this.setState({gifs:e,isFetching:!1});const{onGifsFetched:t}=this.props;t&&t(e),this.onFetch()}else this.setState({isDoneFetching:!0})}}))}componentDidMount(){this.unmounted=!1,this.onFetch()}componentWillUnmount(){this.unmounted=!0}render(){const{onGifVisible:t,onGifRightClick:n,gifHeight:o,gifWidth:a,gutter:s,className:l=e.className,onGifSeen:c,onGifClick:u,onGifKeyPress:d,user:f,overlay:h,hideAttribution:p,noLink:m,noResultsMessage:g,backgroundColor:v,borderRadius:y,tabIndex:b=0,loaderConfig:w}=this.props,{gifs:E,isDoneFetching:_}=this.state,C=!_,x=0===E.length;return i.createElement(we,{attributes:{layout_type:"CAROUSEL"}},i.createElement(Se,{className:l},E.map(e=>i.createElement(Oe,{gif:e,key:e.id,tabIndex:b,width:a||(0,r.Vs)(e,o),height:o,onGifClick:u,onGifKeyPress:d,onGifSeen:c,onGifVisible:t,onGifRightClick:n,user:f,$ml:s,overlay:h,hideAttribution:p,noLink:m,borderRadius:y,backgroundColor:v})),!C&&0===E.length&&g,C&&i.createElement(Pe,{onVisibleChange:this.onLoaderVisible,config:w},i.createElement(Ie,{$isFirstLoad:x,$height:o}))))}};Ne.className="giphy-carousel",Ne.defaultProps=Re;var De=o.default.div`
    color: ${c};
    display: flex;
    justify-content: center;
    margin: 30px 0;
    font-family: interface, Helvetica Neue, helvetica, sans-serif;
    font-size: 16px;
    font-weight: 600;
    a {
        color: ${d};
        cursor: pointer;
        &:hover {
            color: white;
        }
    }
`,Te=({onClick:e})=>i.createElement(De,null,"Error loading GIFs. ",i.createElement("a",{onClick:e},"Try again?")),Fe="#2e2e2e",Me=l,Ge=o.default.div`
    align-items: center;
    background-color: ${({$backgroundColor:e})=>e};
    border-radius: 16px;
    display: flex;
    max-width: fit-content;
    overflow: hidden;
    padding: 4px 5px 5px 6px;
`,Ve=o.default.div`
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    -webkit-overflow-scrolling: touch;
`,He=o.default.div`
    display: inline-flex;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;
    width: ${({$width:e})=>`${e}px`};
`,ze=o.default.div`
    background-color: ${({$color:e})=>e};
    box-sizing: border-box;
    height: ${({$gifHeight:e})=>`${Math.round(.75*e)}px`};
    margin: ${({$gutter:e})=>`0 ${e}px`};
    width: 2px;
`,Ue=(0,o.default)(Ae)`
    display: inline-block;
    flex-shrink: 0;
    list-style: none;
    /* make sure gifs are fully visible with a scrollbar */
    margin-bottom: 1px;
    position: relative;

    .${Ae.imgClassName} {
        position: absolute;
        top: 0;
        left: 0;
    }
`;function Be(e){var t;const n=e,{backgroundColor:o=Fe,className:a,dividerColor:s=Me,fetchVariations:l,gif:c,gifHeight:u,GifProps:d={},gifWidth:f,gutter:h=6,hideAttribution:p,loader:m,noLink:g,onGifClick:v,onGifKeyPress:y,onGifRightClick:b,onGifSeen:w,onGifVisible:E,onVariationsFetched:_,overlay:C,tabIndex:x=0,user:k}=n,L=((e,t)=>{var n={};for(var r in e)W.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&B)for(var r of B(e))t.indexOf(r)<0&&K.call(e,r)&&(n[r]=e[r]);return n})(n,["backgroundColor","className","dividerColor","fetchVariations","gif","gifHeight","GifProps","gifWidth","gutter","hideAttribution","loader","noLink","onGifClick","onGifKeyPress","onGifRightClick","onGifSeen","onGifVisible","onVariationsFetched","overlay","tabIndex","user"]),$=null!=(t=c.variation_count)?t:0,A=f||(0,r.Vs)(c,u),S=$*A+Math.max(0,$-1)*h,O=(0,T.A)(l),P=(0,T.A)(_),[I,R]=(0,D.A)(()=>Y(this,null,function*(){var e;const t=yield O.current(c.id),n=null!=(e=null==t?void 0:t.data)?e:[];return P.current&&P.current(n),n}),[c],{loading:!0,value:[]});(0,i.useEffect)(()=>{R()},[R]);const j=q({backgroundColor:"transparent",height:u,hideAttribution:p,noLink:g,onGifClick:v,onGifKeyPress:y,onGifRightClick:b,onGifSeen:w,onGifVisible:E,overlay:C,tabIndex:x,user:k,width:A},d);return i.createElement(Ge,q({$backgroundColor:o,className:[Be.className,a].join(" ")},L),i.createElement(Ue,Q(q({},j),{gif:c})),$?i.createElement(ze,{className:Be.dividerClassName,$color:s,$gifHeight:u,$gutter:h}):null,i.createElement(Ve,{className:Be.variationsViewportClassName},i.createElement(He,{className:Be.variationsContainerClassName,$width:S},(()=>{var e;return I.loading?m?i.createElement(m,{className:Be.loaderClassName}):null:I.error?i.createElement(Te,{onClick:R}):i.createElement(i.Fragment,null,(null!=(e=I.value)?e:[]).map(e=>i.createElement(Ue,Q(q({},j),{key:e.id,gif:e}))))})())))}Be.className="giphy-emoji-variations-list",Be.dividerClassName="giphy-emoji-variations-divider",Be.loaderClassName="giphy-emoji-variations-loader",Be.variationsViewportClassName="giphy-emoji-variations-viewport",Be.variationsContainerClassName="giphy-emoji-variations-container";var We=o.keyframes`
     to {
    transform: scale(1.75) translateY(-20px);
  }
`,Ke=o.default.div`
    display: flex;
    align-items: center;
    height: ${52}px;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    animation: pulse 0.8s ease-in-out 0s infinite alternate backwards;
`,Ze=o.default.div`
    display: inline-block;
    height: 10px;
    width: 10px;
    margin: ${52}px 10px 10px 10px;
    position: relative;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    animation: ${We} cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.75s infinite alternate;
    background: ${e=>e.$color};
    animation-delay: ${e=>e.$delay};
`,qe=({className:e=""})=>i.createElement(Ke,{className:e},i.createElement(Ze,{$color:f,$delay:"0"}),i.createElement(Ze,{$color:d,$delay:".1s"}),i.createElement(Ze,{$color:h,$delay:".2s"}),i.createElement(Ze,{$color:p,$delay:".3s"}),i.createElement(Ze,{$color:m,$delay:".4s"})),Qe=o.default.div`
    opacity: ${e=>e.$isFirstLoad?0:1};
`;function Ye(e,t,n=[]){return Array.apply(null,Array(e)).map((e,r)=>n[r]||t)}var Xe=Object.freeze({gutter:6,user:{},initialGifs:[]}),Je=Object.freeze({isFetching:!1,isError:!1,gifs:[],isLoaderVisible:!1,isDoneFetching:!1}),et=class e extends i.PureComponent{constructor(){super(...arguments),this.state=Q(q({},Je),{gifs:this.props.initialGifs||[]}),this.unmounted=!1,this.paginator=(0,g.Oo)(this.props.fetchGifs,this.state.gifs),this.onLoaderVisible=e=>{this.unmounted||this.setState({isLoaderVisible:e},this.onFetch)},this.onFetch=y(e.fetchDebounce,()=>Y(this,null,function*(){if(this.unmounted)return;const{isFetching:e,isLoaderVisible:t}=this.state,{externalGifs:n}=this.props,r=(n||this.state.gifs).length;if(!e&&t){let e;this.setState({isFetching:!0,isError:!1});try{if(e=yield this.paginator(n),this.unmounted)return}catch(e){if(this.unmounted)return;this.setState({isFetching:!1,isError:!0});const{onGifsFetchError:t}=this.props;t&&t(e)}if(e)if((null==e?void 0:e.skipCountCheck)||r!==e.length){this.setState({gifs:e,isFetching:!1});const{onGifsFetched:t}=this.props;t&&t(e),this.onFetch()}else this.setState({isDoneFetching:!0})}}))}componentDidMount(){this.unmounted=!1,this.onFetch()}componentWillUnmount(){this.unmounted=!0}render(){const{onGifVisible:t,onGifRightClick:n,className:o=e.className,onGifSeen:a,onGifClick:s,onGifKeyPress:l,user:c,overlay:u,hideAttribution:d,noLink:f,borderRadius:h,noResultsMessage:p,columns:m,width:g,gutter:v,percentWidth:y,columnOffsets:b,backgroundColor:w,loaderConfig:E,tabIndex:_=0,layoutType:C="GRID",loader:x=qe,eagerIds:k}=this.props,{gifs:L,isError:$,isDoneFetching:A}=this.state,S=!A,O=0===L.length,P=(g-v*(m-1))/m,I=function(e,t,n,i){const o=Ye(e,[]),a=Ye(e,0,t);return n.forEach(e=>{const t=a.indexOf(Math.min(...a));o[t]=[...o[t],e],a[t]+=(0,r._2)(e,i)}),o}(m,b,L,P);return i.createElement(we,{attributes:{layout_type:C}},i.createElement("div",{className:o},i.createElement("div",{style:{width:y||g,display:"flex",gap:v}},I.map((e=[],r)=>i.createElement("div",{key:r,style:{display:"flex",flexDirection:"column",gap:v,width:y?"100%":P,marginTop:null==b?void 0:b[r]}},e.map(e=>i.createElement(Ae,{style:{aspectRatio:e.images.original.width/e.images.original.height},gif:e,tabIndex:_,key:e.id,width:P,percentWidth:y?"100%":void 0,onGifClick:s,onGifKeyPress:l,onGifSeen:a,onGifVisible:t,onGifRightClick:n,user:c,overlay:u,backgroundColor:w,hideAttribution:d,noLink:f,borderRadius:h,lazyLoad:!(null==k?void 0:k.includes(e.id))}))))),!S&&0===L.length&&p,$?i.createElement(Te,{onClick:this.onFetch}):S&&i.createElement(pe,{onVisibleChange:this.onLoaderVisible,config:E},i.createElement(Qe,{$isFirstLoad:O},i.createElement(x,{className:e.loaderClassName})))))}};et.className="giphy-grid",et.loaderClassName="loader",et.fetchDebounce=250,et.defaultProps=Xe,et.getDerivedStateFromProps=({externalGifs:e},t)=>e&&e!==t.gifs?{gifs:e}:null;var tt=et,nt="--searchbar-height",rt="--searchbar-bg-color",it="--searchbar-bg-color-2",ot="--searchbar-fg-color",at="--searchbar-cancel-button-display",st=(o.default.div`
    ${nt}: ${e=>e.$searchbarHeight||42}px;
    @media (${e=>e.$mobileMediaQuery}) {
        ${nt}: ${e=>e.$mobileSearchbarHeight||35}px;
    }
    ${rt}: ${u};
    ${it}: ${u};
    ${ot}: ${a};
    ${e=>e.$darkMode&&o.css`
            ${ot}: ${u};
            ${rt}: ${a};
            ${it}: ${l};
        `}
    ${at}: ${e=>e.$hideCancelButton?"none":"block"};
`,(0,i.createContext)({})),lt=(0,i.createContext)({}),ct=o.default.svg`
    position: relative;
    right: 10px;
    margin-left: 5px;
    cursor: pointer;
    display: var(${at});
`,ut=({width:e=17,height:t=17,setCleared:n})=>{const{term:r,setActiveChannel:o,activeChannel:a}=(0,i.useContext)(st);return r||a?i.createElement(ct,{className:ut.className,width:e,height:t,viewBox:"0 0 17 17",version:"1.1",xmlns:"http://www.w3.org/2000/svg",onClick:e=>{e.stopPropagation(),e.preventDefault(),n(!0),o(void 0)}},i.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",opacity:"0.582730817"},i.createElement("g",{transform:"translate(-300.000000, -150.000000)",fill:"#8E8E93",fillRule:"nonzero"},i.createElement("g",{transform:"translate(0.000000, 135.000000)"},i.createElement("g",null,i.createElement("g",null,i.createElement("g",{transform:"translate(11.000000, 13.000000)"},i.createElement("g",{transform:"translate(289.000000, 2.000000)"},i.createElement("path",{d:"M8.5,0 C3.805875,0 0,3.805875 0,8.5 C0,13.194125 3.805875,17 8.5,17 C13.194125,17 17,13.194125 17,8.5 C17,3.805875 13.194125,0 8.5,0 Z M9.50158333,8.5 C9.50158333,8.5 11.7250417,10.7234583 11.834125,10.8325417 C12.1110833,11.1095 12.1110833,11.557875 11.834125,11.834125 C11.5571667,12.1110833 11.1087917,12.1110833 10.8325417,11.834125 C10.7234583,11.72575 8.5,9.50158333 8.5,9.50158333 C8.5,9.50158333 6.27654167,11.7250417 6.16745833,11.834125 C5.8905,12.1110833 5.442125,12.1110833 5.165875,11.834125 C4.88891667,11.5571667 4.88891667,11.1087917 5.165875,10.8325417 C5.27425,10.7234583 7.49841667,8.5 7.49841667,8.5 C7.49841667,8.5 5.27495833,6.27654167 5.165875,6.16745833 C4.88891667,5.8905 4.88891667,5.442125 5.165875,5.165875 C5.44283333,4.88891667 5.89120833,4.88891667 6.16745833,5.165875 C6.27654167,5.27425 8.5,7.49841667 8.5,7.49841667 C8.5,7.49841667 10.7234583,5.27495833 10.8325417,5.165875 C11.1095,4.88891667 11.557875,4.88891667 11.834125,5.165875 C12.1110833,5.44283333 12.1110833,5.89120833 11.834125,6.16745833 C11.72575,6.27654167 9.50158333,8.5 9.50158333,8.5 Z",opacity:"0.75"}))))))))):null};ut.className="giphy-search-bar-cancel";var dt=ut,ft=`calc(var(${nt}) - 12px)`,ht=o.keyframes`
to {
    width: ${ft};
}
`,pt=(0,o.default)(J)`
    height: ${ft};
    margin: 0;
    width: 0;
    animation: ${ht} 100ms ease-in-out forwards;
`,mt=o.default.div`
    background: var(${it});
    display: flex;
    align-items: center;
    padding-left: ${6}px;
`,gt=o.default.div`
    background: ${"#ececec"};
    display: flex;
    padding: 0 4px;
    color: ${"#3e3e3e"};
    font-family: interface, Helvetica Neue, helvetica, sans-serif;
    font-weight: 600;
    font-size: 12px;
    align-items: center;
    height: ${ft};
    @media (max-width: 480px) {
        display: none;
    }
`,vt=({className:e=""})=>{const{activeChannel:t}=(0,i.useContext)(st);return t?i.createElement(mt,{className:e},i.createElement(pt,{user:t.user}),i.createElement(gt,{key:t.id},i.createElement("div",null,"@",t.user.username),t.user.is_verified&&i.createElement(te,{size:14}))):null},yt="#E646B6",bt="#FF6666",wt="cubic-bezier(0.920, 0.240, 0.185, 0.730)",Et=o.keyframes`
    0% {
      transform: rotate(34deg) translate(-10px, 80px);
    };
    
    100% {
      transform: rotate(34deg) translate(-10px, -20px);
    }
`,_t=o.keyframes`
    0% { 
      transform: translate(0px, 0px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(10px, -17px);
      opacity: 0;
    }
`,Ct=o.keyframes`
    0% {
      opacity: 0;
      transform: translateX(-400%);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(0);
    }
`,xt=o.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    @media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {
        display: none;
    }
    height: var(${nt});
    width: var(${nt});
`,kt=o.default.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(45deg, ${yt} 0%, ${bt} 100%);
    border-radius: 0 4px 4px 0;
    overflow: hidden;
    &:before {
        animation: ${Ct} ${"2s"} linear 0s infinite;
        background-image: linear-gradient(45deg, ${yt} 0%, ${bt} 50%, ${yt} 100%);
        background-size: 400%;
        background-position: 0% 100%;
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 400%;
    }
`,Lt=o.default.div`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    &::after {
        content: '+';
        color: white;
        font-family: 'SS Standard';
        font-size: 8px;
        position: absolute;
        top: 65%;
        left: 66%;
        animation: ${_t} 1s ${wt} 0s 1 forwards;
    }
`,$t=o.default.div`
    position: absolute;
    width: 200%;
    height: 20px;
    background: rgba(255, 255, 255, 0.5);
    transform: rotate(34deg) translate(-10px, -20px);
    animation: ${Et} 1s ${wt} 0s 1;
    filter: blur(1px);
`,At=(0,o.default)(({className:e=""})=>i.createElement("svg",{viewBox:"0 0 30 30",version:"1.1",className:e},i.createElement("defs",null,i.createElement("path",{d:"M11.5482521,20.4090671 L4.24727698,28.2009189 C3.68084207,28.8054377 2.73159653,28.8363108 2.12707771,28.2698759 C1.5225589,27.703441 1.4916858,26.7541954 2.0581207,26.1496766 L9.40599838,18.3077689 C7.95982241,16.4371424 7.0978836,14.0789715 7.0978836,11.5181818 C7.0978836,5.44914339 11.9392549,0.518181818 17.9252787,0.518181818 C23.9113026,0.518181818 28.7526738,5.44914339 28.7526738,11.5181818 C28.7526738,17.5872202 23.9113026,22.5181818 17.9252787,22.5181818 C15.539851,22.5181818 13.3361963,21.7351359 11.5482521,20.4090671 Z M17.9252787,19.5181818 C22.242011,19.5181818 25.7526738,15.9425536 25.7526738,11.5181818 C25.7526738,7.09381 22.242011,3.51818182 17.9252787,3.51818182 C13.6085464,3.51818182 10.0978836,7.09381 10.0978836,11.5181818 C10.0978836,15.9425536 13.6085464,19.5181818 17.9252787,19.5181818 Z",id:"giphy-search-icon-path-1"})),i.createElement("g",{id:"search",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.createElement("g",{id:"icons/search"},i.createElement("mask",{id:"giphy-search-icon-mask-2",fill:"white"},i.createElement("use",{xlinkHref:"#giphy-search-icon-path-1"})),i.createElement("use",{id:"Mask",fill:"#FFFFFF",fillRule:"nonzero",xlinkHref:"#giphy-search-icon-path-1"}),i.createElement("g",{mask:"url(#giphy-search-icon-mask-2)"},i.createElement("g",{transform:"translate(0.250000, 0.250000)"},i.createElement("g",null)))))))`
    z-index: 1;
    display: flex;
    width: 50%;
    height: 50%;
`,St=({onClick:e})=>{const{isFetching:t}=(0,i.useContext)(st),n=(0,M.A)(t,1e3);return i.createElement(xt,{onClick:()=>null==e?void 0:e()},i.createElement(kt,{suppressHydrationWarning:!0}),i.createElement(At,null),n&&i.createElement(Lt,{suppressHydrationWarning:!0},i.createElement($t,{suppressHydrationWarning:!0})))},Ot=o.default.div`
    display: flex;
    background: white;
    align-items: center;
    border-radius: 4px;
    height: var(${nt});
    background: var(${it});
`,Pt=o.default.input`
    background: inherit;
    box-sizing: border-box;
    border: 0;
    appearance: none;
    font-weight: normal;
    font-family: interface, Helvetica Neue, helvetica, sans-serif;
    outline: 0;
    font-size: 15px;
    padding: 0 10px;
    border-radius: 0;
    text-overflow: ellipsis;
    color: var(${ot});
    &::placeholder {
        color: ${c};
    }
    min-width: 150px;
    flex: 1;
    ${e=>e.$isUsernameSearch&&o.css`
            color: ${"#6157ff"};
        `}
`,It=({className:e,placeholder:t="Search GIPHY",clear:n=!1,autoFocus:r,searchDebounce:o=500,onEnter:a})=>{const{activeChannel:s,setActiveChannel:l,term:c,setChannels:u}=(0,i.useContext)(st),{setIsFocused:d,_inputValOverride:f,_setSearch:h}=(0,i.useContext)(lt),[p,m]=(0,i.useState)(c);(0,F.A)(()=>h(p),o,[p]);const g=(0,i.useRef)(null),v=function(e){const t=(0,i.useRef)(e);return(0,i.useEffect)(()=>{t.current=e}),t.current}(s),[y,b]=(0,i.useState)(n);return(0,i.useEffect)(()=>{var e;r&&(null==(e=g.current)||e.focus())},[r]),(0,i.useEffect)(()=>{var e;s&&!v&&(null==(e=g.current)||e.focus(),m(" "===p?"":p.replace(/@?\w*\s?/,"")))},[p,s,v]),(0,i.useEffect)(()=>{b(n)},[n]),(0,i.useEffect)(()=>{m(f)},[f,m]),i.createElement(Ot,{className:[It.className,e].join(" ")},i.createElement(vt,null),i.createElement(Pt,{$isUsernameSearch:0===c.indexOf("@"),onChange:({target:{value:e}})=>{y&&""===e||(b(!1),m(e))},onFocus:()=>{d(!0)},onBlur:()=>{d(!1)},value:y?"":p,placeholder:s?`Search ${s.display_name}`:t,autoCapitalize:"off",autoCorrect:"off",autoComplete:"off",ref:g,onKeyUp:e=>{switch(e.keyCode||e.key){case 27:case"Escape":l(void 0),u([]);break;case 13:case"Enter":null==a||a(p)}},onKeyDown:e=>{switch(e.keyCode||e.key){case 8:case"Backspace":""===p&&(l(void 0),u([]))}}}),i.createElement(dt,{setCleared:()=>m("")}),i.createElement(St,{onClick:()=>null==a?void 0:a(p)}))};It.className="giphy-search-bar";var Rt=o.default.div`
    background: ${s};
    display: flex;
    padding-right: 4px;
    align-items: center;
    margin-right: ${9}px;
    cursor: pointer;
`,jt=o.default.div`
    background: ${s};
    display: flex;
    padding: 14px;
    align-items: center;
    margin-right: ${9}px;
    white-space: nowrap;
    cursor: pointer;
    font-style: italic;
    border-radius: 20px;
`,Nt=(0,o.default)(J)`
    height: var(${nt});
    width: var(${nt});
`,Dt=(0,o.default)(({size:e=18,className:t})=>i.createElement("svg",{width:e,height:e,viewBox:"0 0 18 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:t},i.createElement("g",{id:"trending",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.createElement("g",null,i.createElement("rect",{id:"Rectangle",stroke:"#979797",fill:"#D8D8D8",opacity:"0",x:"0.5",y:"0.5",width:"17",height:"17"}),i.createElement("path",{d:"M12.6093329,3.12057664 L15.156896,3.12057664 L9.64199318,9.04253019 L6.88133868,6.8175119 C6.7544587,6.67603813 6.56616874,6.60087259 6.38404017,6.61897279 C6.2490402,6.63288422 6.11891631,6.69661171 6.02063992,6.79697337 C2.21226835,10.5943119 0.308082561,12.4929812 0.308082561,12.4929812 C0.308082561,12.4929812 0.527106106,12.8074292 0.710953088,13.0215425 C0.833517743,13.1642848 0.975497751,13.3098497 1.13689311,13.4582373 L6.47329888,8.13191205 L9.16381134,10.2953038 C9.40800276,10.5710787 9.68933701,10.7021044 10.019278,10.4570223 L16.0239805,4.04474473 C16.0239805,5.87956383 16.0239805,6.79697337 16.0239805,6.79697337 C16.0239805,6.79697337 16.4320205,6.79697337 17.2481004,6.79697337 L17.2481004,1.80604505 C14.1555887,1.80604505 12.6093329,1.80604505 12.6093329,1.80604505 C12.6093329,1.80604505 12.6093329,2.24422225 12.6093329,3.12057664 Z",id:"Shape",stroke:"#00CCFF",strokeWidth:"0.4",fill:"#00CCFF",fillRule:"nonzero",transform:"translate(8.778091, 7.632141) rotate(-2.000000) translate(-8.778091, -7.632141) "})))))`
    margin-right: 2px;
`,Tt=({channel:e})=>{const{setActiveChannel:t}=(0,i.useContext)(st);return i.createElement(Rt,{key:e.id,onClick:()=>t(e)},i.createElement(Nt,{user:e.user}),i.createElement("div",null,"@",e.user.username),e.user.is_verified&&i.createElement(te,{size:14}))},Ft=({trendingSearch:e})=>{const{setSearch:t}=(0,i.useContext)(st);return i.createElement(jt,{key:e,onClick:()=>t(e)},i.createElement(Dt,{size:16}),e)},Mt=o.default.div`
    display: flex;
    color: white;
    flex-direction: row;
    font-family: 'interface';
    font-weight: 600;
    font-size: 14px;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 10px;
    height: var(${nt});
`,Gt=()=>{const{trendingSearches:e,currentChannels:t}=(0,i.useContext)(st);return i.createElement(Mt,{className:Gt.className},t.length>0?t.map(e=>i.createElement(Tt,{key:e.id,channel:e})):e.map(e=>i.createElement(Ft,{key:e,trendingSearch:e})))};Gt.className="giphy-suggestion-bar";var Vt=({onClick:e})=>i.createElement("svg",{width:"66px",height:"13px",viewBox:"0 0 66 13",onClick:e},i.createElement("g",{stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},i.createElement("g",{transform:"translate(-1060.000000, -462.000000)",fill:"#FFFFFF",fillRule:"nonzero"},i.createElement("g",{transform:"translate(931.000000, 286.375671)"},i.createElement("g",{transform:"translate(86.000000, 136.124329)"},i.createElement("path",{d:"M47.968,49.1962322 C49.588,49.1962322 51.052,48.6202322 51.58,47.5522322 L51.58,43.8202322 L47.476,43.8202322 L47.476,45.6802322 L49.6,45.6802322 L49.6,46.7602322 C49.12,47.1082322 48.424,47.1922322 47.98,47.1922322 C46.288,47.1922322 45.724,45.8602322 45.724,44.7802322 C45.724,43.1362322 46.612,42.3202322 47.98,42.3202322 C48.544,42.3202322 49.288,42.4762322 49.9,43.0522322 L51.28,41.6842322 C50.176,40.5682322 49.144,40.3282322 47.98,40.3282322 C44.824,40.3282322 43.384,42.5842322 43.384,44.7802322 C43.384,46.9762322 44.644,49.1962322 47.968,49.1962322 Z M54.928,48.9682322 L54.928,40.5682322 L52.564,40.5682322 L52.564,48.9682322 L54.928,48.9682322 Z M58.648,48.9682322 L58.648,46.7002322 L60.352,46.7002322 C62.596,46.6762322 63.724,45.3442322 63.724,43.6282322 C63.724,41.9842322 62.608,40.5682322 60.352,40.5682322 L56.272,40.5682322 L56.272,48.9682322 L58.648,48.9682322 Z M60.352,44.6962322 L58.648,44.6962322 L58.648,42.6082322 L60.352,42.6082322 C61,42.6082322 61.348,43.1122322 61.348,43.6642322 C61.348,44.2162322 61.012,44.6962322 60.352,44.6962322 Z M66.796,48.9802322 L66.796,45.8002322 L69.82,45.8002322 L69.82,48.9802322 L72.172,48.9802322 L72.172,40.5802322 L69.82,40.5802322 L69.82,43.7722322 L66.796,43.7722322 L66.796,40.5802322 L64.42,40.5802322 L64.42,48.9802322 L66.796,48.9802322 Z M78.16,48.9682322 L78.16,45.6202322 L81.496,40.6762322 L81.496,40.5682322 L78.82,40.5682322 L77.008,43.4482322 L75.268,40.5682322 L72.592,40.5682322 L72.592,40.6642322 L75.784,45.6202322 L75.784,48.9682322 L78.16,48.9682322 Z M87.796,49.1362322 C88.972,49.1362322 90.088,48.7402322 90.952,47.8882322 L90.028,46.9642322 C89.44,47.5522322 88.576,47.8762322 87.796,47.8762322 C85.624,47.8762322 84.712,46.3522322 84.7,44.8162322 C84.688,43.2682322 85.66,41.6962322 87.796,41.6962322 C88.576,41.6962322 89.368,41.9722322 89.968,42.5602322 L90.868,41.6962322 C90.016,40.8442322 88.924,40.4242322 87.796,40.4242322 C84.796,40.4242322 83.356,42.6202322 83.3679256,44.8282322 C83.38,47.0362322 84.748,49.1362322 87.796,49.1362322 Z M93.028,48.9682322 L93.028,40.5802322 L91.792,40.5802322 L91.792,48.9682322 L93.028,48.9682322 Z M94.252,41.3122322 C94.252,42.3322322 95.788,42.3322322 95.788,41.3122322 C95.788,40.3042322 94.252,40.3042322 94.252,41.3122322 Z M95.632,48.9682322 L95.632,43.0282322 L94.396,43.0282322 L94.396,48.9682322 L95.632,48.9682322 Z M98.188,51.7162322 L98.188,48.1042322 C98.632,48.8362322 99.556,49.1002322 100.276,49.1002322 C102.112,49.1002322 103.264,47.8042322 103.264,46.0162322 C103.264,44.2282322 102.04,42.9442322 100.276,42.9322322 C99.484,42.9322322 98.644,43.2922322 98.188,44.0122322 L98.116,43.0522322 L96.952,43.0522322 L96.952,51.7162322 L98.188,51.7162322 Z M100.156,47.9002322 C99.076,47.9002322 98.296,47.0722322 98.296,46.0162322 C98.296,44.9602322 99.016,44.1322322 100.156,44.1322322 C101.284,44.1322322 102.028,44.9002322 102.028,46.0162322 C102.028,47.1202322 101.236,47.9002322 100.156,47.9002322 Z M106.456,49.1482322 C107.992,49.1482322 108.964,48.3802322 108.976,47.2762322 C108.988,45.7522322 107.56,45.5122322 106.468,45.4162322 C105.712,45.3442322 105.196,45.1522322 105.184,44.6602322 C105.184,44.1922322 105.688,43.9402322 106.444,43.9522322 C107.032,43.9522322 107.536,44.0722322 108.004,44.5042322 L108.7,43.6882322 C108.04,43.1002322 107.332,42.8962322 106.42,42.8962322 C105.316,42.8962322 103.96,43.3882322 103.96,44.6962322 C103.972,46.0042322 105.256,46.3642322 106.372,46.4722322 C107.248,46.5562322 107.752,46.7602322 107.74,47.2882322 C107.728,47.8402322 107.068,48.0562322 106.48,48.0562322 C105.784,48.0442322 104.956,47.7922322 104.404,47.1802322 L103.756,48.0562322 C104.536,48.9322322 105.496,49.1482322 106.456,49.1482322 Z",id:"GIPHYClips"})))))),Ht=o.default.div`
    display: flex;
    align-items: center;
    font-family: interface, helvetica, arial;
    cursor: pointer;
`,zt=(0,o.default)(J)`
    flex-shrink: 0;
`,Ut=o.default.div`
    display: flex;
    flex-direction: column;
`,Bt=({gif:e,className:t,onClick:n})=>{const{user:r}=e;return(null==r?void 0:r.username)||(null==r?void 0:r.display_name)?i.createElement(Ht,{className:[Bt.className,t].join(" "),onClick:t=>{if(t.preventDefault(),t.stopPropagation(),n)n(e);else{const e=r.profile_url;e&&window.open(e,"_blank")}}},i.createElement(zt,{user:r}),i.createElement(Ut,null,i.createElement(Vt,{onClick:t=>{t.preventDefault(),t.stopPropagation(),n?n(e):e.url&&window.open(e.url,"_blank")}}),i.createElement(oe,{user:r}))):null};Bt.className="giphy-attribution";var Wt=Bt,Kt=({size:e=25,onClick:t=()=>{}})=>i.createElement("svg",{width:e,height:e,viewBox:"0 0 26 23",onClick:t},i.createElement("g",{stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},i.createElement("g",{transform:"translate(1.000000, 0.000000)",fill:"#FFF",fillRule:"nonzero"},i.createElement("path",{d:"M11.9625091,0.572584405 L11.9625091,22.2272644 C11.9625091,22.4856644 11.8466091,22.6635044 11.6151891,22.7611644 C11.3480491,22.8413444 11.1390491,22.7968844 10.9878091,22.6277844 L4.8732291,15.9143244 L0.573909096,15.9143244 C0.413549096,15.9143244 0.277509096,15.8588444 0.166549096,15.7475044 C0.0573082348,15.6406091 -0.00292164572,15.4933347 -1.77635684e-15,15.3405244 L-1.77635684e-15,7.45058441 C-1.77635684e-15,7.29022441 0.0555890961,7.15456441 0.167309096,7.04322441 C0.278269096,6.93226441 0.414309096,6.87640441 0.573909096,6.87640441 L4.8732291,6.87640441 L10.9874291,0.172064405 C11.1390491,0.00296440549 11.3484291,-0.0414955945 11.6151891,0.0386844055 C11.8466091,0.136344405 11.9621291,0.314564405 11.9621291,0.572584405 L11.9625091,0.572584405 Z"}),i.createElement("path",{d:"M15.7579491,16.0914044 L14.6798891,13.6594044 C15.5739159,13.2635547 16.1503537,12.3776671 16.1501091,11.3999244 C16.150386,10.4242626 15.5763999,9.53983269 14.6852091,9.14272441 L15.7697291,6.71376441 C17.6193585,7.53872062 18.810518,9.37466359 18.8101092,11.3999244 C18.8105521,13.4298903 17.6139475,15.2691931 15.7579491,16.0914044 L15.7579491,16.0914044 Z"}),i.createElement("path",{d:"M18.3647491,20.2619044 L17.2863091,17.8299044 C19.8302925,16.7031661 21.4705725,14.1822599 21.4701091,11.3999244 C21.4701091,8.59818441 19.8167291,6.09892441 17.3022691,4.97678441 L18.3864091,2.54782441 C21.8804724,4.10607079 24.1307363,7.57414217 24.1301093,11.3999244 C24.1308375,15.2343934 21.8705556,18.7086904 18.3647491,20.2619044 Z"})))),Zt=({size:e=25,onClick:t=()=>{}})=>i.createElement("svg",{onClick:t,height:e,width:e,viewBox:"0 0 26 23",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},i.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},i.createElement("g",{id:"Group",transform:"translate(1.000000, 0.000000)",fill:"#FFFFFF",fillRule:"nonzero"},i.createElement("path",{d:"M11.9625091,0.572584405 L11.9625091,22.2272644 C11.9625091,22.4856644 11.8466091,22.6635044 11.6151891,22.7611644 C11.3480491,22.8413444 11.1390491,22.7968844 10.9878091,22.6277844 L4.8732291,15.9143244 L0.573909096,15.9143244 C0.413549096,15.9143244 0.277509096,15.8588444 0.166549096,15.7475044 C0.0573082348,15.6406091 -0.00292164572,15.4933347 0,15.3405244 L0,7.45058441 C0,7.29022441 0.0555890961,7.15456441 0.167309096,7.04322441 C0.278269096,6.93226441 0.414309096,6.87640441 0.573909096,6.87640441 L4.8732291,6.87640441 L10.9874291,0.172064405 C11.1390491,0.00296440549 11.3484291,-0.0414955945 11.6151891,0.0386844055 C11.8466091,0.136344405 11.9621291,0.314564405 11.9621291,0.572584405 L11.9625091,0.572584405 Z",id:"Path"})),i.createElement("g",{id:"Group",transform:"translate(14.887009, 6.947630)",fill:"#FFFFFF",fillRule:"nonzero"},i.createElement("path",{d:"M7.88199149,6.27905236 C7.94693088,6.35707599 7.94693088,6.47033309 7.88199149,6.54835671 L6.54835671,7.88199149 C6.47033309,7.94693088 6.35707599,7.94693088 6.27905236,7.88199149 L3.96534802,5.56828715 L1.65164367,7.88199149 C1.57362004,7.94693088 1.46036294,7.94693088 1.38233932,7.88199149 L0.0487045381,6.54835671 C-0.016234846,6.47033309 -0.016234846,6.35707599 0.0487045381,6.27905236 L2.36240889,3.96534802 L0.0487045381,1.65164367 C-0.016234846,1.57362004 -0.016234846,1.46036294 0.0487045381,1.38233932 L1.38233932,0.0487045381 C1.46036294,-0.016234846 1.57362004,-0.016234846 1.65164367,0.0487045381 L3.96534802,2.36240889 L6.27905236,0.0487045381 C6.35707599,-0.016234846 6.47033309,-0.016234846 6.54835671,0.0487045381 L7.88199149,1.38233932 C7.94693088,1.46036294 7.94693088,1.57362004 7.88199149,1.65164367 L5.56828715,3.96534802 L7.88199149,6.27905236 Z",id:"Shape"})))),qt=o.default.div`
    background: ${u};
    height: ${e=>e.$barHeight}px;
    position: absolute;
    width: 5px;
    bottom: 0;
    left: 0;
    opacity: 0.95;
`,Qt=({videoEl:e})=>{(0,V.A)(2147483647,100);const t=(null==e?void 0:e.currentTime)||0,n=(null==e?void 0:e.duration)||0,r=t/n;let o=Math.round(100*r),a=5;return(null==e?void 0:e.height)<200?a=3:(null==e?void 0:e.height)<300&&(a=4),o=n<10&&o>98?100:o,i.createElement(qt,{style:{width:`${o}%`},$barHeight:a,className:"hide-in-percy"})},Yt=[.25,.5,.75],Xt="giphy-video",Jt=({muted:e,ccEnabled:t=!1,ccLanguage:n="en",loop:o=!0,onStateChange:a,onTimeUpdate:s,onCanPlay:l,onFirstPlay:c,onWaiting:u,onMuted:d,onError:f,onEnded:h,onLoop:p,onQuartile:m,onEndFullscreen:g,setVideoEl:v,gif:y,width:b,percentWidth:w,height:E,volume:_=.7,className:C=Xt,isInPlayer:x})=>{var k,L,$;const A=E||(0,r._2)(y,b);let S;w&&(S=`${Math.round(A/b*100)}%`);const[O,P]=(0,i.useState)((0,r.sr)(y.video,b,A)),I=(0,i.useRef)(0);O||console.warn(`GiphyJS No video content for id: ${y.id}`);const R=(0,i.useRef)(Date.now()),j=(0,i.useRef)(!1),D=(0,i.useRef)(0),T=(0,i.useRef)(0),F=(0,i.useRef)(new Set);(0,i.useEffect)(()=>{R.current=Date.now(),j.current=!1,D.current=1,T.current=0,F.current=new Set},[y.id]);const M=(0,i.useRef)(null);(0,i.useEffect)(()=>{const e=(0,r.sr)(y.video,b,A);M.current&&(null==O?void 0:O.url)&&e.url!==O.url&&(-1!==O.url.indexOf(String(y.id))&&(I.current=M.current.currentTime),P(e))},[b,E,y.video,A,null==O?void 0:O.url,y.id]),(0,i.useEffect)(()=>{M.current&&(null==O?void 0:O.url)&&I.current&&(M.current.currentTime=I.current,I.current=0)},[null==O?void 0:O.url,I]);const G=(0,i.useCallback)(()=>{var e;const t=M.current,n=null==(e=null==t?void 0:t.error)?void 0:e.code;if(n&&(null==t?void 0:t.src)){const e=((e,t="")=>{switch(e){case 1:return"Aborted. The fetching process for the media resource was aborted by the user agent at the user's request.";case 2:return"Network Error. A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";case 3:return"Decode Error. An error of some description occurred while decoding the media resource, after the resource was established to be usable.";case 4:return`Can not play a video of type "${t.split(".").pop()}" on this platform.`;default:return""}})(n,null==t?void 0:t.src);console.error(e),null==f||f(n)}},[f]),V=(0,i.useCallback)(()=>{null==a||a("playing"),j.current||(j.current=!0,y.analytics_response_payload&&N({actionType:"START",analyticsResponsePayload:y.analytics_response_payload}),null==c||c(Date.now()-R.current))},[c,a,y]),H=(0,i.useCallback)(()=>null==a?void 0:a("paused"),[a]),z=(0,i.useCallback)(()=>{const e=M.current;if(e){const t=e.currentTime;Yt.some(n=>!!((e,t,n,r,i)=>{const o=i+e;return!r.has(o)&&n>0&&t>n*e&&(r.add(o),!0)})(n,t,e.duration,F.current,D.current)&&(null==m||m(n),!0)),null==s||s(t||0)}},[m,s]),U=(0,i.useCallback)(()=>null==l?void 0:l(),[l]),B=(0,i.useCallback)(()=>{const e=M.current;0!==(null==e?void 0:e.currentTime)&&1!==(null==e?void 0:e.networkState)&&(null==u||u(++T.current))},[u]),W=(0,i.useCallback)(()=>{o&&M.current&&M.current.play(),null==p||p(D.current),D.current=D.current+1,j.current&&(null==h||h())},[h,o,p]),K=(0,i.useCallback)(()=>null==g?void 0:g(),[g]),Z=(0,i.useCallback)(e=>Y(void 0,null,function*(){if(e){const t=e.play();if(void 0!==t)try{yield t,null==d||d(!1)}catch(t){e.muted=!0,null==d||d(!0),e.play()}}}),[d]);(0,i.useEffect)(()=>{const e=M.current;e&&(Z(e),null==v||v(e),isNaN(_)||(e.volume=_))},[]),(0,i.useEffect)(()=>{const e=M.current;return e&&(e.addEventListener("play",V),e.addEventListener("pause",H),e.addEventListener("error",G),e.addEventListener("timeupdate",z),e.addEventListener("canplay",U),e.addEventListener("ended",W),e.addEventListener("waiting",B),e.addEventListener("webkitendfullscreen",K)),()=>{e&&(e.removeEventListener("play",V),e.removeEventListener("pause",H),e.removeEventListener("error",G),e.removeEventListener("timeupdate",z),e.removeEventListener("canplay",U),e.removeEventListener("ended",W),e.removeEventListener("waiting",B),e.removeEventListener("webkitendfullscreen",K))}},[V,H,G,z,U,W,B,K]);const q=null==($=null==(L=null==(k=y.video)?void 0:k.captions)?void 0:L[n])?void 0:$.vtt;return(null==O?void 0:O.url)?i.createElement("video",{crossOrigin:"anonymous",draggable:!0,className:C,width:x?"100%":w||b,height:x?"100%":S||A,muted:e,autoPlay:!0,playsInline:!0,ref:M,src:null==O?void 0:O.url,"data-giphy-id":y.id},t&&q&&i.createElement("track",{label:"English",kind:"subtitles",srcLang:n,src:q,default:!0})):null};Jt.className=Xt;var en=Jt,tn=o.default.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    font-family: interface, helvetica, arial;
    -webkit-font-smoothing: antialiased;
`,nn=o.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
`,rn=o.default.div`
    position: absolute;
    top: 10px;
    right: 10px;
    left: 10px;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    opacity: ${e=>e.$isHovered?1:0};
    transition: opacity ease-out 250ms;
    align-items: flex-start;
`,on=o.default.div`
    font-size: 22px;
    color: white;
    margin-bottom: 5px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
`,an=o.default.div`
    position: relative;
    min-width: 0;
`,sn=o.default.div`
    &:before {
        background: linear-gradient(rgba(18, 18, 18, 0.6), rgba(0, 0, 0, 0));
        content: '';
        height: ${e=>e.$isLargePlayer?125:75}px;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 100%;
    }
    &:after {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(18, 18, 18, 0.6));
        content: '';
        height: ${e=>e.$isLargePlayer?125:75}px;
        left: 0;
        pointer-events: none;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`,ln=e=>{const{style:t,width:n,percentWidth:o,hideMute:a,hideAttribution:s,hideProgressBar:l,hideTitle:c,className:u,persistentControls:d,gif:f,overlay:h}=e,[p,m]=(0,i.useState)(!1),[g,v]=(0,i.useState)(null),[y,b]=(0,i.useState)(e.muted),[w,E]=(0,i.useState)(!1),{setVideoEl:_,onMuted:C,onUserMuted:x}=e,k=e.height||(0,r._2)(f,n);let L;o&&(L=`${Math.round(k/n*100)}%`);const[,$,A]=(0,G.default)(()=>{m(!1)},4e3),S=(0,i.useCallback)(e=>{null==C||C(e),E(e)},[E,C]),O=(0,i.useCallback)(e=>{null==_||_(e),v(e)},[_,v]);(0,i.useEffect)(()=>{b(e.muted)},[e.muted]);const P=d||p,I=k>=300;return(0,i.useEffect)(()=>(P?A():$(),()=>$()),[P,$,A]),i.createElement(tn,{className:u,style:q({width:o||n,height:L||k},t),onMouseOver:()=>m(!0),onMouseLeave:()=>m(!1),onMouseMove:()=>{m(!0),A()},onClick:e=>{null==x||x(!(y||w)),null==g||g.play(),e.preventDefault(),w?(E(!1),b(!1)):b(!y)}},i.createElement(en,Q(q({},e),{isInPlayer:!0,onMuted:S,setVideoEl:O,muted:y})),P&&i.createElement(sn,{$isLargePlayer:I}),i.createElement(rn,{$isHovered:P},i.createElement(an,null,!c&&I&&i.createElement(on,{onClick:e=>{e.preventDefault(),e.stopPropagation(),window.open(f.url,"_blank")}},f.title),g&&!s?i.createElement(Wt,{gif:f}):null),!a&&i.createElement(nn,null,y||w?i.createElement(Zt,null):i.createElement(Kt,null))),P&&!l&&g?i.createElement(Qt,{videoEl:g}):null,h&&i.createElement(h,{gif:f,isHovered:p,width:n,height:k}))};o.default.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;
`,(0,o.default)(e=>(e.overlay&&!e.controls&&console.warn(`${r.Vy.PREFIX}: Overlays only work when controls are enabled`),e.controls?i.createElement(ln,q({},e)):i.createElement(en,q({},e))))`
    height: 100%;
    display: inline-block;
    object-fit: fill;
    pointer-events: none;
    background: rgb(0, 0, 0, 0);
`,o.default.div`
    position: absolute;
    top: 6px;
    right: 6px;
    cursor: pointer;
    opacity: ${e=>e.$isHovered?1:.8};
    transition: opacity ease-out 800ms;
`;(0,r.SU)("X-GIPHY-SDK-NAME","ReactSDK")},91315(){!function(){"use strict";if("object"==typeof window)if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var e=function(){for(var e=window.document,t=i(e);t;)t=i(e=t.ownerDocument);return e}(),t=[],n=null,r=null;a.prototype.THROTTLE_TIMEOUT=100,a.prototype.POLL_INTERVAL=null,a.prototype.USE_MUTATION_OBSERVER=!0,a._setupCrossOriginUpdater=function(){return n||(n=function(e,n){r=e&&n?f(e,n):{top:0,bottom:0,left:0,right:0,width:0,height:0},t.forEach(function(e){e._checkForIntersections()})}),n},a._resetCrossOriginUpdater=function(){n=null,r=null},a.prototype.observe=function(e){if(!this._observationTargets.some(function(t){return t.element==e})){if(!e||1!=e.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:e,entry:null}),this._monitorIntersections(e.ownerDocument),this._checkForIntersections()}},a.prototype.unobserve=function(e){this._observationTargets=this._observationTargets.filter(function(t){return t.element!=e}),this._unmonitorIntersections(e.ownerDocument),0==this._observationTargets.length&&this._unregisterInstance()},a.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},a.prototype.takeRecords=function(){var e=this._queuedEntries.slice();return this._queuedEntries=[],e},a.prototype._initThresholds=function(e){var t=e||[0];return Array.isArray(t)||(t=[t]),t.sort().filter(function(e,t,n){if("number"!=typeof e||isNaN(e)||e<0||e>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return e!==n[t-1]})},a.prototype._parseRootMargin=function(e){var t=(e||"0px").split(/\s+/).map(function(e){var t=/^(-?\d*\.?\d+)(px|%)$/.exec(e);if(!t)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(t[1]),unit:t[2]}});return t[1]=t[1]||t[0],t[2]=t[2]||t[0],t[3]=t[3]||t[1],t},a.prototype._monitorIntersections=function(t){var n=t.defaultView;if(n&&-1==this._monitoringDocuments.indexOf(t)){var r=this._checkForIntersections,o=null,a=null;this.POLL_INTERVAL?o=n.setInterval(r,this.POLL_INTERVAL):(s(n,"resize",r,!0),s(t,"scroll",r,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in n&&(a=new n.MutationObserver(r)).observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this._monitoringDocuments.push(t),this._monitoringUnsubscribes.push(function(){var e=t.defaultView;e&&(o&&e.clearInterval(o),l(e,"resize",r,!0)),l(t,"scroll",r,!0),a&&a.disconnect()});var c=this.root&&(this.root.ownerDocument||this.root)||e;if(t!=c){var u=i(t);u&&this._monitorIntersections(u.ownerDocument)}}},a.prototype._unmonitorIntersections=function(t){var n=this._monitoringDocuments.indexOf(t);if(-1!=n){var r=this.root&&(this.root.ownerDocument||this.root)||e,o=this._observationTargets.some(function(e){var n=e.element.ownerDocument;if(n==t)return!0;for(;n&&n!=r;){var o=i(n);if((n=o&&o.ownerDocument)==t)return!0}return!1});if(!o){var a=this._monitoringUnsubscribes[n];if(this._monitoringDocuments.splice(n,1),this._monitoringUnsubscribes.splice(n,1),a(),t!=r){var s=i(t);s&&this._unmonitorIntersections(s.ownerDocument)}}}},a.prototype._unmonitorAllIntersections=function(){var e=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var t=0;t<e.length;t++)e[t]()},a.prototype._checkForIntersections=function(){if(this.root||!n||r){var e=this._rootIsInDom(),t=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(r){var i=r.element,a=u(i),s=this._rootContainsTarget(i),l=r.entry,c=e&&s&&this._computeTargetAndRootIntersection(i,a,t),d=null;this._rootContainsTarget(i)?n&&!this.root||(d=t):d={top:0,bottom:0,left:0,right:0,width:0,height:0};var f=r.entry=new o({time:window.performance&&performance.now&&performance.now(),target:i,boundingClientRect:a,rootBounds:d,intersectionRect:c});l?e&&s?this._hasCrossedThreshold(l,f)&&this._queuedEntries.push(f):l&&l.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},a.prototype._computeTargetAndRootIntersection=function(t,i,o){if("none"!=window.getComputedStyle(t).display){for(var a=i,s=p(t),l=!1;!l&&s;){var d=null,h=1==s.nodeType?window.getComputedStyle(s):{};if("none"==h.display)return null;if(s==this.root||9==s.nodeType)if(l=!0,s==this.root||s==e)n&&!this.root?!r||0==r.width&&0==r.height?(s=null,d=null,a=null):d=r:d=o;else{var m=p(s),g=m&&u(m),v=m&&this._computeTargetAndRootIntersection(m,g,o);g&&v?(s=m,d=f(g,v)):(s=null,a=null)}else{var y=s.ownerDocument;s!=y.body&&s!=y.documentElement&&"visible"!=h.overflow&&(d=u(s))}if(d&&(a=c(d,a)),!a)break;s=s&&p(s)}return a}},a.prototype._getRootRect=function(){var t;if(this.root&&!m(this.root))t=u(this.root);else{var n=m(this.root)?this.root:e,r=n.documentElement,i=n.body;t={top:0,left:0,right:r.clientWidth||i.clientWidth,width:r.clientWidth||i.clientWidth,bottom:r.clientHeight||i.clientHeight,height:r.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(t)},a.prototype._expandRectByRootMargin=function(e){var t=this._rootMarginValues.map(function(t,n){return"px"==t.unit?t.value:t.value*(n%2?e.width:e.height)/100}),n={top:e.top-t[0],right:e.right+t[1],bottom:e.bottom+t[2],left:e.left-t[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},a.prototype._hasCrossedThreshold=function(e,t){var n=e&&e.isIntersecting?e.intersectionRatio||0:-1,r=t.isIntersecting?t.intersectionRatio||0:-1;if(n!==r)for(var i=0;i<this.thresholds.length;i++){var o=this.thresholds[i];if(o==n||o==r||o<n!=o<r)return!0}},a.prototype._rootIsInDom=function(){return!this.root||h(e,this.root)},a.prototype._rootContainsTarget=function(t){var n=this.root&&(this.root.ownerDocument||this.root)||e;return h(n,t)&&(!this.root||n==t.ownerDocument)},a.prototype._registerInstance=function(){t.indexOf(this)<0&&t.push(this)},a.prototype._unregisterInstance=function(){var e=t.indexOf(this);-1!=e&&t.splice(e,1)},window.IntersectionObserver=a,window.IntersectionObserverEntry=o}function i(e){try{return e.defaultView&&e.defaultView.frameElement||null}catch(e){return null}}function o(e){this.time=e.time,this.target=e.target,this.rootBounds=d(e.rootBounds),this.boundingClientRect=d(e.boundingClientRect),this.intersectionRect=d(e.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0}),this.isIntersecting=!!e.intersectionRect;var t=this.boundingClientRect,n=t.width*t.height,r=this.intersectionRect,i=r.width*r.height;this.intersectionRatio=n?Number((i/n).toFixed(4)):this.isIntersecting?1:0}function a(e,t){var n,r,i,o=t||{};if("function"!=typeof e)throw new Error("callback must be a function");if(o.root&&1!=o.root.nodeType&&9!=o.root.nodeType)throw new Error("root must be a Document or Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),r=this.THROTTLE_TIMEOUT,i=null,function(){i||(i=setTimeout(function(){n(),i=null},r))}),this._callback=e,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(o.rootMargin),this.thresholds=this._initThresholds(o.threshold),this.root=o.root||null,this.rootMargin=this._rootMarginValues.map(function(e){return e.value+e.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}function s(e,t,n,r){"function"==typeof e.addEventListener?e.addEventListener(t,n,r||!1):"function"==typeof e.attachEvent&&e.attachEvent("on"+t,n)}function l(e,t,n,r){"function"==typeof e.removeEventListener?e.removeEventListener(t,n,r||!1):"function"==typeof e.detachEvent&&e.detachEvent("on"+t,n)}function c(e,t){var n=Math.max(e.top,t.top),r=Math.min(e.bottom,t.bottom),i=Math.max(e.left,t.left),o=Math.min(e.right,t.right),a=o-i,s=r-n;return a>=0&&s>=0&&{top:n,bottom:r,left:i,right:o,width:a,height:s}||null}function u(e){var t;try{t=e.getBoundingClientRect()}catch(e){}return t?(t.width&&t.height||(t={top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.right-t.left,height:t.bottom-t.top}),t):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function d(e){return!e||"x"in e?e:{top:e.top,y:e.top,bottom:e.bottom,left:e.left,x:e.left,right:e.right,width:e.width,height:e.height}}function f(e,t){var n=t.top-e.top,r=t.left-e.left;return{top:n,left:r,height:t.height,width:t.width,bottom:n+t.height,right:r+t.width}}function h(e,t){for(var n=t;n;){if(n==e)return!0;n=p(n)}return!1}function p(t){var n=t.parentNode;return 9==t.nodeType&&t!=e?i(t):(n&&n.assignedSlot&&(n=n.assignedSlot.parentNode),n&&11==n.nodeType&&n.host?n.host:n)}function m(e){return e&&9===e.nodeType}}()},55183(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isNavigator=t.isBrowser=t.off=t.on=t.noop=void 0,t.noop=function(){},t.on=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.addEventListener&&e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)},t.isBrowser="undefined"!=typeof window,t.isNavigator="undefined"!=typeof navigator},70897(e,t,n){"use strict";var r=n(34629),i=n(36418),o=r.__importDefault(n(71960));t.A=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n={loading:!1});var a=i.useRef(0),s=o.default(),l=i.useState(n),c=l[0],u=l[1],d=i.useCallback(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=++a.current;return c.loading||u(function(e){return r.__assign(r.__assign({},e),{loading:!0})}),e.apply(void 0,t).then(function(e){return s()&&i===a.current&&u({value:e,loading:!1}),e},function(e){return s()&&i===a.current&&u({error:e,loading:!1}),e})},t);return[c,d]}},4386(e,t,n){"use strict";var r=n(34629),i=n(36418),o=r.__importDefault(n(55690));t.A=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=[]);var r=o.default(e,t),a=r[0],s=r[1],l=r[2];return i.useEffect(l,n),[a,s]}},93665(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(36418);t.default=function(e){r.useEffect(e,[])}},59011(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(36418),i=n(55183).isBrowser?r.useLayoutEffect:r.useEffect;t.default=i},55814(e,t,n){"use strict";var r=n(36418);t.A=function(e){var t=r.useRef(e);return t.current=e,t}},71960(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(36418);t.default=function(){var e=r.useRef(!1),t=r.useCallback(function(){return e.current},[]);return r.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),t}},42016(e,t,n){"use strict";var r=n(34629),i=n(36418),o=r.__importDefault(n(59011));t.A=function(e,t){void 0===e&&(e=1e12),void 0===t&&(t=0);var n=i.useState(0),r=n[0],a=n[1];return o.default(function(){var n,r,i,o=function(){var t=Math.min(1,(Date.now()-i)/e);a(t),s()},s=function(){n=requestAnimationFrame(o)},l=setTimeout(function(){r=setTimeout(function(){cancelAnimationFrame(n),a(1)},e),i=Date.now(),s()},t);return function(){clearTimeout(r),clearTimeout(l),cancelAnimationFrame(n)}},[e,t]),r}},75349(e,t,n){"use strict";var r=n(34629),i=n(36418),o=r.__importDefault(n(85413));t.A=function(e,t){void 0===t&&(t=200);var n=i.useState(e),r=n[0],a=n[1],s=i.useRef(),l=i.useRef(null),c=i.useRef(0);return i.useEffect(function(){if(s.current)l.current=e,c.current=!0;else{a(e);var n=function(){c.current?(c.current=!1,a(l.current),s.current=setTimeout(n,t)):s.current=void 0};s.current=setTimeout(n,t)}},[e]),o.default(function(){s.current&&clearTimeout(s.current)}),r}},55690(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(36418);t.default=function(e,t){void 0===t&&(t=0);var n=r.useRef(!1),i=r.useRef(),o=r.useRef(e),a=r.useCallback(function(){return n.current},[]),s=r.useCallback(function(){n.current=!1,i.current&&clearTimeout(i.current),i.current=setTimeout(function(){n.current=!0,o.current()},t)},[t]),l=r.useCallback(function(){n.current=null,i.current&&clearTimeout(i.current)},[]);return r.useEffect(function(){o.current=e},[e]),r.useEffect(function(){return s(),l},[t]),[a,l,s]}},85413(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(34629),i=n(36418),o=r.__importDefault(n(93665));t.default=function(e){var t=i.useRef(e);t.current=e,o.default(function(){return function(){return t.current()}})}},53442(e,t,n){"use strict";n.d(t,{Oo:()=>T,uK:()=>N});var r,i,o,a=n(13299),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&p(e,n,t[n]);if(d)for(var n of d(t))h.call(t,n)&&p(e,n,t[n]);return e},g=(e,t)=>l(e,c(t)),v=(e=>"undefined"!=typeof require?require:"undefined"!=typeof Proxy?new Proxy(e,{get:(e,t)=>("undefined"!=typeof require?require:e)[t]}):e)(function(e){if("undefined"!=typeof require)return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),y=(e,t,n)=>new Promise((r,i)=>{var o=e=>{try{s(n.next(e))}catch(e){i(e)}},a=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,a);s((n=n.apply(e,t)).next())}),b=(r={"package.json"(e,t){t.exports={scripts:{lint:"run -T eslint . --ext .ts,.tsx",clean:"rm -rf ./dist",dev:"parcel public/test.html",docs:"typedoc src/index.ts",build:"run -T tsup src/index.ts --format cjs,esm --dts && run -T publint",prepublish:"npm run clean && npm run build",test:"run -T jest --config ./jestconfig.js","test:watch":"run -T jest --config ./jestconfig.js --watchAll"},name:"@giphy/js-fetch-api",version:"5.7.0",description:"Javascript API to fetch gifs and stickers from the GIPHY API.",homepage:"https://github.com/Giphy/giphy-js/tree/master/packages/fetch-api",main:"dist/index.cjs",types:"dist/index.d.ts",module:"dist/index.js",type:"module",sideEffects:!1,exports:{".":{types:"./dist/index.d.ts",import:"./dist/index.js",require:"./dist/index.cjs"},"./package.json":"./package.json"},files:["dist/","src/**/*"],license:"MIT",publishConfig:{access:"public"},dependencies:{"@giphy/js-types":"*","@giphy/js-util":"*"},devDependencies:{"jest-fetch-mock":"^3.0.3","parcel-bundler":"latest",typedoc:"^0.20.37","typedoc-thunder-theme":"^0.0.3",typescript:"^5.0.4"}}}},function(){return i||(0,r[u(r)[0]])((i={exports:{}}).exports,i),i.exports}),w=["is_anonymous","is_community","is_featured","is_hidden","is_indexable","is_preserve_size","is_realtime","is_removed","is_sticker","is_dynamic"],E=["suppress_chrome","is_public","is_verified"],_=e=>t=>e[t]=!!e[t],C=e=>"string"==typeof e?e:e.text,x=(e,t="")=>{const n=m({},e);n.id=String(n.id),n.tags=(n.tags||[]).map(C),n.bottle_data||(n.bottle_data={}),n.response_id=t,w.forEach(_(n)),Object.keys(n.images||{}).forEach(e=>{const t=n.images[e];t.width=parseInt(t.width),t.height=parseInt(t.height)});const{user:r}=n;if(r){const e=m({},r);E.forEach(_(e)),n.user=e}return n},k=e=>{const{response_id:t}=e.meta;return e.data=x(e.data,t),e},L=e=>{const{response_id:t}=e.meta;return e.data=e.data.map(e=>x(e,t)),e},$=(("undefined"!=typeof window?window:n.g)||{}).GIPHY_API_URL||"https://api.giphy.com/v1/",A=class extends Error{constructor(e,t,n=0,r=""){super(e),this.url=t,this.status=n,this.statusText=r}},S=class extends A{},O=A,P=e=>e,I={},R=function(e,t={}){const{apiVersion:n=1,noCache:r=!1,normalizer:i=P}=t,o=$.replace(/\/v\d+\/$/,`/v${n}/`);if((()=>{const e=Date.now();Object.keys(I).forEach(t=>{const n=I[t].isError?6e3:6e4;e-I[t].ts>=n&&delete I[t]})})(),!I[e]||r){const t=`${o}${e}`,n=()=>y(this,null,function*(){var n,r;let o;try{const a=yield fetch(t,{method:"get"});if(a.ok){const e=yield a.json();if(null==(n=e.meta)?void 0:n.response_id)return i(e);throw{message:"synthetic response"}}{let n="Error fetching";try{const e=yield a.json();e.message&&(n=e.message),(null==(r=e.meta)?void 0:r.msg)&&(n=e.meta.msg)}catch(e){}I[e]&&(I[e].isError=!0);let i=O;"This content is not available in your location"===n&&(i=S),o=new i(`@giphy/js-fetch-api: ${n}`,t,a.status,a.statusText)}}catch(n){o=new O(n.message,t),I[e]&&(I[e].isError=!0)}throw o});I[e]={request:n(),ts:Date.now()}}return I[e].request},j=e=>e&&e.type?e.type:"gifs",N=class{constructor(e,t={}){this.getQS=(e={})=>new URLSearchParams(m(g(m({},e),{api_key:this.apiKey,pingback_id:(0,a.t0)()}),this.qsParams)).toString(),this.apiKey=e,this.qsParams=t}categories(e){return R(`gifs/categories?${this.getQS(e)}`)}gif(e,t){const n=(null==t?void 0:t.internal)?"internal/":"";return R(`${n}gifs/${e}?${this.getQS()}`,{normalizer:k})}gifs(e,t){return Array.isArray(e)?R(`gifs?${this.getQS({ids:e.join(",")})}`,{normalizer:L}):R(`gifs/categories/${e}/${t}?${this.getQS()}`,{normalizer:L})}emoji(e){return R(`emoji?${this.getQS(e)}`,{normalizer:L})}emojiDefaultVariations(e){return R(`emoji?${this.getQS(e)}`,{apiVersion:2,normalizer:L})}emojiVariations(e){return R(`emoji/${e}/variations?${this.getQS()}`,{apiVersion:2,normalizer:L})}animate(e,t={}){const n=this.getQS(g(m({},t),{m:e}));return R(`text/animate?${n}`,{normalizer:L})}search(e,t={}){const n=t.channel?`@${t.channel} ${e}`:e;let r;"text"===t.type&&(r=!0);const i=this.getQS(g(m({rating:"pg-13"},t),{q:n,excludeDynamicResults:r}));return R(`${j(t)}/search?${i}`,{normalizer:L})}subcategories(e,t){return R(`gifs/categories/${e}?${this.getQS(t)}`)}trending(e={}){return R(`${j(e)}/trending?${this.getQS(m({rating:"pg-13"},e))}`,{normalizer:L})}random(e){return R(`${j(e)}/random?${this.getQS(m({rating:"pg-13"},e))}`,{noCache:!0,normalizer:k})}related(e,t={}){const{type:n="gifs"}=t;return R(`${n}/related?${this.getQS(m({gif_id:e,rating:"pg-13"},t))}`,{normalizer:L})}channels(e,t={}){return R(`channels/search?${this.getQS(m({q:e,rating:"pg-13"},t))}`)}},D=Symbol("has inivisible gifs"),T=(e,t=[])=>{let n=[...t],r=t.map(e=>e.id),i=t.length,o=!1;return t=>y(void 0,null,function*(){if(t&&(n=t,r=t.map(e=>e.id)),o)return n;const a=yield e(i),{pagination:s,data:l}=a;i=s.count+s.offset,o=i===s.total_count,l.forEach(e=>{const{id:t}=e;r.includes(t)||(n.push(e),r.push(t))});const c=[...n];return s.hasMoreGifs&&(c.skipCountCheck=D),c})};if(void 0!==v){const{version:e}=b();(null==(o=(0,a.D6)())?void 0:o.get("X-GIPHY-SDK-NAME"))||((0,a.SU)("X-GIPHY-SDK-NAME","FetchAPI"),(0,a.SU)("X-GIPHY-SDK-VERSION",e))}},13299(e,t,n){"use strict";n.d(t,{Vy:()=>v,SU:()=>P,lm:()=>A,th:()=>k,sr:()=>x,Sj:()=>w,_2:()=>L,Vs:()=>$,D6:()=>O,t0:()=>C,yn:()=>_,Up:()=>b});const r={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let i;const o=new Uint8Array(16);function a(){if(!i&&(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!i))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(o)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));const l=function(e,t,n){if(r.randomUUID&&!t&&!e)return r.randomUUID();const i=(e=e||{}).random||(e.rng||a)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return function(e,t=0){return s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]}(i)};var c=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&m(e,n,t[n]);if(f)for(var n of f(t))p.call(t,n)&&m(e,n,t[n]);return e},v={ENABLED:"undefined"!=typeof window&&"undefined"!=typeof location&&-1!==location.search.indexOf("giphy-debug"),LEVEL:0,PREFIX:"GiphyJS",debug:(...e)=>{v.ENABLED&&v.LEVEL<=0&&console.debug(v.PREFIX,...e)},info:(...e)=>{v.ENABLED&&v.LEVEL<=1&&console.info(v.PREFIX,...e)},warn:(...e)=>{v.ENABLED&&v.LEVEL<=2&&console.warn(v.PREFIX,...e)},error:(...e)=>{v.ENABLED&&v.LEVEL<=3&&console.error(v.PREFIX,...e)}},y=function(e,t,n,r=50){let[i]=e;const o=e.filter(e=>(e.width*e.height>i.width*i.height&&(i=e),t-e.width<=r&&n-e.height<=r));return 0===o.length?i:((e,t,n)=>{let r,i=1/0;return n.forEach(n=>{const o=n.width/e*(n.height/t),a=Math.abs(1-o);a<i&&(i=a,r=n)}),r})(t,n,o)};function b(e,t){const n={};return t.forEach(t=>{void 0!==e[t]&&(n[t]=e[t])}),n}var w=e=>{let t=0,n=0;const r=e.offsetWidth,i=e.offsetHeight;do{t+=e.offsetLeft,n+=e.offsetTop,e=e.offsetParent}while(e);const o={left:t,top:n,width:r,height:i,right:t+r,bottom:n+i,x:t,y:n};return a=g({},o),u(a,d({toJSON:()=>JSON.stringify(o)}));var a},E="",_=()=>{let e="";for(let t=0;t<16;t++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));return e},C=()=>{if(!E){try{E=sessionStorage.getItem("giphyPingbackId")}catch(e){}if(!E){const e=(new Date).getTime().toString(16);try{E=`${e}${l().replace(/-/g,"")}`.substring(0,16)}catch(e){E=_()}try{sessionStorage.setItem("giphyPingbackId",E)}catch(e){}}}return E},x=(new Promise(e=>{"undefined"==typeof Image&&e(!1);const t=new Image;t.onload=()=>{e(!0)},t.onerror=()=>{e(!1)},t.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}),(e,t,n)=>{let r=null==e?void 0:e.assets;if(r){r=g({},r),delete r.source;const e=Object.values(r).sort((e,t)=>e.width-t.width);return y(e,t,n)}}),k=(e,t,n,r)=>{const i=b(e,["original","fixed_width","fixed_height","fixed_width_small","fixed_height_small"]),o=Object.entries(i).map(([e,t])=>g({renditionName:e},t));return y(o,t,n,r)},L=({images:e},t)=>{const{fixed_width:n}=e;if(n){const{width:e,height:r}=n,i=e/r;return Math.round(t/i)}return 0},$=({images:e},t)=>{const{fixed_width:n}=e;if(n){const{width:e,height:r}=n,i=e/r;return Math.round(t*i)}return 0},A=({alt_text:e,user:t,tags:n=[],is_sticker:r=!1,title:i=""})=>{if(e)return e;if(i)return i;const o=t&&t.username||"";var a;return`${o?`${o} `:""}${function(e,t=0){return e.slice(0,t)}((a=["transparent"],n.filter(e=>-1===a.indexOf(e))),o?4:5).join(" ")} ${r?"Sticker":"GIF"}`},S=("undefined"!=typeof window?window:n.g)||{};S._GIPHY_SDK_HEADERS_=S._GIPHY_SDK_HEADERS_||(S.Headers?new S.Headers({"X-GIPHY-SDK-PLATFORM":"web"}):void 0);var O=()=>S._GIPHY_SDK_HEADERS_,P=(e,t)=>{var n;return null==(n=O())?void 0:n.set(e,t)}},34629(e,t,n){"use strict";n.r(t),n.d(t,{__addDisposableResource:()=>N,__assign:()=>o,__asyncDelegator:()=>k,__asyncGenerator:()=>x,__asyncValues:()=>L,__await:()=>C,__awaiter:()=>p,__classPrivateFieldGet:()=>I,__classPrivateFieldIn:()=>j,__classPrivateFieldSet:()=>R,__createBinding:()=>g,__decorate:()=>s,__disposeResources:()=>T,__esDecorate:()=>c,__exportStar:()=>v,__extends:()=>i,__generator:()=>m,__importDefault:()=>P,__importStar:()=>O,__makeTemplateObject:()=>$,__metadata:()=>h,__param:()=>l,__propKey:()=>d,__read:()=>b,__rest:()=>a,__rewriteRelativeImportExtension:()=>F,__runInitializers:()=>u,__setFunctionName:()=>f,__spread:()=>w,__spreadArray:()=>_,__spreadArrays:()=>E,__values:()=>y,default:()=>M});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function s(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}function l(e,t){return function(n,r){t(n,r,e)}}function c(e,t,n,r,i,o){function a(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var s,l=r.kind,c="getter"===l?"get":"setter"===l?"set":"value",u=!t&&e?r.static?e:e.prototype:null,d=t||(u?Object.getOwnPropertyDescriptor(u,r.name):{}),f=!1,h=n.length-1;h>=0;h--){var p={};for(var m in r)p[m]="access"===m?{}:r[m];for(var m in r.access)p.access[m]=r.access[m];p.addInitializer=function(e){if(f)throw new TypeError("Cannot add initializers after decoration has completed");o.push(a(e||null))};var g=(0,n[h])("accessor"===l?{get:d.get,set:d.set}:d[c],p);if("accessor"===l){if(void 0===g)continue;if(null===g||"object"!=typeof g)throw new TypeError("Object expected");(s=a(g.get))&&(d.get=s),(s=a(g.set))&&(d.set=s),(s=a(g.init))&&i.unshift(s)}else(s=a(g))&&("field"===l?i.unshift(s):d[c]=s)}u&&Object.defineProperty(u,r.name,d),f=!0}function u(e,t,n){for(var r=arguments.length>2,i=0;i<t.length;i++)n=r?t[i].call(e,n):t[i].call(e);return r?n:void 0}function d(e){return"symbol"==typeof e?e:"".concat(e)}function f(e,t,n){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function h(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function p(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}l((r=r.apply(e,t||[])).next())})}function m(e,t){var n,r,i,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},a=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(l){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(e){s=[6,e],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}var g=Object.create?function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function v(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||g(t,e,n)}function y(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}function w(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function E(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}function _(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function C(e){return this instanceof C?(this.v=e,this):new C(e)}function x(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(e,t||[]),o=[];return r=Object.create(("function"==typeof AsyncIterator?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",function(e){return function(t){return Promise.resolve(t).then(e,c)}}),r[Symbol.asyncIterator]=function(){return this},r;function a(e,t){i[e]&&(r[e]=function(t){return new Promise(function(n,r){o.push([e,t,n,r])>1||s(e,t)})},t&&(r[e]=t(r[e])))}function s(e,t){try{(n=i[e](t)).value instanceof C?Promise.resolve(n.value.v).then(l,c):u(o[0][2],n)}catch(e){u(o[0][3],e)}var n}function l(e){s("next",e)}function c(e){s("throw",e)}function u(e,t){e(t),o.shift(),o.length&&s(o[0][0],o[0][1])}}function k(e){var t,n;return t={},r("next"),r("throw",function(e){throw e}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,i){t[r]=e[r]?function(t){return(n=!n)?{value:C(e[r](t)),done:!1}:i?i(t):t}:i}}function L(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=y(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise(function(r,i){!function(e,t,n,r){Promise.resolve(r).then(function(t){e({value:t,done:n})},t)}(r,i,(t=e[n](t)).done,t.value)})}}}function $(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var A=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t},S=function(e){return S=Object.getOwnPropertyNames||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[t.length]=n);return t},S(e)};function O(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n=S(e),r=0;r<n.length;r++)"default"!==n[r]&&g(t,e,n[r]);return A(t,e),t}function P(e){return e&&e.__esModule?e:{default:e}}function I(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function R(e,t,n,r,i){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?i.call(e,n):i?i.value=n:t.set(e,n),n}function j(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function N(e,t,n){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var r,i;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=t[Symbol.asyncDispose]}if(void 0===r){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=t[Symbol.dispose],n&&(i=r)}if("function"!=typeof r)throw new TypeError("Object not disposable.");i&&(r=function(){try{i.call(this)}catch(e){return Promise.reject(e)}}),e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t}var D="function"==typeof SuppressedError?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};function T(e){function t(t){e.error=e.hasError?new D(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}var n,r=0;return function i(){for(;n=e.stack.pop();)try{if(!n.async&&1===r)return r=0,e.stack.push(n),Promise.resolve().then(i);if(n.dispose){var o=n.dispose.call(n.value);if(n.async)return r|=2,Promise.resolve(o).then(i,function(e){return t(e),i()})}else r|=1}catch(e){t(e)}if(1===r)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}()}function F(e,t){return"string"==typeof e&&/^\.\.?\//.test(e)?e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(e,n,r,i,o){return n?t?".jsx":".js":!r||i&&o?r+i+"."+o.toLowerCase()+"js":e}):e}const M={__extends:i,__assign:o,__rest:a,__decorate:s,__param:l,__esDecorate:c,__runInitializers:u,__propKey:d,__setFunctionName:f,__metadata:h,__awaiter:p,__generator:m,__createBinding:g,__exportStar:v,__values:y,__read:b,__spread:w,__spreadArrays:E,__spreadArray:_,__await:C,__asyncGenerator:x,__asyncDelegator:k,__asyncValues:L,__makeTemplateObject:$,__importStar:O,__importDefault:P,__classPrivateFieldGet:I,__classPrivateFieldSet:R,__classPrivateFieldIn:j,__addDisposableResource:N,__disposeResources:T,__rewriteRelativeImportExtension:F}}}]);
//# sourceMappingURL=4402.a9cd29ae2e4cb295404a.js.map