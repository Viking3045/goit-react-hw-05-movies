"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[142],{142:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(439),u=n(791),o=n(87),a=n(689),c=n(184),i=function(){var e=(0,o.lr)(),t=(0,r.Z)(e,2),i=t[0],s=t[1],h=(0,u.useState)([]),l=(0,r.Z)(h,2),f=l[0],m=l[1],p=(0,a.TH)(),d=i.get("query"),j=(0,u.useState)((function(){return d||""})),v=(0,r.Z)(j,2),N=v[0],g=v[1];(0,u.useEffect)((function(){var e=n(359),t="https://api.themoviedb.org/3/search/movie?query=".concat(d,"&include_adult=false&language=en-US&page=1");d&&e(t,{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzFhZjI5NGU3NDk3NjY2M2ZlOTc0NGNhY2Q2MmUyMSIsInN1YiI6IjY0NmY5ZGU3NTQzN2Y1MDEwNTVjZDU4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v0zxkgzjtHk6aWF38KvQBH5xDPkJSmehbRg0QNniLYg"}}).then((function(e){return e.json()})).then((function(e){m(e.results)})).catch((function(e){return console.error("error:"+e)}))}),[d]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s({query:N})},children:[(0,c.jsx)("input",{name:"input",type:"text",autoComplete:"off",onChange:function(e){g(e.target.value)},value:N,autoFocus:!0,placeholder:"Search videos"}),(0,c.jsx)("button",{type:"submit",children:"Search"})]}),(0,c.jsx)("ul",{children:f.length>0&&f.map((function(e){var t=e.title,n=e.id;return(0,c.jsx)("li",{children:(0,c.jsx)(o.rU,{to:"/movies/".concat(n),state:{from:p},children:t})},n)}))})]})},s=function(){return(0,c.jsx)(i,{})}}}]);
//# sourceMappingURL=142.c67022cf.chunk.js.map