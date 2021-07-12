const webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BA97H9g49uVwYsdN8Yqsw4vX53X65Zosr4bjC2XvdIZtvycf2KJkgRneDSt8jSVy38ZXZrotas7rfypF7Mcixj0",
    "privateKey": "tnJkp8gZiO5of0ITqIiVVTlrSwO_zxc6uW0yA-BMppc"
};
 
 
webPush.setVapidDetails(
    'mailto:novriarmeza@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
const pushSubscription = {
    "endpoint": " https://fcm.googleapis.com/fcm/send/fDGG8VwnlOQ:APA91bGPfU2EGwVJho3I8N0vXtHUUgdzyGz2ZGo4_Up0xIRjkVrkXobZlGXVjMlgRQjshfeijY99EemDnOIR79yLdcjsijz7A9oo-uHsvfBIYwqme5XhHxBqctgvLN59ZaIEwv-btMW8",
    "keys": {
        "p256dh": "BGNlag3CAQwRuS2J1/ckEaJK3b/8ooOJOqnpcWPy84BTkmOWOznp65eaL4zgbF1oaaDOvBW9u7myaE+JxOimdj8=",
        "auth": "Y4BSGqjhkri2RFOr0Z1LDg=="
    }
};
let payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
let options = {
    gcmAPIKey: '876206815303',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);