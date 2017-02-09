
var game = {
		winCount: 0,
		loseCount: 0,
		goalNum: null,
		userTotal: null,
		
		genWinNum: function(min, max){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},

		genCrystalNums: function(min, max){
			return Math.floor(Math.random() * (max - min + 1)) + min;
		},

		assignCrystalVals: function(){
		//assign value of each gem
			$('.gem').each(function(){
					$(this).attr('data', game.genCrystalNums(1, 12));
			});
		},

		initialize: function(){
			game.userTotal = 0;
			game.assignCrystalVals();
			
			//set the game winning number...
			game.goalNum = game.genWinNum(19, 120);
			 
			 //...and apply it to html
			$('.goalNum').html(game.goalNum);
		}
	};

game.initialize();

//sum userTotal guesses
$('.gem').on('click', function(){
	game.userTotal += Number($(this).attr('data'));

	//display the users total score
	$('.totalScore').html(game.userTotal);

	//what happens when win or lose...
	if(game.goalNum === game.userTotal){
		$('.winLossContainer').html('You Won!');
		game.winCount += 1;
		game.initialize()
		$('.wins').html('Wins: ' + game.winCount);
	} 
	else if (game.userTotal > game.goalNum){
		$('.winLossContainer').html('You Lost!');
		game.loseCount += 1;
		game.initialize()
		$('.losses').html('Losses: ' + game.loseCount);
	};
});