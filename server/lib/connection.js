const mongoose = require('mongoose');

const dbUri = process.env.DB_URI || 'mongodb://localhost:27017/dotcalendar';

mongoose.connect(dbUri);

mongoose.connection.on('connected', () => {
  console.log('Mongoose default conneciton open to ', dbUri);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose default connection has error: ', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection has been disconnected');
});


module.exports = mongoose.connection;