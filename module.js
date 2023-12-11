const NodeRSA = require('node-rsa');

const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n'+
'MIICXgIBAAKBgQCR5C8vaIldUopLQqNXqI/3KAj8JNZ13hn1i4YNPygB9K1Qq1mr\n'+
'24j0HUIp7Df6JaUy42JQ84tsZGK5alzod57fujgO0OHuxbABcE0ai9AV360scnKF\n'+
'GIAGjEY5Nf2d3VkHsm5NwiAyhGVGbQ/WyUe17rBen3HnDgPcQ26YfNkz0QIDAQAB\n'+
'AoGBAI9CBFuHSSvMe2Q/wWm4afYG6BvAiJ8hQ1hsc2vakoypGO9X8yvg3XDosim8\n'+
'fZMzGC8KPWbEYCpFwPPVT/ouTGBkfyRwBrPDScKb6xQu8jDSNdfaRswfpvtQ2JEy\n'+
'Xs3awbk73w3HkZ5H8d7b/abWmSJsNkCGyhUQE7ymL4jt2cTJAkEAzlFTTy5N+zPY\n'+
'MA7maAczqUi+Frgg0VPxpeeKo9dUjQgMiToaGaKEFvFEXkcgopevyBTyRw6ixmwf\n'+
'5DO90qPgnwJBALUF0BOBsnYU7rpaUdr2RgTQ3PI2jy7SjIr0uUy/2iFmydv5VC4G\n'+
'1+FIqyWjupDSFmhSKVf8z12eo4SM/MZQZY8CQCYGqTMr1qWY/ZyF8oNz6FqoFJj9\n'+
'YNcUALLSRSRDeMrxk9XrBop5AJ115GL3+xTcnkJjUfA0y12E6i/WNYNQPwMCQQCu\n'+
'FY36BGNMPWsrWUqYyPejD/07DY76106DHz/H+ERclM4RNqBmtvwK0eiNBPyY4wDb\n'+
'iA/sZtpAzRuxkChSyuQvAkEAxyZlxvVtLJoeMJU7ODrqrQWcis6sQbAhciZ9nU1U\n'+
'6Srhxk7qqZcda60/VyOH89mk2/wvUMA9DfRbbYdDrPTA0Q==\n'+
'-----END RSA PRIVATE KEY-----';

const key_private = new NodeRSA(privateKey);

function decryptAndVerify(encryptedKey) {
  try {
    const decryptedKey = key_private.decrypt(encryptedKey, 'utf8');
    console.log('Decrypted Key:', decryptedKey);

    // Add your verification logic here if needed

    // For now, just return true
    return true;
  } catch (error) {
    console.error('Decryption Failed:', error.message);
    return false;
  }
}

module.exports = decryptAndVerify;
