const fs = require('fs');

module.exports = function (req, res){

  fs.readFile(__root + '/public/index.html', (err, data) => {
      
    if(err){

      res.writeHead(404);
      res.write('BAD REQUEST 404: Not found');
    }
    else{

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
    }

    return res.end();
  })
}
