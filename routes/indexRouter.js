const userRouter = require("./userRouter");
const clientRouter = require("./clientRouter");

module.exports = app => {
    app.use("/admin", userRouter);

    app.use("/", clientRouter);
}