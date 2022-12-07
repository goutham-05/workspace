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
    const { name, startTime, endTime } = req.query;

    const [seatingData, bookingList] = await Promise.all(['workspace', 'bookings'].map(async (key) => await db.collection(key).find({ workSpace: name }).toArray()));

    const seatingList = seatingData[0].seatingList;

    const filteredBookingList = bookingList?.filter((booking) => booking.startTime === startTime && booking.endTime === endTime);

    const filteredSeatingList = filteredBookingList?.length ? seatingList.map((seating) => ({
        ...seating,
        status: filteredBookingList.some((booking) => booking.ids.includes(seating.seatNo)) ? 'BOOKED' : 'AVAILABLE'
    })) : seatingList;

    res.send(filteredSeatingList);
});


app.post('/get-seatlist-by-time', async (req, res) => {
    const { name, startTime, endTime } = req.query;

    const [seatingData, bookingList] = await Promise.all(['workspace', 'bookings'].map(async (key) => await db.collection(key).find({ workSpace: name }).toArray()));

    const seatingList = seatingData[0].seatingList;

    const filteredBookingList = bookingList?.filter((booking) => booking.startTime === startTime && booking.endTime === endTime);

    const filteredSeatingList = filteredBookingList?.length ? seatingList.map((seating) => ({
        ...seating,
        status: filteredBookingList.some((booking) => booking.ids.includes(seating.seatNo)) ? 'BOOKED' : 'AVAILABLE'
    })) : seatingList;

    res.send(filteredSeatingList);
});



app.put('/update-workspace-by-name', async (req, res) => {
    const bookingInfo = req.body;
    bookingInfo.workSpace = 'freespace';

    const seatingData = await db.collection('workspace').find({ workSpace: 'freespace' }).toArray();
    const seatingList = seatingData[0].seatingList;

    const bookingList = await db.collection('bookings').find({ workSpace: 'freespace' }).toArray();

    const booking = new BookingModule(bookingInfo);
    if (booking) {
        booking.save(function (err) {
            if (err) {
                res.status(400).send('Unable to save details to database');
            } else {
                if (seatingList.length) {

                    const filteredBookingList = bookingList?.filter((booking) => booking.startTime === bookingInfo.startTime && booking.endTime === bookingInfo.endTime);

                    const filteredSeatingList = filteredBookingList?.length ? seatingList.map((seating) => ({
                        ...seating,
                        status: filteredBookingList.some((booking) => booking.ids.includes(seating.seatNo)) ? 'BOOKED' : 'AVAILABLE'
                    })) : seatingList;


                    res.send(filteredSeatingList);
                }
            }
        });
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});