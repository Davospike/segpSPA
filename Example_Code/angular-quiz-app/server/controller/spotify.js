"use strict";

const https = require('https');
const SpotifyWebApi = require('spotify-web-api-node');

class Spotify {
  constructor() {
    this.clientId = process.env.SPOTIFY_CLIENT_ID;
    this.clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    this.redirectUri = process.env.SPOTIFY_REDIRECT_URI;
    this.accessToken = null;

    this.api = new SpotifyWebApi({
      clientId: this.clientId,
      clientSecret: this.clientSecret,
      redirectUri: this.redirectUri
    });
  }

  getRandomEntry(arr) {
    if (!Array.isArray(arr)) {
      return false;
    }
    let len = arr.length;
    let pos = Math.floor(Math.random() * len);
    return arr[pos];
  }

  createQueryString(obj) {
    if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
      let qs = [];
      for (let key in obj) {
        qs.push(key + '=' + obj[key]);
      }
      return qs.join('&');
    }
    return false;
  }

  isTokenValid() {
    let tokenTo = this.tokenTimeout || Date.now() - 3600;
    let d = new Date();
    let to = new Date(tokenTo);
    return to > d;
  }

  fetchToken() {
    return new Promise((resolve, reject) => {
      if (this.accessToken === null || !this.isTokenValid()) {
        this.api.clientCredentialsGrant()
        .then(d => {
          this.accessToken = d.body['access_token'];
          this.tokenTimeout = Date.now() + 3500;      // Initially keep 100ms buffer before timeout
          this.api.setAccessToken(d.body['access_token']);
          resolve(d.body['access_token']);
        })
        .catch(e => reject('Error while fetching access token: ' + e));
      } else {
        resolve(this.accessToken);
      }
    });
  }

  fetchPlaylistData(user, id) {
    return new Promise((resolve, reject) => {
      if (!user || !id) {
        reject('Necessary data missing, User: ' + user + ', Playlist: ' + id);
      }
      this.fetchToken()
      .then(d => this.api.getPlaylist(user, id))
      .then(d => resolve(d.body))
      .catch(e => reject('Error while fetching playlist data: ' + e));
    });
  }

  fetchFeaturedPlaylists(obj) {
    obj = obj || {};
    obj.country = !obj.country ? 'US' : obj.country.toUpperCase();
    obj.locale = obj.locale || 'en_US';
    obj.limit = obj.limit || 20;
    obj.offset = obj.offset || 0;
    obj.timestamp = obj.timestamp || new Date();
    obj.timestamp = new Date(obj.timestamp).toISOString();

    return new Promise((resolve, reject) => {
      this.fetchToken()
      .then(d => this.api.getFeaturedPlaylists({
          country: obj.country,
          locale: obj.locale,
          limit: obj.limit,
          offset: obj.offset,
          timestamp: obj.timestamp
        })
      )
      .then(d => resolve(d.body))
      .catch(e => reject('Error while fetching playlist: ' + e));
    });
  }

  fetchSearchedPlaylists(obj) {
    return new Promise((resolve, reject) => {
      if (!obj || !obj.query ) {
        reject('No search query given...');
      } else {
        obj.q = encodeURIComponent(obj.query);
        obj.limit = obj.limit || 20;
        obj.offset = obj.offset || 0;
        obj.type = 'playlist';
        obj.market = !obj.country ? 'US' : obj.country.toUpperCase();

        delete(obj.query);
        delete(obj.country);

        let qs = this.createQueryString(obj);
        if (!qs) {
          reject('No valid query given...');
        }

        this.fetchToken()
        .then(d => {
          let opts = {
            protocol: 'https:',
            hostname: 'api.spotify.com',
            path: '/v1/search?' + qs,
            headers: {
              'Authorization' : 'Bearer ' + this.accessToken
            }
          }
          let xhr = https.get(opts, res => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => resolve(JSON.parse(data)));
          });
          xhr.on('error', e => reject('Error while retrieving search data: ' + e));
        })
        .catch(e => reject(e));
      }
    });
  }


}

module.exports = new Spotify();
