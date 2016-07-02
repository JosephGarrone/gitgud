var util = require('util');

// Normal phrases
var phrases = [
    "%s is now good.",
    "%s has been made to be good.",
    "%s has gitted good."
];

// Ye phrases frome thine timest pasteth
var yeOldPhrases = [
    "Ye good sir %s ist pronounced goode!",
    "Goode. %s ist very goode."
];

module.exports = exports = {
    /**
     * Get a phrase
     * @param {String} noun Name of the object that is getting good
     * @return {String} A good phrase
     */
    getPhrase: function(noun) {
        var random = Math.floor(phrases.length * Math.random());

        return util.format(phrases[random], noun);    
    },

    /**
     * Get a phrase
     * @param {String} noun Name of the object that is getting good ye olden way
     * @return {String} A goode phrase
     */
    getYeOldePhrase: function(noun) {
        var random = Math.floor(yeOldPhrases.length * Math.random());
        
        return util.format(yeOldPhrases[random], noun);
    }
}