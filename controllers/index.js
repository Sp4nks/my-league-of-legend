function closeme(e) {
	$.index.close();
}

// Menu display
function doOpen(e) {
    $.index.activity.invalidateOptionsMenu();
}

var label = Ti.UI.createLabel({
	text: 'Bienvenue dans \'My League Of Legends\', cette application vous permet de consulter vos statistiques de jeu, ou celle de n\'importe quel invocateur sur la plateforme EU West',
	color: '#fff',
	top: 20,
	textAlign:'center',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto',
	width:300
});
$.index.add(label);

var textfield = Ti.UI.createTextField({
	height: 40,
	top: 150,
	width: 300,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	returnKeyType: Ti.UI.RETURNKEY_DONE,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: 'Nom de l\'invocateur recherché...'
});

$.index.add(textfield);

var button = Ti.UI.createButton({
	title: 'Rechercher un invocateur !',
	top: 200,
	height: 40,
	width: 300
});

button.addEventListener('click', function() {
	// Check console
	Ti.API.info('User clicked the button ');
    var name = textfield.value;
	ajax(name);
});
$.index.add(button);

// https://prod.api.pvp.net/api/lol/euw/v1.3/summoner/by-name/sp4nks?api_key=4326c6b0-76a3-43b9-a9d3-000dec26b748

//$.getNameBtn.setTitle('Votre nom d\'invocateur');


function ajax(args) {
	// create request
	var xhr = Titanium.Network.createHTTPClient();
	//set timeout
	xhr.setTimeout(10000);
	//Here you set the webservice address and method
	xhr.open('GET', Alloy.Globals.urlApi13+'summoner/by-name/'+args+'?api_key='+Alloy.Globals.apiKey);
	//set enconding
	xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	//send request with parameters
	xhr.send();
	// function to deal with errors
	xhr.onerror = function() {
		alert('La recherche a rencontré une erreur');
	};
	// function to deal with response
	xhr.onload = function() {
		//console.log('Le JSON non parse est ='+this.responseText);
	    var obj = JSON.parse(this.responseText);
		var id = obj[args].id;
		var name = obj[args].name;
		var profileIconId = obj[args].profileIconId;
		var summonerLevel = obj[args].summonerLevel;
		var summonerInfos = Alloy.createController('summonerInfos', {
		    id: id,
		    name: name,
		    profileIconId: profileIconId,
		    summonerLevel: summonerLevel
		});
		var boxInfos = Ti.UI.createView({});
		boxInfos.add(summonerInfos.getView());
		$.boxInfos.add(boxInfos);
	};
}
$.index.open();
