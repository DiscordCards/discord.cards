String.prototype.capFirst = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const Banner = {
	generate: function(){
		var bn = document.getElementById("baseName").options[document.getElementById("baseName").selectedIndex].value;
		var dn = document.getElementById("designName").options[document.getElementById("designName").selectedIndex].value;
		var bc = document.getElementById("baseColor").value;
		var dc = document.getElementById("designColor").value;
		var cn = document.getElementById("clubName").value;
		let dark = document.getElementById("baseColor").style.color !== "rgb(0, 0, 0)";
		if(bn === "none" || dn === "none") return;

		document.getElementById("img2").outerHTML = `<image id="img2" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://res.discorddungeons.me/images/cbannerbase/${bn}.png" x="0" y="0" height="400px" width="400px"></image>`
		document.getElementById("base").style = `-webkit-mask-box-image: url(http://res.discorddungeons.me/images/cbannerbase/${bn}.png); background-color: #${bc};`
		document.getElementById("overlay").src = `http://res.discorddungeons.me/images/cbannerbase/${bn}_overlay.png`
		document.getElementById("overlay").style = `${dark ? "filter: invert();" : "filter: none;"}`

		if(dark){document.getElementsByClassName("preview")[0].className = "preview"}else{document.getElementsByClassName("preview")[0].className = "preview dark"}
		
		document.getElementById("img").outerHTML = `<image id="img" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://res.discorddungeons.me/images/bannerdesign/${dn}.png" x="0" y="0" height="250px" width="250px"></image>`
		document.getElementById("design").style = `-webkit-mask-box-image: url(http://res.discorddungeons.me/images/bannerdesign/${dn}.png); background-color: #${dc};`

		console.log(`[]ccode ${cn} | ${btoa(`${bn}|${parseInt(bc, 16).toString(36)}|${dn}|${parseInt(dc, 16).toString(36)}`)}`)
		document.getElementById("output").value = `[]ccode ${cn} | ${btoa(`${bn}|${parseInt(bc, 16).toString(36)}|${dn}|${parseInt(dc, 16).toString(36)}`)}`
	},
	placeNames: function(){
		try{
			let xmlHttp = new XMLHttpRequest();
			xmlHttp.open( "GET", "http://discord.cards:4500/static/data/banner", false );
			xmlHttp.send( null );
			let data = JSON.parse(xmlHttp.responseText);
			document.getElementById("baseName").innerHTML = "";
			document.getElementById("designName").innerHTML = "";
			data.base_names.map(bn => document.getElementById("baseName").innerHTML += `<option value="${bn}"${bn === "inverted" ? ` selected="selected"` : ""}>${bn.capFirst()}</option>`);
			data.design_names.map(bn => document.getElementById("designName").innerHTML += `<option value="${bn}"${bn === "discord" ? ` selected="selected"` : ""}>${bn.capFirst()}</option>`);
		}catch(e){
			throw e;
		}
	}
}

Banner.placeNames();