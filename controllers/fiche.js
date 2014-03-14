var args = arguments[0] || {};
var summonerID = args.summonerID;  
var data = [];  

var url = Alloy.Globals.urlApi12+'stats/by-summoner/'+summonerID+'/summary?api_key='+Alloy.Globals.apiKey;
var sendit = Ti.Network.createHTTPClient({  
  
	onerror : function(e) { 
  		Ti.API.debug(e.error);  
  		alert('There was an error during the connection');
  	},  
 	timeout : 1000,  
});  

sendit.open('GET', url);  
sendit.send();   
  
sendit.onload = function() {    
 	var json = JSON.parse(this.responseText);   
 	if (json.length === 0) {  
  		$.table.headerTitle = "The database row is empty";  
 	}
 	var playerStats = json.playerStatSummaries;  
 	for ( var i = 0, iLen = playerStats.length; i < iLen; i++) {  
  		data.push(Alloy.createController('row', {  
			name : playerStats[i].playerStatSummaryType,
			wins : playerStats[i].wins,
			stats : playerStats[i],
			i : i  
  		}).getView()); 
  	}  
  
	$.table.setData(data);  
};  
  
$.fiche.open();