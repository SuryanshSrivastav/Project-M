// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');
const cron = require('node-cron');
const path = require('path')

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Twilio Credentials (REPLACE with your own)
const accountSid = 'AC55e3041a512f7ee3a752e71ca3ece152';
const authToken = '53fde6254477bb656ce2d46a47645327';
const client = twilio(accountSid, authToken);

// Store scheduled jobs
const scheduledJobs = [];

// API to schedule reminders
app.post('/schedule-reminders', (req, res) => {
    const { phoneNumbers, medicineTimes } = req.body;

    if (!phoneNumbers || !medicineTimes) {
        return res.status(400).send('Missing phone numbers or medicine times.');
    }

    medicineTimes.forEach(time => {
        const [hour, minute] = time.split(':');

        const cronTime = `${minute} ${hour} * * *`; // every day at this time
   
        const job = cron.schedule(cronTime, () => {
            phoneNumbers.forEach(number => {
                client.messages.create({
                    body: `💊 Reminder: It's time to take your medicine - MediAddicts`,
                    messagingServiceSid: 'MG87494803acee180a5e643b9f4d781385',
                    to: "+91".concat(number)
                })
                .then(message => {
                
                    console.log(message.toJSON())
                    console.log(`Reminder sent to ${number}: ${message.sid}`)})
                .catch(error => console.error('Failed to send reminder:', error));
            });
        });

        scheduledJobs.push(job);
    });

    res.send('Reminders scheduled successfully!');
});

// Optional: Cancel all reminders
app.post('/cancel-reminders', (req, res) => {
    scheduledJobs.forEach(job => job.stop());
    scheduledJobs.length = 0;
    res.send('All scheduled reminders cancelled.');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'project4.html'))
})

app.listen(3000, () => console.log('✅ Server is running on http://localhost:3000'));
