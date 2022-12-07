const hostname = '127.0.0.1';
const port = 3001;
const mongoose = require('mongoose');

const BookingModule = require('./models/booking');

// Set up default mongoose connection
const mongoDB = 'mongodb+srv://goutham1494:Welcome123@cluster0.7vkr26o.mongodb.net/freespace';

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

    const seatingInfo = req.body;

    const startTime = seatingInfo.startTime;

    const endTime = seatingInfo.endTime;

    const workspaceName = req.params.name;

    const seatingData = await db.collection('workspace').find({ name: workspaceName }).toArray();
    const seatingList = seatingData[0].seatingList;

    const bookingList = await db.collection('bookings').find().toArray();
    console.log('Koca: bookingList ', bookingList);

    const filteredBookingList = bookingList?.filter((booking) => booking.startTime === '1:00' && booking.endTime === '15');

    const filteredSeatingList = filteredBookingList?.length ? seatingList.map((seating) => filteredBookingList.map((booking) => ({
        ...seating,
        status: booking.ids.includes(seating.seatNo) ? 'BOOKED' : 'AVAILABLE'
    }))) : seatingList;

    res.send(filteredSeatingList.flat());
});


app.post('/get-seatlist-by-time', async (req, res) => {

    // const { seatingInfo, startTime, endTime, workspaceName } = req.body;

    const seatingInfo = req.body;

    const startTime = seatingInfo.startTime;

    const endTime = seatingInfo.endTime;

    const workspaceName = seatingInfo.workSpace;

    const seatingData = await db.collection('workspace').find({ name: workspaceName }).toArray();
    const seatingList = seatingData[0];

    const bookingData = await db.collection('bookings').find({ name: workspaceName }).toArray();

    const bookingList = bookingData[0];

    const filteredBookingList = bookingList.filter((booking) => booking.startTime === startTime && booking.endTime === endTime);
    console.log('Koca: filteredBookingList ', filteredBookingList);

    const filteredSeatingList = filteredBookingList?.length ? seatingList.map((seating) => filteredBookingList.map((booking) => ({
        ...seating,
        status: booking.ids.includes(seating.seatNo) ? 'BOOKED' : 'AVAILABLE'
    }))) : seatingList;

    res.send(filteredSeatingList);
});



app.put('/update-workspace-by-name', async (req, res) => {

    const bookingInfo = req.body;
    bookingInfo.workSpace = 'freespace';
    console.log('Koca: bookingInfo ', bookingInfo);

    const seatingData = await db.collection('workspace').find({ name: 'freespace' }).toArray();
    const seatingList = seatingData[0].seatingList;

    const bookingData = await db.collection('bookings').find({ name: 'freespace' }).toArray();

    const bookingList = bookingData[0];

    const booking = new BookingModule(bookingInfo);
    if (booking) {
        booking.save(function (err) {
            if (err) {
                res.status(400).send('Unable to save shark to database');
            } else {
                if (seatingList.length) {

                    const filteredBookingList = bookingList?.filter((booking) => booking.startTime === startTime && booking.endTime === endTime);

                    const filteredSeatingList = filteredBookingList?.length ? seatingList.map((seating) => filteredBookingList.map((booking) => ({
                        ...seating,
                        status: booking.ids.includes(seating.seatNo) ? 'BOOKED' : 'AVAILABLE'
                    }))) : seatingList;

                    res.send(filteredSeatingList);

                }
            }
        });
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});