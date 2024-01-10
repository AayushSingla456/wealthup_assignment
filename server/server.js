const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB");
});

const captchaSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  used: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

const Captcha = mongoose.model("Captcha", captchaSchema);

app.use(cors());
app.use(bodyParser.json());

app.post("/generateCaptcha", async (req, res) => {
  const code = generateCaptchaCode();
  const captcha = new Captcha({ code });
  await captcha.save();

  setTimeout(async () => {
    await Captcha.findOneAndUpdate({ code }, { used: true });
  }, 60000);

  res.json({ code });
});

app.post("/verifyCaptcha", async (req, res) => {
  const { code } = req.body;

  const captcha = await Captcha.findOne({ code });

  if (!captcha) {
    return res.json({ error: "Invalid captcha code" });
  }

  if (captcha.used) {
    return res.json({ error: "This code has already been used" });
  }

  await Captcha.findOneAndUpdate({ code }, { used: true });

  res.json({ success: "Captcha code is valid" });
});

app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function generateCaptchaCode() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }
  return code;
}
