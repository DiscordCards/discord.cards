try{
	let r = require('tinycolor');
}catch(e){console.log(e);}

let cacheTooltips = {};

let mouseOver = function(me){
	let tt = document.createElement("tooltip");
	let source = me.target;
	tt.innerText = source.outerHTML.match(/text="((\w|\s)+)"/)[1].toString();
	tt.style = `top: ${source.getBoundingClientRect().top}px; left: ${source.getBoundingClientRect().left}px;`
	cacheTooltips[source.id] = tt;
	document.body.appendChild(tt);
}

let mouseOut = function(me){
	let source = me.target;
	cacheTooltips[source.id].parentNode.removeChild(cacheTooltips[source.id]);
	delete cacheTooltips[source.id];
}

window.onload = ()=>{
	let elements = document.getElementsByTagName("tth")
	Object.keys(elements).map(e=>{
		elements[e].addEventListener("mouseover", mouseOver);
		elements[e].addEventListener("mouseout", mouseOut);
	})
}