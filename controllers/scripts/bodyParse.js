module.exports = function (req, res){

  let rawData = '';

  req.on('data', data => rawData += data);

  req.on('end', () => {

    console.log(rawData);
    res.end();
  });
}
