import connectDB from "./db/index.js";
import {app} from './app.js'



import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection failes !!!", err);
})










// (async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     }catch(error){
//         console.log("ERROR: ", error)
//         throw err
//     }
// })();
