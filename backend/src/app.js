import express from "express";
import cors from "cors";
import contactRoute from "./modules/contact/contact.route.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
)
app.use(express.json());
app.use("/api/v1/contact",contactRoute);

export default app;