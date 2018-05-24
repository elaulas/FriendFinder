var friends = require('../data/friends.js');

module.exports = function (app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        var topMatch = {
            name: '',
            photo: '',
            difference: 200
        };
        
    
    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference = 0;

    for (i = 0; i < friends.length; i++) {
        totalDifference = 0;

    for (var e = 0; e < friends[i].scores[e]; e++) {
        totalDifference += Math.abs(parseInt(userScores[e] - parseInt(friends[i].scores[e])));
        
        if(totalDifference <= topMatch.difference) {

            topMatch.name = friends[i].name;
            topMatch.photo = friends[i].photo;
            topMatch.difference = totalDifference;
        }
    } 
    }
    friends.push(userData);
    res.json(topMatch);
    })

}