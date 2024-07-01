(function(){"use strict";var t={7356:function(t,e,s){var o=s(5130),n=s(6768);const i={id:"app"};function a(t,e,s,o,a,r){const A=(0,n.g2)("NavBar"),l=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",i,[(0,n.bF)(A),(0,n.bF)(l)])}var r=s(4232);const A={class:"nav__title"},l={class:"nav__menu"};function p(t,e,s,o,i,a){const p=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("nav",{class:(0,r.C4)(["nav",{sticky:i.isSticky}])},[(0,n.Lk)("h1",A,[(0,n.bF)(p,{to:"/",class:"router-link-exact-active active"},{default:(0,n.k6)((()=>[(0,n.eW)("Blog Posts")])),_:1})]),(0,n.Lk)("menu",l,[(0,n.bF)(p,{to:"/",class:"nav__item"},{default:(0,n.k6)((()=>[(0,n.eW)("Home")])),_:1})])],2)}var c={name:"NavBar",data(){return{isSticky:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){this.isSticky=window.pageYOffset>0}}},u=s(1241);const d=(0,u.A)(c,[["render",p]]);var m=d,h={name:"App",components:{NavBar:m}};const g=(0,u.A)(h,[["render",a]]);var f=g,v=s(1387);const b={class:"blog-home"};function P(t,e,s,o,i,a){const r=(0,n.g2)("router-link"),A=(0,n.g2)("PostList");return(0,n.uX)(),(0,n.CE)("div",b,[(0,n.bF)(r,{to:"/add-post",class:"add-post-btn"},{default:(0,n.k6)((()=>[(0,n.eW)("Add Post")])),_:1}),(0,n.bF)(A)])}const k={class:"post-list"},S=["onClick"],L={class:"preview__figure"},T=["src"],w={class:"preview__details"},y={class:"preview__title"},V={class:"preview__meta"},q={class:"preview__published"},x={href:"#",class:"preview__author"};function C(t,e,s,o,i,a){return(0,n.uX)(),(0,n.CE)("div",k,[(0,n.Lk)("ul",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.posts,(t=>((0,n.uX)(),(0,n.CE)("li",{key:t.id,class:"preview",onClick:e=>a.viewPost(t.id)},[(0,n.Lk)("figure",L,[(0,n.Lk)("img",{src:t.image,alt:"",class:"preview__image"},null,8,T),(0,n.Lk)("figcaption",w,[(0,n.Lk)("div",y,(0,r.v_)(t.title),1),(0,n.Lk)("div",V,[(0,n.Lk)("time",q,(0,r.v_)(t.date),1),(0,n.Lk)("a",x,(0,r.v_)(t.author),1),(0,n.Lk)("span",null,(0,r.v_)(t.timeSpent),1)])])])],8,S)))),128))])])}s(4114);var E=s(782),F={name:"PostList",computed:{...(0,E.L8)(["posts"])},methods:{viewPost(t){this.$router.push({name:"PostDetail",params:{id:t}})}}};const H=(0,u.A)(F,[["render",C]]);var I=H,j={name:"BlogHome",components:{PostList:I}};const U=(0,u.A)(j,[["render",P]]);var B=U;const z={class:"add-post"},Z=(0,n.Lk)("h2",null,"Add New Post",-1),G={class:"form-group"},M=(0,n.Lk)("label",null,"Title:",-1),R={class:"form-group"},K=(0,n.Lk)("label",null,"Content:",-1),_={class:"form-group"},O=(0,n.Lk)("label",null,"Image:",-1),X={class:"form-group"},W=(0,n.Lk)("label",null,"Time Spent:",-1),D={class:"timer"},J=(0,n.Lk)("button",{type:"submit",class:"btn btn-primary"},"Save Post",-1);function N(t,e,s,i,a,A){return(0,n.uX)(),(0,n.CE)("div",z,[Z,(0,n.Lk)("form",{onSubmit:e[5]||(e[5]=(0,o.D$)(((...t)=>A.savePost&&A.savePost(...t)),["prevent"])),class:"post-form"},[(0,n.Lk)("div",G,[M,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>a.post.title=t),required:"",class:"form-control"},null,512),[[o.Jo,a.post.title]])]),(0,n.Lk)("div",R,[K,(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.post.content=t),rows:"5",required:"",class:"form-control"},null,512),[[o.Jo,a.post.content]])]),(0,n.Lk)("div",_,[O,(0,n.Lk)("input",{type:"file",onChange:e[2]||(e[2]=(...t)=>A.onImageChange&&A.onImageChange(...t)),class:"form-control"},null,32)]),(0,n.Lk)("div",X,[W,(0,n.Lk)("div",D,[(0,n.Lk)("span",null,(0,r.v_)(A.timeSpent),1),(0,n.Lk)("button",{type:"button",onClick:e[3]||(e[3]=(...t)=>A.startTimer&&A.startTimer(...t)),class:"btn btn-success"},"Start"),(0,n.Lk)("button",{type:"button",onClick:e[4]||(e[4]=(...t)=>A.stopTimer&&A.stopTimer(...t)),class:"btn btn-warning"},"Stop")])]),J],32)])}var Q={name:"AddPost",data(){return{post:{title:"",content:"",image:"",timeSpent:"00:00:00"},timer:null,seconds:0}},computed:{timeSpent(){const t=Math.floor(this.seconds/3600).toString().padStart(2,"0"),e=Math.floor(this.seconds%3600/60).toString().padStart(2,"0"),s=(this.seconds%60).toString().padStart(2,"0");return`${t}:${e}:${s}`}},methods:{...(0,E.i0)(["addPost"]),onImageChange(t){const e=t.target.files[0];if(e){const t=new FileReader;t.onload=t=>{this.post.image=t.target.result},t.readAsDataURL(e)}},startTimer(){this.timer||(this.timer=setInterval((()=>{this.seconds++}),1e3))},stopTimer(){clearInterval(this.timer),this.timer=null},savePost(){const t={id:this.$store.state.posts.length+1,title:this.post.title,content:this.post.content,image:this.post.image||s(5929),date:(new Date).toLocaleDateString(),author:"Unknown",timeSpent:this.timeSpent};this.addPost(t),console.log("Saving post:",t),this.$router.push("/")}},beforeUnmount(){this.stopTimer()}};const Y=(0,u.A)(Q,[["render",N]]);var $=Y;const tt={class:"edit-post"},et=(0,n.Lk)("h2",null,"Edit Post",-1),st={class:"form-group"},ot=(0,n.Lk)("label",null,"Title:",-1),nt={class:"form-group"},it=(0,n.Lk)("label",null,"Content:",-1),at={class:"form-group"},rt=(0,n.Lk)("label",null,"Image:",-1),At={key:0,class:"image-preview"},lt=["src"],pt={class:"form-group"},ct=(0,n.Lk)("label",null,"Time Spent:",-1),ut={class:"timer"},dt=["disabled"];function mt(t,e,s,i,a,A){return(0,n.uX)(),(0,n.CE)("div",tt,[et,(0,n.Lk)("form",{onSubmit:e[7]||(e[7]=(0,o.D$)(((...t)=>A.updatePost&&A.updatePost(...t)),["prevent"])),class:"post-form"},[(0,n.Lk)("div",st,[ot,(0,n.bo)((0,n.Lk)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>a.post.title=t),onInput:e[1]||(e[1]=(...t)=>A.checkChanges&&A.checkChanges(...t)),required:"",class:"form-control"},null,544),[[o.Jo,a.post.title]])]),(0,n.Lk)("div",nt,[it,(0,n.bo)((0,n.Lk)("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>a.post.content=t),onInput:e[3]||(e[3]=(...t)=>A.checkChanges&&A.checkChanges(...t)),rows:"5",required:"",class:"form-control"},null,544),[[o.Jo,a.post.content]])]),(0,n.Lk)("div",at,[rt,(0,n.Lk)("input",{type:"file",onChange:e[4]||(e[4]=(...t)=>A.onImageChange&&A.onImageChange(...t)),class:"form-control"},null,32)]),a.post.image?((0,n.uX)(),(0,n.CE)("div",At,[(0,n.Lk)("img",{src:a.post.image,alt:"Post Image",class:"preview-image"},null,8,lt)])):(0,n.Q3)("",!0),(0,n.Lk)("div",pt,[ct,(0,n.Lk)("div",ut,[(0,n.Lk)("span",null,(0,r.v_)(A.timeSpent),1),(0,n.Lk)("button",{type:"button",onClick:e[5]||(e[5]=(...t)=>A.startTimer&&A.startTimer(...t)),class:"btn btn-success"},"Continue"),(0,n.Lk)("button",{type:"button",onClick:e[6]||(e[6]=(...t)=>A.stopTimer&&A.stopTimer(...t)),class:"btn btn-warning"},"Stop")])]),(0,n.Lk)("button",{type:"submit",class:"btn btn-primary",disabled:!a.isChanged},"Update Post",8,dt)],32)])}var ht={name:"EditPost",props:["id"],data(){return{post:{},originalPost:{},timer:null,seconds:0,isChanged:!1}},computed:{...(0,E.L8)(["getPostById"]),timeSpent(){const t=Math.floor(this.seconds/3600).toString().padStart(2,"0"),e=Math.floor(this.seconds%3600/60).toString().padStart(2,"0"),s=(this.seconds%60).toString().padStart(2,"0");return`${t}:${e}:${s}`}},created(){const t=this.id,e=this.getPostById(t);e?(this.post={...e},this.originalPost={...e},this.seconds=this.convertTimeToSeconds(this.post.timeSpent)):console.error(`Post with ID ${t} not found`)},methods:{...(0,E.i0)(["updatePost"]),onImageChange(t){const e=t.target.files[0];if(e){const t=new FileReader;t.onload=t=>{this.post.image=t.target.result,this.checkChanges()},t.readAsDataURL(e)}},startTimer(){this.timer||(this.timer=setInterval((()=>{this.seconds++,this.checkChanges()}),1e3))},stopTimer(){clearInterval(this.timer),this.timer=null},updatePost(){this.post.timeSpent=this.timeSpent,this.$store.dispatch("updatePost",this.post),console.log("Updated post:",this.post),this.$router.push("/")},checkChanges(){this.isChanged=JSON.stringify(this.post)!==JSON.stringify(this.originalPost)},convertTimeToSeconds(t){const[e,s,o]=t.split(":").map(Number);return 3600*e+60*s+o}},beforeUnmount(){this.stopTimer()}};const gt=(0,u.A)(ht,[["render",mt]]);var ft=gt;const vt={class:"post"},bt={class:"post__header"},Pt={class:"post__title"},kt={class:"post__meta"},St=["href"],Lt=(0,n.Lk)("span",{class:"post__sep"},null,-1),Tt=(0,n.Lk)("span",{class:"post__sep"},null,-1),wt={class:"post__body"},yt={class:"post__content"},Vt={class:"post__actions"},qt={class:"timer"};function xt(t,e,s,o,i,a){return(0,n.uX)(),(0,n.CE)("div",vt,[(0,n.Lk)("header",bt,[(0,n.Lk)("h2",Pt,(0,r.v_)(i.post.title),1),(0,n.Lk)("h3",kt,[(0,n.eW)(" by "),(0,n.Lk)("a",{href:`/by/${i.post.author}`,class:"post__author"},(0,r.v_)(i.post.author),9,St),Lt,(0,n.Lk)("time",null,(0,r.v_)(i.post.date),1),Tt,(0,n.eW)(" || "),(0,n.Lk)("span",null,(0,r.v_)(i.post.timeSpent),1)])]),(0,n.Lk)("div",wt,[(0,n.Lk)("figure",{class:"post__figure",style:(0,r.Tr)({backgroundImage:`url(${i.post.image})`})},null,4),(0,n.Lk)("div",yt,[(0,n.Lk)("p",null,(0,r.v_)(i.post.content),1),(0,n.Lk)("div",Vt,[(0,n.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>a.updatePost&&a.updatePost(...t)),class:"btn btn-primary"},"Update"),(0,n.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>a.handleDeletePost&&a.handleDeletePost(...t)),class:"btn btn-danger"},"Delete")]),(0,n.Lk)("div",qt,[(0,n.Lk)("span",null,(0,r.v_)(a.timeSpent),1),(0,n.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>a.startTimer&&a.startTimer(...t)),class:"btn btn-success"},"Start"),(0,n.Lk)("button",{onClick:e[3]||(e[3]=(...t)=>a.stopTimer&&a.stopTimer(...t)),class:"btn btn-warning"},"Stop")])])])])}var Ct={name:"PostDetail",props:["id"],data(){return{post:{},timer:null,seconds:0}},computed:{...(0,E.L8)(["getPostById"]),timeSpent(){const t=Math.floor(this.seconds/3600).toString().padStart(2,"0"),e=Math.floor(this.seconds%3600/60).toString().padStart(2,"0"),s=(this.seconds%60).toString().padStart(2,"0");return`${t}:${e}:${s}`}},created(){const t=this.id,e=this.getPostById(t);e?(this.post={...e},this.seconds=this.convertTimeToSeconds(this.post.timeSpent)):console.error(`Post with ID ${t} not found`)},methods:{...(0,E.i0)(["deletePost","updatePostTime"]),updatePost(){this.$router.push({name:"EditPost",params:{id:this.post.id}})},handleDeletePost(){this.deletePost(this.post.id),console.log("Deleted post with ID:",this.post.id),this.$router.push("/")},startTimer(){this.timer||(this.timer=setInterval((()=>{this.seconds++}),1e3))},stopTimer(){clearInterval(this.timer),this.timer=null,this.updatePostTime({id:this.post.id,timeSpent:this.timeSpent})},convertTimeToSeconds(t){const[e,s,o]=t.split(":").map(Number);return 3600*e+60*s+o}},beforeUnmount(){this.stopTimer()}};const Et=(0,u.A)(Ct,[["render",xt]]);var Ft=Et;const Ht=[{path:"/",name:"Home",component:B},{path:"/add-post",name:"AddPost",component:$},{path:"/edit-post/:id",name:"EditPost",component:ft,props:!0},{path:"/post/:id",name:"PostDetail",component:Ft,props:!0}],It=(0,v.aE)({history:(0,v.LA)("/blog-app-alps-task/"),routes:Ht});var jt=It;const Ut=(0,E.y$)({state:{posts:[{id:1,title:"The Great Gatsby",content:"A novel written by American author F. Scott Fitzgerald. It is set in the summer of 1922 in the fictional town of West Egg on prosperous Long Island.",image:s(9783),date:"Wed Jun 10, 2020",author:"F. Scott Fitzgerald",timeSpent:"00:00:00"},{id:2,title:"To Kill a Mockingbird",content:"Harper Lee's Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.",image:s(9800),date:"Fri Jul 11, 2020",author:"Harper Lee",timeSpent:"00:00:00"},{id:3,title:"To Kill a Mockingbird",content:"Harper Lee's Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.",image:s(1884),date:"Fri Jul 11, 2020",author:"Harper Lee",timeSpent:"00:00:00"},{id:4,title:"To Kill a Mockingbird",content:"Harper Lee's Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.",image:s(6539),date:"Fri Jul 11, 2020",author:"Harper Lee",timeSpent:"00:00:00"},{id:5,title:"To Kill a Mockingbird",content:"Harper Lee's Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.",image:s(8494),date:"Fri Jul 11, 2020",author:"Harper Lee",timeSpent:"00:00:00"},{id:6,title:"To Kill a Mockingbird",content:"Harper Lee's Pulitzer Prize-winning novel, published in 1960. The story is set in the fictional town of Maycomb, Alabama, and follows young Scout Finch and her brother, Jem, as they navigate the injustices of racism and prejudice.",image:s(6498),date:"Fri Jul 11, 2020",author:"Harper Lee",timeSpent:"00:00:00"}]},mutations:{addPost(t,e){t.posts.push(e)},deletePost(t,e){t.posts=t.posts.filter((t=>t.id!==e))},updatePost(t,e){const s=t.posts.findIndex((t=>t.id===e.id));-1!==s&&t.posts.splice(s,1,e)},updatePostTime(t,{id:e,timeSpent:s}){const o=t.posts.find((t=>t.id===e));o&&(o.timeSpent=s)}},actions:{addPost({commit:t},e){t("addPost",e)},deletePost({commit:t},e){t("deletePost",e)},updatePost({commit:t},e){t("updatePost",e)},updatePostTime({commit:t},e){t("updatePostTime",e)}},getters:{getPostById:t=>e=>t.posts.find((t=>t.id==e)),posts:t=>t.posts}});var Bt=Ut;const zt=(0,o.Ef)(f);zt.use(jt),zt.use(Bt),zt.mount("#app")},5929:function(t){t.exports="data:image/jpeg;base64,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"},9783:function(t,e,s){t.exports=s.p+"img/image1.376800ac.jpg"},9800:function(t,e,s){t.exports=s.p+"img/image2.c85fc419.jpg"},6498:function(t,e,s){t.exports=s.p+"img/image3.96ae4fee.jpg"},8494:function(t,e,s){t.exports=s.p+"img/image4.c6897ea5.jpg"},6539:function(t,e,s){t.exports=s.p+"img/image5.aeba93e8.jpg"},1884:function(t,e,s){t.exports=s.p+"img/image6.456db670.jpg"}},e={};function s(o){var n=e[o];if(void 0!==n)return n.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,s),i.exports}s.m=t,function(){var t=[];s.O=function(e,o,n,i){if(!o){var a=1/0;for(p=0;p<t.length;p++){o=t[p][0],n=t[p][1],i=t[p][2];for(var r=!0,A=0;A<o.length;A++)(!1&i||a>=i)&&Object.keys(s.O).every((function(t){return s.O[t](o[A])}))?o.splice(A--,1):(r=!1,i<a&&(a=i));if(r){t.splice(p--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[o,n,i]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var o in e)s.o(e,o)&&!s.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/blog-app-alps-task/"}(),function(){var t={524:0};s.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,i,a=o[0],r=o[1],A=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(A)var p=A(s)}for(e&&e(o);l<a.length;l++)i=a[l],s.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return s.O(p)},o=self["webpackChunkblog_app_alps_task"]=self["webpackChunkblog_app_alps_task"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=s.O(void 0,[504],(function(){return s(7356)}));o=s.O(o)})();
//# sourceMappingURL=app.abace1ee.js.map