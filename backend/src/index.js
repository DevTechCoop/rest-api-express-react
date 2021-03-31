require('dotenv').config();
const app = require('./app');
require('./datatbase');

async function main(){
   await app.listen(app.get('port'));
    console.log('Sever on :' , app.get('port'));
};

main();