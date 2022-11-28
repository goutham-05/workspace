const hostname = '127.0.0.1';
const port = 3001;
const mongoose = require('mongoose');

const BookingModule = require('./models/booking');

// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/freespace';

mongoose.connect(mongoDB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
// Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const express = require('express')
const app = express();

var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get(`/get-workspace-by-name/:name`, async (req, res) => {
    const workspaceName = req.params.name;

    const data = await db.collection('workspace').find({ name: workspaceName }).toArray();
    res.send(data[0]);
});

app.put('/update-workspace-by-name', async (req, res) => {
    const bookingInfo = req.body;
    const workspaceData = await db.collection('workspace').find({ name: 'freespace' }).toArray();

    const booking = new BookingModule(req.body);
    if (booking) {
        booking.save(function (err) {
            if (err) {
                res.status(400).send('Unable to save shark to database');
            } else {
                if (workspaceData.length) {
                    const mappedData = workspaceData[0].seatingList.map((data) => {
                        if (bookingInfo.ids.includes(data.seatNo)) {
                            return {
                                ...data,
                                status: data.status === 'BOOKED' ? 'AVAILABLE' : 'BOOKED'
                            }
                        } else {
                            return data
                        }
                    });

                    db.collection('workspace').findOneAndUpdate({ _id: workspaceData[0]._id }, {
                        $set: {
                            seatingList: mappedData
                        }
                    }, { new: true, upsert: false, remove: {}, fields: {} }, function (err, updatedProfile) {
                        if (err) {
                            res.send(err);
                        } else {
                            console.log(updatedProfile);
                            res.send(updatedProfile);
                        }
                    });
                }
            }
        });
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});