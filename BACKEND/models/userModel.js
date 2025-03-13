import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    fullName: { type: String, require: true },

    email: { type: tring, require: true, unique: true },

    phone: { type: Number, require: true, },

    role: { type: String, enum: ['student, recruiter'], require: true },

    profile: {
        bio: { type: String }, skills: [{ type: String }],
        resume: { type: String },
        resumeOrriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
        profilePhoto: { type: String, default: "" }
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)