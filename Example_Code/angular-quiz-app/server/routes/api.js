"use strict";

const router = require('express').Router();
const spotify = require('../controller/spotify');

function isObject(item) {
  return (typeof item === "object" && !Array.isArray(item) && item !== null);
}

function createErrRes(err) {
  let error = isObject(err) ? err : { message: err };
  let statusCode = err && err.statusCode ? err.statusCode : 500;

  error.name = error.name || 'ApiError';
  error.message = error.message || 'Whoops, something went wrong. That\'s all we know :(';
  error.statusCode = error.statusCode || statusCode;

  return error;
}

router.get('/playlist/random', function(req, res) {
  /*
  * GET parameters allowed:
  * ----------------------
  * country, locale, limit, offset, timestamp
  */
  spotify.fetchFeaturedPlaylists(req.query)
  .then(d => spotify.getRandomEntry(d.playlists.items))
  .then(d => spotify.fetchPlaylistData(d.owner.id, d.id))
  .then(d => res.json(d))
  .catch(err => {
    let error = createErrRes(err);
    return res.status(error.statusCode).json({
      error: error
    });
  });
});

router.get('/playlist/search', function(req, res) {
  /*
  * GET parameters allowed:
  * ----------------------
  * query, country, limit, offset
  */
  spotify.fetchSearchedPlaylists(req.query)
  .then(d => spotify.getRandomEntry(d.playlists.items))
  .then(d => spotify.fetchPlaylistData(d.owner.id, d.id))
  .then(d => res.json(d))
  .catch(err => {
    let error = createErrRes(err);
    return res.status(error.statusCode).json({
      error: error
    });
  });
});

router.get('/playlist/data', function(req, res) {
  if (!req.query.userId || !req.query.playlistId) {
    let error = createErrRes({
      statusCode: 400,
      name: "ClientError",
      message: "userId and/or playlistId not provided."
    });
    return res.status(error.statusCode).json(error);
  }
  spotify.fetchPlaylistData(req.query.userId, req.query.playlistId)
  .then(d => res.json(d))
  .catch(err => {
    let error = createErrRes(err);
    return res.status(error.statusCode).json({
      error: error
    });
  });
});

module.exports = router;
