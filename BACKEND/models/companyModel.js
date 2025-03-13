import mongoose from "mongoose";

const companyChema = new mongoose.Schema({

    name: { type: String, require: true },

    description: { type: String },

    website: { type: String },

    location: { tyoe: String },

    logo: { type: String },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true }
}, { timestamps: true })

export const Company = mongoose.model('Company', companyChema)