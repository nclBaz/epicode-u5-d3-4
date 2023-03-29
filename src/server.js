import Express from "express"
import cors from "cors"
import listEndpoints from "express-list-endpoints"
import { pgConnect } from "./db.js"

const server = Express()
const port = process.env.PORT || 3001

// **************************** MIDDLEWARES *******************************
server.use(cors())
server.use(Express.json())

// ****************************** ENDPOINTS *******************************

// *************************** ERROR HANDLERS *****************************

await pgConnect()

server.listen(port, () => {
  console.table(listEndpoints(server))
  console.log(`Server is running on port ${port}`)
})
