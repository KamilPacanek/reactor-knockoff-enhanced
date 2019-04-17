(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{128:function(e,t,a){"use strict";a.r(t);var n,r,o=a(1),l=a.n(o),s=a(48),c=a.n(s),i=a(2),u=a(3),h=a(5),p=a(4),d=a(6);a(56),a(57);!function(e){e[e.FuelCell=0]="FuelCell"}(n||(n={})),function(e){e[e.Uranium=0]="Uranium"}(r||(r={}));var m=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSelectedPartChange=function(e){a.props.onSelectedPartChange(e)},a.handleMouseEnterPart=function(e){a.props.onMouseEnterPart(e)},a.handleMouseLeavePart=function(){a.props.onMouseLeavePart()},a.handleManualWentHold=function(){a.props.onManualWentHold()},a.handleManualWentRelease=function(){a.props.onManualWentRelease()},a.handlePauseClick=function(){a.props.onPauseClick()},a.handleSellEnergyClick=function(){a.props.onSellEnergyClick()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={currentEnergy:this.props.gameData.currentEnergy,maxEnergy:this.props.gameData.maxEnergy,currentHeat:this.props.gameData.currentHeat,maxHeat:this.props.gameData.maxHeat,moneyOwned:this.props.gameData.moneyOwned,heatGrowPerTick:this.props.gameData.heatGrowPerTick,energyGrowPerTick:this.props.gameData.energyGrowPerTick,wenting:this.props.appState.wenting,pause:this.props.appState.pause};return l.a.createElement("div",{className:"LeftPanel"},l.a.createElement(v,{hudData:e,onManualWentHold:this.handleManualWentHold,onManualWentRelease:this.handleManualWentRelease,onPauseClick:this.handlePauseClick,onSellEnergyClick:this.handleSellEnergyClick}),l.a.createElement(E,{parts:this.props.parts,selectedPart:this.props.selectedPart,onSelectedPartChange:this.handleSelectedPartChange,onMouseEnterPart:this.handleMouseEnterPart,onMouseLeavePart:this.handleMouseLeavePart}))}}]),t}(l.a.Component),P=a(49),f=a(11),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleContextMenu=function(e){e.preventDefault()},a.handlePauseClick=function(){a.props.onPauseClick()},a.handleWentMouseDown=function(){a.props.onManualWentHold()},a.handleWentMouseUp=function(){a.props.onManualWentRelease()},a.handleWentMouseLeave=function(){a.props.onManualWentRelease()},a.handleSellEnergyClick=function(){a.props.onSellEnergyClick()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.hudData;return l.a.createElement("div",{className:"OperationsPanel",onContextMenu:this.handleContextMenu},l.a.createElement("div",{className:"heat-meter"},l.a.createElement("div",{className:"icon manual-wenting "+(e.wenting?"working":"idle")},l.a.createElement(f.c,{onMouseDown:this.handleWentMouseDown,onMouseUp:this.handleWentMouseUp,onMouseLeave:this.handleWentMouseLeave})),l.a.createElement("div",{className:"info"},l.a.createElement("div",null,e.currentHeat," / ",e.maxHeat),l.a.createElement("div",null,"+",e.heatGrowPerTick,"/tk"))),l.a.createElement("div",{className:"energy-meter"},l.a.createElement("div",{className:"icon power-generation "+(e.pause?"idle":"working")},l.a.createElement(P.a,{onClick:this.handlePauseClick})),l.a.createElement("div",{className:"info"},l.a.createElement("div",null,e.currentEnergy," / ",e.maxEnergy),l.a.createElement("div",null,"+",e.energyGrowPerTick,"/tk"))),l.a.createElement("div",{className:"sell-energy button",onClick:this.handleSellEnergyClick},l.a.createElement("div",{className:"button-icon"},l.a.createElement(f.a,null)),l.a.createElement("div",{className:"button-label"},"Export energy")),l.a.createElement("div",{className:"money-display"},"$",e.moneyOwned))}}]),t}(l.a.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"TopInfoPanel"},this.props.showInfoOf&&this._renderPartInfo())}},{key:"_renderPartInfo",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"part-title"},this.props.showInfoOf.name),l.a.createElement("div",{className:"part-desc"},this.props.showInfoOf.description))}}]),t}(l.a.Component),M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleMouseEnterPart=function(e){a.props.onMouseEnterPart(e)},a.handleMouseLeavePart=function(){a.props.onMouseLeavePart()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"RightPanel"},l.a.createElement(y,{showInfoOf:this.props.mouseoverPart}),l.a.createElement(k,{reactorProps:this.props.reactorProps,selectedPart:this.props.selectedPart,onMouseEnterPart:this.handleMouseEnterPart,onMouseLeavePart:this.handleMouseLeavePart}))}}]),t}(l.a.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleContextMenu=function(e){e.preventDefault()},a.handleSelectedPartChange=function(e){a.props.onSelectedPartChange(e)},a.handleMouseEnterPart=function(e){a.props.onMouseEnterPart(e)},a.handleMouseLeavePart=function(){a.props.onMouseLeavePart()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this.props.parts,t=e.length/3,a=new Array(t),n=0;n<t;n++){a[n]=new Array(3);for(var r=0;r<3;r++){var o=e[3*n+r];a[n][r]=l.a.createElement(C,{part:o,key:o.id,selectedPart:this.props.selectedPart,onSelectedPartChange:this.handleSelectedPartChange,onMouseEnter:this.handleMouseEnterPart,onMouseLeave:this.handleMouseLeavePart})}}return l.a.createElement("div",{className:"PartsPanel",onContextMenu:this.handleContextMenu},a.map(function(e,t){return l.a.createElement("div",{className:"parts-row",key:"ReactorRow_"+t},e.map(function(e){return e}))}))}}]),t}(l.a.Component),g=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"renderPart",value:function(e){switch(e.category){case n.FuelCell:for(var t=Math.pow(2,e.stage-1),a=[],r=0;r<t;r++)a.push(l.a.createElement(f.b,{className:"fuel-cell-"+r,key:"fuelCellPart_"+r}));return l.a.createElement("div",{className:"fuel-cells-"+t+" "+this.getTypeName(e.type).toLowerCase()+"-cells"},a.map(function(e){return e}))}}},{key:"getTypeName",value:function(e){return r[e]}}]),t}(l.a.Component),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleMouseLeaving=function(){a.props.onMouseLeave()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.part,a=!!this.props.selectedPart&&this.props.selectedPart.id===t.id;return l.a.createElement("div",{className:"Part "+(a?"selected":""),title:t.name,onClick:function(){return e.handleSelectedPartChange(t,a)},onMouseEnter:function(){return e.handleMouseEnter(t)},onMouseLeave:this.handleMouseLeaving},this.renderPart(t))}},{key:"handleSelectedPartChange",value:function(e,t){this.props.onSelectedPartChange(t?null:e)}},{key:"handleMouseEnter",value:function(e){this.props.onMouseEnter(e)}}]),t}(g),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleSelectedPartChange=function(e){a.setState({selectedPart:e})},a.handleMouseEnterPart=function(e){a.setState({mouseoverPart:e})},a.handleMouseLeavePart=function(){a.setState({mouseoverPart:void 0})},a.handleManualWentHold=function(){a.props.onManualWentHold()},a.handleManualWentRelease=function(){a.props.onManualWentRelease()},a.handlePauseClick=function(){a.props.onPauseClick()},a.handleSellEnergyClick=function(){a.props.onSellEnergyClick()},a.state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"MainWindow"},l.a.createElement(m,{parts:this.props.parts,selectedPart:this.state.selectedPart,gameData:this.props.gameData,appState:this.props.appState,onSelectedPartChange:this.handleSelectedPartChange,onMouseEnterPart:this.handleMouseEnterPart,onMouseLeavePart:this.handleMouseLeavePart,onManualWentHold:this.handleManualWentHold,onManualWentRelease:this.handleManualWentRelease,onPauseClick:this.handlePauseClick,onSellEnergyClick:this.handleSellEnergyClick}),l.a.createElement(M,{reactorProps:this.props.reactorDefinition,selectedPart:this.state.selectedPart,mouseoverPart:this.mouseoverPart,onMouseEnterPart:this.handleMouseEnterPart,onMouseLeavePart:this.handleMouseLeavePart}))}},{key:"mouseoverPart",get:function(){return this.state.mouseoverPart||this.state.selectedPart}}]),t}(l.a.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleMouseEnterPart=function(e){a.props.onMouseEnterPart(e)},a.handleMouseLeavePart=function(){a.props.onMouseLeavePart()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){for(var e=this.props.reactorProps,t=new Array(e.rows),a=0;a<e.rows;a++){t[a]=new Array(e.cols);for(var n=0;n<e.cols;n++)t[a][n]=l.a.createElement(j,{x:n,y:a,key:"ReactorCell_"+n+"_"+a,selectedPart:this.props.selectedPart,onMouseEnter:this.handleMouseEnterPart,onMouseLeave:this.handleMouseLeavePart})}return l.a.createElement("div",{className:"ReactorPanel"},t.map(function(e,t){return l.a.createElement("div",{className:"reactor-row",key:"ReactorRow_"+t},e.map(function(e){return e}))}))}}]),t}(l.a.Component),w=a(50),O=a.n(w),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleMouseEnter=function(){a.state.placedPart&&a.props.onMouseEnter(a.state.placedPart)},a.handleMouseLeaving=function(){a.state.placedPart&&a.props.onMouseLeave()},a.handleClick=function(){console.debug("Cell (".concat(a.props.y,",").concat(a.props.x,") clicked.")),!a.state.placedPart&&a.props.selectedPart&&a.setState({placedPart:O()(a.props.selectedPart)})},a.handleContextMenu=function(e){e.preventDefault(),a.state.placedPart&&a.setState({placedPart:null})},a.state={placedPart:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.x,t=this.props.y;return l.a.createElement("div",{className:"ReactorCell",key:"ReactorCell_"+e+"_"+t,onClick:this.handleClick,onContextMenu:this.handleContextMenu,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeaving},this.state.placedPart?this.renderPart(this.state.placedPart):null)}}]),t}(g),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handlePauseClick=function(){a.setState({pause:!a.state.pause})},a.handleManualWentHold=function(){a.setState({wenting:!0})},a.handleManualWentRelease=function(){a.setState({wenting:!1})},a.handleSellEnergyClick=function(){a.setState({moneyOwned:a.state.moneyOwned+a.state.currentEnergy,currentEnergy:0})},a.state={pause:!0,wenting:!1,moneyOwned:L.moneyOwned,currentEnergy:L.currentEnergy},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,{parts:N,reactorDefinition:W,gameData:L,appState:this.state,onManualWentHold:this.handleManualWentHold,onManualWentRelease:this.handleManualWentRelease,onPauseClick:this.handlePauseClick,onSellEnergyClick:this.handleSellEnergyClick}))}}]),t}(l.a.Component),L={currentHeat:0,maxHeat:1e3,currentEnergy:0,maxEnergy:100,moneyOwned:0,heatGrowPerTick:0,energyGrowPerTick:0},W={rows:10,cols:10},N=[{category:n.FuelCell,type:r.Uranium,id:"cu1",uiColor:"#40e141",name:"Single Uranium Cell",description:"Basic fuel cell. Generates 1 power and 1 heat.",symbol:"[U1]",baseCost:10,baseDurability:15,basePower:1,baseHeat:1,stage:1},{category:n.FuelCell,type:r.Uranium,id:"cu2",uiColor:"#15ae16",name:"Double Uranium Cell",description:"Basic fuel cell. Generates 4 power and 8 heat.",symbol:"[U2]",baseCost:25,baseDurability:15,basePower:4,baseHeat:8,stage:2},{category:n.FuelCell,type:r.Uranium,id:"cu3",uiColor:"#038f04",name:"Quad Uranium Cell",description:"Basic fuel cell. Generates 12 power and 36 heat.",symbol:"[U4]",baseCost:60,baseDurability:15,basePower:12,baseHeat:36,stage:3}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,a){e.exports=a(128)},56:function(e,t,a){},57:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.9f0bd830.chunk.js.map