const mongoose = require('mongoose');

const connectDb = async () => {

    try {
        const connect = await

            mongoose.connect(process.env.CONNECTION_STRING, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // Specify write concern with 'majority' mode
                writeConcern: {
                    w: 'majority',
                    j: true,
                    wtimeout: 1000
                },
            });
        // mongoose.connect(process.env.CONNECTION_STRING); 

        console.log('Connection Established', connect.connection.host, connect.connection.name);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }




};


module.exports = connectDb;