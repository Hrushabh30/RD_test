const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer"); // Add this line
const path = require("path");
const myModule = require("./module");
const hashVerificationCode = require("./hash_module");
const getEncryptedKey = require("./firebase");
const { renderFile } = require("ejs");

const app = express();
const port = process.env.port || 8000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("ejs", renderFile);

const publicPath = path.join(__dirname, '.'); // Change 'public' to the actual folder containing your static files

app.use(express.static(publicPath));

// Use multer for handling multipart/form-data
const upload = multer();
app.use(upload.array());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/verify-style.css", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "verify-style.css"));
});

app.get("/verify-responsive.css", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "verify-responsive.css"));
});

app.get("/rd-logo.png", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "rd-logo.png"));
});

app.get("/", (req, res) => {
  res.render("index", { verificationResult: null });
});

app.post("/verify", async (req, res) => {
  const { otp1, otp2, otp3, otp4, otp5, otp6, otp7, otp8 } = req.body;
  const verificationCode =
    otp1 + otp2 + otp3 + otp4 + otp5 + otp6 + otp7 + otp8;
  console.log("Received OTPs:", otp1, otp2, otp3, otp4, otp5, otp6, otp7, otp8);

  const hashedVerificationCode = hashVerificationCode(verificationCode);

  // Use the hashedVerificationCode for further processing or storage
  console.log("Hashed Verification Code:", hashedVerificationCode);

  const folderName = hashedVerificationCode;
  //const folderName = "123";

  // Get the encrypted key from Firebase Realtime Database
  //const encryptedKey = await getEncryptedKey(folderName);

  try {
    // Get the encrypted key from Firebase Realtime Database
    const encryptedKey = await getEncryptedKey(folderName);

    if (encryptedKey) {
      console.log("Encrypted Key from Firebase:", encryptedKey);

      // Decrypt and verify the key using your module
      const verificationResult = myModule(encryptedKey);

      if (verificationResult) {
        console.log("Verification Successful!");
        res.json({ verificationResult: "true", encryptedKey });
      } else {
        console.log("Verification Failed!");
        res.json({ verificationResult: "failure" });
      }
    } else {
      console.log("Encrypted Key not found in Firebase.");
      res.json({ verificationResult: "failure" });
    }
  } catch (error) {
    console.error("Error retrieving encrypted key:", error);
    res.json({ verificationResult: "failure" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
