(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{32:function(e,t,a){e.exports=a(80)},37:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),o=a.n(r),i=(a(37),a(6)),l=a.n(i),s=a(8),m=a(4),d=a(20),u=a.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),f=(a(56),a(57),a(21)),v=a(24),p=a.n(v),h=a(25),g=a.n(h),_=function(e){var t=e.backdrop_path,a=e.title,r=e.overview,o=e.name,i=e.release_date,l=e.first_air_date,s=e.vote_average,d=e.setModalVisibility,u=Object(n.useState)(""),v=Object(m.a)(u,2),h=v[0],_=v[1];return Object(n.useEffect)((function(){h?_(""):p()(a||o||"").then((function(e){var t=new URLSearchParams(new URL(e).search);_(t.get("v"))})).catch((function(e){return console.log(e)}))}),[]),c.a.createElement("div",{className:"presentation",role:"presentation"},c.a.createElement("div",{className:"wrapper-modal"},c.a.createElement("div",{className:"modal"},c.a.createElement("span",{onClick:function(){return d(!1)},className:"modal-close"},c.a.createElement(g.a,null)),h?c.a.createElement(f.a,{videoId:h,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}):c.a.createElement("img",{className:"modal__poster-img",src:"".concat("https://image.tmdb.org/t/p/original/").concat(t)}),c.a.createElement("div",{className:"modal__content"},c.a.createElement("p",{className:"modal__details"},c.a.createElement("span",{className:"modal__user-perc"},Math.floor(100*Math.random()),"% for you")," ",i||l),c.a.createElement("h2",{className:"modal__title"},a||o),c.a.createElement("p",{className:"modal__overview"},r),c.a.createElement("p",{className:"modal__overview"},"Vote Average: ",s)))))},E=a(28),b=a.n(E),w=a(27),N=a.n(w),k=function(e){var t=e.title,a=e.fetchUrl,r=e.isLargeRow,o=e.id,i=Object(n.useState)([]),d=Object(m.a)(i,2),f=d[0],v=d[1],p=Object(n.useState)(!1),h=Object(m.a)(p,2),g=h[0],E=h[1],w=Object(n.useState)({}),k=Object(m.a)(w,2),y=k[0],M=k[1];Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get(a);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]);return c.a.createElement("section",{className:"row"},c.a.createElement("h2",null,t),c.a.createElement("div",{class:"slider"},c.a.createElement("div",{className:"slider__arrow-left"},c.a.createElement("span",{className:"arrow",onClick:function(){document.getElementById(o).scrollLeft-=window.innerWidth-80}},c.a.createElement(N.a,null))),c.a.createElement("div",{id:o,className:"row__posters"},f.map((function(e){return c.a.createElement("img",{key:e.id,onClick:function(){return function(e){E(!0),M(e)}(e)},className:"row__poster ".concat(r&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),loading:"lazy",alt:e.name})}))),c.a.createElement("div",{className:"slider__arrow-right"},c.a.createElement("span",{className:"arrow",onClick:function(){document.getElementById(o).scrollLeft+=window.innerWidth-80}},c.a.createElement(b.a,null)))),g&&c.a.createElement(_,Object.assign({},y,{setModalVisibility:E})))},y=a(29),M=a.n(y),O=a(30),j=a.n(O),R="896c8566fc255f7c52f6ea6bd2901188",x={fetchNetflixOriginals:"/discover/tv?api_key=".concat(R,"&with_networks=213"),fetchTrending:"/trending/all/week?api_key=".concat(R,"&language=en-US"),fetchTopRated:"/movie/top_rated?api_key=".concat(R,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(R,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(R,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(R,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(R,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(R,"&with_genres=99")},U=(a(76),function(){var e,t,a=Object(n.useState)([]),r=Object(m.a)(a,2),o=r[0],i=r[1];return Object(n.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get(x.fetchNetflixOriginals);case 2:return t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),c.a.createElement("header",{className:"banner",style:{backgroundImage:'url(\n                    "https://image.tmdb.org/t/p/original/'.concat(null===o||void 0===o?void 0:o.backdrop_path,'"\n                    )'),backgroundPosition:"top center",backgroundSize:"cover"}},c.a.createElement("div",{className:"banner__contents"},c.a.createElement("h1",{className:"banner__title"},(null===o||void 0===o?void 0:o.title)||(null===o||void 0===o?void 0:o.name)||(null===o||void 0===o?void 0:o.original_name)),c.a.createElement("div",{className:"banner__buttons"},c.a.createElement("button",{className:"banner__button play"},c.a.createElement(M.a,null),"Play"),c.a.createElement("button",{className:"banner__button info"},c.a.createElement(j.a,{fontSize:"small",paddingRight:20,marginRight:100}),c.a.createElement("div",{className:"space"})," More Information")),c.a.createElement("h1",{className:"banner__description"},(e=null===o||void 0===o?void 0:o.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),c.a.createElement("div",{className:"banner--fadeBottom"}))}),S=(a(77),function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>50?r(!0):r(!1)})),function(){window.removeEventListener("scroll",(function(){}))}}),[]),c.a.createElement("nav",{className:"nav ".concat(a&&"nav__black")},c.a.createElement("img",{alt:"Netflix logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png",className:"nav__logo"}),c.a.createElement("img",{alt:"User logged",src:"https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png",className:"nav__avatar"}))}),L=(a(78),function(){return c.a.createElement("div",{className:"app"},c.a.createElement(S,null),c.a.createElement(U,null),c.a.createElement(k,{title:"NETFLIX ORIGINALS",id:"NO",fetchUrl:x.fetchNetflixOriginals,isLargeRow:!0}),c.a.createElement(k,{title:"Trending Now",id:"TN",fetchUrl:x.fetchTrending}),c.a.createElement(k,{title:"Top Rated",id:"TR",fetchUrl:x.fetchTopRated}),c.a.createElement(k,{title:"Action Movies",id:"AM",fetchUrl:x.fetchActionMovies}),c.a.createElement(k,{title:"Comedy Movies",id:"CM",fetchUrl:x.fetchComedyMovies}),c.a.createElement(k,{title:"Horror Movies",id:"HM",fetchUrl:x.fetchHorrorMovies}),c.a.createElement(k,{title:"Romance  Movies",id:"RM",fetchUrl:x.fetchRomanceMovies}),c.a.createElement(k,{title:"Documentaries",id:"DM",fetchUrl:x.fetchDocumentaries}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.bfa4e40a.chunk.js.map