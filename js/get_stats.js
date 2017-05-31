(() => {

	Number.prototype.formatNumber = function(){
		return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
	}

	let xmlHttp = new XMLHttpRequest();
	xmlHttp.open( "GET", "https://api.discord.cards/count", false );
	xmlHttp.send( null );
	let data = JSON.parse(xmlHttp.responseText);
	console.log(data)
	document.querySelector("#users").innerHTML = data.users.formatNumber();
	document.querySelector("#servs").innerHTML = data.servers.formatNumber();
	document.querySelector("#market").innerHTML = data.market.formatNumber();
	document.querySelector("#clubs").innerHTML = data.clubs.formatNumber();
	document.querySelector("#trades").innerHTML = data.trades.formatNumber();
	document.querySelector("#cards").innerHTML = data.cards.formatNumber();
	document.querySelector("#series").innerHTML = data.series.formatNumber();
	document.querySelector(".stats").style = "";
})();