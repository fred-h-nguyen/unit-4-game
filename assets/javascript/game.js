$(document).ready(function () {
    //computer chooses a random number between 19 and 120 to match
    var targetNumb = 0;
    var gemA = 0;
    var gemB = 0;
    var gemC = 0;
    var gemD = 0;
    var gemScore = 0;
    var wins = 0;
    var losses = 0;

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    };

    function winLoss() {
        if (gemScore === targetNumb) {
            wins++;
            $('#winloss').text('You Win!');
            $('#wins').text(wins);
            start();
        } else {
            losses++;
            $('#winloss').text('You Lose!');
            $('#losses').text(losses);
            start();
        }
    }



    //on start
    var start = function () {
        targetNumb = getRandomIntInclusive(19, 120);
        $('#random-number').text(targetNumb);
        gemA = getRandomIntInclusive(1, 12);
        gemB = getRandomIntInclusive(1, 12);
        gemC = getRandomIntInclusive(1, 12);
        gemD = getRandomIntInclusive(1, 12);
        gemScore = 0;
        $('#gemnum').text(gemScore);
    }

    start();
    //console.log(targetNumb);

    $('#gem1').on('click', function () {
        if (gemScore < targetNumb) {
            gemScore = gemScore + gemA;
            $('#gemnum').text(gemScore);
            //console.log(gemScore);
        } else {
            winLoss();
           // console.log(wins);
            //console.log(losses);
        }

    });
    $('#gem2').on('click', function () {
        if (gemScore < targetNumb) {
            gemScore = gemScore + gemB;
            $('#gemnum').text(gemScore);
        } else {
            winLoss();
        }
    });
    $('#gem3').on('click', function () {
        if (gemScore < targetNumb) {
            gemScore = gemScore + gemC;
            $('#gemnum').text(gemScore);
        } else {
            winLoss();
        }
    });
    $('#gem4').on('click', function () {
        if (gemScore < targetNumb) {
            gemScore = gemScore + gemD;
            $('#gemnum').text(gemScore);
        } else {
            winLoss();
        }
    });
});
    //computer randomly generates a number between 1-12 for each gem

    //onclick add value of the gem to gemnum

    //if gem num > the computer number YOU LOSE

    //if gem num = the computer number YOU WIN

    //clear all variables and re generate randomnumbers.

