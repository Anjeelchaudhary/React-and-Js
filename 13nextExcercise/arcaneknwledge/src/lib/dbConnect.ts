import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection : ConnectionObject = {}

// async function dbconnect() {} normally in node
//here dbconnect does 1 promish ani void means in typeScript ki kux vi data ai sekata mikin parwa nai ho

async function dbConnect() : Promise<void>  {
    if(connection.isConnected) {
        console.log("database is already connected");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI || '',{})

        //e nai karbo ta fe chali bas ConnectionObject me isconnected me number return karek lak kil ho e
        connection.isConnected =  db.connections[0].readyState
        //db.connections[0] ka ho herna 
        console.log(db.connections[0]);
        console.log("Db Connected Successfully");

    } catch (error) {
        console.log("Db Connection failed",error);
        process.exit(1)
    }
}

export default dbConnect;