const ErrorResponse = require("../utils/error-response");

const errorHandler = (err, req, res, next) => {
    console.log(err);
    let error = { ...err };

    error.message = err.message;

    if (err.name === "CastError") {
        const message = "Resource not found";
        error = new ErrorResponse(message, 404);
    }

    if (err.code === 11000) {
        const message = "Duplicate field value entered";
        error = new ErrorResponse(message, 400);
    }

    if (error.name === "ValidationError") {
        const message = Object.values(err.errors)
            .map((error) => error.message)
            .join(", ");
        error = new ErrorResponse(message, 422);
    }

    if (err.name === "ZodError") {
        const message = Object.values(err.errors)
            .map((error) => `${error.path[0]} ${error.message}`)
            .join(", ");
        error = new ErrorResponse(message, 422);
    }

    if (error.name === "TokenExpiredError") {
        const message = "Invalid Token";
        error = new ErrorResponse(message, 404);
    }

    if (error === "jwt-unathorized") {
        const message = "Invalid Token";
        error = new ErrorResponse(message, 404);
    }

    res.status(error.statusCode || 500).json({
        error: error.message || "Server Error",
    });
};

module.exports = errorHandler;
