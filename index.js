const express = require('express')
const app = express()
var bodyParser = require('body-parser');
const fs = require('fs')
const { sendEmail } = require('./sendMail.js')
const { sendSMS } = require('./senSMS.js')



app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.get('/', function (req, res) {
    var html = '<form action="/" method="post">' +
        'Name: ' +
        '<input type="text" name="name" placeholder="" />' +
        '<br>' +
        'Email: ' +
        '<input type="text" name="email" placeholder="" />' +
        '<br>' +
        'Phone No: ' +
        '<input type="text" name="phoneNo" placeholder="" />' +
        '<br>' +
        'Message: ' +
        '<input type="text" name="message" placeholder="" />' +
        '<br><br>' +
        '<button type="submit">Submit</button>' +
        '</form>';

    res.send(html);
})

app.post('/', function (req, res) {
    var data = req.body;
    console.log(data)
    fs.writeFile('data.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('File with data created');
    });

    sendEmail(data.email)
    sendSMS(data.phoneNo)
    var html = 'Data:<br>' +
        JSON.stringify(data) +
        '<br><a href="/">GO BACK</a>';
    res.send(html);
});
function sendMessage() {
    try {
        const nexmo = new Nexmo({
            apiKey: 'f6acd864',
            apiSecret: 'zFOlhav9tBwdtvTO',
        });
        const from = 'Vonage APIs';
        const to = '917687800397';
        const text = 'Hello from Meghnad';

        nexmo.message.sendSms(from, to, text);
    } catch (e) { console.log(e) }
}

app.listen(3000)