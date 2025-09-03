const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/",async(req, res)=>{
    res.json({
        msg : "Hello, World"
    });
});

app.listen(PORT, console.log(`Website is hosted on http://localhost:3000`));
