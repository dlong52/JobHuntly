const userRouter = require("./UserRouter")
const authRouter = require("./AuthRouter")
const conversationRouter = require("./ConversationRouter")
const categoryRouter = require("./CategoryRouter")
// const messageRouter = require("./MessageRouter")
const routes = (app) => {
    app.use('/v1/api/auth',authRouter)
    app.use('/v1/api/user',userRouter)
    app.use('/v1/api/conversation',conversationRouter)
    app.use('/v1/api/category',categoryRouter)
    // app.use('/v1/api/message',messageRouter)
}
module.exports = routes  