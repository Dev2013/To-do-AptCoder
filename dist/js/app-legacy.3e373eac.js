(function(){"use strict";var t={1520:function(t,e,o){o(6992),o(8674),o(9601),o(7727);var n=o(9963),i=o(6252),d=o(3577),r={id:"app"},a={class:"main"},s={class:"todo-list"},l={class:"flex"},u=["onClick"],c={class:"todo empty"};function f(t,e,o,f,m,h){var p=(0,i.up)("Header"),g=(0,i.up)("TodoItem"),v=(0,i.up)("TaskForm"),w=(0,i.up)("Pagination"),T=(0,i.up)("TodoTabs"),y=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(p),(0,i._)("main",null,[(0,i.wy)((0,i._)("section",a,[(0,i._)("ul",s,[(0,i._)("li",l,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.columns,(function(t){return(0,i.wg)(),(0,i.iD)("div",{key:t.column,onClick:function(e){return h.sortBy(t.column)},class:(0,d.C_)(["title",{selected:m.sortedBy===t.column,asc:"asc"===m.sorted,desc:"desc"===m.sorted,time:"date"===t.column}])},(0,d.zw)(t.title),11,u)})),128))]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(h.paginatedTodos,(function(t){return(0,i.wg)(),(0,i.iD)("li",{class:"todo",key:t.id},[(0,i.Wm)(g,{id:t.id,"edited-todo":m.editedTodo,onTodoEdit:function(e){return h.editTodo(t)},onTodoEditDone:function(e){return h.doneEdit(t)},onTodoEditCancel:function(e){return h.cancelEdit(t)}},null,8,["id","edited-todo","onTodoEdit","onTodoEditDone","onTodoEditCancel"])])})),128)),(0,i.wy)((0,i._)("li",c," No tasks yet :c ",512),[[n.F8,!h.paginatedTodos.length]])])],512),[[n.F8,h.todos.length]]),(0,i.Wm)(v,{onTodoNew:h.addTodo},null,8,["onTodoNew"]),(0,i.Wm)(w,{length:h.filteredTodos.length,limit:m.limit,page:m.currentPage,onPagePrev:h.prevPage,onPageNext:h.nextPage},null,8,["length","limit","page","onPagePrev","onPageNext"]),(0,i.Wm)(T,{todos:h.todos,visibility:m.visibility,remaining:h.remaining},null,8,["todos","visibility","remaining"]),(0,i.wy)((0,i._)("button",{class:"clear-completed",onClick:e[0]||(e[0]=function(){return h.removeCompleted&&h.removeCompleted.apply(h,arguments)})}," [ Clear completed tasks ] ",512),[[n.F8,h.todos.length>h.remaining]]),(0,i.Wm)(y)])])}o(7327),o(1539),o(4916),o(5306);var m={class:"flex"},h=(0,i._)("div",{class:"left"},"TODO List",-1),p=(0,i._)("div",{class:"right"},"Apt Coder Assignment",-1),g=[h,p];function v(t,e,o,n,d,r){return(0,i.wg)(),(0,i.iD)("header",m,g)}var w={name:"AppHeader"},T=o(3744);const y=(0,T.Z)(w,[["render",v]]);var k=y;function _(t,e,o,r,a,s){var l=(0,i.up)("Checkbox"),u=(0,i.up)("Timer");return(0,i.wg)(),(0,i.iD)("div",{class:(0,d.C_)(["task",{completed:a.todo.completed,editing:s.editing}])},[(0,i._)("form",{class:"flex",onSubmit:e[8]||(e[8]=(0,n.iM)((function(t){return s.doneEdit(a.todo)}),["prevent"]))},[(0,i.wy)((0,i._)("input",{type:"button",onClick:e[0]||(e[0]=function(t){return s.cancelEdit(a.todo)}),value:"Cancel"},null,512),[[n.F8,s.editing]]),(0,i.wy)((0,i.Wm)(l,{modelValue:a.todo.completed,"onUpdate:modelValue":e[1]||(e[1]=function(t){return a.todo.completed=t})},null,8,["modelValue"]),[[n.F8,!s.editing]]),(0,i.wy)((0,i._)("label",{onClick:e[2]||(e[2]=function(t){return s.editTodo(a.todo)})},(0,d.zw)(a.todo.title),513),[[n.F8,!s.editing]]),(0,i.wy)((0,i.Wm)(u,{date:a.todo.date,onClick:e[3]||(e[3]=function(t){return s.editTodo(a.todo)})},null,8,["date"]),[[n.F8,!s.editing]]),(0,i.wy)((0,i._)("input",{class:"edit",type:"text","onUpdate:modelValue":e[4]||(e[4]=function(t){return a.todo.title=t}),onKeyup:e[5]||(e[5]=(0,n.D2)((function(t){return s.cancelEdit(a.todo)}),["esc"]))},null,544),[[n.nr,a.todo.title],[n.F8,s.editing]]),(0,i.wy)((0,i._)("input",{type:"datetime-local",onKeyup:e[6]||(e[6]=(0,n.D2)((function(t){return s.cancelEdit(a.todo)}),["esc"])),"onUpdate:modelValue":e[7]||(e[7]=function(t){return a.todo.date=t})},null,544),[[n.nr,a.todo.date],[n.F8,s.editing]])],32)],2)}var b={class:"time timer fix-width"},C={key:0},D={key:1},P={key:2},x={key:3},E={key:4},F={key:5},M={key:6};function q(t,e,o,n,r,a){return(0,i.wg)(),(0,i.iD)("span",b,[r.value?((0,i.wg)(),(0,i.iD)("span",C," T"+(0,d.zw)(a.time.plus?"+ ":"- "),1)):((0,i.wg)(),(0,i.iD)("span",D,"-")),a.time.y?((0,i.wg)(),(0,i.iD)("span",P,(0,d.zw)(a.time.years)+"y ",1)):(0,i.kq)("",!0),a.time.d?((0,i.wg)(),(0,i.iD)("span",x,(0,d.zw)(a.time.days)+"d ",1)):(0,i.kq)("",!0),a.time.h?((0,i.wg)(),(0,i.iD)("span",E,(0,d.zw)(a.time.h)+"h ",1)):(0,i.kq)("",!0),a.time.m?((0,i.wg)(),(0,i.iD)("span",F,(0,d.zw)(a.time.m)+"m ",1)):(0,i.kq)("",!0),!o.withSeconds&&a.time.m||!a.time.s?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("span",M,(0,d.zw)(a.time.s)+"s ",1))])}o(3112);var I={name:"TodoTimer",props:{date:{required:!0},withSeconds:{}},data:function(){return{value:null}},mounted:function(){this.intervalId=setInterval(this.tick,1e3),this.tick()},beforeUnmount:function(){this.intervalId&&clearInterval(this.intervalId)},computed:{timestamp:function(){return+new Date(this.date)},time:function(){var t=this.value>0,e=Math.abs(this.value),o=e/31536e3,n=o%1*365,i=n%1*24,d=i%1*60;return e=Math.round(d%1*60),o=Math.floor(o),n=Math.floor(n),i=Math.floor(i),d=Math.floor(d),{plus:t,y:o,d:n,h:i,m:d,s:e,years:String(o),days:String(n),hours:String(i).padStart(2,"0"),minutes:String(d).padStart(2,"0"),seconds:String(Math.round(e)).padStart(2,"0")}}},methods:{tick:function(){this.value=Math.floor((new Date-this.timestamp)/1e3)}}};const $=(0,T.Z)(I,[["render",q]]);var O=$;function S(t,e,o,n,r,a){return(0,i.wg)(),(0,i.iD)("div",{onClick:e[0]||(e[0]=function(){return a.handleInput&&a.handleInput.apply(a,arguments)})}," ["+(0,d.zw)(r.content?"x":"_")+"] ",1)}var z={name:"CheckBox",props:{modelValue:{required:!0}},data:function(){return{content:this.modelValue}},methods:{handleInput:function(){this.content=!this.content,this.$emit("update:modelValue",this.content)}}};const H=(0,T.Z)(z,[["render",S],["__scopeId","data-v-7015d0df"]]);var W=H,A={components:{Timer:O,Checkbox:W},props:{id:{required:!0},editedTodo:{required:!0}},data:function(){return{todo:this.$store.getters.getTodoById(this.id)}},computed:{editing:function(){return this.todo.id===this.editedTodo.id}},methods:{editTodo:function(t){this.$emit("todo-edit",t)},doneEdit:function(t){this.$emit("todo-edit-done",t)},cancelEdit:function(t){this.$emit("todo-edit-cancel",t)}}};const B=(0,T.Z)(A,[["render",_]]);var U=B,Z={class:"flex equal pagination"};function V(t,e,o,r,a,s){return(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",Z,[(0,i._)("div",null,[o.page>1?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:e[0]||(e[0]=function(t){return s.prevPage(o.page)})},"<< Previous")):(0,i.kq)("",!0)]),(0,i._)("div",null," Page "+(0,d.zw)(o.page)+"/"+(0,d.zw)(Math.floor(o.length/o.limit)+1),1),(0,i._)("div",null,[o.page*o.limit<o.length?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:e[1]||(e[1]=function(t){return s.nextPage(o.page)})},"Next >>")):(0,i.kq)("",!0)])],512)),[[n.F8,o.limit<o.length]])}var K={name:"AppPagination",props:{length:{required:!0},limit:{required:!0},page:{required:!0}},methods:{prevPage:function(t){this.$emit("page-prev",t)},nextPage:function(t){this.$emit("page-next",t)}}};const j=(0,T.Z)(K,[["render",V]]);var L=j,N={class:"filters flex equal"},Y=(0,i.Uk)(" All "),G=(0,i.Uk)(" Active "),X=(0,i.Uk)(" Completed ");function J(t,e,o,r,a,s){return(0,i.wy)(((0,i.wg)(),(0,i.iD)("ul",N,[(0,i._)("li",null,[(0,i._)("a",{href:"#/all",class:(0,d.C_)({selected:"all"===o.visibility})},[Y,(0,i.wy)((0,i._)("span",{class:"counter"}," ("+(0,d.zw)(o.todos.length)+") ",513),[[n.F8,o.todos.length]])],2)]),(0,i._)("li",null,[(0,i._)("a",{href:"#/active",class:(0,d.C_)({selected:"active"===o.visibility})},[G,(0,i.wy)((0,i._)("span",{class:"counter"}," ("+(0,d.zw)(o.remaining)+") ",513),[[n.F8,o.remaining]])],2)]),(0,i._)("li",null,[(0,i._)("a",{href:"#/completed",class:(0,d.C_)({selected:"completed"===o.visibility})},[X,(0,i.wy)((0,i._)("span",{class:"counter"}," ("+(0,d.zw)(o.todos.length-o.remaining)+") ",513),[[n.F8,o.todos.length-o.remaining]])],2)])],512)),[[n.F8,o.todos.length]])}var Q={props:{todos:{required:!0},visibility:{required:!0},remaining:{required:!0}}};const R=(0,T.Z)(Q,[["render",J]]);var tt=R,et=(0,i._)("div",null," Devansh Saxena , AKGEC (2024) ",-1),ot=[et];function nt(t,e,o,n,d,r){return(0,i.wg)(),(0,i.iD)("footer",null,ot)}var it={name:"AppFooter"};const dt=(0,T.Z)(it,[["render",nt]]);var rt=dt,at=(0,i.Uk)(" Adding a new task "),st=(0,i._)("button",null," Add ",-1);function lt(t,e,o,d,r,a){var s=(0,i.up)("Modal");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("button",{class:"wide",onClick:e[0]||(e[0]=function(t){return a.openModal()})}," + Add new task "),(0,i.Wm)(s,{show:r.toggle,onModalShow:a.openModal},{header:(0,i.w5)((function(){return[at]})),default:(0,i.w5)((function(){return[(0,i._)("form",{onSubmit:e[3]||(e[3]=(0,n.iM)((function(){return a.addTodo&&a.addTodo.apply(a,arguments)}),["prevent"]))},[(0,i.wy)((0,i._)("input",{ref:"input",type:"text",autocomplete:"off",placeholder:"What needs to be done?","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.newTodo.title=t})},null,512),[[n.nr,r.newTodo.title,void 0,{trim:!0}]]),(0,i.wy)((0,i._)("input",{type:"datetime-local","onUpdate:modelValue":e[2]||(e[2]=function(t){return r.newTodo.date=t})},null,512),[[n.nr,r.newTodo.date]]),st],32)]})),_:1},8,["show","onModalShow"])])}var ut=o(2262),ct=o(5679),ft={class:"modalLayer"},mt=["onKeyup"],ht={class:"left"},pt={props:{show:{default:!1,type:Boolean}},emits:["modal-show"],setup:function(t,e){var o=e.emit,d=t,r=(0,ut.iH)(null),a=(0,ut.iH)(null);function s(){o("modal-show",!d.show)}return(0,i.bv)((function(){(0,ct.p)(r,a)})),function(e,o){return(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",ft,[(0,i.wy)((0,i._)("section",{class:"modal",onKeyup:(0,n.D2)(s,["esc"]),ref_key:"dragElement",ref:r},[(0,i._)("div",{class:"header flex",ref_key:"dragHandle",ref:a},[(0,i._)("div",ht,[(0,i.WI)(e.$slots,"header")]),(0,i._)("button",{class:"right",onClick:s},"X")],512),(0,i._)("div",null,[(0,i.WI)(e.$slots,"default")])],40,mt),[[n.F8,t.show]])],512)),[[n.F8,t.show]])}}};const gt=(0,T.Z)(pt,[["__scopeId","data-v-253a0eec"]]);var vt=gt,wt={components:{Modal:vt},data:function(){return{toggle:!1,newTodo:{}}},methods:{addTodo:function(){this.$emit("todo-new",this.newTodo),this.newTodo={}},openModal:function(t){var e=this;this.toggle=null!==t&&void 0!==t?t:!this.toggle,this.$nextTick((function(){return e.$refs.input.focus()}))}}};const Tt=(0,T.Z)(wt,[["render",lt]]);var yt=Tt,kt={components:{TaskForm:yt,Header:k,TodoItem:U,Pagination:L,TodoTabs:tt,Footer:rt},data:function(){return{newTodo:{},editedTodo:{},beforeEditCache:{},visibility:"all",sortedBy:"date",sorted:"asc",columns:[{column:"title",title:"Task",grow:2},{column:"date",title:"Time"}],limit:10,currentPage:1}},created:function(){window.addEventListener("hashchange",this.onHashChange),this.onHashChange()},beforeUnmount:function(){window.removeEventListener("hashchange",this.onHashChange)},computed:{todos:function(){return this.$store.state.todos},filteredTodos:function(){return this.$store.getters.filteredTodos(this.visibility,this.sortedBy,this.sorted)},paginatedTodos:function(){var t=this,e=this.filteredTodos;return this.limit&&(e=e.filter((function(e,o){var n=(t.currentPage-1)*t.limit,i=t.currentPage*t.limit;if(o>=n&&o<i)return!0}))),e},remaining:function(){return this.$store.getters.remainingTodos.length}},methods:{onHashChange:function(){this.currentPage=1;var t=window.location.hash.replace(/#\/?/,"");if("active"===t||"completed"===t)return this.visibility=t;window.location.hash="",this.visibility="all"},sortBy:function(t){this.sortedBy===t?this.sorted="asc"===this.sorted?"desc":"asc":this.sorted="asc",this.sortedBy=t},nextPage:function(){this.currentPage*this.limit<this.todos.length&&this.currentPage++},prevPage:function(){this.currentPage>1&&this.currentPage--},addTodo:function(t){var e=t.title,o=t.date;if(e){var n={title:e,date:o,completed:!1};this.newTodo={},this.$store.commit("addTodo",n)}},removeTodo:function(t){this.$store.commit("removeTodo",t)},editTodo:function(t){this.beforeEditCache=t,this.editedTodo=t},doneEdit:function(t){if(this.editedTodo){if(this.editedTodo={},!t.title)return this.removeTodo(t);this.$store.commit("editTodo",t)}},cancelEdit:function(t){this.editedTodo={},t.title=this.beforeEditCache.title,t.date=this.beforeEditCache.date},removeCompleted:function(){this.$store.commit("removeCompletedTodos")}}};const _t=(0,T.Z)(kt,[["render",f]]);var bt=_t,Ct=(o(4553),o(561),o(2707),o(9826),o(8637)),Dt=o(4278),Pt=o.n(Dt),xt=o(4702),Et=(0,Ct.MT)({state:function(){return{todos:[]}},mutations:{addTodo:function(t,e){if(0===t.todos.length)e.id=0;else{var o=t.todos.reduce((function(t,e){return e.id>t?e.id:t}),t.todos[0].id);e.id=o+1}t.todos.push(e)},editTodo:function(t,e){var o=t.todos.findIndex((function(t){return t.id===e.id}));o<0||(t.todos[o]=e)},removeTodo:function(t,e){t.todos.splice(t.todos.indexOf(e),1)},removeCompletedTodos:function(t){t.todos=t.todos.filter((function(t){return!t.completed}))}},getters:{allTodos:function(t){return t.todos},remainingTodos:function(t){return t.todos.filter((function(t){return!t.completed}))},completedTodos:function(t){return t.todos.filter((function(t){return t.completed}))},filteredTodos:function(t,e){return function(t,o,n){var i={all:"allTodos",active:"remainingTodos",completed:"completedTodos"},d=e[i[t]];return o&&n&&(d=d.sort((function(t,e){var i="asc"===n?1:-1;return t[o]>e[o]?i:t[o]<e[o]?-1*i:"undefined"===typeof t[o]&&"undefined"===typeof e[o]?0:"undefined"===typeof t[o]?1:"undefined"===typeof e[o]?-1:0}))),d}},getTodoById:function(t){return function(e){return t.todos.find((function(t){return t.id===e}))}}},plugins:[(0,xt.Z)(),Pt()({predicate:["addTodo","editTodo","removeTodo","removeCompletedTodos"]})]}),Ft=(0,n.ri)(bt);Ft.use(Et),Ft.mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var d=e[n]={exports:{}};return t[n](d,d.exports,o),d.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,d){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],i=t[u][1],d=t[u][2];for(var a=!0,s=0;s<n.length;s++)(!1&d||r>=d)&&Object.keys(o.O).every((function(t){return o.O[t](n[s])}))?n.splice(s--,1):(a=!1,d<r&&(r=d));if(a){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}d=d||0;for(var u=t.length;u>0&&t[u-1][2]>d;u--)t[u]=t[u-1];t[u]=[n,i,d]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,d,r=n[0],a=n[1],s=n[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(s)var u=s(o)}for(e&&e(n);l<r.length;l++)d=r[l],o.o(t,d)&&t[d]&&t[d][0](),t[d]=0;return o.O(u)},n=self["webpackChunkTODO_LIST"]=self["webpackChunkTODO_LIST"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1520)}));n=o.O(n)})();
//# sourceMappingURL=app-legacy.3e373eac.js.map