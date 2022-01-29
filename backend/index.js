const express = require('express');
const app = express();
const port = 3007;
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}

const channelSchema = new mongoose.Schema({
    name: String
});
const Channel = mongoose.model('Channel', channelSchema);

const general = new Channel({ name: 'General' });

general.save();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

