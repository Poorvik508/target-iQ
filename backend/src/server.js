import express from "express"
import dontenv from "dotenv"
import { ENV } from "./lib/env.js";
import path from "path"
dontenv.config();
const app = express();
const __dirname = path.resolve();
app.get('/health', (req, res) => {
     res.status(200).json({ msg: "api is running" });
})
app.get("/books")
// make our app ready for production
if (ENV.NODE_ENV == "production")
{
     app.use(express.static(path.join(__dirname, "../frontend/dist")))
     app.get("/{*any}", (req, res) => {
          res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
     });

}
app.listen(ENV.PORT, () => {
     console.log("server is running ",ENV.PORT);
})
 