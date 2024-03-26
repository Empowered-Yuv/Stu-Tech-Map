class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        data,
        //errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = message
        this.success = false
        



        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }