import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', require: true },

    application: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },

    status: { type: String, enum: ['pending', 'eccepted', 'rejected'], default: 'pending' }
}, { timestamps: true })

export const Application = mongoose.model('Application', applicationSchema)