import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      trim: true,
      match: [/^\+?\d{7,15}$/, "Please enter a valid phone number"],
    },
    company: {
      type: String,
      trim: true,
    },
    videoCount: {
      type: Number,
      min: 0,
    },
    shootDate: {
      type: Date,
    },
    runningTime: {
      type: String, // could also store as Number (minutes) if you prefer
      trim: true,
    },
    targetAudience: {
      type: String,
      trim: true,
    },
    productionPurpose: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
    },
    uploadPlan: {
      type: String,
      trim: true,
    },
    referenceLinks: {
      type: String,
      trim: true,
    },
    consent: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
