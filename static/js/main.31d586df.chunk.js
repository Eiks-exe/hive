(this.webpackJsonphive=this.webpackJsonphive||[]).push([[0],{90:function(e,t,n){},92:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n.n(r),i=n(11),o=n.n(i),s=(n(90),n(22)),l=n.n(s),d=n(32),u=n(21),b=(n(92),n(16)),h=(n(47),n(45),n(129)),j=n(131),m=n(133),p=n(134),x=n(135),g=n(102),f=n(136),O=n(137),v=n(140),w=n(138);b.a.apps.length||b.a.initializeApp({apiKey:"AIzaSyDTWBteXw0tA7hZ0OQCJmzl8q_6lcK18Jc",authDomain:"hive-db3b9.firebaseapp.com",projectId:"hive-db3b9",storageBucket:"hive-db3b9.appspot.com",messagingSenderId:"306107300911",appId:"1:306107300911:web:42ab214d27d522768bdada",measurementId:"G-H9W71X85WS"});var k=b.a.auth(),y=Object(h.a)((function(e){return{root:{display:"flex",alignItems:"center",flexDirection:"column",width:"100%",background:"linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)",fontFamily:"Russo One, sans-serif"},content:{width:"100%",padding:0},textCenter:{margin:"auto"},button:{background:"linear-gradient(45deg, #324764 60%, #939FA2 90%)",color:"white","&:focus":{outline:"none"}},form:{background:"#f0d050"}}})),N=function(){var e=y(),t=Object(r.useState)(""),n=Object(u.a)(t,2),c=n[0],i=n[1],o=Object(r.useState)(""),s=Object(u.a)(o,2),b=s[0],h=s[1],N=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),t.preventDefault(),k.signInWithEmailAndPassword("".concat(b,"@hive.bee"),c).then((function(e){})).catch((function(e){var t=e.code,n=e.message;"auth/wrong-password"===t?alert("Wrong password."):alert(n)})),i("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),t.preventDefault(),k.createUserWithEmailAndPassword("".concat(b,"@hive.bee"),c).then((function(e){})).catch((function(e){var t=e.code,n=e.message;"auth/weak-password"===t?alert("The password is too weak."):alert(n)})),i("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(j.a,{container:!0,justify:"center",children:Object(a.jsx)(j.a,{item:!0,xs:12,sm:10,md:8,lg:6,xl:4,children:Object(a.jsx)(m.a,{className:e.root,children:Object(a.jsx)(p.a,{className:e.content,children:Object(a.jsxs)(x.a,{className:e.content,children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(f.a,{component:"h1",variant:"h2",className:e.textCenter,children:"Hive"})}),Object(a.jsx)(g.a,{children:Object(a.jsx)(f.a,{component:"h2",variant:"subtitle1",className:e.textCenter,children:"login"})}),Object(a.jsx)(O.a,{}),Object(a.jsx)(g.a,{children:Object(a.jsx)("form",{onSubmit:N,style:{width:"100%"},children:Object(a.jsxs)(j.a,{container:!0,direction:"column",className:e.details,spacing:2,children:[Object(a.jsx)(j.a,{item:!0,xs:12,children:Object(a.jsx)(v.a,{name:"username",fullWidth:!0,variant:"outlined",className:e.form,value:b,onChange:function(e){return h(e.target.value)}})}),Object(a.jsx)(j.a,{item:!0,xs:12,children:Object(a.jsx)(v.a,{name:"password",fullWidth:!0,type:"password",variant:"outlined",className:e.form,value:c,onChange:function(e){return i(e.target.value)}})}),Object(a.jsx)(j.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{onClick:N,className:e.button,children:"Sign in"})}),Object(a.jsx)(j.a,{item:!0,xs:12,children:Object(a.jsx)(w.a,{onClick:C,className:e.button,children:"sign up"})})]})})})]})})})})})},C=n(68),F=n(72),I=n(141),B=n(71),R=n(139),S=n(69),A=n.n(S),W=Object(h.a)({button:{background:"black",borderRadius:"0",borderTopLeftRadius:"15px",height:"3.5rem",color:"white","&:hover":{background:"rgb(58, 58, 58)",color:"rgb(58, 58, 58)"},"&:focus":{outline:"none"}},menu:{background:"linear-gradient(45deg, #324764 60%, #939FA2 90%)",color:"yellow",height:"50px",display:"flex",margin:"0px"}}),D=b.a.auth();function L(){var e=W(),t=c.a.useState(null),n=Object(u.a)(t,2),r=n[0],i=n[1],o=function(){i(null)};return Object(a.jsxs)("div",{children:[Object(a.jsx)(w.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},className:e.button,children:Object(a.jsx)(A.a,{})}),Object(a.jsxs)(B.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:o,children:[Object(a.jsx)(R.a,{onClick:o,children:"Profile"}),Object(a.jsx)(R.a,{onClick:o,children:"My account"}),Object(a.jsx)(R.a,{onClick:function(){return D.signOut()},className:e.menu,children:"Logout"})]})]})}var T=n(70),P=n.n(T),E=Object(h.a)({root:{margin:"100px"},tchat:{padding:"10px",paddingBottom:"40px",minHeight:"87vh",height:"100px",overflowY:"scroll",display:"flex",flexDirection:"column",background:"linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)","&::-webkit-scrollbar":{width:"0.5em"},"&::-webkit-scrollbar-track":{background:"black"},"&::-webkit-scrollbar-thumb":{background:"yellow"}},menuBar:{height:"3.5rem",background:"black",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",color:"white"},inputAera:{background:"rgb(58, 58, 58)",display:"flex",borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px",paddingLeft:"10px"},textField:{background:"rgb(58, 58, 58)",color:"white",display:"flex",width:"90%",height:"3.5rem",border:"none",borderBottomLeftRadius:"15px","&:hover":{outline:"none"},"&:focus":{outline:"none"}},button:{width:"10%",color:"white",fontSize:"20px",borderRadius:"0",borderBottomRightRadius:"15px","&:focus":{outline:"none"}}}),z=b.a.auth(),U=b.a.firestore();function H(e){var t=e.msgcontent,n=t.text,r=t.uid,c=t.name,i=t.email;if(i)var o=(i.split("@hive.bee")||void 0)[0];var s=r===z.currentUser.uid?"sent":"received",l=r===z.currentUser.uid?"you":"theOthers";return Object(a.jsx)("div",{className:" msgcontent m-0 ".concat(s),children:Object(a.jsxs)("div",{className:" msgcontent ".concat(l),children:[Object(a.jsx)("div",{className:"font-weight-bold font-italic",children:c||o}),Object(a.jsx)("p",{style:{marginBottom:"0px",textAlign:"center"},children:n})]})})}var J=function(){var e=Object(r.useRef)(),t=U.collection("Messages"),n=t.orderBy("createdAt").limitToLast(25),c=Object(C.a)(n,{idField:"id"}),i=Object(u.a)(c,1)[0],o=Object(r.useState)(""),s=Object(u.a)(o,2),h=s[0],m=s[1],p=E(),x=function(){var n=Object(d.a)(l.a.mark((function n(a){var r,c,i,o,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.stopPropagation(),a.preventDefault(),null!=(r=z.currentUser)&&(c=r.uid,i=r.photoURL,o=r.displayName,s=r.email),""===h.trim()){n.next=9;break}return n.next=7,t.add({text:h,createdAt:b.a.firestore.FieldValue.serverTimestamp(),uid:c,photoURL:i,name:o,email:s});case 7:m(""),e.current.scrollIntoView({behavior:"smooth"});case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(a.jsxs)(j.a,{item:!0,xs:12,sm:0,md:0,lg:8,direction:"column",alignItems:"center",justify:"center",className:p.root2,children:[Object(a.jsxs)(j.a,{item:!0,className:p.menuBar,children:[Object(a.jsx)(j.a,{children:Object(a.jsx)(L,{})}),Object(a.jsx)(j.a,{children:Object(a.jsx)(P.a,{})})]}),Object(a.jsxs)(j.a,{item:!0,className:p.tchat,children:[i&&i.map((function(e){return Object(a.jsx)(H,{msgcontent:e},e.id)})),Object(a.jsx)(I.a,{ref:e})]}),Object(a.jsx)(j.a,{direction:"row",item:!0,justify:"center",alignItems:"center",className:!0,children:Object(a.jsxs)("form",{onSubmit:x,className:p.inputAera,children:[Object(a.jsx)("input",{type:"text",placeholder:"enter a message",className:p.textField,value:h,onChange:function(e){return m(e.target.value)}}),Object(a.jsx)(w.a,{variant:"primary",type:"submit",className:p.button,children:Object(a.jsx)(F.a,{})})]})})]})},K=n(59);b.a.apps.length||b.a.initializeApp({apiKey:"AIzaSyDTWBteXw0tA7hZ0OQCJmzl8q_6lcK18Jc",authDomain:"hive-db3b9.firebaseapp.com",projectId:"hive-db3b9",storageBucket:"hive-db3b9.appspot.com",messagingSenderId:"306107300911",appId:"1:306107300911:web:42ab214d27d522768bdada",measurementId:"G-H9W71X85WS"});var M=Object(h.a)({body:{minHeight:"100vh",background:"#212F42"},root:{background:"#212F42",color:"white",minHeight:"87vh",display:"flex"},root2:{display:"flex",marginTop:"1.5rem"},header:{background:"#1E1E18"}}),X=b.a.auth();function q(){var e=Object(K.a)(X),t=Object(u.a)(e,1)[0],n=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:X.signInAnonymously();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(I.a,{children:t?null:Object(a.jsx)(w.a,{onClick:n,children:"test"})})}var G=function(){var e=Object(K.a)(X),t=Object(u.a)(e,1)[0],n=M(),r=window.location.search,c=new URLSearchParams(r);return Object(a.jsx)(I.a,{className:n.body,children:Object(a.jsx)(I.a,{className:n.root,children:Object(a.jsxs)(j.a,{container:!0,lg:12,justify:"center",alignItems:"center",className:n.root2,children:[t?Object(a.jsx)(J,{}):Object(a.jsx)(N,{}),c.has("test")&&Object(a.jsx)(q,{})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(G,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Q()}},[[98,1,2]]]);
//# sourceMappingURL=main.31d586df.chunk.js.map