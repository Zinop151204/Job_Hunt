import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongoDB kết nối thành công')
    } catch (error) {
        console.log("monggo kết nối lỗi:" + error)
    }
}

export default connectDB;