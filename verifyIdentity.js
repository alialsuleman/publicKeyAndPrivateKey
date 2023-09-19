const crypto = require('crypto');
const fs = require('fs');
const encrypt = require('./encrypt');
const decrypt = require('./decrypt');


const receivedData = require('./signMesssage').packageOfDataToSend;

const hash = crypto.createHash(receivedData.algorithm);

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

const decryptedMessage = decrypt.decryptWithPublicKey(publicKey, receivedData.signedAndEncryptedData);
const decryptedMessageHex = decryptedMessage.toString();

const hashOfOriginal = hash.update(JSON.stringify(receivedData.originalData));
const hashOfOriginalHex = hash.digest('hex');


if (hashOfOriginalHex === decryptedMessageHex) {
    console.log('Success! the data not been tampered with and the sender is valid .')
}
else {
    console.log('uh no ... Someone is trying to manipulate the data ')
}