// const NodeRSA = require('node-rsa');

// //const key = new NodeRSA({b:1024});
// let secret = "123";

// //var encryptedString = key.encrypt(secret,'base64');
// // console.log(encryptedString);

// // //SFkbieKNJSqhLf9N9wwH5QNwJNPY2UrnpF7dh2Z4+UJc4KebwIzt+rg8674w8Nwscy7GXUfOU6rHN9aRRzhk38qeL1PFWFberC96LzGRbFOrO5TY7FrwILaAqtoA7DvjTacy0PDNp0Quu9azuYfwHyNsTU1L5pfXj7Hcl5A730E=

// // var decryptedString = key.decrypt(encryptedString,'utf8');
// // console.log(decryptedString);

// const publicKey = '-----BEGIN PUBLIC KEY-----\n'+
// 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCR5C8vaIldUopLQqNXqI/3KAj8\n'+
// 'JNZ13hn1i4YNPygB9K1Qq1mr24j0HUIp7Df6JaUy42JQ84tsZGK5alzod57fujgO\n'+
// '0OHuxbABcE0ai9AV360scnKFGIAGjEY5Nf2d3VkHsm5NwiAyhGVGbQ/WyUe17rBe\n'+
// 'n3HnDgPcQ26YfNkz0QIDAQAB\n'+
// '-----END PUBLIC KEY-----';

// const privateKey = '-----BEGIN RSA PRIVATE KEY-----\n'+
// 'MIICXgIBAAKBgQCR5C8vaIldUopLQqNXqI/3KAj8JNZ13hn1i4YNPygB9K1Qq1mr\n'+
// '24j0HUIp7Df6JaUy42JQ84tsZGK5alzod57fujgO0OHuxbABcE0ai9AV360scnKF\n'+
// 'GIAGjEY5Nf2d3VkHsm5NwiAyhGVGbQ/WyUe17rBen3HnDgPcQ26YfNkz0QIDAQAB\n'+
// 'AoGBAI9CBFuHSSvMe2Q/wWm4afYG6BvAiJ8hQ1hsc2vakoypGO9X8yvg3XDosim8\n'+
// 'fZMzGC8KPWbEYCpFwPPVT/ouTGBkfyRwBrPDScKb6xQu8jDSNdfaRswfpvtQ2JEy\n'+
// 'Xs3awbk73w3HkZ5H8d7b/abWmSJsNkCGyhUQE7ymL4jt2cTJAkEAzlFTTy5N+zPY\n'+
// 'MA7maAczqUi+Frgg0VPxpeeKo9dUjQgMiToaGaKEFvFEXkcgopevyBTyRw6ixmwf\n'+
// '5DO90qPgnwJBALUF0BOBsnYU7rpaUdr2RgTQ3PI2jy7SjIr0uUy/2iFmydv5VC4G\n'+
// '1+FIqyWjupDSFmhSKVf8z12eo4SM/MZQZY8CQCYGqTMr1qWY/ZyF8oNz6FqoFJj9\n'+
// 'YNcUALLSRSRDeMrxk9XrBop5AJ115GL3+xTcnkJjUfA0y12E6i/WNYNQPwMCQQCu\n'+
// 'FY36BGNMPWsrWUqYyPejD/07DY76106DHz/H+ERclM4RNqBmtvwK0eiNBPyY4wDb\n'+
// 'iA/sZtpAzRuxkChSyuQvAkEAxyZlxvVtLJoeMJU7ODrqrQWcis6sQbAhciZ9nU1U\n'+
// '6Srhxk7qqZcda60/VyOH89mk2/wvUMA9DfRbbYdDrPTA0Q==\n'+
// '-----END RSA PRIVATE KEY-----';

// //let key_public = new NodeRSA(publicKey);
// //let key_private = new NodeRSA(privateKey);
// let key_public = new NodeRSA(publicKey);

// //var encryptedkey = key_public.encrypt(secret,'base64');
// var encryptedString = key_public.encrypt(secret,'base64');
// //var decryptedkey = key_private.decrypt('jJuhzkLshgPPxCx3twEC19BYDB3ZMB2JZq1egy/aEhBgVD7ZoBe9ZPffvcA/MV+mPRyH2sQUgicVjU6QgNq5EEExip9Zc576AKimRk9uRYZjB6DXnyyd+GmyO/CdrJRcjTFSz2cJ9bF8XYKCZeO4s5WrfbVblZZsupwbObK49EU=','utf8');

// //console.log(encryptedkey);
// console.log(encryptedString);
const verifyCode = (verificationCode) => {
    // Log the received verification code
    console.log('Received Verification Code:', verificationCode);

    // Check if the verification code is a valid alphanumeric string
    if (!/^[A-Z0-9]+$/.test(verificationCode)) {
        console.error('Invalid Verification Code:', verificationCode);
        return 'Invalid Verification Code';
    }

    // Perform your verification logic here if needed

    // For now, just return the verification code
    return verificationCode;
}

module.exports = {
    verifyCode,
};


