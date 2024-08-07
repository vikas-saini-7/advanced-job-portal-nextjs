import mongoose, { Schema, Document } from "mongoose";

export interface IApplication extends Document {
  job: mongoose.Types.ObjectId;
}

const applicationSchema: Schema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    recent_role: {
      type: String,
      required: true,
    },
    recent_company: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model<IApplication>(
  "Application",
  applicationSchema
);

export default Application;
