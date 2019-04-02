module['exports'] = function simpleHttpRequest (hook) {
  var request = require('request');
  request.get('http://hook.io/examples/echo?foo=bar', function(err, res, body){
    if (err) {
      return hook.res.end(err.messsage);
    }
    hook.res.end(body);
  })
};
