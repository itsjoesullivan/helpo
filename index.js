var template = require('./template.html');
var domify = require('domify');
var _ = require('underscore');

var Helpo = module.exports = function(instructions, context) {
  context = context || document.body || window;
  var k = require('k')(context);
  var el;
  k('shift + /', function(e) {
    if(el) {
      el.parentNode.removeChild(el);
      return el = false;
    }
    if(e.target !== context) {
      return;
    }
    el = domify(template);
    document.body.appendChild(el);
    _(instructions).each(function(instruction) {
      var p = document.createElement('p');
      var inner = instruction.description + ': ';
      var shortcut = instruction.shortcut.split(' ');
      _(shortcut).each(function(key) {
        inner += '<span class="shortcut">' +
          key + 
          '</span>';
      });
      p.innerHTML = inner;
      el.appendChild(p);
    });
  });
  require('k')(document.body)('escape', function(e) {
    if (el) {
      el.parentNode.removeChild(el);
      el = false;
    }
  });
};
