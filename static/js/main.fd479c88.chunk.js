(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{108:function(n,t,e){},109:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(16),c=e.n(a),i=e(11),u=e(17),s=e(18),l=e(22),m=e(19),b=e(23),f=e(20),d={light:{mainBGColor:"snow",contentColor:"#1d2bcc",mainShadowBox:"0px 2px 8px -3px rgba(0, 0, 0, 0.75)",inputColor:"snow",messageColor:"black"},dark:{mainBGColor:"#333333",contentColor:"#ccc",mainShadowBox:"0px 0px 8px 1px rgba(255, 255, 255, 0.75)",inputColor:"#e0e0e0",messageColor:"#ccc"}},h=Object(r.createContext)(d.light),p=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(l.a)(this,(n=Object(m.a)(t)).call.apply(n,[this].concat(o)))).toggleTheme=function(){var n=e.state,t=n.theme,r=n.config;e.setState({theme:"dark"===t?"light":"dark",config:r===d.light?d.dark:d.light})},e.state={theme:"light",toggleTheme:e.toggleTheme,config:d.light},e}return Object(b.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this.props.children;return o.a.createElement(h.Provider,{value:Object(f.a)({},this.state)},n)}}]),t}(r.Component);p.Consumer=h.Consumer;var g=p,v=e(25),C=e.n(v),j=e(6),O=Object(j.b)("contacts/fetchExistRequest"),E=Object(j.b)("contacts/fetchExistSuccess"),x=Object(j.b)("contacts/fetchExistError"),w={addContactRequest:Object(j.b)("contacts/addRequest"),addContactSuccess:Object(j.b)("contacts/addSuccess"),addContactError:Object(j.b)("contacts/addError"),fetchExistContactsRequest:O,fetchExistContactsSuccess:E,fetchExistContactsError:x,removeContactRequest:Object(j.b)("contacts/removeRequest"),removeContactSuccess:Object(j.b)("contacts/removeSuccess"),removeContactError:Object(j.b)("contacts/removeError"),changeFilter:Object(j.b)("filter/change")};C.a.defaults.baseURL="http://localhost:2000";var k={addContact:function(n){var t=n.name,e=n.number;return function(n){n(w.addContactRequest()),C.a.post("/contacts",{name:t,number:e}).then((function(t){var e=t.data;n(w.addContactSuccess(e))})).catch((function(t){return n(w.addContactError(t))}))}},fetchExistContacts:function(){return function(n){n(w.fetchExistContactsRequest()),C.a.get("/contacts").then((function(t){var e=t.data;n(w.fetchExistContactsSuccess(e))})).catch((function(t){return n(w.fetchExistContactsError(t))}))}},removeContact:function(n){return function(t){t(w.removeContactRequest()),C.a.delete("/contacts/".concat(7)).then((function(){t(w.removeContactSuccess(n))})).catch((function(n){t(w.removeContactError(n.messege))}))}}},y=e(44),S=function(n){return n.contacts.items},_=function(n){return n.contacts.filter},N={getLoading:function(n){return n.contacts.loading},getContacts:S,getFilter:_,getError:function(n){return n.contacts.error},getVisibleContacts:Object(y.a)([S,_],(function(n,t){return n.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}))})),getTaskById:Object(y.a)([function(n,t){return t},S],(function(n,t){return t.find((function(t){return t.id===n}))}))},R=e(1),A=e(2),q=function(n){return function(t){return o.a.createElement(g.Consumer,null,(function(e){return o.a.createElement(n,Object.assign({},t,{theme:e}))}))}};function B(){var n=Object(R.a)(["\n  font-size: 2.2rem;\n  width: 100%;\n  margin-top: 0.4rem;\n  padding: 1.4rem 1.2rem 1.2rem;\n  border-radius: 0.6rem;\n  background-color: ",";\n\n  &:focus {\n    border-color: #1d2bcc;\n  }\n"]);return B=function(){return n},n}function z(){var n=Object(R.a)(["\n  font-size: 2rem;\n  cursor: pointer;\n"]);return z=function(){return n},n}function T(){var n=Object(R.a)(["\n  margin-bottom: 3rem;\n  max-width: 54rem;\n  box-shadow: ",";\n  padding: 1.4rem 1.6rem;\n  background-color: snow;\n"]);return T=function(){return n},n}var F=A.b.div(T(),(function(n){return n.shadow})),G=A.b.label(z()),L=A.b.input(B(),(function(n){return n.backGroundColor}));var I={onChangeFilter:w.changeFilter},X=Object(i.b)(null,I)(q((function(n){var t=n.value,e=n.onChangeFilter,r=n.theme;return o.a.createElement(F,{shadow:r.config.mainShadowBox},o.a.createElement(G,null,"Find contacts by name",o.a.createElement(L,{backGroundColor:r.config.inputColor,type:"text",value:t,onChange:function(n){var t=n.target.value;return e(t)}})))})));function V(){var n=Object(R.a)(["\n  margin: 0 auto;\n  max-width: 56rem;\n"]);return V=function(){return n},n}function D(){var n=Object(R.a)(["\n  padding-top: 3rem;\n  width: 100%;\n  height: 100vh;\n  background-color: ",";\n"]);return D=function(){return n},n}var Y=A.b.div(D(),(function(n){return n.color})),J=A.b.div(V()),P=q((function(n){var t=n.children,e=n.theme;return o.a.createElement(Y,{color:e.config.mainBGColor},o.a.createElement(J,null,t))})),H=e(56),M=e(110),U=e(52),$=e.n(U);function K(){var n=Object(R.a)(["\n  display: inline-block;\n  margin: 0 auto;\n  color: snow;\n  padding: 1.4rem;\n  font-size: 3rem;\n"]);return K=function(){return n},n}function Q(){var n=Object(R.a)(["\n  background-color: red;\n  border-radius: 0.8rem;\n  position: fixed;\n  top: 5rem;\n  right: 0;\n"]);return Q=function(){return n},n}var W=A.b.div(Q()),Z=A.b.p(K());var nn=function(n){var t=n.message,e=n.apearNotice;return o.a.createElement(M.a,{timeout:250,classNames:$.a,in:e,unmountOnExit:!0},o.a.createElement(W,null,o.a.createElement(Z,null,t)))};function tn(){var n=Object(R.a)(["\n  color: red;\n  font-size: 2rem;\n  margin-top: -2rem;\n  margin-bottom: 2rem;\n"]);return tn=function(){return n},n}function en(){var n=Object(R.a)(["\n  display: block;\n  font-size: 2rem;\n  margin: 0 auto;\n  width: 100%;\n  padding: 1.8rem;\n  border-radius: 1rem;\n  background-color: #1d2bcc;\n  cursor: pointer;\n  color: snow;\n\n  &:hover,\n  &:focus {\n    background-color: #404fff;\n    color: snow;\n    border-color: #333333;\n    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);\n    outline: none;\n  }\n\n  &:active {\n    background-color: #7883ff;\n  }\n"]);return en=function(){return n},n}function rn(){var n=Object(R.a)(["\n      border: 0.3rem solid red;\n    "]);return rn=function(){return n},n}function on(){var n=Object(R.a)(["\n      border: 0.3rem solid lightgreen;\n    "]);return on=function(){return n},n}function an(){var n=Object(R.a)(["\n  font-size: 2.2rem;\n  width: 100%;\n  margin-bottom: 2rem;\n  padding: 1.4rem 1.2rem 1.2rem;\n  border-radius: 0.6rem;\n  background-color: ",";\n\n  &:focus {\n    border-color: #1d2bcc;\n  }\n\n  ","\n  ","\n"]);return an=function(){return n},n}function cn(){var n=Object(R.a)(["\n      color: red;\n    "]);return cn=function(){return n},n}function un(){var n=Object(R.a)(["\n  font-size: 2.4rem;\n  cursor: pointer;\n  ","\n"]);return un=function(){return n},n}function sn(){var n=Object(R.a)(["\n  margin-bottom: 3.4rem;\n  max-width: 54rem;\n  box-shadow: ",";\n  padding: 1.4rem 1.6rem;\n  display: flex;\n  flex-flow: column wrap;\n  justify-content: center;\n  background-color: snow;\n"]);return sn=function(){return n},n}var ln=A.b.form(sn(),(function(n){return n.shadow})),mn=A.b.label(un(),(function(n){return n.error&&Object(A.a)(cn())})),bn=A.b.input(an(),(function(n){return n.backGroundColor}),(function(n){return n.isValid&&Object(A.a)(on())}),(function(n){return n.error&&Object(A.a)(rn())})),fn=A.b.button(en()),dn=A.b.div(tn()),hn=function(n){function t(){var n,e;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=Object(l.a)(this,(n=Object(m.a)(t)).call.apply(n,[this].concat(o)))).state={apearNotice:!1,notice:null},e.addContact=function(n,t){var r=e.props,o=r.contacts,a=r.onAddContact;if(o.find((function(t){return n===t.name})))return e.setState({notice:"".concat(n," is already in contacts"),apearNotice:!0}),setTimeout((function(){return e.setState({apearNotice:!1})}),2400);if(!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g.test(t))return e.setState({notice:"Hey! This is not a real number :)",apearNotice:!0}),setTimeout((function(){return e.setState({apearNotice:!1})}),2400);a({name:n,number:t})},e}return Object(b.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this,t=this.state,e=t.notice,r=t.apearNotice,a=t.hasError,c=this.props.theme;return o.a.createElement(o.a.Fragment,null,o.a.createElement(nn,{message:e,apearNotice:r}),a&&o.a.createElement(nn,{message:a,apearNotice:!0}),o.a.createElement(H.a,{initialValues:{name:"",number:""},validate:function(n){var t={};return n.name||(t.name=o.a.createElement(dn,null,"Name is Required")),t},onSubmit:function(t,e){var r=e.setSubmitting,o=e.resetForm;n.addContact(t.name,t.number),r(!1),o()}},(function(n){var t=n.values,e=n.errors,r=n.touched,a=n.handleChange,i=n.handleBlur,u=n.handleSubmit,s=n.isSubmitting;return o.a.createElement(ln,{onSubmit:u,shadow:c.config.mainShadowBox},e.name?o.a.createElement(mn,{error:!0},"Name",o.a.createElement(bn,{error:!0,type:"text",name:"name",backGroundColor:c.config.inputColor,onChange:a,onBlur:i,value:t.name}),e.name&&r.name&&e.name):o.a.createElement(mn,null,"Name",r.name?o.a.createElement(bn,{isValid:!0,type:"text",name:"name",backGroundColor:c.config.inputColor,onChange:a,onBlur:i,value:t.name}):o.a.createElement(bn,{type:"text",name:"name",backGroundColor:c.config.inputColor,onChange:a,onBlur:i,value:t.name}),e.name&&r.name&&e.name),o.a.createElement(mn,null,"Number",o.a.createElement(bn,{type:"tel",name:"number",backGroundColor:c.config.inputColor,onChange:a,onBlur:i,value:t.number}),e.number&&r.number&&e.number),o.a.createElement(fn,{type:"submit",disabled:s},"Add contact"))})))}}]),t}(r.Component),pn={onAddContact:k.addContact},gn=Object(i.b)((function(n){return{contacts:N.getContacts(n),hasError:N.getError(n)}}),pn)(q(hn)),vn=e(111);function Cn(){var n=Object(R.a)(["\n  font-size: 3rem;\n  color: ",";\n"]);return Cn=function(){return n},n}var jn=A.b.p(Cn(),(function(n){return n.color})),On=q((function(n){var t=n.message,e=n.theme;return o.a.createElement(jn,{color:e.config.messageColor},t)}));function En(){var n=Object(R.a)(["\n  display: inline-block;\n  border: none;\n  font-size: 3rem;\n  flex-basis: 8%;\n  height: 3.8rem;\n  border-radius: 0.4rem;\n  background-color: #e82a2a;\n  cursor: pointer;\n  color: snow;\n\n  &:hover,\n  &:focus {\n    background-color: #b80000;\n    outline: none;\n  }\n\n  &:active {\n    background-color: #ff8080;\n  }\n"]);return En=function(){return n},n}function xn(){var n=Object(R.a)(["\n  font-size: 2rem;\n  flex-basis: 36%;\n"]);return xn=function(){return n},n}function wn(){var n=Object(R.a)(["\n  font-size: 2rem;\n  flex-basis: 52%;\n"]);return wn=function(){return n},n}function kn(){var n=Object(R.a)(["\n  max-width: 54rem;\n  box-shadow: ",";\n  padding: 1.8rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background-color: snow;\n  margin-bottom: 0.6rem;\n\n  &:last-of-type {\n    margin-bottom: none;\n  }\n"]);return kn=function(){return n},n}var yn=A.b.li(kn(),(function(n){return n.shadow})),Sn=A.b.p(wn()),_n=A.b.p(xn()),Nn=A.b.button(En());var Rn=Object(i.b)((function(n,t){return Object(f.a)({},N.getTaskById(n,t.id))}),(function(n,t){return{onRemoveContact:function(){return n(k.removeContact(t.id))}}}))(q((function(n){var t=n.name,e=n.number,r=n.onRemoveContact,a=n.theme;return o.a.createElement(yn,{shadow:a.config.mainShadowBox},o.a.createElement(Sn,null,t)," ",o.a.createElement(_n,null,e),o.a.createElement(Nn,{type:"button",onClick:r},"\xd7"))}))),An=e(53),qn=e.n(An);function Bn(){var n=Object(R.a)(["\n  margin-bottom: 3rem;\n"]);return Bn=function(){return n},n}var zn=A.b.ul(Bn());var Tn=Object(i.b)((function(n){return{contacts:N.getContacts(n),visibleContacts:N.getVisibleContacts(n)}}))((function(n){var t=n.contacts,e=n.visibleContacts;return o.a.createElement(o.a.Fragment,null,o.a.createElement(vn.a,{component:zn},e.map((function(n){var t=n.id;return o.a.createElement(M.a,{key:t,timeout:250,classNames:qn.a},o.a.createElement(Rn,{id:t}))}))),0===t.length&&o.a.createElement(On,{message:"You have no contacts. Add some :)"}),t.length>1&&0===e.length&&o.a.createElement(On,{message:"No contacts found :("}))})),Fn=e(54),Gn=e.n(Fn);function Ln(){var n=Object(R.a)(["\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border-radius: 34px;\n\n  &:before {\n    position: absolute;\n    content: '';\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.4s;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n\n  input:checked + & {\n    background-color: #2196f3;\n  }\n\n  input:focus + & {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  input:checked + &:before {\n    transform: translateX(26px);\n  }\n"]);return Ln=function(){return n},n}function In(){var n=Object(R.a)(["\n  display: none;\n"]);return In=function(){return n},n}function Xn(){var n=Object(R.a)(["\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n"]);return Xn=function(){return n},n}function Vn(){var n=Object(R.a)(["\n  top: -10px;\n  position: relative;\n  padding: 0px 10px;\n  font-size: 2.2rem;\n  font-weight: 500;\n  color: ",";\n"]);return Vn=function(){return n},n}function Dn(){var n=Object(R.a)(["\n  font-size: 4rem;\n  margin-bottom: 2rem;\n  color: ",";\n"]);return Dn=function(){return n},n}function Yn(){var n=Object(R.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return Yn=function(){return n},n}var Jn=A.b.header(Yn()),Pn=A.b.h1(Dn(),(function(n){return n.color})),Hn=A.b.span(Vn(),(function(n){return n.color})),Mn=A.b.label(Xn()),Un=A.b.input(In()),$n=A.b.span(Ln());var Kn=q((function(n){var t=n.text,e=n.theme;return o.a.createElement(Jn,null,o.a.createElement(M.a,{timeout:500,classNames:Object(f.a)({},Gn.a),in:!0,appear:!0},o.a.createElement(Pn,{color:e.config.contentColor},t)),o.a.createElement("div",null,o.a.createElement(Hn,{color:e.config.contentColor},"Theme: ","light"===e.theme?"Light":"Dark"),o.a.createElement(Mn,null,o.a.createElement(Un,{type:"checkbox",checked:"light"===e.theme,onChange:e.toggleTheme}),o.a.createElement($n,null))))})),Qn=e(55),Wn=e.n(Qn);e(107);function Zn(){var n=Object(R.a)(["\n  background-color: rgba(0, 0, 0, 0.7);\n  top: 30%;\n  left: 50%;\n  transform: translateX(-50%);\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  z-index: 1100;\n  width: 18rem;\n  height: 18rem;\n  pointer-events: none;\n"]);return Zn=function(){return n},n}var nt=A.b.div(Zn());var tt,et,rt,ot=function(){return o.a.createElement(nt,null,o.a.createElement(Wn.a,{type:"ThreeDots",color:"#ff1212",height:144,width:144}))},at=(e(108),function(n){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){return(0,this.props.onFetchExistContacts)()}},{key:"render",value:function(){var n=this.props,t=n.contacts,e=n.isLoadingContacts;return o.a.createElement(g,null,o.a.createElement(P,null,e&&o.a.createElement(ot,null),o.a.createElement(Kn,{text:"Phonebook"}),o.a.createElement(gn,null),t.length>=2&&o.a.createElement(X,null),o.a.createElement(Tn,null)))}}]),t}(r.Component)),ct={onFetchExistContacts:k.fetchExistContacts},it=Object(i.b)((function(n){return{contacts:N.getContacts(n),isLoadingContacts:N.getLoading(n)}}),ct)(at),ut=e(4),st=e(57),lt=e(10),mt=Object(j.c)([],(tt={},Object(ut.a)(tt,w.fetchExistContactsSuccess,(function(n,t){return t.payload})),Object(ut.a)(tt,w.addContactSuccess,(function(n,t){var e=t.payload;return[].concat(Object(st.a)(n),[e])})),Object(ut.a)(tt,w.removeContactSuccess,(function(n,t){var e=t.payload;return n.filter((function(n){return n.id!==e}))})),tt)),bt=Object(j.c)("",Object(ut.a)({},w.changeFilter,(function(n,t){return t.payload}))),ft=Object(j.c)(!1,(et={},Object(ut.a)(et,w.fetchExistContactsRequest,(function(){return!0})),Object(ut.a)(et,w.fetchExistContactsSuccess,(function(){return!1})),Object(ut.a)(et,w.fetchExistContactsError,(function(){return!1})),Object(ut.a)(et,w.addContactRequest,(function(){return!0})),Object(ut.a)(et,w.addContactSuccess,(function(){return!1})),Object(ut.a)(et,w.addContactError,(function(){return!1})),Object(ut.a)(et,w.removeContactRequest,(function(){return!0})),Object(ut.a)(et,w.removeContactSuccess,(function(){return!1})),Object(ut.a)(et,w.removeContactError,(function(){return!1})),et)),dt=Object(j.c)(null,(rt={},Object(ut.a)(rt,w.fetchExistContactsError,(function(n,t){return t.payload})),Object(ut.a)(rt,w.addContactError,(function(n,t){return t.payload})),Object(ut.a)(rt,w.removeContactError,(function(n,t){return t.payload})),Object(ut.a)(rt,w.fetchExistContactsRequest,(function(){return null})),Object(ut.a)(rt,w.addContactRequest,(function(){return null})),Object(ut.a)(rt,w.removeContactRequest,(function(){return null})),rt)),ht=Object(lt.combineReducers)({items:mt,filter:bt,loading:ft,error:dt}),pt=Object(j.a)({reducer:{contacts:ht}});c.a.render(o.a.createElement(i.a,{store:pt},o.a.createElement(it,null)),document.querySelector("#root"))},52:function(n,t,e){n.exports={enter:"slideNotice_enter__2sg6c",enterActive:"slideNotice_enterActive__CciNB",exit:"slideNotice_exit__3arY9",exitActive:"slideNotice_exitActive__3ydbD"}},53:function(n,t,e){n.exports={enter:"slideItem_enter__2AXv2",enterActive:"slideItem_enterActive__cX91w",exit:"slideItem_exit__2XS_0",exitActive:"slideItem_exitActive__2LYlY"}},54:function(n,t,e){n.exports={appear:"slideTitle_appear__29OAn",appearActive:"slideTitle_appearActive__XpJ25"}},60:function(n,t,e){n.exports=e(109)}},[[60,1,2]]]);
//# sourceMappingURL=main.fd479c88.chunk.js.map