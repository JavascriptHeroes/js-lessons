export default function(err, req, res, next) {
  if (err) {
    res.status(500).json({
      message: err.message
    });
  }

  next(err);
}
