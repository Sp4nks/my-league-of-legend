
var args = arguments[0] || {};
var name = args.name;
var summonerLevel = args.summonerLevel;
var profileIconId = args.profileIconId;
summonerID = args.id;
$.summonerIcon.image = Alloy.Globals.iconUrl+profileIconId+".png";
$.name.setText(name);
$.level.setText('Niveau : '+summonerLevel);


function openFiche(){
	var xhr = Titanium.Network.createHTTPClient();
	var url = Alloy.Globals.urlApi12+'stats/by-summoner/'+summonerID+'/summary?api_key='+Alloy.Globals.apiKey;
	xhr.setTimeout(10000);
	xhr.open('GET', url);
	xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	xhr.send();
	xhr.onerror = function() {
		alert("error");
	};
	xhr.onload = function() {
	    var obj = JSON.parse(this.responseText);
		var fiche = Alloy.createController('fiche', {
		    summonerID: summonerID
		}).getView();
		fiche.open();	
	};
}
