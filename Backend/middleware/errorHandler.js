export default function errorHandler(err, req, res, next) {
    console.error(err.message);
    res.status(500).json(
        {
            message: "Something went wrong on the server"

        }
    );
}