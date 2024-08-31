// JAFhmiKKwQd94i51

const mongoose = require("mongoose");

const connectDB = async ()=>{
    try{
        const uri = process.env.MONGO_USER;

        await mongoose.connect(uri);
        console.log("Connection Successful to the Database");
        

    }catch(e){
        console.log("Database Connection is Failed",e.message);

        process.exit(1);
        
    }
};

module.exports = connectDB; 