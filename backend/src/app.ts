import "dotenv/config";
import express from "express";
import cors from "cors";
import itemsRoutes from "./routes/itemsRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/items", itemsRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
