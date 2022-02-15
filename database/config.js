//@ts-check
const mongoose = require ('mongoose');

const dbConnection = async () =>{
    try {
        await mongoose.connect( process.env.MONGODB_ATLAS,{
            //@ts-ignore
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        console.log('Database online');
    } catch ( error ) {
        console.log( error );
        throw new Error('Error al iniciar la base de datos')
    }
}

module.exports = {
    dbConnection
} 