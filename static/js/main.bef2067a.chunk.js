(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){t.exports=n(25)},18:function(t,e,n){},22:function(t,e,n){},24:function(t,e,n){"use strict"},25:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(3),c=n.n(i),r=(n(18),n(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(r.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},4:function(t,e,n){"use strict";(function(t){var a=n(5),o=n(10),i=n(1),c=n(6),r=n(7),s=n(11),u=n(8),d=n(12),l=n(0),m=n.n(l),h=n(9),f=(n(22),n(24),function(t){function e(){var t,n;Object(c.a)(this,e);for(var r=arguments.length,d=new Array(r),l=0;l<r;l++)d[l]=arguments[l];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(d)))).state={nama:"",fullName:"",shortName:"",todos:[],todo:"",page:0,edit:""},n.handleChange=function(t){n.setState(Object(i.a)({},t.target.name,t.target.value))},n.handlePagination=function(){n.setState(function(t){return{page:t.page+1}})},n.handleInput=function(t){"Enter"===t.key&&n.state.todo&&n.setState(function(t){return{todos:Object(o.a)(t.todos).concat([{id:Date.now(),name:t.todo,status:!1,edit:!1}]),todo:""}})},n.handleEdit=function(t){console.log(t),n.setState(function(e){return{todos:e.todos.map(function(e){return e.id===t.id?Object(a.a)({},e,t):e})}})},n}return Object(d.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this;return m.a.createElement("div",{className:"items"},m.a.createElement("div",{className:"items-column"},m.a.createElement("input",{name:"todo",value:this.state.todo,onChange:this.handleChange,onKeyPress:this.handleInput}),m.a.createElement("div",null,this.state.todos.map(function(e){return m.a.createElement("div",{key:e.id,className:"items-content",onDoubleClick:function(){return t.handleEdit({id:e.id,edit:!e.edit})}},e.edit?m.a.createElement("input",{autoFocus:!0,onBlur:function(){return t.handleEdit({id:e.id,edit:!e.edit})}}):m.a.createElement("div",null,e.name))}))))}}]),e}(l.Component));e.a=Object(h.hot)(t)(f)}).call(this,n(20)(t))}},[[13,2,1]]]);
//# sourceMappingURL=main.bef2067a.chunk.js.map