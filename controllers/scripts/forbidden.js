module.exports = function (req, res){

  res.writeHead(403);
  res.write('FORBIDDEN 403');
  return res.end();
}
