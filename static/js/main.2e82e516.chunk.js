(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(47),l=a.n(c),o=a(1),s=a(2),i=a(4),u=a(3),d=a(5),h=a(6),p=a(48),b=a.n(p),m=(a(124),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={selectedPart:null},a.handleSelectedPartChange=a.handleSelectedPartChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"MainWindow"},r.a.createElement(P,{parts:w,selectedPart:this.state.selectedPart,onSelectedPartChange:this.handleSelectedPartChange}),r.a.createElement(C,{reactorProps:k,selectedPart:this.state.selectedPart}))}},{key:"handleSelectedPartChange",value:function(e){this.setState({selectedPart:e})}}]),t}(r.a.Component)),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSelectedPartChange=a.handleSelectedPartChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LeftPanel"},r.a.createElement(O,null),r.a.createElement(j,{parts:this.props.parts,selectedPart:this.props.selectedPart,onSelectedPartChange:this.handleSelectedPartChange}))}},{key:"handleSelectedPartChange",value:function(e){this.props.onSelectedPartChange(e)}}]),t}(r.a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"RightPanel"},r.a.createElement(f,null),r.a.createElement(v,{reactorProps:this.props.reactorProps,selectedPart:this.props.selectedPart}))}}]),t}(r.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"OperationsPanel"})}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSelectedPartChange=a.handleSelectedPartChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this.props.parts,t=e.length/4,a=new Array(t),n=0;n<t;n++){a[n]=new Array(4);for(var c=0;c<4;c++){var l=e[4*n+c];a[n][c]=r.a.createElement(y,{part:l,key:l.id,selectedPart:this.props.selectedPart,onSelectedPartChange:this.handleSelectedPartChange})}}return r.a.createElement("div",{className:"PartsPanel"},a.map(function(e,t){return r.a.createElement("div",{className:"parts-row",key:"ReactorRow_"+t},e.map(function(e){return e}))}))}},{key:"handleSelectedPartChange",value:function(e){this.props.onSelectedPartChange(e)}}]),t}(r.a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.part,a=!!this.props.selectedPart&&this.props.selectedPart.id===t.id;return r.a.createElement("div",{className:"PartUI "+(a?"selected":""),title:t.name,onClick:function(){return e.handleSelectedPartChange(t,a)}},t.symbol)}},{key:"handleSelectedPartChange",value:function(e,t){this.props.onSelectedPartChange(t?null:e)}}]),t}(r.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TopInfoPanel"})}}]),t}(r.a.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this.props.reactorProps,t=new Array(e.Rows),a=0;a<e.Rows;a++){t[a]=new Array(e.Cols);for(var n=0;n<e.Cols;n++)t[a][n]=r.a.createElement(g,{x:n,y:a,key:"ReactorCell_"+n+"_"+a,selectedPart:this.props.selectedPart})}return r.a.createElement("div",{className:"ReactorPanel"},t.map(function(e,t){return r.a.createElement("div",{className:"reactor-row",key:"ReactorRow_"+t},e.map(function(e){return e}))}))}}]),t}(r.a.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={placedPart:null},a.handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.x,t=this.props.y;return r.a.createElement("div",{className:"ReactorCell",key:"ReactorCell_"+e+"_"+t,onClick:this.handleClick},this.partVisual)}},{key:"handleClick",value:function(){console.debug("Cell (".concat(this.props.y,",").concat(this.props.x,") clicked.")),!this.state.placedPart&&this.props.selectedPart&&this.setState({placedPart:b()(this.props.selectedPart)})}},{key:"partVisual",get:function(){var e=this.state.placedPart;return e?e.symbol:""}}]),t}(r.a.Component),k={Cols:10,Rows:10},w=[{category:"PowerCell",id:"0001",name:"Cell 1",symbol:"[X1]"},{category:"PowerCell",id:"0002",name:"Cell 2",symbol:"[X2]"},{category:"PowerCell",id:"0003",name:"Cell 3",symbol:"[X3]"},{category:"PowerCell",id:"0004",name:"Cell 4",symbol:"[X4]"},{category:"PowerCell",id:"0005",name:"Cell 5",symbol:"[Y1]"},{category:"PowerCell",id:"0006",name:"Cell 6",symbol:"[Y2]"},{category:"PowerCell",id:"0007",name:"Cell 7",symbol:"[Y3]"},{category:"PowerCell",id:"0008",name:"Cell 8",symbol:"[Y4]"}],E=(a(125),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,a){e.exports=a(126)}},[[49,1,2]]]);
//# sourceMappingURL=main.2e82e516.chunk.js.map