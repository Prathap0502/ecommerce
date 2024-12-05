const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.set('strictQuery', false); // Suppress the strictQuery deprecation warning
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((con) => {
        console.log(`MongoDB is connected to the host: ${con.connection.host}`);
    })
    .catch((err) => {
        console.error(`Database Connection Error: ${err.message}`);
        process.exit(1); // Exit process if the connection fails
    });
};

module.exports = connectDatabase;
