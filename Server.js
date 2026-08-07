import express from "express";
import config from "./config/config.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
// --- middleware (order matters) ---

app.use(express.json()); // read JSON bodies

app.use(logger); // log every request

// --- routes ---
app.use("/api/students", studentRoutes);

// --- error handler (always last) ---

app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`${config.appName} running on http://localhost:${config.port}`);
});
