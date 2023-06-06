// Imports the Google Cloud client library
// const { Storage } = require("@google-cloud/storage");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
