const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer'); // Add this line
const path = require('path');
const myModule = require('./module');
const ejs = require('ejs');

const app = express();
const port = process.env.port || 8000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//const publicPath = path.join(__dirname, '/new_test'); // Change 'public' to the actual folder containing your static files

//app.use(express.static(publicPath));

// Use multer for handling multipart/form-data
const upload = multer();
app.use(upload.array());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/verify-style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'verify-style.css'));
});

app.get('/verify-responsive.css', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'verify-responsive.css'));
});

app.get('/rd-logo.png', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'rd-logo.png'));
});

app.get('/', (req, res) => {
  res.render('index', { verificationResult: null });
});

app.post('/verify', (req, res) => {
  const { otp1, otp2, otp3, otp4, otp5, otp6, otp7, otp8} = req.body;
  const verificationCode = otp1 + otp2 + otp3 + otp4 + otp5 + otp6 + otp7 + otp8;
  console.log('Received OTPs:', otp1, otp2, otp3, otp4, otp5, otp6, otp7, otp8);

  // Pass the verificationCode to your module or perform any other action
  const result = myModule.verifyCode(verificationCode);

  // Render the result in your EJS template
  res.json({ verificationResult: result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
