(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function qv(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var yh={exports:{}},Pa={},vh={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function zE(){if(zg)return xe;zg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),w=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,U={};function N(O,Q,ye){this.props=O,this.context=Q,this.refs=U,this.updater=ye||k}N.prototype.isReactComponent={},N.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},N.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function H(){}H.prototype=N.prototype;function B(O,Q,ye){this.props=O,this.context=Q,this.refs=U,this.updater=ye||k}var K=B.prototype=new H;K.constructor=B,q(K,N.prototype),K.isPureReactComponent=!0;var Z=Array.isArray,oe=Object.prototype.hasOwnProperty,he={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function I(O,Q,ye){var Ae,Ce={},be=null,ze=null;if(Q!=null)for(Ae in Q.ref!==void 0&&(ze=Q.ref),Q.key!==void 0&&(be=""+Q.key),Q)oe.call(Q,Ae)&&!R.hasOwnProperty(Ae)&&(Ce[Ae]=Q[Ae]);var Ue=arguments.length-2;if(Ue===1)Ce.children=ye;else if(1<Ue){for(var Qe=Array(Ue),St=0;St<Ue;St++)Qe[St]=arguments[St+2];Ce.children=Qe}if(O&&O.defaultProps)for(Ae in Ue=O.defaultProps,Ue)Ce[Ae]===void 0&&(Ce[Ae]=Ue[Ae]);return{$$typeof:n,type:O,key:be,ref:ze,props:Ce,_owner:he.current}}function x(O,Q){return{$$typeof:n,type:O.type,key:Q,ref:O.ref,props:O.props,_owner:O._owner}}function b(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function D(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ye){return Q[ye]})}var L=/\/+/g;function C(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):Q.toString(36)}function Ge(O,Q,ye,Ae,Ce){var be=typeof O;(be==="undefined"||be==="boolean")&&(O=null);var ze=!1;if(O===null)ze=!0;else switch(be){case"string":case"number":ze=!0;break;case"object":switch(O.$$typeof){case n:case e:ze=!0}}if(ze)return ze=O,Ce=Ce(ze),O=Ae===""?"."+C(ze,0):Ae,Z(Ce)?(ye="",O!=null&&(ye=O.replace(L,"$&/")+"/"),Ge(Ce,Q,ye,"",function(St){return St})):Ce!=null&&(b(Ce)&&(Ce=x(Ce,ye+(!Ce.key||ze&&ze.key===Ce.key?"":(""+Ce.key).replace(L,"$&/")+"/")+O)),Q.push(Ce)),1;if(ze=0,Ae=Ae===""?".":Ae+":",Z(O))for(var Ue=0;Ue<O.length;Ue++){be=O[Ue];var Qe=Ae+C(be,Ue);ze+=Ge(be,Q,ye,Qe,Ce)}else if(Qe=S(O),typeof Qe=="function")for(O=Qe.call(O),Ue=0;!(be=O.next()).done;)be=be.value,Qe=Ae+C(be,Ue++),ze+=Ge(be,Q,ye,Qe,Ce);else if(be==="object")throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return ze}function He(O,Q,ye){if(O==null)return O;var Ae=[],Ce=0;return Ge(O,Ae,"","",function(be){return Q.call(ye,be,Ce++)}),Ae}function mt(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(ye){(O._status===0||O._status===-1)&&(O._status=1,O._result=ye)},function(ye){(O._status===0||O._status===-1)&&(O._status=2,O._result=ye)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var Fe={current:null},ie={transition:null},ve={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:ie,ReactCurrentOwner:he};function le(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:He,forEach:function(O,Q,ye){He(O,function(){Q.apply(this,arguments)},ye)},count:function(O){var Q=0;return He(O,function(){Q++}),Q},toArray:function(O){return He(O,function(Q){return Q})||[]},only:function(O){if(!b(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},xe.Component=N,xe.Fragment=t,xe.Profiler=o,xe.PureComponent=B,xe.StrictMode=s,xe.Suspense=g,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ve,xe.act=le,xe.cloneElement=function(O,Q,ye){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ae=q({},O.props),Ce=O.key,be=O.ref,ze=O._owner;if(Q!=null){if(Q.ref!==void 0&&(be=Q.ref,ze=he.current),Q.key!==void 0&&(Ce=""+Q.key),O.type&&O.type.defaultProps)var Ue=O.type.defaultProps;for(Qe in Q)oe.call(Q,Qe)&&!R.hasOwnProperty(Qe)&&(Ae[Qe]=Q[Qe]===void 0&&Ue!==void 0?Ue[Qe]:Q[Qe])}var Qe=arguments.length-2;if(Qe===1)Ae.children=ye;else if(1<Qe){Ue=Array(Qe);for(var St=0;St<Qe;St++)Ue[St]=arguments[St+2];Ae.children=Ue}return{$$typeof:n,type:O.type,key:Ce,ref:be,props:Ae,_owner:ze}},xe.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},xe.createElement=I,xe.createFactory=function(O){var Q=I.bind(null,O);return Q.type=O,Q},xe.createRef=function(){return{current:null}},xe.forwardRef=function(O){return{$$typeof:d,render:O}},xe.isValidElement=b,xe.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:mt}},xe.memo=function(O,Q){return{$$typeof:y,type:O,compare:Q===void 0?null:Q}},xe.startTransition=function(O){var Q=ie.transition;ie.transition={};try{O()}finally{ie.transition=Q}},xe.unstable_act=le,xe.useCallback=function(O,Q){return Fe.current.useCallback(O,Q)},xe.useContext=function(O){return Fe.current.useContext(O)},xe.useDebugValue=function(){},xe.useDeferredValue=function(O){return Fe.current.useDeferredValue(O)},xe.useEffect=function(O,Q){return Fe.current.useEffect(O,Q)},xe.useId=function(){return Fe.current.useId()},xe.useImperativeHandle=function(O,Q,ye){return Fe.current.useImperativeHandle(O,Q,ye)},xe.useInsertionEffect=function(O,Q){return Fe.current.useInsertionEffect(O,Q)},xe.useLayoutEffect=function(O,Q){return Fe.current.useLayoutEffect(O,Q)},xe.useMemo=function(O,Q){return Fe.current.useMemo(O,Q)},xe.useReducer=function(O,Q,ye){return Fe.current.useReducer(O,Q,ye)},xe.useRef=function(O){return Fe.current.useRef(O)},xe.useState=function(O){return Fe.current.useState(O)},xe.useSyncExternalStore=function(O,Q,ye){return Fe.current.useSyncExternalStore(O,Q,ye)},xe.useTransition=function(){return Fe.current.useTransition()},xe.version="18.3.1",xe}var Ug;function Dd(){return Ug||(Ug=1,vh.exports=zE()),vh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function UE(){if($g)return Pa;$g=1;var n=Dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(d,g,y){var _,w={},S=null,k=null;y!==void 0&&(S=""+y),g.key!==void 0&&(S=""+g.key),g.ref!==void 0&&(k=g.ref);for(_ in g)s.call(g,_)&&!l.hasOwnProperty(_)&&(w[_]=g[_]);if(d&&d.defaultProps)for(_ in g=d.defaultProps,g)w[_]===void 0&&(w[_]=g[_]);return{$$typeof:e,type:d,key:S,ref:k,props:w,_owner:o.current}}return Pa.Fragment=t,Pa.jsx=f,Pa.jsxs=f,Pa}var Bg;function $E(){return Bg||(Bg=1,yh.exports=UE()),yh.exports}var F=$E(),M=Dd();const qe=qv(M);var Pu={},_h={exports:{}},rn={},Eh={exports:{}},wh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function BE(){return Hg||(Hg=1,(function(n){function e(ie,ve){var le=ie.length;ie.push(ve);e:for(;0<le;){var O=le-1>>>1,Q=ie[O];if(0<o(Q,ve))ie[O]=ve,ie[le]=Q,le=O;else break e}}function t(ie){return ie.length===0?null:ie[0]}function s(ie){if(ie.length===0)return null;var ve=ie[0],le=ie.pop();if(le!==ve){ie[0]=le;e:for(var O=0,Q=ie.length,ye=Q>>>1;O<ye;){var Ae=2*(O+1)-1,Ce=ie[Ae],be=Ae+1,ze=ie[be];if(0>o(Ce,le))be<Q&&0>o(ze,Ce)?(ie[O]=ze,ie[be]=le,O=be):(ie[O]=Ce,ie[Ae]=le,O=Ae);else if(be<Q&&0>o(ze,le))ie[O]=ze,ie[be]=le,O=be;else break e}}return ve}function o(ie,ve){var le=ie.sortIndex-ve.sortIndex;return le!==0?le:ie.id-ve.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var f=Date,d=f.now();n.unstable_now=function(){return f.now()-d}}var g=[],y=[],_=1,w=null,S=3,k=!1,q=!1,U=!1,N=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(ie){for(var ve=t(y);ve!==null;){if(ve.callback===null)s(y);else if(ve.startTime<=ie)s(y),ve.sortIndex=ve.expirationTime,e(g,ve);else break;ve=t(y)}}function Z(ie){if(U=!1,K(ie),!q)if(t(g)!==null)q=!0,mt(oe);else{var ve=t(y);ve!==null&&Fe(Z,ve.startTime-ie)}}function oe(ie,ve){q=!1,U&&(U=!1,H(I),I=-1),k=!0;var le=S;try{for(K(ve),w=t(g);w!==null&&(!(w.expirationTime>ve)||ie&&!D());){var O=w.callback;if(typeof O=="function"){w.callback=null,S=w.priorityLevel;var Q=O(w.expirationTime<=ve);ve=n.unstable_now(),typeof Q=="function"?w.callback=Q:w===t(g)&&s(g),K(ve)}else s(g);w=t(g)}if(w!==null)var ye=!0;else{var Ae=t(y);Ae!==null&&Fe(Z,Ae.startTime-ve),ye=!1}return ye}finally{w=null,S=le,k=!1}}var he=!1,R=null,I=-1,x=5,b=-1;function D(){return!(n.unstable_now()-b<x)}function L(){if(R!==null){var ie=n.unstable_now();b=ie;var ve=!0;try{ve=R(!0,ie)}finally{ve?C():(he=!1,R=null)}}else he=!1}var C;if(typeof B=="function")C=function(){B(L)};else if(typeof MessageChannel<"u"){var Ge=new MessageChannel,He=Ge.port2;Ge.port1.onmessage=L,C=function(){He.postMessage(null)}}else C=function(){N(L,0)};function mt(ie){R=ie,he||(he=!0,C())}function Fe(ie,ve){I=N(function(){ie(n.unstable_now())},ve)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){q||k||(q=!0,mt(oe))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(g)},n.unstable_next=function(ie){switch(S){case 1:case 2:case 3:var ve=3;break;default:ve=S}var le=S;S=ve;try{return ie()}finally{S=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,ve){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var le=S;S=ie;try{return ve()}finally{S=le}},n.unstable_scheduleCallback=function(ie,ve,le){var O=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,ie){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=le+Q,ie={id:_++,callback:ve,priorityLevel:ie,startTime:le,expirationTime:Q,sortIndex:-1},le>O?(ie.sortIndex=le,e(y,ie),t(g)===null&&ie===t(y)&&(U?(H(I),I=-1):U=!0,Fe(Z,le-O))):(ie.sortIndex=Q,e(g,ie),q||k||(q=!0,mt(oe))),ie},n.unstable_shouldYield=D,n.unstable_wrapCallback=function(ie){var ve=S;return function(){var le=S;S=ve;try{return ie.apply(this,arguments)}finally{S=le}}}})(wh)),wh}var qg;function HE(){return qg||(qg=1,Eh.exports=BE()),Eh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wg;function qE(){if(Wg)return rn;Wg=1;var n=Dd(),e=HE();function t(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(r,i){f(r,i),f(r+"Capture",i)}function f(r,i){for(o[r]=i,r=0;r<i.length;r++)s.add(i[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},w={};function S(r){return g.call(w,r)?!0:g.call(_,r)?!1:y.test(r)?w[r]=!0:(_[r]=!0,!1)}function k(r,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function q(r,i,a,c){if(i===null||typeof i>"u"||k(r,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function U(r,i,a,c,h,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=r,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){N[r]=new U(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];N[i]=new U(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){N[r]=new U(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){N[r]=new U(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){N[r]=new U(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){N[r]=new U(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){N[r]=new U(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){N[r]=new U(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){N[r]=new U(r,5,!1,r.toLowerCase(),null,!1,!1)});var H=/[\-:]([a-z])/g;function B(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(H,B);N[i]=new U(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(H,B);N[i]=new U(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(H,B);N[i]=new U(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){N[r]=new U(r,1,!1,r.toLowerCase(),null,!1,!1)}),N.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){N[r]=new U(r,1,!1,r.toLowerCase(),null,!0,!0)});function K(r,i,a,c){var h=N.hasOwnProperty(i)?N[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(q(i,a,h,c)&&(a=null),c||h===null?S(i)&&(a===null?r.removeAttribute(i):r.setAttribute(i,""+a)):h.mustUseProperty?r[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?r.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?r.setAttributeNS(c,i,a):r.setAttribute(i,a))))}var Z=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oe=Symbol.for("react.element"),he=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Ge=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ve(r){return r===null||typeof r!="object"?null:(r=ie&&r[ie]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,O;function Q(r){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+r}var ye=!1;function Ae(r,i){if(!r||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(W){var c=W}Reflect.construct(r,[],i)}else{try{i.call()}catch(W){c=W}r.call(i.prototype)}else{try{throw Error()}catch(W){c=W}r()}}catch(W){if(W&&c&&typeof W.stack=="string"){for(var h=W.stack.split(`
`),m=c.stack.split(`
`),E=h.length-1,A=m.length-1;1<=E&&0<=A&&h[E]!==m[A];)A--;for(;1<=E&&0<=A;E--,A--)if(h[E]!==m[A]){if(E!==1||A!==1)do if(E--,A--,0>A||h[E]!==m[A]){var P=`
`+h[E].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=E&&0<=A);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function Ce(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Ae(r.type,!1),r;case 11:return r=Ae(r.type.render,!1),r;case 1:return r=Ae(r.type,!0),r;default:return""}}function be(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case R:return"Fragment";case he:return"Portal";case x:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case Ge:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case D:return(r.displayName||"Context")+".Consumer";case b:return(r._context.displayName||"Context")+".Provider";case L:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case He:return i=r.displayName||null,i!==null?i:be(r.type)||"Memo";case mt:i=r._payload,r=r._init;try{return be(r(i))}catch{}}return null}function ze(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Qe(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function St(r){var i=Qe(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),c=""+r[i];if(!r.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(r,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function fr(r){r._valueTracker||(r._valueTracker=St(r))}function ms(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return r&&(c=Qe(r)?r.checked?"true":"false":r.value),r=c,r!==a?(i.setValue(r),!0):!1}function zr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function xi(r,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function gs(r,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ue(i.value!=null?i.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Lo(r,i){i=i.checked,i!=null&&K(r,"checked",i,!1)}function Oo(r,i){Lo(r,i);var a=Ue(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?ys(r,i.type,a):i.hasOwnProperty("defaultValue")&&ys(r,i.type,Ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function pl(r,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,a||i===r.value||(r.value=i),r.defaultValue=i}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ys(r,i,a){(i!=="number"||zr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var hr=Array.isArray;function dr(r,i,a,c){if(r=r.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<r.length;a++)h=i.hasOwnProperty("$"+r[a].value),r[a].selected!==h&&(r[a].selected=h),h&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),i=null,h=0;h<r.length;h++){if(r[h].value===a){r[h].selected=!0,c&&(r[h].defaultSelected=!0);return}i!==null||r[h].disabled||(i=r[h])}i!==null&&(i.selected=!0)}}function Mo(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function vs(r,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(hr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}r._wrapperState={initialValue:Ue(a)}}function _s(r,i){var a=Ue(i.value),c=Ue(i.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),i.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Fo(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function gt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yt(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?gt(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var pr,jo=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return r(i,a,c,h)})}:r})(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=pr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Ur(r,i){if(i){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=i;return}}r.textContent=i}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pi=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(r){Pi.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),Ri[i]=Ri[r]})});function zo(r,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ri.hasOwnProperty(r)&&Ri[r]?(""+i).trim():i+"px"}function Uo(r,i){r=r.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=zo(a,i[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,h):r[a]=h}}var $o=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(r,i){if(i){if($o[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ho(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=null;function Es(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ws=null,gn=null,qn=null;function Ts(r){if(r=pa(r)){if(typeof ws!="function")throw Error(t(280));var i=r.stateNode;i&&(i=Hl(i),ws(r.stateNode,r.type,i))}}function Wn(r){gn?qn?qn.push(r):qn=[r]:gn=r}function qo(){if(gn){var r=gn,i=qn;if(qn=gn=null,Ts(r),i)for(r=0;r<i.length;r++)Ts(i[r])}}function bi(r,i){return r(i)}function Wo(){}var mr=!1;function Ko(r,i,a){if(mr)return r(i,a);mr=!0;try{return bi(r,i,a)}finally{mr=!1,(gn!==null||qn!==null)&&(Wo(),qo())}}function lt(r,i){var a=r.stateNode;if(a===null)return null;var c=Hl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ss=!1;if(d)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Ss=!1}function Ni(r,i,a,c,h,m,E,A,P){var W=Array.prototype.slice.call(arguments,3);try{i.apply(a,W)}catch(ee){this.onError(ee)}}var Di=!1,Is=null,kn=!1,Go=null,Hc={onError:function(r){Di=!0,Is=r}};function As(r,i,a,c,h,m,E,A,P){Di=!1,Is=null,Ni.apply(Hc,arguments)}function ml(r,i,a,c,h,m,E,A,P){if(As.apply(this,arguments),Di){if(Di){var W=Is;Di=!1,Is=null}else throw Error(t(198));kn||(kn=!0,Go=W)}}function bn(r){var i=r,a=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(a=i.return),r=i.return;while(r)}return i.tag===3?a:null}function Vi(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Nn(r){if(bn(r)!==r)throw Error(t(188))}function gl(r){var i=r.alternate;if(!i){if(i=bn(r),i===null)throw Error(t(188));return i!==r?null:r}for(var a=r,c=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return Nn(h),r;if(m===c)return Nn(h),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=m;else{for(var E=!1,A=h.child;A;){if(A===a){E=!0,a=h,c=m;break}if(A===c){E=!0,c=h,a=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===a){E=!0,a=m,c=h;break}if(A===c){E=!0,c=m,a=h;break}A=A.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:i}function Qo(r){return r=gl(r),r!==null?Cs(r):null}function Cs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=Cs(r);if(i!==null)return i;r=r.sibling}return null}var xs=e.unstable_scheduleCallback,Yo=e.unstable_cancelCallback,yl=e.unstable_shouldYield,qc=e.unstable_requestPaint,Ye=e.unstable_now,vl=e.unstable_getCurrentPriorityLevel,Li=e.unstable_ImmediatePriority,$r=e.unstable_UserBlockingPriority,yn=e.unstable_NormalPriority,Xo=e.unstable_LowPriority,_l=e.unstable_IdlePriority,Oi=null,an=null;function El(r){if(an&&typeof an.onCommitFiberRoot=="function")try{an.onCommitFiberRoot(Oi,r,void 0,(r.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Tl,Jo=Math.log,wl=Math.LN2;function Tl(r){return r>>>=0,r===0?32:31-(Jo(r)/wl|0)|0}var Rs=64,Ps=4194304;function Br(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Mi(r,i){var a=r.pendingLanes;if(a===0)return 0;var c=0,h=r.suspendedLanes,m=r.pingedLanes,E=a&268435455;if(E!==0){var A=E&~h;A!==0?c=Br(A):(m&=E,m!==0&&(c=Br(m)))}else E=a&~h,E!==0?c=Br(E):m!==0&&(c=Br(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=c;0<i;)a=31-qt(i),h=1<<a,c|=r[a],i&=~h;return c}function Wc(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(r,i){for(var a=r.suspendedLanes,c=r.pingedLanes,h=r.expirationTimes,m=r.pendingLanes;0<m;){var E=31-qt(m),A=1<<E,P=h[E];P===-1?((A&a)===0||(A&c)!==0)&&(h[E]=Wc(A,i)):P<=i&&(r.expiredLanes|=A),m&=~A}}function ln(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Fi(){var r=Rs;return Rs<<=1,(Rs&4194240)===0&&(Rs=64),r}function Hr(r){for(var i=[],a=0;31>a;a++)i.push(r);return i}function qr(r,i,a){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-qt(i),r[i]=a}function We(r,i){var a=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var h=31-qt(a),m=1<<h;i[h]=0,c[h]=-1,r[h]=-1,a&=~m}}function Wr(r,i){var a=r.entangledLanes|=i;for(r=r.entanglements;a;){var c=31-qt(a),h=1<<c;h&i|r[c]&i&&(r[c]|=i),a&=~h}}var ke=0;function Kr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Sl,ks,Il,Al,Cl,Zo=!1,Kn=[],bt=null,Dn=null,Vn=null,Gr=new Map,vn=new Map,Gn=[],Kc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xl(r,i){switch(r){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Gr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(i.pointerId)}}function Yt(r,i,a,c,h,m){return r===null||r.nativeEvent!==m?(r={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=pa(i),i!==null&&ks(i)),r):(r.eventSystemFlags|=c,i=r.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),r)}function Gc(r,i,a,c,h){switch(i){case"focusin":return bt=Yt(bt,r,i,a,c,h),!0;case"dragenter":return Dn=Yt(Dn,r,i,a,c,h),!0;case"mouseover":return Vn=Yt(Vn,r,i,a,c,h),!0;case"pointerover":var m=h.pointerId;return Gr.set(m,Yt(Gr.get(m)||null,r,i,a,c,h)),!0;case"gotpointercapture":return m=h.pointerId,vn.set(m,Yt(vn.get(m)||null,r,i,a,c,h)),!0}return!1}function Rl(r){var i=Bi(r.target);if(i!==null){var a=bn(i);if(a!==null){if(i=a.tag,i===13){if(i=Vi(a),i!==null){r.blockedOn=i,Cl(r.priority,function(){Il(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function yr(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var a=bs(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);ki=c,a.target.dispatchEvent(c),ki=null}else return i=pa(a),i!==null&&ks(i),r.blockedOn=a,!1;i.shift()}return!0}function ji(r,i,a){yr(r)&&a.delete(i)}function Pl(){Zo=!1,bt!==null&&yr(bt)&&(bt=null),Dn!==null&&yr(Dn)&&(Dn=null),Vn!==null&&yr(Vn)&&(Vn=null),Gr.forEach(ji),vn.forEach(ji)}function Ln(r,i){r.blockedOn===i&&(r.blockedOn=null,Zo||(Zo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pl)))}function On(r){function i(h){return Ln(h,r)}if(0<Kn.length){Ln(Kn[0],r);for(var a=1;a<Kn.length;a++){var c=Kn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(bt!==null&&Ln(bt,r),Dn!==null&&Ln(Dn,r),Vn!==null&&Ln(Vn,r),Gr.forEach(i),vn.forEach(i),a=0;a<Gn.length;a++)c=Gn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Gn.length&&(a=Gn[0],a.blockedOn===null);)Rl(a),a.blockedOn===null&&Gn.shift()}var vr=Z.ReactCurrentBatchConfig,Qr=!0;function nt(r,i,a,c){var h=ke,m=vr.transition;vr.transition=null;try{ke=1,ea(r,i,a,c)}finally{ke=h,vr.transition=m}}function Qc(r,i,a,c){var h=ke,m=vr.transition;vr.transition=null;try{ke=4,ea(r,i,a,c)}finally{ke=h,vr.transition=m}}function ea(r,i,a,c){if(Qr){var h=bs(r,i,a,c);if(h===null)af(r,i,c,zi,a),xl(r,c);else if(Gc(h,r,i,a,c))c.stopPropagation();else if(xl(r,c),i&4&&-1<Kc.indexOf(r)){for(;h!==null;){var m=pa(h);if(m!==null&&Sl(m),m=bs(r,i,a,c),m===null&&af(r,i,c,zi,a),m===h)break;h=m}h!==null&&c.stopPropagation()}else af(r,i,c,null,a)}}var zi=null;function bs(r,i,a,c){if(zi=null,r=Es(c),r=Bi(r),r!==null)if(i=bn(r),i===null)r=null;else if(a=i.tag,a===13){if(r=Vi(i),r!==null)return r;r=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return zi=r,null}function ta(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vl()){case Li:return 1;case $r:return 4;case yn:case Xo:return 16;case _l:return 536870912;default:return 16}default:return 16}}var un=null,Ns=null,Xt=null;function na(){if(Xt)return Xt;var r,i=Ns,a=i.length,c,h="value"in un?un.value:un.textContent,m=h.length;for(r=0;r<a&&i[r]===h[r];r++);var E=a-r;for(c=1;c<=E&&i[a-c]===h[m-c];c++);return Xt=h.slice(r,1<c?1-c:void 0)}function Ds(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Qn(){return!0}function ra(){return!1}function Nt(r){function i(a,c,h,m,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Qn:ra,this.isPropagationStopped=ra,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),i}var Mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vs=Nt(Mn),Yn=le({},Mn,{view:0,detail:0}),Yc=Nt(Yn),Ls,_r,Yr,Ui=le({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Yr&&(Yr&&r.type==="mousemove"?(Ls=r.screenX-Yr.screenX,_r=r.screenY-Yr.screenY):_r=Ls=0,Yr=r),Ls)},movementY:function(r){return"movementY"in r?r.movementY:_r}}),Os=Nt(Ui),ia=le({},Ui,{dataTransfer:0}),kl=Nt(ia),Ms=le({},Yn,{relatedTarget:0}),Fs=Nt(Ms),bl=le({},Mn,{animationName:0,elapsedTime:0,pseudoElement:0}),Er=Nt(bl),Nl=le({},Mn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Dl=Nt(Nl),Vl=le({},Mn,{data:0}),sa=Nt(Vl),js={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ll={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ol(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=Ll[r])?!!i[r]:!1}function Xn(){return Ol}var u=le({},Yn,{key:function(r){if(r.key){var i=js[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Ds(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Wt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(r){return r.type==="keypress"?Ds(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Ds(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=Nt(u),v=le({},Ui,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Nt(v),j=le({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn}),G=Nt(j),se=le({},Mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=Nt(se),vt=le({},Ui,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=Nt(vt),It=[9,13,27,32],ht=d&&"CompositionEvent"in window,_n=null;d&&"documentMode"in document&&(_n=document.documentMode);var cn=d&&"TextEvent"in window&&!_n,$i=d&&(!ht||_n&&8<_n&&11>=_n),zs=" ",Vp=!1;function Lp(r,i){switch(r){case"keyup":return It.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Us=!1;function M1(r,i){switch(r){case"compositionend":return Op(i);case"keypress":return i.which!==32?null:(Vp=!0,zs);case"textInput":return r=i.data,r===zs&&Vp?null:r;default:return null}}function F1(r,i){if(Us)return r==="compositionend"||!ht&&Lp(r,i)?(r=na(),Xt=Ns=un=null,Us=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $i&&i.locale!=="ko"?null:i.data;default:return null}}var j1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!j1[r.type]:i==="textarea"}function Fp(r,i,a,c){Wn(c),i=Ul(i,"onChange"),0<i.length&&(a=new Vs("onChange","change",null,a,c),r.push({event:a,listeners:i}))}var oa=null,aa=null;function z1(r){nm(r,0)}function Ml(r){var i=Ws(r);if(ms(i))return r}function U1(r,i){if(r==="change")return i}var jp=!1;if(d){var Xc;if(d){var Jc="oninput"in document;if(!Jc){var zp=document.createElement("div");zp.setAttribute("oninput","return;"),Jc=typeof zp.oninput=="function"}Xc=Jc}else Xc=!1;jp=Xc&&(!document.documentMode||9<document.documentMode)}function Up(){oa&&(oa.detachEvent("onpropertychange",$p),aa=oa=null)}function $p(r){if(r.propertyName==="value"&&Ml(aa)){var i=[];Fp(i,aa,r,Es(r)),Ko(z1,i)}}function $1(r,i,a){r==="focusin"?(Up(),oa=i,aa=a,oa.attachEvent("onpropertychange",$p)):r==="focusout"&&Up()}function B1(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ml(aa)}function H1(r,i){if(r==="click")return Ml(i)}function q1(r,i){if(r==="input"||r==="change")return Ml(i)}function W1(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Fn=typeof Object.is=="function"?Object.is:W1;function la(r,i){if(Fn(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var a=Object.keys(r),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!g.call(i,h)||!Fn(r[h],i[h]))return!1}return!0}function Bp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Hp(r,i){var a=Bp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=i&&c>=i)return{node:a,offset:i-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Bp(a)}}function qp(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?qp(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function Wp(){for(var r=window,i=zr();i instanceof r.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)r=i.contentWindow;else break;i=zr(r.document)}return i}function Zc(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function K1(r){var i=Wp(),a=r.focusedElem,c=r.selectionRange;if(i!==a&&a&&a.ownerDocument&&qp(a.ownerDocument.documentElement,a)){if(c!==null&&Zc(a)){if(i=c.start,r=c.end,r===void 0&&(r=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(r,a.value.length);else if(r=(i=a.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var h=a.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!r.extend&&m>c&&(h=c,c=m,m=h),h=Hp(a,m);var E=Hp(a,c);h&&E&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),r.removeAllRanges(),m>c?(r.addRange(i),r.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),r.addRange(i)))}}for(i=[],r=a;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)r=i[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var G1=d&&"documentMode"in document&&11>=document.documentMode,$s=null,ef=null,ua=null,tf=!1;function Kp(r,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;tf||$s==null||$s!==zr(c)||(c=$s,"selectionStart"in c&&Zc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ua&&la(ua,c)||(ua=c,c=Ul(ef,"onSelect"),0<c.length&&(i=new Vs("onSelect","select",null,i,a),r.push({event:i,listeners:c}),i.target=$s)))}function Fl(r,i){var a={};return a[r.toLowerCase()]=i.toLowerCase(),a["Webkit"+r]="webkit"+i,a["Moz"+r]="moz"+i,a}var Bs={animationend:Fl("Animation","AnimationEnd"),animationiteration:Fl("Animation","AnimationIteration"),animationstart:Fl("Animation","AnimationStart"),transitionend:Fl("Transition","TransitionEnd")},nf={},Gp={};d&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function jl(r){if(nf[r])return nf[r];if(!Bs[r])return r;var i=Bs[r],a;for(a in i)if(i.hasOwnProperty(a)&&a in Gp)return nf[r]=i[a];return r}var Qp=jl("animationend"),Yp=jl("animationiteration"),Xp=jl("animationstart"),Jp=jl("transitionend"),Zp=new Map,em="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(r,i){Zp.set(r,i),l(i,[r])}for(var rf=0;rf<em.length;rf++){var sf=em[rf],Q1=sf.toLowerCase(),Y1=sf[0].toUpperCase()+sf.slice(1);Xr(Q1,"on"+Y1)}Xr(Qp,"onAnimationEnd"),Xr(Yp,"onAnimationIteration"),Xr(Xp,"onAnimationStart"),Xr("dblclick","onDoubleClick"),Xr("focusin","onFocus"),Xr("focusout","onBlur"),Xr(Jp,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function tm(r,i,a){var c=r.type||"unknown-event";r.currentTarget=a,ml(c,i,void 0,r),r.currentTarget=null}function nm(r,i){i=(i&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var A=c[E],P=A.instance,W=A.currentTarget;if(A=A.listener,P!==m&&h.isPropagationStopped())break e;tm(h,A,W),m=P}else for(E=0;E<c.length;E++){if(A=c[E],P=A.instance,W=A.currentTarget,A=A.listener,P!==m&&h.isPropagationStopped())break e;tm(h,A,W),m=P}}}if(kn)throw r=Go,kn=!1,Go=null,r}function Ze(r,i){var a=i[df];a===void 0&&(a=i[df]=new Set);var c=r+"__bubble";a.has(c)||(rm(i,r,2,!1),a.add(c))}function of(r,i,a){var c=0;i&&(c|=4),rm(a,r,c,i)}var zl="_reactListening"+Math.random().toString(36).slice(2);function fa(r){if(!r[zl]){r[zl]=!0,s.forEach(function(a){a!=="selectionchange"&&(X1.has(a)||of(a,!1,r),of(a,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[zl]||(i[zl]=!0,of("selectionchange",!1,i))}}function rm(r,i,a,c){switch(ta(i)){case 1:var h=nt;break;case 4:h=Qc;break;default:h=ea}a=h.bind(null,i,a,r),h=void 0,!Ss||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?r.addEventListener(i,a,{capture:!0,passive:h}):r.addEventListener(i,a,!0):h!==void 0?r.addEventListener(i,a,{passive:h}):r.addEventListener(i,a,!1)}function af(r,i,a,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var A=c.stateNode.containerInfo;if(A===h||A.nodeType===8&&A.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var P=E.tag;if((P===3||P===4)&&(P=E.stateNode.containerInfo,P===h||P.nodeType===8&&P.parentNode===h))return;E=E.return}for(;A!==null;){if(E=Bi(A),E===null)return;if(P=E.tag,P===5||P===6){c=m=E;continue e}A=A.parentNode}}c=c.return}Ko(function(){var W=m,ee=Es(a),te=[];e:{var J=Zp.get(r);if(J!==void 0){var ae=Vs,fe=r;switch(r){case"keypress":if(Ds(a)===0)break e;case"keydown":case"keyup":ae=p;break;case"focusin":fe="focus",ae=Fs;break;case"focusout":fe="blur",ae=Fs;break;case"beforeblur":case"afterblur":ae=Fs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ae=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ae=kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ae=G;break;case Qp:case Yp:case Xp:ae=Er;break;case Jp:ae=Be;break;case"scroll":ae=Yc;break;case"wheel":ae=Ne;break;case"copy":case"cut":case"paste":ae=Dl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ae=T}var de=(i&4)!==0,ut=!de&&r==="scroll",z=de?J!==null?J+"Capture":null:J;de=[];for(var V=W,$;V!==null;){$=V;var re=$.stateNode;if($.tag===5&&re!==null&&($=re,z!==null&&(re=lt(V,z),re!=null&&de.push(ha(V,re,$)))),ut)break;V=V.return}0<de.length&&(J=new ae(J,fe,null,a,ee),te.push({event:J,listeners:de}))}}if((i&7)===0){e:{if(J=r==="mouseover"||r==="pointerover",ae=r==="mouseout"||r==="pointerout",J&&a!==ki&&(fe=a.relatedTarget||a.fromElement)&&(Bi(fe)||fe[wr]))break e;if((ae||J)&&(J=ee.window===ee?ee:(J=ee.ownerDocument)?J.defaultView||J.parentWindow:window,ae?(fe=a.relatedTarget||a.toElement,ae=W,fe=fe?Bi(fe):null,fe!==null&&(ut=bn(fe),fe!==ut||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(ae=null,fe=W),ae!==fe)){if(de=Os,re="onMouseLeave",z="onMouseEnter",V="mouse",(r==="pointerout"||r==="pointerover")&&(de=T,re="onPointerLeave",z="onPointerEnter",V="pointer"),ut=ae==null?J:Ws(ae),$=fe==null?J:Ws(fe),J=new de(re,V+"leave",ae,a,ee),J.target=ut,J.relatedTarget=$,re=null,Bi(ee)===W&&(de=new de(z,V+"enter",fe,a,ee),de.target=$,de.relatedTarget=ut,re=de),ut=re,ae&&fe)t:{for(de=ae,z=fe,V=0,$=de;$;$=Hs($))V++;for($=0,re=z;re;re=Hs(re))$++;for(;0<V-$;)de=Hs(de),V--;for(;0<$-V;)z=Hs(z),$--;for(;V--;){if(de===z||z!==null&&de===z.alternate)break t;de=Hs(de),z=Hs(z)}de=null}else de=null;ae!==null&&im(te,J,ae,de,!1),fe!==null&&ut!==null&&im(te,ut,fe,de,!0)}}e:{if(J=W?Ws(W):window,ae=J.nodeName&&J.nodeName.toLowerCase(),ae==="select"||ae==="input"&&J.type==="file")var me=U1;else if(Mp(J))if(jp)me=q1;else{me=B1;var _e=$1}else(ae=J.nodeName)&&ae.toLowerCase()==="input"&&(J.type==="checkbox"||J.type==="radio")&&(me=H1);if(me&&(me=me(r,W))){Fp(te,me,a,ee);break e}_e&&_e(r,J,W),r==="focusout"&&(_e=J._wrapperState)&&_e.controlled&&J.type==="number"&&ys(J,"number",J.value)}switch(_e=W?Ws(W):window,r){case"focusin":(Mp(_e)||_e.contentEditable==="true")&&($s=_e,ef=W,ua=null);break;case"focusout":ua=ef=$s=null;break;case"mousedown":tf=!0;break;case"contextmenu":case"mouseup":case"dragend":tf=!1,Kp(te,a,ee);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":Kp(te,a,ee)}var Ee;if(ht)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Us?Lp(r,a)&&(Ie="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ie="onCompositionStart");Ie&&($i&&a.locale!=="ko"&&(Us||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Us&&(Ee=na()):(un=ee,Ns="value"in un?un.value:un.textContent,Us=!0)),_e=Ul(W,Ie),0<_e.length&&(Ie=new sa(Ie,r,null,a,ee),te.push({event:Ie,listeners:_e}),Ee?Ie.data=Ee:(Ee=Op(a),Ee!==null&&(Ie.data=Ee)))),(Ee=cn?M1(r,a):F1(r,a))&&(W=Ul(W,"onBeforeInput"),0<W.length&&(ee=new sa("onBeforeInput","beforeinput",null,a,ee),te.push({event:ee,listeners:W}),ee.data=Ee))}nm(te,i)})}function ha(r,i,a){return{instance:r,listener:i,currentTarget:a}}function Ul(r,i){for(var a=i+"Capture",c=[];r!==null;){var h=r,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=lt(r,a),m!=null&&c.unshift(ha(r,m,h)),m=lt(r,i),m!=null&&c.push(ha(r,m,h))),r=r.return}return c}function Hs(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function im(r,i,a,c,h){for(var m=i._reactName,E=[];a!==null&&a!==c;){var A=a,P=A.alternate,W=A.stateNode;if(P!==null&&P===c)break;A.tag===5&&W!==null&&(A=W,h?(P=lt(a,m),P!=null&&E.unshift(ha(a,P,A))):h||(P=lt(a,m),P!=null&&E.push(ha(a,P,A)))),a=a.return}E.length!==0&&r.push({event:i,listeners:E})}var J1=/\r\n?/g,Z1=/\u0000|\uFFFD/g;function sm(r){return(typeof r=="string"?r:""+r).replace(J1,`
`).replace(Z1,"")}function $l(r,i,a){if(i=sm(i),sm(r)!==i&&a)throw Error(t(425))}function Bl(){}var lf=null,uf=null;function cf(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ff=typeof setTimeout=="function"?setTimeout:void 0,eE=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,tE=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(r){return om.resolve(null).then(r).catch(nE)}:ff;function nE(r){setTimeout(function(){throw r})}function hf(r,i){var a=i,c=0;do{var h=a.nextSibling;if(r.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){r.removeChild(h),On(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);On(i)}function Jr(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function am(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return r;i--}else a==="/$"&&i++}r=r.previousSibling}return null}var qs=Math.random().toString(36).slice(2),Jn="__reactFiber$"+qs,da="__reactProps$"+qs,wr="__reactContainer$"+qs,df="__reactEvents$"+qs,rE="__reactListeners$"+qs,iE="__reactHandles$"+qs;function Bi(r){var i=r[Jn];if(i)return i;for(var a=r.parentNode;a;){if(i=a[wr]||a[Jn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(r=am(r);r!==null;){if(a=r[Jn])return a;r=am(r)}return i}r=a,a=r.parentNode}return null}function pa(r){return r=r[Jn]||r[wr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Ws(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Hl(r){return r[da]||null}var pf=[],Ks=-1;function Zr(r){return{current:r}}function et(r){0>Ks||(r.current=pf[Ks],pf[Ks]=null,Ks--)}function Xe(r,i){Ks++,pf[Ks]=r.current,r.current=i}var ei={},Mt=Zr(ei),Jt=Zr(!1),Hi=ei;function Gs(r,i){var a=r.type.contextTypes;if(!a)return ei;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=h),h}function Zt(r){return r=r.childContextTypes,r!=null}function ql(){et(Jt),et(Mt)}function lm(r,i,a){if(Mt.current!==ei)throw Error(t(168));Xe(Mt,i),Xe(Jt,a)}function um(r,i,a){var c=r.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ze(r)||"Unknown",h));return le({},a,c)}function Wl(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ei,Hi=Mt.current,Xe(Mt,r),Xe(Jt,Jt.current),!0}function cm(r,i,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=um(r,i,Hi),c.__reactInternalMemoizedMergedChildContext=r,et(Jt),et(Mt),Xe(Mt,r)):et(Jt),Xe(Jt,a)}var Tr=null,Kl=!1,mf=!1;function fm(r){Tr===null?Tr=[r]:Tr.push(r)}function sE(r){Kl=!0,fm(r)}function ti(){if(!mf&&Tr!==null){mf=!0;var r=0,i=ke;try{var a=Tr;for(ke=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Tr=null,Kl=!1}catch(h){throw Tr!==null&&(Tr=Tr.slice(r+1)),xs(Li,ti),h}finally{ke=i,mf=!1}}return null}var Qs=[],Ys=0,Gl=null,Ql=0,En=[],wn=0,qi=null,Sr=1,Ir="";function Wi(r,i){Qs[Ys++]=Ql,Qs[Ys++]=Gl,Gl=r,Ql=i}function hm(r,i,a){En[wn++]=Sr,En[wn++]=Ir,En[wn++]=qi,qi=r;var c=Sr;r=Ir;var h=32-qt(c)-1;c&=~(1<<h),a+=1;var m=32-qt(i)+h;if(30<m){var E=h-h%5;m=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Sr=1<<32-qt(i)+h|a<<h|c,Ir=m+r}else Sr=1<<m|a<<h|c,Ir=r}function gf(r){r.return!==null&&(Wi(r,1),hm(r,1,0))}function yf(r){for(;r===Gl;)Gl=Qs[--Ys],Qs[Ys]=null,Ql=Qs[--Ys],Qs[Ys]=null;for(;r===qi;)qi=En[--wn],En[wn]=null,Ir=En[--wn],En[wn]=null,Sr=En[--wn],En[wn]=null}var fn=null,hn=null,rt=!1,jn=null;function dm(r,i){var a=An(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=r,i=r.deletions,i===null?(r.deletions=[a],r.flags|=16):i.push(a)}function pm(r,i){switch(r.tag){case 5:var a=r.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,fn=r,hn=Jr(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,fn=r,hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=qi!==null?{id:Sr,overflow:Ir}:null,r.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=An(18,null,null,0),a.stateNode=i,a.return=r,r.child=a,fn=r,hn=null,!0):!1;default:return!1}}function vf(r){return(r.mode&1)!==0&&(r.flags&128)===0}function _f(r){if(rt){var i=hn;if(i){var a=i;if(!pm(r,i)){if(vf(r))throw Error(t(418));i=Jr(a.nextSibling);var c=fn;i&&pm(r,i)?dm(c,a):(r.flags=r.flags&-4097|2,rt=!1,fn=r)}}else{if(vf(r))throw Error(t(418));r.flags=r.flags&-4097|2,rt=!1,fn=r}}}function mm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;fn=r}function Yl(r){if(r!==fn)return!1;if(!rt)return mm(r),rt=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!cf(r.type,r.memoizedProps)),i&&(i=hn)){if(vf(r))throw gm(),Error(t(418));for(;i;)dm(r,i),i=Jr(i.nextSibling)}if(mm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(i===0){hn=Jr(r.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}r=r.nextSibling}hn=null}}else hn=fn?Jr(r.stateNode.nextSibling):null;return!0}function gm(){for(var r=hn;r;)r=Jr(r.nextSibling)}function Xs(){hn=fn=null,rt=!1}function Ef(r){jn===null?jn=[r]:jn.push(r)}var oE=Z.ReactCurrentBatchConfig;function ma(r,i,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var h=c,m=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var A=h.refs;E===null?delete A[m]:A[m]=E},i._stringRef=m,i)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function Xl(r,i){throw r=Object.prototype.toString.call(i),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function ym(r){var i=r._init;return i(r._payload)}function vm(r){function i(z,V){if(r){var $=z.deletions;$===null?(z.deletions=[V],z.flags|=16):$.push(V)}}function a(z,V){if(!r)return null;for(;V!==null;)i(z,V),V=V.sibling;return null}function c(z,V){for(z=new Map;V!==null;)V.key!==null?z.set(V.key,V):z.set(V.index,V),V=V.sibling;return z}function h(z,V){return z=ui(z,V),z.index=0,z.sibling=null,z}function m(z,V,$){return z.index=$,r?($=z.alternate,$!==null?($=$.index,$<V?(z.flags|=2,V):$):(z.flags|=2,V)):(z.flags|=1048576,V)}function E(z){return r&&z.alternate===null&&(z.flags|=2),z}function A(z,V,$,re){return V===null||V.tag!==6?(V=fh($,z.mode,re),V.return=z,V):(V=h(V,$),V.return=z,V)}function P(z,V,$,re){var me=$.type;return me===R?ee(z,V,$.props.children,re,$.key):V!==null&&(V.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===mt&&ym(me)===V.type)?(re=h(V,$.props),re.ref=ma(z,V,$),re.return=z,re):(re=wu($.type,$.key,$.props,null,z.mode,re),re.ref=ma(z,V,$),re.return=z,re)}function W(z,V,$,re){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=hh($,z.mode,re),V.return=z,V):(V=h(V,$.children||[]),V.return=z,V)}function ee(z,V,$,re,me){return V===null||V.tag!==7?(V=es($,z.mode,re,me),V.return=z,V):(V=h(V,$),V.return=z,V)}function te(z,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=fh(""+V,z.mode,$),V.return=z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case oe:return $=wu(V.type,V.key,V.props,null,z.mode,$),$.ref=ma(z,null,V),$.return=z,$;case he:return V=hh(V,z.mode,$),V.return=z,V;case mt:var re=V._init;return te(z,re(V._payload),$)}if(hr(V)||ve(V))return V=es(V,z.mode,$,null),V.return=z,V;Xl(z,V)}return null}function J(z,V,$,re){var me=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return me!==null?null:A(z,V,""+$,re);if(typeof $=="object"&&$!==null){switch($.$$typeof){case oe:return $.key===me?P(z,V,$,re):null;case he:return $.key===me?W(z,V,$,re):null;case mt:return me=$._init,J(z,V,me($._payload),re)}if(hr($)||ve($))return me!==null?null:ee(z,V,$,re,null);Xl(z,$)}return null}function ae(z,V,$,re,me){if(typeof re=="string"&&re!==""||typeof re=="number")return z=z.get($)||null,A(V,z,""+re,me);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case oe:return z=z.get(re.key===null?$:re.key)||null,P(V,z,re,me);case he:return z=z.get(re.key===null?$:re.key)||null,W(V,z,re,me);case mt:var _e=re._init;return ae(z,V,$,_e(re._payload),me)}if(hr(re)||ve(re))return z=z.get($)||null,ee(V,z,re,me,null);Xl(V,re)}return null}function fe(z,V,$,re){for(var me=null,_e=null,Ee=V,Ie=V=0,xt=null;Ee!==null&&Ie<$.length;Ie++){Ee.index>Ie?(xt=Ee,Ee=null):xt=Ee.sibling;var je=J(z,Ee,$[Ie],re);if(je===null){Ee===null&&(Ee=xt);break}r&&Ee&&je.alternate===null&&i(z,Ee),V=m(je,V,Ie),_e===null?me=je:_e.sibling=je,_e=je,Ee=xt}if(Ie===$.length)return a(z,Ee),rt&&Wi(z,Ie),me;if(Ee===null){for(;Ie<$.length;Ie++)Ee=te(z,$[Ie],re),Ee!==null&&(V=m(Ee,V,Ie),_e===null?me=Ee:_e.sibling=Ee,_e=Ee);return rt&&Wi(z,Ie),me}for(Ee=c(z,Ee);Ie<$.length;Ie++)xt=ae(Ee,z,Ie,$[Ie],re),xt!==null&&(r&&xt.alternate!==null&&Ee.delete(xt.key===null?Ie:xt.key),V=m(xt,V,Ie),_e===null?me=xt:_e.sibling=xt,_e=xt);return r&&Ee.forEach(function(ci){return i(z,ci)}),rt&&Wi(z,Ie),me}function de(z,V,$,re){var me=ve($);if(typeof me!="function")throw Error(t(150));if($=me.call($),$==null)throw Error(t(151));for(var _e=me=null,Ee=V,Ie=V=0,xt=null,je=$.next();Ee!==null&&!je.done;Ie++,je=$.next()){Ee.index>Ie?(xt=Ee,Ee=null):xt=Ee.sibling;var ci=J(z,Ee,je.value,re);if(ci===null){Ee===null&&(Ee=xt);break}r&&Ee&&ci.alternate===null&&i(z,Ee),V=m(ci,V,Ie),_e===null?me=ci:_e.sibling=ci,_e=ci,Ee=xt}if(je.done)return a(z,Ee),rt&&Wi(z,Ie),me;if(Ee===null){for(;!je.done;Ie++,je=$.next())je=te(z,je.value,re),je!==null&&(V=m(je,V,Ie),_e===null?me=je:_e.sibling=je,_e=je);return rt&&Wi(z,Ie),me}for(Ee=c(z,Ee);!je.done;Ie++,je=$.next())je=ae(Ee,z,Ie,je.value,re),je!==null&&(r&&je.alternate!==null&&Ee.delete(je.key===null?Ie:je.key),V=m(je,V,Ie),_e===null?me=je:_e.sibling=je,_e=je);return r&&Ee.forEach(function(jE){return i(z,jE)}),rt&&Wi(z,Ie),me}function ut(z,V,$,re){if(typeof $=="object"&&$!==null&&$.type===R&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case oe:e:{for(var me=$.key,_e=V;_e!==null;){if(_e.key===me){if(me=$.type,me===R){if(_e.tag===7){a(z,_e.sibling),V=h(_e,$.props.children),V.return=z,z=V;break e}}else if(_e.elementType===me||typeof me=="object"&&me!==null&&me.$$typeof===mt&&ym(me)===_e.type){a(z,_e.sibling),V=h(_e,$.props),V.ref=ma(z,_e,$),V.return=z,z=V;break e}a(z,_e);break}else i(z,_e);_e=_e.sibling}$.type===R?(V=es($.props.children,z.mode,re,$.key),V.return=z,z=V):(re=wu($.type,$.key,$.props,null,z.mode,re),re.ref=ma(z,V,$),re.return=z,z=re)}return E(z);case he:e:{for(_e=$.key;V!==null;){if(V.key===_e)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(z,V.sibling),V=h(V,$.children||[]),V.return=z,z=V;break e}else{a(z,V);break}else i(z,V);V=V.sibling}V=hh($,z.mode,re),V.return=z,z=V}return E(z);case mt:return _e=$._init,ut(z,V,_e($._payload),re)}if(hr($))return fe(z,V,$,re);if(ve($))return de(z,V,$,re);Xl(z,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(a(z,V.sibling),V=h(V,$),V.return=z,z=V):(a(z,V),V=fh($,z.mode,re),V.return=z,z=V),E(z)):a(z,V)}return ut}var Js=vm(!0),_m=vm(!1),Jl=Zr(null),Zl=null,Zs=null,wf=null;function Tf(){wf=Zs=Zl=null}function Sf(r){var i=Jl.current;et(Jl),r._currentValue=i}function If(r,i,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),r===a)break;r=r.return}}function eo(r,i){Zl=r,wf=Zs=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(en=!0),r.firstContext=null)}function Tn(r){var i=r._currentValue;if(wf!==r)if(r={context:r,memoizedValue:i,next:null},Zs===null){if(Zl===null)throw Error(t(308));Zs=r,Zl.dependencies={lanes:0,firstContext:r}}else Zs=Zs.next=r;return i}var Ki=null;function Af(r){Ki===null?Ki=[r]:Ki.push(r)}function Em(r,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Af(i)):(a.next=h.next,h.next=a),i.interleaved=a,Ar(r,c)}function Ar(r,i){r.lanes|=i;var a=r.alternate;for(a!==null&&(a.lanes|=i),a=r,r=r.return;r!==null;)r.childLanes|=i,a=r.alternate,a!==null&&(a.childLanes|=i),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ni=!1;function Cf(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wm(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Cr(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function ri(r,i,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Oe&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Ar(r,a)}return h=c.interleaved,h===null?(i.next=i,Af(c)):(i.next=h.next,h.next=i),c.interleaved=i,Ar(r,a)}function eu(r,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Wr(r,a)}}function Tm(r,i){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=i:r.next=i,a.lastBaseUpdate=i}function tu(r,i,a,c){var h=r.updateQueue;ni=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var P=A,W=P.next;P.next=null,E===null?m=W:E.next=W,E=P;var ee=r.alternate;ee!==null&&(ee=ee.updateQueue,A=ee.lastBaseUpdate,A!==E&&(A===null?ee.firstBaseUpdate=W:A.next=W,ee.lastBaseUpdate=P))}if(m!==null){var te=h.baseState;E=0,ee=W=P=null,A=m;do{var J=A.lane,ae=A.eventTime;if((c&J)===J){ee!==null&&(ee=ee.next={eventTime:ae,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var fe=r,de=A;switch(J=i,ae=a,de.tag){case 1:if(fe=de.payload,typeof fe=="function"){te=fe.call(ae,te,J);break e}te=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=de.payload,J=typeof fe=="function"?fe.call(ae,te,J):fe,J==null)break e;te=le({},te,J);break e;case 2:ni=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,J=h.effects,J===null?h.effects=[A]:J.push(A))}else ae={eventTime:ae,lane:J,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ee===null?(W=ee=ae,P=te):ee=ee.next=ae,E|=J;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;J=A,A=J.next,J.next=null,h.lastBaseUpdate=J,h.shared.pending=null}}while(!0);if(ee===null&&(P=te),h.baseState=P,h.firstBaseUpdate=W,h.lastBaseUpdate=ee,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);Yi|=E,r.lanes=E,r.memoizedState=te}}function Sm(r,i,a){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var c=r[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var ga={},Zn=Zr(ga),ya=Zr(ga),va=Zr(ga);function Gi(r){if(r===ga)throw Error(t(174));return r}function xf(r,i){switch(Xe(va,i),Xe(ya,r),Xe(Zn,ga),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:yt(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=yt(i,r)}et(Zn),Xe(Zn,i)}function to(){et(Zn),et(ya),et(va)}function Im(r){Gi(va.current);var i=Gi(Zn.current),a=yt(i,r.type);i!==a&&(Xe(ya,r),Xe(Zn,a))}function Rf(r){ya.current===r&&(et(Zn),et(ya))}var it=Zr(0);function nu(r){for(var i=r;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pf=[];function kf(){for(var r=0;r<Pf.length;r++)Pf[r]._workInProgressVersionPrimary=null;Pf.length=0}var ru=Z.ReactCurrentDispatcher,bf=Z.ReactCurrentBatchConfig,Qi=0,st=null,_t=null,At=null,iu=!1,_a=!1,Ea=0,aE=0;function Ft(){throw Error(t(321))}function Nf(r,i){if(i===null)return!1;for(var a=0;a<i.length&&a<r.length;a++)if(!Fn(r[a],i[a]))return!1;return!0}function Df(r,i,a,c,h,m){if(Qi=m,st=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ru.current=r===null||r.memoizedState===null?fE:hE,r=a(c,h),_a){m=0;do{if(_a=!1,Ea=0,25<=m)throw Error(t(301));m+=1,At=_t=null,i.updateQueue=null,ru.current=dE,r=a(c,h)}while(_a)}if(ru.current=au,i=_t!==null&&_t.next!==null,Qi=0,At=_t=st=null,iu=!1,i)throw Error(t(300));return r}function Vf(){var r=Ea!==0;return Ea=0,r}function er(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?st.memoizedState=At=r:At=At.next=r,At}function Sn(){if(_t===null){var r=st.alternate;r=r!==null?r.memoizedState:null}else r=_t.next;var i=At===null?st.memoizedState:At.next;if(i!==null)At=i,_t=r;else{if(r===null)throw Error(t(310));_t=r,r={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},At===null?st.memoizedState=At=r:At=At.next=r}return At}function wa(r,i){return typeof i=="function"?i(r):i}function Lf(r){var i=Sn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=_t,h=c.baseQueue,m=a.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}c.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,c=c.baseState;var A=E=null,P=null,W=m;do{var ee=W.lane;if((Qi&ee)===ee)P!==null&&(P=P.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),c=W.hasEagerState?W.eagerState:r(c,W.action);else{var te={lane:ee,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};P===null?(A=P=te,E=c):P=P.next=te,st.lanes|=ee,Yi|=ee}W=W.next}while(W!==null&&W!==m);P===null?E=c:P.next=A,Fn(c,i.memoizedState)||(en=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){h=r;do m=h.lane,st.lanes|=m,Yi|=m,h=h.next;while(h!==r)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Of(r){var i=Sn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do m=r(m,E.action),E=E.next;while(E!==h);Fn(m,i.memoizedState)||(en=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Am(){}function Cm(r,i){var a=st,c=Sn(),h=i(),m=!Fn(c.memoizedState,h);if(m&&(c.memoizedState=h,en=!0),c=c.queue,Mf(Pm.bind(null,a,c,r),[r]),c.getSnapshot!==i||m||At!==null&&At.memoizedState.tag&1){if(a.flags|=2048,Ta(9,Rm.bind(null,a,c,h,i),void 0,null),Ct===null)throw Error(t(349));(Qi&30)!==0||xm(a,i,h)}return h}function xm(r,i,a){r.flags|=16384,r={getSnapshot:i,value:a},i=st.updateQueue,i===null?(i={lastEffect:null,stores:null},st.updateQueue=i,i.stores=[r]):(a=i.stores,a===null?i.stores=[r]:a.push(r))}function Rm(r,i,a,c){i.value=a,i.getSnapshot=c,km(i)&&bm(r)}function Pm(r,i,a){return a(function(){km(i)&&bm(r)})}function km(r){var i=r.getSnapshot;r=r.value;try{var a=i();return!Fn(r,a)}catch{return!0}}function bm(r){var i=Ar(r,1);i!==null&&Bn(i,r,1,-1)}function Nm(r){var i=er();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:r},i.queue=r,r=r.dispatch=cE.bind(null,st,r),[i.memoizedState,r]}function Ta(r,i,a,c){return r={tag:r,create:i,destroy:a,deps:c,next:null},i=st.updateQueue,i===null?(i={lastEffect:null,stores:null},st.updateQueue=i,i.lastEffect=r.next=r):(a=i.lastEffect,a===null?i.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,i.lastEffect=r)),r}function Dm(){return Sn().memoizedState}function su(r,i,a,c){var h=er();st.flags|=r,h.memoizedState=Ta(1|i,a,void 0,c===void 0?null:c)}function ou(r,i,a,c){var h=Sn();c=c===void 0?null:c;var m=void 0;if(_t!==null){var E=_t.memoizedState;if(m=E.destroy,c!==null&&Nf(c,E.deps)){h.memoizedState=Ta(i,a,m,c);return}}st.flags|=r,h.memoizedState=Ta(1|i,a,m,c)}function Vm(r,i){return su(8390656,8,r,i)}function Mf(r,i){return ou(2048,8,r,i)}function Lm(r,i){return ou(4,2,r,i)}function Om(r,i){return ou(4,4,r,i)}function Mm(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Fm(r,i,a){return a=a!=null?a.concat([r]):null,ou(4,4,Mm.bind(null,i,r),a)}function Ff(){}function jm(r,i){var a=Sn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Nf(i,c[1])?c[0]:(a.memoizedState=[r,i],r)}function zm(r,i){var a=Sn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Nf(i,c[1])?c[0]:(r=r(),a.memoizedState=[r,i],r)}function Um(r,i,a){return(Qi&21)===0?(r.baseState&&(r.baseState=!1,en=!0),r.memoizedState=a):(Fn(a,i)||(a=Fi(),st.lanes|=a,Yi|=a,r.baseState=!0),i)}function lE(r,i){var a=ke;ke=a!==0&&4>a?a:4,r(!0);var c=bf.transition;bf.transition={};try{r(!1),i()}finally{ke=a,bf.transition=c}}function $m(){return Sn().memoizedState}function uE(r,i,a){var c=ai(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Bm(r))Hm(i,a);else if(a=Em(r,i,a,c),a!==null){var h=Gt();Bn(a,r,c,h),qm(a,i,c)}}function cE(r,i,a){var c=ai(r),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bm(r))Hm(i,h);else{var m=r.alternate;if(r.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,A=m(E,a);if(h.hasEagerState=!0,h.eagerState=A,Fn(A,E)){var P=i.interleaved;P===null?(h.next=h,Af(i)):(h.next=P.next,P.next=h),i.interleaved=h;return}}catch{}finally{}a=Em(r,i,h,c),a!==null&&(h=Gt(),Bn(a,r,c,h),qm(a,i,c))}}function Bm(r){var i=r.alternate;return r===st||i!==null&&i===st}function Hm(r,i){_a=iu=!0;var a=r.pending;a===null?i.next=i:(i.next=a.next,a.next=i),r.pending=i}function qm(r,i,a){if((a&4194240)!==0){var c=i.lanes;c&=r.pendingLanes,a|=c,i.lanes=a,Wr(r,a)}}var au={readContext:Tn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},fE={readContext:Tn,useCallback:function(r,i){return er().memoizedState=[r,i===void 0?null:i],r},useContext:Tn,useEffect:Vm,useImperativeHandle:function(r,i,a){return a=a!=null?a.concat([r]):null,su(4194308,4,Mm.bind(null,i,r),a)},useLayoutEffect:function(r,i){return su(4194308,4,r,i)},useInsertionEffect:function(r,i){return su(4,2,r,i)},useMemo:function(r,i){var a=er();return i=i===void 0?null:i,r=r(),a.memoizedState=[r,i],r},useReducer:function(r,i,a){var c=er();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},c.queue=r,r=r.dispatch=uE.bind(null,st,r),[c.memoizedState,r]},useRef:function(r){var i=er();return r={current:r},i.memoizedState=r},useState:Nm,useDebugValue:Ff,useDeferredValue:function(r){return er().memoizedState=r},useTransition:function(){var r=Nm(!1),i=r[0];return r=lE.bind(null,r[1]),er().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,a){var c=st,h=er();if(rt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Ct===null)throw Error(t(349));(Qi&30)!==0||xm(c,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,Vm(Pm.bind(null,c,m,r),[r]),c.flags|=2048,Ta(9,Rm.bind(null,c,m,a,i),void 0,null),a},useId:function(){var r=er(),i=Ct.identifierPrefix;if(rt){var a=Ir,c=Sr;a=(c&~(1<<32-qt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ea++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=aE++,i=":"+i+"r"+a.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},hE={readContext:Tn,useCallback:jm,useContext:Tn,useEffect:Mf,useImperativeHandle:Fm,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:zm,useReducer:Lf,useRef:Dm,useState:function(){return Lf(wa)},useDebugValue:Ff,useDeferredValue:function(r){var i=Sn();return Um(i,_t.memoizedState,r)},useTransition:function(){var r=Lf(wa)[0],i=Sn().memoizedState;return[r,i]},useMutableSource:Am,useSyncExternalStore:Cm,useId:$m,unstable_isNewReconciler:!1},dE={readContext:Tn,useCallback:jm,useContext:Tn,useEffect:Mf,useImperativeHandle:Fm,useInsertionEffect:Lm,useLayoutEffect:Om,useMemo:zm,useReducer:Of,useRef:Dm,useState:function(){return Of(wa)},useDebugValue:Ff,useDeferredValue:function(r){var i=Sn();return _t===null?i.memoizedState=r:Um(i,_t.memoizedState,r)},useTransition:function(){var r=Of(wa)[0],i=Sn().memoizedState;return[r,i]},useMutableSource:Am,useSyncExternalStore:Cm,useId:$m,unstable_isNewReconciler:!1};function zn(r,i){if(r&&r.defaultProps){i=le({},i),r=r.defaultProps;for(var a in r)i[a]===void 0&&(i[a]=r[a]);return i}return i}function jf(r,i,a,c){i=r.memoizedState,a=a(c,i),a=a==null?i:le({},i,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var lu={isMounted:function(r){return(r=r._reactInternals)?bn(r)===r:!1},enqueueSetState:function(r,i,a){r=r._reactInternals;var c=Gt(),h=ai(r),m=Cr(c,h);m.payload=i,a!=null&&(m.callback=a),i=ri(r,m,h),i!==null&&(Bn(i,r,h,c),eu(i,r,h))},enqueueReplaceState:function(r,i,a){r=r._reactInternals;var c=Gt(),h=ai(r),m=Cr(c,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ri(r,m,h),i!==null&&(Bn(i,r,h,c),eu(i,r,h))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var a=Gt(),c=ai(r),h=Cr(a,c);h.tag=2,i!=null&&(h.callback=i),i=ri(r,h,c),i!==null&&(Bn(i,r,c,a),eu(i,r,c))}};function Wm(r,i,a,c,h,m,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!la(a,c)||!la(h,m):!0}function Km(r,i,a){var c=!1,h=ei,m=i.contextType;return typeof m=="object"&&m!==null?m=Tn(m):(h=Zt(i)?Hi:Mt.current,c=i.contextTypes,m=(c=c!=null)?Gs(r,h):ei),i=new i(a,m),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=lu,r.stateNode=i,i._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=h,r.__reactInternalMemoizedMaskedChildContext=m),i}function Gm(r,i,a,c){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==r&&lu.enqueueReplaceState(i,i.state,null)}function zf(r,i,a,c){var h=r.stateNode;h.props=a,h.state=r.memoizedState,h.refs={},Cf(r);var m=i.contextType;typeof m=="object"&&m!==null?h.context=Tn(m):(m=Zt(i)?Hi:Mt.current,h.context=Gs(r,m)),h.state=r.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(jf(r,i,m,a),h.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&lu.enqueueReplaceState(h,h.state,null),tu(r,a,h,c),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308)}function no(r,i){try{var a="",c=i;do a+=Ce(c),c=c.return;while(c);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:r,source:i,stack:h,digest:null}}function Uf(r,i,a){return{value:r,source:null,stack:a??null,digest:i??null}}function $f(r,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var pE=typeof WeakMap=="function"?WeakMap:Map;function Qm(r,i,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){mu||(mu=!0,rh=c),$f(r,i)},a}function Ym(r,i,a){a=Cr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){$f(r,i)}}var m=r.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){$f(r,i),typeof c!="function"&&(si===null?si=new Set([this]):si.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Xm(r,i,a){var c=r.pingCache;if(c===null){c=r.pingCache=new pE;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),r=RE.bind(null,r,i,a),i.then(r,r))}function Jm(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function Zm(r,i,a,c,h){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Cr(-1,1),i.tag=2,ri(a,i,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=h,r)}var mE=Z.ReactCurrentOwner,en=!1;function Kt(r,i,a,c){i.child=r===null?_m(i,null,a,c):Js(i,r.child,a,c)}function eg(r,i,a,c,h){a=a.render;var m=i.ref;return eo(i,h),c=Df(r,i,a,c,m,h),a=Vf(),r!==null&&!en?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~h,xr(r,i,h)):(rt&&a&&gf(i),i.flags|=1,Kt(r,i,c,h),i.child)}function tg(r,i,a,c,h){if(r===null){var m=a.type;return typeof m=="function"&&!ch(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,ng(r,i,m,c,h)):(r=wu(a.type,null,c,i,i.mode,h),r.ref=i.ref,r.return=i,i.child=r)}if(m=r.child,(r.lanes&h)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:la,a(E,c)&&r.ref===i.ref)return xr(r,i,h)}return i.flags|=1,r=ui(m,c),r.ref=i.ref,r.return=i,i.child=r}function ng(r,i,a,c,h){if(r!==null){var m=r.memoizedProps;if(la(m,c)&&r.ref===i.ref)if(en=!1,i.pendingProps=c=m,(r.lanes&h)!==0)(r.flags&131072)!==0&&(en=!0);else return i.lanes=r.lanes,xr(r,i,h)}return Bf(r,i,a,c,h)}function rg(r,i,a){var c=i.pendingProps,h=c.children,m=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(io,dn),dn|=a;else{if((a&1073741824)===0)return r=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,Xe(io,dn),dn|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Xe(io,dn),dn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Xe(io,dn),dn|=c;return Kt(r,i,h,a),i.child}function ig(r,i){var a=i.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Bf(r,i,a,c,h){var m=Zt(a)?Hi:Mt.current;return m=Gs(i,m),eo(i,h),a=Df(r,i,a,c,m,h),c=Vf(),r!==null&&!en?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~h,xr(r,i,h)):(rt&&c&&gf(i),i.flags|=1,Kt(r,i,a,h),i.child)}function sg(r,i,a,c,h){if(Zt(a)){var m=!0;Wl(i)}else m=!1;if(eo(i,h),i.stateNode===null)cu(r,i),Km(i,a,c),zf(i,a,c,h),c=!0;else if(r===null){var E=i.stateNode,A=i.memoizedProps;E.props=A;var P=E.context,W=a.contextType;typeof W=="object"&&W!==null?W=Tn(W):(W=Zt(a)?Hi:Mt.current,W=Gs(i,W));var ee=a.getDerivedStateFromProps,te=typeof ee=="function"||typeof E.getSnapshotBeforeUpdate=="function";te||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==c||P!==W)&&Gm(i,E,c,W),ni=!1;var J=i.memoizedState;E.state=J,tu(i,c,E,h),P=i.memoizedState,A!==c||J!==P||Jt.current||ni?(typeof ee=="function"&&(jf(i,a,ee,c),P=i.memoizedState),(A=ni||Wm(i,a,A,c,J,P,W))?(te||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),E.props=c,E.state=P,E.context=W,c=A):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,wm(r,i),A=i.memoizedProps,W=i.type===i.elementType?A:zn(i.type,A),E.props=W,te=i.pendingProps,J=E.context,P=a.contextType,typeof P=="object"&&P!==null?P=Tn(P):(P=Zt(a)?Hi:Mt.current,P=Gs(i,P));var ae=a.getDerivedStateFromProps;(ee=typeof ae=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(A!==te||J!==P)&&Gm(i,E,c,P),ni=!1,J=i.memoizedState,E.state=J,tu(i,c,E,h);var fe=i.memoizedState;A!==te||J!==fe||Jt.current||ni?(typeof ae=="function"&&(jf(i,a,ae,c),fe=i.memoizedState),(W=ni||Wm(i,a,W,c,J,fe,P)||!1)?(ee||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,fe,P),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,fe,P)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=fe),E.props=c,E.state=fe,E.context=P,c=W):(typeof E.componentDidUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&J===r.memoizedState||(i.flags|=1024),c=!1)}return Hf(r,i,a,c,m,h)}function Hf(r,i,a,c,h,m){ig(r,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&cm(i,a,!1),xr(r,i,m);c=i.stateNode,mE.current=i;var A=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,r!==null&&E?(i.child=Js(i,r.child,null,m),i.child=Js(i,null,A,m)):Kt(r,i,A,m),i.memoizedState=c.state,h&&cm(i,a,!0),i.child}function og(r){var i=r.stateNode;i.pendingContext?lm(r,i.pendingContext,i.pendingContext!==i.context):i.context&&lm(r,i.context,!1),xf(r,i.containerInfo)}function ag(r,i,a,c,h){return Xs(),Ef(h),i.flags|=256,Kt(r,i,a,c),i.child}var qf={dehydrated:null,treeContext:null,retryLane:0};function Wf(r){return{baseLanes:r,cachePool:null,transitions:null}}function lg(r,i,a){var c=i.pendingProps,h=it.current,m=!1,E=(i.flags&128)!==0,A;if((A=E)||(A=r!==null&&r.memoizedState===null?!1:(h&2)!==0),A?(m=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(h|=1),Xe(it,h&1),r===null)return _f(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,r=c.fallback,m?(c=i.mode,m=i.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=Tu(E,c,0,null),r=es(r,c,a,null),m.return=i,r.return=i,m.sibling=r,i.child=m,i.child.memoizedState=Wf(a),i.memoizedState=qf,r):Kf(i,E));if(h=r.memoizedState,h!==null&&(A=h.dehydrated,A!==null))return gE(r,i,E,c,A,h,a);if(m){m=c.fallback,E=i.mode,h=r.child,A=h.sibling;var P={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ui(h,P),c.subtreeFlags=h.subtreeFlags&14680064),A!==null?m=ui(A,m):(m=es(m,E,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,E=r.child.memoizedState,E=E===null?Wf(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=r.childLanes&~a,i.memoizedState=qf,c}return m=r.child,r=m.sibling,c=ui(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,r!==null&&(a=i.deletions,a===null?(i.deletions=[r],i.flags|=16):a.push(r)),i.child=c,i.memoizedState=null,c}function Kf(r,i){return i=Tu({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function uu(r,i,a,c){return c!==null&&Ef(c),Js(i,r.child,null,a),r=Kf(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function gE(r,i,a,c,h,m,E){if(a)return i.flags&256?(i.flags&=-257,c=Uf(Error(t(422))),uu(r,i,E,c)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=Tu({mode:"visible",children:c.children},h,0,null),m=es(m,h,E,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Js(i,r.child,null,E),i.child.memoizedState=Wf(E),i.memoizedState=qf,m);if((i.mode&1)===0)return uu(r,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var A=c.dgst;return c=A,m=Error(t(419)),c=Uf(m,c,void 0),uu(r,i,E,c)}if(A=(E&r.childLanes)!==0,en||A){if(c=Ct,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Ar(r,h),Bn(c,r,h,-1))}return uh(),c=Uf(Error(t(421))),uu(r,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=r.child,i=PE.bind(null,r),h._reactRetry=i,null):(r=m.treeContext,hn=Jr(h.nextSibling),fn=i,rt=!0,jn=null,r!==null&&(En[wn++]=Sr,En[wn++]=Ir,En[wn++]=qi,Sr=r.id,Ir=r.overflow,qi=i),i=Kf(i,c.children),i.flags|=4096,i)}function ug(r,i,a){r.lanes|=i;var c=r.alternate;c!==null&&(c.lanes|=i),If(r.return,i,a)}function Gf(r,i,a,c,h){var m=r.memoizedState;m===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=h)}function cg(r,i,a){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(Kt(r,i,c.children,a),c=it.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ug(r,a,i);else if(r.tag===19)ug(r,a,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Xe(it,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)r=a.alternate,r!==null&&nu(r)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Gf(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(r=h.alternate,r!==null&&nu(r)===null){i.child=h;break}r=h.sibling,h.sibling=a,a=h,h=r}Gf(i,!0,a,null,m);break;case"together":Gf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function cu(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function xr(r,i,a){if(r!==null&&(i.dependencies=r.dependencies),Yi|=i.lanes,(a&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(t(153));if(i.child!==null){for(r=i.child,a=ui(r,r.pendingProps),i.child=a,a.return=i;r.sibling!==null;)r=r.sibling,a=a.sibling=ui(r,r.pendingProps),a.return=i;a.sibling=null}return i.child}function yE(r,i,a){switch(i.tag){case 3:og(i),Xs();break;case 5:Im(i);break;case 1:Zt(i.type)&&Wl(i);break;case 4:xf(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Xe(Jl,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Xe(it,it.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?lg(r,i,a):(Xe(it,it.current&1),r=xr(r,i,a),r!==null?r.sibling:null);Xe(it,it.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(r.flags&128)!==0){if(c)return cg(r,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Xe(it,it.current),c)break;return null;case 22:case 23:return i.lanes=0,rg(r,i,a)}return xr(r,i,a)}var fg,Qf,hg,dg;fg=function(r,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Qf=function(){},hg=function(r,i,a,c){var h=r.memoizedProps;if(h!==c){r=i.stateNode,Gi(Zn.current);var m=null;switch(a){case"input":h=xi(r,h),c=xi(r,c),m=[];break;case"select":h=le({},h,{value:void 0}),c=le({},c,{value:void 0}),m=[];break;case"textarea":h=Mo(r,h),c=Mo(r,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Bl)}Bo(a,c);var E;a=null;for(W in h)if(!c.hasOwnProperty(W)&&h.hasOwnProperty(W)&&h[W]!=null)if(W==="style"){var A=h[W];for(E in A)A.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(o.hasOwnProperty(W)?m||(m=[]):(m=m||[]).push(W,null));for(W in c){var P=c[W];if(A=h!=null?h[W]:void 0,c.hasOwnProperty(W)&&P!==A&&(P!=null||A!=null))if(W==="style")if(A){for(E in A)!A.hasOwnProperty(E)||P&&P.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in P)P.hasOwnProperty(E)&&A[E]!==P[E]&&(a||(a={}),a[E]=P[E])}else a||(m||(m=[]),m.push(W,a)),a=P;else W==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,A=A?A.__html:void 0,P!=null&&A!==P&&(m=m||[]).push(W,P)):W==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(W,""+P):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(o.hasOwnProperty(W)?(P!=null&&W==="onScroll"&&Ze("scroll",r),m||A===P||(m=[])):(m=m||[]).push(W,P))}a&&(m=m||[]).push("style",a);var W=m;(i.updateQueue=W)&&(i.flags|=4)}},dg=function(r,i,a,c){a!==c&&(i.flags|=4)};function Sa(r,i){if(!rt)switch(r.tailMode){case"hidden":i=r.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function jt(r){var i=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(i)for(var h=r.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=c,r.childLanes=a,i}function vE(r,i,a){var c=i.pendingProps;switch(yf(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(i),null;case 1:return Zt(i.type)&&ql(),jt(i),null;case 3:return c=i.stateNode,to(),et(Jt),et(Mt),kf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(Yl(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,jn!==null&&(oh(jn),jn=null))),Qf(r,i),jt(i),null;case 5:Rf(i);var h=Gi(va.current);if(a=i.type,r!==null&&i.stateNode!=null)hg(r,i,a,c,h),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return jt(i),null}if(r=Gi(Zn.current),Yl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Jn]=i,c[da]=m,r=(i.mode&1)!==0,a){case"dialog":Ze("cancel",c),Ze("close",c);break;case"iframe":case"object":case"embed":Ze("load",c);break;case"video":case"audio":for(h=0;h<ca.length;h++)Ze(ca[h],c);break;case"source":Ze("error",c);break;case"img":case"image":case"link":Ze("error",c),Ze("load",c);break;case"details":Ze("toggle",c);break;case"input":gs(c,m),Ze("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ze("invalid",c);break;case"textarea":vs(c,m),Ze("invalid",c)}Bo(a,m),h=null;for(var E in m)if(m.hasOwnProperty(E)){var A=m[E];E==="children"?typeof A=="string"?c.textContent!==A&&(m.suppressHydrationWarning!==!0&&$l(c.textContent,A,r),h=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(m.suppressHydrationWarning!==!0&&$l(c.textContent,A,r),h=["children",""+A]):o.hasOwnProperty(E)&&A!=null&&E==="onScroll"&&Ze("scroll",c)}switch(a){case"input":fr(c),pl(c,m,!0);break;case"textarea":fr(c),Fo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Bl)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=gt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=E.createElement(a,{is:c.is}):(r=E.createElement(a),a==="select"&&(E=r,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):r=E.createElementNS(r,a),r[Jn]=i,r[da]=c,fg(r,i,!1,!1),i.stateNode=r;e:{switch(E=Ho(a,c),a){case"dialog":Ze("cancel",r),Ze("close",r),h=c;break;case"iframe":case"object":case"embed":Ze("load",r),h=c;break;case"video":case"audio":for(h=0;h<ca.length;h++)Ze(ca[h],r);h=c;break;case"source":Ze("error",r),h=c;break;case"img":case"image":case"link":Ze("error",r),Ze("load",r),h=c;break;case"details":Ze("toggle",r),h=c;break;case"input":gs(r,c),h=xi(r,c),Ze("invalid",r);break;case"option":h=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},h=le({},c,{value:void 0}),Ze("invalid",r);break;case"textarea":vs(r,c),h=Mo(r,c),Ze("invalid",r);break;default:h=c}Bo(a,h),A=h;for(m in A)if(A.hasOwnProperty(m)){var P=A[m];m==="style"?Uo(r,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&jo(r,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Ur(r,P):typeof P=="number"&&Ur(r,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&Ze("scroll",r):P!=null&&K(r,m,P,E))}switch(a){case"input":fr(r),pl(r,c,!1);break;case"textarea":fr(r),Fo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ue(c.value));break;case"select":r.multiple=!!c.multiple,m=c.value,m!=null?dr(r,!!c.multiple,m,!1):c.defaultValue!=null&&dr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(r.onclick=Bl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return jt(i),null;case 6:if(r&&i.stateNode!=null)dg(r,i,r.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Gi(va.current),Gi(Zn.current),Yl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Jn]=i,(m=c.nodeValue!==a)&&(r=fn,r!==null))switch(r.tag){case 3:$l(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&$l(c.nodeValue,a,(r.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Jn]=i,i.stateNode=c}return jt(i),null;case 13:if(et(it),c=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(rt&&hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)gm(),Xs(),i.flags|=98560,m=!1;else if(m=Yl(i),c!==null&&c.dehydrated!==null){if(r===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Jn]=i}else Xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jt(i),m=!1}else jn!==null&&(oh(jn),jn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(it.current&1)!==0?Et===0&&(Et=3):uh())),i.updateQueue!==null&&(i.flags|=4),jt(i),null);case 4:return to(),Qf(r,i),r===null&&fa(i.stateNode.containerInfo),jt(i),null;case 10:return Sf(i.type._context),jt(i),null;case 17:return Zt(i.type)&&ql(),jt(i),null;case 19:if(et(it),m=i.memoizedState,m===null)return jt(i),null;if(c=(i.flags&128)!==0,E=m.rendering,E===null)if(c)Sa(m,!1);else{if(Et!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(E=nu(r),E!==null){for(i.flags|=128,Sa(m,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,r=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=r,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,r=E.dependencies,m.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Xe(it,it.current&1|2),i.child}r=r.sibling}m.tail!==null&&Ye()>so&&(i.flags|=128,c=!0,Sa(m,!1),i.lanes=4194304)}else{if(!c)if(r=nu(E),r!==null){if(i.flags|=128,c=!0,a=r.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Sa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!rt)return jt(i),null}else 2*Ye()-m.renderingStartTime>so&&a!==1073741824&&(i.flags|=128,c=!0,Sa(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ye(),i.sibling=null,a=it.current,Xe(it,c?a&1|2:a&1),i):(jt(i),null);case 22:case 23:return lh(),c=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(dn&1073741824)!==0&&(jt(i),i.subtreeFlags&6&&(i.flags|=8192)):jt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function _E(r,i){switch(yf(i),i.tag){case 1:return Zt(i.type)&&ql(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return to(),et(Jt),et(Mt),kf(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return Rf(i),null;case 13:if(et(it),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Xs()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return et(it),null;case 4:return to(),null;case 10:return Sf(i.type._context),null;case 22:case 23:return lh(),null;case 24:return null;default:return null}}var fu=!1,zt=!1,EE=typeof WeakSet=="function"?WeakSet:Set,ce=null;function ro(r,i){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){at(r,i,c)}else a.current=null}function Yf(r,i,a){try{a()}catch(c){at(r,i,c)}}var pg=!1;function wE(r,i){if(lf=Qr,r=Wp(),Zc(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,A=-1,P=-1,W=0,ee=0,te=r,J=null;t:for(;;){for(var ae;te!==a||h!==0&&te.nodeType!==3||(A=E+h),te!==m||c!==0&&te.nodeType!==3||(P=E+c),te.nodeType===3&&(E+=te.nodeValue.length),(ae=te.firstChild)!==null;)J=te,te=ae;for(;;){if(te===r)break t;if(J===a&&++W===h&&(A=E),J===m&&++ee===c&&(P=E),(ae=te.nextSibling)!==null)break;te=J,J=te.parentNode}te=ae}a=A===-1||P===-1?null:{start:A,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(uf={focusedElem:r,selectionRange:a},Qr=!1,ce=i;ce!==null;)if(i=ce,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,ce=r;else for(;ce!==null;){i=ce;try{var fe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var de=fe.memoizedProps,ut=fe.memoizedState,z=i.stateNode,V=z.getSnapshotBeforeUpdate(i.elementType===i.type?de:zn(i.type,de),ut);z.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(re){at(i,i.return,re)}if(r=i.sibling,r!==null){r.return=i.return,ce=r;break}ce=i.return}return fe=pg,pg=!1,fe}function Ia(r,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&r)===r){var m=h.destroy;h.destroy=void 0,m!==void 0&&Yf(i,a,m)}h=h.next}while(h!==c)}}function hu(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Xf(r){var i=r.ref;if(i!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof i=="function"?i(r):i.current=r}}function mg(r){var i=r.alternate;i!==null&&(r.alternate=null,mg(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[Jn],delete i[da],delete i[df],delete i[rE],delete i[iE])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function gg(r){return r.tag===5||r.tag===3||r.tag===4}function yg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||gg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Jf(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(r,i):a.insertBefore(r,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(r,a)):(i=a,i.appendChild(r)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Bl));else if(c!==4&&(r=r.child,r!==null))for(Jf(r,i,a),r=r.sibling;r!==null;)Jf(r,i,a),r=r.sibling}function Zf(r,i,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?a.insertBefore(r,i):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Zf(r,i,a),r=r.sibling;r!==null;)Zf(r,i,a),r=r.sibling}var Dt=null,Un=!1;function ii(r,i,a){for(a=a.child;a!==null;)vg(r,i,a),a=a.sibling}function vg(r,i,a){if(an&&typeof an.onCommitFiberUnmount=="function")try{an.onCommitFiberUnmount(Oi,a)}catch{}switch(a.tag){case 5:zt||ro(a,i);case 6:var c=Dt,h=Un;Dt=null,ii(r,i,a),Dt=c,Un=h,Dt!==null&&(Un?(r=Dt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Dt.removeChild(a.stateNode));break;case 18:Dt!==null&&(Un?(r=Dt,a=a.stateNode,r.nodeType===8?hf(r.parentNode,a):r.nodeType===1&&hf(r,a),On(r)):hf(Dt,a.stateNode));break;case 4:c=Dt,h=Un,Dt=a.stateNode.containerInfo,Un=!0,ii(r,i,a),Dt=c,Un=h;break;case 0:case 11:case 14:case 15:if(!zt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Yf(a,i,E),h=h.next}while(h!==c)}ii(r,i,a);break;case 1:if(!zt&&(ro(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){at(a,i,A)}ii(r,i,a);break;case 21:ii(r,i,a);break;case 22:a.mode&1?(zt=(c=zt)||a.memoizedState!==null,ii(r,i,a),zt=c):ii(r,i,a);break;default:ii(r,i,a)}}function _g(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new EE),i.forEach(function(c){var h=kE.bind(null,r,c);a.has(c)||(a.add(c),c.then(h,h))})}}function $n(r,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var m=r,E=i,A=E;e:for(;A!==null;){switch(A.tag){case 5:Dt=A.stateNode,Un=!1;break e;case 3:Dt=A.stateNode.containerInfo,Un=!0;break e;case 4:Dt=A.stateNode.containerInfo,Un=!0;break e}A=A.return}if(Dt===null)throw Error(t(160));vg(m,E,h),Dt=null,Un=!1;var P=h.alternate;P!==null&&(P.return=null),h.return=null}catch(W){at(h,i,W)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Eg(i,r),i=i.sibling}function Eg(r,i){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if($n(i,r),tr(r),c&4){try{Ia(3,r,r.return),hu(3,r)}catch(de){at(r,r.return,de)}try{Ia(5,r,r.return)}catch(de){at(r,r.return,de)}}break;case 1:$n(i,r),tr(r),c&512&&a!==null&&ro(a,a.return);break;case 5:if($n(i,r),tr(r),c&512&&a!==null&&ro(a,a.return),r.flags&32){var h=r.stateNode;try{Ur(h,"")}catch(de){at(r,r.return,de)}}if(c&4&&(h=r.stateNode,h!=null)){var m=r.memoizedProps,E=a!==null?a.memoizedProps:m,A=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{A==="input"&&m.type==="radio"&&m.name!=null&&Lo(h,m),Ho(A,E);var W=Ho(A,m);for(E=0;E<P.length;E+=2){var ee=P[E],te=P[E+1];ee==="style"?Uo(h,te):ee==="dangerouslySetInnerHTML"?jo(h,te):ee==="children"?Ur(h,te):K(h,ee,te,W)}switch(A){case"input":Oo(h,m);break;case"textarea":_s(h,m);break;case"select":var J=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var ae=m.value;ae!=null?dr(h,!!m.multiple,ae,!1):J!==!!m.multiple&&(m.defaultValue!=null?dr(h,!!m.multiple,m.defaultValue,!0):dr(h,!!m.multiple,m.multiple?[]:"",!1))}h[da]=m}catch(de){at(r,r.return,de)}}break;case 6:if($n(i,r),tr(r),c&4){if(r.stateNode===null)throw Error(t(162));h=r.stateNode,m=r.memoizedProps;try{h.nodeValue=m}catch(de){at(r,r.return,de)}}break;case 3:if($n(i,r),tr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{On(i.containerInfo)}catch(de){at(r,r.return,de)}break;case 4:$n(i,r),tr(r);break;case 13:$n(i,r),tr(r),h=r.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(nh=Ye())),c&4&&_g(r);break;case 22:if(ee=a!==null&&a.memoizedState!==null,r.mode&1?(zt=(W=zt)||ee,$n(i,r),zt=W):$n(i,r),tr(r),c&8192){if(W=r.memoizedState!==null,(r.stateNode.isHidden=W)&&!ee&&(r.mode&1)!==0)for(ce=r,ee=r.child;ee!==null;){for(te=ce=ee;ce!==null;){switch(J=ce,ae=J.child,J.tag){case 0:case 11:case 14:case 15:Ia(4,J,J.return);break;case 1:ro(J,J.return);var fe=J.stateNode;if(typeof fe.componentWillUnmount=="function"){c=J,a=J.return;try{i=c,fe.props=i.memoizedProps,fe.state=i.memoizedState,fe.componentWillUnmount()}catch(de){at(c,a,de)}}break;case 5:ro(J,J.return);break;case 22:if(J.memoizedState!==null){Sg(te);continue}}ae!==null?(ae.return=J,ce=ae):Sg(te)}ee=ee.sibling}e:for(ee=null,te=r;;){if(te.tag===5){if(ee===null){ee=te;try{h=te.stateNode,W?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(A=te.stateNode,P=te.memoizedProps.style,E=P!=null&&P.hasOwnProperty("display")?P.display:null,A.style.display=zo("display",E))}catch(de){at(r,r.return,de)}}}else if(te.tag===6){if(ee===null)try{te.stateNode.nodeValue=W?"":te.memoizedProps}catch(de){at(r,r.return,de)}}else if((te.tag!==22&&te.tag!==23||te.memoizedState===null||te===r)&&te.child!==null){te.child.return=te,te=te.child;continue}if(te===r)break e;for(;te.sibling===null;){if(te.return===null||te.return===r)break e;ee===te&&(ee=null),te=te.return}ee===te&&(ee=null),te.sibling.return=te.return,te=te.sibling}}break;case 19:$n(i,r),tr(r),c&4&&_g(r);break;case 21:break;default:$n(i,r),tr(r)}}function tr(r){var i=r.flags;if(i&2){try{e:{for(var a=r.return;a!==null;){if(gg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Ur(h,""),c.flags&=-33);var m=yg(r);Zf(r,m,h);break;case 3:case 4:var E=c.stateNode.containerInfo,A=yg(r);Jf(r,A,E);break;default:throw Error(t(161))}}catch(P){at(r,r.return,P)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function TE(r,i,a){ce=r,wg(r)}function wg(r,i,a){for(var c=(r.mode&1)!==0;ce!==null;){var h=ce,m=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||fu;if(!E){var A=h.alternate,P=A!==null&&A.memoizedState!==null||zt;A=fu;var W=zt;if(fu=E,(zt=P)&&!W)for(ce=h;ce!==null;)E=ce,P=E.child,E.tag===22&&E.memoizedState!==null?Ig(h):P!==null?(P.return=E,ce=P):Ig(h);for(;m!==null;)ce=m,wg(m),m=m.sibling;ce=h,fu=A,zt=W}Tg(r)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,ce=m):Tg(r)}}function Tg(r){for(;ce!==null;){var i=ce;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:zt||hu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!zt)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:zn(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Sm(i,m,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Sm(i,E,a)}break;case 5:var A=i.stateNode;if(a===null&&i.flags&4){a=A;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var W=i.alternate;if(W!==null){var ee=W.memoizedState;if(ee!==null){var te=ee.dehydrated;te!==null&&On(te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zt||i.flags&512&&Xf(i)}catch(J){at(i,i.return,J)}}if(i===r){ce=null;break}if(a=i.sibling,a!==null){a.return=i.return,ce=a;break}ce=i.return}}function Sg(r){for(;ce!==null;){var i=ce;if(i===r){ce=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ce=a;break}ce=i.return}}function Ig(r){for(;ce!==null;){var i=ce;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{hu(4,i)}catch(P){at(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(P){at(i,h,P)}}var m=i.return;try{Xf(i)}catch(P){at(i,m,P)}break;case 5:var E=i.return;try{Xf(i)}catch(P){at(i,E,P)}}}catch(P){at(i,i.return,P)}if(i===r){ce=null;break}var A=i.sibling;if(A!==null){A.return=i.return,ce=A;break}ce=i.return}}var SE=Math.ceil,du=Z.ReactCurrentDispatcher,eh=Z.ReactCurrentOwner,In=Z.ReactCurrentBatchConfig,Oe=0,Ct=null,dt=null,Vt=0,dn=0,io=Zr(0),Et=0,Aa=null,Yi=0,pu=0,th=0,Ca=null,tn=null,nh=0,so=1/0,Rr=null,mu=!1,rh=null,si=null,gu=!1,oi=null,yu=0,xa=0,ih=null,vu=-1,_u=0;function Gt(){return(Oe&6)!==0?Ye():vu!==-1?vu:vu=Ye()}function ai(r){return(r.mode&1)===0?1:(Oe&2)!==0&&Vt!==0?Vt&-Vt:oE.transition!==null?(_u===0&&(_u=Fi()),_u):(r=ke,r!==0||(r=window.event,r=r===void 0?16:ta(r.type)),r)}function Bn(r,i,a,c){if(50<xa)throw xa=0,ih=null,Error(t(185));qr(r,a,c),((Oe&2)===0||r!==Ct)&&(r===Ct&&((Oe&2)===0&&(pu|=a),Et===4&&li(r,Vt)),nn(r,c),a===1&&Oe===0&&(i.mode&1)===0&&(so=Ye()+500,Kl&&ti()))}function nn(r,i){var a=r.callbackNode;gr(r,i);var c=Mi(r,r===Ct?Vt:0);if(c===0)a!==null&&Yo(a),r.callbackNode=null,r.callbackPriority=0;else if(i=c&-c,r.callbackPriority!==i){if(a!=null&&Yo(a),i===1)r.tag===0?sE(Cg.bind(null,r)):fm(Cg.bind(null,r)),tE(function(){(Oe&6)===0&&ti()}),a=null;else{switch(Kr(c)){case 1:a=Li;break;case 4:a=$r;break;case 16:a=yn;break;case 536870912:a=_l;break;default:a=yn}a=Vg(a,Ag.bind(null,r))}r.callbackPriority=i,r.callbackNode=a}}function Ag(r,i){if(vu=-1,_u=0,(Oe&6)!==0)throw Error(t(327));var a=r.callbackNode;if(oo()&&r.callbackNode!==a)return null;var c=Mi(r,r===Ct?Vt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||i)i=Eu(r,c);else{i=c;var h=Oe;Oe|=2;var m=Rg();(Ct!==r||Vt!==i)&&(Rr=null,so=Ye()+500,Ji(r,i));do try{CE();break}catch(A){xg(r,A)}while(!0);Tf(),du.current=m,Oe=h,dt!==null?i=0:(Ct=null,Vt=0,i=Et)}if(i!==0){if(i===2&&(h=ln(r),h!==0&&(c=h,i=sh(r,h))),i===1)throw a=Aa,Ji(r,0),li(r,c),nn(r,Ye()),a;if(i===6)li(r,c);else{if(h=r.current.alternate,(c&30)===0&&!IE(h)&&(i=Eu(r,c),i===2&&(m=ln(r),m!==0&&(c=m,i=sh(r,m))),i===1))throw a=Aa,Ji(r,0),li(r,c),nn(r,Ye()),a;switch(r.finishedWork=h,r.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Zi(r,tn,Rr);break;case 3:if(li(r,c),(c&130023424)===c&&(i=nh+500-Ye(),10<i)){if(Mi(r,0)!==0)break;if(h=r.suspendedLanes,(h&c)!==c){Gt(),r.pingedLanes|=r.suspendedLanes&h;break}r.timeoutHandle=ff(Zi.bind(null,r,tn,Rr),i);break}Zi(r,tn,Rr);break;case 4:if(li(r,c),(c&4194240)===c)break;for(i=r.eventTimes,h=-1;0<c;){var E=31-qt(c);m=1<<E,E=i[E],E>h&&(h=E),c&=~m}if(c=h,c=Ye()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*SE(c/1960))-c,10<c){r.timeoutHandle=ff(Zi.bind(null,r,tn,Rr),c);break}Zi(r,tn,Rr);break;case 5:Zi(r,tn,Rr);break;default:throw Error(t(329))}}}return nn(r,Ye()),r.callbackNode===a?Ag.bind(null,r):null}function sh(r,i){var a=Ca;return r.current.memoizedState.isDehydrated&&(Ji(r,i).flags|=256),r=Eu(r,i),r!==2&&(i=tn,tn=a,i!==null&&oh(i)),r}function oh(r){tn===null?tn=r:tn.push.apply(tn,r)}function IE(r){for(var i=r;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],m=h.getSnapshot;h=h.value;try{if(!Fn(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function li(r,i){for(i&=~th,i&=~pu,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var a=31-qt(i),c=1<<a;r[a]=-1,i&=~c}}function Cg(r){if((Oe&6)!==0)throw Error(t(327));oo();var i=Mi(r,0);if((i&1)===0)return nn(r,Ye()),null;var a=Eu(r,i);if(r.tag!==0&&a===2){var c=ln(r);c!==0&&(i=c,a=sh(r,c))}if(a===1)throw a=Aa,Ji(r,0),li(r,i),nn(r,Ye()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,Zi(r,tn,Rr),nn(r,Ye()),null}function ah(r,i){var a=Oe;Oe|=1;try{return r(i)}finally{Oe=a,Oe===0&&(so=Ye()+500,Kl&&ti())}}function Xi(r){oi!==null&&oi.tag===0&&(Oe&6)===0&&oo();var i=Oe;Oe|=1;var a=In.transition,c=ke;try{if(In.transition=null,ke=1,r)return r()}finally{ke=c,In.transition=a,Oe=i,(Oe&6)===0&&ti()}}function lh(){dn=io.current,et(io)}function Ji(r,i){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,eE(a)),dt!==null)for(a=dt.return;a!==null;){var c=a;switch(yf(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ql();break;case 3:to(),et(Jt),et(Mt),kf();break;case 5:Rf(c);break;case 4:to();break;case 13:et(it);break;case 19:et(it);break;case 10:Sf(c.type._context);break;case 22:case 23:lh()}a=a.return}if(Ct=r,dt=r=ui(r.current,null),Vt=dn=i,Et=0,Aa=null,th=pu=Yi=0,tn=Ca=null,Ki!==null){for(i=0;i<Ki.length;i++)if(a=Ki[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,m=a.pending;if(m!==null){var E=m.next;m.next=h,c.next=E}a.pending=c}Ki=null}return r}function xg(r,i){do{var a=dt;try{if(Tf(),ru.current=au,iu){for(var c=st.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}iu=!1}if(Qi=0,At=_t=st=null,_a=!1,Ea=0,eh.current=null,a===null||a.return===null){Et=1,Aa=i,dt=null;break}e:{var m=r,E=a.return,A=a,P=i;if(i=Vt,A.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var W=P,ee=A,te=ee.tag;if((ee.mode&1)===0&&(te===0||te===11||te===15)){var J=ee.alternate;J?(ee.updateQueue=J.updateQueue,ee.memoizedState=J.memoizedState,ee.lanes=J.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var ae=Jm(E);if(ae!==null){ae.flags&=-257,Zm(ae,E,A,m,i),ae.mode&1&&Xm(m,W,i),i=ae,P=W;var fe=i.updateQueue;if(fe===null){var de=new Set;de.add(P),i.updateQueue=de}else fe.add(P);break e}else{if((i&1)===0){Xm(m,W,i),uh();break e}P=Error(t(426))}}else if(rt&&A.mode&1){var ut=Jm(E);if(ut!==null){(ut.flags&65536)===0&&(ut.flags|=256),Zm(ut,E,A,m,i),Ef(no(P,A));break e}}m=P=no(P,A),Et!==4&&(Et=2),Ca===null?Ca=[m]:Ca.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var z=Qm(m,P,i);Tm(m,z);break e;case 1:A=P;var V=m.type,$=m.stateNode;if((m.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(si===null||!si.has($)))){m.flags|=65536,i&=-i,m.lanes|=i;var re=Ym(m,A,i);Tm(m,re);break e}}m=m.return}while(m!==null)}kg(a)}catch(me){i=me,dt===a&&a!==null&&(dt=a=a.return);continue}break}while(!0)}function Rg(){var r=du.current;return du.current=au,r===null?au:r}function uh(){(Et===0||Et===3||Et===2)&&(Et=4),Ct===null||(Yi&268435455)===0&&(pu&268435455)===0||li(Ct,Vt)}function Eu(r,i){var a=Oe;Oe|=2;var c=Rg();(Ct!==r||Vt!==i)&&(Rr=null,Ji(r,i));do try{AE();break}catch(h){xg(r,h)}while(!0);if(Tf(),Oe=a,du.current=c,dt!==null)throw Error(t(261));return Ct=null,Vt=0,Et}function AE(){for(;dt!==null;)Pg(dt)}function CE(){for(;dt!==null&&!yl();)Pg(dt)}function Pg(r){var i=Dg(r.alternate,r,dn);r.memoizedProps=r.pendingProps,i===null?kg(r):dt=i,eh.current=null}function kg(r){var i=r;do{var a=i.alternate;if(r=i.return,(i.flags&32768)===0){if(a=vE(a,i,dn),a!==null){dt=a;return}}else{if(a=_E(a,i),a!==null){a.flags&=32767,dt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Et=6,dt=null;return}}if(i=i.sibling,i!==null){dt=i;return}dt=i=r}while(i!==null);Et===0&&(Et=5)}function Zi(r,i,a){var c=ke,h=In.transition;try{In.transition=null,ke=1,xE(r,i,a,c)}finally{In.transition=h,ke=c}return null}function xE(r,i,a,c){do oo();while(oi!==null);if((Oe&6)!==0)throw Error(t(327));a=r.finishedWork;var h=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var m=a.lanes|a.childLanes;if(We(r,m),r===Ct&&(dt=Ct=null,Vt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||gu||(gu=!0,Vg(yn,function(){return oo(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=In.transition,In.transition=null;var E=ke;ke=1;var A=Oe;Oe|=4,eh.current=null,wE(r,a),Eg(a,r),K1(uf),Qr=!!lf,uf=lf=null,r.current=a,TE(a),qc(),Oe=A,ke=E,In.transition=m}else r.current=a;if(gu&&(gu=!1,oi=r,yu=h),m=r.pendingLanes,m===0&&(si=null),El(a.stateNode),nn(r,Ye()),i!==null)for(c=r.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(mu)throw mu=!1,r=rh,rh=null,r;return(yu&1)!==0&&r.tag!==0&&oo(),m=r.pendingLanes,(m&1)!==0?r===ih?xa++:(xa=0,ih=r):xa=0,ti(),null}function oo(){if(oi!==null){var r=Kr(yu),i=In.transition,a=ke;try{if(In.transition=null,ke=16>r?16:r,oi===null)var c=!1;else{if(r=oi,oi=null,yu=0,(Oe&6)!==0)throw Error(t(331));var h=Oe;for(Oe|=4,ce=r.current;ce!==null;){var m=ce,E=m.child;if((ce.flags&16)!==0){var A=m.deletions;if(A!==null){for(var P=0;P<A.length;P++){var W=A[P];for(ce=W;ce!==null;){var ee=ce;switch(ee.tag){case 0:case 11:case 15:Ia(8,ee,m)}var te=ee.child;if(te!==null)te.return=ee,ce=te;else for(;ce!==null;){ee=ce;var J=ee.sibling,ae=ee.return;if(mg(ee),ee===W){ce=null;break}if(J!==null){J.return=ae,ce=J;break}ce=ae}}}var fe=m.alternate;if(fe!==null){var de=fe.child;if(de!==null){fe.child=null;do{var ut=de.sibling;de.sibling=null,de=ut}while(de!==null)}}ce=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,ce=E;else e:for(;ce!==null;){if(m=ce,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ia(9,m,m.return)}var z=m.sibling;if(z!==null){z.return=m.return,ce=z;break e}ce=m.return}}var V=r.current;for(ce=V;ce!==null;){E=ce;var $=E.child;if((E.subtreeFlags&2064)!==0&&$!==null)$.return=E,ce=$;else e:for(E=V;ce!==null;){if(A=ce,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:hu(9,A)}}catch(me){at(A,A.return,me)}if(A===E){ce=null;break e}var re=A.sibling;if(re!==null){re.return=A.return,ce=re;break e}ce=A.return}}if(Oe=h,ti(),an&&typeof an.onPostCommitFiberRoot=="function")try{an.onPostCommitFiberRoot(Oi,r)}catch{}c=!0}return c}finally{ke=a,In.transition=i}}return!1}function bg(r,i,a){i=no(a,i),i=Qm(r,i,1),r=ri(r,i,1),i=Gt(),r!==null&&(qr(r,1,i),nn(r,i))}function at(r,i,a){if(r.tag===3)bg(r,r,a);else for(;i!==null;){if(i.tag===3){bg(i,r,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(si===null||!si.has(c))){r=no(a,r),r=Ym(i,r,1),i=ri(i,r,1),r=Gt(),i!==null&&(qr(i,1,r),nn(i,r));break}}i=i.return}}function RE(r,i,a){var c=r.pingCache;c!==null&&c.delete(i),i=Gt(),r.pingedLanes|=r.suspendedLanes&a,Ct===r&&(Vt&a)===a&&(Et===4||Et===3&&(Vt&130023424)===Vt&&500>Ye()-nh?Ji(r,0):th|=a),nn(r,i)}function Ng(r,i){i===0&&((r.mode&1)===0?i=1:(i=Ps,Ps<<=1,(Ps&130023424)===0&&(Ps=4194304)));var a=Gt();r=Ar(r,i),r!==null&&(qr(r,i,a),nn(r,a))}function PE(r){var i=r.memoizedState,a=0;i!==null&&(a=i.retryLane),Ng(r,a)}function kE(r,i){var a=0;switch(r.tag){case 13:var c=r.stateNode,h=r.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Ng(r,a)}var Dg;Dg=function(r,i,a){if(r!==null)if(r.memoizedProps!==i.pendingProps||Jt.current)en=!0;else{if((r.lanes&a)===0&&(i.flags&128)===0)return en=!1,yE(r,i,a);en=(r.flags&131072)!==0}else en=!1,rt&&(i.flags&1048576)!==0&&hm(i,Ql,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;cu(r,i),r=i.pendingProps;var h=Gs(i,Mt.current);eo(i,a),h=Df(null,i,c,r,h,a);var m=Vf();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Zt(c)?(m=!0,Wl(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Cf(i),h.updater=lu,i.stateNode=h,h._reactInternals=i,zf(i,c,r,a),i=Hf(null,i,c,!0,m,a)):(i.tag=0,rt&&m&&gf(i),Kt(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(cu(r,i),r=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=NE(c),r=zn(c,r),h){case 0:i=Bf(null,i,c,r,a);break e;case 1:i=sg(null,i,c,r,a);break e;case 11:i=eg(null,i,c,r,a);break e;case 14:i=tg(null,i,c,zn(c.type,r),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zn(c,h),Bf(r,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zn(c,h),sg(r,i,c,h,a);case 3:e:{if(og(i),r===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,h=m.element,wm(r,i),tu(i,c,null,a);var E=i.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=no(Error(t(423)),i),i=ag(r,i,c,a,h);break e}else if(c!==h){h=no(Error(t(424)),i),i=ag(r,i,c,a,h);break e}else for(hn=Jr(i.stateNode.containerInfo.firstChild),fn=i,rt=!0,jn=null,a=_m(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Xs(),c===h){i=xr(r,i,a);break e}Kt(r,i,c,a)}i=i.child}return i;case 5:return Im(i),r===null&&_f(i),c=i.type,h=i.pendingProps,m=r!==null?r.memoizedProps:null,E=h.children,cf(c,h)?E=null:m!==null&&cf(c,m)&&(i.flags|=32),ig(r,i),Kt(r,i,E,a),i.child;case 6:return r===null&&_f(i),null;case 13:return lg(r,i,a);case 4:return xf(i,i.stateNode.containerInfo),c=i.pendingProps,r===null?i.child=Js(i,null,c,a):Kt(r,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zn(c,h),eg(r,i,c,h,a);case 7:return Kt(r,i,i.pendingProps,a),i.child;case 8:return Kt(r,i,i.pendingProps.children,a),i.child;case 12:return Kt(r,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,E=h.value,Xe(Jl,c._currentValue),c._currentValue=E,m!==null)if(Fn(m.value,E)){if(m.children===h.children&&!Jt.current){i=xr(r,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var A=m.dependencies;if(A!==null){E=m.child;for(var P=A.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=Cr(-1,a&-a),P.tag=2;var W=m.updateQueue;if(W!==null){W=W.shared;var ee=W.pending;ee===null?P.next=P:(P.next=ee.next,ee.next=P),W.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),If(m.return,a,i),A.lanes|=a;break}P=P.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,A=E.alternate,A!==null&&(A.lanes|=a),If(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Kt(r,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,eo(i,a),h=Tn(h),c=c(h),i.flags|=1,Kt(r,i,c,a),i.child;case 14:return c=i.type,h=zn(c,i.pendingProps),h=zn(c.type,h),tg(r,i,c,h,a);case 15:return ng(r,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zn(c,h),cu(r,i),i.tag=1,Zt(c)?(r=!0,Wl(i)):r=!1,eo(i,a),Km(i,c,h),zf(i,c,h,a),Hf(null,i,c,!0,r,a);case 19:return cg(r,i,a);case 22:return rg(r,i,a)}throw Error(t(156,i.tag))};function Vg(r,i){return xs(r,i)}function bE(r,i,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(r,i,a,c){return new bE(r,i,a,c)}function ch(r){return r=r.prototype,!(!r||!r.isReactComponent)}function NE(r){if(typeof r=="function")return ch(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===He)return 14}return 2}function ui(r,i){var a=r.alternate;return a===null?(a=An(r.tag,i,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=i,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,i=r.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function wu(r,i,a,c,h,m){var E=2;if(c=r,typeof r=="function")ch(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case R:return es(a.children,h,m,i);case I:E=8,h|=8;break;case x:return r=An(12,a,i,h|2),r.elementType=x,r.lanes=m,r;case C:return r=An(13,a,i,h),r.elementType=C,r.lanes=m,r;case Ge:return r=An(19,a,i,h),r.elementType=Ge,r.lanes=m,r;case Fe:return Tu(a,h,m,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case b:E=10;break e;case D:E=9;break e;case L:E=11;break e;case He:E=14;break e;case mt:E=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return i=An(E,a,i,h),i.elementType=r,i.type=c,i.lanes=m,i}function es(r,i,a,c){return r=An(7,r,c,i),r.lanes=a,r}function Tu(r,i,a,c){return r=An(22,r,c,i),r.elementType=Fe,r.lanes=a,r.stateNode={isHidden:!1},r}function fh(r,i,a){return r=An(6,r,null,i),r.lanes=a,r}function hh(r,i,a){return i=An(4,r.children!==null?r.children:[],r.key,i),i.lanes=a,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function DE(r,i,a,c,h){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hr(0),this.expirationTimes=Hr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function dh(r,i,a,c,h,m,E,A,P){return r=new DE(r,i,a,A,P),i===1?(i=1,m===!0&&(i|=8)):i=0,m=An(3,null,null,i),r.current=m,m.stateNode=r,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cf(m),r}function VE(r,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:he,key:c==null?null:""+c,children:r,containerInfo:i,implementation:a}}function Lg(r){if(!r)return ei;r=r._reactInternals;e:{if(bn(r)!==r||r.tag!==1)throw Error(t(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Zt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Zt(a))return um(r,a,i)}return i}function Og(r,i,a,c,h,m,E,A,P){return r=dh(a,c,!0,r,h,m,E,A,P),r.context=Lg(null),a=r.current,c=Gt(),h=ai(a),m=Cr(c,h),m.callback=i??null,ri(a,m,h),r.current.lanes=h,qr(r,h,c),nn(r,c),r}function Su(r,i,a,c){var h=i.current,m=Gt(),E=ai(h);return a=Lg(a),i.context===null?i.context=a:i.pendingContext=a,i=Cr(m,E),i.payload={element:r},c=c===void 0?null:c,c!==null&&(i.callback=c),r=ri(h,i,E),r!==null&&(Bn(r,h,E,m),eu(r,h,E)),E}function Iu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Mg(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<i?a:i}}function ph(r,i){Mg(r,i),(r=r.alternate)&&Mg(r,i)}function LE(){return null}var Fg=typeof reportError=="function"?reportError:function(r){console.error(r)};function mh(r){this._internalRoot=r}Au.prototype.render=mh.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(t(409));Su(r,i,null,null)},Au.prototype.unmount=mh.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Xi(function(){Su(null,r,null,null)}),i[wr]=null}};function Au(r){this._internalRoot=r}Au.prototype.unstable_scheduleHydration=function(r){if(r){var i=Al();r={blockedOn:null,target:r,priority:i};for(var a=0;a<Gn.length&&i!==0&&i<Gn[a].priority;a++);Gn.splice(a,0,r),a===0&&Rl(r)}};function gh(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Cu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function jg(){}function OE(r,i,a,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var W=Iu(E);m.call(W)}}var E=Og(i,c,r,0,null,!1,!1,"",jg);return r._reactRootContainer=E,r[wr]=E.current,fa(r.nodeType===8?r.parentNode:r),Xi(),E}for(;h=r.lastChild;)r.removeChild(h);if(typeof c=="function"){var A=c;c=function(){var W=Iu(P);A.call(W)}}var P=dh(r,0,!1,null,null,!1,!1,"",jg);return r._reactRootContainer=P,r[wr]=P.current,fa(r.nodeType===8?r.parentNode:r),Xi(function(){Su(i,P,a,c)}),P}function xu(r,i,a,c,h){var m=a._reactRootContainer;if(m){var E=m;if(typeof h=="function"){var A=h;h=function(){var P=Iu(E);A.call(P)}}Su(i,E,r,h)}else E=OE(a,i,r,h,c);return Iu(E)}Sl=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var a=Br(i.pendingLanes);a!==0&&(Wr(i,a|1),nn(i,Ye()),(Oe&6)===0&&(so=Ye()+500,ti()))}break;case 13:Xi(function(){var c=Ar(r,1);if(c!==null){var h=Gt();Bn(c,r,1,h)}}),ph(r,1)}},ks=function(r){if(r.tag===13){var i=Ar(r,134217728);if(i!==null){var a=Gt();Bn(i,r,134217728,a)}ph(r,134217728)}},Il=function(r){if(r.tag===13){var i=ai(r),a=Ar(r,i);if(a!==null){var c=Gt();Bn(a,r,i,c)}ph(r,i)}},Al=function(){return ke},Cl=function(r,i){var a=ke;try{return ke=r,i()}finally{ke=a}},ws=function(r,i,a){switch(i){case"input":if(Oo(r,a),i=a.name,a.type==="radio"&&i!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==r&&c.form===r.form){var h=Hl(c);if(!h)throw Error(t(90));ms(c),Oo(c,h)}}}break;case"textarea":_s(r,a);break;case"select":i=a.value,i!=null&&dr(r,!!a.multiple,i,!1)}},bi=ah,Wo=Xi;var ME={usingClientEntryPoint:!1,Events:[pa,Ws,Hl,Wn,qo,ah]},Ra={findFiberByHostInstance:Bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FE={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Qo(r),r===null?null:r.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||LE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ru.isDisabled&&Ru.supportsFiber)try{Oi=Ru.inject(FE),an=Ru}catch{}}return rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ME,rn.createPortal=function(r,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gh(i))throw Error(t(200));return VE(r,i,null,a)},rn.createRoot=function(r,i){if(!gh(r))throw Error(t(299));var a=!1,c="",h=Fg;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=dh(r,1,!1,null,null,a,!1,c,h),r[wr]=i.current,fa(r.nodeType===8?r.parentNode:r),new mh(i)},rn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=Qo(i),r=r===null?null:r.stateNode,r},rn.flushSync=function(r){return Xi(r)},rn.hydrate=function(r,i,a){if(!Cu(i))throw Error(t(200));return xu(null,r,i,!0,a)},rn.hydrateRoot=function(r,i,a){if(!gh(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,m="",E=Fg;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Og(i,null,r,1,a??null,h,!1,m,E),r[wr]=i.current,fa(r),c)for(r=0;r<c.length;r++)a=c[r],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Au(i)},rn.render=function(r,i,a){if(!Cu(i))throw Error(t(200));return xu(null,r,i,!1,a)},rn.unmountComponentAtNode=function(r){if(!Cu(r))throw Error(t(40));return r._reactRootContainer?(Xi(function(){xu(null,null,r,!1,function(){r._reactRootContainer=null,r[wr]=null})}),!0):!1},rn.unstable_batchedUpdates=ah,rn.unstable_renderSubtreeIntoContainer=function(r,i,a,c){if(!Cu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return xu(r,i,a,!1,c)},rn.version="18.3.1-next-f1338f8080-20240426",rn}var Kg;function WE(){if(Kg)return _h.exports;Kg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),_h.exports=qE(),_h.exports}var Gg;function KE(){if(Gg)return Pu;Gg=1;var n=WE();return Pu.createRoot=n.createRoot,Pu.hydrateRoot=n.hydrateRoot,Pu}var GE=KE();/**
 * react-router v7.18.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Vd=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Wv=/^[\\/]{2}/;function QE(n,e){return e+n.replace(/\\/g,"/")}var Qg="popstate";function Yg(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function YE(n={}){function e(s,o){var y;let l=(y=o.state)==null?void 0:y.masked,{pathname:f,search:d,hash:g}=l||s.location;return $h("",{pathname:f,search:d,hash:g},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:s.location.pathname,search:s.location.search,hash:s.location.hash}:void 0)}function t(s,o){return typeof o=="string"?o:Ha(o)}return JE(e,t,null,n)}function ot(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ar(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XE(){return Math.random().toString(36).substring(2,10)}function Xg(n,e){return{usr:n.state,key:n.key,idx:e,masked:n.mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function $h(n,e,t=null,s,o){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Ro(e):e,state:t,key:e&&e.key||s||XE(),mask:o}}function Ha({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Ro(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let s=n.indexOf("?");s>=0&&(e.search=n.substring(s),n=n.substring(0,s)),n&&(e.pathname=n)}return e}function JE(n,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,f=o.history,d="POP",g=null,y=_();y==null&&(y=0,f.replaceState({...f.state,idx:y},""));function _(){return(f.state||{idx:null}).idx}function w(){d="POP";let N=_(),H=N==null?null:N-y;y=N,g&&g({action:d,location:U.location,delta:H})}function S(N,H){d="PUSH";let B=Yg(N)?N:$h(U.location,N,H);y=_()+1;let K=Xg(B,y),Z=U.createHref(B.mask||B);try{f.pushState(K,"",Z)}catch(oe){if(oe instanceof DOMException&&oe.name==="DataCloneError")throw oe;o.location.assign(Z)}l&&g&&g({action:d,location:U.location,delta:1})}function k(N,H){d="REPLACE";let B=Yg(N)?N:$h(U.location,N,H);y=_();let K=Xg(B,y),Z=U.createHref(B.mask||B);f.replaceState(K,"",Z),l&&g&&g({action:d,location:U.location,delta:0})}function q(N){return ZE(o,N)}let U={get action(){return d},get location(){return n(o,f)},listen(N){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(Qg,w),g=N,()=>{o.removeEventListener(Qg,w),g=null}},createHref(N){return e(o,N)},createURL:q,encodeLocation(N){let H=q(N);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:S,replace:k,go(N){return f.go(N)}};return U}function ZE(n,e,t=!1){let s="http://localhost";n&&(s=n.location.origin!=="null"?n.location.origin:n.location.href),ot(s,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Ha(e);return o=o.replace(/ $/,"%20"),!t&&Wv.test(o)&&(o=s+o),new URL(o,s)}function Kv(n,e,t="/"){return ew(n,e,t,!1)}function ew(n,e,t,s,o){let l=typeof e=="string"?Ro(e):e,f=br(l.pathname||"/",t);if(f==null)return null;let d=tw(n),g=null,y=hw(f);for(let _=0;g==null&&_<d.length;++_)g=fw(d[_],y,s);return g}function tw(n){let e=Gv(n);return nw(e),e}function Gv(n,e=[],t=[],s="",o=!1){let l=(f,d,g=o,y)=>{let _={relativePath:y===void 0?f.path||"":y,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&g)return;ot(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let w=Hn([s,_.relativePath]),S=t.concat(_);f.children&&f.children.length>0&&(ot(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${w}".`),Gv(f.children,e,S,w,g)),!(f.path==null&&!f.index)&&e.push({path:w,score:uw(w,f.index),routesMeta:S.map((k,q)=>{let[U,N]=Xv(k.relativePath,k.caseSensitive,q===S.length-1);return{...k,matcher:U,compiledParams:N}})})};return n.forEach((f,d)=>{var g;if(f.path===""||!((g=f.path)!=null&&g.includes("?")))l(f,d);else for(let y of Qv(f.path))l(f,d,!0,y)}),e}function Qv(n){let e=n.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let f=Qv(s.join("/")),d=[];return d.push(...f.map(g=>g===""?l:[l,g].join("/"))),o&&d.push(...f),d.map(g=>n.startsWith("/")&&g===""?"/":g)}function nw(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:cw(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var rw=/^:[\w-]+$/,iw=3,sw=2,ow=1,aw=10,lw=-2,Jg=n=>n==="*";function uw(n,e){let t=n.split("/"),s=t.length;return t.some(Jg)&&(s+=lw),e&&(s+=sw),t.filter(o=>!Jg(o)).reduce((o,l)=>o+(rw.test(l)?iw:l===""?ow:aw),s)}function cw(n,e){return n.length===e.length&&n.slice(0,-1).every((s,o)=>s===e[o])?n[n.length-1]-e[e.length-1]:0}function fw(n,e,t=!1){let{routesMeta:s}=n,o={},l="/",f=[];for(let d=0;d<s.length;++d){let g=s[d],y=d===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",w={path:g.relativePath,caseSensitive:g.caseSensitive,end:y},S=g.matcher&&g.compiledParams?Yv(w,_,g.matcher,g.compiledParams):Gu(w,_),k=g.route;if(!S&&y&&t&&!s[s.length-1].route.index&&(S=Gu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},_)),!S)return null;Object.assign(o,S.params),f.push({params:o,pathname:Hn([l,S.pathname]),pathnameBase:mw(Hn([l,S.pathnameBase])),route:k}),S.pathnameBase!=="/"&&(l=Hn([l,S.pathnameBase]))}return f}function Gu(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,s]=Xv(n.path,n.caseSensitive,n.end);return Yv(n,e,t,s)}function Yv(n,e,t,s){let o=e.match(t);if(!o)return null;let l=o[0],f=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((y,{paramName:_,isOptional:w},S)=>{if(_==="*"){let q=d[S]||"";f=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const k=d[S];return w&&!k?y[_]=void 0:y[_]=(k||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:f,pattern:n}}function Xv(n,e=!1,t=!0){ar(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let s=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,g,y,_)=>{if(s.push({paramName:d,isOptional:g!=null}),g){let w=_.charAt(y+f.length);return w&&w!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(s.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function hw(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ar(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function br(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=n.charAt(t);return s&&s!=="/"?null:n.slice(t)||"/"}function dw(n,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof n=="string"?Ro(n):n,l;return t?(t=Zv(t),t.startsWith("/")?l=Zg(t.substring(1),"/"):l=Zg(t,e)):l=e,{pathname:l,search:gw(s),hash:yw(o)}}function Zg(n,e){let t=Qu(e).split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Th(n,e,t,s){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pw(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Jv(n){let e=pw(n);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Ld(n,e,t,s=!1){let o;typeof n=="string"?o=Ro(n):(o={...n},ot(!o.pathname||!o.pathname.includes("?"),Th("?","pathname","search",o)),ot(!o.pathname||!o.pathname.includes("#"),Th("#","pathname","hash",o)),ot(!o.search||!o.search.includes("#"),Th("#","search","hash",o)));let l=n===""||o.pathname==="",f=l?"/":o.pathname,d;if(f==null)d=t;else{let w=e.length-1;if(!s&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),w-=1;o.pathname=S.join("/")}d=w>=0?e[w]:"/"}let g=dw(o,d),y=f&&f!=="/"&&f.endsWith("/"),_=(l||f===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(y||_)&&(g.pathname+="/"),g}var Zv=n=>n.replace(/[\\/]{2,}/g,"/"),Hn=n=>Zv(n.join("/")),Qu=n=>n.replace(/\/+$/,""),mw=n=>Qu(n).replace(/^\/*/,"/"),gw=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,yw=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,vw=class{constructor(n,e,t,s=!1){this.status=n,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function _w(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function Ew(n){let e=n.map(t=>t.route.path).filter(Boolean);return Hn(e)||"/"}var e_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function t_(n,e){let t=n;if(typeof t!="string"||!Vd.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(e_)try{let l=new URL(window.location.href),f=Wv.test(t)?new URL(QE(t,l.protocol)):new URL(t),d=br(f.pathname,e);f.origin===l.origin&&d!=null?t=d+f.search+f.hash:o=!0}catch{ar(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var n_=["POST","PUT","PATCH","DELETE"];new Set(n_);var ww=["GET",...n_];new Set(ww);var Tw=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Sw(n){try{return Tw.includes(new URL(n).protocol)}catch{return!1}}var Po=M.createContext(null);Po.displayName="DataRouter";var mc=M.createContext(null);mc.displayName="DataRouterState";var r_=M.createContext(!1);function Iw(){return M.useContext(r_)}var i_=M.createContext({isTransitioning:!1});i_.displayName="ViewTransition";var Aw=M.createContext(new Map);Aw.displayName="Fetchers";var Cw=M.createContext(null);Cw.displayName="Await";var Rn=M.createContext(null);Rn.displayName="Navigation";var nl=M.createContext(null);nl.displayName="Location";var cr=M.createContext({outlet:null,matches:[],isDataRoute:!1});cr.displayName="Route";var Od=M.createContext(null);Od.displayName="RouteError";var s_="REACT_ROUTER_ERROR",xw="REDIRECT",Rw="ROUTE_ERROR_RESPONSE";function Pw(n){if(n.startsWith(`${s_}:${xw}:{`))try{let e=JSON.parse(n.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function kw(n){if(n.startsWith(`${s_}:${Rw}:{`))try{let e=JSON.parse(n.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new vw(e.status,e.statusText,e.data)}catch{}}function bw(n,{relative:e}={}){ot(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=M.useContext(Rn),{hash:o,pathname:l,search:f}=il(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Hn([t,l])),s.createHref({pathname:d,search:f,hash:o})}function rl(){return M.useContext(nl)!=null}function Fr(){return ot(rl(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(nl).location}var o_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function a_(n){M.useContext(Rn).static||M.useLayoutEffect(n)}function Nw(){let{isDataRoute:n}=M.useContext(cr);return n?qw():Dw()}function Dw(){ot(rl(),"useNavigate() may be used only in the context of a <Router> component.");let n=M.useContext(Po),{basename:e,navigator:t}=M.useContext(Rn),{matches:s}=M.useContext(cr),{pathname:o}=Fr(),l=JSON.stringify(Jv(s)),f=M.useRef(!1);return a_(()=>{f.current=!0}),M.useCallback((g,y={})=>{if(ar(f.current,o_),!f.current)return;if(typeof g=="number"){t.go(g);return}let _=Ld(g,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Hn([e,_.pathname])),(y.replace?t.replace:t.push)(_,y.state,y)},[e,t,l,o,n])}M.createContext(null);function l_(){let{matches:n}=M.useContext(cr),e=n[n.length-1];return(e==null?void 0:e.params)??{}}function il(n,{relative:e}={}){let{matches:t}=M.useContext(cr),{pathname:s}=Fr(),o=JSON.stringify(Jv(t));return M.useMemo(()=>Ld(n,JSON.parse(o),s,e==="path"),[n,o,s,e])}function Vw(n,e){return u_(n,e)}function u_(n,e,t){var N;ot(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=M.useContext(Rn),{matches:o}=M.useContext(cr),l=o[o.length-1],f=l?l.params:{},d=l?l.pathname:"/",g=l?l.pathnameBase:"/",y=l&&l.route;{let H=y&&y.path||"";f_(d,!y||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${d}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let _=Fr(),w;if(e){let H=typeof e=="string"?Ro(e):e;ot(g==="/"||((N=H.pathname)==null?void 0:N.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${H.pathname}" was given in the \`location\` prop.`),w=H}else w=_;let S=w.pathname||"/",k=S;if(g!=="/"){let H=g.replace(/^\//,"").split("/");k="/"+S.replace(/^\//,"").split("/").slice(H.length).join("/")}let q=t&&t.state.matches.length?t.state.matches.map(H=>Object.assign(H,{route:t.manifest[H.route.id]||H.route})):Kv(n,{pathname:k});ar(y||q!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),ar(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let U=jw(q&&q.map(H=>Object.assign({},H,{params:Object.assign({},f,H.params),pathname:Hn([g,s.encodeLocation?s.encodeLocation(H.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?g:Hn([g,s.encodeLocation?s.encodeLocation(H.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),o,t);return e&&U?M.createElement(nl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...w},navigationType:"POP"}},U):U}function Lw(){let n=Hw(),e=_w(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",n),f=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:l},"ErrorBoundary")," or"," ",M.createElement("code",{style:l},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),t?M.createElement("pre",{style:o},t):null,f)}var Ow=M.createElement(Lw,null),c_=class extends M.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){this.props.onError?this.props.onError(n,e):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const t=kw(n.digest);t&&(n=t)}let e=n!==void 0?M.createElement(cr.Provider,{value:this.props.routeContext},M.createElement(Od.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?M.createElement(Mw,{error:n},e):e}};c_.contextType=r_;var Sh=new WeakMap;function Mw({children:n,error:e}){let{basename:t}=M.useContext(Rn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=Pw(e.digest);if(s){let o=Sh.get(e);if(o)throw o;let l=t_(s.location,t),f=l.absoluteURL||l.to;if(Sw(f))throw new Error("Invalid redirect location");if(e_&&!Sh.get(e))if(l.isExternal||s.reloadDocument)window.location.href=f;else{const d=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw Sh.set(e,d),d}return M.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f}`})}}return n}function Fw({routeContext:n,match:e,children:t}){let s=M.useContext(Po);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),M.createElement(cr.Provider,{value:n},t)}function jw(n,e=[],t){let s=t==null?void 0:t.state;if(n==null){if(!s)return null;if(s.errors)n=s.matches;else if(e.length===0&&!s.initialized&&s.matches.length>0)n=s.matches;else return null}let o=n,l=s==null?void 0:s.errors;if(l!=null){let _=o.findIndex(w=>w.route.id&&(l==null?void 0:l[w.route.id])!==void 0);ot(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,_+1))}let f=!1,d=-1;if(t&&s){f=s.renderFallback;for(let _=0;_<o.length;_++){let w=o[_];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(d=_),w.route.id){let{loaderData:S,errors:k}=s,q=w.route.loader&&!S.hasOwnProperty(w.route.id)&&(!k||k[w.route.id]===void 0);if(w.route.lazy||q){t.isStatic&&(f=!0),d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}}let g=t==null?void 0:t.onError,y=s&&g?(_,w)=>{var S,k;g(_,{location:s.location,params:((k=(S=s.matches)==null?void 0:S[0])==null?void 0:k.params)??{},pattern:Ew(s.matches),errorInfo:w})}:void 0;return o.reduceRight((_,w,S)=>{let k,q=!1,U=null,N=null;s&&(k=l&&w.route.id?l[w.route.id]:void 0,U=w.route.errorElement||Ow,f&&(d<0&&S===0?(f_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,N=null):d===S&&(q=!0,N=w.route.hydrateFallbackElement||null)));let H=e.concat(o.slice(0,S+1)),B=()=>{let K;return k?K=U:q?K=N:w.route.Component?K=M.createElement(w.route.Component,null):w.route.element?K=w.route.element:K=_,M.createElement(Fw,{match:w,routeContext:{outlet:_,matches:H,isDataRoute:s!=null},children:K})};return s&&(w.route.ErrorBoundary||w.route.errorElement||S===0)?M.createElement(c_,{location:s.location,revalidation:s.revalidation,component:U,error:k,children:B(),routeContext:{outlet:null,matches:H,isDataRoute:!0},onError:y}):B()},null)}function Md(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function zw(n){let e=M.useContext(Po);return ot(e,Md(n)),e}function Uw(n){let e=M.useContext(mc);return ot(e,Md(n)),e}function $w(n){let e=M.useContext(cr);return ot(e,Md(n)),e}function Fd(n){let e=$w(n),t=e.matches[e.matches.length-1];return ot(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function Bw(){return Fd("useRouteId")}function Hw(){var s;let n=M.useContext(Od),e=Uw("useRouteError"),t=Fd("useRouteError");return n!==void 0?n:(s=e.errors)==null?void 0:s[t]}function qw(){let{router:n}=zw("useNavigate"),e=Fd("useNavigate"),t=M.useRef(!1);return a_(()=>{t.current=!0}),M.useCallback(async(o,l={})=>{ar(t.current,o_),t.current&&(typeof o=="number"?await n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var ey={};function f_(n,e,t){!e&&!ey[n]&&(ey[n]=!0,ar(!1,t))}M.memo(Ww);function Ww({routes:n,manifest:e,future:t,state:s,isStatic:o,onError:l}){return u_(n,void 0,{manifest:e,state:s,isStatic:o,onError:l})}function ts(n){ot(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Kw({basename:n="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,useTransitions:f}){ot(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),g=M.useMemo(()=>({basename:d,navigator:o,static:l,useTransitions:f,future:{}}),[d,o,l,f]);typeof t=="string"&&(t=Ro(t));let{pathname:y="/",search:_="",hash:w="",state:S=null,key:k="default",mask:q}=t,U=M.useMemo(()=>{let N=br(y,d);return N==null?null:{location:{pathname:N,search:_,hash:w,state:S,key:k,mask:q},navigationType:s}},[d,y,_,w,S,k,s,q]);return ar(U!=null,`<Router basename="${d}"> is not able to match the URL "${y}${_}${w}" because it does not start with the basename, so the <Router> won't render anything.`),U==null?null:M.createElement(Rn.Provider,{value:g},M.createElement(nl.Provider,{children:e,value:U}))}function Gw({children:n,location:e}){return Vw(Bh(n),e)}function Bh(n,e=[]){let t=[];return M.Children.forEach(n,(s,o)=>{if(!M.isValidElement(s))return;let l=[...e,o];if(s.type===M.Fragment){t.push.apply(t,Bh(s.props.children,l));return}ot(s.type===ts,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ot(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Bh(s.props.children,l)),t.push(f)}),t}var Fu="get",ju="application/x-www-form-urlencoded";function gc(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function Qw(n){return gc(n)&&n.tagName.toLowerCase()==="button"}function Yw(n){return gc(n)&&n.tagName.toLowerCase()==="form"}function Xw(n){return gc(n)&&n.tagName.toLowerCase()==="input"}function Jw(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Zw(n,e){return n.button===0&&(!e||e==="_self")&&!Jw(n)}var ku=null;function eT(){if(ku===null)try{new FormData(document.createElement("form"),0),ku=!1}catch{ku=!0}return ku}var tT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ih(n){return n!=null&&!tT.has(n)?(ar(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ju}"`),null):n}function nT(n,e){let t,s,o,l,f;if(Yw(n)){let d=n.getAttribute("action");s=d?br(d,e):null,t=n.getAttribute("method")||Fu,o=Ih(n.getAttribute("enctype"))||ju,l=new FormData(n)}else if(Qw(n)||Xw(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=n.getAttribute("formaction")||d.getAttribute("action");if(s=g?br(g,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Fu,o=Ih(n.getAttribute("formenctype"))||Ih(d.getAttribute("enctype"))||ju,l=new FormData(d,n),!eT()){let{name:y,type:_,value:w}=n;if(_==="image"){let S=y?`${y}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else y&&l.append(y,w)}}else{if(gc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Fu,s=null,o=ju,f=n}return l&&o==="text/plain"&&(f=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function jd(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function h_(n,e,t,s){let o=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${s}`:o.pathname=`${o.pathname}.${s}`:o.pathname==="/"?o.pathname=`_root.${s}`:e&&br(o.pathname,e)==="/"?o.pathname=`${Qu(e)}/_root.${s}`:o.pathname=`${Qu(o.pathname)}.${s}`,o}async function rT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function iT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function sT(n,e,t){let s=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let f=await rT(l,t);return f.links?f.links():[]}return[]}));return uT(s.flat(1).filter(iT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function ty(n,e,t,s,o,l){let f=(g,y)=>t[y]?g.route.id!==t[y].route.id:!0,d=(g,y)=>{var _;return t[y].pathname!==g.pathname||((_=t[y].route.path)==null?void 0:_.endsWith("*"))&&t[y].params["*"]!==g.params["*"]};return l==="assets"?e.filter((g,y)=>f(g,y)||d(g,y)):l==="data"?e.filter((g,y)=>{var w;let _=s.routes[g.route.id];if(!_||!_.hasLoader)return!1;if(f(g,y)||d(g,y))return!0;if(g.route.shouldRevalidate){let S=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((w=t[0])==null?void 0:w.params)||{},nextUrl:new URL(n,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function oT(n,e,{includeHydrateFallback:t}={}){return aT(n.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function aT(n){return[...new Set(n)]}function lT(n){let e={},t=Object.keys(n).sort();for(let s of t)e[s]=n[s];return e}function uT(n,e){let t=new Set;return new Set(e),n.reduce((s,o)=>{let l=JSON.stringify(lT(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function zd(){let n=M.useContext(Po);return jd(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function cT(){let n=M.useContext(mc);return jd(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Ud=M.createContext(void 0);Ud.displayName="FrameworkContext";function yc(){let n=M.useContext(Ud);return jd(n,"You must render this element inside a <HydratedRouter> element"),n}function fT(n,e){let t=M.useContext(Ud),[s,o]=M.useState(!1),[l,f]=M.useState(!1),{onFocus:d,onBlur:g,onMouseEnter:y,onMouseLeave:_,onTouchStart:w}=e,S=M.useRef(null);M.useEffect(()=>{if(n==="render"&&f(!0),n==="viewport"){let U=H=>{H.forEach(B=>{f(B.isIntersecting)})},N=new IntersectionObserver(U,{threshold:.5});return S.current&&N.observe(S.current),()=>{N.disconnect()}}},[n]),M.useEffect(()=>{if(s){let U=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(U)}}},[s]);let k=()=>{o(!0)},q=()=>{o(!1),f(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:ka(d,k),onBlur:ka(g,q),onMouseEnter:ka(y,k),onMouseLeave:ka(_,q),onTouchStart:ka(w,k)}]:[!1,S,{}]}function ka(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function hT({page:n,...e}){let t=Iw(),{nonce:s}=yc(),{router:o}=zd(),l=M.useMemo(()=>Kv(o.routes,n,o.basename),[o.routes,n,o.basename]);return l?(e.nonce==null&&s&&(e={...e,nonce:s}),t?M.createElement(pT,{page:n,matches:l,...e}):M.createElement(mT,{page:n,matches:l,...e})):null}function dT(n){let{manifest:e,routeModules:t}=yc(),[s,o]=M.useState([]);return M.useEffect(()=>{let l=!1;return sT(n,e,t).then(f=>{l||o(f)}),()=>{l=!0}},[n,e,t]),s}function pT({page:n,matches:e,...t}){let s=Fr(),{future:o}=yc(),{basename:l}=zd(),f=M.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let d=h_(n,l,o.v8_trailingSlashAwareDataRequests,"rsc"),g=!1,y=[];for(let _ of e)typeof _.route.shouldRevalidate=="function"?g=!0:y.push(_.route.id);return g&&y.length>0&&d.searchParams.set("_routes",y.join(",")),[d.pathname+d.search]},[l,o.v8_trailingSlashAwareDataRequests,n,s,e]);return M.createElement(M.Fragment,null,f.map(d=>M.createElement("link",{key:d,rel:"prefetch",as:"fetch",href:d,...t})))}function mT({page:n,matches:e,...t}){let s=Fr(),{future:o,manifest:l,routeModules:f}=yc(),{basename:d}=zd(),{loaderData:g,matches:y}=cT(),_=M.useMemo(()=>ty(n,e,y,l,s,"data"),[n,e,y,l,s]),w=M.useMemo(()=>ty(n,e,y,l,s,"assets"),[n,e,y,l,s]),S=M.useMemo(()=>{if(n===s.pathname+s.search+s.hash)return[];let U=new Set,N=!1;if(e.forEach(B=>{var Z;let K=l.routes[B.route.id];!K||!K.hasLoader||(!_.some(oe=>oe.route.id===B.route.id)&&B.route.id in g&&((Z=f[B.route.id])!=null&&Z.shouldRevalidate)||K.hasClientLoader?N=!0:U.add(B.route.id))}),U.size===0)return[];let H=h_(n,d,o.v8_trailingSlashAwareDataRequests,"data");return N&&U.size>0&&H.searchParams.set("_routes",e.filter(B=>U.has(B.route.id)).map(B=>B.route.id).join(",")),[H.pathname+H.search]},[d,o.v8_trailingSlashAwareDataRequests,g,s,l,_,e,n,f]),k=M.useMemo(()=>oT(w,l),[w,l]),q=dT(w);return M.createElement(M.Fragment,null,S.map(U=>M.createElement("link",{key:U,rel:"prefetch",as:"fetch",href:U,...t})),k.map(U=>M.createElement("link",{key:U,rel:"modulepreload",href:U,...t})),q.map(({key:U,link:N})=>M.createElement("link",{key:U,nonce:t.nonce,...N,crossOrigin:N.crossOrigin??t.crossOrigin})))}function gT(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var yT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{yT&&(window.__reactRouterVersion="7.18.2")}catch{}function vT({basename:n,children:e,useTransitions:t,window:s}){let o=M.useRef();o.current==null&&(o.current=YE({window:s,v5Compat:!0}));let l=o.current,[f,d]=M.useState({action:l.action,location:l.location}),g=M.useCallback(y=>{t===!1?d(y):M.startTransition(()=>d(y))},[t]);return M.useLayoutEffect(()=>l.listen(g),[l,g]),M.createElement(Kw,{basename:n,children:e,location:f.location,navigationType:f.action,navigator:l,useTransitions:t})}var yi=M.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:f,mask:d,state:g,target:y,to:_,preventScrollReset:w,viewTransition:S,defaultShouldRevalidate:k,...q},U){let{basename:N,navigator:H,useTransitions:B}=M.useContext(Rn),K=typeof _=="string"&&Vd.test(_),Z=t_(_,N);_=Z.to;let oe=bw(_,{relative:o}),he=Fr(),R=null;if(d){let He=Ld(d,[],he.mask?he.mask.pathname:"/",!0);N!=="/"&&(He.pathname=He.pathname==="/"?N:Hn([N,He.pathname])),R=H.createHref(He)}let[I,x,b]=fT(s,q),D=wT(_,{replace:f,mask:d,state:g,target:y,preventScrollReset:w,relative:o,viewTransition:S,defaultShouldRevalidate:k,useTransitions:B});function L(He){e&&e(He),He.defaultPrevented||D(He)}let C=!(Z.isExternal||l),Ge=M.createElement("a",{...q,...b,href:(C?R:void 0)||Z.absoluteURL||oe,onClick:C?L:e,ref:gT(U,x),target:y,"data-discover":!K&&t==="render"?"true":void 0});return I&&!K?M.createElement(M.Fragment,null,Ge,M.createElement(hT,{page:oe})):Ge});yi.displayName="Link";var ba=M.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:f,viewTransition:d,children:g,...y},_){let w=il(f,{relative:y.relative}),S=Fr(),k=M.useContext(mc),{navigator:q,basename:U}=M.useContext(Rn),N=k!=null&&CT(w)&&d===!0,H=q.encodeLocation?q.encodeLocation(w).pathname:w.pathname,B=S.pathname,K=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;t||(B=B.toLowerCase(),K=K?K.toLowerCase():null,H=H.toLowerCase()),K&&U&&(K=br(K,U)||K);const Z=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let oe=B===H||!o&&B.startsWith(H)&&B.charAt(Z)==="/",he=K!=null&&(K===H||!o&&K.startsWith(H)&&K.charAt(H.length)==="/"),R={isActive:oe,isPending:he,isTransitioning:N},I=oe?e:void 0,x;typeof s=="function"?x=s(R):x=[s,oe?"active":null,he?"pending":null,N?"transitioning":null].filter(Boolean).join(" ");let b=typeof l=="function"?l(R):l;return M.createElement(yi,{...y,"aria-current":I,className:x,ref:_,style:b,to:f,viewTransition:d},typeof g=="function"?g(R):g)});ba.displayName="NavLink";var _T=M.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:f=Fu,action:d,onSubmit:g,relative:y,preventScrollReset:_,viewTransition:w,defaultShouldRevalidate:S,...k},q)=>{let{useTransitions:U}=M.useContext(Rn),N=IT(),H=AT(d,{relative:y}),B=f.toLowerCase()==="get"?"get":"post",K=typeof d=="string"&&Vd.test(d),Z=oe=>{if(g&&g(oe),oe.defaultPrevented)return;oe.preventDefault();let he=oe.nativeEvent.submitter,R=(he==null?void 0:he.getAttribute("formmethod"))||f,I=()=>N(he||oe.currentTarget,{fetcherKey:e,method:R,navigate:t,replace:o,state:l,relative:y,preventScrollReset:_,viewTransition:w,defaultShouldRevalidate:S});U&&t!==!1?M.startTransition(()=>I()):I()};return M.createElement("form",{ref:q,method:B,action:H,onSubmit:s?g:Z,...k,"data-discover":!K&&n==="render"?"true":void 0})});_T.displayName="Form";function ET(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d_(n){let e=M.useContext(Po);return ot(e,ET(n)),e}function wT(n,{target:e,replace:t,mask:s,state:o,preventScrollReset:l,relative:f,viewTransition:d,defaultShouldRevalidate:g,useTransitions:y}={}){let _=Nw(),w=Fr(),S=il(n,{relative:f});return M.useCallback(k=>{if(Zw(k,e)){k.preventDefault();let q=t!==void 0?t:Ha(w)===Ha(S),U=()=>_(n,{replace:q,mask:s,state:o,preventScrollReset:l,relative:f,viewTransition:d,defaultShouldRevalidate:g});y?M.startTransition(()=>U()):U()}},[w,_,S,t,s,o,e,n,l,f,d,g,y])}var TT=0,ST=()=>`__${String(++TT)}__`;function IT(){let{router:n}=d_("useSubmit"),{basename:e}=M.useContext(Rn),t=Bw(),s=n.fetch,o=n.navigate;return M.useCallback(async(l,f={})=>{let{action:d,method:g,encType:y,formData:_,body:w}=nT(l,e);if(f.navigate===!1){let S=f.fetcherKey||ST();await s(S,t,f.action||d,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:w,formMethod:f.method||g,formEncType:f.encType||y,flushSync:f.flushSync})}else await o(f.action||d,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:w,formMethod:f.method||g,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:t,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,o,e,t])}function AT(n,{relative:e}={}){let{basename:t}=M.useContext(Rn),s=M.useContext(cr);ot(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...il(n||".",{relative:e})},f=Fr();if(n==null){l.search=f.search;let d=new URLSearchParams(l.search),g=d.getAll("index");if(g.some(_=>_==="")){d.delete("index"),g.filter(w=>w).forEach(w=>d.append("index",w));let _=d.toString();l.search=_?`?${_}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Hn([t,l.pathname])),Ha(l)}function CT(n,{relative:e}={}){let t=M.useContext(i_);ot(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=d_("useViewTransitionState"),o=il(n,{relative:e});if(!t.isTransitioning)return!1;let l=br(t.currentLocation.pathname,s)||t.currentLocation.pathname,f=br(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Gu(o.pathname,f)!=null||Gu(o.pathname,l)!=null}const vc=M.createContext({carrito:[],total:0,cantidadTotal:0}),xT=({children:n})=>{const[e,t]=M.useState([]),[s,o]=M.useState(0),[l,f]=M.useState(0);console.log(e),console.log("cantidad items",l),console.log("monto total",s);const d=(_,w)=>{if(!e.find(k=>k.item.id===_.id))t(k=>[...k,{item:_,cantidad:w}]),f(k=>k+w),o(k=>k+_.precio*w),console.log(`Producto agregado al carrito: ${_.nombre}`);else{const k=e.map(N=>{if(N.item.id===_.id){const H=N.cantidad+w;return{...N,cantidad:H}}return N});t(k);const q=k.reduce((N,H)=>N+H.cantidad,0);f(q);const U=k.reduce((N,H)=>N+H.item.precio*H.cantidad,0);o(U)}},g=_=>{const w=e.find(k=>k.item.id===_),S=e.filter(k=>k.item.id!==_);t(S),f(k=>k-w.cantidad),o(k=>k-w.item.precio*w.cantidad)},y=()=>{t([]),f(0),o(0)};return F.jsx(vc.Provider,{value:{carrito:e,total:s,cantidadTotal:l,agregarAlCarrito:d,eliminarProducto:g,vaciarCarrito:y},children:n})},RT=()=>{const{carrito:n}=M.useContext(vc),e=n.length;return F.jsxs("div",{className:"cart-widget-container",children:[F.jsx("img",{src:"/images/carrito.png",className:"carrito",alt:"Carrito"}),F.jsx("span",{className:"cart-count",children:e})]})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function PT(n,e,t){return(e=bT(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function ny(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,s)}return t}function ne(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ny(Object(t),!0).forEach(function(s){PT(n,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ny(Object(t)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(t,s))})}return n}function kT(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var s=t.call(n,e);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function bT(n){var e=kT(n,"string");return typeof e=="symbol"?e:e+""}const ry=()=>{};let $d={},p_={},m_=null,g_={mark:ry,measure:ry};try{typeof window<"u"&&($d=window),typeof document<"u"&&(p_=document),typeof MutationObserver<"u"&&(m_=MutationObserver),typeof performance<"u"&&(g_=performance)}catch{}const{userAgent:iy=""}=$d.navigator||{},vi=$d,tt=p_,sy=m_,bu=g_;vi.document;const jr=!!tt.documentElement&&!!tt.head&&typeof tt.addEventListener=="function"&&typeof tt.createElement=="function",y_=~iy.indexOf("MSIE")||~iy.indexOf("Trident/");var NT=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,DT=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,v_={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},VT={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},__=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Ht="classic",_c="duotone",LT="sharp",OT="sharp-duotone",E_=[Ht,_c,LT,OT],MT={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},FT={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},jT=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),zT={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},UT=["fak","fa-kit","fakd","fa-kit-duotone"],oy={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},$T=["kit"],BT={kit:{"fa-kit":"fak"}},HT=["fak","fakd"],qT={kit:{fak:"fa-kit"}},ay={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Nu={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},WT=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],KT=["fak","fa-kit","fakd","fa-kit-duotone"],GT={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},QT={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},YT={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Hh={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},XT=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],qh=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...WT,...XT],JT=["solid","regular","light","thin","duotone","brands"],w_=[1,2,3,4,5,6,7,8,9,10],ZT=w_.concat([11,12,13,14,15,16,17,18,19,20]),e2=[...Object.keys(YT),...JT,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Nu.GROUP,Nu.SWAP_OPACITY,Nu.PRIMARY,Nu.SECONDARY].concat(w_.map(n=>"".concat(n,"x"))).concat(ZT.map(n=>"w-".concat(n))),t2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const Nr="___FONT_AWESOME___",Wh=16,T_="fa",S_="svg-inline--fa",as="data-fa-i2svg",Kh="data-fa-pseudo-element",n2="data-fa-pseudo-element-pending",Bd="data-prefix",Hd="data-icon",ly="fontawesome-i2svg",r2="async",i2=["HTML","HEAD","STYLE","SCRIPT"],I_=(()=>{try{return!0}catch{return!1}})();function sl(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[Ht]}})}const A_=ne({},v_);A_[Ht]=ne(ne(ne(ne({},{"fa-duotone":"duotone"}),v_[Ht]),oy.kit),oy["kit-duotone"]);const s2=sl(A_),Gh=ne({},zT);Gh[Ht]=ne(ne(ne(ne({},{duotone:"fad"}),Gh[Ht]),ay.kit),ay["kit-duotone"]);const uy=sl(Gh),Qh=ne({},Hh);Qh[Ht]=ne(ne({},Qh[Ht]),qT.kit);const qd=sl(Qh),Yh=ne({},QT);Yh[Ht]=ne(ne({},Yh[Ht]),BT.kit);sl(Yh);const o2=NT,C_="fa-layers-text",a2=DT,l2=ne({},MT);sl(l2);const u2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ah=VT,c2=[...$T,...e2],Ma=vi.FontAwesomeConfig||{};function f2(n){var e=tt.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function h2(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}tt&&typeof tt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,s]=e;const o=h2(f2(t));o!=null&&(Ma[s]=o)});const x_={styleDefault:"solid",familyDefault:Ht,cssPrefix:T_,replacementClass:S_,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ma.familyPrefix&&(Ma.cssPrefix=Ma.familyPrefix);const _o=ne(ne({},x_),Ma);_o.autoReplaceSvg||(_o.observeMutations=!1);const ge={};Object.keys(x_).forEach(n=>{Object.defineProperty(ge,n,{enumerable:!0,set:function(e){_o[n]=e,Fa.forEach(t=>t(ge))},get:function(){return _o[n]}})});Object.defineProperty(ge,"familyPrefix",{enumerable:!0,set:function(n){_o.cssPrefix=n,Fa.forEach(e=>e(ge))},get:function(){return _o.cssPrefix}});vi.FontAwesomeConfig=ge;const Fa=[];function d2(n){return Fa.push(n),()=>{Fa.splice(Fa.indexOf(n),1)}}const fi=Wh,ir={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function p2(n){if(!n||!jr)return;const e=tt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=tt.head.childNodes;let s=null;for(let o=t.length-1;o>-1;o--){const l=t[o],f=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(s=l)}return tt.head.insertBefore(e,s),n}const m2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qa(){let n=12,e="";for(;n-- >0;)e+=m2[Math.random()*62|0];return e}function ko(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function Wd(n){return n.classList?ko(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function R_(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g2(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(R_(n[t]),'" '),"").trim()}function Ec(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Kd(n){return n.size!==ir.size||n.x!==ir.x||n.y!==ir.y||n.rotate!==ir.rotate||n.flipX||n.flipY}function y2(n){let{transform:e,containerWidth:t,iconWidth:s}=n;const o={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),f="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),d="rotate(".concat(e.rotate," 0 0)"),g={transform:"".concat(l," ").concat(f," ").concat(d)},y={transform:"translate(".concat(s/2*-1," -256)")};return{outer:o,inner:g,path:y}}function v2(n){let{transform:e,width:t=Wh,height:s=Wh,startCentered:o=!1}=n,l="";return o&&y_?l+="translate(".concat(e.x/fi-t/2,"em, ").concat(e.y/fi-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(e.x/fi,"em), calc(-50% + ").concat(e.y/fi,"em)) "):l+="translate(".concat(e.x/fi,"em, ").concat(e.y/fi,"em) "),l+="scale(".concat(e.size/fi*(e.flipX?-1:1),", ").concat(e.size/fi*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var _2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function P_(){const n=T_,e=S_,t=ge.cssPrefix,s=ge.replacementClass;let o=_2;if(t!==n||s!==e){const l=new RegExp("\\.".concat(n,"\\-"),"g"),f=new RegExp("\\--".concat(n,"\\-"),"g"),d=new RegExp("\\.".concat(e),"g");o=o.replace(l,".".concat(t,"-")).replace(f,"--".concat(t,"-")).replace(d,".".concat(s))}return o}let cy=!1;function Ch(){ge.autoAddCss&&!cy&&(p2(P_()),cy=!0)}var E2={mixout(){return{dom:{css:P_,insertCss:Ch}}},hooks(){return{beforeDOMElementCreation(){Ch()},beforeI2svg(){Ch()}}}};const Dr=vi||{};Dr[Nr]||(Dr[Nr]={});Dr[Nr].styles||(Dr[Nr].styles={});Dr[Nr].hooks||(Dr[Nr].hooks={});Dr[Nr].shims||(Dr[Nr].shims=[]);var sr=Dr[Nr];const k_=[],b_=function(){tt.removeEventListener("DOMContentLoaded",b_),Yu=1,k_.map(n=>n())};let Yu=!1;jr&&(Yu=(tt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(tt.readyState),Yu||tt.addEventListener("DOMContentLoaded",b_));function w2(n){jr&&(Yu?setTimeout(n,0):k_.push(n))}function ol(n){const{tag:e,attributes:t={},children:s=[]}=n;return typeof n=="string"?R_(n):"<".concat(e," ").concat(g2(t),">").concat(s.map(ol).join(""),"</").concat(e,">")}function fy(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var xh=function(e,t,s,o){var l=Object.keys(e),f=l.length,d=t,g,y,_;for(s===void 0?(g=1,_=e[l[0]]):(g=0,_=s);g<f;g++)y=l[g],_=d(_,e[y],y,e);return _};function T2(n){const e=[];let t=0;const s=n.length;for(;t<s;){const o=n.charCodeAt(t++);if(o>=55296&&o<=56319&&t<s){const l=n.charCodeAt(t++);(l&64512)==56320?e.push(((o&1023)<<10)+(l&1023)+65536):(e.push(o),t--)}else e.push(o)}return e}function Xh(n){const e=T2(n);return e.length===1?e[0].toString(16):null}function S2(n,e){const t=n.length;let s=n.charCodeAt(e),o;return s>=55296&&s<=56319&&t>e+1&&(o=n.charCodeAt(e+1),o>=56320&&o<=57343)?(s-55296)*1024+o-56320+65536:s}function hy(n){return Object.keys(n).reduce((e,t)=>{const s=n[t];return!!s.icon?e[s.iconName]=s.icon:e[t]=s,e},{})}function Jh(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=t,o=hy(e);typeof sr.hooks.addPack=="function"&&!s?sr.hooks.addPack(n,hy(e)):sr.styles[n]=ne(ne({},sr.styles[n]||{}),o),n==="fas"&&Jh("fa",e)}const{styles:Wa,shims:I2}=sr,N_=Object.keys(qd),A2=N_.reduce((n,e)=>(n[e]=Object.keys(qd[e]),n),{});let Gd=null,D_={},V_={},L_={},O_={},M_={};function C2(n){return~c2.indexOf(n)}function x2(n,e){const t=e.split("-"),s=t[0],o=t.slice(1).join("-");return s===n&&o!==""&&!C2(o)?o:null}const F_=()=>{const n=s=>xh(Wa,(o,l,f)=>(o[f]=xh(l,s,{}),o),{});D_=n((s,o,l)=>(o[3]&&(s[o[3]]=l),o[2]&&o[2].filter(d=>typeof d=="number").forEach(d=>{s[d.toString(16)]=l}),s)),V_=n((s,o,l)=>(s[l]=l,o[2]&&o[2].filter(d=>typeof d=="string").forEach(d=>{s[d]=l}),s)),M_=n((s,o,l)=>{const f=o[2];return s[l]=l,f.forEach(d=>{s[d]=l}),s});const e="far"in Wa||ge.autoFetchSvg,t=xh(I2,(s,o)=>{const l=o[0];let f=o[1];const d=o[2];return f==="far"&&!e&&(f="fas"),typeof l=="string"&&(s.names[l]={prefix:f,iconName:d}),typeof l=="number"&&(s.unicodes[l.toString(16)]={prefix:f,iconName:d}),s},{names:{},unicodes:{}});L_=t.names,O_=t.unicodes,Gd=wc(ge.styleDefault,{family:ge.familyDefault})};d2(n=>{Gd=wc(n.styleDefault,{family:ge.familyDefault})});F_();function Qd(n,e){return(D_[n]||{})[e]}function R2(n,e){return(V_[n]||{})[e]}function is(n,e){return(M_[n]||{})[e]}function j_(n){return L_[n]||{prefix:null,iconName:null}}function P2(n){const e=O_[n],t=Qd("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function _i(){return Gd}const z_=()=>({prefix:null,iconName:null,rest:[]});function k2(n){let e=Ht;const t=N_.reduce((s,o)=>(s[o]="".concat(ge.cssPrefix,"-").concat(o),s),{});return E_.forEach(s=>{(n.includes(t[s])||n.some(o=>A2[s].includes(o)))&&(e=s)}),e}function wc(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=Ht}=e,s=s2[t][n];if(t===_c&&!n)return"fad";const o=uy[t][n]||uy[t][s],l=n in sr.styles?n:null;return o||l||null}function b2(n){let e=[],t=null;return n.forEach(s=>{const o=x2(ge.cssPrefix,s);o?t=o:s&&e.push(s)}),{iconName:t,rest:e}}function dy(n){return n.sort().filter((e,t,s)=>s.indexOf(e)===t)}function Tc(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let s=null;const o=qh.concat(KT),l=dy(n.filter(w=>o.includes(w))),f=dy(n.filter(w=>!qh.includes(w))),d=l.filter(w=>(s=w,!__.includes(w))),[g=null]=d,y=k2(l),_=ne(ne({},b2(f)),{},{prefix:wc(g,{family:y})});return ne(ne(ne({},_),L2({values:n,family:y,styles:Wa,config:ge,canonical:_,givenPrefix:s})),N2(t,s,_))}function N2(n,e,t){let{prefix:s,iconName:o}=t;if(n||!s||!o)return{prefix:s,iconName:o};const l=e==="fa"?j_(o):{},f=is(s,o);return o=l.iconName||f||o,s=l.prefix||s,s==="far"&&!Wa.far&&Wa.fas&&!ge.autoFetchSvg&&(s="fas"),{prefix:s,iconName:o}}const D2=E_.filter(n=>n!==Ht||n!==_c),V2=Object.keys(Hh).filter(n=>n!==Ht).map(n=>Object.keys(Hh[n])).flat();function L2(n){const{values:e,family:t,canonical:s,givenPrefix:o="",styles:l={},config:f={}}=n,d=t===_c,g=e.includes("fa-duotone")||e.includes("fad"),y=f.familyDefault==="duotone",_=s.prefix==="fad"||s.prefix==="fa-duotone";if(!d&&(g||y||_)&&(s.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),!s.prefix&&D2.includes(t)&&(Object.keys(l).find(S=>V2.includes(S))||f.autoFetchSvg)){const S=jT.get(t).defaultShortPrefixId;s.prefix=S,s.iconName=is(s.prefix,s.iconName)||s.iconName}return(s.prefix==="fa"||o==="fa")&&(s.prefix=_i()||"fas"),s}class O2{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const o=t.reduce(this._pullDefinitions,{});Object.keys(o).forEach(l=>{this.definitions[l]=ne(ne({},this.definitions[l]||{}),o[l]),Jh(l,o[l]);const f=qd[Ht][l];f&&Jh(f,o[l]),F_()})}reset(){this.definitions={}}_pullDefinitions(e,t){const s=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(s).map(o=>{const{prefix:l,iconName:f,icon:d}=s[o],g=d[2];e[l]||(e[l]={}),g.length>0&&g.forEach(y=>{typeof y=="string"&&(e[l][y]=d)}),e[l][f]=d}),e}}let py=[],fo={};const mo={},M2=Object.keys(mo);function F2(n,e){let{mixoutsTo:t}=e;return py=n,fo={},Object.keys(mo).forEach(s=>{M2.indexOf(s)===-1&&delete mo[s]}),py.forEach(s=>{const o=s.mixout?s.mixout():{};if(Object.keys(o).forEach(l=>{typeof o[l]=="function"&&(t[l]=o[l]),typeof o[l]=="object"&&Object.keys(o[l]).forEach(f=>{t[l]||(t[l]={}),t[l][f]=o[l][f]})}),s.hooks){const l=s.hooks();Object.keys(l).forEach(f=>{fo[f]||(fo[f]=[]),fo[f].push(l[f])})}s.provides&&s.provides(mo)}),t}function Zh(n,e){for(var t=arguments.length,s=new Array(t>2?t-2:0),o=2;o<t;o++)s[o-2]=arguments[o];return(fo[n]||[]).forEach(f=>{e=f.apply(null,[e,...s])}),e}function ls(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),s=1;s<e;s++)t[s-1]=arguments[s];(fo[n]||[]).forEach(l=>{l.apply(null,t)})}function Ei(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return mo[n]?mo[n].apply(null,e):void 0}function ed(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||_i();if(e)return e=is(t,e)||e,fy(U_.definitions,t,e)||fy(sr.styles,t,e)}const U_=new O2,j2=()=>{ge.autoReplaceSvg=!1,ge.observeMutations=!1,ls("noAuto")},z2={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return jr?(ls("beforeI2svg",n),Ei("pseudoElements2svg",n),Ei("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;ge.autoReplaceSvg===!1&&(ge.autoReplaceSvg=!0),ge.observeMutations=!0,w2(()=>{$2({autoReplaceSvgRoot:e}),ls("watch",n)})}},U2={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:is(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=wc(n[0]);return{prefix:t,iconName:is(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(ge.cssPrefix,"-"))>-1||n.match(o2))){const e=Tc(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||_i(),iconName:is(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=_i();return{prefix:e,iconName:is(e,n)||n}}}},mn={noAuto:j2,config:ge,dom:z2,parse:U2,library:U_,findIconDefinition:ed,toHtml:ol},$2=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=tt}=n;(Object.keys(sr.styles).length>0||ge.autoFetchSvg)&&jr&&ge.autoReplaceSvg&&mn.dom.i2svg({node:e})};function Sc(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>ol(t))}}),Object.defineProperty(n,"node",{get:function(){if(!jr)return;const t=tt.createElement("div");return t.innerHTML=n.html,t.children}}),n}function B2(n){let{children:e,main:t,mask:s,attributes:o,styles:l,transform:f}=n;if(Kd(f)&&t.found&&!s.found){const{width:d,height:g}=t,y={x:d/g/2,y:.5};o.style=Ec(ne(ne({},l),{},{"transform-origin":"".concat(y.x+f.x/16,"em ").concat(y.y+f.y/16,"em")}))}return[{tag:"svg",attributes:o,children:e}]}function H2(n){let{prefix:e,iconName:t,children:s,attributes:o,symbol:l}=n;const f=l===!0?"".concat(e,"-").concat(ge.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ne(ne({},o),{},{id:f}),children:s}]}]}function Yd(n){const{icons:{main:e,mask:t},prefix:s,iconName:o,transform:l,symbol:f,title:d,maskId:g,titleId:y,extra:_,watchable:w=!1}=n,{width:S,height:k}=t.found?t:e,q=HT.includes(s),U=[ge.replacementClass,o?"".concat(ge.cssPrefix,"-").concat(o):""].filter(oe=>_.classes.indexOf(oe)===-1).filter(oe=>oe!==""||!!oe).concat(_.classes).join(" ");let N={children:[],attributes:ne(ne({},_.attributes),{},{"data-prefix":s,"data-icon":o,class:U,role:_.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(k)})};const H=q&&!~_.classes.indexOf("fa-fw")?{width:"".concat(S/k*16*.0625,"em")}:{};w&&(N.attributes[as]=""),d&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(y||qa())},children:[d]}),delete N.attributes.title);const B=ne(ne({},N),{},{prefix:s,iconName:o,main:e,mask:t,maskId:g,transform:l,symbol:f,styles:ne(ne({},H),_.styles)}),{children:K,attributes:Z}=t.found&&e.found?Ei("generateAbstractMask",B)||{children:[],attributes:{}}:Ei("generateAbstractIcon",B)||{children:[],attributes:{}};return B.children=K,B.attributes=Z,f?H2(B):B2(B)}function my(n){const{content:e,width:t,height:s,transform:o,title:l,extra:f,watchable:d=!1}=n,g=ne(ne(ne({},f.attributes),l?{title:l}:{}),{},{class:f.classes.join(" ")});d&&(g[as]="");const y=ne({},f.styles);Kd(o)&&(y.transform=v2({transform:o,startCentered:!0,width:t,height:s}),y["-webkit-transform"]=y.transform);const _=Ec(y);_.length>0&&(g.style=_);const w=[];return w.push({tag:"span",attributes:g,children:[e]}),l&&w.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),w}function q2(n){const{content:e,title:t,extra:s}=n,o=ne(ne(ne({},s.attributes),t?{title:t}:{}),{},{class:s.classes.join(" ")}),l=Ec(s.styles);l.length>0&&(o.style=l);const f=[];return f.push({tag:"span",attributes:o,children:[e]}),t&&f.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),f}const{styles:Rh}=sr;function td(n){const e=n[0],t=n[1],[s]=n.slice(4);let o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(ge.cssPrefix,"-").concat(Ah.GROUP)},children:[{tag:"path",attributes:{class:"".concat(ge.cssPrefix,"-").concat(Ah.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(ge.cssPrefix,"-").concat(Ah.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:t,icon:o}}const W2={found:!1,width:512,height:512};function K2(n,e){!I_&&!ge.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function nd(n,e){let t=e;return e==="fa"&&ge.styleDefault!==null&&(e=_i()),new Promise((s,o)=>{if(t==="fa"){const l=j_(n)||{};n=l.iconName||n,e=l.prefix||e}if(n&&e&&Rh[e]&&Rh[e][n]){const l=Rh[e][n];return s(td(l))}K2(n,e),s(ne(ne({},W2),{},{icon:ge.showMissingIcons&&n?Ei("missingIconAbstract")||{}:{}}))})}const gy=()=>{},rd=ge.measurePerformance&&bu&&bu.mark&&bu.measure?bu:{mark:gy,measure:gy},Na='FA "6.7.2"',G2=n=>(rd.mark("".concat(Na," ").concat(n," begins")),()=>$_(n)),$_=n=>{rd.mark("".concat(Na," ").concat(n," ends")),rd.measure("".concat(Na," ").concat(n),"".concat(Na," ").concat(n," begins"),"".concat(Na," ").concat(n," ends"))};var Xd={begin:G2,end:$_};const zu=()=>{};function yy(n){return typeof(n.getAttribute?n.getAttribute(as):null)=="string"}function Q2(n){const e=n.getAttribute?n.getAttribute(Bd):null,t=n.getAttribute?n.getAttribute(Hd):null;return e&&t}function Y2(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(ge.replacementClass)}function X2(){return ge.autoReplaceSvg===!0?Uu.replace:Uu[ge.autoReplaceSvg]||Uu.replace}function J2(n){return tt.createElementNS("http://www.w3.org/2000/svg",n)}function Z2(n){return tt.createElement(n)}function B_(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?J2:Z2}=e;if(typeof n=="string")return tt.createTextNode(n);const s=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(l){s.setAttribute(l,n.attributes[l])}),(n.children||[]).forEach(function(l){s.appendChild(B_(l,{ceFn:t}))}),s}function eS(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Uu={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(B_(t),e)}),e.getAttribute(as)===null&&ge.keepOriginalSource){let t=tt.createComment(eS(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~Wd(e).indexOf(ge.replacementClass))return Uu.replace(n);const s=new RegExp("".concat(ge.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((f,d)=>(d===ge.replacementClass||d.match(s)?f.toSvg.push(d):f.toNode.push(d),f),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const o=t.map(l=>ol(l)).join(`
`);e.setAttribute(as,""),e.innerHTML=o}};function vy(n){n()}function H_(n,e){const t=typeof e=="function"?e:zu;if(n.length===0)t();else{let s=vy;ge.mutateApproach===r2&&(s=vi.requestAnimationFrame||vy),s(()=>{const o=X2(),l=Xd.begin("mutate");n.map(o),l(),t()})}}let Jd=!1;function q_(){Jd=!0}function id(){Jd=!1}let Xu=null;function _y(n){if(!sy||!ge.observeMutations)return;const{treeCallback:e=zu,nodeCallback:t=zu,pseudoElementsCallback:s=zu,observeMutationsRoot:o=tt}=n;Xu=new sy(l=>{if(Jd)return;const f=_i();ko(l).forEach(d=>{if(d.type==="childList"&&d.addedNodes.length>0&&!yy(d.addedNodes[0])&&(ge.searchPseudoElements&&s(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&ge.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&yy(d.target)&&~u2.indexOf(d.attributeName))if(d.attributeName==="class"&&Q2(d.target)){const{prefix:g,iconName:y}=Tc(Wd(d.target));d.target.setAttribute(Bd,g||f),y&&d.target.setAttribute(Hd,y)}else Y2(d.target)&&t(d.target)})}),jr&&Xu.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function tS(){Xu&&Xu.disconnect()}function nS(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((s,o)=>{const l=o.split(":"),f=l[0],d=l.slice(1);return f&&d.length>0&&(s[f]=d.join(":").trim()),s},{})),t}function rS(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),s=n.innerText!==void 0?n.innerText.trim():"";let o=Tc(Wd(n));return o.prefix||(o.prefix=_i()),e&&t&&(o.prefix=e,o.iconName=t),o.iconName&&o.prefix||(o.prefix&&s.length>0&&(o.iconName=R2(o.prefix,n.innerText)||Qd(o.prefix,Xh(n.innerText))),!o.iconName&&ge.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(o.iconName=n.firstChild.data)),o}function iS(n){const e=ko(n.attributes).reduce((o,l)=>(o.name!=="class"&&o.name!=="style"&&(o[l.name]=l.value),o),{}),t=n.getAttribute("title"),s=n.getAttribute("data-fa-title-id");return ge.autoA11y&&(t?e["aria-labelledby"]="".concat(ge.replacementClass,"-title-").concat(s||qa()):(e["aria-hidden"]="true",e.focusable="false")),e}function sS(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ir,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ey(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:s,rest:o}=rS(n),l=iS(n),f=Zh("parseNodeAttributes",{},n);let d=e.styleParser?nS(n):[];return ne({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:s,transform:ir,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:d,attributes:l}},f)}const{styles:oS}=sr;function W_(n){const e=ge.autoReplaceSvg==="nest"?Ey(n,{styleParser:!1}):Ey(n);return~e.extra.classes.indexOf(C_)?Ei("generateLayersText",n,e):Ei("generateSvgReplacementMutation",n,e)}function aS(){return[...UT,...qh]}function wy(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!jr)return Promise.resolve();const t=tt.documentElement.classList,s=_=>t.add("".concat(ly,"-").concat(_)),o=_=>t.remove("".concat(ly,"-").concat(_)),l=ge.autoFetchSvg?aS():__.concat(Object.keys(oS));l.includes("fa")||l.push("fa");const f=[".".concat(C_,":not([").concat(as,"])")].concat(l.map(_=>".".concat(_,":not([").concat(as,"])"))).join(", ");if(f.length===0)return Promise.resolve();let d=[];try{d=ko(n.querySelectorAll(f))}catch{}if(d.length>0)s("pending"),o("complete");else return Promise.resolve();const g=Xd.begin("onTree"),y=d.reduce((_,w)=>{try{const S=W_(w);S&&_.push(S)}catch(S){I_||S.name==="MissingIcon"&&console.error(S)}return _},[]);return new Promise((_,w)=>{Promise.all(y).then(S=>{H_(S,()=>{s("active"),s("complete"),o("pending"),typeof e=="function"&&e(),g(),_()})}).catch(S=>{g(),w(S)})})}function lS(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;W_(n).then(t=>{t&&H_([t],e)})}function uS(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:ed(e||{});let{mask:o}=t;return o&&(o=(o||{}).icon?o:ed(o||{})),n(s,ne(ne({},t),{},{mask:o}))}}const cS=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=ir,symbol:s=!1,mask:o=null,maskId:l=null,title:f=null,titleId:d=null,classes:g=[],attributes:y={},styles:_={}}=e;if(!n)return;const{prefix:w,iconName:S,icon:k}=n;return Sc(ne({type:"icon"},n),()=>(ls("beforeDOMElementCreation",{iconDefinition:n,params:e}),ge.autoA11y&&(f?y["aria-labelledby"]="".concat(ge.replacementClass,"-title-").concat(d||qa()):(y["aria-hidden"]="true",y.focusable="false")),Yd({icons:{main:td(k),mask:o?td(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:S,transform:ne(ne({},ir),t),symbol:s,title:f,maskId:l,titleId:d,extra:{attributes:y,styles:_,classes:g}})))};var fS={mixout(){return{icon:uS(cS)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=wy,n.nodeCallback=lS,n}}},provides(n){n.i2svg=function(e){const{node:t=tt,callback:s=()=>{}}=e;return wy(t,s)},n.generateSvgReplacementMutation=function(e,t){const{iconName:s,title:o,titleId:l,prefix:f,transform:d,symbol:g,mask:y,maskId:_,extra:w}=t;return new Promise((S,k)=>{Promise.all([nd(s,f),y.iconName?nd(y.iconName,y.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(q=>{let[U,N]=q;S([e,Yd({icons:{main:U,mask:N},prefix:f,iconName:s,transform:d,symbol:g,maskId:_,title:o,titleId:l,extra:w,watchable:!0})])}).catch(k)})},n.generateAbstractIcon=function(e){let{children:t,attributes:s,main:o,transform:l,styles:f}=e;const d=Ec(f);d.length>0&&(s.style=d);let g;return Kd(l)&&(g=Ei("generateAbstractTransformGrouping",{main:o,transform:l,containerWidth:o.width,iconWidth:o.width})),t.push(g||o.icon),{children:t,attributes:s}}}},hS={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Sc({type:"layer"},()=>{ls("beforeDOMElementCreation",{assembler:n,params:e});let s=[];return n(o=>{Array.isArray(o)?o.map(l=>{s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(ge.cssPrefix,"-layers"),...t].join(" ")},children:s}]})}}}},dS={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:s=[],attributes:o={},styles:l={}}=e;return Sc({type:"counter",content:n},()=>(ls("beforeDOMElementCreation",{content:n,params:e}),q2({content:n.toString(),title:t,extra:{attributes:o,styles:l,classes:["".concat(ge.cssPrefix,"-layers-counter"),...s]}})))}}}},pS={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=ir,title:s=null,classes:o=[],attributes:l={},styles:f={}}=e;return Sc({type:"text",content:n},()=>(ls("beforeDOMElementCreation",{content:n,params:e}),my({content:n,transform:ne(ne({},ir),t),title:s,extra:{attributes:l,styles:f,classes:["".concat(ge.cssPrefix,"-layers-text"),...o]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:s,transform:o,extra:l}=t;let f=null,d=null;if(y_){const g=parseInt(getComputedStyle(e).fontSize,10),y=e.getBoundingClientRect();f=y.width/g,d=y.height/g}return ge.autoA11y&&!s&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,my({content:e.innerHTML,width:f,height:d,transform:o,title:s,extra:l,watchable:!0})])}}};const mS=new RegExp('"',"ug"),Ty=[1105920,1112319],Sy=ne(ne(ne(ne({},{FontAwesome:{normal:"fas",400:"fas"}}),FT),t2),GT),sd=Object.keys(Sy).reduce((n,e)=>(n[e.toLowerCase()]=Sy[e],n),{}),gS=Object.keys(sd).reduce((n,e)=>{const t=sd[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function yS(n){const e=n.replace(mS,""),t=S2(e,0),s=t>=Ty[0]&&t<=Ty[1],o=e.length===2?e[0]===e[1]:!1;return{value:Xh(o?e[0]:e),isSecondary:s||o}}function vS(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),o=isNaN(s)?"normal":s;return(sd[t]||{})[o]||gS[t]}function Iy(n,e){const t="".concat(n2).concat(e.replace(":","-"));return new Promise((s,o)=>{if(n.getAttribute(t)!==null)return s();const f=ko(n.children).filter(S=>S.getAttribute(Kh)===e)[0],d=vi.getComputedStyle(n,e),g=d.getPropertyValue("font-family"),y=g.match(a2),_=d.getPropertyValue("font-weight"),w=d.getPropertyValue("content");if(f&&!y)return n.removeChild(f),s();if(y&&w!=="none"&&w!==""){const S=d.getPropertyValue("content");let k=vS(g,_);const{value:q,isSecondary:U}=yS(S),N=y[0].startsWith("FontAwesome");let H=Qd(k,q),B=H;if(N){const K=P2(q);K.iconName&&K.prefix&&(H=K.iconName,k=K.prefix)}if(H&&!U&&(!f||f.getAttribute(Bd)!==k||f.getAttribute(Hd)!==B)){n.setAttribute(t,B),f&&n.removeChild(f);const K=sS(),{extra:Z}=K;Z.attributes[Kh]=e,nd(H,k).then(oe=>{const he=Yd(ne(ne({},K),{},{icons:{main:oe,mask:z_()},prefix:k,iconName:B,extra:Z,watchable:!0})),R=tt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(R,n.firstChild):n.appendChild(R),R.outerHTML=he.map(I=>ol(I)).join(`
`),n.removeAttribute(t),s()}).catch(o)}else s()}else s()})}function _S(n){return Promise.all([Iy(n,"::before"),Iy(n,"::after")])}function ES(n){return n.parentNode!==document.head&&!~i2.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Kh)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Ay(n){if(jr)return new Promise((e,t)=>{const s=ko(n.querySelectorAll("*")).filter(ES).map(_S),o=Xd.begin("searchPseudoElements");q_(),Promise.all(s).then(()=>{o(),id(),e()}).catch(()=>{o(),id(),t()})})}var wS={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=Ay,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=tt}=e;ge.searchPseudoElements&&Ay(t)}}};let Cy=!1;var TS={mixout(){return{dom:{unwatch(){q_(),Cy=!0}}}},hooks(){return{bootstrap(){_y(Zh("mutationObserverCallbacks",{}))},noAuto(){tS()},watch(n){const{observeMutationsRoot:e}=n;Cy?id():_y(Zh("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const xy=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,s)=>{const o=s.toLowerCase().split("-"),l=o[0];let f=o.slice(1).join("-");if(l&&f==="h")return t.flipX=!0,t;if(l&&f==="v")return t.flipY=!0,t;if(f=parseFloat(f),isNaN(f))return t;switch(l){case"grow":t.size=t.size+f;break;case"shrink":t.size=t.size-f;break;case"left":t.x=t.x-f;break;case"right":t.x=t.x+f;break;case"up":t.y=t.y-f;break;case"down":t.y=t.y+f;break;case"rotate":t.rotate=t.rotate+f;break}return t},e)};var SS={mixout(){return{parse:{transform:n=>xy(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=xy(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:s,containerWidth:o,iconWidth:l}=e;const f={transform:"translate(".concat(o/2," 256)")},d="translate(".concat(s.x*32,", ").concat(s.y*32,") "),g="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),y="rotate(".concat(s.rotate," 0 0)"),_={transform:"".concat(d," ").concat(g," ").concat(y)},w={transform:"translate(".concat(l/2*-1," -256)")},S={outer:f,inner:_,path:w};return{tag:"g",attributes:ne({},S.outer),children:[{tag:"g",attributes:ne({},S.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:ne(ne({},t.icon.attributes),S.path)}]}]}}}};const Ph={x:0,y:0,width:"100%",height:"100%"};function Ry(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function IS(n){return n.tag==="g"?n.children:[n]}var AS={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),s=t?Tc(t.split(" ").map(o=>o.trim())):z_();return s.prefix||(s.prefix=_i()),n.mask=s,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:s,main:o,mask:l,maskId:f,transform:d}=e;const{width:g,icon:y}=o,{width:_,icon:w}=l,S=y2({transform:d,containerWidth:_,iconWidth:g}),k={tag:"rect",attributes:ne(ne({},Ph),{},{fill:"white"})},q=y.children?{children:y.children.map(Ry)}:{},U={tag:"g",attributes:ne({},S.inner),children:[Ry(ne({tag:y.tag,attributes:ne(ne({},y.attributes),S.path)},q))]},N={tag:"g",attributes:ne({},S.outer),children:[U]},H="mask-".concat(f||qa()),B="clip-".concat(f||qa()),K={tag:"mask",attributes:ne(ne({},Ph),{},{id:H,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,N]},Z={tag:"defs",children:[{tag:"clipPath",attributes:{id:B},children:IS(w)},K]};return t.push(Z,{tag:"rect",attributes:ne({fill:"currentColor","clip-path":"url(#".concat(B,")"),mask:"url(#".concat(H,")")},Ph)}),{children:t,attributes:s}}}},CS={provides(n){let e=!1;vi.matchMedia&&(e=vi.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],s={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:ne(ne({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=ne(ne({},o),{},{attributeName:"opacity"}),f={tag:"circle",attributes:ne(ne({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||f.children.push({tag:"animate",attributes:ne(ne({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ne(ne({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(f),t.push({tag:"path",attributes:ne(ne({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:ne(ne({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:ne(ne({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ne(ne({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},xS={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),s=t===null?!1:t===""?!0:t;return n.symbol=s,n}}}},RS=[E2,fS,hS,dS,pS,wS,TS,SS,AS,CS,xS];F2(RS,{mixoutsTo:mn});mn.noAuto;mn.config;mn.library;mn.dom;const od=mn.parse;mn.findIconDefinition;mn.toHtml;const PS=mn.icon;mn.layer;mn.text;mn.counter;var kh={exports:{}},bh,Py;function kS(){if(Py)return bh;Py=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return bh=n,bh}var Nh,ky;function bS(){if(ky)return Nh;ky=1;var n=kS();function e(){}function t(){}return t.resetWarningCache=e,Nh=function(){function s(f,d,g,y,_,w){if(w!==n){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}s.isRequired=s;function o(){return s}var l={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},Nh}var by;function NS(){return by||(by=1,kh.exports=bS()()),kh.exports}var DS=NS();const Re=qv(DS);function Ny(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);e&&(s=s.filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable})),t.push.apply(t,s)}return t}function rr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ny(Object(t),!0).forEach(function(s){ho(n,s,t[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ny(Object(t)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(t,s))})}return n}function Ju(n){"@babel/helpers - typeof";return Ju=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ju(n)}function ho(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function VS(n,e){if(n==null)return{};var t={},s=Object.keys(n),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function LS(n,e){if(n==null)return{};var t=VS(n,e),s,o;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(o=0;o<l.length;o++)s=l[o],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(t[s]=n[s])}return t}function ad(n){return OS(n)||MS(n)||FS(n)||jS()}function OS(n){if(Array.isArray(n))return ld(n)}function MS(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function FS(n,e){if(n){if(typeof n=="string")return ld(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ld(n,e)}}function ld(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,s=new Array(e);t<e;t++)s[t]=n[t];return s}function jS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zS(n){var e,t=n.beat,s=n.fade,o=n.beatFade,l=n.bounce,f=n.shake,d=n.flash,g=n.spin,y=n.spinPulse,_=n.spinReverse,w=n.pulse,S=n.fixedWidth,k=n.inverse,q=n.border,U=n.listItem,N=n.flip,H=n.size,B=n.rotation,K=n.pull,Z=(e={"fa-beat":t,"fa-fade":s,"fa-beat-fade":o,"fa-bounce":l,"fa-shake":f,"fa-flash":d,"fa-spin":g,"fa-spin-reverse":_,"fa-spin-pulse":y,"fa-pulse":w,"fa-fw":S,"fa-inverse":k,"fa-border":q,"fa-li":U,"fa-flip":N===!0,"fa-flip-horizontal":N==="horizontal"||N==="both","fa-flip-vertical":N==="vertical"||N==="both"},ho(e,"fa-".concat(H),typeof H<"u"&&H!==null),ho(e,"fa-rotate-".concat(B),typeof B<"u"&&B!==null&&B!==0),ho(e,"fa-pull-".concat(K),typeof K<"u"&&K!==null),ho(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(Z).map(function(oe){return Z[oe]?oe:null}).filter(function(oe){return oe})}function US(n){return n=n-0,n===n}function K_(n){return US(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var $S=["style"];function BS(n){return n.charAt(0).toUpperCase()+n.slice(1)}function HS(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var s=t.indexOf(":"),o=K_(t.slice(0,s)),l=t.slice(s+1).trim();return o.startsWith("webkit")?e[BS(o)]=l:e[o]=l,e},{})}function G_(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var s=(e.children||[]).map(function(g){return G_(n,g)}),o=Object.keys(e.attributes||{}).reduce(function(g,y){var _=e.attributes[y];switch(y){case"class":g.attrs.className=_,delete e.attributes.class;break;case"style":g.attrs.style=HS(_);break;default:y.indexOf("aria-")===0||y.indexOf("data-")===0?g.attrs[y.toLowerCase()]=_:g.attrs[K_(y)]=_}return g},{attrs:{}}),l=t.style,f=l===void 0?{}:l,d=LS(t,$S);return o.attrs.style=rr(rr({},o.attrs.style),f),n.apply(void 0,[e.tag,rr(rr({},o.attrs),d)].concat(ad(s)))}var Q_=!1;try{Q_=!0}catch{}function qS(){if(!Q_&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Dy(n){if(n&&Ju(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(od.icon)return od.icon(n);if(n===null)return null;if(n&&Ju(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Dh(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ho({},n,e):{}}var Vy={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},go=qe.forwardRef(function(n,e){var t=rr(rr({},Vy),n),s=t.icon,o=t.mask,l=t.symbol,f=t.className,d=t.title,g=t.titleId,y=t.maskId,_=Dy(s),w=Dh("classes",[].concat(ad(zS(t)),ad((f||"").split(" ")))),S=Dh("transform",typeof t.transform=="string"?od.transform(t.transform):t.transform),k=Dh("mask",Dy(o)),q=PS(_,rr(rr(rr(rr({},w),S),k),{},{symbol:l,title:d,titleId:g,maskId:y}));if(!q)return qS("Could not find icon",_),null;var U=q.abstract,N={ref:e};return Object.keys(t).forEach(function(H){Vy.hasOwnProperty(H)||(N[H]=t[H])}),WS(U[0],N)});go.displayName="FontAwesomeIcon";go.propTypes={beat:Re.bool,border:Re.bool,beatFade:Re.bool,bounce:Re.bool,className:Re.string,fade:Re.bool,flash:Re.bool,mask:Re.oneOfType([Re.object,Re.array,Re.string]),maskId:Re.string,fixedWidth:Re.bool,inverse:Re.bool,flip:Re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Re.oneOfType([Re.object,Re.array,Re.string]),listItem:Re.bool,pull:Re.oneOf(["right","left"]),pulse:Re.bool,rotation:Re.oneOf([0,90,180,270]),shake:Re.bool,size:Re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Re.bool,spinPulse:Re.bool,spinReverse:Re.bool,symbol:Re.oneOfType([Re.bool,Re.string]),title:Re.string,titleId:Re.string,transform:Re.oneOfType([Re.string,Re.object]),swapOpacity:Re.bool};var WS=G_.bind(null,qe.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const KS={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]},GS={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},QS={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]},YS=()=>F.jsxs(F.Fragment,{children:[F.jsx("div",{className:"header",children:F.jsxs("div",{className:"header--ul",children:[F.jsxs("div",{className:"ul--left",children:[F.jsx("li",{children:F.jsx(go,{icon:GS})}),F.jsx("li",{children:F.jsx(go,{icon:KS})}),F.jsx("li",{children:F.jsx(go,{icon:QS})})]}),F.jsx("div",{className:"ul--right",children:F.jsx("h4",{className:"a--ofertas",children:"GamerZone.com.ar"})})]})}),F.jsx("div",{className:"NavBarBackground",children:F.jsxs("div",{className:"Auto-Container",children:[F.jsxs("div",{className:"NavBar-Left",children:[F.jsx("img",{src:"/images/logo.png",className:"logo"}),F.jsx("a",{className:"tittle",href:"/",children:"GamerZone"})]}),F.jsx("div",{className:"NavBar-Right",children:F.jsx("nav",{children:F.jsxs("ul",{className:"NavBar-Ul",children:[F.jsx("input",{className:"Ul-Input",type:"text",placeholder:"Buscar..."}),F.jsx("li",{children:F.jsx("a",{className:"a--ofertas",href:"#sin-stock",children:"Proximamente"})}),F.jsx("li",{children:F.jsx("a",{className:"a--ofertas",href:"../Home/Home.jsx",children:"Inicio"})}),F.jsx("li",{children:F.jsx(yi,{to:"/carrito",children:F.jsx("button",{className:"button-Carrito",children:F.jsx(RT,{})})})})]})})})]})})]}),XS=()=>F.jsx("div",{className:"ContainerCategories",children:F.jsxs("div",{className:"Auto-Container2",children:[F.jsx("h4",{className:"Categories-h4",children:"Categorías"}),F.jsxs("ul",{className:"Categories",children:[F.jsx("li",{className:"Categories-li",children:F.jsx(ba,{to:"/categoria/videojuegos",children:"Videojuegos"})}),F.jsx("li",{className:"Categories-li",children:F.jsx(ba,{to:"/categoria/computadoras",children:"Computadoras"})}),F.jsx("li",{className:"Categories-li",children:F.jsx(ba,{to:"/categoria/celulares",children:"Celulares"})}),F.jsx("li",{className:"Categories-li",children:F.jsx(ba,{to:"/categoria/television",children:"Televisión"})})]})]})}),JS=()=>{const[n,e]=M.useState([]),[t,s]=M.useState(!0),[o,l]=M.useState(null);return M.useEffect(()=>{fetch("https://dummyjson.com/products/search?q=phone&limit=4").then(f=>{if(!f.ok)throw new Error(`HTTP error! Status: ${f.status}`);return f.json()}).then(f=>{f&&f.products?e(f.products):e([]),s(!1)}).catch(f=>{console.error("Error al obtener datos:",f),l(f.message),s(!1)})},[]),t?F.jsx("p",{className:"loading",children:"Cargando productos..."}):o?F.jsx("p",{className:"error",children:"Ocurrió un error al cargar las ofertas."}):F.jsxs(F.Fragment,{children:[F.jsx("h2",{className:"products-title",id:"sin-stock",children:"Próximamente"}),F.jsx("div",{className:"line"}),F.jsx("div",{className:"products-container2",children:n.map(f=>F.jsxs("div",{className:"product-card",children:[F.jsx("img",{src:f.thumbnail,alt:f.title,className:"product-image"}),F.jsx("h5",{className:"product--brand",children:f.brand||"Sin marca"}),F.jsx("h3",{className:"product--title",children:f.title}),F.jsxs("p",{className:"product--price2",children:["$",Math.round(f.price)]})]},f.id))})]})};function Y_(n){var e,t,s="";if(typeof n=="string"||typeof n=="number")s+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=Y_(n[e]))&&(s&&(s+=" "),s+=t)}else for(t in n)n[t]&&(s&&(s+=" "),s+=t);return s}function os(){for(var n,e,t=0,s="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=Y_(n))&&(s&&(s+=" "),s+=e);return s}var al=n=>typeof n=="number"&&!isNaN(n),us=n=>typeof n=="string",Vr=n=>typeof n=="function",ZS=n=>us(n)||al(n),ud=n=>us(n)||Vr(n)?n:null,eI=(n,e)=>n===!1||al(n)&&n>0?n:e,cd=n=>M.isValidElement(n)||us(n)||Vr(n)||al(n);function tI(n,e,t=300){let{scrollHeight:s,style:o}=n;requestAnimationFrame(()=>{o.minHeight="initial",o.height=s+"px",o.transition=`all ${t}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(e,t)})})}function nI({enter:n,exit:e,appendPosition:t=!1,collapse:s=!0,collapseDuration:o=300}){return function({children:l,position:f,preventExitTransition:d,done:g,nodeRef:y,isIn:_,playToast:w}){let S=t?`${n}--${f}`:n,k=t?`${e}--${f}`:e,q=M.useRef(0);return M.useLayoutEffect(()=>{let U=y.current,N=S.split(" "),H=B=>{B.target===y.current&&(w(),U.removeEventListener("animationend",H),U.removeEventListener("animationcancel",H),q.current===0&&B.type!=="animationcancel"&&U.classList.remove(...N))};U.classList.add(...N),U.addEventListener("animationend",H),U.addEventListener("animationcancel",H)},[]),M.useEffect(()=>{let U=y.current,N=()=>{U.removeEventListener("animationend",N),s?tI(U,g,o):g()};_||(d?N():(q.current=1,U.className+=` ${k}`,U.addEventListener("animationend",N)))},[_]),qe.createElement(qe.Fragment,null,l)}}function Ly(n,e){return{content:X_(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:e}}function X_(n,e,t=!1){return M.isValidElement(n)&&!us(n.type)?M.cloneElement(n,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):Vr(n)?n({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:t}):n}function rI({closeToast:n,theme:e,ariaLabel:t="close"}){return qe.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:s=>{s.stopPropagation(),n(!0)},"aria-label":t},qe.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},qe.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function iI({delay:n,isRunning:e,closeToast:t,type:s="default",hide:o,className:l,controlledProgress:f,progress:d,rtl:g,isIn:y,theme:_}){let w=o||f&&d===0,S={animationDuration:`${n}ms`,animationPlayState:e?"running":"paused"};f&&(S.transform=`scaleX(${d})`);let k=os("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${_}`,`Toastify__progress-bar--${s}`,{"Toastify__progress-bar--rtl":g}),q=Vr(l)?l({rtl:g,type:s,defaultClassName:k}):os(k,l),U={[f&&d>=1?"onTransitionEnd":"onAnimationEnd"]:f&&d<1?null:()=>{y&&t()}};return qe.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":w},qe.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${_} Toastify__progress-bar--${s}`}),qe.createElement("div",{role:"progressbar","aria-hidden":w?"true":"false","aria-label":"notification timer","aria-valuenow":f?Math.round(d*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:q,style:S,...U}))}var sI=1,J_=()=>`${sI++}`;function oI(n,e,t){let s=1,o=0,l=[],f=[],d=e,g=new Map,y=new Set,_=B=>(y.add(B),()=>y.delete(B)),w=()=>{f=Array.from(g.values()),y.forEach(B=>B())},S=({containerId:B,toastId:K,updateId:Z})=>{let oe=B?B!==n:n!==1,he=g.has(K)&&Z==null;return oe||he},k=(B,K)=>{g.forEach(Z=>{var oe;(K==null||K===Z.props.toastId)&&((oe=Z.toggle)==null||oe.call(Z,B))})},q=B=>{var K,Z;B.isActive&&((Z=(K=B.props)==null?void 0:K.onClose)==null||Z.call(K,B.removalReason),B.isActive=!1,t(Ly(B,"removed")))},U=B=>{if(B==null)g.forEach(q);else{let K=g.get(B);K&&q(K)}w()},N=()=>{o-=l.length,l=[]},H=B=>{var K,Z;let{toastId:oe,updateId:he}=B.props,R=he==null;B.staleId&&g.delete(B.staleId),B.isActive=!0,g.set(oe,B),w(),t(Ly(B,R?"added":"updated")),R&&((Z=(K=B.props).onOpen)==null||Z.call(K))};return{id:n,props:d,observe:_,toggle:k,removeToast:U,toasts:g,clearQueue:N,buildToast:(B,K)=>{if(S(K))return;let{toastId:Z,updateId:oe,data:he,staleId:R,delay:I}=K,x=oe==null;x&&o++;let b={...d,style:d.toastStyle,key:s++,...Object.fromEntries(Object.entries(K).filter(([L,C])=>C!=null)),toastId:Z,updateId:oe,data:he,isIn:!1,className:ud(K.className||d.toastClassName),progressClassName:ud(K.progressClassName||d.progressClassName),autoClose:K.isLoading?!1:eI(K.autoClose,d.autoClose),closeToast(L){let C=g.get(Z);C&&(C.removalReason=L,U(Z))},deleteToast(){if(g.get(Z)!=null){if(g.delete(Z),o--,o<0&&(o=0),l.length>0){H(l.shift());return}w()}}};b.closeButton=d.closeButton,K.closeButton===!1||cd(K.closeButton)?b.closeButton=K.closeButton:K.closeButton===!0&&(b.closeButton=cd(d.closeButton)?d.closeButton:!0);let D={content:B,props:b,staleId:R};d.limit&&d.limit>0&&o>d.limit&&x?l.push(D):al(I)?setTimeout(()=>{H(D)},I):H(D)},setProps(B){d=B},setToggle:(B,K)=>{let Z=g.get(B);Z&&(Z.toggle=K)},isToastActive:B=>{var K;return(K=g.get(B))==null?void 0:K.isActive},getSnapshot:()=>f}}var Qt=new Map,Ka=[],fd=new Set,aI=n=>fd.forEach(e=>e(n)),Z_=()=>Qt.size>0;function lI(){Ka.forEach(n=>t0(n.content,n.options)),Ka=[]}var uI=(n,{containerId:e})=>{var t;return(t=Qt.get(e||1))==null?void 0:t.toasts.get(n)};function e0(n,e){var t;if(e)return!!((t=Qt.get(e))!=null&&t.isToastActive(n));let s=!1;return Qt.forEach(o=>{o.isToastActive(n)&&(s=!0)}),s}function cI(n){if(!Z_()){Ka=Ka.filter(e=>n!=null&&e.options.toastId!==n);return}if(n==null||ZS(n))Qt.forEach(e=>{e.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let e=Qt.get(n.containerId);e?e.removeToast(n.id):Qt.forEach(t=>{t.removeToast(n.id)})}}var fI=(n={})=>{Qt.forEach(e=>{e.props.limit&&(!n.containerId||e.id===n.containerId)&&e.clearQueue()})};function t0(n,e){cd(n)&&(Z_()||Ka.push({content:n,options:e}),Qt.forEach(t=>{t.buildToast(n,e)}))}function hI(n){var e;(e=Qt.get(n.containerId||1))==null||e.setToggle(n.id,n.fn)}function n0(n,e){Qt.forEach(t=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===t.id)&&t.toggle(n,e==null?void 0:e.id)})}function dI(n){let e=n.containerId||1;return{subscribe(t){let s=oI(e,n,aI);Qt.set(e,s);let o=s.observe(t);return lI(),()=>{o(),Qt.delete(e)}},setProps(t){var s;(s=Qt.get(e))==null||s.setProps(t)},getSnapshot(){var t;return(t=Qt.get(e))==null?void 0:t.getSnapshot()}}}function pI(n){return fd.add(n),()=>{fd.delete(n)}}function mI(n){return n&&(us(n.toastId)||al(n.toastId))?n.toastId:J_()}function ll(n,e){return t0(n,e),e.toastId}function Ic(n,e){return{...e,type:e&&e.type||n,toastId:mI(e)}}function Ac(n){return(e,t)=>ll(e,Ic(n,t))}function $e(n,e){return ll(n,Ic("default",e))}$e.loading=(n,e)=>ll(n,Ic("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function gI(n,{pending:e,error:t,success:s},o){let l;e&&(l=us(e)?$e.loading(e,o):$e.loading(e.render,{...o,...e}));let f={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},d=(y,_,w)=>{if(_==null){$e.dismiss(l);return}let S={type:y,...f,...o,data:w},k=us(_)?{render:_}:_;return l?$e.update(l,{...S,...k}):$e(k.render,{...S,...k}),w},g=Vr(n)?n():n;return g.then(y=>d("success",s,y)).catch(y=>d("error",t,y)),g}$e.promise=gI;$e.success=Ac("success");$e.info=Ac("info");$e.error=Ac("error");$e.warning=Ac("warning");$e.warn=$e.warning;$e.dark=(n,e)=>ll(n,Ic("default",{theme:"dark",...e}));function yI(n){cI(n)}$e.dismiss=yI;$e.clearWaitingQueue=fI;$e.isActive=e0;$e.update=(n,e={})=>{let t=uI(n,e);if(t){let{props:s,content:o}=t,l={delay:100,...s,...e,toastId:e.toastId||n,updateId:J_()};l.toastId!==n&&(l.staleId=n);let f=l.render||o;delete l.render,ll(f,l)}};$e.done=n=>{$e.update(n,{progress:1})};$e.onChange=pI;$e.play=n=>n0(!0,n);$e.pause=n=>n0(!1,n);function vI(n){var e;let{subscribe:t,getSnapshot:s,setProps:o}=M.useRef(dI(n)).current;o(n);let l=(e=M.useSyncExternalStore(t,s,s))==null?void 0:e.slice();function f(d){if(!l)return[];let g=new Map;return n.newestOnTop&&l.reverse(),l.forEach(y=>{let{position:_}=y.props;g.has(_)||g.set(_,[]),g.get(_).push(y)}),Array.from(g,y=>d(y[0],y[1]))}return{getToastToRender:f,isToastActive:e0,count:l==null?void 0:l.length}}function _I(n){let[e,t]=M.useState(!1),[s,o]=M.useState(!1),l=M.useRef(null),f=M.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:g,closeToast:y,onClick:_,closeOnClick:w}=n;hI({id:n.toastId,containerId:n.containerId,fn:t}),M.useEffect(()=>{if(n.pauseOnFocusLoss)return S(),()=>{k()}},[n.pauseOnFocusLoss]);function S(){document.hasFocus()||H(),window.addEventListener("focus",N),window.addEventListener("blur",H)}function k(){window.removeEventListener("focus",N),window.removeEventListener("blur",H)}function q(R){if(n.draggable===!0||n.draggable===R.pointerType){B();let I=l.current;f.canCloseOnClick=!0,f.canDrag=!0,I.style.transition="none",n.draggableDirection==="x"?(f.start=R.clientX,f.removalDistance=I.offsetWidth*(n.draggablePercent/100)):(f.start=R.clientY,f.removalDistance=I.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function U(R){let{top:I,bottom:x,left:b,right:D}=l.current.getBoundingClientRect();R.pointerType==="mouse"&&n.pauseOnHover&&R.clientX>=b&&R.clientX<=D&&R.clientY>=I&&R.clientY<=x?H():N()}function N(){t(!0)}function H(){t(!1)}function B(){f.didMove=!1,document.addEventListener("pointermove",Z),document.addEventListener("pointerup",oe)}function K(){document.removeEventListener("pointermove",Z),document.removeEventListener("pointerup",oe)}function Z(R){let I=l.current;if(f.canDrag&&I){f.didMove=!0,e&&H(),n.draggableDirection==="x"?f.delta=R.clientX-f.start:f.delta=R.clientY-f.start,f.start!==R.clientX&&(f.canCloseOnClick=!1);let x=n.draggableDirection==="x"?`${f.delta}px, var(--y)`:`0, calc(${f.delta}px + var(--y))`;I.style.transform=`translate3d(${x},0)`,I.style.opacity=`${1-Math.abs(f.delta/f.removalDistance)}`}}function oe(){K();let R=l.current;if(f.canDrag&&f.didMove&&R){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance){o(!0),n.closeToast(!0),n.collapseAll();return}R.style.transition="transform 0.2s, opacity 0.2s",R.style.removeProperty("transform"),R.style.removeProperty("opacity")}}let he={onPointerDown:q,onPointerUp:U};return d&&g&&(he.onMouseEnter=H,n.stacked||(he.onMouseLeave=N)),w&&(he.onClick=R=>{_&&_(R),f.canCloseOnClick&&y(!0)}),{playToast:N,pauseToast:H,isRunning:e,preventExitTransition:s,toastRef:l,eventHandlers:he}}var r0=typeof window<"u"?M.useLayoutEffect:M.useEffect,Cc=({theme:n,type:e,isLoading:t,...s})=>qe.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...s});function EI(n){return qe.createElement(Cc,{...n},qe.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function wI(n){return qe.createElement(Cc,{...n},qe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function TI(n){return qe.createElement(Cc,{...n},qe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function SI(n){return qe.createElement(Cc,{...n},qe.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function II(){return qe.createElement("div",{className:"Toastify__spinner"})}var hd={info:wI,warning:EI,success:TI,error:SI,spinner:II},AI=n=>n in hd;function CI({theme:n,type:e,isLoading:t,icon:s}){let o=null,l={theme:n,type:e};return s===!1||(Vr(s)?o=s({...l,isLoading:t}):M.isValidElement(s)?o=M.cloneElement(s,l):t?o=hd.spinner():AI(e)&&(o=hd[e](l))),o}var xI=n=>{let{isRunning:e,preventExitTransition:t,toastRef:s,eventHandlers:o,playToast:l}=_I(n),{closeButton:f,children:d,autoClose:g,onClick:y,type:_,hideProgressBar:w,closeToast:S,transition:k,position:q,className:U,style:N,progressClassName:H,updateId:B,role:K,progress:Z,rtl:oe,toastId:he,deleteToast:R,isIn:I,isLoading:x,closeOnClick:b,theme:D,ariaLabel:L}=n,C=os("Toastify__toast",`Toastify__toast-theme--${D}`,`Toastify__toast--${_}`,{"Toastify__toast--rtl":oe},{"Toastify__toast--close-on-click":b}),Ge=Vr(U)?U({rtl:oe,position:q,type:_,defaultClassName:C}):os(C,U),He=CI(n),mt=!!Z||!g,Fe={closeToast:S,type:_,theme:D},ie=null;return f===!1||(Vr(f)?ie=f(Fe):M.isValidElement(f)?ie=M.cloneElement(f,Fe):ie=rI(Fe)),qe.createElement(k,{isIn:I,done:R,position:q,preventExitTransition:t,nodeRef:s,playToast:l},qe.createElement("div",{id:he,tabIndex:0,onClick:y,"data-in":I,className:Ge,...o,style:N,ref:s,...I&&{role:K,"aria-label":L}},He!=null&&qe.createElement("div",{className:os("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!x})},He),X_(d,n,!e),ie,!n.customProgressBar&&qe.createElement(iI,{...B&&!mt?{key:`p-${B}`}:{},rtl:oe,theme:D,delay:g,isRunning:e,isIn:I,closeToast:S,hide:w,type:_,className:H,controlledProgress:mt,progress:Z||0})))},RI=(n,e=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:e}),PI=nI(RI("bounce",!0)),kI={position:"top-right",transition:PI,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function bI(n){let e={...kI,...n},t=n.stacked,[s,o]=M.useState(!0),l=M.useRef(null),{getToastToRender:f,isToastActive:d,count:g}=vI(e),{className:y,style:_,rtl:w,containerId:S,hotKeys:k}=e;function q(N){let H=os("Toastify__toast-container",`Toastify__toast-container--${N}`,{"Toastify__toast-container--rtl":w});return Vr(y)?y({position:N,rtl:w,defaultClassName:H}):os(H,ud(y))}function U(){t&&(o(!0),$e.play())}return r0(()=>{var N;if(t){let H=l.current.querySelectorAll('[data-in="true"]'),B=12,K=(N=e.position)==null?void 0:N.includes("top"),Z=0,oe=0;Array.from(H).reverse().forEach((he,R)=>{let I=he;I.classList.add("Toastify__toast--stacked"),R>0&&(I.dataset.collapsed=`${s}`),I.dataset.pos||(I.dataset.pos=K?"top":"bot");let x=Z*(s?.2:1)+(s?0:B*R),b=Math.max(.5,1-(s?oe:0));I.style.setProperty("--y",`${K?x:x*-1}px`),I.style.setProperty("--g",`${B}`),I.style.setProperty("--s",`${b}`),Z+=I.offsetHeight,oe+=.025})}},[s,g,t]),M.useEffect(()=>{function N(H){var B;let K=l.current;k(H)&&((B=K==null?void 0:K.querySelector('[tabIndex="0"]'))==null||B.focus(),o(!1),$e.pause()),H.key==="Escape"&&(document.activeElement===K||K!=null&&K.contains(document.activeElement))&&(o(!0),$e.play())}return document.addEventListener("keydown",N),()=>{document.removeEventListener("keydown",N)}},[k]),qe.createElement("section",{ref:l,className:"Toastify",id:S,onMouseEnter:()=>{t&&(o(!1),$e.pause())},onMouseLeave:U,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},f((N,H)=>{let B=H.length?{..._}:{..._,pointerEvents:"none"};return qe.createElement("div",{tabIndex:-1,className:q(N),"data-stacked":t,style:B,key:`c-${N}`},H.map(({content:K,props:Z})=>qe.createElement(xI,{...Z,stacked:t,collapseAll:U,isIn:d(Z.toastId,Z.containerId),key:`t-${Z.key}`},K)))}))}var NI=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,Oy=new Map,DI=(n,e)=>{r0(()=>{if(typeof document>"u")return;let t=document,s=Oy.get(t);if(s){e&&s.setAttribute("nonce",e);return}let o=t.createElement("style");o.textContent=n,e&&o.setAttribute("nonce",e),t.head.appendChild(o),Oy.set(t,o)},[e])};function VI(n){return DI(NI,n.nonce),qe.createElement(bI,{...n})}const LI=({stock:n,initial:e,onAdd:t})=>{const[s,o]=M.useState(e),l=n<=0,f=()=>{s<n&&o(s+1)},d=()=>{s>1&&o(s-1)};return l?F.jsxs("div",{className:"item-count",children:[F.jsx("p",{className:"sin-stock-mensaje",style:{color:"#e74c3c",fontWeight:"bold"},children:"Sin stock disponible"}),F.jsx("div",{className:"item-count__actions",children:F.jsx(yi,{to:"/",className:"see--button",children:"Ver otros productos"})})]}):F.jsxs("div",{className:"item-count",children:[F.jsxs("div",{className:"item-count__controls",children:[F.jsx("button",{className:"operation",onClick:d,disabled:s<=1,children:"-"}),F.jsx("span",{className:"counter-number",children:s}),F.jsx("button",{className:"operation",onClick:f,disabled:s>=n,children:"+"})]}),F.jsxs("div",{className:"item-count__actions",children:[F.jsx("button",{className:"buy--button",onClick:()=>{$e.success(`¡Agregaste ${s} producto(s) al carrito!`,{position:"bottom-right",autoClose:2500,theme:"dark"}),t(s)},children:"Agregar al Carrito"}),F.jsx(yi,{to:"/cart",className:"see--button",children:"Ver Carrito"})]})]})},OI=({id:n,nombre:e,precio:t,img:s,marca:o,stock:l})=>{const{agregarAlCarrito:f}=M.useContext(vc),[d,g]=M.useState(1),y=_=>{g(_),f({id:n,nombre:e,precio:t},_)};return F.jsxs("div",{className:"ItemDetail--Container",children:[F.jsxs("div",{className:"ItemDetail--Container__left",children:[F.jsx("h5",{className:"product--brand",children:o}),F.jsx("h3",{className:"product--title",children:e}),F.jsxs("p",{className:"product--price2",children:["$",t]}),F.jsx(yi,{to:"/",children:F.jsx("button",{className:"see--button",children:"Atrás"})})]}),F.jsxs("div",{className:"ItemDetail--Container__right",children:[F.jsx("img",{src:s,alt:e,className:"product-image2"}),F.jsx("div",{className:"button-container",children:F.jsx(LI,{stock:l,initial:d,onAdd:y})})]})]})};var My={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let o=n.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},MI=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const o=n[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],f=n[t++],d=n[t++],g=((o&7)<<18|(l&63)<<12|(f&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=n[t++],f=n[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|f&63)}}return e.join("")},s0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<n.length;o+=3){const l=n[o],f=o+1<n.length,d=f?n[o+1]:0,g=o+2<n.length,y=g?n[o+2]:0,_=l>>2,w=(l&3)<<4|d>>4;let S=(d&15)<<2|y>>6,k=y&63;g||(k=64,f||(S=64)),s.push(t[_],t[w],t[S],t[k])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(i0(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):MI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const w=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||w==null)throw new FI;const S=l<<2|d>>4;if(s.push(S),y!==64){const k=d<<4&240|y>>2;if(s.push(k),w!==64){const q=y<<6&192|w;s.push(q)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class FI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jI=function(n){const e=i0(n);return s0.encodeByteArray(e,!0)},Zu=function(n){return jI(n).replace(/\./g,"")},zI=function(n){try{return s0.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=()=>UI().__FIREBASE_DEFAULTS__,BI=()=>{if(typeof process>"u"||typeof My>"u")return;const n=My.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},HI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&zI(n[1]);return e&&JSON.parse(e)},Zd=()=>{try{return $I()||BI()||HI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},qI=n=>{var e,t;return(t=(e=Zd())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},WI=n=>{const e=qI(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},o0=()=>{var n;return(n=Zd())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zu(JSON.stringify(t)),Zu(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YI(){var n;const e=(n=Zd())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XI(){return!YI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JI(){try{return typeof indexedDB=="object"}catch{return!1}}function ZI(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="FirebaseError";class bo extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=eA,Object.setPrototypeOf(this,bo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,a0.prototype.create)}}class a0{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],f=l?tA(l,s):"Error",d=`${this.serviceName}: ${f} (${o}).`;return new bo(o,d,s)}}function tA(n,e){return n.replace(nA,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const nA=/\{\$([^}]+)}/g;function dd(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=n[o],f=e[o];if(Fy(l)&&Fy(f)){if(!dd(l,f))return!1}else if(l!==f)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Fy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){return n&&n._delegate?n._delegate:n}class Ga{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new KI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sA(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,f]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&f.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const f=this.instances.get(o);return f&&e(f,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:iA(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iA(n){return n===ns?void 0:n}function sA(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ve||(Ve={}));const aA={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},lA=Ve.INFO,uA={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},cA=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),o=uA[e];if(o)console[o](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class l0{constructor(e){this.name=e,this._logLevel=lA,this._logHandler=cA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const fA=(n,e)=>e.some(t=>n instanceof t);let jy,zy;function hA(){return jy||(jy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dA(){return zy||(zy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u0=new WeakMap,pd=new WeakMap,c0=new WeakMap,Vh=new WeakMap,ep=new WeakMap;function pA(n){const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",f)},l=()=>{t(di(n.result)),o()},f=()=>{s(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",f)});return e.then(t=>{t instanceof IDBCursor&&u0.set(t,n)}).catch(()=>{}),ep.set(e,n),e}function mA(n){if(pd.has(n))return;const e=new Promise((t,s)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",f),n.removeEventListener("abort",f)},l=()=>{t(),o()},f=()=>{s(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",f),n.addEventListener("abort",f)});pd.set(n,e)}let md={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return pd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||c0.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return di(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gA(n){md=n(md)}function yA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Lh(this),e,...t);return c0.set(s,e.sort?e.sort():[e]),di(s)}:dA().includes(n)?function(...e){return n.apply(Lh(this),e),di(u0.get(this))}:function(...e){return di(n.apply(Lh(this),e))}}function vA(n){return typeof n=="function"?yA(n):(n instanceof IDBTransaction&&mA(n),fA(n,hA())?new Proxy(n,md):n)}function di(n){if(n instanceof IDBRequest)return pA(n);if(Vh.has(n))return Vh.get(n);const e=vA(n);return e!==n&&(Vh.set(n,e),ep.set(e,n)),e}const Lh=n=>ep.get(n);function _A(n,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const f=indexedDB.open(n,e),d=di(f);return s&&f.addEventListener("upgradeneeded",g=>{s(di(f.result),g.oldVersion,g.newVersion,di(f.transaction),g)}),t&&f.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),d.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const EA=["get","getKey","getAll","getAllKeys","count"],wA=["put","add","delete","clear"],Oh=new Map;function Uy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Oh.get(e))return Oh.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=wA.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||EA.includes(t)))return;const l=async function(f,...d){const g=this.transaction(f,o?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&g.done]))[0]};return Oh.set(e,l),l}gA(n=>({...n,get:(e,t,s)=>Uy(e,t)||n.get(e,t,s),has:(e,t)=>!!Uy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(SA(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function SA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gd="@firebase/app",$y="0.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new l0("@firebase/app"),IA="@firebase/app-compat",AA="@firebase/analytics-compat",CA="@firebase/analytics",xA="@firebase/app-check-compat",RA="@firebase/app-check",PA="@firebase/auth",kA="@firebase/auth-compat",bA="@firebase/database",NA="@firebase/data-connect",DA="@firebase/database-compat",VA="@firebase/functions",LA="@firebase/functions-compat",OA="@firebase/installations",MA="@firebase/installations-compat",FA="@firebase/messaging",jA="@firebase/messaging-compat",zA="@firebase/performance",UA="@firebase/performance-compat",$A="@firebase/remote-config",BA="@firebase/remote-config-compat",HA="@firebase/storage",qA="@firebase/storage-compat",WA="@firebase/firestore",KA="@firebase/vertexai",GA="@firebase/firestore-compat",QA="firebase",YA="11.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="[DEFAULT]",XA={[gd]:"fire-core",[IA]:"fire-core-compat",[CA]:"fire-analytics",[AA]:"fire-analytics-compat",[RA]:"fire-app-check",[xA]:"fire-app-check-compat",[PA]:"fire-auth",[kA]:"fire-auth-compat",[bA]:"fire-rtdb",[NA]:"fire-data-connect",[DA]:"fire-rtdb-compat",[VA]:"fire-fn",[LA]:"fire-fn-compat",[OA]:"fire-iid",[MA]:"fire-iid-compat",[FA]:"fire-fcm",[jA]:"fire-fcm-compat",[zA]:"fire-perf",[UA]:"fire-perf-compat",[$A]:"fire-rc",[BA]:"fire-rc-compat",[HA]:"fire-gcs",[qA]:"fire-gcs-compat",[WA]:"fire-fst",[GA]:"fire-fst-compat",[KA]:"fire-vertex","fire-js":"fire-js",[QA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new Map,JA=new Map,vd=new Map;function By(n,e){try{n.container.addComponent(e)}catch(t){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function tc(n){const e=n.name;if(vd.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;vd.set(e,n);for(const t of ec.values())By(t,n);for(const t of JA.values())By(t,n);return!0}function ZA(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function eC(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new a0("app","Firebase",tC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ga("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=YA;function f0(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw pi.create("bad-app-name",{appName:String(o)});if(t||(t=o0()),!t)throw pi.create("no-options");const l=ec.get(o);if(l){if(dd(t,l.options)&&dd(s,l.config))return l;throw pi.create("duplicate-app",{appName:o})}const f=new oA(o);for(const g of vd.values())f.addComponent(g);const d=new nC(t,s,f);return ec.set(o,d),d}function iC(n=yd){const e=ec.get(n);if(!e&&n===yd&&o0())return f0();if(!e)throw pi.create("no-app",{appName:n});return e}function yo(n,e,t){var s;let o=(s=XA[n])!==null&&s!==void 0?s:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),f=e.match(/\s|\//);if(l||f){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&f&&d.push("and"),f&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(d.join(" "));return}tc(new Ga(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC="firebase-heartbeat-database",oC=1,Qa="firebase-heartbeat-store";let Mh=null;function h0(){return Mh||(Mh=_A(sC,oC,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Qa)}catch(t){console.warn(t)}}}}).catch(n=>{throw pi.create("idb-open",{originalErrorMessage:n.message})})),Mh}async function aC(n){try{const t=(await h0()).transaction(Qa),s=await t.objectStore(Qa).get(d0(n));return await t.done,s}catch(e){if(e instanceof bo)Or.warn(e.message);else{const t=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Or.warn(t.message)}}}async function Hy(n,e){try{const s=(await h0()).transaction(Qa,"readwrite");await s.objectStore(Qa).put(e,d0(n)),await s.done}catch(t){if(t instanceof bo)Or.warn(t.message);else{const s=pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Or.warn(s.message)}}}function d0(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=1024,uC=30;class cC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=qy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(f=>f.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>uC){const f=dC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Or.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qy(),{heartbeatsToSend:s,unsentEntries:o}=fC(this._heartbeatsCache.heartbeats),l=Zu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Or.warn(t),""}}}function qy(){return new Date().toISOString().substring(0,10)}function fC(n,e=lC){const t=[];let s=n.slice();for(const o of n){const l=t.find(f=>f.agent===o.agent);if(l){if(l.dates.push(o.date),Wy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Wy(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class hC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JI()?ZI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await aC(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Wy(n){return Zu(JSON.stringify({version:2,heartbeats:n})).length}function dC(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(n){tc(new Ga("platform-logger",e=>new TA(e),"PRIVATE")),tc(new Ga("heartbeat",e=>new cC(e),"PRIVATE")),yo(gd,$y,n),yo(gd,$y,"esm2017"),yo("fire-js","")}pC("");var mC="firebase",gC="11.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yo(mC,gC,"app");var Ky=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mi,p0;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,I){function x(){}x.prototype=I.prototype,R.D=I.prototype,R.prototype=new x,R.prototype.constructor=R,R.C=function(b,D,L){for(var C=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)C[Ge-2]=arguments[Ge];return I.prototype[D].apply(b,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(R,I,x){x||(x=0);var b=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)b[D]=I.charCodeAt(x++)|I.charCodeAt(x++)<<8|I.charCodeAt(x++)<<16|I.charCodeAt(x++)<<24;else for(D=0;16>D;++D)b[D]=I[x++]|I[x++]<<8|I[x++]<<16|I[x++]<<24;I=R.g[0],x=R.g[1],D=R.g[2];var L=R.g[3],C=I+(L^x&(D^L))+b[0]+3614090360&4294967295;I=x+(C<<7&4294967295|C>>>25),C=L+(D^I&(x^D))+b[1]+3905402710&4294967295,L=I+(C<<12&4294967295|C>>>20),C=D+(x^L&(I^x))+b[2]+606105819&4294967295,D=L+(C<<17&4294967295|C>>>15),C=x+(I^D&(L^I))+b[3]+3250441966&4294967295,x=D+(C<<22&4294967295|C>>>10),C=I+(L^x&(D^L))+b[4]+4118548399&4294967295,I=x+(C<<7&4294967295|C>>>25),C=L+(D^I&(x^D))+b[5]+1200080426&4294967295,L=I+(C<<12&4294967295|C>>>20),C=D+(x^L&(I^x))+b[6]+2821735955&4294967295,D=L+(C<<17&4294967295|C>>>15),C=x+(I^D&(L^I))+b[7]+4249261313&4294967295,x=D+(C<<22&4294967295|C>>>10),C=I+(L^x&(D^L))+b[8]+1770035416&4294967295,I=x+(C<<7&4294967295|C>>>25),C=L+(D^I&(x^D))+b[9]+2336552879&4294967295,L=I+(C<<12&4294967295|C>>>20),C=D+(x^L&(I^x))+b[10]+4294925233&4294967295,D=L+(C<<17&4294967295|C>>>15),C=x+(I^D&(L^I))+b[11]+2304563134&4294967295,x=D+(C<<22&4294967295|C>>>10),C=I+(L^x&(D^L))+b[12]+1804603682&4294967295,I=x+(C<<7&4294967295|C>>>25),C=L+(D^I&(x^D))+b[13]+4254626195&4294967295,L=I+(C<<12&4294967295|C>>>20),C=D+(x^L&(I^x))+b[14]+2792965006&4294967295,D=L+(C<<17&4294967295|C>>>15),C=x+(I^D&(L^I))+b[15]+1236535329&4294967295,x=D+(C<<22&4294967295|C>>>10),C=I+(D^L&(x^D))+b[1]+4129170786&4294967295,I=x+(C<<5&4294967295|C>>>27),C=L+(x^D&(I^x))+b[6]+3225465664&4294967295,L=I+(C<<9&4294967295|C>>>23),C=D+(I^x&(L^I))+b[11]+643717713&4294967295,D=L+(C<<14&4294967295|C>>>18),C=x+(L^I&(D^L))+b[0]+3921069994&4294967295,x=D+(C<<20&4294967295|C>>>12),C=I+(D^L&(x^D))+b[5]+3593408605&4294967295,I=x+(C<<5&4294967295|C>>>27),C=L+(x^D&(I^x))+b[10]+38016083&4294967295,L=I+(C<<9&4294967295|C>>>23),C=D+(I^x&(L^I))+b[15]+3634488961&4294967295,D=L+(C<<14&4294967295|C>>>18),C=x+(L^I&(D^L))+b[4]+3889429448&4294967295,x=D+(C<<20&4294967295|C>>>12),C=I+(D^L&(x^D))+b[9]+568446438&4294967295,I=x+(C<<5&4294967295|C>>>27),C=L+(x^D&(I^x))+b[14]+3275163606&4294967295,L=I+(C<<9&4294967295|C>>>23),C=D+(I^x&(L^I))+b[3]+4107603335&4294967295,D=L+(C<<14&4294967295|C>>>18),C=x+(L^I&(D^L))+b[8]+1163531501&4294967295,x=D+(C<<20&4294967295|C>>>12),C=I+(D^L&(x^D))+b[13]+2850285829&4294967295,I=x+(C<<5&4294967295|C>>>27),C=L+(x^D&(I^x))+b[2]+4243563512&4294967295,L=I+(C<<9&4294967295|C>>>23),C=D+(I^x&(L^I))+b[7]+1735328473&4294967295,D=L+(C<<14&4294967295|C>>>18),C=x+(L^I&(D^L))+b[12]+2368359562&4294967295,x=D+(C<<20&4294967295|C>>>12),C=I+(x^D^L)+b[5]+4294588738&4294967295,I=x+(C<<4&4294967295|C>>>28),C=L+(I^x^D)+b[8]+2272392833&4294967295,L=I+(C<<11&4294967295|C>>>21),C=D+(L^I^x)+b[11]+1839030562&4294967295,D=L+(C<<16&4294967295|C>>>16),C=x+(D^L^I)+b[14]+4259657740&4294967295,x=D+(C<<23&4294967295|C>>>9),C=I+(x^D^L)+b[1]+2763975236&4294967295,I=x+(C<<4&4294967295|C>>>28),C=L+(I^x^D)+b[4]+1272893353&4294967295,L=I+(C<<11&4294967295|C>>>21),C=D+(L^I^x)+b[7]+4139469664&4294967295,D=L+(C<<16&4294967295|C>>>16),C=x+(D^L^I)+b[10]+3200236656&4294967295,x=D+(C<<23&4294967295|C>>>9),C=I+(x^D^L)+b[13]+681279174&4294967295,I=x+(C<<4&4294967295|C>>>28),C=L+(I^x^D)+b[0]+3936430074&4294967295,L=I+(C<<11&4294967295|C>>>21),C=D+(L^I^x)+b[3]+3572445317&4294967295,D=L+(C<<16&4294967295|C>>>16),C=x+(D^L^I)+b[6]+76029189&4294967295,x=D+(C<<23&4294967295|C>>>9),C=I+(x^D^L)+b[9]+3654602809&4294967295,I=x+(C<<4&4294967295|C>>>28),C=L+(I^x^D)+b[12]+3873151461&4294967295,L=I+(C<<11&4294967295|C>>>21),C=D+(L^I^x)+b[15]+530742520&4294967295,D=L+(C<<16&4294967295|C>>>16),C=x+(D^L^I)+b[2]+3299628645&4294967295,x=D+(C<<23&4294967295|C>>>9),C=I+(D^(x|~L))+b[0]+4096336452&4294967295,I=x+(C<<6&4294967295|C>>>26),C=L+(x^(I|~D))+b[7]+1126891415&4294967295,L=I+(C<<10&4294967295|C>>>22),C=D+(I^(L|~x))+b[14]+2878612391&4294967295,D=L+(C<<15&4294967295|C>>>17),C=x+(L^(D|~I))+b[5]+4237533241&4294967295,x=D+(C<<21&4294967295|C>>>11),C=I+(D^(x|~L))+b[12]+1700485571&4294967295,I=x+(C<<6&4294967295|C>>>26),C=L+(x^(I|~D))+b[3]+2399980690&4294967295,L=I+(C<<10&4294967295|C>>>22),C=D+(I^(L|~x))+b[10]+4293915773&4294967295,D=L+(C<<15&4294967295|C>>>17),C=x+(L^(D|~I))+b[1]+2240044497&4294967295,x=D+(C<<21&4294967295|C>>>11),C=I+(D^(x|~L))+b[8]+1873313359&4294967295,I=x+(C<<6&4294967295|C>>>26),C=L+(x^(I|~D))+b[15]+4264355552&4294967295,L=I+(C<<10&4294967295|C>>>22),C=D+(I^(L|~x))+b[6]+2734768916&4294967295,D=L+(C<<15&4294967295|C>>>17),C=x+(L^(D|~I))+b[13]+1309151649&4294967295,x=D+(C<<21&4294967295|C>>>11),C=I+(D^(x|~L))+b[4]+4149444226&4294967295,I=x+(C<<6&4294967295|C>>>26),C=L+(x^(I|~D))+b[11]+3174756917&4294967295,L=I+(C<<10&4294967295|C>>>22),C=D+(I^(L|~x))+b[2]+718787259&4294967295,D=L+(C<<15&4294967295|C>>>17),C=x+(L^(D|~I))+b[9]+3951481745&4294967295,R.g[0]=R.g[0]+I&4294967295,R.g[1]=R.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,R.g[2]=R.g[2]+D&4294967295,R.g[3]=R.g[3]+L&4294967295}s.prototype.u=function(R,I){I===void 0&&(I=R.length);for(var x=I-this.blockSize,b=this.B,D=this.h,L=0;L<I;){if(D==0)for(;L<=x;)o(this,R,L),L+=this.blockSize;if(typeof R=="string"){for(;L<I;)if(b[D++]=R.charCodeAt(L++),D==this.blockSize){o(this,b),D=0;break}}else for(;L<I;)if(b[D++]=R[L++],D==this.blockSize){o(this,b),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var I=1;I<R.length-8;++I)R[I]=0;var x=8*this.o;for(I=R.length-8;I<R.length;++I)R[I]=x&255,x/=256;for(this.u(R),R=Array(16),I=x=0;4>I;++I)for(var b=0;32>b;b+=8)R[x++]=this.g[I]>>>b&255;return R};function l(R,I){var x=d;return Object.prototype.hasOwnProperty.call(x,R)?x[R]:x[R]=I(R)}function f(R,I){this.h=I;for(var x=[],b=!0,D=R.length-1;0<=D;D--){var L=R[D]|0;b&&L==I||(x[D]=L,b=!1)}this.g=x}var d={};function g(R){return-128<=R&&128>R?l(R,function(I){return new f([I|0],0>I?-1:0)}):new f([R|0],0>R?-1:0)}function y(R){if(isNaN(R)||!isFinite(R))return w;if(0>R)return N(y(-R));for(var I=[],x=1,b=0;R>=x;b++)I[b]=R/x|0,x*=4294967296;return new f(I,0)}function _(R,I){if(R.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R.charAt(0)=="-")return N(_(R.substring(1),I));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=y(Math.pow(I,8)),b=w,D=0;D<R.length;D+=8){var L=Math.min(8,R.length-D),C=parseInt(R.substring(D,D+L),I);8>L?(L=y(Math.pow(I,L)),b=b.j(L).add(y(C))):(b=b.j(x),b=b.add(y(C)))}return b}var w=g(0),S=g(1),k=g(16777216);n=f.prototype,n.m=function(){if(U(this))return-N(this).m();for(var R=0,I=1,x=0;x<this.g.length;x++){var b=this.i(x);R+=(0<=b?b:4294967296+b)*I,I*=4294967296}return R},n.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(q(this))return"0";if(U(this))return"-"+N(this).toString(R);for(var I=y(Math.pow(R,6)),x=this,b="";;){var D=Z(x,I).g;x=H(x,D.j(I));var L=((0<x.g.length?x.g[0]:x.h)>>>0).toString(R);if(x=D,q(x))return L+b;for(;6>L.length;)L="0"+L;b=L+b}},n.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function q(R){if(R.h!=0)return!1;for(var I=0;I<R.g.length;I++)if(R.g[I]!=0)return!1;return!0}function U(R){return R.h==-1}n.l=function(R){return R=H(this,R),U(R)?-1:q(R)?0:1};function N(R){for(var I=R.g.length,x=[],b=0;b<I;b++)x[b]=~R.g[b];return new f(x,~R.h).add(S)}n.abs=function(){return U(this)?N(this):this},n.add=function(R){for(var I=Math.max(this.g.length,R.g.length),x=[],b=0,D=0;D<=I;D++){var L=b+(this.i(D)&65535)+(R.i(D)&65535),C=(L>>>16)+(this.i(D)>>>16)+(R.i(D)>>>16);b=C>>>16,L&=65535,C&=65535,x[D]=C<<16|L}return new f(x,x[x.length-1]&-2147483648?-1:0)};function H(R,I){return R.add(N(I))}n.j=function(R){if(q(this)||q(R))return w;if(U(this))return U(R)?N(this).j(N(R)):N(N(this).j(R));if(U(R))return N(this.j(N(R)));if(0>this.l(k)&&0>R.l(k))return y(this.m()*R.m());for(var I=this.g.length+R.g.length,x=[],b=0;b<2*I;b++)x[b]=0;for(b=0;b<this.g.length;b++)for(var D=0;D<R.g.length;D++){var L=this.i(b)>>>16,C=this.i(b)&65535,Ge=R.i(D)>>>16,He=R.i(D)&65535;x[2*b+2*D]+=C*He,B(x,2*b+2*D),x[2*b+2*D+1]+=L*He,B(x,2*b+2*D+1),x[2*b+2*D+1]+=C*Ge,B(x,2*b+2*D+1),x[2*b+2*D+2]+=L*Ge,B(x,2*b+2*D+2)}for(b=0;b<I;b++)x[b]=x[2*b+1]<<16|x[2*b];for(b=I;b<2*I;b++)x[b]=0;return new f(x,0)};function B(R,I){for(;(R[I]&65535)!=R[I];)R[I+1]+=R[I]>>>16,R[I]&=65535,I++}function K(R,I){this.g=R,this.h=I}function Z(R,I){if(q(I))throw Error("division by zero");if(q(R))return new K(w,w);if(U(R))return I=Z(N(R),I),new K(N(I.g),N(I.h));if(U(I))return I=Z(R,N(I)),new K(N(I.g),I.h);if(30<R.g.length){if(U(R)||U(I))throw Error("slowDivide_ only works with positive integers.");for(var x=S,b=I;0>=b.l(R);)x=oe(x),b=oe(b);var D=he(x,1),L=he(b,1);for(b=he(b,2),x=he(x,2);!q(b);){var C=L.add(b);0>=C.l(R)&&(D=D.add(x),L=C),b=he(b,1),x=he(x,1)}return I=H(R,D.j(I)),new K(D,I)}for(D=w;0<=R.l(I);){for(x=Math.max(1,Math.floor(R.m()/I.m())),b=Math.ceil(Math.log(x)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),L=y(x),C=L.j(I);U(C)||0<C.l(R);)x-=b,L=y(x),C=L.j(I);q(L)&&(L=S),D=D.add(L),R=H(R,C)}return new K(D,R)}n.A=function(R){return Z(this,R).h},n.and=function(R){for(var I=Math.max(this.g.length,R.g.length),x=[],b=0;b<I;b++)x[b]=this.i(b)&R.i(b);return new f(x,this.h&R.h)},n.or=function(R){for(var I=Math.max(this.g.length,R.g.length),x=[],b=0;b<I;b++)x[b]=this.i(b)|R.i(b);return new f(x,this.h|R.h)},n.xor=function(R){for(var I=Math.max(this.g.length,R.g.length),x=[],b=0;b<I;b++)x[b]=this.i(b)^R.i(b);return new f(x,this.h^R.h)};function oe(R){for(var I=R.g.length+1,x=[],b=0;b<I;b++)x[b]=R.i(b)<<1|R.i(b-1)>>>31;return new f(x,R.h)}function he(R,I){var x=I>>5;I%=32;for(var b=R.g.length-x,D=[],L=0;L<b;L++)D[L]=0<I?R.i(L+x)>>>I|R.i(L+x+1)<<32-I:R.i(L+x);return new f(D,R.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,p0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=_,mi=f}).apply(typeof Ky<"u"?Ky:typeof self<"u"?self:typeof window<"u"?window:{});var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m0,Da,g0,$u,_d,y0,v0,_0;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,v){return u==Array.prototype||u==Object.prototype||(u[p]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Du=="object"&&Du];for(var p=0;p<u.length;++p){var v=u[p];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var v=s;u=u.split(".");for(var T=0;T<u.length-1;T++){var j=u[T];if(!(j in v))break e;v=v[j]}u=u[u.length-1],T=v[u],p=p(T),p!=T&&p!=null&&e(v,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var v=0,T=!1,j={next:function(){if(!T&&v<u.length){var G=v++;return{value:p(G,u[G]),done:!1}}return T=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},d=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function _(u,p,v){return u.call.apply(u.bind,arguments)}function w(u,p,v){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,T),u.apply(p,j)}}return function(){return u.apply(p,arguments)}}function S(u,p,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,S.apply(null,arguments)}function k(u,p){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function q(u,p){function v(){}v.prototype=p.prototype,u.aa=p.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(T,j,G){for(var se=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)se[Be-2]=arguments[Be];return p.prototype[j].apply(T,se)}}function U(u){const p=u.length;if(0<p){const v=Array(p);for(let T=0;T<p;T++)v[T]=u[T];return v}return[]}function N(u,p){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(g(T)){const j=u.length||0,G=T.length||0;u.length=j+G;for(let se=0;se<G;se++)u[j+se]=T[se]}else u.push(T)}}class H{constructor(p,v){this.i=p,this.j=v,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function B(u){return/^[\s\xa0]*$/.test(u)}function K(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function Z(u){return Z[" "](u),u}Z[" "]=function(){};var oe=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function he(u,p,v){for(const T in u)p.call(v,u[T],T,u)}function R(u,p){for(const v in u)p.call(void 0,u[v],v,u)}function I(u){const p={};for(const v in u)p[v]=u[v];return p}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(u,p){let v,T;for(let j=1;j<arguments.length;j++){T=arguments[j];for(v in T)u[v]=T[v];for(let G=0;G<x.length;G++)v=x[G],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function D(u){var p=1;u=u.split(":");const v=[];for(;0<p&&u.length;)v.push(u.shift()),p--;return u.length&&v.push(u.join(":")),v}function L(u){d.setTimeout(()=>{throw u},0)}function C(){var u=ve;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class Ge{constructor(){this.h=this.g=null}add(p,v){const T=He.get();T.set(p,v),this.h?this.h.next=T:this.g=T,this.h=T}}var He=new H(()=>new mt,u=>u.reset());class mt{constructor(){this.next=this.g=this.h=null}set(p,v){this.h=p,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,ie=!1,ve=new Ge,le=()=>{const u=d.Promise.resolve(void 0);Fe=()=>{u.then(O)}};var O=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(v){L(v)}var p=He;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ie=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var Ae=(function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,p),d.removeEventListener("test",v,p)}catch{}return u})();function Ce(u,p){if(ye.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(oe){e:{try{Z(p.nodeName);var j=!0;break e}catch{}j=!1}j||(p=null)}}else v=="mouseover"?p=u.fromElement:v=="mouseout"&&(p=u.toElement);this.relatedTarget=p,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:be[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}q(Ce,ye);var be={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var ze="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function Qe(u,p,v,T,j){this.listener=u,this.proxy=null,this.src=p,this.type=v,this.capture=!!T,this.ha=j,this.key=++Ue,this.da=this.fa=!1}function St(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function fr(u){this.src=u,this.g={},this.h=0}fr.prototype.add=function(u,p,v,T,j){var G=u.toString();u=this.g[G],u||(u=this.g[G]=[],this.h++);var se=zr(u,p,T,j);return-1<se?(p=u[se],v||(p.fa=!1)):(p=new Qe(p,this.src,G,!!T,j),p.fa=v,u.push(p)),p};function ms(u,p){var v=p.type;if(v in u.g){var T=u.g[v],j=Array.prototype.indexOf.call(T,p,void 0),G;(G=0<=j)&&Array.prototype.splice.call(T,j,1),G&&(St(p),u.g[v].length==0&&(delete u.g[v],u.h--))}}function zr(u,p,v,T){for(var j=0;j<u.length;++j){var G=u[j];if(!G.da&&G.listener==p&&G.capture==!!v&&G.ha==T)return j}return-1}var xi="closure_lm_"+(1e6*Math.random()|0),gs={};function Lo(u,p,v,T,j){if(Array.isArray(p)){for(var G=0;G<p.length;G++)Lo(u,p[G],v,T,j);return null}return v=Fo(v),u&&u[ze]?u.K(p,v,y(T)?!!T.capture:!1,j):Oo(u,p,v,!1,T,j)}function Oo(u,p,v,T,j,G){if(!p)throw Error("Invalid event type");var se=y(j)?!!j.capture:!!j,Be=vs(u);if(Be||(u[xi]=Be=new fr(u)),v=Be.add(p,v,T,se,G),v.proxy)return v;if(T=pl(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)Ae||(j=se),j===void 0&&(j=!1),u.addEventListener(p.toString(),T,j);else if(u.attachEvent)u.attachEvent(dr(p.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function pl(){function u(v){return p.call(u.src,u.listener,v)}const p=Mo;return u}function ys(u,p,v,T,j){if(Array.isArray(p))for(var G=0;G<p.length;G++)ys(u,p[G],v,T,j);else T=y(T)?!!T.capture:!!T,v=Fo(v),u&&u[ze]?(u=u.i,p=String(p).toString(),p in u.g&&(G=u.g[p],v=zr(G,v,T,j),-1<v&&(St(G[v]),Array.prototype.splice.call(G,v,1),G.length==0&&(delete u.g[p],u.h--)))):u&&(u=vs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=zr(p,v,T,j)),(v=-1<u?p[u]:null)&&hr(v))}function hr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[ze])ms(p.i,u);else{var v=u.type,T=u.proxy;p.removeEventListener?p.removeEventListener(v,T,u.capture):p.detachEvent?p.detachEvent(dr(v),T):p.addListener&&p.removeListener&&p.removeListener(T),(v=vs(p))?(ms(v,u),v.h==0&&(v.src=null,p[xi]=null)):St(u)}}}function dr(u){return u in gs?gs[u]:gs[u]="on"+u}function Mo(u,p){if(u.da)u=!0;else{p=new Ce(p,this);var v=u.listener,T=u.ha||u.src;u.fa&&hr(u),u=v.call(T,p)}return u}function vs(u){return u=u[xi],u instanceof fr?u:null}var _s="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fo(u){return typeof u=="function"?u:(u[_s]||(u[_s]=function(p){return u.handleEvent(p)}),u[_s])}function gt(){Q.call(this),this.i=new fr(this),this.M=this,this.F=null}q(gt,Q),gt.prototype[ze]=!0,gt.prototype.removeEventListener=function(u,p,v,T){ys(this,u,p,v,T)};function yt(u,p){var v,T=u.F;if(T)for(v=[];T;T=T.F)v.push(T);if(u=u.M,T=p.type||p,typeof p=="string")p=new ye(p,u);else if(p instanceof ye)p.target=p.target||u;else{var j=p;p=new ye(T,u),b(p,j)}if(j=!0,v)for(var G=v.length-1;0<=G;G--){var se=p.g=v[G];j=pr(se,T,!0,p)&&j}if(se=p.g=u,j=pr(se,T,!0,p)&&j,j=pr(se,T,!1,p)&&j,v)for(G=0;G<v.length;G++)se=p.g=v[G],j=pr(se,T,!1,p)&&j}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var v=u.g[p],T=0;T<v.length;T++)St(v[T]);delete u.g[p],u.h--}}this.F=null},gt.prototype.K=function(u,p,v,T){return this.i.add(String(u),p,!1,v,T)},gt.prototype.L=function(u,p,v,T){return this.i.add(String(u),p,!0,v,T)};function pr(u,p,v,T){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var j=!0,G=0;G<p.length;++G){var se=p[G];if(se&&!se.da&&se.capture==v){var Be=se.listener,vt=se.ha||se.src;se.fa&&ms(u.i,se),j=Be.call(vt,T)!==!1&&j}}return j&&!T.defaultPrevented}function jo(u,p,v){if(typeof u=="function")v&&(u=S(u,v));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:d.setTimeout(u,p||0)}function Ur(u){u.g=jo(()=>{u.g=null,u.i&&(u.i=!1,Ur(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Ri extends Q{constructor(p,v){super(),this.m=p,this.l=v,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Ur(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pi(u){Q.call(this),this.h=u,this.g={}}q(Pi,Q);var zo=[];function Uo(u){he(u.g,function(p,v){this.g.hasOwnProperty(v)&&hr(p)},u),u.g={}}Pi.prototype.N=function(){Pi.aa.N.call(this),Uo(this)},Pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $o=d.JSON.stringify,Bo=d.JSON.parse,Ho=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function ki(){}ki.prototype.h=null;function Es(u){return u.h||(u.h=u.i())}function ws(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qn(){ye.call(this,"d")}q(qn,ye);function Ts(){ye.call(this,"c")}q(Ts,ye);var Wn={},qo=null;function bi(){return qo=qo||new gt}Wn.La="serverreachability";function Wo(u){ye.call(this,Wn.La,u)}q(Wo,ye);function mr(u){const p=bi();yt(p,new Wo(p))}Wn.STAT_EVENT="statevent";function Ko(u,p){ye.call(this,Wn.STAT_EVENT,u),this.stat=p}q(Ko,ye);function lt(u){const p=bi();yt(p,new Ko(p,u))}Wn.Ma="timingevent";function Ss(u,p){ye.call(this,Wn.Ma,u),this.size=p}q(Ss,ye);function Pn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},p)}function Ni(){this.g=!0}Ni.prototype.xa=function(){this.g=!1};function Di(u,p,v,T,j,G){u.info(function(){if(u.g)if(G)for(var se="",Be=G.split("&"),vt=0;vt<Be.length;vt++){var Ne=Be[vt].split("=");if(1<Ne.length){var It=Ne[0];Ne=Ne[1];var ht=It.split("_");se=2<=ht.length&&ht[1]=="type"?se+(It+"="+Ne+"&"):se+(It+"=redacted&")}}else se=null;else se=G;return"XMLHTTP REQ ("+T+") [attempt "+j+"]: "+p+`
`+v+`
`+se})}function Is(u,p,v,T,j,G,se){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+j+"]: "+p+`
`+v+`
`+G+" "+se})}function kn(u,p,v,T){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Hc(u,v)+(T?" "+T:"")})}function Go(u,p){u.info(function(){return"TIMEOUT: "+p})}Ni.prototype.info=function(){};function Hc(u,p){if(!u.g)return p;if(!p)return null;try{var v=JSON.parse(p);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var T=v[u];if(!(2>T.length)){var j=T[1];if(Array.isArray(j)&&!(1>j.length)){var G=j[0];if(G!="noop"&&G!="stop"&&G!="close")for(var se=1;se<j.length;se++)j[se]=""}}}}return $o(v)}catch{return p}}var As={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ml={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},bn;function Vi(){}q(Vi,ki),Vi.prototype.g=function(){return new XMLHttpRequest},Vi.prototype.i=function(){return{}},bn=new Vi;function Nn(u,p,v,T){this.j=u,this.i=p,this.l=v,this.R=T||1,this.U=new Pi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gl}function gl(){this.i=null,this.g="",this.h=!1}var Qo={},Cs={};function xs(u,p,v){u.L=1,u.v=Wr(ln(p)),u.m=v,u.P=!0,Yo(u,null)}function Yo(u,p){u.F=Date.now(),Ye(u),u.A=ln(u.v);var v=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Gr(v.i,"t",T),u.C=0,v=u.j.J,u.h=new gl,u.g=Vl(u.j,v?p:null,!u.m),0<u.O&&(u.M=new Ri(S(u.Y,u,u.g),u.O)),p=u.U,v=u.g,T=u.ca;var j="readystatechange";Array.isArray(j)||(j&&(zo[0]=j.toString()),j=zo);for(var G=0;G<j.length;G++){var se=Lo(v,j[G],T||p.handleEvent,!1,p.h||p);if(!se)break;p.g[se.key]=se}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),mr(),Di(u.i,u.u,u.A,u.l,u.R,u.m)}Nn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Xt(u)==3?p.j():this.Y(u)},Nn.prototype.Y=function(u){try{if(u==this.g)e:{const ht=Xt(this.g);var p=this.g.Ba();const _n=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||na(this.g)))){this.J||ht!=4||p==7||(p==8||0>=_n?mr(3):mr(2)),Li(this);var v=this.g.Z();this.X=v;t:if(yl(this)){var T=na(this.g);u="";var j=T.length,G=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),$r(this);var se="";break t}this.h.i=new d.TextDecoder}for(p=0;p<j;p++)this.h.h=!0,u+=this.h.i.decode(T[p],{stream:!(G&&p==j-1)});T.length=0,this.h.g+=u,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,Is(this.i,this.u,this.A,this.l,this.R,ht,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,vt=this.g;if((Be=vt.g?vt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Be)){var Ne=Be;break t}}Ne=null}if(v=Ne)kn(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xo(this,v);else{this.o=!1,this.s=3,lt(12),yn(this),$r(this);break e}}if(this.P){v=!0;let cn;for(;!this.J&&this.C<se.length;)if(cn=qc(this,se),cn==Cs){ht==4&&(this.s=4,lt(14),v=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==Qo){this.s=4,lt(15),kn(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else kn(this.i,this.l,cn,null),Xo(this,cn);if(yl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||se.length!=0||this.h.h||(this.s=1,lt(16),v=!1),this.o=this.o&&v,!v)kn(this.i,this.l,se,"[Invalid Chunked Response]"),yn(this),$r(this);else if(0<se.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),ia(It),It.M=!0,lt(11))}}else kn(this.i,this.l,se,null),Xo(this,se);ht==4&&yn(this),this.o&&!this.J&&(ht==4?Fs(this.j,this):(this.o=!1,Ye(this)))}else Ds(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),yn(this),$r(this)}}}catch{}finally{}};function yl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function qc(u,p){var v=u.C,T=p.indexOf(`
`,v);return T==-1?Cs:(v=Number(p.substring(v,T)),isNaN(v)?Qo:(T+=1,T+v>p.length?Cs:(p=p.slice(T,T+v),u.C=T+v,p)))}Nn.prototype.cancel=function(){this.J=!0,yn(this)};function Ye(u){u.S=Date.now()+u.I,vl(u,u.I)}function vl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Pn(S(u.ba,u),p)}function Li(u){u.B&&(d.clearTimeout(u.B),u.B=null)}Nn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Go(this.i,this.A),this.L!=2&&(mr(),lt(17)),yn(this),this.s=2,$r(this)):vl(this,this.S-u)};function $r(u){u.j.G==0||u.J||Fs(u.j,u)}function yn(u){Li(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Uo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Xo(u,p){try{var v=u.j;if(v.G!=0&&(v.g==u||qt(v.h,u))){if(!u.K&&qt(v.h,u)&&v.G==3){try{var T=v.Da.g.parse(p)}catch{T=null}if(Array.isArray(T)&&T.length==3){var j=T;if(j[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)Ms(v),Mn(v);else break e;Os(v),lt(18)}}else v.za=j[1],0<v.za-v.T&&37500>j[2]&&v.F&&v.v==0&&!v.C&&(v.C=Pn(S(v.Za,v),6e3));if(1>=El(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Er(v,11)}else if((u.K||v.g==u)&&Ms(v),!B(p))for(j=v.Da.g.parse(p),p=0;p<j.length;p++){let Ne=j[p];if(v.T=Ne[0],Ne=Ne[1],v.G==2)if(Ne[0]=="c"){v.K=Ne[1],v.ia=Ne[2];const It=Ne[3];It!=null&&(v.la=It,v.j.info("VER="+v.la));const ht=Ne[4];ht!=null&&(v.Aa=ht,v.j.info("SVER="+v.Aa));const _n=Ne[5];_n!=null&&typeof _n=="number"&&0<_n&&(T=1.5*_n,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const cn=u.g;if(cn){const $i=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var G=T.h;G.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Jo(G,G.h),G.h=null))}if(T.D){const zs=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;zs&&(T.ya=zs,We(T.I,T.D,zs))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var se=u;if(T.qa=Dl(T,T.J?T.ia:null,T.W),se.K){wl(T.h,se);var Be=se,vt=T.L;vt&&(Be.I=vt),Be.B&&(Li(Be),Ye(Be)),T.g=se}else Ui(T);0<v.i.length&&Yn(v)}else Ne[0]!="stop"&&Ne[0]!="close"||Er(v,7);else v.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?Er(v,7):Nt(v):Ne[0]!="noop"&&v.l&&v.l.ta(Ne),v.v=0)}}mr(4)}catch{}}var _l=class{constructor(u,p){this.g=u,this.map=p}};function Oi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function an(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function El(u){return u.h?1:u.g?u.g.size:0}function qt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Jo(u,p){u.g?u.g.add(p):u.h=p}function wl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Oi.prototype.cancel=function(){if(this.i=Tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Tl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const v of u.g.values())p=p.concat(v.D);return p}return U(u.i)}function Rs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],v=u.length,T=0;T<v;T++)p.push(u[T]);return p}p=[],v=0;for(T in u)p[v++]=u[T];return p}function Ps(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var v=0;v<u;v++)p.push(v);return p}p=[],v=0;for(const T in u)p[v++]=T;return p}}}function Br(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var v=Ps(u),T=Rs(u),j=T.length,G=0;G<j;G++)p.call(void 0,T[G],v&&v[G],u)}var Mi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wc(u,p){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var T=u[v].indexOf("="),j=null;if(0<=T){var G=u[v].substring(0,T);j=u[v].substring(T+1)}else G=u[v];p(G,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function gr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof gr){this.h=u.h,Fi(this,u.j),this.o=u.o,this.g=u.g,Hr(this,u.s),this.l=u.l;var p=u.i,v=new Kn;v.i=p.i,p.g&&(v.g=new Map(p.g),v.h=p.h),qr(this,v),this.m=u.m}else u&&(p=String(u).match(Mi))?(this.h=!1,Fi(this,p[1]||"",!0),this.o=ke(p[2]||""),this.g=ke(p[3]||"",!0),Hr(this,p[4]),this.l=ke(p[5]||"",!0),qr(this,p[6]||"",!0),this.m=ke(p[7]||"")):(this.h=!1,this.i=new Kn(null,this.h))}gr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Kr(p,ks,!0),":");var v=this.g;return(v||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Kr(p,ks,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Kr(v,v.charAt(0)=="/"?Al:Il,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Kr(v,Zo)),u.join("")};function ln(u){return new gr(u)}function Fi(u,p,v){u.j=v?ke(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Hr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function qr(u,p,v){p instanceof Kn?(u.i=p,Gn(u.i,u.h)):(v||(p=Kr(p,Cl)),u.i=new Kn(p,u.h))}function We(u,p,v){u.i.set(p,v)}function Wr(u){return We(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ke(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Kr(u,p,v){return typeof u=="string"?(u=encodeURI(u).replace(p,Sl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Sl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var ks=/[#\/\?@]/g,Il=/[#\?:]/g,Al=/[#\?]/g,Cl=/[#\?@]/g,Zo=/#/g;function Kn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function bt(u){u.g||(u.g=new Map,u.h=0,u.i&&Wc(u.i,function(p,v){u.add(decodeURIComponent(p.replace(/\+/g," ")),v)}))}n=Kn.prototype,n.add=function(u,p){bt(this),this.i=null,u=vn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(p),this.h+=1,this};function Dn(u,p){bt(u),p=vn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Vn(u,p){return bt(u),p=vn(u,p),u.g.has(p)}n.forEach=function(u,p){bt(this),this.g.forEach(function(v,T){v.forEach(function(j){u.call(p,j,T,this)},this)},this)},n.na=function(){bt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),v=[];for(let T=0;T<p.length;T++){const j=u[T];for(let G=0;G<j.length;G++)v.push(p[T])}return v},n.V=function(u){bt(this);let p=[];if(typeof u=="string")Vn(this,u)&&(p=p.concat(this.g.get(vn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)p=p.concat(u[v])}return p},n.set=function(u,p){return bt(this),this.i=null,u=vn(this,u),Vn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Gr(u,p,v){Dn(u,p),0<v.length&&(u.i=null,u.g.set(vn(u,p),U(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var v=0;v<p.length;v++){var T=p[v];const G=encodeURIComponent(String(T)),se=this.V(T);for(T=0;T<se.length;T++){var j=G;se[T]!==""&&(j+="="+encodeURIComponent(String(se[T]))),u.push(j)}}return this.i=u.join("&")};function vn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Gn(u,p){p&&!u.j&&(bt(u),u.i=null,u.g.forEach(function(v,T){var j=T.toLowerCase();T!=j&&(Dn(this,T),Gr(this,j,v))},u)),u.j=p}function Kc(u,p){const v=new Ni;if(d.Image){const T=new Image;T.onload=k(Yt,v,"TestLoadImage: loaded",!0,p,T),T.onerror=k(Yt,v,"TestLoadImage: error",!1,p,T),T.onabort=k(Yt,v,"TestLoadImage: abort",!1,p,T),T.ontimeout=k(Yt,v,"TestLoadImage: timeout",!1,p,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else p(!1)}function xl(u,p){const v=new Ni,T=new AbortController,j=setTimeout(()=>{T.abort(),Yt(v,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:T.signal}).then(G=>{clearTimeout(j),G.ok?Yt(v,"TestPingServer: ok",!0,p):Yt(v,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(j),Yt(v,"TestPingServer: error",!1,p)})}function Yt(u,p,v,T,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),T(v)}catch{}}function Gc(){this.g=new Ho}function Rl(u,p,v){const T=v||"";try{Br(u,function(j,G){let se=j;y(j)&&(se=$o(j)),p.push(T+G+"="+encodeURIComponent(se))})}catch(j){throw p.push(T+"type="+encodeURIComponent("_badmap")),j}}function yr(u){this.l=u.Ub||null,this.j=u.eb||!1}q(yr,ki),yr.prototype.g=function(){return new ji(this.l,this.j)},yr.prototype.i=(function(u){return function(){return u}})({});function ji(u,p){gt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}q(ji,gt),n=ji.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,On(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||d).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ln(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Ln(this):On(this),this.readyState==3&&Pl(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Ln(this))},n.Qa=function(u){this.g&&(this.response=u,Ln(this))},n.ga=function(){this.g&&Ln(this)};function Ln(u){u.readyState=4,u.l=null,u.j=null,u.v=null,On(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var v=p.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=p.next();return u.join(`\r
`)};function On(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function vr(u){let p="";return he(u,function(v,T){p+=T,p+=":",p+=v,p+=`\r
`}),p}function Qr(u,p,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=vr(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):We(u,p,v))}function nt(u){gt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}q(nt,gt);var Qc=/^https?$/i,ea=["POST","PUT"];n=nt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():bn.g(),this.v=this.o?Es(this.o):Es(bn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(G){zi(this,G);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var j in T)v.set(j,T[j]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const G of T.keys())v.set(G,T.get(G));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(G=>G.toLowerCase()=="content-type"),j=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ea,p,void 0))||T||j||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,se]of v)this.g.setRequestHeader(G,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ns(this),this.u=!0,this.g.send(u),this.u=!1}catch(G){zi(this,G)}};function zi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,bs(u),un(u)}function bs(u){u.A||(u.A=!0,yt(u,"complete"),yt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,yt(this,"complete"),yt(this,"abort"),un(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),un(this,!0)),nt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ta(this):this.bb())},n.bb=function(){ta(this)};function ta(u){if(u.h&&typeof f<"u"&&(!u.v[1]||Xt(u)!=4||u.Z()!=2)){if(u.u&&Xt(u)==4)jo(u.Ea,0,u);else if(yt(u,"readystatechange"),Xt(u)==4){u.h=!1;try{const se=u.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var v;if(!(v=p)){var T;if(T=se===0){var j=String(u.D).match(Mi)[1]||null;!j&&d.self&&d.self.location&&(j=d.self.location.protocol.slice(0,-1)),T=!Qc.test(j?j.toLowerCase():"")}v=T}if(v)yt(u,"complete"),yt(u,"success");else{u.m=6;try{var G=2<Xt(u)?u.g.statusText:""}catch{G=""}u.l=G+" ["+u.Z()+"]",bs(u)}}finally{un(u)}}}}function un(u,p){if(u.g){Ns(u);const v=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||yt(u,"ready");try{v.onreadystatechange=T}catch{}}}function Ns(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Xt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Bo(p)}};function na(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ds(u){const p={};u=(u.g&&2<=Xt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(B(u[T]))continue;var v=D(u[T]);const j=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const G=p[j]||[];p[j]=G,G.push(v)}R(p,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(u,p,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||p}function ra(u){this.Aa=0,this.i=[],this.j=new Ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,u),this.cb=Qn("retryDelaySeedMs",1e4,u),this.Wa=Qn("forwardChannelMaxRetries",2,u),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Oi(u&&u.concurrentRequestLimit),this.Da=new Gc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ra.prototype,n.la=8,n.G=1,n.connect=function(u,p,v,T){lt(0),this.W=u,this.H=p||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=Dl(this,null,this.W),Yn(this)};function Nt(u){if(Vs(u),u.G==3){var p=u.U++,v=ln(u.I);if(We(v,"SID",u.K),We(v,"RID",p),We(v,"TYPE","terminate"),_r(u,v),p=new Nn(u,u.j,p),p.L=2,p.v=Wr(ln(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(p.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=p.v,v=!0),v||(p.g=Vl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Ye(p)}Nl(u)}function Mn(u){u.g&&(ia(u),u.g.cancel(),u.g=null)}function Vs(u){Mn(u),u.u&&(d.clearTimeout(u.u),u.u=null),Ms(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Yn(u){if(!an(u.h)&&!u.s){u.s=!0;var p=u.Ga;Fe||le(),ie||(Fe(),ie=!0),ve.add(p,u),u.B=0}}function Yc(u,p){return El(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Pn(S(u.Ga,u,p),bl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const j=new Nn(this,this.j,u);let G=this.o;if(this.S&&(G?(G=I(G),b(G,this.S)):G=this.S),this.m!==null||this.O||(j.H=G,G=null),this.P)e:{for(var p=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(p+=T,4096<p){p=v;break e}if(p===4096||v===this.i.length-1){p=v+1;break e}}p=1e3}else p=1e3;p=Yr(this,j,p),v=ln(this.I),We(v,"RID",u),We(v,"CVER",22),this.D&&We(v,"X-HTTP-Session-Id",this.D),_r(this,v),G&&(this.O?p="headers="+encodeURIComponent(String(vr(G)))+"&"+p:this.m&&Qr(v,this.m,G)),Jo(this.h,j),this.Ua&&We(v,"TYPE","init"),this.P?(We(v,"$req",p),We(v,"SID","null"),j.T=!0,xs(j,v,null)):xs(j,v,p),this.G=2}}else this.G==3&&(u?Ls(this,u):this.i.length==0||an(this.h)||Ls(this))};function Ls(u,p){var v;p?v=p.l:v=u.U++;const T=ln(u.I);We(T,"SID",u.K),We(T,"RID",v),We(T,"AID",u.T),_r(u,T),u.m&&u.o&&Qr(T,u.m,u.o),v=new Nn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Yr(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Jo(u.h,v),xs(v,T,p)}function _r(u,p){u.H&&he(u.H,function(v,T){We(p,T,v)}),u.l&&Br({},function(v,T){We(p,T,v)})}function Yr(u,p,v){v=Math.min(u.i.length,v);var T=u.l?S(u.l.Na,u.l,u):null;e:{var j=u.i;let G=-1;for(;;){const se=["count="+v];G==-1?0<v?(G=j[0].g,se.push("ofs="+G)):G=0:se.push("ofs="+G);let Be=!0;for(let vt=0;vt<v;vt++){let Ne=j[vt].g;const It=j[vt].map;if(Ne-=G,0>Ne)G=Math.max(0,j[vt].g-100),Be=!1;else try{Rl(It,se,"req"+Ne+"_")}catch{T&&T(It)}}if(Be){T=se.join("&");break e}}}return u=u.i.splice(0,v),p.D=u,T}function Ui(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Fe||le(),ie||(Fe(),ie=!0),ve.add(p,u),u.v=0}}function Os(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Pn(S(u.Fa,u),bl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Pn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),Mn(this),kl(this))};function ia(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function kl(u){u.g=new Nn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=ln(u.qa);We(p,"RID","rpc"),We(p,"SID",u.K),We(p,"AID",u.T),We(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&We(p,"TO",u.ja),We(p,"TYPE","xmlhttp"),_r(u,p),u.m&&u.o&&Qr(p,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Wr(ln(p)),v.m=null,v.P=!0,Yo(v,u)}n.Za=function(){this.C!=null&&(this.C=null,Mn(this),Os(this),lt(19))};function Ms(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Fs(u,p){var v=null;if(u.g==p){Ms(u),ia(u),u.g=null;var T=2}else if(qt(u.h,p))v=p.D,wl(u.h,p),T=1;else return;if(u.G!=0){if(p.o)if(T==1){v=p.m?p.m.length:0,p=Date.now()-p.F;var j=u.B;T=bi(),yt(T,new Ss(T,v)),Yn(u)}else Ui(u);else if(j=p.s,j==3||j==0&&0<p.X||!(T==1&&Yc(u,p)||T==2&&Os(u)))switch(v&&0<v.length&&(p=u.h,p.i=p.i.concat(v)),j){case 1:Er(u,5);break;case 4:Er(u,10);break;case 3:Er(u,6);break;default:Er(u,2)}}}function bl(u,p){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*p}function Er(u,p){if(u.j.info("Error code "+p),p==2){var v=S(u.fb,u),T=u.Xa;const j=!T;T=new gr(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Fi(T,"https"),Wr(T),j?Kc(T.toString(),v):xl(T.toString(),v)}else lt(2);u.G=0,u.l&&u.l.sa(p),Nl(u),Vs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Nl(u){if(u.G=0,u.ka=[],u.l){const p=Tl(u.h);(p.length!=0||u.i.length!=0)&&(N(u.ka,p),N(u.ka,u.i),u.h.i.length=0,U(u.i),u.i.length=0),u.l.ra()}}function Dl(u,p,v){var T=v instanceof gr?ln(v):new gr(v);if(T.g!="")p&&(T.g=p+"."+T.g),Hr(T,T.s);else{var j=d.location;T=j.protocol,p=p?p+"."+j.hostname:j.hostname,j=+j.port;var G=new gr(null);T&&Fi(G,T),p&&(G.g=p),j&&Hr(G,j),v&&(G.l=v),T=G}return v=u.D,p=u.ya,v&&p&&We(T,v,p),We(T,"VER",u.la),_r(u,T),T}function Vl(u,p,v){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new nt(new yr({eb:v})):new nt(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sa(){}n=sa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function js(){}js.prototype.g=function(u,p){return new Wt(u,p)};function Wt(u,p){gt.call(this),this.g=new ra(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!B(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!B(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Xn(this)}q(Wt,gt),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Nt(this.g)},Wt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=$o(u),u=v);p.i.push(new _l(p.Ya++,u)),p.G==3&&Yn(p)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Nt(this.g),delete this.g,Wt.aa.N.call(this)};function Ll(u){qn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const v in p){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}q(Ll,qn);function Ol(){Ts.call(this),this.status=1}q(Ol,Ts);function Xn(u){this.g=u}q(Xn,sa),Xn.prototype.ua=function(){yt(this.g,"a")},Xn.prototype.ta=function(u){yt(this.g,new Ll(u))},Xn.prototype.sa=function(u){yt(this.g,new Ol)},Xn.prototype.ra=function(){yt(this.g,"b")},js.prototype.createWebChannel=js.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,_0=function(){return new js},v0=function(){return bi()},y0=Wn,_d={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},As.NO_ERROR=0,As.TIMEOUT=8,As.HTTP_ERROR=6,$u=As,ml.COMPLETE="complete",g0=ml,ws.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Da=ws,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,m0=nt}).apply(typeof Du<"u"?Du:typeof self<"u"?self:typeof window<"u"?window:{});const Gy="@firebase/firestore",Qy="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No="11.3.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new l0("@firebase/firestore");function ao(){return cs.logLevel}function ue(n,...e){if(cs.logLevel<=Ve.DEBUG){const t=e.map(tp);cs.debug(`Firestore (${No}): ${n}`,...t)}}function Mr(n,...e){if(cs.logLevel<=Ve.ERROR){const t=e.map(tp);cs.error(`Firestore (${No}): ${n}`,...t)}}function Eo(n,...e){if(cs.logLevel<=Ve.WARN){const t=e.map(tp);cs.warn(`Firestore (${No}): ${n}`,...t)}}function tp(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(n="Unexpected state"){const e=`FIRESTORE (${No}) INTERNAL ASSERTION FAILED: `+n;throw Mr(e),new Error(e)}function Ke(n,e){n||we()}function Pe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends bo{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($t.UNAUTHENTICATED)))}shutdown(){}}class vC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class _C{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ke(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Pr,e.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const g=l;e.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},d=g=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((g=>d(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?d(g):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Pr)}}),0),f()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ke(typeof s.accessToken=="string"),new E0(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ke(e===null||typeof e=="string"),new $t(e)}}class EC{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class wC{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new EC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t($t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class TC{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,eC(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Ke(this.o===void 0);const s=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const f=l.token!==this.R;return this.R=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>s(l)))};const o=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((l=>o(l))),setTimeout((()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.V)return Promise.resolve(new Yy(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ke(typeof t.token=="string"),this.R=t.token,new Yy(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=SC(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%62))}return s}}function Le(n,e){return n<e?-1:n>e?1:0}function wo(n,e,t){return n.length===e.length&&n.every(((s,o)=>t(s,e[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=-62135596800,Jy=1e6;class kt{static now(){return kt.fromMillis(Date.now())}static fromDate(e){return kt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Jy);return new kt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Xy)throw new pe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jy}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Xy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static fromTimestamp(e){return new Se(e)}static min(){return new Se(new kt(0,0))}static max(){return new Se(new kt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="__name__";class nr{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(),s===void 0?s=e.length-t:s>e.length-t&&we(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return nr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nr?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=nr.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=nr.isNumericId(e),o=nr.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?nr.extractNumericId(e).compare(nr.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return mi.fromString(e.substring(4,e.length-2))}}class Je extends nr{construct(e,t,s){return new Je(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new pe(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((o=>o.length>0)))}return new Je(t)}static emptyPath(){return new Je([])}}const IC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends nr{construct(e,t,s){return new Bt(e,t,s)}static isValidIdentifier(e){return IC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zy}static keyField(){return new Bt([Zy])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new pe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let f=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new pe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new pe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else d==="`"?(f=!f,o++):d!=="."||f?(s+=d,o++):(l(),o++)}if(l(),f)throw new pe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Bt(t)}static emptyPath(){return new Bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.path=e}static fromPath(e){return new Te(Je.fromString(e))}static fromName(e){return new Te(Je.fromString(e).popFirst(5))}static empty(){return new Te(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Te(new Je(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=-1;function AC(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,o=Se.fromTimestamp(s===1e9?new kt(t+1,0):new kt(t,s));return new wi(o,Te.empty(),e)}function CC(n){return new wi(n.readTime,n.key,Ya)}class wi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new wi(Se.min(),Te.empty(),Ya)}static max(){return new wi(Se.max(),Te.empty(),Ya)}}function xC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Te.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xc(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==RC)throw n;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Y(((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Y?t:Y.resolve(t)}catch(t){return Y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Y.reject(t)}static resolve(e){return new Y(((t,s)=>{t(e)}))}static reject(e){return new Y(((t,s)=>{s(e)}))}static waitFor(e){return new Y(((t,s)=>{let o=0,l=0,f=!1;e.forEach((d=>{++o,d.next((()=>{++l,f&&l===o&&t()}),(g=>s(g)))})),f=!0,l===o&&t()}))}static or(e){let t=Y.resolve(!1);for(const s of e)t=t.next((o=>o?Y.resolve(o):s()));return t}static forEach(e,t){const s=[];return e.forEach(((o,l)=>{s.push(t.call(this,o,l))})),this.waitFor(s)}static mapArray(e,t){return new Y(((s,o)=>{const l=e.length,f=new Array(l);let d=0;for(let g=0;g<l;g++){const y=g;t(e[y]).next((_=>{f[y]=_,++d,d===l&&s(f)}),(_=>o(_)))}}))}static doWhile(e,t){return new Y(((s,o)=>{const l=()=>{e()===!0?t().next((()=>{l()}),o):s()};l()}))}}function kC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Do(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.oe(s),this._e=s=>t.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Rc.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=-1;function ul(n){return n==null}function nc(n){return n===0&&1/n==-1/0}function NC(n){return typeof n=="number"&&Number.isInteger(n)&&!nc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0="";function DC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ev(e)),e=VC(n.get(t),e);return ev(e)}function VC(n,e){let t=e;const s=n.length;for(let o=0;o<s;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case T0:t+="";break;default:t+=l}}return t}function ev(n){return n+T0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function hs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function S0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this.comparator=e,this.root=t||Lt.EMPTY}insert(e,t){return new ft(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vu(this.root,e,this.comparator,!0)}}class Vu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Lt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Lt.RED,this.left=o??Lt.EMPTY,this.right=l??Lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Lt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Lt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,s,o,l){return this}insert(e,t,s){return new Lt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nv(this.data.getIterator())}getIteratorFrom(e){return new nv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Tt(this.comparator);return t.data=e,t}}class nv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.fields=e,e.sort(Bt.comparator)}static empty(){return new xn([])}unionWith(e){let t=new Tt(Bt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new xn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wo(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new I0("Invalid base64 string: "+l):l}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(o){let l="";for(let f=0;f<o.length;++f)l+=String.fromCharCode(o[f]);return l})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const LC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ti(n){if(Ke(!!n),typeof n=="string"){let e=0;const t=LC.exec(n);if(Ke(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ct(n.seconds),nanos:ct(n.nanos)}}function ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Si(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="server_timestamp",C0="__type__",x0="__previous_value__",R0="__local_write_time__";function np(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[C0])===null||t===void 0?void 0:t.stringValue)===A0}function Pc(n){const e=n.mapValue.fields[x0];return np(e)?Pc(e):e}function Xa(n){const e=Ti(n.mapValue.fields[R0].timestampValue);return new kt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,t,s,o,l,f,d,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=f,this.autoDetectLongPolling=d,this.longPollingOptions=g,this.useFetchStreams=y}}const rc="(default)";class Ja{constructor(e,t){this.projectId=e,this.database=t||rc}static empty(){return new Ja("","")}get isDefaultDatabase(){return this.database===rc}isEqual(e){return e instanceof Ja&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0="__type__",MC="__max__",Lu={mapValue:{}},k0="__vector__",ic="value";function Ii(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?np(n)?4:jC(n)?9007199254740991:FC(n)?10:11:we()}function lr(n,e){if(n===e)return!0;const t=Ii(n);if(t!==Ii(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Xa(n).isEqual(Xa(e));case 3:return(function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const f=Ti(o.timestampValue),d=Ti(l.timestampValue);return f.seconds===d.seconds&&f.nanos===d.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(o,l){return Si(o.bytesValue).isEqual(Si(l.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(o,l){return ct(o.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(o.geoPointValue.longitude)===ct(l.geoPointValue.longitude)})(n,e);case 2:return(function(o,l){if("integerValue"in o&&"integerValue"in l)return ct(o.integerValue)===ct(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const f=ct(o.doubleValue),d=ct(l.doubleValue);return f===d?nc(f)===nc(d):isNaN(f)&&isNaN(d)}return!1})(n,e);case 9:return wo(n.arrayValue.values||[],e.arrayValue.values||[],lr);case 10:case 11:return(function(o,l){const f=o.mapValue.fields||{},d=l.mapValue.fields||{};if(tv(f)!==tv(d))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(d[g]===void 0||!lr(f[g],d[g])))return!1;return!0})(n,e);default:return we()}}function Za(n,e){return(n.values||[]).find((t=>lr(t,e)))!==void 0}function To(n,e){if(n===e)return 0;const t=Ii(n),s=Ii(e);if(t!==s)return Le(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return(function(l,f){const d=ct(l.integerValue||l.doubleValue),g=ct(f.integerValue||f.doubleValue);return d<g?-1:d>g?1:d===g?0:isNaN(d)?isNaN(g)?0:-1:1})(n,e);case 3:return rv(n.timestampValue,e.timestampValue);case 4:return rv(Xa(n),Xa(e));case 5:return Le(n.stringValue,e.stringValue);case 6:return(function(l,f){const d=Si(l),g=Si(f);return d.compareTo(g)})(n.bytesValue,e.bytesValue);case 7:return(function(l,f){const d=l.split("/"),g=f.split("/");for(let y=0;y<d.length&&y<g.length;y++){const _=Le(d[y],g[y]);if(_!==0)return _}return Le(d.length,g.length)})(n.referenceValue,e.referenceValue);case 8:return(function(l,f){const d=Le(ct(l.latitude),ct(f.latitude));return d!==0?d:Le(ct(l.longitude),ct(f.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return iv(n.arrayValue,e.arrayValue);case 10:return(function(l,f){var d,g,y,_;const w=l.fields||{},S=f.fields||{},k=(d=w[ic])===null||d===void 0?void 0:d.arrayValue,q=(g=S[ic])===null||g===void 0?void 0:g.arrayValue,U=Le(((y=k==null?void 0:k.values)===null||y===void 0?void 0:y.length)||0,((_=q==null?void 0:q.values)===null||_===void 0?void 0:_.length)||0);return U!==0?U:iv(k,q)})(n.mapValue,e.mapValue);case 11:return(function(l,f){if(l===Lu.mapValue&&f===Lu.mapValue)return 0;if(l===Lu.mapValue)return 1;if(f===Lu.mapValue)return-1;const d=l.fields||{},g=Object.keys(d),y=f.fields||{},_=Object.keys(y);g.sort(),_.sort();for(let w=0;w<g.length&&w<_.length;++w){const S=Le(g[w],_[w]);if(S!==0)return S;const k=To(d[g[w]],y[_[w]]);if(k!==0)return k}return Le(g.length,_.length)})(n.mapValue,e.mapValue);default:throw we()}}function rv(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=Ti(n),s=Ti(e),o=Le(t.seconds,s.seconds);return o!==0?o:Le(t.nanos,s.nanos)}function iv(n,e){const t=n.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=To(t[o],s[o]);if(l)return l}return Le(t.length,s.length)}function So(n){return Ed(n)}function Ed(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=Ti(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Si(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Te.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Ed(l);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const f of s)l?l=!1:o+=",",o+=`${f}:${Ed(t.fields[f])}`;return o+"}"})(n.mapValue):we()}function Bu(n){switch(Ii(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pc(n);return e?16+Bu(e):16;case 5:return 2*n.stringValue.length;case 6:return Si(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((o,l)=>o+Bu(l)),0)})(n.arrayValue);case 10:case 11:return(function(s){let o=0;return hs(s.fields,((l,f)=>{o+=l.length+Bu(f)})),o})(n.mapValue);default:throw we()}}function wd(n){return!!n&&"integerValue"in n}function rp(n){return!!n&&"arrayValue"in n}function sv(n){return!!n&&"nullValue"in n}function ov(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fh(n){return!!n&&"mapValue"in n}function FC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[P0])===null||t===void 0?void 0:t.stringValue)===k0}function ja(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return hs(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ja(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ja(n.arrayValue.values[t]);return e}return Object.assign({},n)}function jC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===MC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ja(t)}setAll(e){let t=Bt.emptyPath(),s={},o=[];e.forEach(((f,d)=>{if(!t.isImmediateParentOf(d)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=d.popLast()}f?s[d.lastSegment()]=ja(f):o.push(d.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());Fh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return lr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Fh(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){hs(t,((o,l)=>e[o]=l));for(const o of s)delete e[o]}clone(){return new on(ja(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,t,s,o,l,f,d){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=f,this.documentState=d}static newInvalidDocument(e){return new Pt(e,0,Se.min(),Se.min(),Se.min(),on.empty(),0)}static newFoundDocument(e,t,s,o){return new Pt(e,1,t,Se.min(),s,o,0)}static newNoDocument(e,t){return new Pt(e,2,t,Se.min(),Se.min(),on.empty(),0)}static newUnknownDocument(e,t){return new Pt(e,3,t,Se.min(),Se.min(),on.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t){this.position=e,this.inclusive=t}}function av(n,e,t){let s=0;for(let o=0;o<n.position.length;o++){const l=e[o],f=n.position[o];if(l.field.isKeyField()?s=Te.comparator(Te.fromName(f.referenceValue),t.key):s=To(f,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function lv(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!lr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t="asc"){this.field=e,this.dir=t}}function zC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{}class wt extends b0{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new $C(e,t,s):t==="array-contains"?new qC(e,s):t==="in"?new WC(e,s):t==="not-in"?new KC(e,s):t==="array-contains-any"?new GC(e,s):new wt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new BC(e,s):new HC(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(To(t,this.value)):t!==null&&Ii(this.value)===Ii(t)&&this.matchesComparison(To(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ur extends b0{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new ur(e,t)}matches(e){return N0(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function N0(n){return n.op==="and"}function D0(n){return UC(n)&&N0(n)}function UC(n){for(const e of n.filters)if(e instanceof ur)return!1;return!0}function Td(n){if(n instanceof wt)return n.field.canonicalString()+n.op.toString()+So(n.value);if(D0(n))return n.filters.map((e=>Td(e))).join(",");{const e=n.filters.map((t=>Td(t))).join(",");return`${n.op}(${e})`}}function V0(n,e){return n instanceof wt?(function(s,o){return o instanceof wt&&s.op===o.op&&s.field.isEqual(o.field)&&lr(s.value,o.value)})(n,e):n instanceof ur?(function(s,o){return o instanceof ur&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce(((l,f,d)=>l&&V0(f,o.filters[d])),!0):!1})(n,e):void we()}function L0(n){return n instanceof wt?(function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`})(n):n instanceof ur?(function(t){return t.op.toString()+" {"+t.getFilters().map(L0).join(" ,")+"}"})(n):"Filter"}class $C extends wt{constructor(e,t,s){super(e,t,s),this.key=Te.fromName(s.referenceValue)}matches(e){const t=Te.comparator(e.key,this.key);return this.matchesComparison(t)}}class BC extends wt{constructor(e,t){super(e,"in",t),this.keys=O0("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class HC extends wt{constructor(e,t){super(e,"not-in",t),this.keys=O0("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function O0(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((s=>Te.fromName(s.referenceValue)))}class qC extends wt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return rp(t)&&Za(t.arrayValue,this.value)}}class WC extends wt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Za(this.value.arrayValue,t)}}class KC extends wt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Za(this.value.arrayValue,t)}}class GC extends wt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!rp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Za(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e,t=null,s=[],o=[],l=null,f=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=f,this.endAt=d,this.le=null}}function uv(n,e=null,t=[],s=[],o=null,l=null,f=null){return new QC(n,e,t,s,o,l,f)}function ip(n){const e=Pe(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Td(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(l){return l.field.canonicalString()+l.dir})(s))).join(","),ul(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>So(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>So(s))).join(",")),e.le=t}return e.le}function sp(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!zC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!V0(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!lv(n.startAt,e.startAt)&&lv(n.endAt,e.endAt)}function Sd(n){return Te.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t=null,s=[],o=[],l=null,f="F",d=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=f,this.startAt=d,this.endAt=g,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function YC(n,e,t,s,o,l,f,d){return new kc(n,e,t,s,o,l,f,d)}function op(n){return new kc(n)}function cv(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function XC(n){return n.collectionGroup!==null}function za(n){const e=Pe(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let d=new Tt(Bt.comparator);return f.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(d=d.add(y.field))}))})),d})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new oc(l,s))})),t.has(Bt.keyField().canonicalString())||e.he.push(new oc(Bt.keyField(),s))}return e.he}function or(n){const e=Pe(n);return e.Pe||(e.Pe=JC(e,za(n))),e.Pe}function JC(n,e){if(n.limitType==="F")return uv(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((o=>{const l=o.dir==="desc"?"asc":"desc";return new oc(o.field,l)}));const t=n.endAt?new sc(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new sc(n.startAt.position,n.startAt.inclusive):null;return uv(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Id(n,e,t){return new kc(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bc(n,e){return sp(or(n),or(e))&&n.limitType===e.limitType}function M0(n){return`${ip(or(n))}|lt:${n.limitType}`}function lo(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((o=>L0(o))).join(", ")}]`),ul(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((o=>So(o))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((o=>So(o))).join(",")),`Target(${s})`})(or(n))}; limitType=${n.limitType})`}function Nc(n,e){return e.isFoundDocument()&&(function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):Te.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)})(n,e)&&(function(s,o){for(const l of za(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0})(n,e)&&(function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0})(n,e)&&(function(s,o){return!(s.startAt&&!(function(f,d,g){const y=av(f,d,g);return f.inclusive?y<=0:y<0})(s.startAt,za(s),o)||s.endAt&&!(function(f,d,g){const y=av(f,d,g);return f.inclusive?y>=0:y>0})(s.endAt,za(s),o))})(n,e)}function ZC(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function F0(n){return(e,t)=>{let s=!1;for(const o of za(n)){const l=ex(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function ex(n,e,t){const s=n.field.isKeyField()?Te.comparator(e.key,t.key):(function(l,f,d){const g=f.data.field(l),y=d.data.field(l);return g!==null&&y!==null?To(g,y):we()})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return we()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,((t,s)=>{for(const[o,l]of s)e(o,l)}))}isEmpty(){return S0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=new ft(Te.comparator);function Ai(){return tx}const j0=new ft(Te.comparator);function Va(...n){let e=j0;for(const t of n)e=e.insert(t.key,t);return e}function nx(n){let e=j0;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function ss(){return Ua()}function z0(){return Ua()}function Ua(){return new ds((n=>n.toString()),((n,e)=>n.isEqual(e)))}const rx=new Tt(Te.comparator);function Me(...n){let e=rx;for(const t of n)e=e.add(t);return e}const ix=new Tt(Le);function sx(){return ix}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nc(e)?"-0":e}}function U0(n){return{integerValue:""+n}}function ox(n,e){return NC(e)?U0(e):ap(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this._=void 0}}function ax(n,e,t){return n instanceof ac?(function(o,l){const f={fields:{[C0]:{stringValue:A0},[R0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&np(l)&&(l=Pc(l)),l&&(f.fields[x0]=l),{mapValue:f}})(t,e):n instanceof el?$0(n,e):n instanceof tl?B0(n,e):(function(o,l){const f=ux(o,l),d=fv(f)+fv(o.Ie);return wd(f)&&wd(o.Ie)?U0(d):ap(o.serializer,d)})(n,e)}function lx(n,e,t){return n instanceof el?$0(n,e):n instanceof tl?B0(n,e):t}function ux(n,e){return n instanceof lc?(function(s){return wd(s)||(function(l){return!!l&&"doubleValue"in l})(s)})(e)?e:{integerValue:0}:null}class ac extends Dc{}class el extends Dc{constructor(e){super(),this.elements=e}}function $0(n,e){const t=H0(e);for(const s of n.elements)t.some((o=>lr(o,s)))||t.push(s);return{arrayValue:{values:t}}}class tl extends Dc{constructor(e){super(),this.elements=e}}function B0(n,e){let t=H0(e);for(const s of n.elements)t=t.filter((o=>!lr(o,s)));return{arrayValue:{values:t}}}class lc extends Dc{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function fv(n){return ct(n.integerValue||n.doubleValue)}function H0(n){return rp(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function cx(n,e){return n.field.isEqual(e.field)&&(function(s,o){return s instanceof el&&o instanceof el||s instanceof tl&&o instanceof tl?wo(s.elements,o.elements,lr):s instanceof lc&&o instanceof lc?lr(s.Ie,o.Ie):s instanceof ac&&o instanceof ac})(n.transform,e.transform)}class Cn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Hu(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vc{}function q0(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lp(n.key,Cn.none()):new cl(n.key,n.data,Cn.none());{const t=n.data,s=on.empty();let o=new Tt(Bt.comparator);for(let l of e.fields)if(!o.has(l)){let f=t.field(l);f===null&&l.length>1&&(l=l.popLast(),f=t.field(l)),f===null?s.delete(l):s.set(l,f),o=o.add(l)}return new ps(n.key,s,new xn(o.toArray()),Cn.none())}}function fx(n,e,t){n instanceof cl?(function(o,l,f){const d=o.value.clone(),g=dv(o.fieldTransforms,l,f.transformResults);d.setAll(g),l.convertToFoundDocument(f.version,d).setHasCommittedMutations()})(n,e,t):n instanceof ps?(function(o,l,f){if(!Hu(o.precondition,l))return void l.convertToUnknownDocument(f.version);const d=dv(o.fieldTransforms,l,f.transformResults),g=l.data;g.setAll(W0(o)),g.setAll(d),l.convertToFoundDocument(f.version,g).setHasCommittedMutations()})(n,e,t):(function(o,l,f){l.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,t)}function $a(n,e,t,s){return n instanceof cl?(function(l,f,d,g){if(!Hu(l.precondition,f))return d;const y=l.value.clone(),_=pv(l.fieldTransforms,g,f);return y.setAll(_),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(n,e,t,s):n instanceof ps?(function(l,f,d,g){if(!Hu(l.precondition,f))return d;const y=pv(l.fieldTransforms,g,f),_=f.data;return _.setAll(W0(l)),_.setAll(y),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((w=>w.field)))})(n,e,t,s):(function(l,f,d){return Hu(l.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):d})(n,e,t)}function hv(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&wo(s,o,((l,f)=>cx(l,f)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class cl extends Vc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ps extends Vc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function W0(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function dv(n,e,t){const s=new Map;Ke(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],f=l.transform,d=e.data.field(l.field);s.set(l.field,lx(f,d,t[o]))}return s}function pv(n,e,t){const s=new Map;for(const o of n){const l=o.transform,f=t.data.field(o.field);s.set(o.field,ax(l,f,e))}return s}class lp extends Vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class K0 extends Vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&fx(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=$a(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=$a(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=z0();return this.mutations.forEach((o=>{const l=e.get(o.key),f=l.overlayedDocument;let d=this.applyToLocalView(f,l.mutatedFields);d=t.has(o.key)?null:d;const g=q0(f,d);g!==null&&s.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(Se.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Me())}isEqual(e){return this.batchId===e.batchId&&wo(this.mutations,e.mutations,((t,s)=>hv(t,s)))&&wo(this.baseMutations,e.baseMutations,((t,s)=>hv(t,s)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,De;function mx(n){switch(n){case X.OK:return we();case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return we()}}function G0(n){if(n===void 0)return Mr("GRPC error has no .code"),X.UNKNOWN;switch(n){case pt.OK:return X.OK;case pt.CANCELLED:return X.CANCELLED;case pt.UNKNOWN:return X.UNKNOWN;case pt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case pt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case pt.INTERNAL:return X.INTERNAL;case pt.UNAVAILABLE:return X.UNAVAILABLE;case pt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case pt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case pt.NOT_FOUND:return X.NOT_FOUND;case pt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case pt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case pt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case pt.ABORTED:return X.ABORTED;case pt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case pt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case pt.DATA_LOSS:return X.DATA_LOSS;default:return we()}}(De=pt||(pt={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx=new mi([4294967295,4294967295],0);function mv(n){const e=gx().encode(n),t=new p0;return t.update(e),new Uint8Array(t.digest())}function gv(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new mi([t,s],0),new mi([o,l],0)]}class up{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new La(`Invalid padding: ${t}`);if(s<0)throw new La(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new La(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new La(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=mi.fromNumber(this.Ee)}Ae(e,t,s){let o=e.add(t.multiply(mi.fromNumber(s)));return o.compare(yx)===1&&(o=new mi([o.getBits(0),o.getBits(1)],0)),o.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=mv(e),[s,o]=gv(t);for(let l=0;l<this.hashCount;l++){const f=this.Ae(s,o,l);if(!this.Re(f))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),f=new up(l,o,t);return s.forEach((d=>f.insert(d))),f}insert(e){if(this.Ee===0)return;const t=mv(e),[s,o]=gv(t);for(let l=0;l<this.hashCount;l++){const f=this.Ae(s,o,l);this.Ve(f)}}Ve(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class La extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,fl.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Lc(Se.min(),o,new ft(Le),Ai(),Me())}}class fl{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new fl(s,t,Me(),Me(),Me())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,t,s,o){this.me=e,this.removedTargetIds=t,this.key=s,this.fe=o}}class Q0{constructor(e,t){this.targetId=e,this.ge=t}}class Y0{constructor(e,t,s=Ot.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class yv{constructor(){this.pe=0,this.ye=vv(),this.we=Ot.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Me(),t=Me(),s=Me();return this.ye.forEach(((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we()}})),new fl(this.we,this.Se,e,t,s)}Me(){this.be=!1,this.ye=vv()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ke(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class vx{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Ai(),this.$e=Ou(),this.Ke=Ou(),this.Ue=new ft(Le)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,(t=>{const s=this.He(t);switch(e.state){case 0:this.Je(t)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(t);break;case 3:this.Je(t)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),s.Ce(e.resumeToken));break;default:we()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach(((s,o)=>{this.Je(o)&&t(o)}))}Ze(e){const t=e.targetId,s=e.ge.count,o=this.Xe(t);if(o){const l=o.target;if(Sd(l))if(s===0){const f=new Te(l.path);this.ze(t,f,Pt.newNoDocument(f,Se.min()))}else Ke(s===1);else{const f=this.et(t);if(f!==s){const d=this.tt(e),g=d?this.nt(d,e,f):1;if(g!==0){this.Ye(t);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,y)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let f,d;try{f=Si(s).toUint8Array()}catch(g){if(g instanceof I0)return Eo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{d=new up(f,o,l)}catch(g){return Eo(g instanceof La?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return d.Ee===0?null:d}nt(e,t,s){return t.ge.count===s-this.st(e,t.targetId)?0:2}st(e,t){const s=this.ke.getRemoteKeysForTarget(t);let o=0;return s.forEach((l=>{const f=this.ke.it(),d=`projects/${f.projectId}/databases/${f.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),o++)})),o}ot(e){const t=new Map;this.qe.forEach(((l,f)=>{const d=this.Xe(f);if(d){if(l.current&&Sd(d.target)){const g=new Te(d.target.path);this._t(g).has(f)||this.ut(f,g)||this.ze(f,g,Pt.newNoDocument(g,e))}l.ve&&(t.set(f,l.Fe()),l.Me())}}));let s=Me();this.Ke.forEach(((l,f)=>{let d=!0;f.forEachWhile((g=>{const y=this.Xe(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)})),d&&(s=s.add(l))})),this.Qe.forEach(((l,f)=>f.setReadTime(e)));const o=new Lc(e,t,this.Ue,this.Qe,s);return this.Qe=Ai(),this.$e=Ou(),this.Ke=Ou(),this.Ue=new ft(Le),o}Ge(e,t){if(!this.Je(e))return;const s=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,s),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,s){if(!this.Je(e))return;const o=this.He(e);this.ut(e,t)?o.xe(t,1):o.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),s&&(this.Qe=this.Qe.insert(t,s))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new yv,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new Tt(Le),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Tt(Le),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new yv),this.ke.getRemoteKeysForTarget(e).forEach((t=>{this.ze(e,t,null)}))}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Ou(){return new ft(Te.comparator)}function vv(){return new ft(Te.comparator)}const _x={asc:"ASCENDING",desc:"DESCENDING"},Ex={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wx={and:"AND",or:"OR"};class Tx{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ad(n,e){return n.useProto3Json||ul(e)?e:{value:e}}function uc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function X0(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sx(n,e){return uc(n,e.toTimestamp())}function kr(n){return Ke(!!n),Se.fromTimestamp((function(t){const s=Ti(t);return new kt(s.seconds,s.nanos)})(n))}function cp(n,e){return Cd(n,e).canonicalString()}function Cd(n,e){const t=(function(o){return new Je(["projects",o.projectId,"databases",o.database])})(n).child("documents");return e===void 0?t:t.child(e)}function J0(n){const e=Je.fromString(n);return Ke(r1(e)),e}function cc(n,e){return cp(n.databaseId,e.path)}function Ba(n,e){const t=J0(e);if(t.get(1)!==n.databaseId.projectId)throw new pe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new pe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Te(e1(t))}function Z0(n,e){return cp(n.databaseId,e)}function Ix(n){const e=J0(n);return e.length===4?Je.emptyPath():e1(e)}function _v(n){return new Je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function e1(n){return Ke(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ev(n,e,t){return{name:cc(n,e),fields:t.value.mapValue.fields}}function Ax(n,e){return"found"in e?(function(s,o){Ke(!!o.found),o.found.name,o.found.updateTime;const l=Ba(s,o.found.name),f=kr(o.found.updateTime),d=o.found.createTime?kr(o.found.createTime):Se.min(),g=new on({mapValue:{fields:o.found.fields}});return Pt.newFoundDocument(l,f,d,g)})(n,e):"missing"in e?(function(s,o){Ke(!!o.missing),Ke(!!o.readTime);const l=Ba(s,o.missing),f=kr(o.readTime);return Pt.newNoDocument(l,f)})(n,e):we()}function Cx(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:we()})(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=(function(y,_){return y.useProto3Json?(Ke(_===void 0||typeof _=="string"),Ot.fromBase64String(_||"")):(Ke(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),Ot.fromUint8Array(_||new Uint8Array))})(n,e.targetChange.resumeToken),f=e.targetChange.cause,d=f&&(function(y){const _=y.code===void 0?X.UNKNOWN:G0(y.code);return new pe(_,y.message||"")})(f);t=new Y0(s,o,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Ba(n,s.document.name),l=kr(s.document.updateTime),f=s.document.createTime?kr(s.document.createTime):Se.min(),d=new on({mapValue:{fields:s.document.fields}}),g=Pt.newFoundDocument(o,l,f,d),y=s.targetIds||[],_=s.removedTargetIds||[];t=new qu(y,_,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Ba(n,s.document),l=s.readTime?kr(s.readTime):Se.min(),f=Pt.newNoDocument(o,l),d=s.removedTargetIds||[];t=new qu([],d,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Ba(n,s.document),l=s.removedTargetIds||[];t=new qu([],l,o,null)}else{if(!("filter"in e))return we();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,f=new px(o,l),d=s.targetId;t=new Q0(d,f)}}return t}function xx(n,e){let t;if(e instanceof cl)t={update:Ev(n,e.key,e.value)};else if(e instanceof lp)t={delete:cc(n,e.key)};else if(e instanceof ps)t={update:Ev(n,e.key,e.data),updateMask:Lx(e.fieldMask)};else{if(!(e instanceof K0))return we();t={verify:cc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((s=>(function(l,f){const d=f.transform;if(d instanceof ac)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof el)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof tl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof lc)return{fieldPath:f.field.canonicalString(),increment:d.Ie};throw we()})(0,s)))),e.precondition.isNone||(t.currentDocument=(function(o,l){return l.updateTime!==void 0?{updateTime:Sx(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we()})(n,e.precondition)),t}function Rx(n,e){return{documents:[Z0(n,e.path)]}}function Px(n,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Z0(n,o);const l=(function(y){if(y.length!==0)return n1(ur.create(y,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const f=(function(y){if(y.length!==0)return y.map((_=>(function(S){return{field:uo(S.field),direction:Nx(S.dir)}})(_)))})(e.orderBy);f&&(t.structuredQuery.orderBy=f);const d=Ad(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(e.endAt)),{ht:t,parent:o}}function kx(n){let e=Ix(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ke(s===1);const _=t.from[0];_.allDescendants?o=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=(function(w){const S=t1(w);return S instanceof ur&&D0(S)?S.getFilters():[S]})(t.where));let f=[];t.orderBy&&(f=(function(w){return w.map((S=>(function(q){return new oc(co(q.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(q.direction))})(S)))})(t.orderBy));let d=null;t.limit&&(d=(function(w){let S;return S=typeof w=="object"?w.value:w,ul(S)?null:S})(t.limit));let g=null;t.startAt&&(g=(function(w){const S=!!w.before,k=w.values||[];return new sc(k,S)})(t.startAt));let y=null;return t.endAt&&(y=(function(w){const S=!w.before,k=w.values||[];return new sc(k,S)})(t.endAt)),YC(e,o,f,l,d,"F",g,y)}function bx(n,e){const t=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function t1(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=co(t.unaryFilter.field);return wt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=co(t.unaryFilter.field);return wt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=co(t.unaryFilter.field);return wt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=co(t.unaryFilter.field);return wt.create(f,"!=",{nullValue:"NULL_VALUE"});default:return we()}})(n):n.fieldFilter!==void 0?(function(t){return wt.create(co(t.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return ur.create(t.compositeFilter.filters.map((s=>t1(s))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}})(t.compositeFilter.op))})(n):we()}function Nx(n){return _x[n]}function Dx(n){return Ex[n]}function Vx(n){return wx[n]}function uo(n){return{fieldPath:n.canonicalString()}}function co(n){return Bt.fromServerFormat(n.fieldPath)}function n1(n){return n instanceof wt?(function(t){if(t.op==="=="){if(ov(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NAN"}};if(sv(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ov(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NAN"}};if(sv(t.value))return{unaryFilter:{field:uo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:uo(t.field),op:Dx(t.op),value:t.value}}})(n):n instanceof ur?(function(t){const s=t.getFilters().map((o=>n1(o)));return s.length===1?s[0]:{compositeFilter:{op:Vx(t.op),filters:s}}})(n):we()}function Lx(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function r1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,s,o,l=Se.min(),f=Se.min(),d=Ot.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=d,this.expectedCount=g}withSequenceNumber(e){return new hi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e){this.Tt=e}}function Mx(n){const e=kx({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Id(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fx{constructor(){this.Tn=new jx}addToCollectionParentIndex(e,t){return this.Tn.add(t),Y.resolve()}getCollectionParents(e,t){return Y.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return Y.resolve()}deleteFieldIndex(e,t){return Y.resolve()}deleteAllFieldIndexes(e){return Y.resolve()}createTargetIndexes(e,t){return Y.resolve()}getDocumentsMatchingTarget(e,t){return Y.resolve(null)}getIndexType(e,t){return Y.resolve(0)}getFieldIndexes(e,t){return Y.resolve([])}getNextCollectionGroupToUpdate(e){return Y.resolve(null)}getMinOffset(e,t){return Y.resolve(wi.min())}getMinOffsetFromCollectionGroup(e,t){return Y.resolve(wi.min())}updateCollectionGroup(e,t,s){return Y.resolve()}updateIndexEntries(e,t){return Y.resolve()}}class jx{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new Tt(Je.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new Tt(Je.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},i1=41943040;class sn{static withCacheSize(e){return new sn(e,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.DEFAULT_COLLECTION_PERCENTILE=10,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sn.DEFAULT=new sn(i1,sn.DEFAULT_COLLECTION_PERCENTILE,sn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sn.DISABLED=new sn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new Io(0)}static Un(){return new Io(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv="LruGarbageCollector",zx=1048576;function Sv([n,e],[t,s]){const o=Le(n,t);return o===0?Le(e,s):o}class Ux{constructor(e){this.Hn=e,this.buffer=new Tt(Sv),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Sv(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $x{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ue(Tv,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Do(t)?ue(Tv,"Ignoring IndexedDB error during garbage collection: ",t):await xc(t)}await this.er(3e5)}))}}class Bx{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return Y.resolve(Rc.ae);const s=new Ux(t);return this.tr.forEachTarget(e,(o=>s.Zn(o.sequenceNumber))).next((()=>this.tr.rr(e,(o=>s.Zn(o))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.tr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(wv)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wv):this.ir(e,t)))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let s,o,l,f,d,g,y;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),o=this.params.maximumSequenceNumbersToCollect):o=w,f=Date.now(),this.nthSequenceNumber(e,o)))).next((w=>(s=w,d=Date.now(),this.removeTargets(e,s,t)))).next((w=>(l=w,g=Date.now(),this.removeOrphanedDocuments(e,s)))).next((w=>(y=Date.now(),ao()<=Ve.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-_}ms
	Determined least recently used ${o} in `+(d-f)+`ms
	Removed ${l} targets in `+(g-d)+`ms
	Removed ${w} documents in `+(y-g)+`ms
Total Duration: ${y-_}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:w}))))}}function Hx(n,e){return new Bx(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.changes=new ds((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?Y.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((o=>(s=o,this.remoteDocumentCache.getEntry(e,t)))).next((o=>(s!==null&&$a(s.mutation,o,xn.empty(),kt.now()),o)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,Me()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=Me()){const o=ss();return this.populateOverlays(e,o,t).next((()=>this.computeViews(e,t,o,s).next((l=>{let f=Va();return l.forEach(((d,g)=>{f=f.insert(d,g.overlayedDocument)})),f}))))}getOverlayedDocuments(e,t){const s=ss();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,Me())))}populateOverlays(e,t,s){const o=[];return s.forEach((l=>{t.has(l)||o.push(l)})),this.documentOverlayCache.getOverlays(e,o).next((l=>{l.forEach(((f,d)=>{t.set(f,d)}))}))}computeViews(e,t,s,o){let l=Ai();const f=Ua(),d=(function(){return Ua()})();return t.forEach(((g,y)=>{const _=s.get(y.key);o.has(y.key)&&(_===void 0||_.mutation instanceof ps)?l=l.insert(y.key,y):_!==void 0?(f.set(y.key,_.mutation.getFieldMask()),$a(_.mutation,y,_.mutation.getFieldMask(),kt.now())):f.set(y.key,xn.empty())})),this.recalculateAndSaveOverlays(e,l).next((g=>(g.forEach(((y,_)=>f.set(y,_))),t.forEach(((y,_)=>{var w;return d.set(y,new Wx(_,(w=f.get(y))!==null&&w!==void 0?w:null))})),d)))}recalculateAndSaveOverlays(e,t){const s=Ua();let o=new ft(((f,d)=>f-d)),l=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((f=>{for(const d of f)d.keys().forEach((g=>{const y=t.get(g);if(y===null)return;let _=s.get(g)||xn.empty();_=d.applyToLocalView(y,_),s.set(g,_);const w=(o.get(d.batchId)||Me()).add(g);o=o.insert(d.batchId,w)}))})).next((()=>{const f=[],d=o.getReverseIterator();for(;d.hasNext();){const g=d.getNext(),y=g.key,_=g.value,w=z0();_.forEach((S=>{if(!l.has(S)){const k=q0(t.get(S),s.get(S));k!==null&&w.set(S,k),l=l.add(S)}})),f.push(this.documentOverlayCache.saveOverlays(e,y,w))}return Y.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,o){return(function(f){return Te.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):XC(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next((l=>{const f=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):Y.resolve(ss());let d=Ya,g=l;return f.next((y=>Y.forEach(y,((_,w)=>(d<w.largestBatchId&&(d=w.largestBatchId),l.get(_)?Y.resolve():this.remoteDocumentCache.getEntry(e,_).next((S=>{g=g.insert(_,S)}))))).next((()=>this.populateOverlays(e,y,l))).next((()=>this.computeViews(e,g,y,Me()))).next((_=>({batchId:d,changes:nx(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Te(t)).next((s=>{let o=Va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let f=Va();return this.indexManager.getCollectionParents(e,l).next((d=>Y.forEach(d,(g=>{const y=(function(w,S){return new kc(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next((_=>{_.forEach(((w,S)=>{f=f.insert(w,S)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((f=>(l=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o)))).next((f=>{l.forEach(((g,y)=>{const _=y.getKey();f.get(_)===null&&(f=f.insert(_,Pt.newInvalidDocument(_)))}));let d=Va();return f.forEach(((g,y)=>{const _=l.get(g);_!==void 0&&$a(_.mutation,y,xn.empty(),kt.now()),Nc(t,y)&&(d=d.insert(g,y))})),d}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return Y.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,(function(o){return{id:o.id,version:o.version,createTime:kr(o.createTime)}})(t)),Y.resolve()}getNamedQuery(e,t){return Y.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,(function(o){return{name:o.name,query:Mx(o.bundledQuery),readTime:kr(o.readTime)}})(t)),Y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(){this.overlays=new ft(Te.comparator),this.Rr=new Map}getOverlay(e,t){return Y.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ss();return Y.forEach(t,(o=>this.getOverlay(e,o).next((l=>{l!==null&&s.set(o,l)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((o,l)=>{this.Et(e,t,l)})),Y.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Rr.get(s);return o!==void 0&&(o.forEach((l=>this.overlays=this.overlays.remove(l))),this.Rr.delete(s)),Y.resolve()}getOverlaysForCollection(e,t,s){const o=ss(),l=t.length+1,f=new Te(t.child("")),d=this.overlays.getIteratorFrom(f);for(;d.hasNext();){const g=d.getNext().value,y=g.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return Y.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new ft(((y,_)=>y-_));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let _=l.get(y.largestBatchId);_===null&&(_=ss(),l=l.insert(y.largestBatchId,_)),_.set(y.getKey(),y)}}const d=ss(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,_)=>d.set(y,_))),!(d.size()>=o)););return Y.resolve(d)}Et(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Rr.get(o.largestBatchId).delete(s.key);this.Rr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new dx(t,s));let l=this.Rr.get(t);l===void 0&&(l=Me(),this.Rr.set(t,l)),this.Rr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return Y.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.Vr=new Tt(Rt.mr),this.gr=new Tt(Rt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const s=new Rt(e,t);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.wr(new Rt(e,t))}Sr(e,t){e.forEach((s=>this.removeReference(s,t)))}br(e){const t=new Te(new Je([])),s=new Rt(t,e),o=new Rt(t,e+1),l=[];return this.gr.forEachInRange([s,o],(f=>{this.wr(f),l.push(f.key)})),l}Dr(){this.Vr.forEach((e=>this.wr(e)))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Te(new Je([])),s=new Rt(t,e),o=new Rt(t,e+1);let l=Me();return this.gr.forEachInRange([s,o],(f=>{l=l.add(f.key)})),l}containsKey(e){const t=new Rt(e,0),s=this.Vr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Rt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Te.comparator(e.key,t.key)||Le(e.Cr,t.Cr)}static pr(e,t){return Le(e.Cr,t.Cr)||Te.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Tt(Rt.mr)}checkEmpty(e){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new hx(l,t,s,o);this.mutationQueue.push(f);for(const d of o)this.Mr=this.Mr.add(new Rt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return Y.resolve(f)}lookupMutationBatch(e,t){return Y.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Nr(s),l=o<0?0:o;return Y.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?bC:this.Fr-1)}getAllMutationBatches(e){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Rt(t,0),o=new Rt(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([s,o],(f=>{const d=this.Or(f.Cr);l.push(d)})),Y.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Tt(Le);return t.forEach((o=>{const l=new Rt(o,0),f=new Rt(o,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,f],(d=>{s=s.add(d.Cr)}))})),Y.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;Te.isDocumentKey(l)||(l=l.child(""));const f=new Rt(new Te(l),0);let d=new Tt(Le);return this.Mr.forEachWhile((g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(d=d.add(g.Cr)),!0)}),f),Y.resolve(this.Br(d))}Br(e){const t=[];return e.forEach((s=>{const o=this.Or(s);o!==null&&t.push(o)})),t}removeMutationBatch(e,t){Ke(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return Y.forEach(t.mutations,(o=>{const l=new Rt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)})).next((()=>{this.Mr=s}))}qn(e){}containsKey(e,t){const s=new Rt(t,0),o=this.Mr.firstAfterOrEqual(s);return Y.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,Y.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.kr=e,this.docs=(function(){return new ft(Te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,f=this.kr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:f}),this.size+=f-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return Y.resolve(s?s.document.mutableCopy():Pt.newInvalidDocument(t))}getEntries(e,t){let s=Ai();return t.forEach((o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Pt.newInvalidDocument(o))})),Y.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Ai();const f=t.path,d=new Te(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(d);for(;g.hasNext();){const{key:y,value:{document:_}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||xC(CC(_),s)<=0||(o.has(_.key)||Nc(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return Y.resolve(l)}getAllFromCollectionGroup(e,t,s,o){we()}qr(e,t){return Y.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new Zx(this)}getSize(e){return Y.resolve(this.size)}}class Zx extends qx{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach(((s,o)=>{o.isValidDocument()?t.push(this.Ir.addEntry(e,o)):this.Ir.removeEntry(s)})),Y.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.persistence=e,this.Qr=new ds((t=>ip(t)),sp),this.lastRemoteSnapshotVersion=Se.min(),this.highestTargetId=0,this.$r=0,this.Kr=new fp,this.targetCount=0,this.Ur=Io.Kn()}forEachTarget(e,t){return this.Qr.forEach(((s,o)=>t(o))),Y.resolve()}getLastRemoteSnapshotVersion(e){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Y.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.$r&&(this.$r=t),Y.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new Io(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,Y.resolve()}updateTargetData(e,t){return this.zn(t),Y.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,Y.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Qr.forEach(((f,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.Qr.delete(f),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)})),Y.waitFor(l).next((()=>o))}getTargetCount(e){return Y.resolve(this.targetCount)}getTargetData(e,t){const s=this.Qr.get(t)||null;return Y.resolve(s)}addMatchingKeys(e,t,s){return this.Kr.yr(t,s),Y.resolve()}removeMatchingKeys(e,t,s){this.Kr.Sr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach((f=>{l.push(o.markPotentiallyOrphaned(e,f))})),Y.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),Y.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Kr.vr(t);return Y.resolve(s)}containsKey(e,t){return Y.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Rc(0),this.zr=!1,this.zr=!0,this.jr=new Yx,this.referenceDelegate=e(this),this.Hr=new eR(this),this.indexManager=new Fx,this.remoteDocumentCache=(function(o){return new Jx(o)})((s=>this.referenceDelegate.Jr(s))),this.serializer=new Ox(t),this.Yr=new Gx(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Wr[e.toKey()];return s||(s=new Xx(t,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,s){ue("MemoryPersistence","Starting transaction:",e);const o=new tR(this.Gr.next());return this.referenceDelegate.Zr(),s(o).next((l=>this.referenceDelegate.Xr(o).next((()=>l)))).toPromise().then((l=>(o.raiseOnCommittedEvent(),l)))}ei(e,t){return Y.or(Object.values(this.Wr).map((s=>()=>s.containsKey(e,t))))}}class tR extends PC{constructor(e){super(),this.currentSequenceNumber=e}}class hp{constructor(e){this.persistence=e,this.ti=new fp,this.ni=null}static ri(e){return new hp(e)}get ii(){if(this.ni)return this.ni;throw we()}addReference(e,t,s){return this.ti.addReference(s,t),this.ii.delete(s.toString()),Y.resolve()}removeReference(e,t,s){return this.ti.removeReference(s,t),this.ii.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),Y.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach((o=>this.ii.add(o.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((o=>{o.forEach((l=>this.ii.add(l.toString())))})).next((()=>s.removeTargetData(e,t)))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.ii,(s=>{const o=Te.fromPath(s);return this.si(e,o).next((l=>{l||t.removeEntry(o,Se.min())}))})).next((()=>(this.ni=null,t.apply(e))))}updateLimboDocument(e,t){return this.si(e,t).next((s=>{s?this.ii.delete(t.toString()):this.ii.add(t.toString())}))}Jr(e){return 0}si(e,t){return Y.or([()=>Y.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class fc{constructor(e,t){this.persistence=e,this.oi=new ds((s=>DC(s.path)),((s,o)=>s.isEqual(o))),this.garbageCollector=Hx(this,t)}static ri(e,t){return new fc(e,t)}Zr(){}Xr(e){return Y.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((o=>s+o))))}sr(e){let t=0;return this.rr(e,(s=>{t++})).next((()=>t))}rr(e,t){return Y.forEach(this.oi,((s,o)=>this.ar(e,s,o).next((l=>l?Y.resolve():t(o)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.qr(e,(f=>this.ar(e,f,t).next((d=>{d||(s++,l.removeEntry(f,Se.min()))})))).next((()=>l.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),Y.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),Y.resolve()}removeReference(e,t,s){return this.oi.set(s,e.currentSequenceNumber),Y.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),Y.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Bu(e.data.value)),t}ar(e,t,s){return Y.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.oi.get(t);return Y.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Hi=s,this.Ji=o}static Yi(e,t){let s=Me(),o=Me();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new dp(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=(function(){return XI()?8:kC(QI())>0?6:4})()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.rs(e,t).next((f=>{l.result=f})).next((()=>{if(!l.result)return this.ss(e,t,o,s).next((f=>{l.result=f}))})).next((()=>{if(l.result)return;const f=new nR;return this._s(e,t,f).next((d=>{if(l.result=d,this.Xi)return this.us(e,t,f,d.size)}))})).next((()=>l.result))}us(e,t,s,o){return s.documentReadCount<this.es?(ao()<=Ve.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",lo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),Y.resolve()):(ao()<=Ve.DEBUG&&ue("QueryEngine","Query:",lo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ts*o?(ao()<=Ve.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",lo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,or(t))):Y.resolve())}rs(e,t){if(cv(t))return Y.resolve(null);let s=or(t);return this.indexManager.getIndexType(e,s).next((o=>o===0?null:(t.limit!==null&&o===1&&(t=Id(t,null,"F"),s=or(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((l=>{const f=Me(...l);return this.ns.getDocuments(e,f).next((d=>this.indexManager.getMinOffset(e,s).next((g=>{const y=this.cs(t,d);return this.ls(t,y,f,g.readTime)?this.rs(e,Id(t,null,"F")):this.hs(e,y,t,g)}))))})))))}ss(e,t,s,o){return cv(t)||o.isEqual(Se.min())?Y.resolve(null):this.ns.getDocuments(e,s).next((l=>{const f=this.cs(t,l);return this.ls(t,f,s,o)?Y.resolve(null):(ao()<=Ve.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),lo(t)),this.hs(e,f,t,AC(o,Ya)).next((d=>d)))}))}cs(e,t){let s=new Tt(F0(e));return t.forEach(((o,l)=>{Nc(e,l)&&(s=s.add(l))})),s}ls(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}_s(e,t,s){return ao()<=Ve.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",lo(t)),this.ns.getDocumentsMatchingQuery(e,t,wi.min(),s)}hs(e,t,s,o){return this.ns.getDocumentsMatchingQuery(e,s,o).next((l=>(t.forEach((f=>{l=l.insert(f.key,f)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="LocalStore",iR=3e8;class sR{constructor(e,t,s,o){this.persistence=e,this.Ps=t,this.serializer=o,this.Ts=new ft(Le),this.Is=new ds((l=>ip(l)),sp),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kx(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ts)))}}function oR(n,e,t,s){return new sR(n,e,t,s)}async function o1(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next((l=>(o=l,t.As(e),t.mutationQueue.getAllMutationBatches(s)))).next((l=>{const f=[],d=[];let g=Me();for(const y of o){f.push(y.batchId);for(const _ of y.mutations)g=g.add(_.key)}for(const y of l){d.push(y.batchId);for(const _ of y.mutations)g=g.add(_.key)}return t.localDocuments.getDocuments(s,g).next((y=>({Rs:y,removedBatchIds:f,addedBatchIds:d})))}))}))}function a1(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Hr.getLastRemoteSnapshotVersion(t)))}function aR(n,e){const t=Pe(n),s=e.snapshotVersion;let o=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const f=t.ds.newChangeBuffer({trackRemovals:!0});o=t.Ts;const d=[];e.targetChanges.forEach(((_,w)=>{const S=o.get(w);if(!S)return;d.push(t.Hr.removeMatchingKeys(l,_.removedDocuments,w).next((()=>t.Hr.addMatchingKeys(l,_.addedDocuments,w))));let k=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(w)!==null?k=k.withResumeToken(Ot.EMPTY_BYTE_STRING,Se.min()).withLastLimboFreeSnapshotVersion(Se.min()):_.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(_.resumeToken,s)),o=o.insert(w,k),(function(U,N,H){return U.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=iR?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(S,k,_)&&d.push(t.Hr.updateTargetData(l,k))}));let g=Ai(),y=Me();if(e.documentUpdates.forEach((_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))})),d.push(lR(l,f,e.documentUpdates).next((_=>{g=_.Vs,y=_.fs}))),!s.isEqual(Se.min())){const _=t.Hr.getLastRemoteSnapshotVersion(l).next((w=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,s)));d.push(_)}return Y.waitFor(d).next((()=>f.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,g,y))).next((()=>g))})).then((l=>(t.Ts=o,l)))}function lR(n,e,t){let s=Me(),o=Me();return t.forEach((l=>s=s.add(l))),e.getEntries(n,s).next((l=>{let f=Ai();return t.forEach(((d,g)=>{const y=l.get(d);g.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),g.isNoDocument()&&g.version.isEqual(Se.min())?(e.removeEntry(d,g.readTime),f=f.insert(d,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(g),f=f.insert(d,g)):ue(pp,"Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",g.version)})),{Vs:f,fs:o}}))}function uR(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let o;return t.Hr.getTargetData(s,e).next((l=>l?(o=l,Y.resolve(o)):t.Hr.allocateTargetId(s).next((f=>(o=new hi(e,f,"TargetPurposeListen",s.currentSequenceNumber),t.Hr.addTargetData(s,o).next((()=>o)))))))})).then((s=>{const o=t.Ts.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(s.targetId,s),t.Is.set(e,s.targetId)),s}))}async function xd(n,e,t){const s=Pe(n),o=s.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,(f=>s.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!Do(f))throw f;ue(pp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.Ts=s.Ts.remove(e),s.Is.delete(o.target)}function Iv(n,e,t){const s=Pe(n);let o=Se.min(),l=Me();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(g,y,_){const w=Pe(g),S=w.Is.get(_);return S!==void 0?Y.resolve(w.Ts.get(S)):w.Hr.getTargetData(y,_)})(s,f,or(e)).next((d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(f,d.targetId).next((g=>{l=g}))})).next((()=>s.Ps.getDocumentsMatchingQuery(f,e,t?o:Se.min(),t?l:Me()))).next((d=>(cR(s,ZC(e),d),{documents:d,gs:l})))))}function cR(n,e,t){let s=n.Es.get(e)||Se.min();t.forEach(((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)})),n.Es.set(e,s)}class Av{constructor(){this.activeTargetIds=sx()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fR{constructor(){this.ho=new Av,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,s){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Av,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="ConnectivityMonitor";class xv{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ue(Cv,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ue(Cv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mu=null;function Rd(){return Mu===null?Mu=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mu++,"0x"+Mu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="RestConnection",dR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class pR{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${s}/databases/${o}`,this.wo=this.databaseId.database===rc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}So(e,t,s,o,l){const f=Rd(),d=this.bo(e,t.toUriEncodedString());ue(jh,`Sending RPC '${e}' ${f}:`,d,s);const g={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(g,o,l),this.vo(e,d,g,s).then((y=>(ue(jh,`Received RPC '${e}' ${f}: `,y),y)),(y=>{throw Eo(jh,`RPC '${e}' ${f} failed with error: `,y,"url: ",d,"request:",s),y}))}Co(e,t,s,o,l,f){return this.So(e,t,s,o,l)}Do(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+No})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((o,l)=>e[l]=o)),s&&s.headers.forEach(((o,l)=>e[l]=o))}bo(e,t){const s=dR[e];return`${this.po}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class gR extends pR{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,s,o){const l=Rd();return new Promise(((f,d)=>{const g=new m0;g.setWithCredentials(!0),g.listenOnce(g0.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case $u.NO_ERROR:const _=g.getResponseJson();ue(Ut,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(_)),f(_);break;case $u.TIMEOUT:ue(Ut,`RPC '${e}' ${l} timed out`),d(new pe(X.DEADLINE_EXCEEDED,"Request time out"));break;case $u.HTTP_ERROR:const w=g.getStatus();if(ue(Ut,`RPC '${e}' ${l} failed with status:`,w,"response text:",g.getResponseText()),w>0){let S=g.getResponseJson();Array.isArray(S)&&(S=S[0]);const k=S==null?void 0:S.error;if(k&&k.status&&k.message){const q=(function(N){const H=N.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(H)>=0?H:X.UNKNOWN})(k.status);d(new pe(q,k.message))}else d(new pe(X.UNKNOWN,"Server responded with status "+g.getStatus()))}else d(new pe(X.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{ue(Ut,`RPC '${e}' ${l} completed.`)}}));const y=JSON.stringify(o);ue(Ut,`RPC '${e}' ${l} sending request:`,o),g.send(t,"POST",y,s,15)}))}Wo(e,t,s){const o=Rd(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=_0(),d=v0(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Do(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const _=l.join("");ue(Ut,`Creating RPC '${e}' stream ${o}: ${_}`,g);const w=f.createWebChannel(_,g);let S=!1,k=!1;const q=new mR({Fo:N=>{k?ue(Ut,`Not sending because RPC '${e}' stream ${o} is closed:`,N):(S||(ue(Ut,`Opening RPC '${e}' stream ${o} transport.`),w.open(),S=!0),ue(Ut,`RPC '${e}' stream ${o} sending:`,N),w.send(N))},Mo:()=>w.close()}),U=(N,H,B)=>{N.listen(H,(K=>{try{B(K)}catch(Z){setTimeout((()=>{throw Z}),0)}}))};return U(w,Da.EventType.OPEN,(()=>{k||(ue(Ut,`RPC '${e}' stream ${o} transport opened.`),q.Qo())})),U(w,Da.EventType.CLOSE,(()=>{k||(k=!0,ue(Ut,`RPC '${e}' stream ${o} transport closed`),q.Ko())})),U(w,Da.EventType.ERROR,(N=>{k||(k=!0,Eo(Ut,`RPC '${e}' stream ${o} transport errored:`,N),q.Ko(new pe(X.UNAVAILABLE,"The operation could not be completed")))})),U(w,Da.EventType.MESSAGE,(N=>{var H;if(!k){const B=N.data[0];Ke(!!B);const K=B,Z=(K==null?void 0:K.error)||((H=K[0])===null||H===void 0?void 0:H.error);if(Z){ue(Ut,`RPC '${e}' stream ${o} received error:`,Z);const oe=Z.status;let he=(function(x){const b=pt[x];if(b!==void 0)return G0(b)})(oe),R=Z.message;he===void 0&&(he=X.INTERNAL,R="Unknown error status: "+oe+" with message "+Z.message),k=!0,q.Ko(new pe(he,R)),w.close()}else ue(Ut,`RPC '${e}' stream ${o} received:`,B),q.Uo(B)}})),U(d,y0.STAT_EVENT,(N=>{N.stat===_d.PROXY?ue(Ut,`RPC '${e}' stream ${o} detected buffering proxy`):N.stat===_d.NOPROXY&&ue(Ut,`RPC '${e}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{q.$o()}),0),q}}function zh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(n){return new Tx(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,s=1e3,o=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=s,this.zo=o,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),o=Math.max(0,t-s);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,o,(()=>(this.Yo=Date.now(),e()))),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="PersistentStream";class yR{constructor(e,t,s,o,l,f,d,g){this.Ti=e,this.n_=s,this.r_=o,this.connection=l,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=d,this.listener=g,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new mp(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,(()=>this.T_())))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(Mr(t.toString()),Mr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,o])=>{this.i_===t&&this.V_(s,o)}),(s=>{e((()=>{const o=new pe(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(o)}))}))}V_(e,t){const s=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo((()=>{s((()=>this.listener.xo()))})),this.stream.No((()=>{s((()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,(()=>(this.c_()&&(this.state=3),Promise.resolve()))),this.listener.No())))})),this.stream.Lo((o=>{s((()=>this.m_(o)))})),this.stream.onMessage((o=>{s((()=>++this.__==1?this.g_(o):this.onNext(o)))}))}l_(){this.state=5,this.a_.Xo((async()=>{this.state=0,this.start()}))}m_(e){return ue(Rv,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget((()=>this.i_===e?t():(ue(Rv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class vR extends yR{constructor(e,t,s,o,l,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,f),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=Cx(this.serializer,e),s=(function(l){if(!("targetChange"in l))return Se.min();const f=l.targetChange;return f.targetIds&&f.targetIds.length?Se.min():f.readTime?kr(f.readTime):Se.min()})(e);return this.listener.p_(t,s)}y_(e){const t={};t.database=_v(this.serializer),t.addTarget=(function(l,f){let d;const g=f.target;if(d=Sd(g)?{documents:Rx(l,g)}:{query:Px(l,g).ht},d.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){d.resumeToken=X0(l,f.resumeToken);const y=Ad(l,f.expectedCount);y!==null&&(d.expectedCount=y)}else if(f.snapshotVersion.compareTo(Se.min())>0){d.readTime=uc(l,f.snapshotVersion.toTimestamp());const y=Ad(l,f.expectedCount);y!==null&&(d.expectedCount=y)}return d})(this.serializer,e);const s=bx(this.serializer,e);s&&(t.labels=s),this.I_(t)}w_(e){const t={};t.database=_v(this.serializer),t.removeTarget=e,this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{}class ER extends _R{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.F_=!1}M_(){if(this.F_)throw new pe(X.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,f])=>this.connection.So(e,Cd(t,s),o,l,f))).catch((l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new pe(X.UNKNOWN,l.toString())}))}Co(e,t,s,o,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,d])=>this.connection.Co(e,Cd(t,s),o,f,d,l))).catch((f=>{throw f.name==="FirebaseError"?(f.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new pe(X.UNKNOWN,f.toString())}))}terminate(){this.F_=!0,this.connection.terminate()}}class wR{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve()))))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Mr(t),this.N_=!1):ue("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao="RemoteStore";class TR{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To((f=>{s.enqueueAndForget((async()=>{dl(this)&&(ue(Ao,"Restarting streams for network reachability change."),await(async function(g){const y=Pe(g);y.W_.add(4),await hl(y),y.j_.set("Unknown"),y.W_.delete(4),await Mc(y)})(this))}))})),this.j_=new wR(s,o)}}async function Mc(n){if(dl(n))for(const e of n.G_)await e(!0)}async function hl(n){for(const e of n.G_)await e(!1)}function l1(n,e){const t=Pe(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),_p(t)?vp(t):Vo(t).c_()&&yp(t,e))}function gp(n,e){const t=Pe(n),s=Vo(t);t.U_.delete(e),s.c_()&&u1(t,e),t.U_.size===0&&(s.c_()?s.P_():dl(t)&&t.j_.set("Unknown"))}function yp(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vo(n).y_(e)}function u1(n,e){n.H_.Ne(e),Vo(n).w_(e)}function vp(n){n.H_=new vx({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Vo(n).start(),n.j_.B_()}function _p(n){return dl(n)&&!Vo(n).u_()&&n.U_.size>0}function dl(n){return Pe(n).W_.size===0}function c1(n){n.H_=void 0}async function SR(n){n.j_.set("Online")}async function IR(n){n.U_.forEach(((e,t)=>{yp(n,e)}))}async function AR(n,e){c1(n),_p(n)?(n.j_.q_(e),vp(n)):n.j_.set("Unknown")}async function CR(n,e,t){if(n.j_.set("Online"),e instanceof Y0&&e.state===2&&e.cause)try{await(async function(o,l){const f=l.cause;for(const d of l.targetIds)o.U_.has(d)&&(await o.remoteSyncer.rejectListen(d,f),o.U_.delete(d),o.H_.removeTarget(d))})(n,e)}catch(s){ue(Ao,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Pv(n,s)}else if(e instanceof qu?n.H_.We(e):e instanceof Q0?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Se.min()))try{const s=await a1(n.localStore);t.compareTo(s)>=0&&await(function(l,f){const d=l.H_.ot(f);return d.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const _=l.U_.get(y);_&&l.U_.set(y,_.withResumeToken(g.resumeToken,f))}})),d.targetMismatches.forEach(((g,y)=>{const _=l.U_.get(g);if(!_)return;l.U_.set(g,_.withResumeToken(Ot.EMPTY_BYTE_STRING,_.snapshotVersion)),u1(l,g);const w=new hi(_.target,g,y,_.sequenceNumber);yp(l,w)})),l.remoteSyncer.applyRemoteEvent(d)})(n,t)}catch(s){ue(Ao,"Failed to raise snapshot:",s),await Pv(n,s)}}async function Pv(n,e,t){if(!Do(e))throw e;n.W_.add(1),await hl(n),n.j_.set("Offline"),t||(t=()=>a1(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{ue(Ao,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Mc(n)}))}async function kv(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),ue(Ao,"RemoteStore received new credentials");const s=dl(t);t.W_.add(3),await hl(t),s&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Mc(t)}async function xR(n,e){const t=Pe(n);e?(t.W_.delete(2),await Mc(t)):e||(t.W_.add(2),await hl(t),t.j_.set("Unknown"))}function Vo(n){return n.J_||(n.J_=(function(t,s,o){const l=Pe(t);return l.M_(),new vR(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)})(n.datastore,n.asyncQueue,{xo:SR.bind(null,n),No:IR.bind(null,n),Lo:AR.bind(null,n),p_:CR.bind(null,n)}),n.G_.push((async e=>{e?(n.J_.h_(),_p(n)?vp(n):n.j_.set("Unknown")):(await n.J_.stop(),c1(n))}))),n.J_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const f=Date.now()+s,d=new Ep(e,t,f,o,l);return d.start(s),d}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function f1(n,e){if(Mr("AsyncQueue",`${e}: ${n}`),Do(n))return new pe(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{static emptySet(e){return new vo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||Te.comparator(t.key,s.key):(t,s)=>Te.comparator(t.key,s.key),this.keyedMap=Va(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new vo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.Z_=new ft(Te.comparator)}track(e){const t=e.doc.key,s=this.Z_.get(t);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(t):e.type===1&&s.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):we():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal(((t,s)=>{e.push(s)})),e}}class Co{constructor(e,t,s,o,l,f,d,g,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=f,this.syncStateChanged=d,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,l){const f=[];return t.forEach((d=>{f.push({type:0,doc:d})})),new Co(e,t,vo.emptySet(t),f,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some((e=>e.ra()))}}class PR{constructor(){this.queries=Nv(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,s){const o=Pe(t),l=o.queries;o.queries=Nv(),l.forEach(((f,d)=>{for(const g of d.ta)g.onError(s)}))})(this,new pe(X.ABORTED,"Firestore shutting down"))}}function Nv(){return new ds((n=>M0(n)),bc)}async function h1(n,e){const t=Pe(n);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.na()&&e.ra()&&(s=2):(l=new RR,s=e.ra()?0:1);try{switch(s){case 0:l.ea=await t.onListen(o,!0);break;case 1:l.ea=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(f){const d=f1(f,`Initialization of query '${lo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&wp(t)}async function d1(n,e){const t=Pe(n),s=e.query;let o=3;const l=t.queries.get(s);if(l){const f=l.ta.indexOf(e);f>=0&&(l.ta.splice(f,1),l.ta.length===0?o=e.ra()?0:1:!l.na()&&e.ra()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function kR(n,e){const t=Pe(n);let s=!1;for(const o of e){const l=o.query,f=t.queries.get(l);if(f){for(const d of f.ta)d.oa(o)&&(s=!0);f.ea=o}}s&&wp(t)}function bR(n,e,t){const s=Pe(n),o=s.queries.get(e);if(o)for(const l of o.ta)l.onError(t);s.queries.delete(e)}function wp(n){n.ia.forEach((e=>{e.next()}))}var Pd,Dv;(Dv=Pd||(Pd={}))._a="default",Dv.Cache="cache";class p1{constructor(e,t,s){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Co(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const s=t!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Co.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Pd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.key=e}}class g1{constructor(e){this.key=e}}class NR{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Me(),this.mutatedKeys=Me(),this.ya=F0(e),this.wa=new vo(this.ya)}get Sa(){return this.fa}ba(e,t){const s=t?t.Da:new bv,o=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,f=o,d=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal(((_,w)=>{const S=o.get(_),k=Nc(this.query,w)?w:null,q=!!S&&this.mutatedKeys.has(S.key),U=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let N=!1;S&&k?S.data.isEqual(k.data)?q!==U&&(s.track({type:3,doc:k}),N=!0):this.va(S,k)||(s.track({type:2,doc:k}),N=!0,(g&&this.ya(k,g)>0||y&&this.ya(k,y)<0)&&(d=!0)):!S&&k?(s.track({type:0,doc:k}),N=!0):S&&!k&&(s.track({type:1,doc:S}),N=!0,(g||y)&&(d=!0)),N&&(k?(f=f.add(k),l=U?l.add(_):l.delete(_)):(f=f.delete(_),l=l.delete(_)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const _=this.query.limitType==="F"?f.last():f.first();f=f.delete(_.key),l=l.delete(_.key),s.track({type:1,doc:_})}return{wa:f,Da:s,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const f=e.Da.X_();f.sort(((_,w)=>(function(k,q){const U=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return U(k)-U(q)})(_.type,w.type)||this.ya(_.doc,w.doc))),this.Ca(s),o=o!=null&&o;const d=t&&!o?this.Fa():[],g=this.pa.size===0&&this.current&&!o?1:0,y=g!==this.ga;return this.ga=g,f.length!==0||y?{snapshot:new Co(this.query,e.wa,l,f,e.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new bv,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach((t=>this.fa=this.fa.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.fa=this.fa.delete(t))),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Me(),this.wa.forEach((s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))}));const t=[];return e.forEach((s=>{this.pa.has(s)||t.push(new g1(s))})),this.pa.forEach((s=>{e.has(s)||t.push(new m1(s))})),t}Oa(e){this.fa=e.gs,this.pa=Me();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Co.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Tp="SyncEngine";class DR{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class VR{constructor(e){this.key=e,this.Ba=!1}}class LR{constructor(e,t,s,o,l,f){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=f,this.La={},this.ka=new ds((d=>M0(d)),bc),this.qa=new Map,this.Qa=new Set,this.$a=new ft(Te.comparator),this.Ka=new Map,this.Ua=new fp,this.Wa={},this.Ga=new Map,this.za=Io.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function OR(n,e,t=!0){const s=w1(n);let o;const l=s.ka.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Na()):o=await y1(s,e,t,!0),o}async function MR(n,e){const t=w1(n);await y1(t,e,!0,!1)}async function y1(n,e,t,s){const o=await uR(n.localStore,or(e)),l=o.targetId,f=n.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await FR(n,e,l,f==="current",o.resumeToken)),n.isPrimaryClient&&t&&l1(n.remoteStore,o),d}async function FR(n,e,t,s,o){n.Ha=(w,S,k)=>(async function(U,N,H,B){let K=N.view.ba(H);K.ls&&(K=await Iv(U.localStore,N.query,!1).then((({documents:R})=>N.view.ba(R,K))));const Z=B&&B.targetChanges.get(N.targetId),oe=B&&B.targetMismatches.get(N.targetId)!=null,he=N.view.applyChanges(K,U.isPrimaryClient,Z,oe);return Lv(U,N.targetId,he.Ma),he.snapshot})(n,w,S,k);const l=await Iv(n.localStore,e,!0),f=new NR(e,l.gs),d=f.ba(l.documents),g=fl.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",o),y=f.applyChanges(d,n.isPrimaryClient,g);Lv(n,t,y.Ma);const _=new DR(e,t,f);return n.ka.set(e,_),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),y.snapshot}async function jR(n,e,t){const s=Pe(n),o=s.ka.get(e),l=s.qa.get(o.targetId);if(l.length>1)return s.qa.set(o.targetId,l.filter((f=>!bc(f,e)))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await xd(s.localStore,o.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(o.targetId),t&&gp(s.remoteStore,o.targetId),kd(s,o.targetId)})).catch(xc)):(kd(s,o.targetId),await xd(s.localStore,o.targetId,!0))}async function zR(n,e){const t=Pe(n),s=t.ka.get(e),o=t.qa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),gp(t.remoteStore,s.targetId))}async function v1(n,e){const t=Pe(n);try{const s=await aR(t.localStore,e);e.targetChanges.forEach(((o,l)=>{const f=t.Ka.get(l);f&&(Ke(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?f.Ba=!0:o.modifiedDocuments.size>0?Ke(f.Ba):o.removedDocuments.size>0&&(Ke(f.Ba),f.Ba=!1))})),await E1(t,s,e)}catch(s){await xc(s)}}function Vv(n,e,t){const s=Pe(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.ka.forEach(((l,f)=>{const d=f.view.sa(e);d.snapshot&&o.push(d.snapshot)})),(function(f,d){const g=Pe(f);g.onlineState=d;let y=!1;g.queries.forEach(((_,w)=>{for(const S of w.ta)S.sa(d)&&(y=!0)})),y&&wp(g)})(s.eventManager,e),o.length&&s.La.p_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function UR(n,e,t){const s=Pe(n);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ka.get(e),l=o&&o.key;if(l){let f=new ft(Te.comparator);f=f.insert(l,Pt.newNoDocument(l,Se.min()));const d=Me().add(l),g=new Lc(Se.min(),new Map,new ft(Le),f,d);await v1(s,g),s.$a=s.$a.remove(l),s.Ka.delete(e),Sp(s)}else await xd(s.localStore,e,!1).then((()=>kd(s,e,t))).catch(xc)}function kd(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.qa.get(e))n.ka.delete(s),t&&n.La.Ja(s,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.br(e).forEach((s=>{n.Ua.containsKey(s)||_1(n,s)}))}function _1(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(gp(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),Sp(n))}function Lv(n,e,t){for(const s of t)s instanceof m1?(n.Ua.addReference(s.key,e),$R(n,s)):s instanceof g1?(ue(Tp,"Document no longer in limbo: "+s.key),n.Ua.removeReference(s.key,e),n.Ua.containsKey(s.key)||_1(n,s.key)):we()}function $R(n,e){const t=e.key,s=t.path.canonicalString();n.$a.get(t)||n.Qa.has(s)||(ue(Tp,"New document in limbo: "+t),n.Qa.add(s),Sp(n))}function Sp(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new Te(Je.fromString(e)),s=n.za.next();n.Ka.set(s,new VR(t)),n.$a=n.$a.insert(t,s),l1(n.remoteStore,new hi(or(op(t.path)),s,"TargetPurposeLimboResolution",Rc.ae))}}async function E1(n,e,t){const s=Pe(n),o=[],l=[],f=[];s.ka.isEmpty()||(s.ka.forEach(((d,g)=>{f.push(s.Ha(g,e,t).then((y=>{var _;if((y||t)&&s.isPrimaryClient){const w=y?!y.fromCache:(_=t==null?void 0:t.targetChanges.get(g.targetId))===null||_===void 0?void 0:_.current;s.sharedClientState.updateQueryState(g.targetId,w?"current":"not-current")}if(y){o.push(y);const w=dp.Yi(g.targetId,y);l.push(w)}})))})),await Promise.all(f),s.La.p_(o),await(async function(g,y){const _=Pe(g);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>Y.forEach(y,(S=>Y.forEach(S.Hi,(k=>_.persistence.referenceDelegate.addReference(w,S.targetId,k))).next((()=>Y.forEach(S.Ji,(k=>_.persistence.referenceDelegate.removeReference(w,S.targetId,k)))))))))}catch(w){if(!Do(w))throw w;ue(pp,"Failed to update sequence numbers: "+w)}for(const w of y){const S=w.targetId;if(!w.fromCache){const k=_.Ts.get(S),q=k.snapshotVersion,U=k.withLastLimboFreeSnapshotVersion(q);_.Ts=_.Ts.insert(S,U)}}})(s.localStore,l))}async function BR(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){ue(Tp,"User change. New user:",e.toKey());const s=await o1(t.localStore,e);t.currentUser=e,(function(l,f){l.Ga.forEach((d=>{d.forEach((g=>{g.reject(new pe(X.CANCELLED,f))}))})),l.Ga.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await E1(t,s.Rs)}}function HR(n,e){const t=Pe(n),s=t.Ka.get(e);if(s&&s.Ba)return Me().add(s.key);{let o=Me();const l=t.qa.get(e);if(!l)return o;for(const f of l){const d=t.ka.get(f);o=o.unionWith(d.view.Sa)}return o}}function w1(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=v1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=HR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UR.bind(null,e),e.La.p_=kR.bind(null,e.eventManager),e.La.Ja=bR.bind(null,e.eventManager),e}class hc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Oc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return oR(this.persistence,new rR,e.initialUser,this.serializer)}Xa(e){return new s1(hp.ri,this.serializer)}Za(e){return new fR}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hc.provider={build:()=>new hc};class qR extends hc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Ke(this.persistence.referenceDelegate instanceof fc);const s=this.persistence.referenceDelegate.garbageCollector;return new $x(s,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?sn.withCacheSize(this.cacheSizeBytes):sn.DEFAULT;return new s1((s=>fc.ri(s,t)),this.serializer)}}class bd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Vv(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=BR.bind(null,this.syncEngine),await xR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new PR})()}createDatastore(e){const t=Oc(e.databaseInfo.databaseId),s=(function(l){return new gR(l)})(e.databaseInfo);return(function(l,f,d,g){return new ER(l,f,d,g)})(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,o,l,f,d){return new TR(s,o,l,f,d)})(this.localStore,this.datastore,e.asyncQueue,(t=>Vv(this.syncEngine,t,0)),(function(){return xv.D()?new xv:new hR})())}createSyncEngine(e,t){return(function(o,l,f,d,g,y,_){const w=new LR(o,l,f,d,g,y);return _&&(w.ja=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(o){const l=Pe(o);ue(Ao,"RemoteStore shutting down."),l.W_.add(5),await hl(l),l.z_.shutdown(),l.j_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}bd.provider={build:()=>new bd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Mr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new pe(X.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(o,l){const f=Pe(o),d={documents:l.map((w=>cc(f.serializer,w)))},g=await f.Co("BatchGetDocuments",f.serializer.databaseId,Je.emptyPath(),d,l.length),y=new Map;g.forEach((w=>{const S=Ax(f.serializer,w);y.set(S.key.toString(),S)}));const _=[];return l.forEach((w=>{const S=y.get(w.toString());Ke(!!S),_.push(S)})),_})(this.datastore,e);return t.forEach((s=>this.recordVersion(s))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastTransactionError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new lp(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,s)=>{const o=Te.fromPath(s);this.mutations.push(new K0(o,this.precondition(o)))})),await(async function(s,o){const l=Pe(s),f={writes:o.map((d=>xx(l.serializer,d)))};await l.So("Commit",l.serializer.databaseId,Je.emptyPath(),f)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw we();t=Se.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new pe(X.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Se.min())?Cn.exists(!1):Cn.updateTime(t):Cn.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Se.min()))throw new pe(X.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Cn.updateTime(t)}return Cn.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,t,s,o,l){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=o,this.deferred=l,this.Tu=s.maxAttempts,this.a_=new mp(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo((async()=>{const e=new WR(this.datastore),t=this.du(e);t&&t.then((s=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(s)})).catch((o=>{this.Au(o)}))))})).catch((s=>{this.Au(s)}))}))}du(e){try{const t=this.updateFunction(e);return!ul(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Eu(),Promise.resolve())))):this.deferred.reject(e)}Ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!mx(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="FirestoreClient";class GR{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=$t.UNAUTHENTICATED,this.clientId=w0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,(async f=>{ue(Ci,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(ue(Ci,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=f1(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function Uh(n,e){n.asyncQueue.verifyOperationInProgress(),ue(Ci,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async o=>{s.isEqual(o)||(await o1(e.localStore,o),s=o)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Ov(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QR(n);ue(Ci,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>kv(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,o)=>kv(e.remoteStore,o))),n._onlineComponents=e}async function QR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ue(Ci,"Using user provided OfflineComponentProvider");try{await Uh(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(t))throw t;Eo("Error using user provided cache. Falling back to memory cache: "+t),await Uh(n,new hc)}}else ue(Ci,"Using default OfflineComponentProvider"),await Uh(n,new qR(void 0));return n._offlineComponents}async function S1(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ue(Ci,"Using user provided OnlineComponentProvider"),await Ov(n,n._uninitializedComponentsProvider._online)):(ue(Ci,"Using default OnlineComponentProvider"),await Ov(n,new bd))),n._onlineComponents}function YR(n){return S1(n).then((e=>e.datastore))}async function I1(n){const e=await S1(n),t=e.eventManager;return t.onListen=OR.bind(null,e.syncEngine),t.onUnlisten=jR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MR.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zR.bind(null,e.syncEngine),t}function XR(n,e,t={}){const s=new Pr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,f,d,g,y){const _=new T1({next:S=>{_.su(),f.enqueueAndForget((()=>d1(l,w)));const k=S.docs.has(d);!k&&S.fromCache?y.reject(new pe(X.UNAVAILABLE,"Failed to get document because the client is offline.")):k&&S.fromCache&&g&&g.source==="server"?y.reject(new pe(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),w=new p1(op(d.path),_,{includeMetadataChanges:!0,Ta:!0});return h1(l,w)})(await I1(n),n.asyncQueue,e,t,s))),s.promise}function JR(n,e,t={}){const s=new Pr;return n.asyncQueue.enqueueAndForget((async()=>(function(l,f,d,g,y){const _=new T1({next:S=>{_.su(),f.enqueueAndForget((()=>d1(l,w))),S.fromCache&&g.source==="server"?y.reject(new pe(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(S)},error:S=>y.reject(S)}),w=new p1(d,_,{includeMetadataChanges:!0,Ta:!0});return h1(l,w)})(await I1(n),n.asyncQueue,e,t,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(n,e,t){if(!t)throw new pe(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function ZR(n,e,t,s){if(e===!0&&s===!0)throw new pe(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Fv(n){if(!Te.isDocumentKey(n))throw new pe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function jv(n){if(Te.isDocumentKey(n))throw new pe(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ip(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":we()}function xo(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new pe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ip(n);throw new pe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1="firestore.googleapis.com",zv=!0;class Uv{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=x1,this.ssl=zv}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:zv;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=i1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<zx)throw new pe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ZR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A1((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new pe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new pe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new pe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uv(e),e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new yC;switch(s.type){case"firstParty":return new wC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new pe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=Mv.get(t);s&&(ue("ComponentProvider","Removing Datastore"),Mv.delete(t),s.terminate())})(this),Promise.resolve()}}function eP(n,e,t,s={}){var o;const l=(n=xo(n,Fc))._getSettings(),f=`${e}:${t}`;if(l.host!==x1&&l.host!==f&&Eo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:f,ssl:!1})),s.mockUserToken){let d,g;if(typeof s.mockUserToken=="string")d=s.mockUserToken,g=$t.MOCK_USER;else{d=GI(s.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new pe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new $t(y)}n._authCredentials=new vC(new E0(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new jc(this.firestore,e,this._query)}}class pn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pn(this.firestore,e,this._key)}}class gi extends jc{constructor(e,t,s){super(e,t,op(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pn(this.firestore,null,new Te(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function R1(n,e,...t){if(n=Lr(n),C1("collection","path",e),n instanceof Fc){const s=Je.fromString(e,...t);return jv(s),new gi(n,null,s)}{if(!(n instanceof pn||n instanceof gi))throw new pe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Je.fromString(e,...t));return jv(s),new gi(n.firestore,null,s)}}function Wu(n,e,...t){if(n=Lr(n),arguments.length===1&&(e=w0.newId()),C1("doc","path",e),n instanceof Fc){const s=Je.fromString(e,...t);return Fv(s),new pn(n,null,new Te(s))}{if(!(n instanceof pn||n instanceof gi))throw new pe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(Je.fromString(e,...t));return Fv(s),new pn(n.firestore,n instanceof gi?n.converter:null,new Te(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="AsyncQueue";class Bv{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new mp(this,"async_queue_retry"),this.Su=()=>{const s=zh();s&&ue($v,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const t=zh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=zh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise((()=>{}));const t=new Pr;return this.vu((()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Vu.push(e),this.Cu())))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Do(e))throw e;ue($v,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo((()=>this.Cu()))}}vu(e){const t=this.bu.then((()=>(this.pu=!0,e().catch((s=>{this.gu=s,this.pu=!1;const o=(function(f){let d=f.message||"";return f.stack&&(d=f.stack.includes(f.message)?f.stack:f.message+`
`+f.stack),d})(s);throw Mr("INTERNAL UNHANDLED ERROR: ",o),s})).then((s=>(this.pu=!1,s))))));return this.bu=t,t}enqueueAfterDelay(e,t,s){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const o=Ep.createAndSchedule(this,e,t,s,(l=>this.Fu(l)));return this.fu.push(o),o}Du(){this.gu&&we()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then((()=>{this.fu.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()}))}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class zc extends Fc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new Bv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bv(e),this._firestoreClient=void 0,await e}}}function tP(n,e){const t=typeof n=="object"?n:iC(),s=typeof n=="string"?n:rc,o=ZA(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=WI("firestore");l&&eP(o,...l)}return o}function Ap(n){if(n._terminated)throw new pe(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nP(n),n._firestoreClient}function nP(n){var e,t,s;const o=n._freezeSettings(),l=(function(d,g,y,_){return new OC(d,g,y,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,A1(_.experimentalLongPollingOptions),_.useFetchStreams)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new GR(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&(function(d){const g=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(g),_online:g}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fs(Ot.fromBase64String(e))}catch(t){throw new pe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fs(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new pe(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pe(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pe(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0})(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=/^__.*__$/;class iP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ps(e,this.data,this.fieldMask,t,this.fieldTransforms):new cl(e,this.data,t,this.fieldTransforms)}}class P1{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new ps(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function k1(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class Pp{constructor(e,t,s,o,l,f){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Pp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.$u(e),o}Ku(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.ku({path:s,Qu:!1});return o.Bu(),o}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return dc(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(k1(this.Lu)&&rP.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class sP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Oc(e)}ju(e,t,s,o=!1){return new Pp({Lu:e,methodName:t,zu:s,path:Bt.emptyPath(),Qu:!1,Gu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oP(n){const e=n._freezeSettings(),t=Oc(n._databaseId);return new sP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function aP(n,e,t,s,o,l={}){const f=n.ju(l.merge||l.mergeFields?2:0,e,t,o);kp("Data must be an object, but it was:",f,s);const d=b1(s,f);let g,y;if(l.merge)g=new xn(f.fieldMask),y=f.fieldTransforms;else if(l.mergeFields){const _=[];for(const w of l.mergeFields){const S=Nd(e,w,t);if(!f.contains(S))throw new pe(X.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);D1(_,S)||_.push(S)}g=new xn(_),y=f.fieldTransforms.filter((w=>g.covers(w.field)))}else g=null,y=f.fieldTransforms;return new iP(new on(d),g,y)}class $c extends Cp{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof $c}}function lP(n,e,t,s){const o=n.ju(1,e,t);kp("Data must be an object, but it was:",o,s);const l=[],f=on.empty();hs(s,((g,y)=>{const _=bp(e,g,t);y=Lr(y);const w=o.Ku(_);if(y instanceof $c)l.push(_);else{const S=Bc(y,w);S!=null&&(l.push(_),f.set(_,S))}}));const d=new xn(l);return new P1(f,d,o.fieldTransforms)}function uP(n,e,t,s,o,l){const f=n.ju(1,e,t),d=[Nd(e,s,t)],g=[o];if(l.length%2!=0)throw new pe(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let S=0;S<l.length;S+=2)d.push(Nd(e,l[S])),g.push(l[S+1]);const y=[],_=on.empty();for(let S=d.length-1;S>=0;--S)if(!D1(y,d[S])){const k=d[S];let q=g[S];q=Lr(q);const U=f.Ku(k);if(q instanceof $c)y.push(k);else{const N=Bc(q,U);N!=null&&(y.push(k),_.set(k,N))}}const w=new xn(y);return new P1(_,w,f.fieldTransforms)}function Bc(n,e){if(N1(n=Lr(n)))return kp("Unsupported field value:",e,n),b1(n,e);if(n instanceof Cp)return(function(s,o){if(!k1(o.Lu))throw o.Wu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Wu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return(function(s,o){const l=[];let f=0;for(const d of s){let g=Bc(d,o.Uu(f));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),f++}return{arrayValue:{values:l}}})(n,e)}return(function(s,o){if((s=Lr(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return ox(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=kt.fromDate(s);return{timestampValue:uc(o.serializer,l)}}if(s instanceof kt){const l=new kt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:uc(o.serializer,l)}}if(s instanceof xp)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof fs)return{bytesValue:X0(o.serializer,s._byteString)};if(s instanceof pn){const l=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(l))throw o.Wu(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:cp(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Rp)return(function(f,d){return{mapValue:{fields:{[P0]:{stringValue:k0},[ic]:{arrayValue:{values:f.toArray().map((y=>{if(typeof y!="number")throw d.Wu("VectorValues must only contain numeric values.");return ap(d.serializer,y)}))}}}}}})(s,o);throw o.Wu(`Unsupported field value: ${Ip(s)}`)})(n,e)}function b1(n,e){const t={};return S0(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(n,((s,o)=>{const l=Bc(o,e.qu(s));l!=null&&(t[s]=l)})),{mapValue:{fields:t}}}function N1(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof kt||n instanceof xp||n instanceof fs||n instanceof pn||n instanceof Cp||n instanceof Rp)}function kp(n,e,t){if(!N1(t)||!(function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)})(t)){const s=Ip(t);throw s==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+s)}}function Nd(n,e,t){if((e=Lr(e))instanceof Uc)return e._internalPath;if(typeof e=="string")return bp(n,e);throw dc("Field path arguments must be of type string or ",n,!1,void 0,t)}const cP=new RegExp("[~\\*/\\[\\]]");function bp(n,e,t){if(e.search(cP)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Uc(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function dc(n,e,t,s,o){const l=s&&!s.isEmpty(),f=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let g="";return(l||f)&&(g+=" (found",l&&(g+=` in field ${s}`),f&&(g+=` in document ${o}`),g+=")"),new pe(X.INVALID_ARGUMENT,d+n+g)}function D1(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new pn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(V1("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fP extends pc{data(){return super.data()}}function V1(n,e){return typeof e=="string"?bp(n,e):e instanceof Uc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new pe(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class L1{convertValue(e,t="none"){switch(Ii(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return hs(e,((o,l)=>{s[o]=this.convertValue(l,t)})),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t[ic].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map((f=>ct(f.doubleValue)));return new Rp(l)}convertGeoPoint(e){return new xp(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Pc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Xa(e));default:return null}}convertTimestamp(e){const t=Ti(e);return new kt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Je.fromString(e);Ke(r1(s));const o=new Ja(s.get(1),s.get(3)),l=new Te(s.popFirst(5));return o.isEqual(t)||Mr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class pP extends L1{constructor(e){super(),this.firestore=e}convertBytes(e){return new fs(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pn(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Np extends pc{constructor(e,t,s,o,l,f){super(e,t,s,o,f),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(V1("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Ku extends Np{data(e={}){return super.data(e)}}class mP{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new po(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Ku(this._firestore,this._userDataWriter,s.key,s,new po(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new pe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(o,l){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((d=>{const g=new Ku(o._firestore,o._userDataWriter,d.doc.key,d.doc,new po(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((d=>l||d.type!==3)).map((d=>{const g=new Ku(o._firestore,o._userDataWriter,d.doc.key,d.doc,new po(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,_=-1;return d.type!==0&&(y=f.indexOf(d.doc.key),f=f.delete(d.doc.key)),d.type!==1&&(f=f.add(d.doc),_=f.indexOf(d.doc.key)),{type:gP(d.type),doc:g,oldIndex:y,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function gP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(n){n=xo(n,pn);const e=xo(n.firestore,zc);return XR(Ap(e),n._key).then((t=>_P(e,n,t)))}class Dp extends L1{constructor(e){super(),this.firestore=e}convertBytes(e){return new fs(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pn(this.firestore,null,t)}}function vP(n){n=xo(n,jc);const e=xo(n.firestore,zc),t=Ap(e),s=new Dp(e);return hP(n._query),JR(t,n._query).then((o=>new mP(e,s,n,o)))}function _P(n,e,t){const s=t.docs.get(e._key),o=new Dp(n);return new Np(n,o,e._key,s,new po(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP={maxAttempts:5};function Oa(n,e){if((n=Lr(n)).firestore!==e)throw new pe(X.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=oP(e)}get(e){const t=Oa(e,this._firestore),s=new pP(this._firestore);return this._transaction.lookup([t._key]).then((o=>{if(!o||o.length!==1)return we();const l=o[0];if(l.isFoundDocument())return new pc(this._firestore,s,l.key,l,t.converter);if(l.isNoDocument())return new pc(this._firestore,s,t._key,null,t.converter);throw we()}))}set(e,t,s){const o=Oa(e,this._firestore),l=dP(o.converter,t,s),f=aP(this._dataReader,"Transaction.set",o._key,l,o.converter!==null,s);return this._transaction.set(o._key,f),this}update(e,t,s,...o){const l=Oa(e,this._firestore);let f;return f=typeof(t=Lr(t))=="string"||t instanceof Uc?uP(this._dataReader,"Transaction.update",l._key,t,s,o):lP(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,f),this}delete(e){const t=Oa(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP extends wP{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Oa(e,this._firestore),s=new Dp(this._firestore);return super.get(e).then((o=>new Np(this._firestore,s,t._key,o._document,new po(!1,!1),t.converter)))}}function SP(n,e,t){n=xo(n,zc);const s=Object.assign(Object.assign({},EP),t);return(function(l){if(l.maxAttempts<1)throw new pe(X.INVALID_ARGUMENT,"Max attempts must be at least 1")})(s),(function(l,f,d){const g=new Pr;return l.asyncQueue.enqueueAndForget((async()=>{const y=await YR(l);new KR(l.asyncQueue,y,d,f,g).Iu()})),g.promise})(Ap(n),(o=>e(new TP(n,o))),s)}(function(e,t=!0){(function(o){No=o})(rC),tc(new Ga("firestore",((s,{instanceIdentifier:o,options:l})=>{const f=s.getProvider("app").getImmediate(),d=new zc(new _C(s.getProvider("auth-internal")),new TC(f,s.getProvider("app-check-internal")),(function(y,_){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new pe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ja(y.options.projectId,_)})(f,o),f);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d}),"PUBLIC").setMultipleInstances(!0)),yo(Gy,Qy,e),yo(Gy,Qy,"esm2017")})();const IP={apiKey:"AIzaSyADPewYKF7iS_0t14rwVtAIzsVOsSo-tYU",authDomain:"gamerzone2.firebaseapp.com",projectId:"gamerzone2",storageBucket:"gamerzone2.firebasestorage.app",messagingSenderId:"515300556983",appId:"1:515300556983:web:3dfddee6eeb6457ea64d32"},AP=f0(IP),rs=tP(AP),CP=()=>{const[n,e]=M.useState(null),[t,s]=M.useState(!0),{id:o}=l_();return M.useEffect(()=>{s(!0);const l=Wu(rs,"productos",o);yP(l).then(f=>{f.exists()?e({id:f.id,...f.data()}):console.error("El producto no existe en Firestore")}).catch(f=>console.error("Error al obtener el producto:",f)).finally(()=>s(!1))},[o]),t?F.jsx("h3",{style:{textAlign:"center",marginTop:"30px"},children:"Cargando detalle del producto..."}):n?F.jsx("div",{children:F.jsx(OI,{...n})}):F.jsx("h3",{style:{textAlign:"center",marginTop:"30px"},children:"El producto solicitado no existe."})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const xP={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},RP=({id:n,nombre:e,precio:t,img:s,marca:o})=>F.jsx("div",{className:"products-container",children:F.jsxs("div",{className:"product-card",children:[F.jsx("img",{src:s,alt:e,className:"product-image"}),F.jsx("h5",{className:"product--brand",children:o}),F.jsx("h3",{className:"product--title",children:e}),F.jsxs("p",{className:"product--price2",children:["$",t]}),F.jsx("div",{className:"button-container",children:F.jsxs(yi,{className:"see--button",to:`/item/${n}`,children:[F.jsx(go,{icon:xP})," Ver detalles"]})})]})}),PP=({productos:n})=>F.jsx("div",{className:"container--Item",children:n.map(e=>F.jsx(RP,{id:e.id,nombre:e.nombre,precio:e.precio,img:e.img,marca:e.marca}))}),Hv=()=>{const[n,e]=M.useState([]),[t,s]=M.useState(!0),{idCategoria:o}=l_();return M.useEffect(()=>{s(!0);const l=R1(rs,"productos");vP(l).then(f=>{const d=f.docs.map(_=>({id:_.id,..._.data()}));if(!o){e(d);return}const g=o.toLowerCase(),y=d.filter(_=>{const w=_.nombre.toLowerCase(),S=_.marca.toLowerCase();return g==="celulares"?w.includes("celular")||S==="iphone"||S==="samsung":g==="computadoras"?w.includes("notebook")||S==="hp"||S==="acer"||S==="lenovo":g==="television"?w.includes("tv")||w.includes("smart")||S==="e-nova"||S==="philips"||S==="rca":g==="videojuegos"?S==="ps5"||S==="ps4"||w.includes("god of war")||w.includes("control")||w.includes("detroit"):!1});e(y)}).catch(f=>console.error("Error al obtener productos:",f)).finally(()=>s(!1))},[o]),t?F.jsx("h2",{style:{textAlign:"center",marginTop:"20px"},children:"Cargando catálogo..."}):F.jsxs("div",{children:[F.jsx("h2",{className:"products-title",style:{textTransform:"capitalize"},children:o||"Productos"}),F.jsx("div",{className:"line"}),F.jsx(PP,{productos:n})]})},O1=({onSubmit:n,carrito:e=[],total:t=0})=>{const[s,o]=M.useState(""),[l,f]=M.useState(""),[d,g]=M.useState(""),[y,_]=M.useState(!1),w=async S=>{if(S.preventDefault(),_(!0),!rs){$e.error("Error de conexión con la base de datos.",{theme:"dark"}),_(!1);return}try{const k=await SP(rs,async q=>{const U=await Promise.all(e.map(B=>{const K=Wu(rs,"productos",B.item.id);return q.get(K)}));U.forEach((B,K)=>{if(!B.exists())throw new Error(`El producto "${e[K].item.nombre}" no existe en la base de datos.`);const Z=B.data().stock,oe=e[K].cantidad;if(Z<oe)throw new Error(`Stock insuficiente para "${e[K].item.nombre}". Disponible: ${Z}`)}),U.forEach((B,K)=>{const Z=Wu(rs,"productos",B.id),oe=B.data().stock,he=e[K].cantidad;q.update(Z,{stock:oe-he})});const N=e.map(B=>({id:B.item.id,nombre:B.item.nombre,precio:B.item.precio,cantidad:B.cantidad})),H=Wu(R1(rs,"ordenes"));return q.set(H,{cliente:{nombre:s,apellido:l,telefono:d},items:N,total:t,fecha:new Date}),H.id});$e.success(`¡Compra realizada con éxito! Orden ID: ${k}`,{position:"bottom-right",autoClose:4e3,theme:"dark"}),o(""),f(""),g(""),typeof n=="function"&&n(k)}catch(k){console.error("❌ ERROR EN LA COMPRA:",k),$e.error(k.message||"Hubo un problema al procesar tu compra.",{theme:"dark"})}finally{_(!1)}};return F.jsx("div",{className:"form--container",children:F.jsxs("form",{className:"formulario",onSubmit:w,children:[F.jsx("h2",{className:"form--h2",children:"Formulario de Clientes"}),F.jsx("label",{className:"form--label",children:"Nombre:"}),F.jsx("input",{required:!0,className:"form--input",type:"text",onChange:S=>o(S.target.value),value:s}),F.jsx("label",{className:"form--label",children:"Apellido:"}),F.jsx("input",{required:!0,className:"form--input",type:"text",onChange:S=>f(S.target.value),value:l}),F.jsx("label",{className:"form--label",children:"Teléfono:"}),F.jsx("input",{required:!0,className:"form--input",type:"text",onChange:S=>g(S.target.value),value:d}),F.jsx("button",{className:"form--button",disabled:y,children:y?"Procesando...":"Finalizar Compra"})]})})},kP=()=>{const[n,e]=M.useState(!1),{carrito:t,vaciarCarrito:s,eliminarProducto:o}=M.useContext(vc),l=t.reduce((y,_)=>y+_.item.precio*_.cantidad,0),f=()=>{e(!0)},d=()=>{e(!1),s()},g=y=>new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",maximumFractionDigits:0}).format(y);return F.jsxs("section",{className:"carrito-section",children:[F.jsx("div",{style:{display:"flex",marginLeft:55},children:F.jsx("h2",{className:"products-title",children:"Carrito de Compras"})}),F.jsx("div",{className:"line"}),F.jsxs("div",{className:"Carrito--Container",children:[t.length===0?F.jsxs("div",{className:"carrito-vacio",children:[F.jsx("p",{className:"p",children:"Tu carrito está vacío 🛒"}),F.jsx("p",{className:"p-sub",children:"¿No sabés qué comprar? ¡Mirá nuestros productos!"}),F.jsx(yi,{to:"/",className:"see--button ver-productos-btn",children:"Ver Productos"})]}):F.jsxs("div",{className:"product-card--Carrito",children:[F.jsxs("div",{className:"grid-header",children:[F.jsx("h3",{children:"Producto"}),F.jsx("h3",{children:"Cantidad"}),F.jsx("h3",{children:"Precio Un."}),F.jsx("h3",{children:"Subtotal"}),F.jsx("h3",{children:"Acción"})]}),t.map(y=>F.jsxs("div",{className:"producto-carrito",children:[F.jsx("div",{className:"product--title",children:y.item.nombre}),F.jsx("div",{className:"product-quantity",children:F.jsx("span",{className:"badge-cantidad",children:y.cantidad})}),F.jsx("div",{className:"product-price",children:g(y.item.precio)}),F.jsx("div",{className:"product-total",children:g(y.item.precio*y.cantidad)}),F.jsx("div",{className:"product-action",children:F.jsx("button",{className:"eliminar-boton",onClick:()=>o(y.item.id),title:"Eliminar producto",children:"✕"})})]},y.item.id)),F.jsx("div",{className:"total-container",children:F.jsxs("h3",{className:"total",children:[F.jsx("span",{className:"total",children:"Total de la compra:"}),F.jsx("strong",{children:g(l)})]})}),!n&&F.jsxs("div",{className:"acciones-carrito",children:[F.jsx("button",{className:"see--button vaciar-btn",onClick:s,children:"Vaciar carrito"}),F.jsx("button",{className:"buy--button realizar-compra-btn",onClick:f,children:"Realizar Compra"})]})]}),n&&F.jsx("div",{className:"formulario-wrapper",children:F.jsx(O1,{onSubmit:d,carrito:t,total:l})})]})]})};function bP({text:n}){return F.jsx("div",{className:"marquee-container",children:F.jsx("div",{className:"marquee-text",children:n})})}function NP(){return F.jsxs(xT,{children:[F.jsx(YS,{}),F.jsx(bP,{text:"🚚 Envío GRATIS en todos los pedidos superiores a $50. ¡Aprovecha hoy!"}),F.jsx(XS,{}),F.jsxs(Gw,{children:[F.jsx(ts,{path:"/",element:F.jsx(Hv,{})}),F.jsx(ts,{path:"/categoria/:idCategoria",element:F.jsx(Hv,{})}),F.jsx(ts,{path:"/item/:id",element:F.jsx(CP,{})}),F.jsx(ts,{path:"/carrito",element:F.jsx(kP,{})}),F.jsx(ts,{path:"/checkout",element:F.jsx(O1,{})}),F.jsx(ts,{path:"*",element:F.jsx("h2",{style:{textAlign:"center",margin:"40px"},children:"Página no encontrada (404)"})})]}),F.jsx(JS,{}),F.jsx(VI,{})]})}GE.createRoot(document.getElementById("root")).render(F.jsx(vT,{children:F.jsx(NP,{})}));
