const mongoose = require('mongoose');


const URI = process.env.DB_URI ? process.env.DB_URI : 'mongodb://127.0.0.1:27017/DbTest';
mongoose.connect(URI ,  {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true
    }
);
console.log(URI);
const connection = mongoose.connection;

connection.once('open', () => {
    
    console.log('Conectado a la BD');
});
