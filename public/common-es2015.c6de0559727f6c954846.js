(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{CqG3:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}(e("g+7Q"))},Dl6n:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return s}));const r=(t,n)=>null!==n.closest(t),o=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,i=t=>{const n={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>n[t]=!0),n},a=/^[a-z][a-z0-9+\-.]*:/,s=async(t,n,e)=>{if(null!=t&&"#"!==t[0]&&!a.test(t)){const r=document.querySelector("ion-router");if(r)return null!=n&&n.preventDefault(),r.push(t,e)}return!1}},FHRc:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("8Y7J"),o=e("irV9"),i=e("iInd");let a=(()=>{class t{constructor(t,n){this.AFauth=t,this.router=n}login(t,n){return new Promise((e,r)=>{this.AFauth.auth.signInWithEmailAndPassword(t,n).then(t=>{e(t)}).catch(t=>r(t))})}logout(){this.AFauth.auth.signOut().then(()=>{this.router.navigate(["/login"])})}}return t.ngInjectableDef=r.Ob({factory:function(){return new t(r.Pb(o.a),r.Pb(i.m))},token:t,providedIn:"root"}),t})()},K6rM:function(t,n,e){"use strict";e.d(n,"a",(function(){return v})),e.d(n,"b",(function(){return M})),e.d(n,"c",(function(){return b})),e.d(n,"d",(function(){return y})),e.d(n,"e",(function(){return i}));var r=e("c1op"),o=e("kBU6");const i=t=>new Promise((n,e)=>{Object(r.m)(()=>{a(t),s(t).then(e=>{e.animation&&e.animation.destroy(),c(t),n(e)},n=>{c(t),e(n)})})}),a=t=>{const n=t.enteringEl,e=t.leavingEl;E(n,e,t.direction),t.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),y(n,!1),e&&y(e,!1)},s=async t=>{const n=await u(t);return n?l(n,t):d(t)},c=t=>{const n=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")},u=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await(()=>e.e(98).then(e.bind(null,"5+Pq")))()).iosTransitionAnimation:(await(()=>e.e(99).then(e.bind(null,"RRi8")))()).mdTransitionAnimation},l=async(t,n)=>{let r;await f(n,!0);try{const o=await e.e(6).then(e.bind(null,"gHMO"));r=await o.create(t,n.baseEl,n)}catch(i){r=t(n.baseEl,n)}m(n.enteringEl,n.leavingEl);const o=await p(r,n);return n.progressCallback&&n.progressCallback(void 0),o&&g(n.enteringEl,n.leavingEl),{hasCompleted:o,animation:r}},d=async t=>{const n=t.enteringEl,e=t.leavingEl;return await f(t,!1),m(n,e),g(n,e),{hasCompleted:!0}},f=async(t,n)=>{const e=(void 0!==t.deepWait?t.deepWait:n)?[v(t.enteringEl),v(t.leavingEl)]:[w(t.enteringEl),w(t.leavingEl)];await Promise.all(e),await h(t.viewIsReady,t.enteringEl)},h=async(t,n)=>{t&&await t(n)},p=(t,n)=>{const e=n.progressCallback,r=new Promise(n=>{t.onFinish(e=>{"number"==typeof e?n(1===e):void 0!==t.hasCompleted&&n(t.hasCompleted)})});return e?(t.progressStart(!0),e(t)):t.play(),r},m=(t,n)=>{b(n,o.c),b(t,o.a)},g=(t,n)=>{b(t,o.b),b(n,o.d)},b=(t,n)=>{if(t){const e=new CustomEvent(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(e)}},w=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),v=async t=>{const n=t;if(n){if(null!=n.componentOnReady&&null!=await n.componentOnReady())return;await Promise.all(Array.from(n.children).map(v))}},y=(t,n)=>{n?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},E=(t,n,e)=>{void 0!==t&&(t.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")},M=t=>t.classList.contains("ion-page")?t:t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||t},YtD4:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));const r=t=>{try{if("string"!=typeof t||""===t)return t;const n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=t,s.forEach(t=>{const e=n.querySelectorAll(t);for(let r=e.length-1;r>=0;r--){const t=e[r];t.parentNode?t.parentNode.removeChild(t):n.removeChild(t);const a=i(t);for(let n=0;n<a.length;n++)o(a[n])}});const r=i(n);for(let t=0;t<r.length;t++)o(r[t]);const a=document.createElement("div");a.appendChild(n);const c=a.querySelector("div");return null!==c?c.innerHTML:a.innerHTML}catch(n){return console.error(n),""}},o=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let e=t.attributes.length-1;e>=0;e--){const n=t.attributes.item(e),r=n.name;if(!a.includes(r.toLowerCase())){t.removeAttribute(r);continue}const o=n.value;null!=o&&o.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const n=i(t);for(let e=0;e<n.length;e++)o(n[e])},i=t=>null!=t.children?t.children:t.childNodes,a=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},"g+7Q":function(t,n,e){"use strict";e.r(n);var r=e("Xr7G"),o=e("m7gy"),i=e("m+Ru"),a=e("fKx8"),s=e("bMVn"),c=e("iKj2"),u=e("cNHj");e.d(n,"EnablePersistenceToken",(function(){return r.c})),e.d(n,"PersistenceSettingsToken",(function(){return r.e})),e.d(n,"FirestoreSettingsToken",(function(){return r.d})),e.d(n,"DefaultFirestoreSettings",(function(){return r.b})),e.d(n,"associateQuery",(function(){return r.f})),e.d(n,"AngularFirestore",(function(){return r.a})),e.d(n,"AngularFirestoreModule",(function(){return o.a})),e.d(n,"validateEventsArray",(function(){return i.b})),e.d(n,"AngularFirestoreCollection",(function(){return i.a})),e.d(n,"AngularFirestoreCollectionGroup",(function(){return a.a})),e.d(n,"AngularFirestoreDocument",(function(){return s.a})),e.d(n,"docChanges",(function(){return c.c})),e.d(n,"sortedChanges",(function(){return c.d})),e.d(n,"combineChanges",(function(){return c.b})),e.d(n,"combineChange",(function(){return c.a})),e.d(n,"fromRef",(function(){return u.c})),e.d(n,"fromDocRef",(function(){return u.b})),e.d(n,"fromCollectionRef",(function(){return u.a}))},m9yc:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));const r=async(t,n,e,r,o)=>{if(t)return t.attachViewToDom(n,e,o,r);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return r&&r.forEach(t=>i.classList.add(t)),o&&Object.assign(i,o),n.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},o=(t,n)=>{if(n){if(t)return t.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},"nN+u":function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r}));const r=(t,n,e)=>{const r=new MutationObserver(t=>{e(o(t,n))});return r.observe(t,{childList:!0,subtree:!0}),r},o=(t,n)=>{let e;return t.forEach(t=>{for(let r=0;r<t.addedNodes.length;r++)e=i(t.addedNodes[r],n)||e}),e},i=(t,n)=>{if(1===t.nodeType)return(t.tagName===n.toUpperCase()?[t]:Array.from(t.querySelectorAll(n))).find(t=>!0===t.checked)}},opz7:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"d",(function(){return r}));const r=()=>{const t=window.TapticEngine;t&&t.selection()},o=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},i=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},a=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}},qaSm:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}));class r{constructor(t,n){this.x=t,this.y=n}}const o=(t,n,e,r,o)=>{const s=a(t.y,n.y,e.y,r.y,o);return i(t.x,n.x,e.x,r.x,s[0])},i=(t,n,e,r,o)=>o*(3*n*Math.pow(o-1,2)+o*(-3*e*o+3*e+r*o))-t*Math.pow(o-1,3),a=(t,n,e,r,o)=>s((r-=o)-3*(e-=o)+3*(n-=o)-(t-=o),3*e-6*n+3*t,3*n-3*t,t).filter(t=>t>=0&&t<=1),s=(t,n,e,r)=>{if(0===t)return((t,n,e)=>{const r=n*n-4*t*e;return r<0?[]:[(-n+Math.sqrt(r))/(2*t),(-n-Math.sqrt(r))/(2*t)]})(n,e,r);const o=(3*(e/=t)-(n/=t)*n)/3,i=(2*n*n*n-9*n*e+27*(r/=t))/27;if(0===o)return[Math.pow(-i,1/3)];if(0===i)return[Math.sqrt(-o),-Math.sqrt(-o)];const a=Math.pow(i/2,2)+Math.pow(o/3,3);if(0===a)return[Math.pow(i/2,.5)-n/3];if(a>0)return[Math.pow(-i/2+Math.sqrt(a),1/3)-Math.pow(i/2+Math.sqrt(a),1/3)-n/3];const s=Math.sqrt(Math.pow(-o/3,3)),c=Math.acos(-i/(2*Math.sqrt(Math.pow(-o/3,3)))),u=2*Math.pow(s,1/3);return[u*Math.cos(c/3)-n/3,u*Math.cos((c+2*Math.PI)/3)-n/3,u*Math.cos((c+4*Math.PI)/3)-n/3]}},xOQr:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e("CqG3");var r=e("lJxs"),o=e("8Y7J"),i=e("Xr7G");let a=(()=>{class t{constructor(t){this.todosCollection=t.collection("todos"),this.todos=this.todosCollection.snapshotChanges().pipe(Object(r.a)(t=>t.map(t=>{const n=t.payload.doc.data();return Object.assign({id:t.payload.doc.id},n)})))}getTodos(){return this.todos}getTodo(t){return this.todosCollection.doc(t).valueChanges()}updateTodo(t,n){return this.todosCollection.doc(n).update(t)}addTodo(t){return this.todosCollection.add(t)}removeTodo(t){return this.todosCollection.doc(t).delete()}}return t.ngInjectableDef=o.Ob({factory:function(){return new t(o.Pb(i.a))},token:t,providedIn:"root"}),t})()}}]);