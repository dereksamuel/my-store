function logErrors(error, req, res, next) {
  console.error("[error]:", error);
  next(error);
}

function handleError(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

function handleBoomError(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  }

  next(error);
}

module.exports = {
  logErrors,
  handleError,
  handleBoomError
};
