const Nexmo = require('nexmo');
const nexmo = new Nexmo({
    apiKey: 'f6acd864',
    apiSecret: 'zFOlhav9tBwdtvTO',
});
const sendSMS = (phone) => {
    console.log(phone)
    const from = 'Vonage APIs';
    const to = phone ? phone : '917687800397';
    const text = 'Hello from Meghnad';
    nexmo.message.sendSms(from, to, text);
}
module.exports = {
    sendSMS
}