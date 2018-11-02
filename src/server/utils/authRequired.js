export function authRequired(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}

export function authApiRequired(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).send("401 Unauthorized");
}
