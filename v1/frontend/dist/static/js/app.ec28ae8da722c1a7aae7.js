webpackJsonp([1],{"2hEQ":function(e,t){},"3J76":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTciIGhlaWdodD0iNzYiIHZpZXdCb3g9IjAgMCAxOTcgNzYiPgogICAgPGRlZnM+CiAgICAgICAgPHN0eWxlPi5he2ZpbGw6I2VlYzU0ODt9PC9zdHlsZT4KICAgIDwvZGVmcz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOCAtMjYpIj4KICAgICAgICA8cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjE5NyIgaGVpZ2h0PSI3NiIgcng9IjEzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOCAyNikiLz4KICAgICAgICA8cGF0aCBkPSJNMi4xMyw2OFYyNy44SDE2LjA1VjY4Wm0xNy41MiwwVjI3LjhoMjAuN2wzLjEyLDE1LjM2TDQ2LjA1LDI3LjhoMjEuM1Y2OEg1My40M1Y0Ny4zaC0uNjZMNDkuMjksNjcuNThIMzcuNjVMMzQuMjMsNDcuM2gtLjY2VjY4Wk02OS42OSwzOS4xNFYyNy44aDMwVjM5LjE0aC03LjhWNjhINzcuOTdWMzkuMTRaTTExOS42Nyw2OEgxMDIuMDlWMjcuOGgxNi45OHExMC4zOCwwLDE0Ljk0LDQuNjh0NC41NiwxNC45N3EwLDEwLjI5LTQuMzgsMTUuNDJUMTE5LjY3LDY4Wm00Ljg2LTE5Ljg2cTAtNS40LTEuMTEtNy4ydC00Ljk1LTEuOGgtMi40NlY1Ni42NmgyLjQ2YTYuMTQzLDYuMTQzLDAsMCwwLDQuNjItMS41NlExMjQuNTMsNTMuNTQsMTI0LjUzLDQ4LjE0Wm0zNi4zLTExLjIycTExLjg4LDAsMTEuODgsMTUuNDIsMCw5LjI0LTMuNTQsMTIuODR0LTEyLjksMy42YTExOS4wMTIsMTE5LjAxMiwwLDAsMS0xMi40Mi0xLjAybC0yLjctLjM2VjI2LjZoMTMuNDRWMzcuODhBMjguMjQ0LDI4LjI0NCwwLDAsMSwxNjAuODMsMzYuOTJabS00LjMyLDIxcTIuNjQsMCwyLjY0LTUuMjhhOC4zODYsOC4zODYsMCwwLDAtLjYtMy44NCwyLjE3MywyLjE3MywwLDAsMC0yLjA0LTEuMDJsLTEuOTIuNDJ2OS41NEE4LjcsOC43LDAsMCwwLDE1Ni41MSw1Ny45MloiCiAgICAgICAgICAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDkuNSAxNykiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},"992I":function(e,t){},G58c:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App",created:function(){var e=this;this.$store.dispatch("tryAutoLogin").then(function(t){t&&e.$router.push({name:"movies"})}),this.$store.dispatch("getMovies")}},a,!1,function(e){s("P+L9")},null,null).exports,o=s("Dd8w"),i=s.n(o),c=s("NYxO"),u={computed:i()({},Object(c.c)(["loggedIn"])),methods:{navigateToHome:function(){this.$router.push("/")}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"header__logo"},[n("img",{staticClass:"logo",attrs:{src:s("3J76"),alt:""},on:{click:e.navigateToHome}})]),e._v(" "),n("div",{staticClass:"header__title"},[n("h2",[e._t("default")],2)]),e._v(" "),n("ul",{staticClass:"header-menu"},[e.loggedIn?e._e():n("li",{staticClass:"header-menu__item"},[n("router-link",{attrs:{tag:"a",to:{name:"signUp"}}},[e._v("Sign Up")])],1),e._v(" "),e.loggedIn?e._e():n("li",{staticClass:"header-menu__item"},[n("router-link",{attrs:{tag:"a",to:{name:"login"}}},[e._v("Login")])],1),e._v(" "),e.loggedIn?n("li",{staticClass:"header-menu__item"},[n("router-link",{attrs:{tag:"a",to:{name:"profile"}}},[e._v("Profile")])],1):e._e(),e._v(" "),e.loggedIn?n("li",{staticClass:"header-menu__item"},[n("router-link",{attrs:{tag:"a",to:{name:"logout"}}},[e._v("Logout")])],1):e._e()])])},staticRenderFns:[]};var m=s("VU/8")(u,l,!1,function(e){s("Q7Cv")},"data-v-76fe3d53",null).exports,v=s("/ocq"),d={data:function(){return{imdbId:this.$route.params.imdbId}},methods:i()({},Object(c.b)(["getMovie"])),computed:i()({},Object(c.c)(["currentMovie"])),name:"movie-detail",mounted:function(){this.getMovie(this.imdbId)}},g={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-header"),e._v(" "),s("section",{staticClass:"cta__container"},[s("router-link",{attrs:{tag:"button",to:{name:"movies"}}},[e._v("Show all movies")]),e._v(" "),s("h3",[e._v(e._s(e.currentMovie.title))])],1),e._v(" "),s("main",{staticClass:"movies"},[s("img",{attrs:{src:e.currentMovie.image}}),e._v(" "),s("dl",[s("dt",[e._v("Title")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.title))]),e._v(" "),s("dt",[e._v("Genre")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.type))]),e._v(" "),s("dt",[e._v("Year")]),e._v(" "),s("dd",[e._v(e._s(e.currentMovie.year))])]),e._v(" "),s("div",[e._v(e._s(e.currentMovie.description))])])],1)},staticRenderFns:[]};var p=s("VU/8")(d,g,!1,function(e){s("Wgkl")},"data-v-3574444a",null).exports,_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"search-movie"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputVal,expression:"inputVal"}],staticClass:"search-movie__input",attrs:{placeholder:"Search for a movie"},domProps:{value:e.inputVal},on:{input:function(t){t.target.composing||(e.inputVal=t.target.value)}}}),e._v(" "),s("button",{staticClass:"search-movie__button"},[e._v("Search")])])},staticRenderFns:[]};var h=s("VU/8")({name:"search-movie",props:["value"],data:function(){return{inputVal:this.value}},watch:{inputVal:function(e){this.$emit("input",e)}}},_,!1,function(e){s("s9PG")},"data-v-58fc4990",null).exports,f={name:"movieItem",props:["movie"],computed:i()({},Object(c.c)(["loggedIn"]))},M={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("div",{staticClass:"movie__image-container"},[n("div",{staticClass:"movie__image-box"},[n("router-link",{attrs:{tag:"a",to:{name:"movie",params:{imdbId:e.movie.imdb}}}},[e.movie.image?n("img",{staticClass:"movie__image",attrs:{src:e.movie.image,alt:e.movie.image}}):e._e(),e._v(" "),e.movie.image?e._e():n("img",{staticClass:"movie__image",attrs:{src:s("ba0r"),alt:"No movie image available"}})])],1)]),e._v(" "),n("div",{staticClass:"movie__details"},[n("h3",[e._v(e._s(e.movie.title))]),e._v(" "),n("p",[e._v(e._s(e.movie.description))]),e._v(" "),e.loggedIn?n("router-link",{attrs:{tag:"button",to:{name:"movie",params:{imdbId:e.movie.imdb}}}},[e._v("more...\n    ")]):e._e()],1)])},staticRenderFns:[]};var C=s("VU/8")(f,M,!1,function(e){s("SvQt")},"data-v-5666c444",null).exports,I={name:"Movies",data:function(){return{movies:[],searchValue:"",searchResults:[]}},watch:{searchValue:function(e){this.checkSearch(e)}},methods:i()({},Object(c.b)(["searchMovie"]),{checkSearch:function(e){this.searchResults=[],e.length>1&&this.searchMovie(e)}}),components:{"search-movie":h,"movie-item":C},computed:i()({},Object(c.c)(["loggedIn","getMovies","getSearchedMovies"]))},w={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"movies"},[s("v-header",[e._v("All Movies")]),e._v(" "),s("section",{staticClass:"cta__container"},[e.loggedIn?s("hr"):e._e(),e._v(" "),e.loggedIn?s("search-movie",{staticClass:"search-movie",model:{value:e.searchValue,callback:function(t){e.searchValue=t},expression:"searchValue"}}):e._e()],1),e._v(" "),s("main",{staticClass:"movies"},[s("ul",[e._l(e.getMovies,function(t,n){return e.searchValue?e._e():s("movie-item",{key:n,attrs:{movie:t}})}),e._v(" "),e._l(e.getSearchedMovies,function(t,n){return e.searchValue&&e.getSearchedMovies.length>0?s("movie-item",{key:n,attrs:{movie:t}}):e._e()})],2),e._v(" "),e.searchValue&&0===e.getSearchedMovies.length?s("div",[e._v("No search results!")]):e._e()])],1)},staticRenderFns:[]};var N=s("VU/8")(I,w,!1,function(e){s("992I")},"data-v-78732ea2",null).exports,L={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"home"},[t("v-header",[this._v("Movies")]),this._v(" "),t("section",{staticClass:"cta__container"},[t("hr"),this._v(" "),t("router-link",{attrs:{tag:"button",to:"movies"}},[this._v("List all movies")])],1),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"sneek-preview"},[t("div",{staticClass:"sneek-preview__container"},[t("h3",[this._v("Coming soon:")]),this._v(" "),t("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/Vm4tx1O9GAc",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}]};var j=s("VU/8")({name:"Home"},L,!1,function(e){s("2hEQ")},"data-v-d45af454",null).exports,b={name:"Login",data:function(){return{msg:"Welcome to Your Vue.js App",loginUrl:"http://localhost:8080/v1/proxy/tokens/",userName:"",password:""}},methods:i()({},Object(c.b)(["loginWithCredentials"]),{login:function(){var e=this,t={username:this.userName,password:this.password};this.$store.dispatch("loginWithCredentials",t).then(function(t){t?e.$router.push({name:"movies"}):e.$router.push({name:"loginFailed"})})}})},x={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("v-header",[e._v("Login")]),e._v(" "),s("form",[s("section",{staticClass:"cta__container"},[s("hr"),e._v(" "),s("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"login__username",attrs:{type:"text",id:"username"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"username"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login__password",attrs:{type:"password",autocomplete:"off",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("button",{staticClass:"login__submit",on:{click:function(t){return t.preventDefault(),e.login(t)}}},[e._v("Submit")])])])],1)},staticRenderFns:[]};var y=s("VU/8")(b,x,!1,function(e){s("QK1D")},"data-v-f10b8094",null).exports,S={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login"},[t("v-header",[this._v("Login Failed")]),this._v(" "),t("section",{staticClass:"cta__container"},[t("hr"),this._v(" "),t("router-link",{attrs:{tag:"button",to:{name:"login"}}},[this._v("Retry")]),this._v(" "),t("h2",[this._v("Login Failed")])],1)],1)},staticRenderFns:[]};var U=s("VU/8")({name:"Login-Failed",data:function(){return{}}},S,!1,function(e){s("jnbn")},"data-v-3c1d74c0",null).exports,k={name:"Logout",computed:i()({},Object(c.c)(["loggedIn"])),methods:i()({},Object(c.b)(["logOut"])),mounted:function(){this.logOut()&&this.$router.push("/")}},E={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"logout"},[s("v-header"),e._v(" "),s("section",{staticClass:"cta__container"},[e.loggedIn?s("p",[e._v("Hello, still logged in..")]):e._e(),e._v(" "),e.loggedIn?e._e():s("p",[e._v("You are successfully logged out.")])])],1)},staticRenderFns:[]},D=s("VU/8")(k,E,!1,null,null,null).exports,T={name:"SignUp",data:function(){return{userName:"",password:"",confirmPassword:""}},computed:{canSubmit:function(){return this.confirmPassword===this.password&&!!this.password&&!!this.confirmPassword&&this.userName.length>3}},methods:i()({},Object(c.b)(["signUp"]),{signUpWithCredentials:function(){var e=this,t={username:this.userName,password:this.password};this.$store.dispatch("signUp",t).then(function(t){t?e.$router.push({name:"signUpSuccess",params:{userName:e.userName}}):e.$router.push({name:"loginFailed"})})}})},A={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("v-header",[e._v("Sign Up")]),e._v(" "),s("form",[s("section",{staticClass:"login__container"},[s("hr"),e._v(" "),s("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"login__username",attrs:{type:"text",id:"username"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login__password",attrs:{type:"password",id:"password",autocomplete:"off"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),s("label",{attrs:{for:"repeat-password"}},[e._v("Repeat Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],staticClass:"login__password",attrs:{type:"password",id:"repeat-password",autocomplete:"off"},domProps:{value:e.confirmPassword},on:{input:function(t){t.target.composing||(e.confirmPassword=t.target.value)}}}),e._v(" "),s("button",{staticClass:"login__submit",class:{"login__submit--disabled":!e.canSubmit},attrs:{disabled:!e.canSubmit},on:{click:function(t){return t.preventDefault(),e.signUpWithCredentials(t)}}},[e._v("Sign Up\n      ")])])])],1)},staticRenderFns:[]};var O=s("VU/8")(T,A,!1,function(e){s("y+11")},"data-v-c686a892",null).exports,z={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("v-header",[e._v("Successfull Created a user")]),e._v(" "),s("section",{staticClass:"cta__container"},[s("hr"),e._v(" "),s("router-link",{attrs:{tag:"button",to:{name:"login"}}},[e._v("Login")]),e._v(" "),s("h2",[e._v("Created user")])],1),e._v(" "),s("main",{staticClass:"movies"},[s("dl",[s("dt",[e._v("Name")]),e._v(" "),s("dd",[e._v(e._s(this.userName))])])])],1)},staticRenderFns:[]};var V=s("VU/8")({name:"Signup-Success",data:function(){return{userName:this.$route.params.userName}}},z,!1,function(e){s("G58c")},"data-v-7e7d6388",null).exports,P={name:"UserProfile",computed:i()({},Object(c.c)(["currentUser"]))},Y={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-profile"},[s("v-header",[e._v("User Profile")]),e._v(" "),s("section",{staticClass:"cta__container"},[s("router-link",{attrs:{tag:"button",to:{name:"movies"}}},[e._v("Show all movies")]),e._v(" "),s("h2",[e._v("Profile settings of: "+e._s(e.currentUser.name))])],1),e._v(" "),s("main",{staticClass:"movies"},[s("dl",[s("dt",[e._v("Name")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.name))]),e._v(" "),s("dt",[e._v("ID")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.id))]),e._v(" "),s("dt",[e._v("Is Logged in")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.isLoggedIn))]),e._v(" "),s("dt",[e._v("Session Expires")]),e._v(" "),s("dd",[e._v(e._s(e.currentUser.sessionExpires))])])])],1)},staticRenderFns:[]};var R=s("VU/8")(P,Y,!1,function(e){s("ir5x")},"data-v-d0b36b26",null).exports,$=s("mvHQ"),F=s.n($),Q=s("mtWM"),W=s.n(Q),H={logOut:function(e){var t=e.state;return t.token=null,t.loggedIn=!!t.token,localStorage.setItem("token",null),localStorage.setItem("userId",null),localStorage.setItem("expirationDate",null),!0},loginWithCredentials:function(e,t){var s=e.commit,n=e.state,a={responseType:"json",withCredentials:!0},r={username:t.username,password:t.password,id:1};return W.a.get(n.proxyUrl+n.usersUri+t.username).then(function(e){return r.id=e.data.id,W.a.post(n.proxyUrl+n.loginUri,r,a).then(function(e){var t=e.data.access_token,n=new Date(Date.now()+1e3*e.data.expires_in);return s("setToken",{token:t,userId:r.id,userName:r.username,loginExpires:n}),localStorage.setItem("token",F()(t)),localStorage.setItem("userId",F()(r.id)),localStorage.setItem("userName",F()(r.username)),localStorage.setItem("expirationDate",F()(n)),!0}).catch(function(e){return console.error(e),!1})}).catch(function(e){return console.error(e),!1})},tryAutoLogin:function(e){var t=e.commit,s=JSON.parse(localStorage.getItem("token"));if(!s)return!1;var n=JSON.parse(localStorage.getItem("expirationDate"));if(new Date>=n)return!1;var a=JSON.parse(localStorage.getItem("userId")),r=JSON.parse(localStorage.getItem("userName"));return t("setToken",{token:s,userId:a}),t("setToken",{token:s,userId:a,userName:r,loginExpires:n}),!0},getMovies:function(e){var t=e.commit,s=e.state;W.a.create({baseURL:s.proxyUrl,timeout:5e3,headers:{Authorization:"Bearer "+s.token,"Content-Type":"application/json"}}).get(""+s.moviesUri).then(function(e){return t("setMovies",e.data),!0}).catch(function(e){return console.error(e),!1})},getMovie:function(e,t){var s=e.commit,n=e.state;W.a.create({baseURL:n.proxyUrl,timeout:5e3,headers:{Authorization:"Bearer "+n.token,"Content-Type":"application/json"}}).get(""+(n.moviesUri+t)).then(function(e){return s("setCurrentMovie",e.data),!0}).catch(function(e){return console.error(e),!1})},searchMovie:function(e,t){var s=e.commit,n=e.state;W.a.create({baseURL:n.proxyUrl,timeout:5e3,headers:{Authorization:"Bearer "+n.token,"Content-Type":"application/json"},params:{query:t}}).get(n.moviesUri+"searches").then(function(e){return s("setSearchedMovies",e.data),!0}).catch(function(e){return s("setSearchedMovies",[]),404!==e.response.status&&console.error(e),!1})},signUp:function(e,t){var s=e.state,n={username:t.username,password:t.password};return W.a.post(s.proxyUrl+s.usersUri,n,{responseType:"json",withCredentials:!0}).then(function(){return!0}).catch(function(e){return console.error(e),!1})}};n.a.use(c.a);var G=new c.a.Store({state:{token:"",userId:null,userName:null,proxyUrl:"http://localhost:8080",loginUri:"/v1/proxy/tokens/",usersUri:"/v1/proxy/users/",moviesUri:"/v1/proxy/movies/",loggedIn:!1,loginExpires:null,currentMovie:{},movies:[],searchedMovies:[]},mutations:{setToken:function(e,t){e.token=t.token,e.loggedIn=!!t.token,e.userId=t.userId,e.userName=t.userName,e.loginExpires=t.loginExpires},setCurrentMovie:function(e,t){e.currentMovie=t},setMovies:function(e,t){e.movies=t},setSearchedMovies:function(e,t){e.searchedMovies=t}},actions:H,getters:{token:function(e){return e.token},loggedIn:function(e){return e.loggedIn},currentMovie:function(e){return e.currentMovie},currentUser:function(e){return{id:e.userId,name:e.userName,isLoggedIn:e.loggedIn,sessionExpires:e.loginExpires}},getMovies:function(e){return e.movies},getSearchedMovies:function(e){return e.searchedMovies}}});n.a.use(v.a);var J=new v.a({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:j},{path:"/movies",name:"movies",component:N,meta:{requiresAuth:!1}},{path:"/:imdbId/movie",component:p,name:"movie",meta:{requiresAuth:!0},props:!0},{path:"/login",name:"login",component:y},{path:"/login-failed",name:"loginFailed",component:U},{path:"/logout",name:"logout",component:D},{path:"/signup",name:"signUp",component:O},{path:"/profile",name:"profile",component:R},{path:"/signupsuccess/:userName",name:"signUpSuccess",component:V}]});J.beforeEach(function(e,t,s){if(e.matched.some(function(e){return e.meta.requiresAuth})){if(G.getters.loggedIn)return void s();s("/")}else s()});var Z=J;n.a.config.productionTip=!1,n.a.component("v-header",m),new n.a({el:"#app",router:Z,store:G,components:{App:r},template:"<App/>"})},"P+L9":function(e,t){},Q7Cv:function(e,t){},QK1D:function(e,t){},SvQt:function(e,t){},Wgkl:function(e,t){},ba0r:function(e,t,s){e.exports=s.p+"static/img/no-poster.ccba1b0.png"},ir5x:function(e,t){},jnbn:function(e,t){},s9PG:function(e,t){},"y+11":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ec28ae8da722c1a7aae7.js.map