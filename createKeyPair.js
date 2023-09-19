const crypto = require('crypto')
const fs = require('fs')

function genPairKey() {
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,

        publicKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs1',
            format: 'pem'
        }
    });
    console.log(keyPair.publicKey);
    console.log(keyPair.privateKey);
    fs.writeFileSync(__dirname + '/id_rsa_pub.pem', keyPair.publicKey)
    fs.writeFileSync(__dirname + '/id_rsa_priv.pem', keyPair.privateKey)

}
genPairKey();
