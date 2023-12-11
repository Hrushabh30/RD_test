const crypto = require('crypto');

function hashVerificationCode(verificationCode) {
  // Assuming verificationCode is a string
  return crypto.createHash('sha256').update(verificationCode).digest('hex');
}

module.exports = hashVerificationCode;