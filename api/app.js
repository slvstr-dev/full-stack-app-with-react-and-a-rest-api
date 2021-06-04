// load modules
const express = require("express");
const morgan = require("morgan");
const sequelize = require("./models").sequelize;
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const cors = require("cors");

// variable to enable global error logging
const enableGlobalErrorLogging =
    process.env.ENABLE_GLOBAL_ERROR_LOGGING === "true";

// create the Express app
const app = express();

// enable all CORS requests
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

// setup request body JSON parsing.
app.use(express.json());

// setup morgan which gives us http request logging
app.use(morgan("dev"));

// test connection to the database
(async () => {
    try {
        await sequelize.authenticate();

        console.log("Connection to the database successful!");
    } catch (error) {
        console.error("Error connecting to the database: ", error);
    }
})();

// setup routes
app.use("/", indexRouter);
app.use("/api", apiRouter);

// send 404 if no other route matched
app.use((req, res) => {
    res.status(404).json({
        message: "Route Not Found",
    });
});

// setup a global error handler
app.use((err, req, res, next) => {
    if (enableGlobalErrorLogging) {
        console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
    }

    res.status(err.status || 500).json({
        message: err.message,
        error: {},
    });
});

// set our port
app.set("port", process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get("port"), () => {
    console.log(`Express server is listening on port ${server.address().port}`);
});
