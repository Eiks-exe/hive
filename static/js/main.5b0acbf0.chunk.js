(this.webpackJsonphive=this.webpackJsonphive||[]).push([[0],{100:function(e,t,n){},102:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(0),r=n.n(i),o=n(12),c=n.n(o),s=(n(100),n(9)),l=n.n(s),d=n(17),u=n(16),b=(n(102),n(19)),h=(n(55),n(53),n(141)),j=n(143),m=n(145),p=n(146),O=n(113),g=n(114),f=n(147),x=n(148),v=n(154),S=n(151);b.a.apps.length||b.a.initializeApp({apiKey:"AIzaSyDTWBteXw0tA7hZ0OQCJmzl8q_6lcK18Jc",authDomain:"hive-db3b9.firebaseapp.com",projectId:"hive-db3b9",storageBucket:"hive-db3b9.appspot.com",messagingSenderId:"306107300911",appId:"1:306107300911:web:42ab214d27d522768bdada",measurementId:"G-H9W71X85WS"});var _=b.a.auth(),E=Object(h.a)((function(e){return{root:{display:"flex",alignItems:"center",flexDirection:"column",width:"100%",background:"linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)",fontFamily:"Russo , sans-serif"},content:{width:"100%",padding:0,background:"",fontFamily:"RussoOne"},content1:{width:"100%",padding:0,background:"black",color:"white"},textCenter:{margin:"auto"},button:{background:"linear-gradient(45deg, #324764 60%, #939FA2 90%)",color:"white","&:focus":{outline:"none"}},form:{background:"#f0d050"}}})),T=function(){var e=E(),t=Object(i.useState)(""),n=Object(u.a)(t,2),r=n[0],o=n[1],c=Object(i.useState)(""),s=Object(u.a)(c,2),b=s[0],h=s[1],T=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),t.preventDefault(),_.signInWithEmailAndPassword("".concat(b,"@hive.bee"),r).then((function(e){})).catch((function(e){var t=e.code,n=e.message;"auth/wrong-password"===t?alert("Wrong password."):alert(n)})),o("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),t.preventDefault(),_.createUserWithEmailAndPassword("".concat(b,"@hive.bee"),r).then((function(e){})).catch((function(e){var t=e.code,n=e.message;"auth/weak-password"===t?alert("The password is too weak."):alert(n)})),o("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)(j.a,{container:!0,justify:"center",children:Object(a.jsx)(j.a,{item:!0,xs:12,sm:10,md:8,lg:6,xl:4,children:Object(a.jsx)(m.a,{className:e.root,children:Object(a.jsx)(p.a,{className:e.content,children:Object(a.jsxs)(O.a,{className:e.content,children:[Object(a.jsx)(g.a,{children:Object(a.jsx)(f.a,{component:"h1",variant:"h2",className:e.textCenter,children:"Hive"})}),Object(a.jsx)(g.a,{children:Object(a.jsx)(f.a,{component:"h2",variant:"subtitle1",className:e.textCenter,children:"login"})}),Object(a.jsx)(x.a,{}),Object(a.jsx)(g.a,{children:Object(a.jsx)("form",{onSubmit:T,style:{width:"100%"},children:Object(a.jsxs)(j.a,{container:!0,direction:"column",className:e.details,spacing:2,children:[Object(a.jsx)(j.a,{item:!0,xs:12,children:Object(a.jsx)(v.a,{name:"username",fullWidth:!0,variant:"outlined",className:e.form,value:b,onChange:function(e){return h(e.target.value)}})}),Object(a.jsx)(j.a,{item:!0,xs:12,children:Object(a.jsx)(v.a,{name:"password",fullWidth:!0,type:"password",variant:"outlined",className:e.form,value:r,onChange:function(e){return o(e.target.value)}})}),Object(a.jsx)(j.a,{item:!0,xs:12,children:Object(a.jsx)(S.a,{onClick:T,className:e.button,children:"Sign in"})}),Object(a.jsx)(j.a,{item:!0,xs:12,children:Object(a.jsx)(S.a,{onClick:w,className:e.button,children:"sign up"})})]})})})]})})})})})},w=n(76),k=n(77),R=n(83),C=n(6),N=n(81),y=n(153),D=n(150),F=n(152),P=n(79),I=n.n(P),A=Object(h.a)((function(e){return{root:{margin:"100px"},tchat:{padding:"10px",paddingBottom:"40px",minHeight:"80vh",maxHeight:"100vh",height:"100px",overflowY:"scroll",display:"flex",flexDirection:"column",background:"linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)","&::-webkit-scrollbar":{width:"0.5em"},"&::-webkit-scrollbar-track":{background:"black"},"&::-webkit-scrollbar-thumb":{background:"yellow"}},menuBar:{height:"3.5rem",background:"black",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",color:"white",display:"flex",justifyContent:""},UserMenu:{background:"rgb(58, 58, 58)",color:"white",outline:"none","&:focus":{outline:"none"}},inputAera:{background:"rgb(58, 58, 58)",display:"flex",borderBottomLeftRadius:"15px",borderBottomRightRadius:"15px",paddingLeft:"10px"},textField:{background:"rgb(58, 58, 58)",color:"white",display:"flex",width:"90%",height:"3.5rem",border:"none",borderBottomLeftRadius:"15px","&:hover":{outline:"none"},"&:focus":{outline:"none"}},button:{width:"10%",color:"white",fontSize:"20px",borderRadius:"0",borderBottomRightRadius:"15px",background:"rgb(58, 58, 58)","&:focus":{outline:"none"}},buttonMenu:{color:"white",borderRadius:"0",height:"100%",borderTopLeftRadius:"15px","&:focus":{outline:"none"}},buttonProf:{background:"black",borderRadius:"0",borderLeft:"solid 1px rgb(58, 58, 58)",borderRight:"solid 1px rgb(58, 58, 58)",borderTop:"solid 1px rgb(58, 58, 58)",borderTopLeftRadius:"15px",borderTopRightRadius:"15px",color:"white","&:hover":{background:"rgb(58, 58, 58)"},"&:focus":{outline:"none"}},list:{width:265,background:"linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)"},fullList:{width:"auto"},cardRoot:{maxWidth:345,minHeight:"100vh",background:"linear-gradient(45deg, #F0D050 30%, #FF8E53 90%)",display:"flex",flexDirection:"column",alignItems:"center"},cardMedia:{height:140},profilePic:{borderRadius:"50%",boder:"solid 1px black",overflow:"hidden",background:"white",margin:"1rem",display:"flex",justifyContent:"center"},sent:{display:"flex",alignItems:"flex-end",flexDirection:"column"},you:{background:"yellow",color:"black"},profile:{display:"flex",justifyContent:"space-between",flexDirection:"column",margin:"auto",alignItems:"center",maxHeight:"100%",minHeight:"400px"},avatarProfile:{width:e.spacing(15),height:e.spacing(15)}}})),W=n(155),B=n(149),H=n(78),L=n.n(H),U=n(82),K=function(){var e=b.a.auth(),t=A(),n=e.currentUser,i=Object(U.a)(),r=i.register,o=i.handleSubmit,c=function(e){n.updateProfile({displayName:e.pseudo})};return Object(a.jsx)(j.a,{className:t.tchat,children:Object(a.jsxs)(j.a,{className:t.profile,children:[Object(a.jsx)(W.a,{className:t.avatarProfile,alt:"",src:"https://cdn.discordapp.com/attachments/444928915279052830/793260656555982868/unknown.png"}),Object(a.jsx)(j.a,{children:Object(a.jsx)(f.a,{variant:"h4",color:"black",children:Object(a.jsxs)("form",{onSubmit:o(c),children:[Object(a.jsx)(B.a,{name:"pseudo",defaultValue:n.displayName?n.displayName:n.email.split("@hive.bee")[0],label:"Standard",inputRef:r}),Object(a.jsx)(L.a,{onClick:o(c)})]})})}),Object(a.jsx)(j.a,{children:Object(a.jsx)(v.a,{id:"outlined-multiline-static",label:"humor",multiline:!0,rows:4,defaultValue:"say something nice !",variant:"filled"})})]})})},M=b.a.auth(),V=b.a.firestore();function z(e){var t=e.msgcontent,n=t.text,i=t.uid,r=t.name,o=t.email;if(o)var c=(o.split("@hive.bee")||void 0)[0];var s=i===M.currentUser.uid?"sent":"received",l=i===M.currentUser.uid?"you":"theOthers";return Object(a.jsx)("div",{className:" msgcontent m-0 ".concat(s),children:Object(a.jsxs)("div",{className:" msgcontent ".concat(l),children:[Object(a.jsx)("div",{className:"font-weight-bold font-italic",children:r||c}),Object(a.jsx)("p",{style:{marginBottom:"0px",textAlign:"center"},children:n})]})})}function J(){var e=Object(i.useRef)(),t=V.collection("Messages"),n=t.orderBy("createdAt").limitToLast(25),r=Object(k.a)(n,{idField:"id"}),o=Object(u.a)(r,1)[0],c=Object(i.useState)(""),s=Object(u.a)(c,2),h=s[0],m=s[1],p=A();Object(i.useEffect)((function(){e.current.scrollIntoView({behavior:"smooth"})}),[o]);var O=function(){var n=Object(d.a)(l.a.mark((function n(a){var i,r,o,c,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.stopPropagation(),a.preventDefault(),null!=(i=M.currentUser)&&(r=i.uid,o=i.photoURL,c=i.displayName,s=i.email),""===h.trim()){n.next=9;break}return n.next=7,t.add({text:h,createdAt:b.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:o,name:c,email:s});case 7:m(""),e.current.scrollIntoView({behavior:"smooth"});case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(j.a,{item:!0,className:p.tchat,children:[o&&o.map((function(e){return Object(a.jsx)(z,{msgcontent:e},e.id)})),Object(a.jsx)(y.a,{ref:e})]}),Object(a.jsx)(j.a,{direction:"row",item:!0,justify:"center",alignItems:"center",className:!0,children:Object(a.jsxs)("form",{onSubmit:O,className:p.inputAera,children:[Object(a.jsx)("input",{type:"text",placeholder:"enter a message",className:p.textField,value:h,onChange:function(e){return m(e.target.value)}}),Object(a.jsx)(S.a,{variant:"primary",type:"submit",className:p.button,children:Object(a.jsx)(R.a,{})})]})})]})}var G=function(){var e=A(),t=Object(i.useState)(null),n=Object(u.a)(t,2),o=n[0],c=n[1];function s(){var e=A(),t=r.a.useState(null),n=Object(u.a)(t,2),i=n[0],o=n[1],s=function(){o(null)},l=Object(C.a)({paper:{backgroundColor:"rgb(58,58,58)"}})((function(e){return Object(a.jsx)(N.a,Object(w.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"}},e))}));return Object(a.jsxs)(y.a,{children:[Object(a.jsx)(S.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},className:e.buttonMenu,children:Object(a.jsx)(I.a,{className:e.icon})}),Object(a.jsx)(l,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:s,children:Object(a.jsxs)(D.a,{className:e.UserMenu,children:[Object(a.jsx)(F.a,{onClick:function(){return c(!0)},children:"profile"}),Object(a.jsx)(F.a,{onClick:s,children:"My account"}),Object(a.jsx)(F.a,{onClick:function(){return M.signOut()},className:e.menu,children:"Logout"})]})})]})}return Object(a.jsxs)(j.a,{item:!0,xs:12,sm:0,md:0,lg:8,direction:"column",alignItems:"center",justify:"center",className:e.root2,children:[Object(a.jsxs)(j.a,{item:!0,className:e.menuBar,children:[Object(a.jsx)(s,{}),o&&Object(a.jsx)(S.a,{className:e.buttonProf,onClick:function(){return c(null)},children:" back "})]}),o?Object(a.jsx)(K,{}):Object(a.jsx)(J,{})]})},X=n(67);n(80).config(),b.a.apps.length||b.a.initializeApp({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/hive",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).FB_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/hive",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).FB_AUTHDOM,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/hive",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).FB_PROJECTID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/hive",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).FB_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/hive",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).FB_SENDERID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/hive",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).FB_APPID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/hive",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).FB_MEASUREMENTID});var Y=Object(h.a)({body:{minHeight:"100vh",background:"#212F42"},root:{background:"#212F42",color:"white",minHeight:"87vh",display:"flex"},root2:{display:"flex",marginTop:"1.5rem"},header:{background:"#1E1E18"}}),q=b.a.auth();function Q(){var e=Object(X.a)(q),t=Object(u.a)(e,1)[0],n=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:q.signInAnonymously();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(y.a,{children:t?null:Object(a.jsx)(S.a,{onClick:n,children:"test"})})}var Z=function(){var e=Object(X.a)(q),t=Object(u.a)(e,1)[0],n=Y(),i=window.location.search,r=new URLSearchParams(i);return Object(a.jsx)(y.a,{className:n.body,children:Object(a.jsx)(y.a,{className:n.root,children:Object(a.jsxs)(j.a,{container:!0,lg:12,justify:"center",alignItems:"center",className:n.root2,children:[t?Object(a.jsx)(G,{}):Object(a.jsx)(T,{}),r.has("test")&&Object(a.jsx)(Q,{})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,157)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),r(e),o(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),$()}},[[109,1,2]]]);
//# sourceMappingURL=main.5b0acbf0.chunk.js.map