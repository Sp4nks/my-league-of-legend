var args = arguments[0] || {};  
var mode = args.name;
var countWin = args.wins;
var stats = args.stats;
var i = args.i;

// Change display name
switch (mode)
{
	case 'AramUnranked5x5': var mode = "ARAM";
		break;
	case 'CoopVsAI': var mode = "Coop vs IA";
    	break;
	case 'OdinUnranked': var mode = "Dominion";
    	break;
	case 'RankedPremade3x3': var mode = "Equipe 3v3 classée";
    	break;
	case 'RankedPremade5x5': var mode = "Equipe 5v5 classée";
		break;
  	case 'RankedSolo5x5': var mode = "Solo/duo 5v5 classée";
		break;
	case 'RankedTeam3x3': var mode = "Solo/duo 3v3 classée";
        break;
	case 'RankedTeam5x5': var mode = "Equipe 5v5 classée";
    	break;
	case 'SummonersRift6x6': var mode = "Sextuplé";
    	break;
	case 'Unranked3x3': var mode = "Normal 3v3";
    	break;
  default:  var mode = "Normal 5v5";
}

var label = Ti.UI.createLabel({
	text: mode,
	color: '#fff',
	textAlign:'center',
	font: {
		fontWeight: 'bold',
		fontSize: 18
	},
	height:'auto',
	left:30,
	data: stats.aggregatedStats,
	countWin: countWin
});
$.tableRow.addEventListener('click', function() {
	var statistics = Alloy.createController('statistics', {
	    stats: label.data,
	    mode: label.text,
	    win: label.countWin
	}).getView();
	statistics.open();
});
$.tableRow.add(label);