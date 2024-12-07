module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      } else {
        res.redirect('/login')
      }
    },
    ensureAuthCheck: function (req, res, next) {
      if (req.isAuthenticated()) {
        res.locals.isLoggedIn = true;
        return next()
      } else {
        res.locals.isLoggedIn = false;
        return next()
      }
    }
  }
  