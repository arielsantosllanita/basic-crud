const mongoose = require('mongoose');
// Import models
require('./course.model');
require('./user.model');

mongoose.connect('mongodb://localhost:27017/Course-Management', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false }, (err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
    }
});
