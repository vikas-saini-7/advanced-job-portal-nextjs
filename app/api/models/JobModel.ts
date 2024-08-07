import mongoose, { Document, Schema } from "mongoose";

export interface IJob extends Document {
  company: {
    name: string;
    image: string;
  };
  job_title: string;
  job_type: string;
  job_work_type: string;
  job_location: string;
  salary_per_month: string;
  salary_per_year: string;
}

const jobSchema = new Schema<IJob>({
  job_title: { type: String, required: true },
  company: {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  job_work_type: { type: String, required: true },
  job_location: { type: String, required: true },
  job_type: { type: String, required: true },
  salary_per_month: { type: String },
  salary_per_year: { type: String },
});

const Job = mongoose.models.Job || mongoose.model<IJob>("Job", jobSchema);

export default Job;
