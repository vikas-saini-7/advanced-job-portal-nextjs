import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Job, { IJob }  from '@/app/api/models/JobModel';


export async function GET(){
    await connectToDatabase();
    const jobs = await Job.find();
    return NextResponse.json(jobs);
}

export async function POST(req: NextRequest){
    await connectToDatabase();
    const jobData : IJob = await req.json();

    // Validate required fields
    if (!jobData.company || !jobData.job_title || !jobData.job_type || !jobData.job_work_type || !jobData.job_location) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newJob = new Job(jobData);
    await newJob.save();
    return NextResponse.json(newJob);
}