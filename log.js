var fs = require('fs');
var program = require('commander');
var tern = require('tern');
var u = require('underscore');

var message = function() {
  console.error('Hello');
  fs.readFileSync("node_modules/tern/defs/ecma5.json", "utf8");
  program.commandHelp();
  var serv = new tern.Server({});
  u.uniq([5, 3, 5, 5, 3, 1]);
}
