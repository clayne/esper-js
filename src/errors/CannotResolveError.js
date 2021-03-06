class CannotResolveError extends Error {
    constructor(element) {
        super(`Cannot resolve elements from ${element.path} - element cannot contain child elements.`);
        Error.captureStackTrace(this, CannotResolveError);
    }
}

module.exports = CannotResolveError;
