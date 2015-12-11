var song = require('../models/song');

function songRoutes(app) {

  app.get('/song/edit', function(req, res) {
    res.render('edit');
  });

  app.get('/song/update', function(req, res) {
    if (req.query.verse1 !== undefined) {
      song.verse1 = req.query.verse1;
      song.verse2 = req.query.verse2;
      song.verse3 = req.query.verse3;
    }
    res.redirect('/');
  })

  app.get('/song/1', function(req, res) {
    res.render('song', {
      pageInfo: song.verse1,
      nextPage: '1/2',
    });
  });

  app.get('/song/1/2', function(req, res) {
    res.render('song', {
      pageInfo: song.verse2,
      nextPage: '2/3',
    });
  });

  app.get('/song/1/2/3', function(req, res) {
    res.render('song', {
      pageInfo: song.verse3,
      nextPage: '/song/1',
    });
  });
}

module.exports = songRoutes;

