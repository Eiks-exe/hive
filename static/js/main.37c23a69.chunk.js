(this.webpackJsonphive=this.webpackJsonphive||[]).push([[0],{74:function(e,t,n){},76:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),i=n(9),s=n.n(i),o=(n(74),n(18)),l=n.n(o),u=n(29),d=n(22),h=(n(76),n(45)),j=n(17),b=(n(49),n(48),n(108)),m=n(110),p=n(112),f=n(113),x=n(114),g=n(115),O=n(116),v=n(117),w=n(119),y=n(118);j.a.apps.length||j.a.initializeApp({apiKey:"AIzaSyDTWBteXw0tA7hZ0OQCJmzl8q_6lcK18Jc",authDomain:"hive-db3b9.firebaseapp.com",projectId:"hive-db3b9",storageBucket:"hive-db3b9.appspot.com",messagingSenderId:"306107300911",appId:"1:306107300911:web:42ab214d27d522768bdada",measurementId:"G-H9W71X85WS"});var k=j.a.auth(),N=Object(b.a)((function(e){return{root:{display:"flex",alignItems:"center",flexDirection:"column",width:"100%",background:"linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)",fontFamily:"Russo One, sans-serif"},content:{width:"100%",padding:0},textCenter:{margin:"auto"},button:{background:"linear-gradient(45deg, #324764 60%, #939FA2 90%)",color:"white","&:focus":{outline:"none"}},form:{background:"#f0d050"}}})),S=function(){var e=N(),t=Object(r.useState)(""),n=Object(d.a)(t,2),c=n[0],i=n[1],s=Object(r.useState)(""),o=Object(d.a)(s,2),h=o[0],j=o[1],b=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),t.preventDefault(),k.signInWithEmailAndPassword("".concat(h,"@hive.bee"),c).then((function(e){})).catch((function(e){var t=e.code,n=e.message;"auth/wrong-password"===t?alert("Wrong password."):alert(n)})),i("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),t.preventDefault(),k.createUserWithEmailAndPassword("".concat(h,"@hive.bee"),c).then((function(e){})).catch((function(e){var t=e.code,n=e.message;"auth/weak-password"===t?alert("The password is too weak."):alert(n)})),i("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(m.a,{container:!0,justify:"center",style:{margin:"auto"},children:Object(a.jsx)(m.a,{item:!0,xs:12,sm:10,md:8,lg:6,xl:4,children:Object(a.jsx)(p.a,{className:e.root,children:Object(a.jsx)(f.a,{className:e.content,children:Object(a.jsxs)(x.a,{className:e.content,children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(O.a,{component:"h1",variant:"h2",className:e.textCenter,children:"Hive"})}),Object(a.jsx)(g.a,{children:Object(a.jsx)(O.a,{component:"h2",variant:"subtitle1",className:e.textCenter,children:"login"})}),Object(a.jsx)(v.a,{}),Object(a.jsx)(g.a,{children:Object(a.jsx)("form",{onSubmit:b,style:{width:"100%"},children:Object(a.jsxs)(m.a,{container:!0,direction:"column",className:e.details,spacing:2,children:[Object(a.jsx)(m.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{name:"username",fullWidth:!0,variant:"outlined",className:e.form,value:h,onChange:function(e){return j(e.target.value)}})}),Object(a.jsx)(m.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{name:"password",fullWidth:!0,type:"password",variant:"outlined",className:e.form,value:c,onChange:function(e){return i(e.target.value)}})}),Object(a.jsx)(m.a,{item:!0,xs:12,children:Object(a.jsx)(y.a,{onClick:b,className:e.button,children:"Sign in"})}),Object(a.jsx)(m.a,{item:!0,xs:12,children:Object(a.jsx)(y.a,{onClick:S,className:e.button,children:"sign up"})})]})})})]})})})})})},F=n(57),I=j.a.auth(),C=j.a.firestore();function A(e){var t=e.msgcontent,n=t.text,r=t.uid,c=t.name,i=t.email;if(i)var s=(i.split("@hive.bee")||void 0)[0];var o=r===I.currentUser.uid?"sent":"received",l=r===I.currentUser.uid?"you":"theOthers";return Object(a.jsx)("div",{className:" msgcontent m-0 ".concat(o),children:Object(a.jsxs)("div",{className:" msgcontent ".concat(l),children:[Object(a.jsx)("div",{className:"font-weight-bold font-italic",children:c||s}),Object(a.jsx)("p",{style:{marginBottom:"0px",textAlign:"center"},children:n})]})})}var W=function(){var e=Object(r.useRef)(),t=C.collection("Messages"),n=t.orderBy("createdAt").limitToLast(25),c=Object(F.a)(n,{idField:"id"}),i=Object(d.a)(c,1)[0],s=Object(r.useState)(""),o=Object(d.a)(s,2),b=o[0],m=o[1],p=function(){var n=Object(u.a)(l.a.mark((function n(a){var r,c,i,s,o;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.stopPropagation(),a.preventDefault(),null!=(r=I.currentUser)?(c=r.uid,i=r.photoURL,s=r.displayName,o=r.email):c="queenbee",""===b.trim()){n.next=9;break}return n.next=7,t.add({text:b,createdAt:j.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:i,name:s,email:o});case 7:m(""),e.current.scrollIntoView({behavior:"smooth"});case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"col-sm-12  p-0",style:{maxHeight:"90vh",minHeight:"87vh"},children:[Object(a.jsxs)("main",{className:"tchatbox",children:[i&&i.map((function(e){return Object(a.jsx)(A,{msgcontent:e},e.id)})),Object(a.jsx)("div",{ref:e})]}),Object(a.jsx)("div",{className:"row formex",children:Object(a.jsxs)("form",{onSubmit:p,className:"pt-4",children:[Object(a.jsx)("input",{type:"text",placeholder:"enter a message",className:"formeiks ml-1",value:b,style:{outline:0},onChange:function(e){return m(e.target.value)}}),Object(a.jsx)(y.a,{type:"submit",className:"send ml-3",style:{outline:0},children:Object(a.jsx)(h.b,{})})]})})]})},D=n(50),B=n(120);j.a.apps.length||j.a.initializeApp({apiKey:"AIzaSyDTWBteXw0tA7hZ0OQCJmzl8q_6lcK18Jc",authDomain:"hive-db3b9.firebaseapp.com",projectId:"hive-db3b9",storageBucket:"hive-db3b9.appspot.com",messagingSenderId:"306107300911",appId:"1:306107300911:web:42ab214d27d522768bdada",measurementId:"G-H9W71X85WS"});var P=Object(b.a)({root:{background:"#212F42",color:"white",minHeight:"100vh",display:"flex",flexDirection:"column"},header:{background:"#1E1E18"},button:{background:"linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)",margin:"1rem","&:hover":{background:"linear-gradient(45deg, #324764 60%, #939FA2 90%)",color:"white"}}}),U=j.a.auth();function E(){var e=P();return U.currentUser&&Object(a.jsxs)(y.a,{varient:"",onClick:function(){return U.signOut()},className:e.button,children:[Object(a.jsx)(h.a,{})," Sign Out"]})}function T(){var e=Object(D.a)(U),t=Object(d.a)(e,1)[0],n=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:U.signInAnonymously();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(B.a,{children:t?null:Object(a.jsx)(y.a,{onClick:n,children:"test"})})}var z=function(){var e=Object(D.a)(U),t=Object(d.a)(e,1)[0],n=P(),r=window.location.search,c=new URLSearchParams(r);return Object(a.jsxs)(B.a,{className:n.root,children:[Object(a.jsx)(m.a,{boxShadow:3,className:n.header,children:Object(a.jsx)(E,{})}),Object(a.jsxs)(m.a,{children:[t?Object(a.jsx)(W,{}):Object(a.jsx)(S,{}),c.has("test")&&Object(a.jsx)(T,{})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),H()}},[[81,1,2]]]);
//# sourceMappingURL=main.37c23a69.chunk.js.map