import express from "express"
import dontenv from "dotenv"
import { ENV } from "./lib/env.js";
dontenv.config();
const app = express();
app.get('/health', (req, res) => {
     res.status(200).json({ msg: "api is running" });
})
app.listen(ENV.PORT, () => {
     console.log("server is running ",ENV.PORT);
 })