#!/usr/bin/env node

var program = require('commander');

var package = require('./package.json');
var phrases = require('./lib/phrases.js');

/**
 * Process the goodness all the way to the terminal!
 * @param {String|Array} noun The thing to get good or an array of things to get good
 */
function processNoun(noun) {
    if (Array.isArray(noun)) {
        for (var item in noun) {
            processNoun(noun[item]);
        }
    } else {
        var phrase = phrases.getPhrase(noun);

        if (program.oldEnglish) {
            phrase = phrases.getYeOldePhrase(noun);
        }
        
        console.log(phrase);
    }
}

program
    .version(package.version)
    .description(package.description)
    .usage('[options] <nouns ...>')
    .option('-o, --old-english', 'git gud in ye olde english')
    .parse(process.argv);

program.args.length && processNoun(program.args);
