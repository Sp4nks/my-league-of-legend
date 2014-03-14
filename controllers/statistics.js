var args = arguments[0] || {};

var stats = args.stats;
var mode = args.mode;
var win = args.win;

var labelMode = Ti.UI.createLabel({
		text: 'Statistiques du mode '+mode,
		color: '#fff',
		top: 20,
		textAlign:'center',
		font: {
			fontWeight: 'bold',
			fontSize: 20
		},
		height:'auto'
	});
	$.statistics.add(labelMode);

if(stats.totalMinionKills || stats.totalChampionKills || stats.totalAssists){
	if(win) {
		var labelKills = Ti.UI.createLabel({
			text: 'Nombre de victoire :'+win,
			color: '#fff',
			top: 90,
			textAlign:'center',
			font: {
				fontSize: 18
			},
			height:'auto'
		});
		$.statistics.add(labelKills);
	}
	
	
	if(stats.totalMinionKills) {
		var labelKills = Ti.UI.createLabel({
			text: 'Nombre de champions tués :'+stats.totalChampionKills,
			color: '#fff',
			top: 120,
			textAlign:'center',
			font: {
				fontSize: 18
			},
			height:'auto'
		});
		$.statistics.add(labelKills);
	}
	
	if(stats.totalAssists) {
		var labelAssists = Ti.UI.createLabel({
			text: 'Nombre d\'assistances :'+stats.totalAssists,
			color: '#fff',
			top: 150,
			textAlign:'center',
			font: {
				fontSize: 18
			},
			height:'auto'
		});
		$.statistics.add(labelAssists);
	}
	if(stats.totalMinionKills) {
		var labelMinion = Ti.UI.createLabel({
			text: 'Nombre de sbires tués :'+stats.totalMinionKills,
			color: '#fff',
			top: 180,
			textAlign:'center',
			font: {
				fontSize: 18
			},
			height:'auto'
		});
		$.statistics.add(labelMinion);
	}
} else {
	var noGame = Ti.UI.createLabel({
		text: 'Vous n\'avez pas joué assez de parties pour établir des statistiques',
		color: '#fff',
		top: 85,
		textAlign:'center',
		font: {
			fontSize: 18
		},
		height:'auto'
	});
	$.statistics.add(noGame);
}
