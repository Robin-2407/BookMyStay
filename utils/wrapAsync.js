const wrapAsync = (fn) => {
    return function (req, res, next) {
        fn(req, res, next).catch(next); // Catch any async errors and pass to Express's error handler
    };
};

module.exports = wrapAsync;
