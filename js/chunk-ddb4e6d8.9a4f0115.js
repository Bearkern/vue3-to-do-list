(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ddb4e6d8"],{"0cb2":function(e,t,n){var r=n("e330"),a=n("7b0b"),c=Math.floor,o=r("".charAt),s=r("".replace),i=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,d,f){var p=n+e.length,g=r.length,b=l;return void 0!==d&&(d=a(d),b=u),s(f,b,(function(a,s){var u;switch(o(s,0)){case"$":return"$";case"&":return e;case"`":return i(t,0,n);case"'":return i(t,p);case"<":u=d[i(s,1,-1)];break;default:var l=+s;if(0===l)return a;if(l>g){var f=c(l/10);return 0===f?a:f<=g?void 0===r[f-1]?o(s,1):r[f-1]+o(s,1):a}u=r[l-1]}return void 0===u?"":u}))}},"107c":function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp;e.exports=r((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),c=n("825a"),o=n("1626"),s=n("c6b6"),i=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(o(n)){var r=a(n,e,t);return null!==r&&c(r),r}if("RegExp"===s(e))return a(i,e,t);throw u("RegExp#exec called on incompatible receiver")}},5319:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),c=n("e330"),o=n("d784"),s=n("d039"),i=n("825a"),u=n("1626"),l=n("5926"),d=n("50c4"),f=n("577e"),p=n("1d80"),g=n("8aa5"),b=n("dc4a"),v=n("0cb2"),m=n("14c3"),x=n("b622"),h=x("replace"),O=Math.max,j=Math.min,k=c([].concat),w=c([].push),I=c("".indexOf),y=c("".slice),$=function(e){return void 0===e?e:String(e)},E=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[h]&&""===/./[h]("a","$0")}(),R=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var c=S?"$":"$0";return[function(e,n){var r=p(this),c=void 0==e?void 0:b(e,h);return c?a(c,e,r,n):a(t,f(r),e,n)},function(e,a){var o=i(this),s=f(e);if("string"==typeof a&&-1===I(a,c)&&-1===I(a,"$<")){var p=n(t,o,s,a);if(p.done)return p.value}var b=u(a);b||(a=f(a));var x=o.global;if(x){var h=o.unicode;o.lastIndex=0}var E=[];while(1){var S=m(o,s);if(null===S)break;if(w(E,S),!x)break;var R=f(S[0]);""===R&&(o.lastIndex=g(s,d(o.lastIndex),h))}for(var U="",T=0,A=0;A<E.length;A++){S=E[A];for(var C=f(S[0]),M=O(j(l(S.index),s.length),0),V=[],_=1;_<S.length;_++)w(V,$(S[_]));var q=S.groups;if(b){var N=k([C],V,M,s);void 0!==q&&w(N,q);var B=f(r(a,void 0,N))}else B=v(C,s,M,V,q,a);M>=T&&(U+=y(s,T,M)+B,T=M+C.length)}return U+y(s,T)}]}),!R||!E||S)},"5c9c":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"container"},c=Object(r["g"])("h3",null,"註冊帳號",-1),o={class:"mb-2"},s=Object(r["g"])("label",{for:"email",class:"form-label"},"email",-1),i={class:"mb-2"},u=Object(r["g"])("label",{for:"nickname",class:"form-label"},"暱稱",-1),l={class:"mb-2"},d=Object(r["g"])("label",{for:"password",class:"form-label"},"密碼",-1),f={key:0},p={class:"text-danger"},g=Object(r["g"])("div",{class:"text-end"},[Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"註冊")],-1);function b(e,t,n,b,v,m){var x=Object(r["C"])("Field"),h=Object(r["C"])("ErrorMessage"),O=Object(r["C"])("Form");return Object(r["w"])(),Object(r["f"])("div",a,[Object(r["i"])(O,{class:"offset-md-4 col-md-4 mt-4",onSubmit:m.signUp},{default:Object(r["M"])((function(e){var n=e.errors;return[c,Object(r["g"])("div",o,[s,Object(r["i"])(x,{id:"email",name:"email",type:"email",class:Object(r["q"])(["form-control",{"is-invalid":n["email"]}]),placeholder:"請輸入 email",rules:"email|required",modelValue:v.user.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return v.user.email=e})},null,8,["class","modelValue"]),Object(r["i"])(h,{name:"email",class:"invalid-feedback"})]),Object(r["g"])("div",i,[u,Object(r["N"])(Object(r["g"])("input",{id:"nickname",name:"nickname",type:"input",class:"form-control",placeholder:"請輸入暱稱","onUpdate:modelValue":t[1]||(t[1]=function(e){return v.user.nickname=e})},null,512),[[r["I"],v.user.nickname]])]),Object(r["g"])("div",l,[d,Object(r["i"])(x,{id:"password",name:"password",type:"password",class:Object(r["q"])(["form-control",{"is-invalid":n["password"]}]),placeholder:"請輸入密碼",rules:"required",modelValue:v.user.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return v.user.password=e})},null,8,["class","modelValue"]),Object(r["i"])(h,{name:"password",class:"invalid-feedback"})]),v.errorSignUp.length?(Object(r["w"])(),Object(r["f"])("ul",f,[(Object(r["w"])(!0),Object(r["f"])(r["a"],null,Object(r["B"])(v.errorSignUp,(function(e,t){return Object(r["w"])(),Object(r["f"])("li",{key:t},[Object(r["g"])("p",p,Object(r["F"])(e),1)])})),128))])):Object(r["e"])("",!0),g]})),_:1},8,["onSubmit"])])}n("99af");var v=n("d282"),m=v["a"].signUp,x={data:function(){return{user:{email:"",nickname:"",password:""},errorSignUp:[]}},methods:{signUp:function(){var e=this;m(this.user).then((function(t){e.$httpMessageState(t,"註冊"),e.$router.push("/signIn")})).catch((function(t){e.errorSignUp=e.errorSignUp.concat(t.response.data.error),e.$httpMessageState(t.response,"註冊")}))}}},h=n("6b0d"),O=n.n(h);const j=O()(x,[["render",b]]);t["default"]=j},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("c65b"),a=n("e330"),c=n("577e"),o=n("ad6d"),s=n("9f7f"),i=n("5692"),u=n("7c73"),l=n("69f3").get,d=n("fce3"),f=n("107c"),p=i("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,b=g,v=a("".charAt),m=a("".indexOf),x=a("".replace),h=a("".slice),O=function(){var e=/a/,t=/b*/g;return r(g,e,"a"),r(g,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),j=s.BROKEN_CARET,k=void 0!==/()??/.exec("")[1],w=O||k||j||d||f;w&&(b=function(e){var t,n,a,s,i,d,f,w=this,I=l(w),y=c(e),$=I.raw;if($)return $.lastIndex=w.lastIndex,t=r(b,$,y),w.lastIndex=$.lastIndex,t;var E=I.groups,S=j&&w.sticky,R=r(o,w),U=w.source,T=0,A=y;if(S&&(R=x(R,"y",""),-1===m(R,"g")&&(R+="g"),A=h(y,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==v(y,w.lastIndex-1))&&(U="(?: "+U+")",A=" "+A,T++),n=new RegExp("^(?:"+U+")",R)),k&&(n=new RegExp("^"+U+"$(?!\\s)",R)),O&&(a=w.lastIndex),s=r(g,S?n:w,A),S?s?(s.input=h(s.input,T),s[0]=h(s[0],T),s.index=w.lastIndex,w.lastIndex+=s[0].length):w.lastIndex=0:O&&s&&(w.lastIndex=w.global?s.index+s[0].length:a),k&&s&&s.length>1&&r(p,s[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(s[i]=void 0)})),s&&E)for(s.groups=d=u(null),i=0;i<E.length;i++)f=E[i],d[f[0]]=s[f[1]];return s}),e.exports=b},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp,o=r((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),s=o||r((function(){return!c("a","y").sticky})),i=o||r((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:i,MISSED_STICKY:s,UNSUPPORTED_Y:o}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d282:function(e,t,n){"use strict";n("ac1f"),n("5319");var r=n("bc3a"),a=n.n(r),c=a.a.create({baseURL:"https://todoo.5xcamp.us"}),o=document.cookie.replace(/(?:(?:^|.*;\s*)toDoToken\s*=\s*([^;]*).*$)|^.*$/,"$1");c.defaults.headers.common.Authorization=o;var s=c,i=function(e){var t=e.email,n=e.nickname,r=e.password;return s({method:"post",url:"/users",data:{user:{email:t,nickname:n,password:r}}})},u=function(e){var t=e.email,n=e.password;return s({method:"post",url:"/users/sign_in",data:{user:{email:t,password:n}}})},l=function(){return s({method:"get",url:"/check"})},d=function(){return s({method:"delete",url:"/users/sign_out"})},f=function(){return s({method:"get",url:"/todos"})},p=function(e){return s({method:"post",url:"/todos",data:{todo:{content:e}}})},g=function(e){return s({method:"patch",url:"/todos/".concat(e,"/toggle")})},b=function(e){var t=e.id,n=e.content;return s({method:"put",url:"/todos/".concat(t),data:{todo:{content:n}}})},v=function(e){return s({method:"delete",url:"/todos/".concat(e)})};t["a"]={signUp:i,signIn:u,checkAuth:l,signOut:d,getTasks:f,addTask:p,toggleCompleteState:g,updateTask:b,deleteTask:v}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("cb2d"),c=n("9263"),o=n("d039"),s=n("b622"),i=n("9112"),u=s("species"),l=RegExp.prototype;e.exports=function(e,t,n,d){var f=s(e),p=!o((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),g=p&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!p||!g||n){var b=r(/./[f]),v=t(f,""[e],(function(e,t,n,a,o){var s=r(e),i=t.exec;return i===c||i===l.exec?p&&!o?{done:!0,value:b(t,n,a)}:{done:!0,value:s(n,t,a)}:{done:!1}}));a(String.prototype,e,v[0]),a(l,f,v[1])}d&&i(l[f],"sham",!0)}},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp;e.exports=r((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-ddb4e6d8.9a4f0115.js.map