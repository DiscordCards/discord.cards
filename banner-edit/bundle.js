let Banner = {
	generate: function(){
		var bn = document.getElementById("baseName").options[document.getElementById("baseName").selectedIndex].value;
		var dn = document.getElementById("designName").options[document.getElementById("designName").selectedIndex].value;
		if(bn === "none" || dn === "none") return;

		document.getElementById("img2").outerHTML = `<image id="img2" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://res.discorddungeons.me/images/cbannerbase/${bn}.png" x="0" y="0" height="400px" width="400px"></image>`
		document.getElementById("base").style = `-webkit-mask-box-image: url(http://res.discorddungeons.me/images/cbannerbase/${bn}.png); background-color: red;`
		document.getElementById("overlay").src = `http://res.discorddungeons.me/images/cbannerbase/${bn}_overlay.png`
		
		document.getElementById("img").outerHTML = `<image id="img" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://res.discorddungeons.me/images/bannerdesign/${dn}.png" x="0" y="0" height="250px" width="250px"></image>`
		document.getElementById("design").style = `-webkit-mask-box-image: url(http://res.discorddungeons.me/images/bannerdesign/${dn}.png); background-color: purple;`
	}
};
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Jimp = require("jimp");
Banner = {
	generate: function(){
		var bn = document.getElementById("baseName").options[document.getElementById("baseName").selectedIndex].value;
		var dn = document.getElementById("designName").options[document.getElementById("designName").selectedIndex].value;
		if(bn === "none" || dn === "none") return;

		document.getElementById("img2").outerHTML = `<image id="img2" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://res.discorddungeons.me/images/cbannerbase/${bn}.png" x="0" y="0" height="400px" width="400px"></image>`
		document.getElementById("base").style = `-webkit-mask-box-image: url(http://res.discorddungeons.me/images/cbannerbase/${bn}.png); background-color: red;`
		document.getElementById("overlay").src = `http://res.discorddungeons.me/images/cbannerbase/${bn}_overlay.png`
		
		document.getElementById("img").outerHTML = `<image id="img" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://res.discorddungeons.me/images/bannerdesign/${dn}.png" x="0" y="0" height="250px" width="250px"></image>`
		document.getElementById("design").style = `-webkit-mask-box-image: url(http://res.discorddungeons.me/images/bannerdesign/${dn}.png); background-color: purple;`
	},
	putFile: function(bn, bc, dn, dc){
		try{
		    new Jimp("https://res.discorddungeons.me/images/cbannerbase/_stick.png", function (err, stick) {
		        if (err) {
				    this.handleErr(err);
		        	return;
		        }
		        new Jimp(`https://res.discorddungeons.me/images/cbannerbase/${bn}.png`, function (err, base) {
			        if (err) {
				        this.handleErr(err);
			        	return;
			        }
		        	new Jimp(`https://res.discorddungeons.me/images/cbannerbase/${bn}_overlay.png`, function (err, overlay) {
				        if (err) {
				        	this.handleErr(err);
				        	return;
				        }
			        	new Jimp(`https://res.discorddungeons.me/images/bannerdesign/${dn}.png`, function (err, design) {
					        if (err) {
					        	this.handleErr(err);
					        	return;
					        }
				        	if(isDark(bc.toLowerCase())) overlay = overlay.opacity(0.5).invert();
					        let rgb = hexToRgb("#"+bc.toLowerCase());
					        let rgb2 = invertRgb(hexToRgb("#"+dc.toLowerCase()));
					        base.invert().color([
								{ apply: 'red', params: [ rgb.r ] },
								{ apply: 'green', params: [ rgb.g ] },
								{ apply: 'blue', params: [ rgb.b ] }
							]).composite(overlay, 0, 0)
							.composite(design.contain(250, 250).color([
								{ apply: 'red', params: [ -rgb2.r ] },
								{ apply: 'green', params: [ -rgb2.g ] },
								{ apply: 'blue', params: [ -rgb2.b ] }
							]), 75, 50)
							.composite(stick, 0, 0)
							.getBase64(Jimp.MIME_PNG, (err, buffer) => {
			                    if (err) {this.handleErr(err); return;}
			                    console.log(buffer);
			                });
	        			})
	        		})
	        	})
		    })
	    }catch(e){
		    this.handleErr(e);
	    }
	},
	handleErr: function(err){

	}
}
},{}]},{},[1]);
