const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const pixabayAPIKey = process.env.PIXABAY_API_KEY;

const app = express();
app.use(cors());

app.use(express.static("build"));

app.use("/api/", async (req, res) => {
  const url = `https://pixabay.com/api`;
  const options = {
    params: {
      ...req.query,
      key: pixabayAPIKey,
    },
  };
  const response = await axios.get(url, options);
  res.send(response.data);
});

// Catch-all route
app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "public/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
