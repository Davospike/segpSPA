module.exports = function redirectToHttps(req, res, next) {
    if (!/https/.test(req.protocol)) {
        return res.redirect("https://" + req.headers.host + req.url);
    }

    return next();
}
