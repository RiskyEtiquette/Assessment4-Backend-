const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getCompliments, createCompliment, putCompliment, deleteCompliment } = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/compliments", getCompliments);
app.get("/api/fortune", getFortune);
app.post("/api/compliment", createCompliment)
app.put("/api/compliment", putCompliment)
app.delete("/api/compliment", deleteCompliment)
app.listen(4000, () => console.log("Server running on 4000"));


