const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('YESSSS')
});

app.listen(4000, () => {
    console.log('Server running at port 4000');
});
