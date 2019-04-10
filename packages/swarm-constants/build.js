const StyleDictionary = require('style-dictionary').extend(__dirname + '/config.json');
const fs = require('fs');
const _ = require('lodash');

console.log('Build started...');
console.log('\n==============================================');


// DECLARE CUSTOM FORMATS VIA CUSTOM TEMPLATE FILES (AND ENGINES)
// These formatting functions are using the Lodash "template" syntax

StyleDictionary.registerFormat({
  name: 'custom/format/classnames',
  formatter: _.template(fs.readFileSync(__dirname + '/templates/classnames.template'))
});


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionary.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');
