(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/logo.0fce8a33.svg"},23:function(e,t,a){e.exports=a.p+"static/media/success.e38b395c.svg"},24:function(e,t,a){e.exports=a.p+"static/media/failure.4072126c.svg"},27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(20),r=a.n(c),i=(a(32),a(25)),l=a(1),s=a(2),u=a(4),p=a(21),m=a.n(p),_="/",d="/sign-up",f="/sign-in";var h=function(e){var t=e.email;return o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/404",exact:!0}),o.a.createElement(s.b,{path:"*"},o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:m.a,alt:"\u041c\u0435\u0441\u0442\u043e \u0420\u043e\u0441\u0441\u0438\u044f"}),o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/sign-up"},o.a.createElement(u.b,{className:"header__button",to:f},"\u0412\u043e\u0439\u0442\u0438")),o.a.createElement(s.b,{path:"/sign-in"},o.a.createElement(u.b,{className:"header__button",to:d},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),o.a.createElement(s.b,{path:"/",exact:!0},o.a.createElement("div",{className:"header__user"},o.a.createElement("p",{className:"header__email"},t),o.a.createElement(u.b,{className:"header__button",to:f,onClick:function(){localStorage.setItem("jwt","")}},"\u0412\u044b\u0439\u0442\u0438")))))))},b=o.a.createContext();var E=function(e){var t=e.card,a=e.onClick,n=e.onCardLike,c=e.onCardDelete,r=o.a.useContext(b),i=t.owner._id===r._id,l=t.likes.some((function(e){return e._id===r._id})),s="card__btn-delete ".concat(i?"":"card__btn-delete_invis"),u="card__btn-like ".concat(l?"card__btn-like_active":"");return o.a.createElement("li",{className:"card"},o.a.createElement("img",{className:"card__image",src:t.link,alt:t.name,onClick:function(){a(t)}}),o.a.createElement("button",{type:"button",className:s,onClick:function(){c(t)}}),o.a.createElement("div",{className:"card__text"},o.a.createElement("p",{className:"card__title"},t.name),o.a.createElement("div",{className:"card__like"},o.a.createElement("button",{type:"button",className:u,onClick:function(){n(t)}}),o.a.createElement("p",{className:"card__number-likes"},t.likes.length))))};var v=function(e){var t=Object(n.useContext)(b);return o.a.createElement(o.a.Fragment,null,o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("button",{className:"profile__btn profile__btn_avatar",onClick:e.onEditAvatar},o.a.createElement("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},t.name),o.a.createElement("button",{type:"button",className:"profile__btn profile__btn_edit",onClick:e.onEditProfile}),o.a.createElement("p",{className:"profile__job"},t.about)),o.a.createElement("button",{type:"button",className:"profile__btn profile__btn_add",onClick:e.onAddPlace})),o.a.createElement("section",{className:"place"},o.a.createElement("ul",{className:"place__list"},e.cards.map((function(t){return o.a.createElement(E,{card:t,key:t._id,onClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})}))))))};var g=function(){return o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/404",exact:!0}),o.a.createElement(s.b,{path:"*"},o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__text"},"\xa9 2020 Mesto Russia"))))};var N=function(e){var t=e.card,a=e.onClose,n=e.isOpen&&"popup_opened";return o.a.createElement("div",{className:"popup popup_type_photo ".concat(n)},o.a.createElement("div",{className:"popup__container_photo"},o.a.createElement("img",{className:"popup__picture",src:t?t.link:"#",alt:t?t.name:""}),o.a.createElement("h3",{className:"popup__caption"},t?t.name:""),o.a.createElement("button",{type:"button",className:"popup__close",onClick:function(){a()}})))};var k=function(e){return o.a.createElement("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":"")},o.a.createElement("div",{className:"popup__container popup__container_".concat(e.name)},o.a.createElement("h3",{className:"popup__title"},e.title),o.a.createElement("form",{className:"popup__form",name:e.name,noValidate:!0,onSubmit:e.onSubmit},e.children,o.a.createElement("button",{type:"submit",className:"popup__button"},e.button_text)),o.a.createElement("button",{type:"button",className:"popup__close",onClick:e.onClose})))};var C=function(e){var t=Object(n.useContext)(b),a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(""),u=Object(l.a)(s,2),p=u[0],m=u[1];return Object(n.useEffect)((function(){i(t.name),m(t.about)}),[t]),o.a.createElement(k,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button_text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:r,about:p}),t.target.reset()}},o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{name:"name",type:"text",placeholder:"\u0418\u043c\u044f",className:"popup__input popup__input_name",maxLength:"40",minLength:"2",id:"name",value:r||"",onChange:function(e){i(e.target.value)},required:!0}),o.a.createElement("span",{className:"popup__error",id:"name-error"})),o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{name:"job",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input popup__input_job",maxLength:"200",minLength:"2",id:"job",value:p||"",onChange:function(e){m(e.target.value)},required:!0}),o.a.createElement("span",{className:"popup__error",id:"job-error"})))};var O=function(e){var t=Object(n.useRef)();return o.a.createElement(k,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button_text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar(t.current.value),a.target.reset()}},o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{name:"avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__input",id:"avatar",required:!0,ref:t}),o.a.createElement("span",{className:"popup__error",id:"avatar-error"})))},y=a(12),j=a(13),S=new(function(){function e(t){var a=t.serverUrl,n=t.authorization;Object(y.a)(this,e),this._serverUrl=a,this._authorization=n}return Object(j.a)(e,[{key:"_fetch",value:function(e,t){return fetch(this._serverUrl+e,t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return this._fetch("/users/me",{method:"GET",headers:{authorization:this._authorization}})}},{key:"setUserInfo",value:function(e){return this._fetch("/users/me",{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})})}},{key:"setUserAvatar",value:function(e){return this._fetch("/users/me/avatar",{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})})}},{key:"getInitialCards",value:function(){return this._fetch("/cards",{method:"GET",headers:{authorization:this._authorization}})}},{key:"createCard",value:function(e){return this._fetch("/cards",{method:"POST",headers:{authorization:this._authorization,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return this._fetch("/cards/".concat(e),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}})}},{key:"createLike",value:function(e){return this._fetch("/cards/likes/".concat(e),{method:"PUT",headers:{authorization:this._authorization,"Content-Type":"application/json"}})}},{key:"deleteLike",value:function(e){return this._fetch("/cards/likes/".concat(e),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}})}},{key:"changeLikeCardStatus",value:function(e,t){return this._fetch("/cards/likes/".concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._authorization,"Content-Type":"application/json"}})}}]),e}())({serverUrl:"https://mesto.nomoreparties.co/v1/cohort-14",authorization:"7a3dfd49-072e-4055-86f4-4cec12a9c522"});var x=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),u=s[0],p=s[1];return o.a.createElement(k,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button_text:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClose:e.onClose,isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:u})}},o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{name:"name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_mesto",maxLength:"30",minLength:"1",id:"mesto",required:!0,value:c,onChange:function(e){r(e.target.value)}}),o.a.createElement("span",{className:"popup__error",id:"mesto-error"})),o.a.createElement("label",{className:"popup__field"},o.a.createElement("input",{name:"src",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_src",id:"src",required:!0,value:u,onChange:function(e){p(e.target.value)}}),o.a.createElement("span",{className:"popup__error",id:"src-error"})))};var T=function(e){var t=e.card,a=e.isOpen,n=e.onClose,c=e.onDeleteCard;return o.a.createElement(k,{name:"verification",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",button_text:"\u0414\u0410",isOpen:a,onClose:n,onSubmit:function(e){e.preventDefault(),c(t)}})},L=a(26),z=function(e){var t=e.component,a=Object(L.a)(e,["component"]);return o.a.createElement(s.b,null,(function(){return a.loggedIn?o.a.createElement(t,a):o.a.createElement(s.a,{to:"/sign-up"})}))},U=a(23),w=a.n(U),P=a(24),A=a.n(P);var D=function(e){var t=e.isOpen,a=e.onClose,n=e.loged,c=t&&"popup_opened";return o.a.createElement("div",{className:"popup popup_type_info ".concat(c)},o.a.createElement("div",{className:"popup__container popup__container_info"},o.a.createElement("img",{className:"popup__image",src:n?w.a:A.a,alt:"\u041e\u0442\u0432\u0435\u0442 \u043e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430"}),o.a.createElement("h3",{className:"popup__title popup__title_login"},n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."),o.a.createElement("button",{type:"button",className:"popup__close",onClick:function(){a()}})))};var I=function(e){var t=e.title,a=e.link,c=e.buttonName,r=e.text,i=e.linkText,s=e.onSubmit,p=Object(n.useState)(""),m=Object(l.a)(p,2),_=m[0],d=m[1],f=Object(n.useState)(""),h=Object(l.a)(f,2),b=h[0],E=h[1];return o.a.createElement("form",{className:"entry",noValidate:!0},o.a.createElement("h2",{className:"entry__title"},t),o.a.createElement("label",{className:"entry__field"},o.a.createElement("input",{name:"email",type:"email",placeholder:"Email",className:"entry__input entry__input_email",maxLength:"40",minLength:"2",id:"email",value:_,onChange:function(e){d(e.target.value)},required:!0}),o.a.createElement("span",{className:"entry__error",id:"email-error"})),o.a.createElement("label",{className:"entry__field"},o.a.createElement("input",{name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"entry__input entry__input_name",maxLength:"40",minLength:"2",id:"password",value:b,onChange:function(e){E(e.target.value)},required:!0}),o.a.createElement("span",{className:"entry__error",id:"password-error"})),o.a.createElement("button",{type:"button",className:"entry__button",onClick:function(){s(b,_)}},c),o.a.createElement("p",{className:"entry__text"},r,o.a.createElement(u.b,{className:"link",to:a},i)))};var q=function(e){var t=e.onRegister;return o.a.createElement(I,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",buttonName:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",text:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",link:f,linkText:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e,a){t(e,a)}})};var J=function(e){var t=e.onLogin;return o.a.createElement(I,{title:"\u0412\u0445\u043e\u0434",buttonName:"\u0412\u043e\u0439\u0442\u0438",text:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",link:d,linkText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(e,a){t(e,a)}})},R=new(function(){function e(t){var a=t.serverUrl;Object(y.a)(this,e),this._serverUrl=a}return Object(j.a)(e,[{key:"_fetch",value:function(e,t){return fetch(this._serverUrl+e,t).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getToken",value:function(e){return this._fetch("/users/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}})}},{key:"login",value:function(e,t){return this._fetch("/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})})}},{key:"register",value:function(e,t){return this._fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})})}}]),e}())({serverUrl:"https://auth.nomoreparties.co"});var G=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),u=Object(l.a)(r,2),p=u[0],m=u[1],E=Object(n.useState)(!1),k=Object(l.a)(E,2),y=k[0],j=k[1],L=Object(n.useState)(!1),U=Object(l.a)(L,2),w=U[0],P=U[1],A=Object(n.useState)(!1),I=Object(l.a)(A,2),G=I[0],B=I[1],H=Object(n.useState)(null),M=Object(l.a)(H,2),V=M[0],F=M[1],K=Object(n.useState)(""),Q=Object(l.a)(K,2),W=Q[0],X=Q[1],Y=Object(n.useState)([]),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(n.useState)(!1),ae=Object(l.a)(te,2),ne=ae[0],oe=ae[1],ce=Object(n.useState)(!0),re=Object(l.a)(ce,2),ie=re[0],le=re[1],se=Object(n.useState)(""),ue=Object(l.a)(se,2),pe=ue[0],me=ue[1],_e=o.a.useState(!1),de=Object(l.a)(_e,2),fe=de[0],he=de[1],be=Object(s.g)();Object(n.useEffect)((function(){var e=localStorage.getItem("jwt");e&&R.getToken(e).then((function(e){oe(!0),me(e.data.email),be.push("/")})).catch((function(e){401===e?console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d"):console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[be]),Object(n.useEffect)((function(){ne&&S.getUserInfo().then((function(e){X(e)})).catch((function(e){console.log("\u0414\u0430\u043d\u043d\u044b\u0435 \u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b. ".concat(e))}))}),[ne]),Object(n.useEffect)((function(){ne&&S.getInitialCards().then((function(e){ee(e)})).catch((function(e){console.log("\u0414\u0430\u043d\u043d\u044b\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b. ".concat(e))}))}),[ne]);var Ee=function(e){"Escape"===e.key&&Ne()},ve=function(e){e.target.classList.contains("popup")&&Ne()},ge=function(){document.addEventListener("keydown",Ee),document.addEventListener("click",ve)},Ne=function(){c(!1),m(!1),j(!1),P(!1),B(!1),he(!1),document.removeEventListener("keydown",Ee),document.removeEventListener("click",ve)};return o.a.createElement(b.Provider,{value:W},o.a.createElement("div",{className:"page"},o.a.createElement(h,{email:pe,login:ne}),o.a.createElement(s.d,null,o.a.createElement(s.b,{path:d},o.a.createElement(q,{onRegister:function(e,t){R.register(e,t).then((function(){le(!0),he(!0),ge(),be.push("/sign-in")})).catch((function(e){return 400===e?(le(!1),he(!0),ge(),console.log("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")):(le(!1),he(!0),ge(),console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e)))}))}})),o.a.createElement(s.b,{path:f},o.a.createElement(J,{onLogin:function(e,t){R.login(e,t).then((function(e){localStorage.setItem("jwt",e.token),R.getToken(e.token).then((function(e){me(e.data.email),oe(!0),be.push("/")})).catch((function(e){401===e?console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d"):console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e)),le(!1),he(!0),ge()}))})).catch((function(e){return 400===e?console.log("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e?console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"):console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}})),o.a.createElement(z,{exact:!0,path:_,loggedIn:ne,component:v,cards:$,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===W._id}));S.changeLikeCardStatus(e._id,!t).then((function(t){var a=$.map((function(a){return a._id===e._id?t:a}));ee(a)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043b\u0430\u0439\u043a\u0430. ".concat(e))}))},onCardDelete:function(e){P(!0),F(e),ge()},onEditAvatar:function(){c(!0),ge()},onEditProfile:function(){m(!0),ge()},onAddPlace:function(){j(!0),ge()},onCardClick:function(e){B(!0),F(e),ge()}}),o.a.createElement(s.b,{path:"*"},ne?o.a.createElement(s.a,{to:_}):o.a.createElement(s.a,{to:f}))),o.a.createElement(g,null),o.a.createElement(C,{isOpen:p,onClose:Ne,onUpdateUser:function(e){S.setUserInfo(e).then((function(e){X(e),Ne()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. ".concat(e))})).finally((function(){}))}}),o.a.createElement(O,{isOpen:a,onClose:Ne,onUpdateAvatar:function(e){S.setUserAvatar(e).then((function(e){X(e),Ne()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0430\u0432\u0430\u0442\u0430\u0440\u0430. ".concat(e))})).finally((function(){}))}}),o.a.createElement(x,{isOpen:y,onClose:Ne,onAddPlace:function(e){S.createCard(e).then((function(e){ee([e].concat(Object(i.a)($))),Ne()})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438. ".concat(e))})).finally((function(){}))}}),o.a.createElement(N,{isOpen:G,card:V,onClose:Ne}),o.a.createElement(T,{isOpen:w,onClose:Ne,onDeleteCard:function(e){S.deleteCard(e._id).then((function(){var t=$.filter((function(t){return t._id!==e._id}));ee(t),Ne()})).catch((function(e){console.log("\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e. ".concat(e))}))},card:V}),o.a.createElement(D,{isOpen:fe,onClose:Ne,loged:ie})))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(u.a,null,o.a.createElement(G,null))),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.bd13ab05.chunk.js.map