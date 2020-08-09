const controllers = require('./controllers/registered.js');

module.exports = (req, res) => {

  const clientAddress = req.connection.remoteAddress.substr(7);

  console.log('\033[0;35m[CLIENT REQUEST]\033[0;0m: \033[0;34m'+req.method+' '+req.url+'\033[0;32m client address \033[0;34m'+clientAddress);

  if(clientAddress.includes(172.18)){
  
    switch(req.url){

      case '/': controllers.page(req, res); break;
      case '/main/style': controllers.style(req, res); break;
      case '/main/script': controllers.main(req, res); break;
      case '/api/gmaps': controllers.gmaps(req, res); break;
      case '/api/lamps': controllers.lmaps(req, res); break;
      case '/post/thanks': controllers.bodyParse(req, res); break;
    }
  }
  else{

    return req.connection.end()
  }
}