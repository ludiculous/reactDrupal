const request = require('request');



function getBE(res){
	var options = { method: 'GET',
  url: 'http://localhost:8888/api/events',
  headers: {authorization: 'Basic cGNoZW40MTU6U3VwZXJsb25ncHch' } 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  res.send({data:body})

	});
}


module.exports = {
	getBE:getBE
}