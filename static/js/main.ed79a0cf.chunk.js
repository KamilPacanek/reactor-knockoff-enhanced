(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(47),l=a.n(c),s=a(1),o=a(2),i=a(4),u=a(3),h=a(5),d=a(6),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSelectedPartChange=a.handleSelectedPartChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"LeftPanel"},r.a.createElement(b,null),r.a.createElement(O,{parts:this.props.parts,selectedPart:this.props.selectedPart,onSelectedPartChange:this.handleSelectedPartChange}))}},{key:"handleSelectedPartChange",value:function(e){this.props.onSelectedPartChange(e)}}]),t}(r.a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"OperationsPanel"})}}]),t}(r.a.Component),m=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"TopInfoPanel"})}}]),t}(r.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"RightPanel"},r.a.createElement(m,null),r.a.createElement(C,{reactorProps:this.props.reactorProps,selectedPart:this.props.selectedPart}))}}]),t}(r.a.Component),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSelectedPartChange=a.handleSelectedPartChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=this.props.parts,t=e.length/3,a=new Array(t),n=0;n<t;n++){a[n]=new Array(3);for(var c=0;c<3;c++){var l=e[3*n+c];a[n][c]=r.a.createElement(j,{part:l,key:l.id,selectedPart:this.props.selectedPart,onSelectedPartChange:this.handleSelectedPartChange})}}return r.a.createElement("div",{className:"PartsPanel"},a.map(function(e,t){return r.a.createElement("div",{className:"parts-row",key:"ReactorRow_"+t},e.map(function(e){return e}))}))}},{key:"handleSelectedPartChange",value:function(e){this.props.onSelectedPartChange(e)}}]),t}(r.a.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.part,a=!!this.props.selectedPart&&this.props.selectedPart.id===t.id;return r.a.createElement("div",{className:"Part "+(a?"selected":""),title:t.name,onClick:function(){return e.handleSelectedPartChange(t,a)}},t.symbol)}},{key:"handleSelectedPartChange",value:function(e,t){this.props.onSelectedPartChange(t?null:e)}}]),t}(r.a.Component),P=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={},a.handleSelectedPartChange=a.handleSelectedPartChange.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"MainWindow"},r.a.createElement(p,{parts:this.props.parts,selectedPart:this.state.selectedPart,onSelectedPartChange:this.handleSelectedPartChange}),r.a.createElement(f,{reactorProps:this.props.reactorDefinition,selectedPart:this.state.selectedPart}))}},{key:"handleSelectedPartChange",value:function(e){this.setState({selectedPart:e})}}]),t}(r.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=this.props.reactorProps,t=new Array(e.Rows),a=0;a<e.Rows;a++){t[a]=new Array(e.Cols);for(var n=0;n<e.Cols;n++)t[a][n]=r.a.createElement(g,{x:n,y:a,key:"ReactorCell_"+n+"_"+a,selectedPart:this.props.selectedPart})}return r.a.createElement("div",{className:"ReactorPanel"},t.map(function(e,t){return r.a.createElement("div",{className:"reactor-row",key:"ReactorRow_"+t},e.map(function(e){return e}))}))}}]),t}(r.a.Component),y=a(48),v=a.n(y),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={placedPart:null},a.handleClick=a.handleClick.bind(Object(d.a)(Object(d.a)(a))),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.x,a=this.props.y;return r.a.createElement("div",{className:"ReactorCell",key:"ReactorCell_"+t+"_"+a,onClick:this.handleClick,onContextMenu:function(t){return e.handleContextMenu(t)}},this.partVisual)}},{key:"handleClick",value:function(){console.debug("Cell (".concat(this.props.y,",").concat(this.props.x,") clicked.")),!this.state.placedPart&&this.props.selectedPart&&this.setState({placedPart:v()(this.props.selectedPart)})}},{key:"handleContextMenu",value:function(e){e.preventDefault(),this.state.placedPart&&this.setState({placedPart:null})}},{key:"partVisual",get:function(){var e=this.state.placedPart;return e?e.symbol:""}}]),t}(r.a.Component),k=(a(124),a(125),function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(P,{parts:S,reactorDefinition:w}))}}]),t}(r.a.Component)),w={Rows:10,Cols:10},S=[{category:"FuelCell",id:"cu1",name:"Single Uranium Cell",description:"Basic fuel cell. Generates 1 power and 1 heat",symbol:"[U1]",baseCost:10,baseDurability:15,basePower:1,baseHeat:1,stage:1},{category:"FuelCell",id:"cu2",name:"Double Uranium Cell",description:"Basic fuel cell. Generates 4 power and 8 heat",symbol:"[U2]",baseCost:25,baseDurability:15,basePower:4,baseHeat:8,stage:2},{category:"FuelCell",id:"cu3",name:"Quad Uranium Cell",description:"Basic fuel cell. Generates 12 power and 36 heat",symbol:"[U4]",baseCost:60,baseDurability:15,basePower:12,baseHeat:36,stage:3}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t,a){e.exports=a(126)}},[[49,1,2]]]);
//# sourceMappingURL=main.ed79a0cf.chunk.js.map