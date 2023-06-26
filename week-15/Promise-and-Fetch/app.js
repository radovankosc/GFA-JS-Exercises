import express from "express";

const app = express();

app.get("/data.json", (req, res) => {
  res.sendFile("C:\\Users\\simko\\OneDrive\\Desktop\\greenfox\\Karcoolka\\week-15\\Promise-and-Fetch\\some-data\\data.json");
})

app.listen(3000, () => {
  console.log("The server is up on port 3000.");
})