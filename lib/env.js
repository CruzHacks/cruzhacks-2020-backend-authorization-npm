/*
https://github.com/auth0-samples/auth0-api-auth-samples
*/

var path = require('path');
var nconf = require('nconf');

nconf.env()
  .file({ file: path.join(__dirname, '../config.json') })
	.defaults({
		PORT: 7001
	});

module.exports = function(key) {
  return nconf.get(key);
};
