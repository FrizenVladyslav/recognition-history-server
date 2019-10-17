(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{126:function(e,t,a){e.exports={card:"styles_card__yNviF",meta:"styles_meta__XhGRL"}},127:function(e,t,a){e.exports={image:"styles_image__1XDPv",btnGroup:"styles_btnGroup__37C5E"}},128:function(e,t,a){e.exports={form:"styles_form__3QiYF",uploader:"styles_uploader__3HsLh"}},129:function(e,t,a){e.exports={layout:"styles_layout__SeFd3",content:"styles_content__o67Yr"}},177:function(e,t,a){e.exports={header:"styles_header__2dQfB"}},191:function(e,t,a){e.exports={steps:"styles_steps__3fuSV"}},197:function(e,t,a){e.exports=a(402)},202:function(e,t,a){},401:function(e,t,a){},402:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(11),o=a.n(c),s=(a(202),a(17)),i=a(412),l=function(){return n.a.createElement(i.a.Footer,null,"Recognition history")},u=a(68),m=a(9),p=a(194),f=a(177),g=a.n(f),h=function(){return n.a.createElement(i.a.Header,{className:g.a.header},n.a.createElement(u.a,{to:"/"},n.a.createElement(m.a,{type:"file-image"})," Images recognition history"),n.a.createElement(u.a,{to:"/new-history"},n.a.createElement(p.a,{type:"primary",icon:"info-circle"},"Get image info")))},d=a(94),b=a(409),v=a(410),y=function(e){var t=e.error,a=e.label,r=Object(d.a)(e,["error","label"]);return n.a.createElement(b.a.Item,{label:a,validateStatus:t?"error":"",help:t},n.a.createElement(v.a,r))},E=a(22),w=Object(E.a)(),O=a(13),j=a.n(O),x=a(20),_=a(88),k=a(89),S=a(92),U=a(90),N=a(93),C=a(403),L=a(404),D=a(56),I=a(2),P=a.n(I),R=a(41),F=a(66),H=a.n(F);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach((function(t){Object(R.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M="http://localhost:5001/",B={validateStatus:function(){return!0}},T=H.a.create(G({},B,{baseURL:M})),J=H.a.create(G({},B,{baseURL:"https://api.imagga.com/v2/",auth:{username:"acc_49ca02957a3cdc5",password:"b7ab9efa1575c13b0448972fc4e12a8d"}})),A="histories";function Q(e){return V.apply(this,arguments)}function V(){return(V=Object(x.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T("".concat(A,"/").concat(t));case 2:if(200===(a=e.sent).status){e.next=5;break}throw new Error("Hostory not recieved");case 5:return e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(){return X.apply(this,arguments)}function X(){return(X=Object(x.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("".concat(A,"?sort=date,DESC"));case 2:if(200===(t=e.sent).status){e.next=5;break}throw new Error("Histories not recieved");case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return K.apply(this,arguments)}function K(){return(K=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.post(A,t);case 2:if(201===e.sent.status){e.next=5;break}throw new Error("History not created");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=a(64),q=a.n($),Z=a(407),ee=a(413),te=a(126),ae=a.n(te);function re(e){switch(!0){case e>89:return"green";case e>49:return"cyan";default:return"red"}}var ne=function(e){var t=e.history;return n.a.createElement(u.a,{to:"/".concat(t.id)},n.a.createElement(Z.a,{className:ae.a.card,cover:n.a.createElement("img",{alt:"example",src:t.img})},n.a.createElement(Z.a.Meta,{className:ae.a.meta,title:q()(t.date).format("MMMM Do YYYY, h:mm:ss a"),description:t.tags.map((function(e){var t=e.tag.en,a=e.confidence;return n.a.createElement(ee.a,{key:t,color:re(a)},t)}))})))},ce=a(96),oe=a.n(ce),se=function(e){function t(){var e,a;Object(_.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(n)))).state={loading:!0,histories:[],search:""},a.loadHistories=Object(x.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C.a.loading("Loading histories list..."),r=[],e.prev=2,e.next=5,W();case 5:r=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),L.a.error({message:e.t0.message||e.t0});case 11:return e.prev=11,a.setState({loading:!1,histories:r},t),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[2,8,11,14]])}))),a.filterHistories=function(){var e=a.state,t=e.search,r=e.histories;return""===t?r:r.filter((function(e){return e.tags.some((function(e){return-1!==e.tag.en.indexOf(t.toLowerCase())}))}))},a}return Object(N.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.loadHistories()}},{key:"render",value:function(){var e=this,t=this.state.loading,a=this.filterHistories();return n.a.createElement("section",{className:P()("container",oe.a.histories)},n.a.createElement(y,{className:oe.a.input,placeholder:"search by tag",prefix:n.a.createElement(m.a,{type:"search"}),onChange:function(t){return e.setState({search:t.target.value})}}),n.a.createElement("div",{className:oe.a.list},a.length?a.map((function(e){return n.a.createElement(ne,{key:e.id,history:e})})):!t&&n.a.createElement(D.a,null)))}}]),t}(r.Component),ie=a(69),le=a(405),ue=a(55),me=a(30),pe=a(192),fe=a(127),ge=a.n(fe),he=function(e){var t=e.img,a=e.tags,r=e.loading;return n.a.createElement("section",null,n.a.createElement(ue.a,{gutter:30,type:"flex",justify:"center"},n.a.createElement(me.a,{sm:8,className:ge.a.image},n.a.createElement("img",{src:t,alt:"history"})),n.a.createElement(me.a,{sm:7},n.a.createElement(le.a,{spinning:!0===r},a.map((function(e){var t=e.confidence,a=e.tag.en;return n.a.createElement(pe.a,{key:a,percent:t,format:function(){return a}})}))))),n.a.createElement(p.a.Group,{className:ge.a.btnGroup},n.a.createElement(p.a,{type:"link",href:"/"},n.a.createElement(m.a,{type:"left"}),"Back to histories list"),n.a.createElement(p.a,{type:"link",href:"/new-history"},"Get image info",n.a.createElement(m.a,{type:"plus"}))))},de=function(e){var t=e.match.params.id,a=Object(r.useState)(null),c=Object(ie.a)(a,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){var a=C.a.loading("Loading...");Object(x.a)(j.a.mark((function r(){var n;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Q(+t);case 3:n=r.sent,s(n),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),L.a.error({message:r.t0.message||r.t0}),e.history.replace("/");case 11:return r.prev=11,a(),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[0,7,11,14]])})))()}),[e.history,t]),n.a.createElement(le.a,{spinning:!o},o&&n.a.createElement(he,{img:o.img,tags:o.tags}))},be=a(411),ve="files/";function ye(e){return Ee.apply(this,arguments)}function Ee(){return(Ee=Object(x.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("image",t),e.next=4,H()({method:"post",url:"".concat(M).concat(ve),data:a,headers:{"content-type":"multipart/form-data;"},validateStatus:function(){return!0}});case 4:if(201===(r=e.sent).status){e.next=7;break}throw new Error("Image not uploaded");case 7:return e.abrupt("return",r.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function we(e){return Oe.apply(this,arguments)}function Oe(){return(Oe=Object(x.a)(j.a.mark((function e(t){var a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("/tags",{params:(a={},Object(R.a)(a,"image_url",t),Object(R.a)(a,"limit",5),a)});case 2:if(200===(r=e.sent).status){e.next=5;break}throw new Error("Image information not received");case 5:return e.abrupt("return",r.data.result.tags);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var je=function(e){var t=e.allow,a=e.message,r=e.redirectTo,c=Object(d.a)(e,["allow","message","redirectTo"]);return t||C.a.warning(a||"You have not access to this page"),t?n.a.createElement(s.b,c):n.a.createElement(s.a,{to:r||"/"})};function xe(e){return null!==e.match(/(?=.*(jpeg|jpg|svg|png))/)}var _e=function(e){var t=decodeURIComponent(e.match.params.img),a=Object(r.useState)(!0),c=Object(ie.a)(a,2),o=c[0],s=c[1],i=Object(r.useState)([]),l=Object(ie.a)(i,2),u=l[0],m=l[1];return Object(r.useEffect)((function(){Object(x.a)(j.a.mark((function a(){var r,n;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=C.a.loading("Loading image tags..."),a.prev=1,a.next=4,we(t);case 4:return n=a.sent,m(n),a.next=8,z({img:t,tags:n});case 8:a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),L.a.error({message:a.t0.message||a.t0}),e.history.replace("/new-history");case 14:return a.prev=14,r(),s(!1),a.finish(14);case 18:case"end":return a.stop()}}),a,null,[[1,10,14,18]])})))()}),[t,e.history]),n.a.createElement("section",null,n.a.createElement(he,{img:t,tags:u,loading:o}))},ke=a(406),Se=a(408),Ue=a(128),Ne=a.n(Ue),Ce=function(e){var t=e.file,a=e.imgUrl,r=e.error,c=e.onUpload,o=e.onSubmit,s=e.onChange;return n.a.createElement(b.a,{className:Ne.a.form,onSubmit:o},n.a.createElement("h2",null,"Upload your image"),n.a.createElement("p",null,"You can upload a image or paste a URL of an image"),n.a.createElement(y,{label:"Image URL",name:"imgUrl",placeholder:"Enter Image URL",error:r,value:a,onChange:s}),n.a.createElement(ke.a,null),n.a.createElement(Se.a.Dragger,{accept:".jpg, .jpeg, .png, .svg",className:Ne.a.uploader,name:"image",onChange:c,listType:"picture",fileList:t?[t]:[]},n.a.createElement("p",{className:"ant-upload-drag-icon"},n.a.createElement(m.a,{type:"file-image"})),n.a.createElement("p",{className:"ant-upload-text"},"Click or drag image to this area to upload")),n.a.createElement(p.a,{disabled:!a,type:"primary",shape:"round",size:"large",onClick:o},"Next"))},Le=a(191),De=a.n(Le),Ie="/new-history",Pe=function(e){function t(){var e,a;Object(_.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(S.a)(this,(e=Object(U.a)(t)).call.apply(e,[this].concat(n)))).state={allow:!1,loading:!1,error:"",imgUrl:void 0},a.changeField=function(e){var t,r=e.target,n=r.name,c=r.value;a.setState((t={},Object(R.a)(t,n,c),Object(R.a)(t,"error",""),t))},a.handleSubmit=function(e){e.preventDefault();var t=a.state.imgUrl;if(!t||!xe(t))return a.setState({error:"No valid image URL"});a.setState({allow:!0},(function(){return a.props.history.push("".concat(Ie,"/").concat(encodeURIComponent(t)))}))},a.uploadImage=function(){var e=Object(x.a)(j.a.mark((function e(t){var r,n,c,o,s,i,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("removed"!==(r=t.file).status){e.next=3;break}return e.abrupt("return",a.setState({imgUrl:void 0,file:void 0}));case 3:if(r.originFileObj){e.next=5;break}return e.abrupt("return");case 5:return a.setState({loading:!0}),n=a.state,c=n.loading,o=n.imgUrl,s=!c&&C.a.loading("Image uploading..."),i={loading:!1,imgUrl:o,file:r},e.prev=9,e.next=12,ye(r.originFileObj);case 12:return l=e.sent,e.next=15,u=l,"".concat(M).concat(ve).concat(u);case 15:i.imgUrl=e.sent,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(9),L.a.error({message:e.t0.message||e.t0});case 21:return e.prev=21,a.setState(i,(function(){return!!s&&s()})),e.finish(21);case 24:case"end":return e.stop()}var u}),e,null,[[9,18,21,24]])})));return function(t){return e.apply(this,arguments)}}(),a}return Object(N.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.imgUrl,r=t.error,c=t.file;return n.a.createElement("section",{className:"container"},n.a.createElement(be.a,{current:this.step,className:De.a.steps},n.a.createElement(be.a.Step,{title:"Upload",description:"Select a image."}),n.a.createElement(be.a.Step,{title:"Tags",description:"View information."})),n.a.createElement(s.d,null,n.a.createElement(je,{allow:this.allow,message:"Please upload image",path:"".concat(Ie,"/:img"),redirectTo:Ie,component:_e}),n.a.createElement(s.b,{path:Ie,render:function(){return n.a.createElement(Ce,{imgUrl:a,error:r,onChange:e.changeField,onSubmit:e.handleSubmit,onUpload:e.uploadImage,file:c})}})))}},{key:"allow",get:function(){return this.state.allow||xe(String(this.props.match.params.img))}},{key:"step",get:function(){return this.props.location.pathname===Ie?0:1}}]),t}(r.Component),Re=a(129),Fe=a.n(Re);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(399),a(400),a(401);o.a.render(n.a.createElement((function(){return n.a.createElement(s.c,{history:w},n.a.createElement(i.a,{className:Fe.a.layout},n.a.createElement(h,null),n.a.createElement(i.a.Content,{className:Fe.a.content},n.a.createElement(s.d,null,n.a.createElement(s.b,{path:"/new-history/:img?",component:Pe}),n.a.createElement(s.b,{path:"/:id",component:de}),n.a.createElement(s.b,{path:"/",component:se}))),n.a.createElement(l,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},96:function(e,t,a){e.exports={histories:"styles_histories__38wti",input:"styles_input__PK6Bt",list:"styles_list__2JcD-"}}},[[197,1,2]]]);
//# sourceMappingURL=main.75693329.chunk.js.map