module.exports = function (face, server){

  face.on('line', line => {

    switch(line){

      case 'shutdown': server.close(); break;
      case 'init': server.listen(8080); break;
    }
  })
}
